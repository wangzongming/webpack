//选择dom 插件
const w = {
    getEle: function (ele) {//获取单个dom
        return document.querySelector(ele);
    },
    getEleAll: function (ele) {//获取所有dom
        return document.querySelectorAll(ele);
    },
    getEleById: function (id) {//根据id查询dom
        return document.getElementById(id);
    },
    getEleByClass: function (classname) {//根据class查询dom
        return document.getElementsByClassName(classname);
    },
    $: function (ele) {
        if (!ele) {return}
        let _sybol = ele.slice(0, 1);
        if ((/^\#$/i).test(_sybol)){
            let el = w.getEleById( ele.replace( _sybol, '') );
           return el;
        }else if((/^\.$/i).test(_sybol)){
            let el = w.getEleByClass( ele.replace( _sybol, '') );
            return el;
        }else{
            let el = w.getEleAll(ele);
            return el;
        }
    },
}
window.$ = w.$;


