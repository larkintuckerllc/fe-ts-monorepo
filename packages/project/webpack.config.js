const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const lessModifyVars = require('./less-modify-vars');

module.exports = (env) => {
  const plugins = [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: 'public/favicon.ico' },
    ]),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ];
  if (env.analyze) plugins.push(new BundleAnalyzerPlugin());
  return ({
    devServer: {
      contentBase: './dist',
    },
    devtool: env.NODE_ENV === 'production' ? 'source-map' : 'cheap-eval-source-map',
    entry: './src/index.tsx',
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
          test: /\.(tsx?)$/,
          exclude: /node_modules/,
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
        {
          test: /node_modules\/.*\.(css|less)$/,
          use: [
            {
              loader: env.NODE_ENV === 'production' ?
                MiniCssExtractPlugin.loader :
                'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true,
              },
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: true,
                modifyVars: lessModifyVars,
              },
            },
          ],
        },
        {
          test: /\.(css|less)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: env.NODE_ENV === 'production' ?
                MiniCssExtractPlugin.loader :
                'style-loader',
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
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: true,
                modifyVars: lessModifyVars,
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      ],
    },
    output: {
      filename: env.NODE_ENV === 'production' ? '[name].[chunkhash].bundle.js' : '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins,
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx'],
      alias: {
        APIS: path.resolve(__dirname, 'src/apis/'),
        COMPONENTS: path.resolve(__dirname, 'src/components/'),
        DUCKS: path.resolve(__dirname, 'src/ducks/'),
        STORE: path.resolve(__dirname, 'src/store/'),
      },
    },
  });
};
