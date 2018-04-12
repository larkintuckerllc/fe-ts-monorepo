const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = {
  entry: {
    Hello: './src/Hello.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            getCustomTransformers: () => ({
              before: [tsImportPluginFactory({
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true,
              })],
            }),
            onlyCompileBundledFiles: true,
          },
        },
      },
      {
        test: /node_modules\/.*\.(css|less)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'less-loader',
          },
        ],
      },
    ],
  },
  externals: [
    'react',
    /antd\/.*/,
  ],
  plugins: [
    new CleanWebpackPlugin(['lib']),
  ],
};
