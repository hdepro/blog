var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var path_React = path.resolve(node_modules, 'react/dist/react.min.js');
var path_ReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');
var path_ReactRouter = path.resolve(node_modules, 'react-router/umd/react-router.min.js');
var path_polyfill = path.resolve(node_modules, 'babel-polyfill/dist/polyfill.min.js');

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true
    },
    entry:{
        "login": './public/javascripts/admin/components/login/index.js',
        "admin": './public/javascripts/admin/index.js',
        "subscriber": './public/javascripts/subscriber/index.js'
    },
  resolve: {
    alias: {
      'react': path_React,
      //'react-router':path_ReactRouter,
      'babel-polyfill':path_polyfill,
      'react-dom': path_ReactDOM
    },
    extensions: ['.js']
  },
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: '[name].js',
    //publicPath: 'http://localhost:8080'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js/,
        loaders: ['babel-loader' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        //use: [{loader:'style-loader'}, {loader:'css-loader',options:{modules:true}}],
        use: ['style-loader','css-loader']
      },
        {
            test:/\.scss$/,
            use:['style-loader','css-loader','sass-loader']
        }
    ]
  }
};






