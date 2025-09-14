const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
new CopyWebpackPlugin({
  patterns: [
    {
      from: 'public/sitemap.xml',
      to: 'sitemap.xml',
    },
    {
      from: 'public/robots.txt',
      to: 'robots.txt',
    },
    {
      from: 'public/favicon.ico',
      to: 'favicon.ico',
    },
    {
      from: 'public/favicon-16x16.png',
      to: 'favicon-16x16.png',
    },
    {
      from: 'public/favicon-32x32.png',
      to: 'favicon-32x32.png',
    },
    {
      from: 'public/apple-touch-icon.png',
      to: 'apple-touch-icon.png',
    },
  ],
}),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@public': path.resolve(__dirname, 'public'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
        },
        bootstrap: {
          test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
          name: 'bootstrap',
          chunks: 'all',
          priority: 20,
        },
        i18n: {
          test: /[\\/]node_modules[\\/](i18next|react-i18next)[\\/]/,
          name: 'i18n',
          chunks: 'all',
          priority: 15,
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 5,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
