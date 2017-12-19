#   简单webpack  私人配置
0.03： 
    快捷方式：
#    点击文件 startServer.bat 文件即可运行服务器
#    点击文件 build.bat  文件即可打包

    命令行：
#    npm run server      开始项目，更新代码后浏览器会自动更新页面
#    npm run build       打包后文件放置 /dist 文件夹下
<!-- #    npm start           开启实时编译   /build 文件夹下 -->

    log:
        增加快捷运行和dom选择插件   (0.03)
        增加rem插件   (v0.02)

    打包入口文件 app/main.js --->  自动生产打包后的文件
    打包文件处于（开发调试时） /build   下
    index模板位于 /public 下 
    支持 es6、less、css、json、img
    自动压缩js代码

    注意：开发调试时 代码放置在 /build 下
         生产后代码放置于   /dist  下


----------------------------

#   简单webpack  私人配置

0.02：  
     npm run server  即可开始

#    npm run server      开始项目，更新代码后浏览器会自动更新页面
#    npm run build       打包后文件放置 /dist 文件夹下

    log:增加rem插件

    打包入口文件 app/main.js --->  自动生产打包后的文件
    打包文件处于（开发调试时） /build   下
    index模板位于 /public 下 
    支持 es6、less、css、json、img
    自动压缩js代码

    注意：开发调试时 代码放置在 /build 下
         生产后代码放置于   /dist  下




----------------------------
0.01：  
    npm run server  即可开始

    打包入口文件 app/main.js --->  自动生产打包后的文件
    打包文件处于（开发调试时） /build   下
    index模板位于 /public 下 
    支持 es6、less、css、json、img
    运行 npm start 即可实时打包
    服务器  npm run server 更新代码浏览器会自动更新
    打包 npm run build //（ /dist 文件夹下）
    自动压缩js代码

    注意：开发调试时 代码放置在 /build 下
         生产后代码放置于   /dist  下


