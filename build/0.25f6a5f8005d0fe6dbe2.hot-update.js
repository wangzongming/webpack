/*! wxx专用！https://github.com/wangzongming */
webpackHotUpdate(0,{10:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(11);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Chart = function () {\n    function Chart() {\n        _classCallCheck(this, Chart);\n\n        //\n        this.getPixelRatio = function (context) {\n            var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;\n            return (window.devicePixelRatio || 1) / backingStore;\n        };\n    }\n\n    _createClass(Chart, [{\n        key: 'canvasRem',\n        value: function canvasRem(rem) {\n            //1rem = window / 10  返回一个canvas用的单位\n            if (!rem) {\n                return;\n            };\n            var _num = parseInt(rem);\n            var winWinth = window.innerWidth;\n            return winWinth / 10 * _num;\n        }\n    }, {\n        key: 'getPos',\n        value: function getPos(deg, x, y, r) {\n            //获取 圆边上的 某个坐标 ( 角度(360), x(圆心x), y(圆心y), r(半径))\n            var hudu = 2 * Math.PI / 360 * deg; //  360/8=45,即45度(这个随个人设置)\n            var _x = x + Math.sin(hudu) * r; //  95 是圆形中心的坐标X   即定位left 的值\n            var _y = y - Math.cos(hudu) * r; //  95 是圆形中心的坐标Y   即定位top 的值\n            return { x: _x, y: _y };\n        }\n    }, {\n        key: 'log',\n        value: function log(text) {\n            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"red\";\n            var fontSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '25px';\n\n            console.log('%c' + text, 'color:' + color + ';font-size:' + fontSize);\n        }\n    }, {\n        key: 'init',\n        value: function init(opt) {\n            var rem = this.canvasRem;\n            var canvasContainer = $(opt.ele);\n            this.canvas = document.createElement(\"canvas\");\n            this.canvas.className = \"canvas\";\n            this.canvas.width = rem('10rem');\n            this.canvas.height = rem('8rem');\n            canvasContainer.appendChild(this.canvas);\n            // console.log(opt);\n            // console.log(canvasContainer);\n            var ctx = this.canvas.getContext(\"2d\");\n            this.ratio = this.getPixelRatio(ctx); //画图片时解决模糊问题\n            var _this = this;\n            this.offAni = true; //开启动画\n\n            var sDeg = 180 / Math.PI * Math.PI * 0.2; //仪盘表起点点角度\n            var eDeg = 180 / Math.PI * Math.PI * 0.8; //仪盘表结束点角度\n            var speed = 2; //转动速度 目前只能填写整数\n\n            var allDeg = eDeg + 90;\n\n            // this.log(`[起始角度：${sDeg}, 结束角度：${eDeg}]`);\n            // console.log( Math.PI/180 * ( eDeg-sDeg ) )\n            this.draw = function () {\n                ctx.clearRect(0, 0, 400, 400);\n                var _p = _this.getPos(allDeg, 150, 150, 85); //获取坐标\n                // _this.log( allDeg ,'pink','16px')\n                // _this.log(eDeg+90,'pink','16px')\n                if (!(allDeg > sDeg + 90 && allDeg < eDeg + 90)) {\n                    //指针动画运动过程\n                    ctx.beginPath(); //背景 仪盘外框\n                    ctx.lineWidth = 4;\n                    ctx.strokeStyle = \"#0090D2\";\n                    ctx.beginPath();\n                    ctx.lineCap = \"round\";\n                    ctx.arc(150, 150, 100, Math.PI * 0.2, Math.PI * 0.8, true);\n                    ctx.stroke();\n\n                    ctx.beginPath(); //仪盘的刻度\n\n                    // ctx.arc(150, 150, 100, Math.PI * 0.2, Math.PI * 0.8, true);\n\n                    ctx.beginPath(); //仪盘的指针根圆点\n                    ctx.fillStyle = \"#0090D2\";\n                    ctx.arc(150, 150, 5, 0, Math.PI * 2);\n                    ctx.fill();\n\n                    ctx.beginPath(); //指针的指针根圆点\n                    ctx.fillStyle = 'red';\n                    ctx.arc(150, 150, 3, 0, Math.PI * 2);\n                    ctx.fill();\n\n                    ctx.beginPath(); //仪盘的指针\n                    ctx.strokeStyle = 'red';\n                    ctx.lineCap = \"round\";\n                    ctx.lineWidth = 2;\n                    ctx.moveTo(150, 150);\n                    ctx.lineTo(_p.x, _p.y);\n                    ctx.stroke();\n                }\n\n                if (allDeg % 360 == sDeg + 90) {\n                    //到达终点\n                    cancelAnimationFrame(_this.ani);\n                    // _this.log('动画完了');\n                    //some code。。。\n                } else {\n                    //继续动画\n                    allDeg += speed;\n                    if (_this.offAni) {\n                        //是否开启动画\n                        requestAnimationFrame(_this.draw);\n                    }\n                };\n            };\n\n            this.ani = requestAnimationFrame(this.draw); //执行动画\n        }\n    }]);\n\n    return Chart;\n}();\n\nexports.default = Chart;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tbW9uL21DaGFydC5qcz84NzZlIl0sIm5hbWVzIjpbIkNoYXJ0IiwiZ2V0UGl4ZWxSYXRpbyIsImNvbnRleHQiLCJiYWNraW5nU3RvcmUiLCJiYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwid2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJtc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJvQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJyZW0iLCJfbnVtIiwicGFyc2VJbnQiLCJ3aW5XaW50aCIsImlubmVyV2lkdGgiLCJkZWciLCJ4IiwieSIsInIiLCJodWR1IiwiTWF0aCIsIlBJIiwiX3giLCJzaW4iLCJfeSIsImNvcyIsInRleHQiLCJjb2xvciIsImZvbnRTaXplIiwiY29uc29sZSIsImxvZyIsIm9wdCIsImNhbnZhc1JlbSIsImNhbnZhc0NvbnRhaW5lciIsIiQiLCJlbGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImFwcGVuZENoaWxkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJhdGlvIiwiX3RoaXMiLCJvZmZBbmkiLCJzRGVnIiwiZURlZyIsInNwZWVkIiwiYWxsRGVnIiwiZHJhdyIsImNsZWFyUmVjdCIsIl9wIiwiZ2V0UG9zIiwiYmVnaW5QYXRoIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJsaW5lQ2FwIiwiYXJjIiwic3Ryb2tlIiwiZmlsbFN0eWxlIiwiZmlsbCIsIm1vdmVUbyIsImxpbmVUbyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYW5pIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0lBQ01BLEs7QUFDRixxQkFBYTtBQUFBOztBQUFDO0FBQ1YsYUFBS0MsYUFBTCxH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QVcsR0FBWCxFQUFnQixHQUFoQjtBQUNBckIsd0JBQUlzQixNQUFKLENBQVdYLEdBQUd0QyxDQUFkLEVBQWlCc0MsR0FBR3JDLENBQXBCO0FBQ0EwQix3QkFBSWtCLE1BQUo7QUFFSDs7QUFFRCxvQkFBR1YsU0FBUyxHQUFULElBQWdCSCxPQUFPLEVBQTFCLEVBQTZCO0FBQUU7QUFDM0JrQix5Q0FBcUJwQixNQUFNcUIsR0FBM0I7QUFDQTtBQUNBO0FBQ0gsaUJBSkQsTUFJSztBQUFDO0FBQ0ZoQiw4QkFBVUQsS0FBVjtBQUNBLHdCQUFHSixNQUFNQyxNQUFULEVBQWdCO0FBQUM7QUFDYnFCLDhDQUFzQnRCLE1BQU1NLElBQTVCO0FBQ0g7QUFDSjtBQUNKLGFBaEREOztBQWtEQSxpQkFBS2UsR0FBTCxHQUFXQyxzQkFBc0IsS0FBS2hCLElBQTNCLENBQVgsQ0F6RUssQ0F5RXVDO0FBQy9DOzs7Ozs7a0JBSVVyRCxLIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2NhbnZhc1JlbS5qcyc7XHJcbmNsYXNzIENoYXJ0IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7Ly9cclxuICAgICAgICB0aGlzLmdldFBpeGVsUmF0aW8gPSBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gICAgICAgICAgICBsZXQgYmFja2luZ1N0b3JlID0gY29udGV4dC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGNvbnRleHQud2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCBjb250ZXh0Lm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgICAgICAgICAgICAgIGNvbnRleHQubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGNvbnRleHQub0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgY29udGV4dC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IDE7XHJcbiAgICAgICAgICAgIHJldHVybiAod2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSkgLyBiYWNraW5nU3RvcmU7XHJcbiAgICAgICAgfTtcclxuICAgIH0gICBcclxuXHJcbiAgICBjYW52YXNSZW0ocmVtKXsvLzFyZW0gPSB3aW5kb3cgLyAxMCAg6L+U5Zue5LiA5LiqY2FudmFz55So55qE5Y2V5L2NXHJcbiAgICAgICAgaWYoIXJlbSl7cmV0dXJufTtcclxuICAgICAgICBsZXQgX251bSA9IHBhcnNlSW50KHJlbSk7XHJcbiAgICAgICAgbGV0IHdpbldpbnRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgcmV0dXJuIHdpbldpbnRoIC8gMTAgKiBfbnVtO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvcyhkZWcsIHgsIHksIHIpey8v6I635Y+WIOWchui+ueS4iueahCDmn5DkuKrlnZDmoIcgKCDop5LluqYoMzYwKSwgeCjlnIblv4N4KSwgeSjlnIblv4N5KSwgcijljYrlvoQpKVxyXG4gICAgICAgIHZhciBodWR1ID0gKDIqTWF0aC5QSSAvIDM2MCkgKiBkZWc7ICAgLy8gIDM2MC84PTQ1LOWNszQ15bqmKOi/meS4qumaj+S4quS6uuiuvue9rilcclxuICAgICAgICB2YXIgX3ggPSB4ICsgTWF0aC5zaW4oaHVkdSkgKiByOyAgICAvLyAgOTUg5piv5ZyG5b2i5Lit5b+D55qE5Z2Q5qCHWCAgIOWNs+WumuS9jWxlZnQg55qE5YC8XHJcbiAgICAgICAgdmFyIF95ID0geSAtIE1hdGguY29zKGh1ZHUpICogcjsgICAgLy8gIDk1IOaYr+WchuW9ouS4reW/g+eahOWdkOagh1kgICDljbPlrprkvY10b3Ag55qE5YC8XHJcbiAgICAgICAgcmV0dXJuIHt4Ol94LCB5Ol95fTtcclxuICAgIH1cclxuXHJcbiAgICBsb2codGV4dCwgY29sb3I9XCJyZWRcIiwgZm9udFNpemU9JzI1cHgnKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJWMke3RleHR9YCxgY29sb3I6JHtjb2xvcn07Zm9udC1zaXplOiR7Zm9udFNpemV9YClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KG9wdCl7XHJcbiAgICAgICAgdmFyIHJlbSA9IHRoaXMuY2FudmFzUmVtO1xyXG4gICAgICAgIGNvbnN0IGNhbnZhc0NvbnRhaW5lciA9ICQob3B0LmVsZSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNsYXNzTmFtZSA9IFwiY2FudmFzXCI7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSByZW0oJzEwcmVtJyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gcmVtKCc4cmVtJyk7XHJcbiAgICAgICAgY2FudmFzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNhbnZhc0NvbnRhaW5lcik7XHJcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB0aGlzLnJhdGlvID0gdGhpcy5nZXRQaXhlbFJhdGlvKGN0eCk7Ly/nlLvlm77niYfml7bop6PlhrPmqKHns4rpl67pophcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMub2ZmQW5pID0gdHJ1ZTsvL+W8gOWQr+WKqOeUu1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBzRGVnID0gMTgwIC8gTWF0aC5QSSAqIE1hdGguUEkgKiAwLjI7IC8v5Luq55uY6KGo6LW354K554K56KeS5bqmXHJcbiAgICAgICAgdmFyIGVEZWcgPSAxODAgLyBNYXRoLlBJICogTWF0aC5QSSAqIDAuODsgLy/ku6rnm5jooajnu5PmnZ/ngrnop5LluqZcclxuICAgICAgICB2YXIgc3BlZWQgPSAyOy8v6L2s5Yqo6YCf5bqmIOebruWJjeWPquiDveWhq+WGmeaVtOaVsFxyXG5cclxuICAgICAgICB2YXIgYWxsRGVnID0gZURlZyArIDkwO1xyXG4gICAgXHJcbiAgICAgICAgLy8gdGhpcy5sb2coYFvotbflp4vop5LluqbvvJoke3NEZWd9LCDnu5PmnZ/op5LluqbvvJoke2VEZWd9XWApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCBNYXRoLlBJLzE4MCAqICggZURlZy1zRGVnICkgKVxyXG4gICAgICAgIHRoaXMuZHJhdyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgNDAwLCA0MDApO1xyXG4gICAgICAgICAgICBsZXQgX3AgPSBfdGhpcy5nZXRQb3MoYWxsRGVnLCAxNTAsIDE1MCwgODUpOyAvL+iOt+WPluWdkOagh1xyXG4gICAgICAgICAgICAvLyBfdGhpcy5sb2coIGFsbERlZyAsJ3BpbmsnLCcxNnB4JylcclxuICAgICAgICAgICAgLy8gX3RoaXMubG9nKGVEZWcrOTAsJ3BpbmsnLCcxNnB4JylcclxuICAgICAgICAgICAgaWYoICEoYWxsRGVnID4gc0RlZyArIDkwICYmIGFsbERlZyA8IGVEZWcgKyA5MCkgKXsvL+aMh+mSiOWKqOeUu+i/kOWKqOi/h+eoi1xyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v6IOM5pmvIOS7quebmOWkluahhlxyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDQ7XHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGU9XCIjMDA5MEQyXCI7XHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgICAgICAgICAgICAgIGN0eC5hcmMoMTUwLCAxNTAsIDEwMCwgTWF0aC5QSSAqIDAuMiwgTWF0aC5QSSAqIDAuOCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v5Luq55uY55qE5Yi75bqmXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY3R4LmFyYygxNTAsIDE1MCwgMTAwLCBNYXRoLlBJICogMC4yLCBNYXRoLlBJICogMC44LCB0cnVlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v5Luq55uY55qE5oyH6ZKI5qC55ZyG54K5XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5MEQyXCI7XHJcbiAgICAgICAgICAgICAgICBjdHguYXJjKDE1MCwgMTUwLCA1LCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v5oyH6ZKI55qE5oyH6ZKI5qC55ZyG54K5XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XHJcbiAgICAgICAgICAgICAgICBjdHguYXJjKDE1MCwgMTUwLCAzLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTsvL+S7quebmOeahOaMh+mSiFxyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JlZCc7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbygxNTAsIDE1MCk7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKF9wLngsIF9wLnkpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoYWxsRGVnICUgMzYwID09IHNEZWcgKyA5MCl7IC8v5Yiw6L6+57uI54K5XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShfdGhpcy5hbmkpXHJcbiAgICAgICAgICAgICAgICAvLyBfdGhpcy5sb2coJ+WKqOeUu+WujOS6hicpO1xyXG4gICAgICAgICAgICAgICAgLy9zb21lIGNvZGXjgILjgILjgIJcclxuICAgICAgICAgICAgfWVsc2V7Ly/nu6fnu63liqjnlLtcclxuICAgICAgICAgICAgICAgIGFsbERlZyArPSBzcGVlZDtcclxuICAgICAgICAgICAgICAgIGlmKF90aGlzLm9mZkFuaSl7Ly/mmK/lkKblvIDlkK/liqjnlLtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX3RoaXMuZHJhdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5hbmkgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3KTsvL+aJp+ihjOWKqOeUu1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21tb24vbUNoYXJ0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n")}});