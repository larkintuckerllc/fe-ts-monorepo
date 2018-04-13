const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin');

const OUTPUT_PATH = 'lib';
module.exports = (env) => {
  const plugins = [];
  if (env.NODE_ENV === 'production') {
    plugins.push(new CleanWebpackPlugin([OUTPUT_PATH]));
  }
  return ({
    entry: {
      Hello: './src/Hello/Hello.tsx',
      HelloPage: './src/Hello/HelloPage.tsx',
    },
    output: {
      path: path.resolve(__dirname, OUTPUT_PATH),
      filename: '[name].js',
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [
        {
          test: /\.(tsx?)$/,
          enforce: 'pre',
          exclude: /node_modules/,
          loader: 'tslint-loader',
          options: {
            failOnHint: true,
          },
        },
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
                localIdentName: env.NODE_ENV === 'production'
                  ? '[hash:base64]'
                  : '[name]__[local]__[hash:base64:5]',
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
      'catalog',
      'react',
      /antd\/.*/,
    ],
    plugins,
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx'],
      symlinks: false,
    },
  });
};
