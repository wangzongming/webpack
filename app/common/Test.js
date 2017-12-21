import './canvasRem.js';
class Test{
    constructor(){
        document.getElementsByTagName('canvas')[0].style.height = window.innerHeight + 'px';

        this.getPixelRatio = function (context) {
            let backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
            return (window.devicePixelRatio || 1) / backingStore;
        };
    }

    log(t, color='#00ef00', size='30px'){
        console.log(`%c${t}`,`color:${color};font-size:${size}`)
    }
    
}



export default Test;