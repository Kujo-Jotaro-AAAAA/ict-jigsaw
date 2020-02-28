/*
 * @Author: LaoZhang
 * @Date: 2020-02-27 19:00:48
 * @LastEditors: LaoZhang
 * @LastEditTime: 2020-02-27 19:05:40
 * @Description: 作用
 * @FilePath: /ict-jigsaw/build/webpack.base.config.js
 */

module.exports = {
    output: {
        filename: 'ict-jigsaw.js'
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                }],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader'
                ]
            },
            {
              test: /\.(png|jpe?g|gif|svg|eot|woff|woff2|ttf)(\?.*)?$/,
              use: {
                loader: 'url-loader',
                query: {
                  limit: 10 * 10024,
                  name: `galaxy/assets/img/[name].[hash:7].[ext]`,
                },
              },
            },
            {
              test: /\.(mp3)?$/,
              use: {
                loader: 'url-loader',
                query: {
                  name: 'assets/audio/[name].[hash:7].[ext]',
                },
              },
            },
        ]
    }
}
