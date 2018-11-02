const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

const extractPlugin = new ExtractTextPlugin({
  filename: 'css/bundle.css'
});

module.exports = {
  mode: NODE_ENV,
  entry: [
    './src/app/index.jsx',
  ],
  output: {
    path: path.join(__dirname, '/src/server/public/'),
    filename: 'js/bundle.js',
    publicPath: 'server/public/js/',
  },
  // Adding babel loader to compile our javascript and jsx files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'react',
              'env',
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
            fallback: 'style-loader',
            use: [
            'css-loader',
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: './src/app/main.scss'
              },
            },
          ]
        })
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  plugins: [
      extractPlugin
  ],
};
