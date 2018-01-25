const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + "/app/main.js",
    devtool:'eval-source-map',
    output:{
        path: __dirname + "/build",
        filename: "bundle-[hash].js"
    },
    devServer: {
        contentBase: "./app",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port:8888,
        host:'192.168.1.111',
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        hot:true
    },
    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:"babel-loader", 
                },
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },{
                        loader:"css-loader",
                        options:{
                            modules:true
                        }
                    },{
                        loader: "postcss-loader"
                    }
                ]
            },
            {
                test:/\.less$/,
                use:[
                    {
                        loader:"style-loader"
                    },{
                        loader:"css-loader",
                        options:{
                            modules:true
                        }
                    },
                    {
                        loader:"less-loader"
                    },{
                        loader: "postcss-loader"
                    }
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('wxx专用！https://github.com/wangzongming'),
        new HtmlWebpackPlugin({
            template: __dirname + "/public/template.html"
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),//分配id
        new webpack.optimize.UglifyJsPlugin(),//压缩js
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ] 
}
