const path = require('path');

module.exports = {
	entry: path.resolve(__dirname,'index.js'),
	output: {
		path: path.resolve(__dirname),
		filename: 'bundle.external.js'
	},
	module: {
		rules: {
			// Loaders
			
		}
	}
}