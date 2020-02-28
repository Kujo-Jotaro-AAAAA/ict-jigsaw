/*
 * @Author: LaoZhang
 * @Date: 2020-02-27 18:51:49
 * @LastEditors: LaoZhang
 * @LastEditTime: 2020-02-27 18:54:59
 * @Description: 作用
 * @FilePath: /ict-jigsaw/build/webpack.config.pro.js
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.ts',
    output: {
        libraryTarget: 'umd',
        library: 'IctJigsaw'
    },
    externals: [nodeExternals()],
    plugins: [
        new CleanWebpackPlugin()
    ]
}
