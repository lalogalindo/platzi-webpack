const path = require('path');

module.exports = {
	entry: path.resolve(__dirname,'index.js'),
	output: {
		path: path.resolve(__dirname),
		filename: 'bundle.css.js'
	},
	module: {
		// Loaders
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				],
			}
		]
	}
}