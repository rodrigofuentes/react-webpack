const HtmlWebpackPlugin = require('html-webpack-plugin');
// const htmlPlugin = new HtmlWebpackPlugin({
// 	template: './src/index.html',
// 	filename: './index.html'
// });
const htmlPlugin = new HtmlWebpackPlugin();

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [ htmlPlugin ]
};
