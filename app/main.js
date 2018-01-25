/*
打包时的入口文件 
*/
import './common/rem.js';//可伸缩rem 必备
import React, { Component } from "react";
import ReactDOM from "react-dom";

import Test from './pages/Home/Home'; 
import './main.less';

ReactDOM.render(
    <Test />,
    document.querySelector('#root')
);



