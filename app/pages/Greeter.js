
import config from '../config.json';
import styles from '../style/main.less';
import Chart from '../common/mChart.js';

class Wang {
    constructor(){
        let chart = new Chart();
        chart.init({
            ele:"#root"
        })
    }




    // createDom (text = 'hello world'){
    //     let div = document.createElement('div');
    //     div.className = styles.root;
    //     div.textContent = text;
    //     return div;
    // }

    // createDom1 (){
    //     let div = document.createElement('div');
    //     div.className = styles.subtit;
    //     div.innerHTML = '<a href="https://github.com/wangzongming">  </a>';
    //     return div;
    // }
}

export  { Wang };









 