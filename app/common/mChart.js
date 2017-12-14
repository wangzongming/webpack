import './canvasRem.js';
class Chart {
    constructor(){//
        this.getPixelRatio = function (context) {
            let backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio ||
                context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
            return (window.devicePixelRatio || 1) / backingStore;
        };
    }   

    canvasRem(rem){//1rem = window / 10  返回一个canvas用的单位
        if(!rem){return};
        let _num = parseInt(rem);
        let winWinth = window.innerWidth;
        return winWinth / 10 * _num;
    }

    getPos(deg, x, y, r){//获取 圆边上的 某个坐标 ( 角度(360), x(圆心x), y(圆心y), r(半径))
        var hudu = (2*Math.PI / 360) * deg;   //  360/8=45,即45度(这个随个人设置)
        var _x = x + Math.sin(hudu) * r;    //  95 是圆形中心的坐标X   即定位left 的值
        var _y = y - Math.cos(hudu) * r;    //  95 是圆形中心的坐标Y   即定位top 的值
        return {x:_x, y:_y};
    }

    log(text, color="red", fontSize='25px'){
        console.log(`%c${text}`,`color:${color};font-size:${fontSize}`)
    }

    init(opt){
        var rem = this.canvasRem;
        const canvasContainer = $(opt.ele);
        this.canvas = document.createElement("canvas");
        this.canvas.className = "canvas";
        this.canvas.width = rem('10rem');
        this.canvas.height = rem('8rem');
        canvasContainer.appendChild(this.canvas);
        // console.log(opt);
        // console.log(canvasContainer);
        var ctx = this.canvas.getContext("2d");
        this.ratio = this.getPixelRatio(ctx);//画图片时解决模糊问题
        var _this = this;
        
        var sDeg = 180 / Math.PI * Math.PI * 0.2; //仪盘表起点点角度 可直接写 36
        var eDeg = 180 / Math.PI * Math.PI * 0.8; //仪盘表结束点角度 可直接写 144
        var speed = 2;//转动速度 目前只能填写整数

        var allDeg = eDeg + 90;

        
        this.offAni = true;//开启动画
    
        this.log(`[起始角度：${sDeg}, 结束角度：${eDeg}]`);
        // console.log( Math.PI/180 * ( eDeg-sDeg ) )
        this.draw = function(){
            ctx.clearRect(0, 0, 400, 400);
            // _this.log( allDeg ,'pink','16px')
            // _this.log(eDeg+90,'pink','16px')
            if( !(allDeg > sDeg + 90 && allDeg < eDeg + 90) ){//指针动画运动过程
               
                ctx.lineWidth = 4;
                for(let i = eDeg+90; i < 360 + sDeg + 90; i += 5){//刻度（小）  先画刻度是为了仪盘表外壳能盖住他
                    ctx.beginPath();
                    ctx.fillStyle = "#0090D2";
                    let _pos = _this.getPos(i, 150, 150, 100 - ctx.lineWidth + 1); //获取坐标
                    ctx.arc(_pos.x, _pos.y, 2, Math.PI * 0, Math.PI * 2, true);
                    ctx.fill();
                }
                for(let i = eDeg+90; i < 360 + sDeg + 90; i += 10){//刻度（大）  先画刻度是为了仪盘表外壳能盖住他
                    ctx.beginPath();
                    ctx.fillStyle = "red";
                    let _pos = _this.getPos(i, 150, 150, 100 - ctx.lineWidth + 1); //获取坐标
                    ctx.arc(_pos.x, _pos.y, 3, Math.PI * 0, Math.PI * 2, true);
                    ctx.fill();
                }
                
                var _num = 0;
                for(let i = eDeg + 90; i < 360 + sDeg + 90; i += 10){//刻度数  先画刻度是为了仪盘表外壳能盖住他
                    ctx.beginPath();
                    let _posT = _this.getPos(i, 150, 150, 90 - ctx.lineWidth + 1); //获取坐标
                    ctx.fillStyle = 'red';
                    ctx.font = "7px Georgia";
                    if(_num > 110){
                        ctx.fillText(_num, _posT.x - 5, _posT.y);
                    }else{
                        ctx.fillText(_num, _posT.x - 5, _posT.y);
                    }
                    _num += 10;
                    // var gradient=ctx.createLinearGradient(0,0,c.width,0);
                    // gradient.addColorStop("0","magenta");
                    // gradient.addColorStop("0.5","blue");
                    // gradient.addColorStop("1.0","red");
                    // ctx.fillStyle=gradient;
                }




                ctx.beginPath();//背景 仪盘外框
                ctx.strokeStyle="#0090D2";
                ctx.beginPath();
                ctx.lineCap = "round";
                ctx.arc(150, 150, 100, Math.PI * 0.2, Math.PI * 0.8, true);
                ctx.stroke();

                
                ctx.beginPath();//仪盘的指针根圆点
                ctx.fillStyle = "#0090D2";
                ctx.arc(150, 150, 5, 0, Math.PI * 2);
                ctx.fill();
        
                ctx.beginPath();//指针的指针根圆点
                ctx.fillStyle = 'red';
                ctx.arc(150, 150, 3, 0, Math.PI * 2);
                ctx.fill();
                
                let _p = _this.getPos(allDeg, 150, 150, 70); //获取坐标
                ctx.beginPath();//仪盘的指针
                ctx.strokeStyle = 'red';
                ctx.lineCap = "round";
                ctx.lineWidth = 2;
                ctx.moveTo(150, 150);
                ctx.lineTo(_p.x, _p.y);
                ctx.stroke();

            }
            
            if(allDeg % 360 == sDeg + 90){ //到达终点
                cancelAnimationFrame(_this.ani)
                // _this.log('动画完了');
                //some code。。。
            }else{//继续动画
                allDeg += speed;
                if(_this.offAni){//是否开启动画
                    requestAnimationFrame(_this.draw);
                }
            };
        }
       
        this.ani = requestAnimationFrame(this.draw);//执行动画
    }

}

export default Chart;
