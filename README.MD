# v0.06

*   简介：
    > webpack配置
    
*   使用方法：
    > 1.运行install.bat 
    > 2.运行install.bat 
    > 3.运行startServer.bat
    > 4.运行build.bat 打包

*   功能：
    > 内测中

*   注意：
    <p>所有静态文件例如图片等应该放置在 /app文件夹下</p>
    <p>不管文件在哪引用路径统一充app下文件路径开始 eg： imgs/XXX.png (*注意：路径前面不要加点)</p>

*   log:

    开启css-model、增加react (0.06)
    默认关闭css-model、修复代码被提交乱了的问题(0.05)
    优化dev-server (0.04)
    增加快捷运行和dom选择插件   (0.03)
    增加rem插件   (v0.02)

*   by: oldWang/wxx/M
    ![logo](./app/imgs/logo.png)








<hr />

##   简单webpack  私人配置
0.05： 
    快捷方式：
###    点击文件 startServer.bat 文件即可运行服务器
###    点击文件 build.bat  文件即可打包

    命令行：
###    npm run server      开始项目，更新代码后浏览器会自动更新页面
###    npm run build       打包后文件放置 /dist 文件夹下

    log:
        默认关闭css-model、修复代码被提交乱了的问题(0.05)
        优化dev-server (0.04)
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


###  简单webpack  私人配置
0.04： 
    快捷方式：
###    点击文件 startServer.bat 文件即可运行服务器
###    点击文件 build.bat  文件即可打包

    命令行：
###    npm run server      开始项目，更新代码后浏览器会自动更新页面
###    npm run build       打包后文件放置 /dist 文件夹下
<!-- #    npm start           开启实时编译   /build 文件夹下 -->

    log:
        优化dev-server (0.04)
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


###   简单webpack  私人配置
0.03： 
    快捷方式：
###    点击文件 startServer.bat 文件即可运行服务器
###    点击文件 build.bat  文件即可打包

    命令行：
###    npm run server      开始项目，更新代码后浏览器会自动更新页面
###    npm run build       打包后文件放置 /dist 文件夹下
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

###   简单webpack  私人配置

0.02：  
     npm run server  即可开始

###    npm run server      开始项目，更新代码后浏览器会自动更新页面
###    npm run build       打包后文件放置 /dist 文件夹下

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


