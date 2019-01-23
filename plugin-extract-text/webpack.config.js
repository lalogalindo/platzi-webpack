const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		home: path.resolve(__dirname,'index.js'),
		precios: path.resolve(__dirname,'precios.js'),
		contacto: path.resolve(__dirname,'contacto.js')
	},
	output: {
		path: path.resolve(__dirname),
		filename: 'bundle.css.js'
	},
	module: {
		// Loaders
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('css/[name].css')
	]
}