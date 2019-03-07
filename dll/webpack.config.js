const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		// vendor: [
		// 	'react',
		// 	'react-dom'
		// ],
		home: path.resolve(__dirname, 'src/js/index.js'),
		contact: path.resolve(__dirname, 'src/js/contact.js')
	},
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react']
					}
				}
			},
			{
				test: /\.json$/,
				use: 'json-loader'
			},
			{
				test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000
					}
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								importLoaders: 1
							}
						},
						'postcss-loader'
					]
				})
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader','sass-loader']
				})
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', {
						loader: 'less-loader',
						options: {
							noIeCompat: true
						}
					}]
				})
			},
			{
				test: /\.styl$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', {
						loader: 'stylus-loader',
						options: {
							use: [
								require('nib'),
								require('rupture')
							],
							import: [
								'~nib/lib/nib/index.styl',
								'~rupture/rupture/index.styl',
							]
						}
					}]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('css/[name].css'),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'vendor',
		// 	minChunks: Infinity,
		// })
		new webpack.DllReferencePlugin({
			manifest: require('./modules-manifest.json')
		})
	]
}