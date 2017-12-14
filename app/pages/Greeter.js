
import config from '../config.json';
import styles from '../style/main.less';

class Wang {
    constructor(){
        let t = $('div');
        console.log(t);
        // t[0].innerHTML = '123'
    }

    createDom (text = 'hello world'){
        let div = document.createElement('div');
        div.className = styles.root;
        div.textContent = text;
        return div;
    }

    createDom1 (){
        let div = document.createElement('div');
        div.className = styles.subtit;
        div.innerHTML = '<a href="https://github.com/wangzongming"> by:m </a>';
        return div;
    }
}

export  { Wang };









 