/*! wxx专用！https://github.com/wangzongming */
webpackHotUpdate(0,{10:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(11);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Chart = function () {\n    function Chart() {\n        _classCallCheck(this, Chart);\n\n        //\n        this.getPixelRatio = function (context) {\n            var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;\n            return (window.devicePixelRatio || 1) / backingStore;\n        };\n    }\n\n    _createClass(Chart, [{\n        key: 'canvasRem',\n        value: function canvasRem(rem) {\n            //1rem = window / 10  返回一个canvas用的单位\n            if (!rem) {\n                return;\n            };\n            var _num = parseInt(rem);\n            var winWinth = window.innerWidth;\n            return winWinth / 10 * _num;\n        }\n    }, {\n        key: 'getPos',\n        value: function getPos(deg, x, y, r) {\n            //获取 圆边上的 某个坐标 ( 角度(360), x(圆心x), y(圆心y), r(半径))\n            var hudu = 2 * Math.PI / 360 * deg; //  360/8=45,即45度(这个随个人设置)\n            var _x = x + Math.sin(hudu) * r; //  95 是圆形中心的坐标X   即定位left 的值\n            var _y = y - Math.cos(hudu) * r; //  95 是圆形中心的坐标Y   即定位top 的值\n            return { x: _x, y: _y };\n        }\n    }, {\n        key: 'log',\n        value: function log(text) {\n            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"red\";\n            var fontSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '25px';\n\n            console.log('%c' + text, 'color:' + color + ';font-size:' + fontSize);\n        }\n    }, {\n        key: 'init',\n        value: function init(opt) {\n            var rem = this.canvasRem;\n            var canvasContainer = $(opt.ele);\n            this.canvas = document.createElement(\"canvas\");\n            this.canvas.className = \"canvas\";\n            this.canvas.width = rem('10rem');\n            this.canvas.height = rem('8rem');\n            canvasContainer.appendChild(this.canvas);\n            // console.log(opt);\n            // console.log(canvasContainer);\n            var ctx = this.canvas.getContext(\"2d\");\n            this.ratio = this.getPixelRatio(ctx); //画图片时解决模糊问题\n            var _this = this;\n\n            var sDeg = 180 / Math.PI * Math.PI * 0.2; //仪盘表起点点角度 可直接写 36\n            var eDeg = 180 / Math.PI * Math.PI * 0.8; //仪盘表结束点角度 可直接写 144\n            var speed = 2; //转动速度 目前只能填写整数\n\n            var allDeg = eDeg + 90;\n\n            this.offAni = false; //开启动画\n\n            this.log('[\\u8D77\\u59CB\\u89D2\\u5EA6\\uFF1A' + sDeg + ', \\u7ED3\\u675F\\u89D2\\u5EA6\\uFF1A' + eDeg + ']');\n            // console.log( Math.PI/180 * ( eDeg-sDeg ) )\n            this.draw = function () {\n                ctx.clearRect(0, 0, 400, 400);\n                // _this.log( allDeg ,'pink','16px')\n                // _this.log(eDeg+90,'pink','16px')\n                if (!(allDeg > sDeg + 90 && allDeg < eDeg + 90)) {\n                    //指针动画运动过程\n\n                    ctx.lineWidth = 4;\n                    for (var i = eDeg + 90; i < 360 + sDeg + 90; i += 5) {\n                        //刻度（小）  先画刻度是为了仪盘表外壳能盖住他\n                        ctx.beginPath();\n                        ctx.fillStyle = \"#0090D2\";\n                        var _pos = _this.getPos(i, 150, 150, 100 - ctx.lineWidth + 1); //获取坐标\n                        ctx.arc(_pos.x, _pos.y, 2, Math.PI * 0, Math.PI * 2, true);\n                        ctx.fill();\n                    }\n                    for (var _i = eDeg + 90; _i < 360 + sDeg + 90; _i += 10) {\n                        //刻度（大）  先画刻度是为了仪盘表外壳能盖住他\n                        ctx.beginPath();\n                        ctx.fillStyle = \"red\";\n                        var _pos2 = _this.getPos(_i, 150, 150, 100 - ctx.lineWidth + 1); //获取坐标\n                        ctx.arc(_pos2.x, _pos2.y, 3, Math.PI * 0, Math.PI * 2, true);\n                        ctx.fill();\n                    }\n\n                    for (var _i2 = eDeg + 90; _i2 < 360 + sDeg + 90; _i2 += 10) {\n                        //刻度数  先画刻度是为了仪盘表外壳能盖住他\n                        ctx.beginPath();\n                        var _posT = _this.getPos(_i2, 150, 150, 90 - ctx.lineWidth + 1); //获取坐标\n                        ctx.fillStyle = 'red';\n                        ctx.font = \"8px Georgia\";\n                        ctx.fillText(_i2, _posT.x, _posT.y);\n\n                        // var gradient=ctx.createLinearGradient(0,0,c.width,0);\n                        // gradient.addColorStop(\"0\",\"magenta\");\n                        // gradient.addColorStop(\"0.5\",\"blue\");\n                        // gradient.addColorStop(\"1.0\",\"red\");\n                        // ctx.fillStyle=gradient;\n                    }\n\n                    ctx.beginPath(); //背景 仪盘外框\n                    ctx.strokeStyle = \"#0090D2\";\n                    ctx.beginPath();\n                    ctx.lineCap = \"round\";\n                    ctx.arc(150, 150, 100, Math.PI * 0.2, Math.PI * 0.8, true);\n                    ctx.stroke();\n\n                    ctx.beginPath(); //仪盘的指针根圆点\n                    ctx.fillStyle = \"#0090D2\";\n                    ctx.arc(150, 150, 5, 0, Math.PI * 2);\n                    ctx.fill();\n\n                    ctx.beginPath(); //指针的指针根圆点\n                    ctx.fillStyle = 'red';\n                    ctx.arc(150, 150, 3, 0, Math.PI * 2);\n                    ctx.fill();\n\n                    var _p = _this.getPos(allDeg, 150, 150, 70); //获取坐标\n                    ctx.beginPath(); //仪盘的指针\n                    ctx.strokeStyle = 'red';\n                    ctx.lineCap = \"round\";\n                    ctx.lineWidth = 2;\n                    ctx.moveTo(150, 150);\n                    ctx.lineTo(_p.x, _p.y);\n                    ctx.stroke();\n                }\n\n                if (allDeg % 360 == sDeg + 90) {\n                    //到达终点\n                    cancelAnimationFrame(_this.ani);\n                    // _this.log('动画完了');\n                    //some code。。。\n                } else {\n                    //继续动画\n                    allDeg += speed;\n                    if (_this.offAni) {\n                        //是否开启动画\n                        requestAnimationFrame(_this.draw);\n                    }\n                };\n            };\n\n            this.ani = requestAnimationFrame(this.draw); //执行动画\n        }\n    }]);\n\n    return Chart;\n}();\n\nexports.default = Chart;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tbW9uL21DaGFydC5qcz84NzZlIl0sIm5hbWVzIjpbIkNoYXJ0IiwiZ2V0UGl4ZWxSYXRpbyIsImNvbnRleHQiLCJiYWNraW5nU3RvcmUiLCJiYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwid2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJtc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJvQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJyZW0iLCJfbnVtIiwicGFyc2VJbnQiLCJ3aW5XaW50aCIsImlubmVyV2lkdGgiLCJkZWciLCJ4IiwieSIsInIiLCJodWR1IiwiTWF0aCIsIlBJIiwiX3giLCJzaW4iLCJfeSIsImNvcyIsInRleHQiLCJjb2xvciIsImZvbnRTaXplIiwiY29uc29sZSIsImxvZyIsIm9wdCIsImNhbnZhc1JlbSIsImNhbnZhc0NvbnRhaW5lciIsIiQiLCJlbGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImFwcGVuZENoaWxkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJhdGlvIiwiX3RoaXMiLCJzRGVnIiwiZURlZyIsInNwZWVkIiwiYWxsRGVnIiwib2ZmQW5pIiwiZHJhdyIsImNsZWFyUmVjdCIsImxpbmVXaWR0aCIsImkiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJfcG9zIiwiZ2V0UG9zIiwiYXJjIiwiZmlsbCIsIl9wb3NUIiwiZm9udCIsImZpbGxUZXh0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lQ2FwIiwic3Ryb2tlIiwiX3AiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFuaSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztJQUNNQSxLO0FB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LEdBaEQ2QyxDQWdEN0I7QUFDaEJiLHdCQUFJYyxTQUFKLEdBQWdCLEtBQWhCO0FBQ0FkLHdCQUFJaUIsR0FBSixDQUFRLEdBQVIsRUFBYSxHQUFiLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCeEMsS0FBS0MsRUFBTCxHQUFVLENBQWxDO0FBQ0FzQix3QkFBSWtCLElBQUo7O0FBRUEsd0JBQUlPLEtBQUt0QixNQUFNYSxNQUFOLENBQWFULE1BQWIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsRUFBL0IsQ0FBVCxDQXJENkMsQ0FxREE7QUFDN0NQLHdCQUFJYSxTQUFKLEdBdEQ2QyxDQXNEN0I7QUFDaEJiLHdCQUFJc0IsV0FBSixHQUFrQixLQUFsQjtBQUNBdEIsd0JBQUl1QixPQUFKLEdBQWMsT0FBZDtBQUNBdkIsd0JBQUlXLFNBQUosR0FBZ0IsQ0FBaEI7QUFDQVgsd0JBQUkwQixNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQjtBQUNBMUIsd0JBQUkyQixNQUFKLENBQVdGLEdBQUdwRCxDQUFkLEVBQWlCb0QsR0FBR25ELENBQXBCO0FBQ0EwQix3QkFBSXdCLE1BQUo7QUFFSDs7QUFFRCxvQkFBR2pCLFNBQVMsR0FBVCxJQUFnQkgsT0FBTyxFQUExQixFQUE2QjtBQUFFO0FBQzNCd0IseUNBQXFCekIsTUFBTTBCLEdBQTNCO0FBQ0E7QUFDQTtBQUNILGlCQUpELE1BSUs7QUFBQztBQUNGdEIsOEJBQVVELEtBQVY7QUFDQSx3QkFBR0gsTUFBTUssTUFBVCxFQUFnQjtBQUFDO0FBQ2JzQiw4Q0FBc0IzQixNQUFNTSxJQUE1QjtBQUNIO0FBQ0o7QUFDSixhQTlFRDs7QUFnRkEsaUJBQUtvQixHQUFMLEdBQVdDLHNCQUFzQixLQUFLckIsSUFBM0IsQ0FBWCxDQXpHSyxDQXlHdUM7QUFDL0M7Ozs7OztrQkFJVXJELEsiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY2FudmFzUmVtLmpzJztcclxuY2xhc3MgQ2hhcnQge1xyXG4gICAgY29uc3RydWN0b3IoKXsvL1xyXG4gICAgICAgIHRoaXMuZ2V0UGl4ZWxSYXRpbyA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgICAgICAgICAgIGxldCBiYWNraW5nU3RvcmUgPSBjb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgY29udGV4dC53ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGNvbnRleHQubW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxyXG4gICAgICAgICAgICAgICAgY29udGV4dC5tc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgY29udGV4dC5vQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCBjb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgMTtcclxuICAgICAgICAgICAgcmV0dXJuICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSAvIGJhY2tpbmdTdG9yZTtcclxuICAgICAgICB9O1xyXG4gICAgfSAgIFxyXG5cclxuICAgIGNhbnZhc1JlbShyZW0pey8vMXJlbSA9IHdpbmRvdyAvIDEwICDov5Tlm57kuIDkuKpjYW52YXPnlKjnmoTljZXkvY1cclxuICAgICAgICBpZighcmVtKXtyZXR1cm59O1xyXG4gICAgICAgIGxldCBfbnVtID0gcGFyc2VJbnQocmVtKTtcclxuICAgICAgICBsZXQgd2luV2ludGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICByZXR1cm4gd2luV2ludGggLyAxMCAqIF9udW07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zKGRlZywgeCwgeSwgcil7Ly/ojrflj5Yg5ZyG6L655LiK55qEIOafkOS4quWdkOaghyAoIOinkuW6pigzNjApLCB4KOWchuW/g3gpLCB5KOWchuW/g3kpLCByKOWNiuW+hCkpXHJcbiAgICAgICAgdmFyIGh1ZHUgPSAoMipNYXRoLlBJIC8gMzYwKSAqIGRlZzsgICAvLyAgMzYwLzg9NDUs5Y2zNDXluqYo6L+Z5Liq6ZqP5Liq5Lq66K6+572uKVxyXG4gICAgICAgIHZhciBfeCA9IHggKyBNYXRoLnNpbihodWR1KSAqIHI7ICAgIC8vICA5NSDmmK/lnIblvaLkuK3lv4PnmoTlnZDmoIdYICAg5Y2z5a6a5L2NbGVmdCDnmoTlgLxcclxuICAgICAgICB2YXIgX3kgPSB5IC0gTWF0aC5jb3MoaHVkdSkgKiByOyAgICAvLyAgOTUg5piv5ZyG5b2i5Lit5b+D55qE5Z2Q5qCHWSAgIOWNs+WumuS9jXRvcCDnmoTlgLxcclxuICAgICAgICByZXR1cm4ge3g6X3gsIHk6X3l9O1xyXG4gICAgfVxyXG5cclxuICAgIGxvZyh0ZXh0LCBjb2xvcj1cInJlZFwiLCBmb250U2l6ZT0nMjVweCcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAlYyR7dGV4dH1gLGBjb2xvcjoke2NvbG9yfTtmb250LXNpemU6JHtmb250U2l6ZX1gKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQob3B0KXtcclxuICAgICAgICB2YXIgcmVtID0gdGhpcy5jYW52YXNSZW07XHJcbiAgICAgICAgY29uc3QgY2FudmFzQ29udGFpbmVyID0gJChvcHQuZWxlKTtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NOYW1lID0gXCJjYW52YXNcIjtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHJlbSgnMTByZW0nKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSByZW0oJzhyZW0nKTtcclxuICAgICAgICBjYW52YXNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2FudmFzQ29udGFpbmVyKTtcclxuICAgICAgICB2YXIgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMucmF0aW8gPSB0aGlzLmdldFBpeGVsUmF0aW8oY3R4KTsvL+eUu+WbvueJh+aXtuino+WGs+aooeeziumXrumimFxyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHNEZWcgPSAxODAgLyBNYXRoLlBJICogTWF0aC5QSSAqIDAuMjsgLy/ku6rnm5jooajotbfngrnngrnop5LluqYg5Y+v55u05o6l5YaZIDM2XHJcbiAgICAgICAgdmFyIGVEZWcgPSAxODAgLyBNYXRoLlBJICogTWF0aC5QSSAqIDAuODsgLy/ku6rnm5jooajnu5PmnZ/ngrnop5LluqYg5Y+v55u05o6l5YaZIDE0NFxyXG4gICAgICAgIHZhciBzcGVlZCA9IDI7Ly/ovazliqjpgJ/luqYg55uu5YmN5Y+q6IO95aGr5YaZ5pW05pWwXHJcblxyXG4gICAgICAgIHZhciBhbGxEZWcgPSBlRGVnICsgOTA7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMub2ZmQW5pID0gZmFsc2U7Ly/lvIDlkK/liqjnlLtcclxuICAgIFxyXG4gICAgICAgIHRoaXMubG9nKGBb6LW35aeL6KeS5bqm77yaJHtzRGVnfSwg57uT5p2f6KeS5bqm77yaJHtlRGVnfV1gKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggTWF0aC5QSS8xODAgKiAoIGVEZWctc0RlZyApIClcclxuICAgICAgICB0aGlzLmRyYXcgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDQwMCwgNDAwKTtcclxuICAgICAgICAgICAgLy8gX3RoaXMubG9nKCBhbGxEZWcgLCdwaW5rJywnMTZweCcpXHJcbiAgICAgICAgICAgIC8vIF90aGlzLmxvZyhlRGVnKzkwLCdwaW5rJywnMTZweCcpXHJcbiAgICAgICAgICAgIGlmKCAhKGFsbERlZyA+IHNEZWcgKyA5MCAmJiBhbGxEZWcgPCBlRGVnICsgOTApICl7Ly/mjIfpkojliqjnlLvov5Dliqjov4fnqItcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gNDtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IGVEZWcrOTA7IGkgPCAzNjAgKyBzRGVnICsgOTA7IGkgKz0gNSl7Ly/liLvluqbvvIjlsI/vvIkgIOWFiOeUu+WIu+W6puaYr+S4uuS6huS7quebmOihqOWkluWjs+iDveebluS9j+S7llxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5MEQyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9wb3MgPSBfdGhpcy5nZXRQb3MoaSwgMTUwLCAxNTAsIDEwMCAtIGN0eC5saW5lV2lkdGggKyAxKTsgLy/ojrflj5blnZDmoIdcclxuICAgICAgICAgICAgICAgICAgICBjdHguYXJjKF9wb3MueCwgX3Bvcy55LCAyLCBNYXRoLlBJICogMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSBlRGVnKzkwOyBpIDwgMzYwICsgc0RlZyArIDkwOyBpICs9IDEwKXsvL+WIu+W6pu+8iOWkp++8iSAg5YWI55S75Yi75bqm5piv5Li65LqG5Luq55uY6KGo5aSW5aOz6IO955uW5L2P5LuWXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfcG9zID0gX3RoaXMuZ2V0UG9zKGksIDE1MCwgMTUwLCAxMDAgLSBjdHgubGluZVdpZHRoICsgMSk7IC8v6I635Y+W5Z2Q5qCHXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmFyYyhfcG9zLngsIF9wb3MueSwgMywgTWF0aC5QSSAqIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IGVEZWcgKyA5MDsgaSA8IDM2MCArIHNEZWcgKyA5MDsgaSArPSAxMCl7Ly/liLvluqbmlbAgIOWFiOeUu+WIu+W6puaYr+S4uuS6huS7quebmOihqOWkluWjs+iDveebluS9j+S7llxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3Bvc1QgPSBfdGhpcy5nZXRQb3MoaSwgMTUwLCAxNTAsIDkwIC0gY3R4LmxpbmVXaWR0aCArIDEpOyAvL+iOt+WPluWdkOagh1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmVkJztcclxuICAgICAgICAgICAgICAgICAgICBjdHguZm9udCA9IFwiOHB4IEdlb3JnaWFcIjtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoaSwgX3Bvc1QueCwgX3Bvc1QueSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBncmFkaWVudD1jdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwwLGMud2lkdGgsMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFwiMFwiLFwibWFnZW50YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBncmFkaWVudC5hZGRDb2xvclN0b3AoXCIwLjVcIixcImJsdWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFwiMS4wXCIsXCJyZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY3R4LmZpbGxTdHlsZT1ncmFkaWVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7Ly/og4zmma8g5Luq55uY5aSW5qGGXHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGU9XCIjMDA5MEQyXCI7XHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgICAgICAgICAgICAgIGN0eC5hcmMoMTUwLCAxNTAsIDEwMCwgTWF0aC5QSSAqIDAuMiwgTWF0aC5QSSAqIDAuOCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7Ly/ku6rnm5jnmoTmjIfpkojmoLnlnIbngrlcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDkwRDJcIjtcclxuICAgICAgICAgICAgICAgIGN0eC5hcmMoMTUwLCAxNTAsIDUsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7Ly/mjIfpkojnmoTmjIfpkojmoLnlnIbngrlcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmVkJztcclxuICAgICAgICAgICAgICAgIGN0eC5hcmMoMTUwLCAxNTAsIDMsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBfcCA9IF90aGlzLmdldFBvcyhhbGxEZWcsIDE1MCwgMTUwLCA3MCk7IC8v6I635Y+W5Z2Q5qCHXHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7Ly/ku6rnm5jnmoTmjIfpkohcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZWQnO1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcclxuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oMTUwLCAxNTApO1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhfcC54LCBfcC55KTtcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGFsbERlZyAlIDM2MCA9PSBzRGVnICsgOTApeyAvL+WIsOi+vue7iOeCuVxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoX3RoaXMuYW5pKVxyXG4gICAgICAgICAgICAgICAgLy8gX3RoaXMubG9nKCfliqjnlLvlrozkuoYnKTtcclxuICAgICAgICAgICAgICAgIC8vc29tZSBjb2Rl44CC44CC44CCXHJcbiAgICAgICAgICAgIH1lbHNley8v57un57ut5Yqo55S7XHJcbiAgICAgICAgICAgICAgICBhbGxEZWcgKz0gc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBpZihfdGhpcy5vZmZBbmkpey8v5piv5ZCm5byA5ZCv5Yqo55S7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF90aGlzLmRyYXcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMuYW5pID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhdyk7Ly/miafooYzliqjnlLtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tbW9uL21DaGFydC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n")}});