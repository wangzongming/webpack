//打包入口文件
import './common/rem.js';//可伸缩rem 
import './common/queryDom.js';//选择元素的插件

import { Wang } from './pages/Greeter';
if(new Wang().createDom){
    var ele = new Wang().createDom();
    document.querySelector("#root").appendChild( ele );
}




