import config from '../config.json';
import styles from '../style/main.less';
// var logo = require('../img/logo.png');

class Wang {
    createDom (text = 'hello world'){
        var div = document.createElement('div');
        div.className = styles.root;
        div.textContent = text;
        return div;
    }
}

export  { Wang };




 