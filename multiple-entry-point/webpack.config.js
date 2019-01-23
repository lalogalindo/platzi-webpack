const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		home: path.resolve(__dirname,'src/js/index.js'),
		precios: path.resolve(__dirname,'src/js/precios.js'),
		contacto: path.resolve(__dirname,'src/js/contacto.js')
	},
	output: {
		path: path.resolve(__dirname),
		filename: 'js/[name].js'
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