
import config from '../config.json';
import styles from '../style/main.less';
import Chart from '../common/mChart.js';
import Test from '../common/Test.js';

class Wang {
    constructor(){
        let inst = new Test();
        inst.prop = '222'
        console.log(inst);

        
        // let chart = new Chart();
        // chart.init({
        //     ele:"#root",
        //     // targetNum:81,//初始化的目标角度
        //     sDeg:90,
        //     eDeg:160,
        //     upDateFn:function(me){//更新方法 参数是canvas所有参数
        //         // console.log('更新完后的数据：',me)
        //     }
        // })

        // var aaa = 0;
        // window.tim = setInterval(function(){
        //     // aaa ++;
        //     let random = parseInt(Math.random() * 290);
        //     console.log(random)
        //     chart.upDate(random);
        // }, 5000);
    }


}   

export  { Wang };









 