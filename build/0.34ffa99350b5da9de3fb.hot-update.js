/*! wxx专用！https://github.com/wangzongming */
webpackHotUpdate(0,{10:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(11);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Chart = function () {\n    function Chart() {\n        _classCallCheck(this, Chart);\n\n        //\n        this.getPixelRatio = function (context) {\n            var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;\n            return (window.devicePixelRatio || 1) / backingStore;\n        };\n    }\n\n    _createClass(Chart, [{\n        key: 'canvasRem',\n        value: function canvasRem(rem) {\n            //1rem = window / 10  返回一个canvas用的单位\n            if (!rem) {\n                return;\n            };\n            var _num = parseInt(rem);\n            var winWinth = window.innerWidth;\n            return winWinth / 10 * _num;\n        }\n    }, {\n        key: 'getPos',\n        value: function getPos(deg, x, y, r) {\n            //获取 圆边上的 某个坐标 ( 角度(360), x(圆心x), y(圆心y), r(半径))\n            var hudu = 2 * Math.PI / 360 * deg; //  360/8=45,即45度(这个随个人设置)\n            var _x = x + Math.sin(hudu) * r; //  95 是圆形中心的坐标X   即定位left 的值\n            var _y = y - Math.cos(hudu) * r; //  95 是圆形中心的坐标Y   即定位top 的值\n            return { x: _x, y: _y };\n        }\n    }, {\n        key: 'log',\n        value: function log(text) {\n            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"red\";\n            var fontSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '25px';\n\n            console.log('%c' + text, 'color:' + color + ';font-size:' + fontSize);\n        }\n    }, {\n        key: 'init',\n        value: function init(opt) {\n            var rem = this.canvasRem;\n            var canvasContainer = $(opt.ele);\n            this.canvas = document.createElement(\"canvas\");\n            this.canvas.className = \"canvas\";\n            this.canvas.width = rem('10rem');\n            this.canvas.height = rem('8rem');\n            canvasContainer.appendChild(this.canvas);\n            // console.log(opt);\n            // console.log(canvasContainer);\n            var ctx = this.canvas.getContext(\"2d\");\n            this.ratio = this.getPixelRatio(ctx); //画图片时解决模糊问题\n            var _this = this;\n\n            var sDeg = 180 / Math.PI * Math.PI * 0.2; //仪盘表起点点角度 可直接写 36\n            var eDeg = 180 / Math.PI * Math.PI * 0.8; //仪盘表结束点角度 可直接写 144\n            var speed = 2; //转动速度 目前只能填写整数\n\n            var allDeg = eDeg + 90;\n\n            this.offAni = false; //开启动画\n\n            this.log('[\\u8D77\\u59CB\\u89D2\\u5EA6\\uFF1A' + sDeg + ', \\u7ED3\\u675F\\u89D2\\u5EA6\\uFF1A' + eDeg + ']');\n            // console.log( Math.PI/180 * ( eDeg-sDeg ) )\n            this.draw = function () {\n                ctx.clearRect(0, 0, 400, 400);\n                var _p = _this.getPos(allDeg, 150, 150, 85); //获取坐标\n                _this.log(allDeg, 'pink', '16px');\n                // _this.log(eDeg+90,'pink','16px')\n                if (!(allDeg > sDeg + 90 && allDeg < eDeg + 90)) {\n                    //指针动画运动过程\n                    ctx.beginPath(); //背景 仪盘外框\n                    ctx.lineWidth = 4;\n                    ctx.strokeStyle = \"#0090D2\";\n                    ctx.beginPath();\n                    ctx.lineCap = \"round\";\n                    ctx.arc(150, 150, 100, Math.PI * 0.2, Math.PI * 0.8, true);\n                    ctx.stroke();\n\n                    for (var i = eDeg + 90; i < sDeg + 90; i++) {}\n                    ctx.beginPath(); //仪盘的刻度\n\n                    // ctx.arc(150, 150, 100, Math.PI * 0.2, Math.PI * 0.8, true);\n\n                    ctx.beginPath(); //仪盘的指针根圆点\n                    ctx.fillStyle = \"#0090D2\";\n                    ctx.arc(150, 150, 5, 0, Math.PI * 2);\n                    ctx.fill();\n\n                    ctx.beginPath(); //指针的指针根圆点\n                    ctx.fillStyle = 'red';\n                    ctx.arc(150, 150, 3, 0, Math.PI * 2);\n                    ctx.fill();\n\n                    ctx.beginPath(); //仪盘的指针\n                    ctx.strokeStyle = 'red';\n                    ctx.lineCap = \"round\";\n                    ctx.lineWidth = 2;\n                    ctx.moveTo(150, 150);\n                    ctx.lineTo(_p.x, _p.y);\n                    ctx.stroke();\n                }\n\n                if (allDeg % 360 == sDeg + 90) {\n                    //到达终点\n                    cancelAnimationFrame(_this.ani);\n                    // _this.log('动画完了');\n                    //some code。。。\n                } else {\n                    //继续动画\n                    allDeg += speed;\n                    if (_this.offAni) {\n                        //是否开启动画\n                        requestAnimationFrame(_this.draw);\n                    }\n                };\n            };\n\n            this.ani = requestAnimationFrame(this.draw); //执行动画\n        }\n    }]);\n\n    return Chart;\n}();\n\nexports.default = Chart;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tbW9uL21DaGFydC5qcz84NzZlIl0sIm5hbWVzIjpbIkNoYXJ0IiwiZ2V0UGl4ZWxSYXRpbyIsImNvbnRleHQiLCJiYWNraW5nU3RvcmUiLCJiYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwid2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJtc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJvQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJyZW0iLCJfbnVtIiwicGFyc2VJbnQiLCJ3aW5XaW50aCIsImlubmVyV2lkdGgiLCJkZWciLCJ4IiwieSIsInIiLCJodWR1IiwiTWF0aCIsIlBJIiwiX3giLCJzaW4iLCJfeSIsImNvcyIsInRleHQiLCJjb2xvciIsImZvbnRTaXplIiwiY29uc29sZSIsImxvZyIsIm9wdCIsImNhbnZhc1JlbSIsImNhbnZhc0NvbnRhaW5lciIsIiQiLCJlbGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImFwcGVuZENoaWxkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJhdGlvIiwiX3RoaXMiLCJzRGVnIiwiZURlZyIsInNwZWVkIiwiYWxsRGVnIiwib2ZmQW5pIiwiZHJhdyIsImNsZWFyUmVjdCIsIl9wIiwiZ2V0UG9zIiwiYmVnaW5QYXRoIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJsaW5lQ2FwIiwiYXJjIiwic3Ryb2tlIiwiaSIsImZpbGxTdHlsZSIsImZpbGwiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFuaSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztJQUNNQSxLO0FBQ0YscUJBQWE7QUFBQTs7QUFBQztBQUNWLGFBQUtDLGFB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QUFMLEdBQVUsQ0FBbEM7QUFDQXNCLHdCQUFJcUIsSUFBSjs7QUFFQXJCLHdCQUFJYSxTQUFKLEdBMUI2QyxDQTBCN0I7QUFDaEJiLHdCQUFJZSxXQUFKLEdBQWtCLEtBQWxCO0FBQ0FmLHdCQUFJZ0IsT0FBSixHQUFjLE9BQWQ7QUFDQWhCLHdCQUFJYyxTQUFKLEdBQWdCLENBQWhCO0FBQ0FkLHdCQUFJc0IsTUFBSixDQUFXLEdBQVgsRUFBZ0IsR0FBaEI7QUFDQXRCLHdCQUFJdUIsTUFBSixDQUFXWixHQUFHdEMsQ0FBZCxFQUFpQnNDLEdBQUdyQyxDQUFwQjtBQUNBMEIsd0JBQUlrQixNQUFKO0FBRUg7O0FBRUQsb0JBQUdYLFNBQVMsR0FBVCxJQUFnQkgsT0FBTyxFQUExQixFQUE2QjtBQUFFO0FBQzNCb0IseUNBQXFCckIsTUFBTXNCLEdBQTNCO0FBQ0E7QUFDQTtBQUNILGlCQUpELE1BSUs7QUFBQztBQUNGbEIsOEJBQVVELEtBQVY7QUFDQSx3QkFBR0gsTUFBTUssTUFBVCxFQUFnQjtBQUFDO0FBQ2JrQiw4Q0FBc0J2QixNQUFNTSxJQUE1QjtBQUNIO0FBQ0o7QUFDSixhQW5ERDs7QUFxREEsaUJBQUtnQixHQUFMLEdBQVdDLHNCQUFzQixLQUFLakIsSUFBM0IsQ0FBWCxDQTlFSyxDQThFdUM7QUFDL0M7Ozs7OztrQkFJVXJELEsiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY2FudmFzUmVtLmpzJztcclxuY2xhc3MgQ2hhcnQge1xyXG4gICAgY29uc3RydWN0b3IoKXsvL1xyXG4gICAgICAgIHRoaXMuZ2V0UGl4ZWxSYXRpbyA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgICAgICAgICAgIGxldCBiYWNraW5nU3RvcmUgPSBjb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgY29udGV4dC53ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGNvbnRleHQubW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxyXG4gICAgICAgICAgICAgICAgY29udGV4dC5tc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgY29udGV4dC5vQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCBjb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgMTtcclxuICAgICAgICAgICAgcmV0dXJuICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSAvIGJhY2tpbmdTdG9yZTtcclxuICAgICAgICB9O1xyXG4gICAgfSAgIFxyXG5cclxuICAgIGNhbnZhc1JlbShyZW0pey8vMXJlbSA9IHdpbmRvdyAvIDEwICDov5Tlm57kuIDkuKpjYW52YXPnlKjnmoTljZXkvY1cclxuICAgICAgICBpZighcmVtKXtyZXR1cm59O1xyXG4gICAgICAgIGxldCBfbnVtID0gcGFyc2VJbnQocmVtKTtcclxuICAgICAgICBsZXQgd2luV2ludGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICByZXR1cm4gd2luV2ludGggLyAxMCAqIF9udW07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zKGRlZywgeCwgeSwgcil7Ly/ojrflj5Yg5ZyG6L655LiK55qEIOafkOS4quWdkOaghyAoIOinkuW6pigzNjApLCB4KOWchuW/g3gpLCB5KOWchuW/g3kpLCByKOWNiuW+hCkpXHJcbiAgICAgICAgdmFyIGh1ZHUgPSAoMipNYXRoLlBJIC8gMzYwKSAqIGRlZzsgICAvLyAgMzYwLzg9NDUs5Y2zNDXluqYo6L+Z5Liq6ZqP5Liq5Lq66K6+572uKVxyXG4gICAgICAgIHZhciBfeCA9IHggKyBNYXRoLnNpbihodWR1KSAqIHI7ICAgIC8vICA5NSDmmK/lnIblvaLkuK3lv4PnmoTlnZDmoIdYICAg5Y2z5a6a5L2NbGVmdCDnmoTlgLxcclxuICAgICAgICB2YXIgX3kgPSB5IC0gTWF0aC5jb3MoaHVkdSkgKiByOyAgICAvLyAgOTUg5piv5ZyG5b2i5Lit5b+D55qE5Z2Q5qCHWSAgIOWNs+WumuS9jXRvcCDnmoTlgLxcclxuICAgICAgICByZXR1cm4ge3g6X3gsIHk6X3l9O1xyXG4gICAgfVxyXG5cclxuICAgIGxvZyh0ZXh0LCBjb2xvcj1cInJlZFwiLCBmb250U2l6ZT0nMjVweCcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAlYyR7dGV4dH1gLGBjb2xvcjoke2NvbG9yfTtmb250LXNpemU6JHtmb250U2l6ZX1gKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQob3B0KXtcclxuICAgICAgICB2YXIgcmVtID0gdGhpcy5jYW52YXNSZW07XHJcbiAgICAgICAgY29uc3QgY2FudmFzQ29udGFpbmVyID0gJChvcHQuZWxlKTtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NOYW1lID0gXCJjYW52YXNcIjtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHJlbSgnMTByZW0nKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSByZW0oJzhyZW0nKTtcclxuICAgICAgICBjYW52YXNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2FudmFzQ29udGFpbmVyKTtcclxuICAgICAgICB2YXIgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMucmF0aW8gPSB0aGlzLmdldFBpeGVsUmF0aW8oY3R4KTsvL+eUu+WbvueJh+aXtuino+WGs+aooeeziumXrumimFxyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHNEZWcgPSAxODAgLyBNYXRoLlBJICogTWF0aC5QSSAqIDAuMjsgLy/ku6rnm5jooajotbfngrnngrnop5LluqYg5Y+v55u05o6l5YaZIDM2XHJcbiAgICAgICAgdmFyIGVEZWcgPSAxODAgLyBNYXRoLlBJICogTWF0aC5QSSAqIDAuODsgLy/ku6rnm5jooajnu5PmnZ/ngrnop5LluqYg5Y+v55u05o6l5YaZIDE0NFxyXG4gICAgICAgIHZhciBzcGVlZCA9IDI7Ly/ovazliqjpgJ/luqYg55uu5YmN5Y+q6IO95aGr5YaZ5pW05pWwXHJcblxyXG4gICAgICAgIHZhciBhbGxEZWcgPSBlRGVnICsgOTA7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMub2ZmQW5pID0gZmFsc2U7Ly/lvIDlkK/liqjnlLtcclxuICAgIFxyXG4gICAgICAgIHRoaXMubG9nKGBb6LW35aeL6KeS5bqm77yaJHtzRGVnfSwg57uT5p2f6KeS5bqm77yaJHtlRGVnfV1gKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggTWF0aC5QSS8xODAgKiAoIGVEZWctc0RlZyApIClcclxuICAgICAgICB0aGlzLmRyYXcgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDQwMCwgNDAwKTtcclxuICAgICAgICAgICAgbGV0IF9wID0gX3RoaXMuZ2V0UG9zKGFsbERlZywgMTUwLCAxNTAsIDg1KTsgLy/ojrflj5blnZDmoIdcclxuICAgICAgICAgICAgX3RoaXMubG9nKCBhbGxEZWcgLCdwaW5rJywnMTZweCcpXHJcbiAgICAgICAgICAgIC8vIF90aGlzLmxvZyhlRGVnKzkwLCdwaW5rJywnMTZweCcpXHJcbiAgICAgICAgICAgIGlmKCAhKGFsbERlZyA+IHNEZWcgKyA5MCAmJiBhbGxEZWcgPCBlRGVnICsgOTApICl7Ly/mjIfpkojliqjnlLvov5Dliqjov4fnqItcclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTsvL+iDjOaZryDku6rnm5jlpJbmoYZcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSA0O1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlPVwiIzAwOTBEMlwiO1xyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XHJcbiAgICAgICAgICAgICAgICBjdHguYXJjKDE1MCwgMTUwLCAxMDAsIE1hdGguUEkgKiAwLjIsIE1hdGguUEkgKiAwLjgsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaT1lRGVnKzkwOyBpPHNEZWcrOTA7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7Ly/ku6rnm5jnmoTliLvluqZcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gY3R4LmFyYygxNTAsIDE1MCwgMTAwLCBNYXRoLlBJICogMC4yLCBNYXRoLlBJICogMC44LCB0cnVlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v5Luq55uY55qE5oyH6ZKI5qC55ZyG54K5XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5MEQyXCI7XHJcbiAgICAgICAgICAgICAgICBjdHguYXJjKDE1MCwgMTUwLCA1LCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v5oyH6ZKI55qE5oyH6ZKI5qC55ZyG54K5XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XHJcbiAgICAgICAgICAgICAgICBjdHguYXJjKDE1MCwgMTUwLCAzLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTsvL+S7quebmOeahOaMh+mSiFxyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JlZCc7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbygxNTAsIDE1MCk7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKF9wLngsIF9wLnkpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoYWxsRGVnICUgMzYwID09IHNEZWcgKyA5MCl7IC8v5Yiw6L6+57uI54K5XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShfdGhpcy5hbmkpXHJcbiAgICAgICAgICAgICAgICAvLyBfdGhpcy5sb2coJ+WKqOeUu+WujOS6hicpO1xyXG4gICAgICAgICAgICAgICAgLy9zb21lIGNvZGXjgILjgILjgIJcclxuICAgICAgICAgICAgfWVsc2V7Ly/nu6fnu63liqjnlLtcclxuICAgICAgICAgICAgICAgIGFsbERlZyArPSBzcGVlZDtcclxuICAgICAgICAgICAgICAgIGlmKF90aGlzLm9mZkFuaSl7Ly/mmK/lkKblvIDlkK/liqjnlLtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX3RoaXMuZHJhdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5hbmkgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3KTsvL+aJp+ihjOWKqOeUu1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21tb24vbUNoYXJ0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n")}});