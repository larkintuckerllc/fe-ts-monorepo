const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = {
  entry: {
    Hello: './src/Hello/Hello.tsx',
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
                libraryDirectory: 'lib',
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
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              importLoaders: 2,
              modules: true,
              namedExport: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'less-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
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
