/*! wxx专用！https://github.com/wangzongming */
webpackHotUpdate(0,{10:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(11);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Chart = function () {\n    function Chart() {\n        _classCallCheck(this, Chart);\n\n        //\n        this.getPixelRatio = function (context) {\n            var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;\n            return (window.devicePixelRatio || 1) / backingStore;\n        };\n    }\n\n    _createClass(Chart, [{\n        key: 'canvasRem',\n        value: function canvasRem(rem) {\n            //1rem = window / 10  返回一个canvas用的单位\n            if (!rem) {\n                return;\n            };\n            var _num = parseInt(rem);\n            var winWinth = window.innerWidth;\n            return winWinth / 10 * _num;\n        }\n    }, {\n        key: 'getPos',\n        value: function getPos(deg, x, y, r) {\n            //获取 圆边上的 某个坐标 ( 角度(360), x(圆心x), y(圆心y), r(半径))\n            var hudu = 2 * Math.PI / 360 * deg; //  360/8=45,即45度(这个随个人设置)\n            var _x = x + Math.sin(hudu) * r; //  95 是圆形中心的坐标X   即定位left 的值\n            var _y = y - Math.cos(hudu) * r; //  95 是圆形中心的坐标Y   即定位top 的值\n            return { x: _x, y: _y };\n        }\n    }, {\n        key: 'log',\n        value: function log(text) {\n            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"red\";\n            var fontSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '25px';\n\n            console.log('%c' + text, 'color:' + color + ';font-size:' + fontSize);\n        }\n    }, {\n        key: 'init',\n        value: function init(opt) {\n            var rem = this.canvasRem;\n            var canvasContainer = $(opt.ele);\n            this.canvas = document.createElement(\"canvas\");\n            this.canvas.className = \"canvas\";\n            this.canvas.width = rem('10rem');\n            this.canvas.height = rem('8rem');\n            canvasContainer.appendChild(this.canvas);\n            // console.log(opt);\n            // console.log(canvasContainer);\n            var ctx = this.canvas.getContext(\"2d\");\n            this.ratio = this.getPixelRatio(ctx); //画图片时解决模糊问题\n            var _this = this;\n\n            var sDeg = 180 / Math.PI * Math.PI * 0.2; //仪盘表起点点角度 可直接写 36\n            var eDeg = 180 / Math.PI * Math.PI * 0.8; //仪盘表结束点角度 可直接写 144\n            var speed = 2; //转动速度 目前只能填写整数\n\n            var allDeg = eDeg + 90;\n\n            this.offAni = false; //开启动画\n\n            this.log('[\\u8D77\\u59CB\\u89D2\\u5EA6\\uFF1A' + sDeg + ', \\u7ED3\\u675F\\u89D2\\u5EA6\\uFF1A' + eDeg + ']');\n            // console.log( Math.PI/180 * ( eDeg-sDeg ) )\n            this.draw = function () {\n                ctx.clearRect(0, 0, 400, 400);\n                // _this.log( allDeg ,'pink','16px')\n                // _this.log(eDeg+90,'pink','16px')\n                if (!(allDeg > sDeg + 90 && allDeg < eDeg + 90)) {\n                    //指针动画运动过程\n\n                    ctx.lineWidth = 4;\n                    for (var i = eDeg + 90; i < 360 + sDeg + 90; i += 5) {\n                        //刻度（小）  先画刻度是为了仪盘表外壳能盖住他\n                        ctx.beginPath();\n                        ctx.fillStyle = \"#0090D2\";\n                        var _pos = _this.getPos(i, 150, 150, 100 - ctx.lineWidth + 1); //获取坐标\n                        ctx.arc(_pos.x, _pos.y, 2, Math.PI * 0, Math.PI * 2, true);\n                        ctx.fill();\n                    }\n                    for (var _i = eDeg + 90; _i < 360 + sDeg + 90; _i += 10) {\n                        //刻度（大）  先画刻度是为了仪盘表外壳能盖住他\n                        ctx.beginPath();\n                        ctx.fillStyle = \"red\";\n                        var _pos2 = _this.getPos(_i, 150, 150, 100 - ctx.lineWidth + 1); //获取坐标\n                        ctx.arc(_pos2.x, _pos2.y, 3, Math.PI * 0, Math.PI * 2, true);\n                        ctx.fill();\n                    }\n\n                    var _num = 0;\n                    for (var _i2 = eDeg + 90; _i2 < 360 + sDeg + 90; _i2 += 10) {\n                        //刻度数  先画刻度是为了仪盘表外壳能盖住他\n                        ctx.beginPath();\n                        var _posT = _this.getPos(_i2, 150, 150, 90 - ctx.lineWidth + 1); //获取坐标\n                        ctx.fillStyle = 'red';\n                        ctx.font = \"8px Georgia\";\n                        // if()\n                        ctx.fillText(_i2, _posT.x, _posT.y);\n\n                        // var gradient=ctx.createLinearGradient(0,0,c.width,0);\n                        // gradient.addColorStop(\"0\",\"magenta\");\n                        // gradient.addColorStop(\"0.5\",\"blue\");\n                        // gradient.addColorStop(\"1.0\",\"red\");\n                        // ctx.fillStyle=gradient;\n                    }\n\n                    ctx.beginPath(); //背景 仪盘外框\n                    ctx.strokeStyle = \"#0090D2\";\n                    ctx.beginPath();\n                    ctx.lineCap = \"round\";\n                    ctx.arc(150, 150, 100, Math.PI * 0.2, Math.PI * 0.8, true);\n                    ctx.stroke();\n\n                    ctx.beginPath(); //仪盘的指针根圆点\n                    ctx.fillStyle = \"#0090D2\";\n                    ctx.arc(150, 150, 5, 0, Math.PI * 2);\n                    ctx.fill();\n\n                    ctx.beginPath(); //指针的指针根圆点\n                    ctx.fillStyle = 'red';\n                    ctx.arc(150, 150, 3, 0, Math.PI * 2);\n                    ctx.fill();\n\n                    var _p = _this.getPos(allDeg, 150, 150, 70); //获取坐标\n                    ctx.beginPath(); //仪盘的指针\n                    ctx.strokeStyle = 'red';\n                    ctx.lineCap = \"round\";\n                    ctx.lineWidth = 2;\n                    ctx.moveTo(150, 150);\n                    ctx.lineTo(_p.x, _p.y);\n                    ctx.stroke();\n                }\n\n                if (allDeg % 360 == sDeg + 90) {\n                    //到达终点\n                    cancelAnimationFrame(_this.ani);\n                    // _this.log('动画完了');\n                    //some code。。。\n                } else {\n                    //继续动画\n                    allDeg += speed;\n                    if (_this.offAni) {\n                        //是否开启动画\n                        requestAnimationFrame(_this.draw);\n                    }\n                };\n            };\n\n            this.ani = requestAnimationFrame(this.draw); //执行动画\n        }\n    }]);\n\n    return Chart;\n}();\n\nexports.default = Chart;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tbW9uL21DaGFydC5qcz84NzZlIl0sIm5hbWVzIjpbIkNoYXJ0IiwiZ2V0UGl4ZWxSYXRpbyIsImNvbnRleHQiLCJiYWNraW5nU3RvcmUiLCJiYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwid2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJtc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJvQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJyZW0iLCJfbnVtIiwicGFyc2VJbnQiLCJ3aW5XaW50aCIsImlubmVyV2lkdGgiLCJkZWciLCJ4IiwieSIsInIiLCJodWR1IiwiTWF0aCIsIlBJIiwiX3giLCJzaW4iLCJfeSIsImNvcyIsInRleHQiLCJjb2xvciIsImZvbnRTaXplIiwiY29uc29sZSIsImxvZyIsIm9wdCIsImNhbnZhc1JlbSIsImNhbnZhc0NvbnRhaW5lciIsIiQiLCJlbGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImFwcGVuZENoaWxkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJhdGlvIiwiX3RoaXMiLCJzRGVnIiwiZURlZyIsInNwZWVkIiwiYWxsRGVnIiwib2ZmQW5pIiwiZHJhdyIsImNsZWFyUmVjdCIsImxpbmVXaWR0aCIsImkiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJfcG9zIiwiZ2V0UG9zIiwiYXJjIiwiZmlsbCIsIl9wb3NUIiwiZm9udCIsImZpbGxUZXh0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lQ2FwIiwic3Ryb2tlIiwiX3AiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFuaSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztJQUNNQSxLO0FB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bGFzcyBDaGFydCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpey8vXHJcbiAgICAgICAgdGhpcy5nZXRQaXhlbFJhdGlvID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAgICAgICAgICAgbGV0IGJhY2tpbmdTdG9yZSA9IGNvbnRleHQuYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCBjb250ZXh0LndlYmtpdEJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgY29udGV4dC5tb3pCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0Lm1zQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCBjb250ZXh0Lm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGNvbnRleHQuYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCAxO1xyXG4gICAgICAgICAgICByZXR1cm4gKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIC8gYmFja2luZ1N0b3JlO1xyXG4gICAgICAgIH07XHJcbiAgICB9ICAgXHJcblxyXG4gICAgY2FudmFzUmVtKHJlbSl7Ly8xcmVtID0gd2luZG93IC8gMTAgIOi/lOWbnuS4gOS4qmNhbnZhc+eUqOeahOWNleS9jVxyXG4gICAgICAgIGlmKCFyZW0pe3JldHVybn07XHJcbiAgICAgICAgbGV0IF9udW0gPSBwYXJzZUludChyZW0pO1xyXG4gICAgICAgIGxldCB3aW5XaW50aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHJldHVybiB3aW5XaW50aCAvIDEwICogX251bTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3MoZGVnLCB4LCB5LCByKXsvL+iOt+WPliDlnIbovrnkuIrnmoQg5p+Q5Liq5Z2Q5qCHICgg6KeS5bqmKDM2MCksIHgo5ZyG5b+DeCksIHko5ZyG5b+DeSksIHIo5Y2K5b6EKSlcclxuICAgICAgICB2YXIgaHVkdSA9ICgyKk1hdGguUEkgLyAzNjApICogZGVnOyAgIC8vICAzNjAvOD00NSzljbM0NeW6pijov5nkuKrpmo/kuKrkurrorr7nva4pXHJcbiAgICAgICAgdmFyIF94ID0geCArIE1hdGguc2luKGh1ZHUpICogcjsgICAgLy8gIDk1IOaYr+WchuW9ouS4reW/g+eahOWdkOagh1ggICDljbPlrprkvY1sZWZ0IOeahOWAvFxyXG4gICAgICAgIHZhciBfeSA9IHkgLSBNYXRoLmNvcyhodWR1KSAqIHI7ICAgIC8vICA5NSDmmK/lnIblvaLkuK3lv4PnmoTlnZDmoIdZICAg5Y2z5a6a5L2NdG9wIOeahOWAvFxyXG4gICAgICAgIHJldHVybiB7eDpfeCwgeTpfeX07XHJcbiAgICB9XHJcblxyXG4gICAgbG9nKHRleHQsIGNvbG9yPVwicmVkXCIsIGZvbnRTaXplPScyNXB4Jyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCVjJHt0ZXh0fWAsYGNvbG9yOiR7Y29sb3J9O2ZvbnQtc2l6ZToke2ZvbnRTaXplfWApXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChvcHQpe1xyXG4gICAgICAgIHZhciByZW0gPSB0aGlzLmNhbnZhc1JlbTtcclxuICAgICAgICBjb25zdCBjYW52YXNDb250YWluZXIgPSAkKG9wdC5lbGUpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jbGFzc05hbWUgPSBcImNhbnZhc1wiO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gcmVtKCcxMHJlbScpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHJlbSgnOHJlbScpO1xyXG4gICAgICAgIGNhbnZhc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob3B0KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYW52YXNDb250YWluZXIpO1xyXG4gICAgICAgIHZhciBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgdGhpcy5yYXRpbyA9IHRoaXMuZ2V0UGl4ZWxSYXRpbyhjdHgpOy8v55S75Zu+54mH5pe26Kej5Yaz5qih57OK6Zeu6aKYXHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBcclxuICAgICAgICB2YXIgc0RlZyA9IDE4MCAvIE1hdGguUEkgKiBNYXRoLlBJICogMC4yOyAvL+S7quebmOihqOi1t+eCueeCueinkuW6piDlj6/nm7TmjqXlhpkgMzZcclxuICAgICAgICB2YXIgZURlZyA9IDE4MCAvIE1hdGguUEkgKiBNYXRoLlBJICogMC44OyAvL+S7quebmOihqOe7k+adn+eCueinkuW6piDlj6/nm7TmjqXlhpkgMTQ0XHJcbiAgICAgICAgdmFyIHNwZWVkID0gMjsvL+i9rOWKqOmAn+W6piDnm67liY3lj6rog73loavlhpnmlbTmlbBcclxuXHJcbiAgICAgICAgdmFyIGFsbERlZyA9IGVEZWcgKyA5MDtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vZmZBbmkgPSBmYWxzZTsvL+W8gOWQr+WKqOeUu1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5sb2coYFvotbflp4vop5LluqbvvJoke3NEZWd9LCDnu5PmnZ/op5LluqbvvJoke2VEZWd9XWApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCBNYXRoLlBJLzE4MCAqICggZURlZy1zRGVnICkgKVxyXG4gICAgICAgIHRoaXMuZHJhdyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgNDAwLCA0MDApO1xyXG4gICAgICAgICAgICAvLyBfdGhpcy5sb2coIGFsbERlZyAsJ3BpbmsnLCcxNnB4JylcclxuICAgICAgICAgICAgLy8gX3RoaXMubG9nKGVEZWcrOTAsJ3BpbmsnLCcxNnB4JylcclxuICAgICAgICAgICAgaWYoICEoYWxsRGVnID4gc0RlZyArIDkwICYmIGFsbERlZyA8IGVEZWcgKyA5MCkgKXsvL+aMh+mSiOWKqOeUu+i/kOWKqOi/h+eoi1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSA0O1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gZURlZys5MDsgaSA8IDM2MCArIHNEZWcgKyA5MDsgaSArPSA1KXsvL+WIu+W6pu+8iOWwj++8iSAg5YWI55S75Yi75bqm5piv5Li65LqG5Luq55uY6KGo5aSW5aOz6IO955uW5L2P5LuWXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDkwRDJcIjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3BvcyA9IF90aGlzLmdldFBvcyhpLCAxNTAsIDE1MCwgMTAwIC0gY3R4LmxpbmVXaWR0aCArIDEpOyAvL+iOt+WPluWdkOagh1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5hcmMoX3Bvcy54LCBfcG9zLnksIDIsIE1hdGguUEkgKiAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IGVEZWcrOTA7IGkgPCAzNjAgKyBzRGVnICsgOTA7IGkgKz0gMTApey8v5Yi75bqm77yI5aSn77yJICDlhYjnlLvliLvluqbmmK/kuLrkuobku6rnm5jooajlpJblo7Pog73nm5bkvY/ku5ZcclxuICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9wb3MgPSBfdGhpcy5nZXRQb3MoaSwgMTUwLCAxNTAsIDEwMCAtIGN0eC5saW5lV2lkdGggKyAxKTsgLy/ojrflj5blnZDmoIdcclxuICAgICAgICAgICAgICAgICAgICBjdHguYXJjKF9wb3MueCwgX3Bvcy55LCAzLCBNYXRoLlBJICogMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciBfbnVtID0gMDtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IGVEZWcgKyA5MDsgaSA8IDM2MCArIHNEZWcgKyA5MDsgaSArPSAxMCl7Ly/liLvluqbmlbAgIOWFiOeUu+WIu+W6puaYr+S4uuS6huS7quebmOihqOWkluWjs+iDveebluS9j+S7llxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3Bvc1QgPSBfdGhpcy5nZXRQb3MoaSwgMTUwLCAxNTAsIDkwIC0gY3R4LmxpbmVXaWR0aCArIDEpOyAvL+iOt+WPluWdkOagh1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmVkJztcclxuICAgICAgICAgICAgICAgICAgICBjdHguZm9udCA9IFwiOHB4IEdlb3JnaWFcIjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZigpXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGksIF9wb3NULngsIF9wb3NULnkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgZ3JhZGllbnQ9Y3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsMCxjLndpZHRoLDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGdyYWRpZW50LmFkZENvbG9yU3RvcChcIjBcIixcIm1hZ2VudGFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFwiMC41XCIsXCJibHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGdyYWRpZW50LmFkZENvbG9yU3RvcChcIjEuMFwiLFwicmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGN0eC5maWxsU3R5bGU9Z3JhZGllbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v6IOM5pmvIOS7quebmOWkluahhlxyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlPVwiIzAwOTBEMlwiO1xyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XHJcbiAgICAgICAgICAgICAgICBjdHguYXJjKDE1MCwgMTUwLCAxMDAsIE1hdGguUEkgKiAwLjIsIE1hdGguUEkgKiAwLjgsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v5Luq55uY55qE5oyH6ZKI5qC55ZyG54K5XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5MEQyXCI7XHJcbiAgICAgICAgICAgICAgICBjdHguYXJjKDE1MCwgMTUwLCA1LCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v5oyH6ZKI55qE5oyH6ZKI5qC55ZyG54K5XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XHJcbiAgICAgICAgICAgICAgICBjdHguYXJjKDE1MCwgMTUwLCAzLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgX3AgPSBfdGhpcy5nZXRQb3MoYWxsRGVnLCAxNTAsIDE1MCwgNzApOyAvL+iOt+WPluWdkOagh1xyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v5Luq55uY55qE5oyH6ZKIXHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKDE1MCwgMTUwKTtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oX3AueCwgX3AueSk7XHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihhbGxEZWcgJSAzNjAgPT0gc0RlZyArIDkwKXsgLy/liLDovr7nu4jngrlcclxuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKF90aGlzLmFuaSlcclxuICAgICAgICAgICAgICAgIC8vIF90aGlzLmxvZygn5Yqo55S75a6M5LqGJyk7XHJcbiAgICAgICAgICAgICAgICAvL3NvbWUgY29kZeOAguOAguOAglxyXG4gICAgICAgICAgICB9ZWxzZXsvL+e7p+e7reWKqOeUu1xyXG4gICAgICAgICAgICAgICAgYWxsRGVnICs9IHNwZWVkO1xyXG4gICAgICAgICAgICAgICAgaWYoX3RoaXMub2ZmQW5pKXsvL+aYr+WQpuW8gOWQr+WKqOeUu1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShfdGhpcy5kcmF3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLmFuaSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcpOy8v5omn6KGM5Yqo55S7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbW1vbi9tQ2hhcnQuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n")}});