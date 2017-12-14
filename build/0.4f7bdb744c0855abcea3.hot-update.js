/*! wxx专用！https://github.com/wangzongming */
webpackHotUpdate(0,{10:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(11);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Chart = function () {\n    function Chart() {\n        _classCallCheck(this, Chart);\n\n        //\n        this.getPixelRatio = function (context) {\n            var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;\n            return (window.devicePixelRatio || 1) / backingStore;\n        };\n    }\n\n    _createClass(Chart, [{\n        key: 'canvasRem',\n        value: function canvasRem(rem) {\n            //1rem = window / 10  返回一个canvas用的单位\n            if (!rem) {\n                return;\n            };\n            var _num = parseInt(rem);\n            var winWinth = window.innerWidth;\n            return winWinth / 10 * _num;\n        }\n    }, {\n        key: 'getPos',\n        value: function getPos(deg, x, y, r) {\n            //获取 圆边上的 某个坐标 ( 角度(360), x(圆心x), y(圆心y), r(半径))\n            var hudu = 2 * Math.PI / 360 * deg; //  360/8=45,即45度(这个随个人设置)\n            var _x = x + Math.sin(hudu) * r; //  95 是圆形中心的坐标X   即定位left 的值\n            var _y = y - Math.cos(hudu) * r; //  95 是圆形中心的坐标Y   即定位top 的值\n            return { x: _x, y: _y };\n        }\n    }, {\n        key: 'log',\n        value: function log(text) {\n            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"red\";\n            var fontSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '25px';\n\n            console.log('%c' + text, 'color:' + color + ';font-size:' + fontSize);\n        }\n    }, {\n        key: 'init',\n        value: function init(opt) {\n            var rem = this.canvasRem;\n            var canvasContainer = $(opt.ele);\n            this.canvas = document.createElement(\"canvas\");\n            this.canvas.className = \"canvas\";\n            this.canvas.width = rem('10rem');\n            this.canvas.height = rem('8rem');\n            canvasContainer.appendChild(this.canvas);\n            // console.log(opt);\n            // console.log(canvasContainer);\n            var ctx = this.canvas.getContext(\"2d\");\n            this.ratio = this.getPixelRatio(ctx); //画图片时解决模糊问题\n            var _this = this;\n\n            var sDeg = 180 / Math.PI * Math.PI * 0.2; //仪盘表起点点角度 可直接写 36\n            var eDeg = 180 / Math.PI * Math.PI * 0.8; //仪盘表结束点角度 可直接写 144\n            var speed = 2; //转动速度 目前只能填写整数\n\n            var allDeg = eDeg + 90;\n\n            this.offAni = false; //开启动画\n\n            this.log('[\\u8D77\\u59CB\\u89D2\\u5EA6\\uFF1A' + sDeg + ', \\u7ED3\\u675F\\u89D2\\u5EA6\\uFF1A' + eDeg + ']');\n            // console.log( Math.PI/180 * ( eDeg-sDeg ) )\n            this.draw = function () {\n                ctx.clearRect(0, 0, 400, 400);\n                // _this.log( allDeg ,'pink','16px')\n                // _this.log(eDeg+90,'pink','16px')\n                if (!(allDeg > sDeg + 90 && allDeg < eDeg + 90)) {\n                    //指针动画运动过程\n\n                    ctx.lineWidth = 4;\n                    for (var i = eDeg + 90; i < 360 + sDeg + 90; i += 5) {\n                        //刻度（小）  先画刻度是为了仪盘表外壳能盖住他\n                        ctx.beginPath();\n                        ctx.fillStyle = \"#0090D2\";\n                        var _pos2 = _this.getPos(i, 150, 150, 100 - ctx.lineWidth + 1); //获取坐标\n                        ctx.arc(_pos2.x, _pos2.y, 2, Math.PI * 0, Math.PI * 2, true);\n                        ctx.fill();\n                    }\n                    for (var _i = eDeg + 90; _i < 360 + sDeg + 90; _i += 10) {\n                        //刻度（大）  先画刻度是为了仪盘表外壳能盖住他\n                        ctx.beginPath();\n                        ctx.fillStyle = \"red\";\n                        var _pos3 = _this.getPos(_i, 150, 150, 100 - ctx.lineWidth + 1); //获取坐标\n                        ctx.arc(_pos3.x, _pos3.y, 3, Math.PI * 0, Math.PI * 2, true);\n                        ctx.fill();\n                    }\n\n                    for (var _i2 = eDeg + 90; _i2 < 360 + sDeg + 90; _i2 += 10) {\n                        //刻度数  先画刻度是为了仪盘表外壳能盖住他\n                        ctx.beginPath();\n                        ctx.font = \"10px\";\n                        var _posT = _this.getPos(_i2, 150, 150, 100 - ctx.lineWidth + 1); //获取坐标\n                        ctx.arc(_pos.x, _pos.y, 3, Math.PI * 0, Math.PI * 2, true);\n                        ctx.fill();\n                    }\n\n                    ctx.beginPath(); //背景 仪盘外框\n                    ctx.strokeStyle = \"#0090D2\";\n                    ctx.beginPath();\n                    ctx.lineCap = \"round\";\n                    ctx.arc(150, 150, 100, Math.PI * 0.2, Math.PI * 0.8, true);\n                    ctx.stroke();\n\n                    ctx.beginPath(); //仪盘的指针根圆点\n                    ctx.fillStyle = \"#0090D2\";\n                    ctx.arc(150, 150, 5, 0, Math.PI * 2);\n                    ctx.fill();\n\n                    ctx.beginPath(); //指针的指针根圆点\n                    ctx.fillStyle = 'red';\n                    ctx.arc(150, 150, 3, 0, Math.PI * 2);\n                    ctx.fill();\n\n                    var _p = _this.getPos(allDeg, 150, 150, 70); //获取坐标\n                    ctx.beginPath(); //仪盘的指针\n                    ctx.strokeStyle = 'red';\n                    ctx.lineCap = \"round\";\n                    ctx.lineWidth = 2;\n                    ctx.moveTo(150, 150);\n                    ctx.lineTo(_p.x, _p.y);\n                    ctx.stroke();\n                }\n\n                if (allDeg % 360 == sDeg + 90) {\n                    //到达终点\n                    cancelAnimationFrame(_this.ani);\n                    // _this.log('动画完了');\n                    //some code。。。\n                } else {\n                    //继续动画\n                    allDeg += speed;\n                    if (_this.offAni) {\n                        //是否开启动画\n                        requestAnimationFrame(_this.draw);\n                    }\n                };\n            };\n\n            this.ani = requestAnimationFrame(this.draw); //执行动画\n        }\n    }]);\n\n    return Chart;\n}();\n\nexports.default = Chart;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tbW9uL21DaGFydC5qcz84NzZlIl0sIm5hbWVzIjpbIkNoYXJ0IiwiZ2V0UGl4ZWxSYXRpbyIsImNvbnRleHQiLCJiYWNraW5nU3RvcmUiLCJiYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwid2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJtc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJvQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJyZW0iLCJfbnVtIiwicGFyc2VJbnQiLCJ3aW5XaW50aCIsImlubmVyV2lkdGgiLCJkZWciLCJ4IiwieSIsInIiLCJodWR1IiwiTWF0aCIsIlBJIiwiX3giLCJzaW4iLCJfeSIsImNvcyIsInRleHQiLCJjb2xvciIsImZvbnRTaXplIiwiY29uc29sZSIsImxvZyIsIm9wdCIsImNhbnZhc1JlbSIsImNhbnZhc0NvbnRhaW5lciIsIiQiLCJlbGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImFwcGVuZENoaWxkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJhdGlvIiwiX3RoaXMiLCJzRGVnIiwiZURlZyIsInNwZWVkIiwiYWxsRGVnIiwib2ZmQW5pIiwiZHJhdyIsImNsZWFyUmVjdCIsImxpbmVXaWR0aCIsImkiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJfcG9zIiwiZ2V0UG9zIiwiYXJjIiwiZmlsbCIsImZvbnQiLCJfcG9zVCIsInN0cm9rZVN0eWxlIiwibGluZUNhcCIsInN0cm9rZSIsIl9wIiwibW92ZVRvIiwibGluZVRvIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJhbmkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7SUFDTUEsSztBQUNGLHFCQUFhO0FB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YXJ0IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7Ly9cclxuICAgICAgICB0aGlzLmdldFBpeGVsUmF0aW8gPSBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gICAgICAgICAgICBsZXQgYmFja2luZ1N0b3JlID0gY29udGV4dC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGNvbnRleHQud2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCBjb250ZXh0Lm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgICAgICAgICAgICAgIGNvbnRleHQubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGNvbnRleHQub0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgY29udGV4dC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IDE7XHJcbiAgICAgICAgICAgIHJldHVybiAod2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSkgLyBiYWNraW5nU3RvcmU7XHJcbiAgICAgICAgfTtcclxuICAgIH0gICBcclxuXHJcbiAgICBjYW52YXNSZW0ocmVtKXsvLzFyZW0gPSB3aW5kb3cgLyAxMCAg6L+U5Zue5LiA5LiqY2FudmFz55So55qE5Y2V5L2NXHJcbiAgICAgICAgaWYoIXJlbSl7cmV0dXJufTtcclxuICAgICAgICBsZXQgX251bSA9IHBhcnNlSW50KHJlbSk7XHJcbiAgICAgICAgbGV0IHdpbldpbnRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgcmV0dXJuIHdpbldpbnRoIC8gMTAgKiBfbnVtO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvcyhkZWcsIHgsIHksIHIpey8v6I635Y+WIOWchui+ueS4iueahCDmn5DkuKrlnZDmoIcgKCDop5LluqYoMzYwKSwgeCjlnIblv4N4KSwgeSjlnIblv4N5KSwgcijljYrlvoQpKVxyXG4gICAgICAgIHZhciBodWR1ID0gKDIqTWF0aC5QSSAvIDM2MCkgKiBkZWc7ICAgLy8gIDM2MC84PTQ1LOWNszQ15bqmKOi/meS4qumaj+S4quS6uuiuvue9rilcclxuICAgICAgICB2YXIgX3ggPSB4ICsgTWF0aC5zaW4oaHVkdSkgKiByOyAgICAvLyAgOTUg5piv5ZyG5b2i5Lit5b+D55qE5Z2Q5qCHWCAgIOWNs+WumuS9jWxlZnQg55qE5YC8XHJcbiAgICAgICAgdmFyIF95ID0geSAtIE1hdGguY29zKGh1ZHUpICogcjsgICAgLy8gIDk1IOaYr+WchuW9ouS4reW/g+eahOWdkOagh1kgICDljbPlrprkvY10b3Ag55qE5YC8XHJcbiAgICAgICAgcmV0dXJuIHt4Ol94LCB5Ol95fTtcclxuICAgIH1cclxuXHJcbiAgICBsb2codGV4dCwgY29sb3I9XCJyZWRcIiwgZm9udFNpemU9JzI1cHgnKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJWMke3RleHR9YCxgY29sb3I6JHtjb2xvcn07Zm9udC1zaXplOiR7Zm9udFNpemV9YClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KG9wdCl7XHJcbiAgICAgICAgdmFyIHJlbSA9IHRoaXMuY2FudmFzUmVtO1xyXG4gICAgICAgIGNvbnN0IGNhbnZhc0NvbnRhaW5lciA9ICQob3B0LmVsZSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNsYXNzTmFtZSA9IFwiY2FudmFzXCI7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSByZW0oJzEwcmVtJyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gcmVtKCc4cmVtJyk7XHJcbiAgICAgICAgY2FudmFzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNhbnZhc0NvbnRhaW5lcik7XHJcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB0aGlzLnJhdGlvID0gdGhpcy5nZXRQaXhlbFJhdGlvKGN0eCk7Ly/nlLvlm77niYfml7bop6PlhrPmqKHns4rpl67pophcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBzRGVnID0gMTgwIC8gTWF0aC5QSSAqIE1hdGguUEkgKiAwLjI7IC8v5Luq55uY6KGo6LW354K554K56KeS5bqmIOWPr+ebtOaOpeWGmSAzNlxyXG4gICAgICAgIHZhciBlRGVnID0gMTgwIC8gTWF0aC5QSSAqIE1hdGguUEkgKiAwLjg7IC8v5Luq55uY6KGo57uT5p2f54K56KeS5bqmIOWPr+ebtOaOpeWGmSAxNDRcclxuICAgICAgICB2YXIgc3BlZWQgPSAyOy8v6L2s5Yqo6YCf5bqmIOebruWJjeWPquiDveWhq+WGmeaVtOaVsFxyXG5cclxuICAgICAgICB2YXIgYWxsRGVnID0gZURlZyArIDkwO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm9mZkFuaSA9IGZhbHNlOy8v5byA5ZCv5Yqo55S7XHJcbiAgICBcclxuICAgICAgICB0aGlzLmxvZyhgW+i1t+Wni+inkuW6pu+8miR7c0RlZ30sIOe7k+adn+inkuW6pu+8miR7ZURlZ31dYCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIE1hdGguUEkvMTgwICogKCBlRGVnLXNEZWcgKSApXHJcbiAgICAgICAgdGhpcy5kcmF3ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCA0MDAsIDQwMCk7XHJcbiAgICAgICAgICAgIC8vIF90aGlzLmxvZyggYWxsRGVnICwncGluaycsJzE2cHgnKVxyXG4gICAgICAgICAgICAvLyBfdGhpcy5sb2coZURlZys5MCwncGluaycsJzE2cHgnKVxyXG4gICAgICAgICAgICBpZiggIShhbGxEZWcgPiBzRGVnICsgOTAgJiYgYWxsRGVnIDwgZURlZyArIDkwKSApey8v5oyH6ZKI5Yqo55S76L+Q5Yqo6L+H56iLXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDQ7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSBlRGVnKzkwOyBpIDwgMzYwICsgc0RlZyArIDkwOyBpICs9IDUpey8v5Yi75bqm77yI5bCP77yJICDlhYjnlLvliLvluqbmmK/kuLrkuobku6rnm5jooajlpJblo7Pog73nm5bkvY/ku5ZcclxuICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTBEMlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfcG9zID0gX3RoaXMuZ2V0UG9zKGksIDE1MCwgMTUwLCAxMDAgLSBjdHgubGluZVdpZHRoICsgMSk7IC8v6I635Y+W5Z2Q5qCHXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmFyYyhfcG9zLngsIF9wb3MueSwgMiwgTWF0aC5QSSAqIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gZURlZys5MDsgaSA8IDM2MCArIHNEZWcgKyA5MDsgaSArPSAxMCl7Ly/liLvluqbvvIjlpKfvvIkgIOWFiOeUu+WIu+W6puaYr+S4uuS6huS7quebmOihqOWkluWjs+iDveebluS9j+S7llxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3BvcyA9IF90aGlzLmdldFBvcyhpLCAxNTAsIDE1MCwgMTAwIC0gY3R4LmxpbmVXaWR0aCArIDEpOyAvL+iOt+WPluWdkOagh1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5hcmMoX3Bvcy54LCBfcG9zLnksIDMsIE1hdGguUEkgKiAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSBlRGVnKzkwOyBpIDwgMzYwICsgc0RlZyArIDkwOyBpICs9IDEwKXsvL+WIu+W6puaVsCAg5YWI55S75Yi75bqm5piv5Li65LqG5Luq55uY6KGo5aSW5aOz6IO955uW5L2P5LuWXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5mb250ID0gXCIxMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9wb3NUID0gX3RoaXMuZ2V0UG9zKGksIDE1MCwgMTUwLCAxMDAgLSBjdHgubGluZVdpZHRoICsgMSk7IC8v6I635Y+W5Z2Q5qCHXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmFyYyhfcG9zLngsIF9wb3MueSwgMywgTWF0aC5QSSAqIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTsvL+iDjOaZryDku6rnm5jlpJbmoYZcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZT1cIiMwMDkwRDJcIjtcclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xyXG4gICAgICAgICAgICAgICAgY3R4LmFyYygxNTAsIDE1MCwgMTAwLCBNYXRoLlBJICogMC4yLCBNYXRoLlBJICogMC44LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTsvL+S7quebmOeahOaMh+mSiOagueWchueCuVxyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTBEMlwiO1xyXG4gICAgICAgICAgICAgICAgY3R4LmFyYygxNTAsIDE1MCwgNSwgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTsvL+aMh+mSiOeahOaMh+mSiOagueWchueCuVxyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xyXG4gICAgICAgICAgICAgICAgY3R4LmFyYygxNTAsIDE1MCwgMywgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IF9wID0gX3RoaXMuZ2V0UG9zKGFsbERlZywgMTUwLCAxNTAsIDcwKTsgLy/ojrflj5blnZDmoIdcclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTsvL+S7quebmOeahOaMh+mSiFxyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JlZCc7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbygxNTAsIDE1MCk7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKF9wLngsIF9wLnkpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoYWxsRGVnICUgMzYwID09IHNEZWcgKyA5MCl7IC8v5Yiw6L6+57uI54K5XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShfdGhpcy5hbmkpXHJcbiAgICAgICAgICAgICAgICAvLyBfdGhpcy5sb2coJ+WKqOeUu+WujOS6hicpO1xyXG4gICAgICAgICAgICAgICAgLy9zb21lIGNvZGXjgILjgILjgIJcclxuICAgICAgICAgICAgfWVsc2V7Ly/nu6fnu63liqjnlLtcclxuICAgICAgICAgICAgICAgIGFsbERlZyArPSBzcGVlZDtcclxuICAgICAgICAgICAgICAgIGlmKF90aGlzLm9mZkFuaSl7Ly/mmK/lkKblvIDlkK/liqjnlLtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX3RoaXMuZHJhdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5hbmkgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3KTsvL+aJp+ihjOWKqOeUu1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21tb24vbUNoYXJ0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n")}});