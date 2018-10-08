const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackplugin = require('html-webpack-plugin');
const path = require('path');
const DIST_PATH = path.resolve(__dirname,'./dist');
//const sass = require('./webpack/sass');

module.exports = {
	entry: 
		'./src/index.js',
        
	output: {
		filename: '[name].js',
		path: DIST_PATH,
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_module|dist/,
			use: 'babel-loader',
		},
		{
			test: /\.(jpg|png|svg)$/,
			use: 'file-loader',
		},
		{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader']
			})
	        
        }],
	},
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		contentBase: DIST_PATH, 
		port: 9000,
	},
	plugins: [
      new HtmlWebpackplugin ({
		 
		  template: './templates/index.ejs',
	  }),
	 new ExtractTextPlugin('style.css')
	
	]	  
};