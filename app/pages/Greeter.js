import config from '../config.json';
import styles from '../style/main.less';

class Wang {
    createDom (text = 'hello world'){
        var div = document.createElement('div');
        div.className = styles.root;
        div.textContent = text;
        return div;
    }

    createDom1 (){
        var div = document.createElement('div');
        div.className = styles.subtit;
        div.innerHTML = '<a href="https://github.com/wangzongming"> by:m </a>';
        return div;
    }
}

export  { Wang };




 