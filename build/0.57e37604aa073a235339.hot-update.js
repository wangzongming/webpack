/*! wxx专用！https://github.com/wangzongming */
webpackHotUpdate(0,{10:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(11);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Chart = function () {\n    function Chart() {\n        _classCallCheck(this, Chart);\n\n        //\n        this.getPixelRatio = function (context) {\n            var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;\n            return (window.devicePixelRatio || 1) / backingStore;\n        };\n    }\n\n    _createClass(Chart, [{\n        key: 'canvasRem',\n        value: function canvasRem(rem) {\n            //1rem = window / 10  返回一个canvas用的单位\n            if (!rem) {\n                return;\n            };\n            var _num = parseInt(rem);\n            var winWinth = window.innerWidth;\n            return winWinth / 10 * _num;\n        }\n    }, {\n        key: 'getPos',\n        value: function getPos(deg, x, y, r) {\n            //获取 圆边上的 某个坐标 ( 角度(360), x(圆心x), y(圆心y), r(半径))\n            var hudu = 2 * Math.PI / 360 * deg; //  360/8=45,即45度(这个随个人设置)\n            var _x = x + Math.sin(hudu) * r; //  95 是圆形中心的坐标X   即定位left 的值\n            var _y = y - Math.cos(hudu) * r; //  95 是圆形中心的坐标Y   即定位top 的值\n            return { x: _x, y: _y };\n        }\n    }, {\n        key: 'log',\n        value: function log(text) {\n            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"red\";\n            var fontSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '25px';\n\n            console.log('%c' + text, 'color:' + color + ';font-size:' + fontSize);\n        }\n    }, {\n        key: 'init',\n        value: function init(opt) {\n            var rem = this.canvasRem;\n            var canvasContainer = $(opt.ele);\n            this.canvas = document.createElement(\"canvas\");\n            this.canvas.className = \"canvas\";\n            this.canvas.width = rem('10rem');\n            this.canvas.height = rem('8rem');\n            canvasContainer.appendChild(this.canvas);\n            // console.log(opt);\n            // console.log(canvasContainer);\n            var ctx = this.canvas.getContext(\"2d\");\n            this.ratio = this.getPixelRatio(ctx); //画图片时解决模糊问题\n            var _this = this;\n\n            var sDeg = 180 / Math.PI * Math.PI * 0.2; //仪盘表起点点角度 可直接写 36\n            var eDeg = 180 / Math.PI * Math.PI * 0.8; //仪盘表结束点角度 可直接写 144\n            var speed = 2; //转动速度 目前只能填写整数\n\n            var allDeg = eDeg + 90;\n\n            this.offAni = false; //开启动画\n\n            this.log('[\\u8D77\\u59CB\\u89D2\\u5EA6\\uFF1A' + sDeg + ', \\u7ED3\\u675F\\u89D2\\u5EA6\\uFF1A' + eDeg + ']');\n            // console.log( Math.PI/180 * ( eDeg-sDeg ) )\n            this.draw = function () {\n                ctx.clearRect(0, 0, 400, 400);\n                // _this.log( allDeg ,'pink','16px')\n                // _this.log(eDeg+90,'pink','16px')\n                if (!(allDeg > sDeg + 90 && allDeg < eDeg + 90)) {\n                    //指针动画运动过程\n\n                    ctx.lineWidth = 4;\n                    for (var i = eDeg + 90; i < 360 + sDeg + 90; i += 5) {\n                        //刻度（小）  先画刻度是为了仪盘表外壳能盖住他\n                        ctx.beginPath();\n                        ctx.fillStyle = \"#0090D2\";\n                        var _pos = _this.getPos(i, 150, 150, 100 - ctx.lineWidth + 1); //获取坐标\n                        ctx.arc(_pos.x, _pos.y, 2, Math.PI * 0, Math.PI * 2, true);\n                        ctx.fill();\n                    }\n                    for (var _i = eDeg + 90; _i < 360 + sDeg + 90; _i += 10) {\n                        //刻度（大）  先画刻度是为了仪盘表外壳能盖住他\n                        ctx.beginPath();\n                        ctx.fillStyle = \"red\";\n                        var _pos2 = _this.getPos(_i, 150, 150, 100 - ctx.lineWidth + 1); //获取坐标\n                        ctx.arc(_pos2.x, _pos2.y, 3, Math.PI * 0, Math.PI * 2, true);\n                        ctx.fill();\n                    }\n\n                    for (var _i2 = eDeg + 90; _i2 < 360 + sDeg + 90; _i2 += 10) {\n                        //刻度数  先画刻度是为了仪盘表外壳能盖住他\n                        ctx.beginPath();\n                        ctx.font = \"10px\";\n                        var _pos3 = _this.getPos(_i2, 150, 150, 100 - ctx.lineWidth + 1); //获取坐标\n                        ctx.arc(_pos3.x, _pos3.y, 3, Math.PI * 0, Math.PI * 2, true);\n                        ctx.fill();\n                    }\n\n                    ctx.beginPath(); //背景 仪盘外框\n                    ctx.strokeStyle = \"#0090D2\";\n                    ctx.beginPath();\n                    ctx.lineCap = \"round\";\n                    ctx.arc(150, 150, 100, Math.PI * 0.2, Math.PI * 0.8, true);\n                    ctx.stroke();\n\n                    ctx.beginPath(); //仪盘的指针根圆点\n                    ctx.fillStyle = \"#0090D2\";\n                    ctx.arc(150, 150, 5, 0, Math.PI * 2);\n                    ctx.fill();\n\n                    ctx.beginPath(); //指针的指针根圆点\n                    ctx.fillStyle = 'red';\n                    ctx.arc(150, 150, 3, 0, Math.PI * 2);\n                    ctx.fill();\n\n                    var _p = _this.getPos(allDeg, 150, 150, 70); //获取坐标\n                    ctx.beginPath(); //仪盘的指针\n                    ctx.strokeStyle = 'red';\n                    ctx.lineCap = \"round\";\n                    ctx.lineWidth = 2;\n                    ctx.moveTo(150, 150);\n                    ctx.lineTo(_p.x, _p.y);\n                    ctx.stroke();\n                }\n\n                if (allDeg % 360 == sDeg + 90) {\n                    //到达终点\n                    cancelAnimationFrame(_this.ani);\n                    // _this.log('动画完了');\n                    //some code。。。\n                } else {\n                    //继续动画\n                    allDeg += speed;\n                    if (_this.offAni) {\n                        //是否开启动画\n                        requestAnimationFrame(_this.draw);\n                    }\n                };\n            };\n\n            this.ani = requestAnimationFrame(this.draw); //执行动画\n        }\n    }]);\n\n    return Chart;\n}();\n\nexports.default = Chart;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tbW9uL21DaGFydC5qcz84NzZlIl0sIm5hbWVzIjpbIkNoYXJ0IiwiZ2V0UGl4ZWxSYXRpbyIsImNvbnRleHQiLCJiYWNraW5nU3RvcmUiLCJiYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwid2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJtc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJvQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJyZW0iLCJfbnVtIiwicGFyc2VJbnQiLCJ3aW5XaW50aCIsImlubmVyV2lkdGgiLCJkZWciLCJ4IiwieSIsInIiLCJodWR1IiwiTWF0aCIsIlBJIiwiX3giLCJzaW4iLCJfeSIsImNvcyIsInRleHQiLCJjb2xvciIsImZvbnRTaXplIiwiY29uc29sZSIsImxvZyIsIm9wdCIsImNhbnZhc1JlbSIsImNhbnZhc0NvbnRhaW5lciIsIiQiLCJlbGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImFwcGVuZENoaWxkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJhdGlvIiwiX3RoaXMiLCJzRGVnIiwiZURlZyIsInNwZWVkIiwiYWxsRGVnIiwib2ZmQW5pIiwiZHJhdyIsImNsZWFyUmVjdCIsImxpbmVXaWR0aCIsImkiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJfcG9zIiwiZ2V0UG9zIiwiYXJjIiwiZmlsbCIsImZvbnQiLCJzdHJva2VTdHlsZSIsImxpbmVDYXAiLCJzdHJva2UiLCJfcCIsIm1vdmVUbyIsImxpbmVUbyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYW5pIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0lBQ01BLEs7QUFDRixxQkFBYTtBQUFBOztBQUFD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Qix3QkFBSWEsU0FBSixHQTFDNkMsQ0EwQzdCO0FBQ2hCYix3QkFBSWMsU0FBSixHQUFnQixLQUFoQjtBQUNBZCx3QkFBSWlCLEdBQUosQ0FBUSxHQUFSLEVBQWEsR0FBYixFQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QnhDLEtBQUtDLEVBQUwsR0FBVSxDQUFsQztBQUNBc0Isd0JBQUlrQixJQUFKOztBQUVBLHdCQUFJSyxLQUFLcEIsTUFBTWEsTUFBTixDQUFhVCxNQUFiLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEVBQS9CLENBQVQsQ0EvQzZDLENBK0NBO0FBQzdDUCx3QkFBSWEsU0FBSixHQWhENkMsQ0FnRDdCO0FBQ2hCYix3QkFBSW9CLFdBQUosR0FBa0IsS0FBbEI7QUFDQXBCLHdCQUFJcUIsT0FBSixHQUFjLE9BQWQ7QUFDQXJCLHdCQUFJVyxTQUFKLEdBQWdCLENBQWhCO0FBQ0FYLHdCQUFJd0IsTUFBSixDQUFXLEdBQVgsRUFBZ0IsR0FBaEI7QUFDQXhCLHdCQUFJeUIsTUFBSixDQUFXRixHQUFHbEQsQ0FBZCxFQUFpQmtELEdBQUdqRCxDQUFwQjtBQUNBMEIsd0JBQUlzQixNQUFKO0FBRUg7O0FBRUQsb0JBQUdmLFNBQVMsR0FBVCxJQUFnQkgsT0FBTyxFQUExQixFQUE2QjtBQUFFO0FBQzNCc0IseUNBQXFCdkIsTUFBTXdCLEdBQTNCO0FBQ0E7QUFDQTtBQUNILGlCQUpELE1BSUs7QUFBQztBQUNGcEIsOEJBQVVELEtBQVY7QUFDQSx3QkFBR0gsTUFBTUssTUFBVCxFQUFnQjtBQUFDO0FBQ2JvQiw4Q0FBc0J6QixNQUFNTSxJQUE1QjtBQUNIO0FBQ0o7QUFDSixhQXhFRDs7QUEwRUEsaUJBQUtrQixHQUFMLEdBQVdDLHNCQUFzQixLQUFLbkIsSUFBM0IsQ0FBWCxDQW5HSyxDQW1HdUM7QUFDL0M7Ozs7OztrQkFJVXJELEsiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY2FudmFzUmVtLmpzJztcclxuY2xhc3MgQ2hhcnQge1xyXG4gICAgY29uc3RydWN0b3IoKXsvL1xyXG4gICAgICAgIHRoaXMuZ2V0UGl4ZWxSYXRpbyA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgICAgICAgICAgIGxldCBiYWNraW5nU3RvcmUgPSBjb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgY29udGV4dC53ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGNvbnRleHQubW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxyXG4gICAgICAgICAgICAgICAgY29udGV4dC5tc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgY29udGV4dC5vQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCBjb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgMTtcclxuICAgICAgICAgICAgcmV0dXJuICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSAvIGJhY2tpbmdTdG9yZTtcclxuICAgICAgICB9O1xyXG4gICAgfSAgIFxyXG5cclxuICAgIGNhbnZhc1JlbShyZW0pey8vMXJlbSA9IHdpbmRvdyAvIDEwICDov5Tlm57kuIDkuKpjYW52YXPnlKjnmoTljZXkvY1cclxuICAgICAgICBpZighcmVtKXtyZXR1cm59O1xyXG4gICAgICAgIGxldCBfbnVtID0gcGFyc2VJbnQocmVtKTtcclxuICAgICAgICBsZXQgd2luV2ludGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICByZXR1cm4gd2luV2ludGggLyAxMCAqIF9udW07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zKGRlZywgeCwgeSwgcil7Ly/ojrflj5Yg5ZyG6L655LiK55qEIOafkOS4quWdkOaghyAoIOinkuW6pigzNjApLCB4KOWchuW/g3gpLCB5KOWchuW/g3kpLCByKOWNiuW+hCkpXHJcbiAgICAgICAgdmFyIGh1ZHUgPSAoMipNYXRoLlBJIC8gMzYwKSAqIGRlZzsgICAvLyAgMzYwLzg9NDUs5Y2zNDXluqYo6L+Z5Liq6ZqP5Liq5Lq66K6+572uKVxyXG4gICAgICAgIHZhciBfeCA9IHggKyBNYXRoLnNpbihodWR1KSAqIHI7ICAgIC8vICA5NSDmmK/lnIblvaLkuK3lv4PnmoTlnZDmoIdYICAg5Y2z5a6a5L2NbGVmdCDnmoTlgLxcclxuICAgICAgICB2YXIgX3kgPSB5IC0gTWF0aC5jb3MoaHVkdSkgKiByOyAgICAvLyAgOTUg5piv5ZyG5b2i5Lit5b+D55qE5Z2Q5qCHWSAgIOWNs+WumuS9jXRvcCDnmoTlgLxcclxuICAgICAgICByZXR1cm4ge3g6X3gsIHk6X3l9O1xyXG4gICAgfVxyXG5cclxuICAgIGxvZyh0ZXh0LCBjb2xvcj1cInJlZFwiLCBmb250U2l6ZT0nMjVweCcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAlYyR7dGV4dH1gLGBjb2xvcjoke2NvbG9yfTtmb250LXNpemU6JHtmb250U2l6ZX1gKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQob3B0KXtcclxuICAgICAgICB2YXIgcmVtID0gdGhpcy5jYW52YXNSZW07XHJcbiAgICAgICAgY29uc3QgY2FudmFzQ29udGFpbmVyID0gJChvcHQuZWxlKTtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NOYW1lID0gXCJjYW52YXNcIjtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHJlbSgnMTByZW0nKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSByZW0oJzhyZW0nKTtcclxuICAgICAgICBjYW52YXNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2FudmFzQ29udGFpbmVyKTtcclxuICAgICAgICB2YXIgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMucmF0aW8gPSB0aGlzLmdldFBpeGVsUmF0aW8oY3R4KTsvL+eUu+WbvueJh+aXtuino+WGs+aooeeziumXrumimFxyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHNEZWcgPSAxODAgLyBNYXRoLlBJICogTWF0aC5QSSAqIDAuMjsgLy/ku6rnm5jooajotbfngrnngrnop5LluqYg5Y+v55u05o6l5YaZIDM2XHJcbiAgICAgICAgdmFyIGVEZWcgPSAxODAgLyBNYXRoLlBJICogTWF0aC5QSSAqIDAuODsgLy/ku6rnm5jooajnu5PmnZ/ngrnop5LluqYg5Y+v55u05o6l5YaZIDE0NFxyXG4gICAgICAgIHZhciBzcGVlZCA9IDI7Ly/ovazliqjpgJ/luqYg55uu5YmN5Y+q6IO95aGr5YaZ5pW05pWwXHJcblxyXG4gICAgICAgIHZhciBhbGxEZWcgPSBlRGVnICsgOTA7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMub2ZmQW5pID0gZmFsc2U7Ly/lvIDlkK/liqjnlLtcclxuICAgIFxyXG4gICAgICAgIHRoaXMubG9nKGBb6LW35aeL6KeS5bqm77yaJHtzRGVnfSwg57uT5p2f6KeS5bqm77yaJHtlRGVnfV1gKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggTWF0aC5QSS8xODAgKiAoIGVEZWctc0RlZyApIClcclxuICAgICAgICB0aGlzLmRyYXcgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDQwMCwgNDAwKTtcclxuICAgICAgICAgICAgLy8gX3RoaXMubG9nKCBhbGxEZWcgLCdwaW5rJywnMTZweCcpXHJcbiAgICAgICAgICAgIC8vIF90aGlzLmxvZyhlRGVnKzkwLCdwaW5rJywnMTZweCcpXHJcbiAgICAgICAgICAgIGlmKCAhKGFsbERlZyA+IHNEZWcgKyA5MCAmJiBhbGxEZWcgPCBlRGVnICsgOTApICl7Ly/mjIfpkojliqjnlLvov5Dliqjov4fnqItcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gNDtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IGVEZWcrOTA7IGkgPCAzNjAgKyBzRGVnICsgOTA7IGkgKz0gNSl7Ly/liLvluqbvvIjlsI/vvIkgIOWFiOeUu+WIu+W6puaYr+S4uuS6huS7quebmOihqOWkluWjs+iDveebluS9j+S7llxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5MEQyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9wb3MgPSBfdGhpcy5nZXRQb3MoaSwgMTUwLCAxNTAsIDEwMCAtIGN0eC5saW5lV2lkdGggKyAxKTsgLy/ojrflj5blnZDmoIdcclxuICAgICAgICAgICAgICAgICAgICBjdHguYXJjKF9wb3MueCwgX3Bvcy55LCAyLCBNYXRoLlBJICogMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSBlRGVnKzkwOyBpIDwgMzYwICsgc0RlZyArIDkwOyBpICs9IDEwKXsvL+WIu+W6pu+8iOWkp++8iSAg5YWI55S75Yi75bqm5piv5Li65LqG5Luq55uY6KGo5aSW5aOz6IO955uW5L2P5LuWXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfcG9zID0gX3RoaXMuZ2V0UG9zKGksIDE1MCwgMTUwLCAxMDAgLSBjdHgubGluZVdpZHRoICsgMSk7IC8v6I635Y+W5Z2Q5qCHXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmFyYyhfcG9zLngsIF9wb3MueSwgMywgTWF0aC5QSSAqIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSBlRGVnKzkwOyBpIDwgMzYwICsgc0RlZyArIDkwOyBpICs9IDEwKXsvL+WIu+W6puaVsCAg5YWI55S75Yi75bqm5piv5Li65LqG5Luq55uY6KGo5aSW5aOz6IO955uW5L2P5LuWXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5mb250ID0gXCIxMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9wb3MgPSBfdGhpcy5nZXRQb3MoaSwgMTUwLCAxNTAsIDEwMCAtIGN0eC5saW5lV2lkdGggKyAxKTsgLy/ojrflj5blnZDmoIdcclxuICAgICAgICAgICAgICAgICAgICBjdHguYXJjKF9wb3MueCwgX3Bvcy55LCAzLCBNYXRoLlBJICogMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v6IOM5pmvIOS7quebmOWkluahhlxyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlPVwiIzAwOTBEMlwiO1xyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XHJcbiAgICAgICAgICAgICAgICBjdHguYXJjKDE1MCwgMTUwLCAxMDAsIE1hdGguUEkgKiAwLjIsIE1hdGguUEkgKiAwLjgsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v5Luq55uY55qE5oyH6ZKI5qC55ZyG54K5XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5MEQyXCI7XHJcbiAgICAgICAgICAgICAgICBjdHguYXJjKDE1MCwgMTUwLCA1LCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v5oyH6ZKI55qE5oyH6ZKI5qC55ZyG54K5XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XHJcbiAgICAgICAgICAgICAgICBjdHguYXJjKDE1MCwgMTUwLCAzLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgX3AgPSBfdGhpcy5nZXRQb3MoYWxsRGVnLCAxNTAsIDE1MCwgNzApOyAvL+iOt+WPluWdkOagh1xyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v5Luq55uY55qE5oyH6ZKIXHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKDE1MCwgMTUwKTtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oX3AueCwgX3AueSk7XHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihhbGxEZWcgJSAzNjAgPT0gc0RlZyArIDkwKXsgLy/liLDovr7nu4jngrlcclxuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKF90aGlzLmFuaSlcclxuICAgICAgICAgICAgICAgIC8vIF90aGlzLmxvZygn5Yqo55S75a6M5LqGJyk7XHJcbiAgICAgICAgICAgICAgICAvL3NvbWUgY29kZeOAguOAguOAglxyXG4gICAgICAgICAgICB9ZWxzZXsvL+e7p+e7reWKqOeUu1xyXG4gICAgICAgICAgICAgICAgYWxsRGVnICs9IHNwZWVkO1xyXG4gICAgICAgICAgICAgICAgaWYoX3RoaXMub2ZmQW5pKXsvL+aYr+WQpuW8gOWQr+WKqOeUu1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShfdGhpcy5kcmF3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLmFuaSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcpOy8v5omn6KGM5Yqo55S7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbW1vbi9tQ2hhcnQuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n")}});