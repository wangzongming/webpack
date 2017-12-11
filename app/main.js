//打包入口文件
import './common/rem.js';//可伸缩rem 


import { Wang } from './pages/Greeter';
var ele = new Wang().createDom();
var subtit = new Wang().createDom1();


document.querySelector("#root").appendChild( ele );
document.querySelector("#root").appendChild( subtit );




