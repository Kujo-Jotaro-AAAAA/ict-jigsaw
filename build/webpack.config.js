/*
 * @Author: LaoZhang
 * @Date: 2020-02-27 18:51:20
 * @LastEditors: LaoZhang
 * @LastEditTime: 2020-02-27 19:01:26
 * @Description: 作用
 * @FilePath: /ict-jigsaw/build/webpack.config.js
 */
const merge = require('webpack-merge');
const proConfig = require('./webpack.pro.config');
const baseConfig = require('./webpack.base.config');
module.exports = (env, argv) => {
    let config = argv.mode === 'development' ? devConfig : proConfig;
    return merge(baseConfig, config);
};
