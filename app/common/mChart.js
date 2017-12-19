import './canvasRem.js';
class Chart {
    constructor() {
        this.getPixelRatio = function (context) {
            let backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
            return (window.devicePixelRatio || 1) / backingStore;
        };
        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
    }

    getAttr (attr){
        return this.attr;
    }

    init(opt) {
        const rem = this.canvasRem;
        const canvasContainer = opt.ele;
        this.canvas = document.createElement("canvas");
        this.canvas.className = "canvas";
        this.canvas.width = rem('4.5rem');
        this.canvas.height = rem('4.5rem');
        canvasContainer.appendChild(this.canvas);
        const ctx = this.canvas.getContext("2d");
        this.ratio = this.getPixelRatio(ctx);//画图片时解决模糊问题
        this.canvasWin = this.canvas.width / this.ratio;

        this.setAttr({//设置Chart类属性
            sDeg: opt.sDeg || 0, //仪盘表外框线条起点角度  指针的结束点角度    注意是反方向转动的
            eDeg: opt.eDeg || 180, //仪盘表外框线条结束点角度 指针的起始点角度  注意是反方向转动的
            speed: 1,//转动速度 目前只能填写整数
            targetNum: opt.targetNum || 0,//转动的角度 目标
            canvasBg: opt.canvasBg || "black",//canvas背景 为了实现运动效果不浪费额外性能
            unitValueBig: 30,//大格子单位
            unitValueSmart: 10,//小格子单位
            _panelX:  this.canvasWin / 2 || 120,//圆心X
            _panelY:  this.canvasWin / 2 || 130,//圆心Y
            _panelR: opt.r * this.ratio || 100,//圆半径
            _panceBorderWidth: opt._panceBorderWidth || 10,//圆盘border宽
            _paneBorderColor: opt.paneBorderColor || '#669966',//仪表盘 和 刻度(小) 和 圆心 颜色

            _panceKdColor: opt._panceKdColor || 'red',//刻度数字颜色  （大）
            _panceKdFontFamily: opt._panceKdFontFamily || '楷体',//刻度数字字体样式  （大）
            _panceKdFontSize:  opt._panceKdFontSize || '22px',//刻度数字字体大小  （大）

            _panelMetreLineLenB: opt._panelMetreLineLenB || 13,//刻度长度（大）
            _panelMetreLineColorB: opt._panelMetreLineColorB || 'red',//刻度颜色（大）
            _panelMetreLineWidthB: opt._panelMetreLineWidthB || 5,//刻度格子线的width(粗)（大）

            panelNumcolor:opt.panelNumcolor || '#669966',//仪盘表上的数字颜色  不是刻度
            panelNumBorderColor: opt.panelNumBorderColor || 'green',//仪盘表上的数字框颜色  
            panelNumFontFamily: opt.panelNumFontFamily || '楷体',//仪盘表上的数字字体样式
            panelNumFontSize: opt.panelNumFontSize || '28px',//仪盘表上的数字字体大小


            _panelMetreLineLenS: opt._panelMetreLineLenS || 8,//刻度长度（小）
            _panelMetreLineColorS: opt._panelMetreLineColorS || '#ccc',//刻度颜色（小）
            _panelMetreLineWidthS: opt._panelMetreLineWidthS || 6,//刻度格子线的width(粗)（小）

            _pancePointerColor: opt.pancePointerColor ||  'red',//指针颜色
            _pancePointerWidth: opt._pancePointerWidth || 3,//指针粗细  

            valueType:opt.valueType || 'angle',
            minNum:opt.minNum || 0,
            maxNum:opt.maxNum || 240,
            offAni: true,//开启动画     
        })

        this.upDateFn = opt.upDateFn || function(){};
        this.allDeg = this.eDeg + 90;//总角度
        this.viewDeg = 360 - (this.eDeg - this.sDeg);
        // this.log(this.viewDeg)
        this.isExtremity = false,//是否到达极限    
        this.PointerDeg = opt.targetNum;//指针的角度
        this.isUpdate = false; //是否是更新状态
        this.isAniIng = false; //是否正在动画
        this._pancePointerLen = this._panelR - this._panelMetreLineLenB - 50; //指针长度 为了新能不能太长  
        var _this = this; 
        var log = this.log;

        ctx.lineWidth = 4;
        this.draw = function (opt) {//需要不停渲染的canvas
            // if(_this.isAniIng){
            //     log('动画中')
            // }
            _this.isAniIng = true;
            let drawFn = function () {
                var {isExtremity, isUpdate, targetNum, allDeg, sDeg, eDeg, _panelX, _panelY, _panelR, _pancePointerLen, PointerDeg} = _this;

                if(isExtremity){//到达极限
                    _this.isUpdate = false;
                    _this.isAniIng = false;
                    window.cancelAnimationFrame(_this.ani);
                    return;
                }

                if(targetNum >= 360){//所转动角度大于一圈
                    _this.isUpdate = false;
                    _this.isExtremity = true,
                    _this.isAniIng = false;
                    _this.reachExtremity(targetNum);
                    window.cancelAnimationFrame(_this.ani);
                    return;
                }
                
                if (!(allDeg >= sDeg + 90 && allDeg <= eDeg + 90)) {//动画运动过程  || targetNum >= opt.newDeg
                    ctx.beginPath();//覆盖指针区域实现运动效果
                    ctx.fillStyle = _this.canvasBg;
                    ctx.arc( _panelX,  _panelY, _pancePointerLen + 2, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.beginPath();//仪盘的数字
                    let _tNum; // = ( _this.allDeg - ( _this.eDeg + 90)) % 360 >=   _this.targetNum ? _this.targetNum : ( ( _this.allDeg - ( _this.eDeg + 90)) % 360 <= 0 ? 0 : (_this.allDeg - (_this.eDeg + 90)) % 360 );//目标数字
                    if(_this.targetNum-_this.speed <= 0){//小于起始角度
                        _tNum = 0
                    }else if( (_this.allDeg - ( _this.eDeg + 90)) % 360 >=   _this.targetNum ){//正常向前走
                        _tNum = _this.valueType == '%' ? (( (_this.allDeg - 90 - eDeg) % 360 ) / 360 * (360 / _this.viewDeg) * 100).toFixed(0)  : (_this.allDeg - 90 - eDeg) % 360;
                    }else{//向后转百分比值未调
                        _tNum = ( _this.allDeg - ( _this.eDeg + 90)) % 360 <= 0 ? 0 : (_this.allDeg - (_this.eDeg + 90)) % 360 ;//目标数字
                    }
                    let _offT = 4;//文字向上偏移
                    ctx.fillStyle = _this.panelNumcolor;
                    ctx.font = _this.panelNumFontSize + ' ' + _this.panelNumFontFamily;
                    ctx.fillText(_this.valueType == '%' ?  _tNum + '%' : _tNum  , _this._panelX - ctx.measureText(_tNum + '%').width  / 2 , _panelR * 2 - _panelR  / 3 - _offT);
                    ctx.fill();

                    ctx.beginPath();//仪盘的数字的 外框
                    ctx.lineWidth = 3;
                    ctx.strokeStyle = _this.panelNumBorderColor;
                    let _width = _panelR / 2;//可附上设置的值
                    let _height =  _panelR / 5;//可附上设置的值
                    ctx.rect( _panelX - _width / 2, _panelR * 2 - _height - _panelR / 3, _width, _height);
                    ctx.stroke();

                    ctx.beginPath();//仪盘的指针根圆点
                    ctx.fillStyle = _this._paneBorderColor;
                    ctx.arc( _panelX, _panelY, 12, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.beginPath();//指针的指针根圆点
                    ctx.fillStyle = _this._panceKdColor;
                    ctx.arc( _panelX, _panelY, 8, 0, Math.PI * 2);
                    ctx.fill();

                    if(opt.isUpdate){//更新状态
                        let meetRotate =  targetNum - opt.newDeg; 
                        _this.PointerDeg = opt.newDeg;
                        if(meetRotate <= 0){//往前走
                            if( targetNum >= Math.abs(opt.newDeg)){
                                window.cancelAnimationFrame(_this.ani);
                                _this.isUpdate = false;
                                _this.isAniIng = false;
                                _this.upDateCallBack(_this, function(){})
                                return;
                            }else{
                                window.requestAnimationFrame(_this.draw({
                                    isUpdate: true,
                                    newDeg:opt.newDeg
                                }));//执行动画
                                _this.targetNum += _this.speed;
                            }

                            ctx.beginPath();//仪盘的指针
                            let _p = _this.getPos(_this.allDeg,  _panelX, _panelY, _pancePointerLen); //获取坐标
                            ctx.strokeStyle = _this._pancePointerColor;
                            ctx.lineCap = "round";
                            ctx.lineWidth = _this._pancePointerWidth;
                            ctx.moveTo( _panelX, _panelY);
                            ctx.lineTo(_p.x, _p.y);
                            ctx.stroke();
                        }else{//往后走
                            _this.allDeg -= _this.speed;
                            _this.targetNum -= _this.speed;

                            ctx.beginPath();//仪盘的指针
                            let _p = _this.getPos( _this.allDeg, _panelX, _panelY, _pancePointerLen); //获取坐标
                            ctx.strokeStyle = _this._pancePointerColor;
                            ctx.lineCap = "round";
                            ctx.lineWidth = _this._pancePointerWidth;
                            ctx.moveTo(_this._panelX, _this._panelY);
                            ctx.lineTo(_p.x, _p.y);
                            ctx.stroke();

                            // log(`${_this.targetNum}, ${opt.newDeg}`)
                            if( _this.targetNum <= opt.newDeg){//小于给定角度
                                _this.isUpdate = false;
                                _this.isAniIng = false;
                                window.cancelAnimationFrame(_this.ani);
                                _this.upDateCallBack(_this, function(){});
                                return;
                            }else{
                                window.requestAnimationFrame(_this.draw({
                                    isUpdate: true,
                                    newDeg:opt.newDeg
                                }));//执行动画
                            }
                        }

                    }else{//非更新状态直接走这
                        ctx.beginPath();//仪盘的指针
                        let _p = _this.getPos( allDeg, _panelX, _panelY, _pancePointerLen); //获取坐标
                        ctx.strokeStyle = _this._pancePointerColor;
                        ctx.lineCap = "round";
                        ctx.lineWidth = _this._pancePointerWidth;
                        ctx.moveTo( _panelX, _panelY);
                        ctx.lineTo(_p.x, _p.y);
                        ctx.stroke();
                    }

                    

                }
                if (_this.allDeg % 360 == _this.sDeg + 90) { //到达仪盘终点
                    _this.isExtremity = true,
                    _this.isUpdate = false;
                    _this.targetNum = _this.sDeg + 90;
                    _this.isAniIng = false;
                    window.cancelAnimationFrame(_this.ani);
                    _this.reachExtremity( sDeg + 90);
                    return;
                } else {//继续动画
                    if(_this.valueType == '%'){
                        if ( ( _this.allDeg - ( _this.eDeg + 90)) % 360 >=  _this.viewDeg * (_this.targetNum / 100)) {//到达规定的目标点
                            if(_this.isUpdate){return}//更新状态就不执行到达初始化数值的函数
                            _this.reachTargetNum();
                            window.cancelAnimationFrame(_this.ani);
                            _this.isAniIng = false;
                            return;
                        }else{
                            if (_this.offAni) {//是否开启动画
                                window.requestAnimationFrame(_this.draw({
                                    isUpdate: false
                                }));//执行动画
                            }
                            _this.allDeg += _this.speed;
                        }
                    }else{
                        if ( ( _this.allDeg - ( _this.eDeg + 90)) % 360 >=  _this.targetNum) {//到达规定的目标点
                            if(_this.isUpdate){return}//更新状态就不执行到达初始化数值的函数
                            _this.reachTargetNum();
                            window.cancelAnimationFrame(_this.ani);
                            _this.isAniIng = false;
                            return;
                        }else{
                            if (_this.offAni) {//是否开启动画
                                window.requestAnimationFrame(_this.draw({
                                    isUpdate: false
                                }));//执行动画
                            }
                            _this.allDeg += _this.speed;
                        }
                    }
                    
                };
            }
            return drawFn;
        }

        //不重新绘制的canvas ------
        ctx.fillStyle = _this._paneBorderColor;
        for (let i = _this.eDeg + 90; i < 360 + _this.sDeg + 90; i += _this.unitValueSmart) {//刻度（小）  先画刻度是为了仪盘表外壳能盖住他
            ctx.beginPath();
            let _pos = _this.getPos(i, _this._panelX, _this._panelY, _this._panelR); //获取开始坐标
            let _ePos = _this.getPos(i, _this._panelX, _this._panelY, _this._panelR - ctx.lineWidth - _this._panelMetreLineLenS); //获取结束坐标
            ctx.strokeStyle = _this._panelMetreLineColorS;
            ctx.lineCap = 'round';
            ctx.lineWidth = _this._panelMetreLineWidthS;
            ctx.moveTo(_pos.x, _pos.y);
            ctx.lineTo(_ePos.x, _ePos.y);
            ctx.stroke();
        }

        let _KdxNum = 0;
        ctx.fillStyle = _this._panceKdColor;
        for (let i = _this.eDeg + 90; i <= 360 + _this.sDeg + 90; i += _this.unitValueBig) {//刻度（大）  先画刻度是为了仪盘表外壳能盖住他
            ctx.beginPath();
            let _pos = _this.getPos(i, _this._panelX, _this._panelY, _this._panelR); //获取开始坐标
            let _ePos = _this.getPos(i, _this._panelX, _this._panelY, _this._panelR - ctx.lineWidth - _this._panelMetreLineLenB); //获取结束坐标
            ctx.strokeStyle = _this._panelMetreLineColorB;
            ctx.lineCap = 'round';
            ctx.lineWidth = _this._panelMetreLineWidthB;
            ctx.moveTo(_pos.x, _pos.y);
            ctx.lineTo(_ePos.x, _ePos.y);
            ctx.stroke();
            _KdxNum += 10;
        }


        let valueType = _this.valueType;
        switch(valueType){
            case 'angle':
                let _kNum = 0;//起始值
                let _cNum = _this.unitValueBig;//相邻两数差值
                let nAllDeg = _this.eDeg + 90;//用作计算数字位置
                ctx.beginPath();
                ctx.font = _this._panceKdFontSize + ' ' + _this._panceKdFontFamily;
                ctx.fillStyle = _this._panceKdColor;
                for (let i = _this.eDeg + 90; i <= 360 + _this.sDeg + 90; i += _cNum) {//刻度数字（大）  先画刻度是为了仪盘表外壳能盖住他
                    let _fWidth = ctx.measureText(_kNum).width;
                    let _n = nAllDeg % 360;
                    let _tH = parseInt(_this._panceKdFontSize);
                    let _posT = _this.getPos(i, _this._panelX, _this._panelY, _this._panelR - _this._panelMetreLineLenB - _this._panceBorderWidth); //获取坐标
        
                    //相对于整个圆不是能看到的角度
                    if (_n <= 30) {
                        ctx.fillText(_kNum, _posT.x - _fWidth / 2, _posT.y + _tH / 1.5);
                    } else if (_n > 30 && _n <= 120) {
                        ctx.fillText(_kNum, _posT.x - _fWidth, _posT.y + _tH / 2);
                    } else if (_n >= 120 && _n < 150) {
                        ctx.fillText(_kNum, _posT.x - _fWidth, _posT.y);
                    } else if (_n >= 150 && _n <= 220) {
                        ctx.fillText(_kNum, _posT.x - _fWidth / 2, _posT.y);
                    } else if (_n > 220 && _n <= 320) {
                        ctx.fillText(_kNum, _posT.x, _posT.y + _tH / 3);
                    } else {
                        ctx.fillText(_kNum, _posT.x - _fWidth / 2, _posT.y + _tH / 1.5);
                    }
                    nAllDeg += _cNum;
                    _kNum += _cNum;
                }
                break;
            
            case '%':
                var _sNum = _this.minNum;//起始值
                var _eNum = _this.maxNum;//结束值
                var _xNum = _this.unitValueBig;//相邻两数差值
                var _nAllDeg = _this.eDeg + 90;//用作计算数字位置
                ctx.beginPath();
                ctx.font = _this._panceKdFontSize + ' ' + _this._panceKdFontFamily;
                ctx.fillStyle = _this._panceKdColor;
                // log(_this.targetNum)
                for (var i = _this.eDeg + 90; i <= 360 + _this.sDeg + 90; i += _xNum) {//刻度数字（大）  先画刻度是为了仪盘表外壳能盖住他
                    var _nsNum = (_sNum / 360 * (360 / _this.viewDeg) * 100).toFixed(0) + '%' ;
                    var _fWidth = ctx.measureText(_nsNum).width;
                    var _n = _nAllDeg % 360;
                    var _tH = parseInt(_this._panceKdFontSize);
                    var _posT = _this.getPos(i, _this._panelX, _this._panelY, _this._panelR - _this._panelMetreLineLenB - _this._panceBorderWidth); //获取坐标
                    
                    //相对于整个圆不是能看到的角度
                    if (_n <= 30) {
                        ctx.fillText(_nsNum, _posT.x - _fWidth / 2, _posT.y + _tH / 1.5);
                    } else if (_n > 30 && _n <= 120) {
                        ctx.fillText(_nsNum, _posT.x - _fWidth, _posT.y + _tH / 2);
                    } else if (_n >= 120 && _n < 150) {
                        ctx.fillText(_nsNum, _posT.x - _fWidth, _posT.y);
                    } else if (_n >= 150 && _n <= 220) {
                        ctx.fillText(_nsNum, _posT.x - _fWidth / 2, _posT.y);
                    } else if (_n > 220 && _n <= 320) {
                        ctx.fillText(_nsNum, _posT.x, _posT.y + _tH / 3);
                    } else {
                        ctx.fillText(_nsNum, _posT.x - _fWidth / 2, _posT.y + _tH / 1.5);
                    }
                    _nAllDeg += _xNum;
                    _sNum += _xNum;
                }
                
                break;
        }

        ctx.beginPath();//背景 仪盘外框
        ctx.lineWidth = _this._panceBorderWidth;
        ctx.borderWdith = _this._panceBorderWidth;
        ctx.strokeStyle = _this._paneBorderColor;
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.arc(_this._panelX, _this._panelY, _this._panelR, Math.PI / 180 * _this.sDeg, Math.PI / 180 * _this.eDeg, true);
        ctx.stroke();

        this.ani = requestAnimationFrame(this.draw({
            isUpdate: false
        }));//执行动画

    }

    setAttr(attrObjs) {//传入对象
        let _this = this;
        for (var key in attrObjs) {
            _this[key] = attrObjs[key]
        }
    }

    getPos(deg, x, y, r) {//获取 圆边上的 某个坐标 ( 角度(360), x(圆心x), y(圆心y), r(半径))
        var hudu = (Math.PI / 180) * deg;   //  根据角度算取弧度
        var _x = x + Math.sin(hudu) * r;
        var _y = y - Math.cos(hudu) * r;
        return { x: _x, y: _y };
    }
    canvasRem(rem) {//1rem = window / 10  返回一个canvas用的单位
        if (!rem) { return };
        let _num = parseInt(rem);
        let winWinth = window.innerWidth;
        return winWinth / 10 * _num;
    }

    upDate(deg) {//更新数据
        if (deg != this.targetNum) {
            this.isUpdate = true;//更新状态开启
            let meetRotate = (this.targetNum - deg);//需要转动角度 整数倒着转 负数反之
            requestAnimationFrame(this.draw({
                isUpdate: true,
                newDeg:deg
            }));//执行动画
        }
    }

    upDateCallBack(me, cb){//更新完数据后的回调
        this.upDateFn(me);
    }

    reachTargetNum() {//指针到达目标数字（目标角度）
        if(this.isUpdate){ return; };//更新过程不管目标
        this.log(`到达初始化目标点：${this.targetNum}`, 'yellow');
    }

    reachExtremity(deg) {//指针到达极限  就是最后
        // clearInterval(tim);
        this.log(`到达极限了：到达[极限角度：${deg}],[可视角度：${ (this.allDeg - (this.eDeg + 90)) % 360 }]`, 'red', '14px');
    }

    log(text, color = "red", fontSize = '25px') {
        console.log(`%c${text}`, `color:${color};font-size:${fontSize}`)
    }

}

export default Chart;
