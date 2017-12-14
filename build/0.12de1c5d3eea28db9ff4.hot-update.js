/*! wxx专用！https://github.com/wangzongming */
webpackHotUpdate(0,{10:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(11);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Chart = function () {\n    function Chart() {\n        _classCallCheck(this, Chart);\n\n        //\n        this.getPixelRatio = function (context) {\n            var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;\n            return (window.devicePixelRatio || 1) / backingStore;\n        };\n        // this.ratio = this.getPixelRatio(canvasContent); //画图片的时候宽高都 * 上这个数\n    }\n\n    _createClass(Chart, [{\n        key: 'canvasRem',\n        value: function canvasRem(rem) {\n            //1rem = window / 10  返回一个canvas用的单位\n            if (!rem) {\n                return;\n            };\n            var _num = parseInt(rem);\n            var winWinth = window.innerWidth;\n            return winWinth / 10 * _num;\n        }\n    }, {\n        key: 'getPos',\n        value: function getPos(deg, x, y, r) {\n            //获取 圆边上的 某个坐标 ( 角度(360), x(圆心x), y(圆心y), r(半径))\n            // var _ang = deg * Math.PI;\n            // var _x = x + r * Math.sin(_ang);\n            // var _y = y - r * Math.cos(_ang);\n            // return {x:_x, y:_y, deg:180 / Math.PI * _ang };\n\n            var hudu = 2 * Math.PI / 360 * deg; //  360/8=45,即45度(这个随个人设置)\n            var _x = x + Math.sin(hudu) * r; //  95 是圆形中心的坐标X   即定位left 的值\n            var _y = y - Math.cos(hudu) * r; //  95 是圆形中心的坐标Y   即定位top 的值\n            return { x: _x, y: _y };\n        }\n    }, {\n        key: 'log',\n        value: function log(text) {\n            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"red\";\n            var fontSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '25px';\n\n            console.log('%c' + text, 'color:' + color + ';font-size:' + fontSize);\n        }\n    }, {\n        key: 'init',\n        value: function init(opt) {\n            var rem = this.canvasRem;\n            var canvasContainer = $(opt.ele);\n            this.canvas = document.createElement(\"canvas\");\n            this.canvas.className = \"canvas\";\n            this.canvas.width = rem('10rem');\n            this.canvas.height = rem('8rem');\n            canvasContainer.appendChild(this.canvas);\n            // console.log(opt);\n            // console.log(canvasContainer);\n            var ctx = this.canvas.getContext(\"2d\");\n            this.ratio = this.getPixelRatio(ctx); //画图片时解决模糊问题\n            var _this = this;\n\n            ctx.strokeStyle = \"#0090D2\";\n            ctx.fillStyle = \"#0090D2\";\n            ctx.save();\n\n            var sDeg = 180 / Math.PI * Math.PI * 0.2; //仪盘表起点点角度\n            var eDeg = 180 / Math.PI * Math.PI * 0.8; //仪盘表结束点角度\n            var speed = 2; //转动速度 目前只能填写整数\n\n            var allDeg = eDeg + 90;\n\n            this.log('[\\u8D77\\u59CB\\u89D2\\u5EA6\\uFF1A' + sDeg + ', \\u7ED3\\u675F\\u89D2\\u5EA6\\uFF1A' + eDeg + ']');\n            // console.log( Math.PI/180 * ( eDeg-sDeg ) )\n            this.draw = function () {\n                allDeg += speed;\n                ctx.clearRect(0, 0, 400, 400);\n\n                ctx.beginPath(); //背景 仪盘外框\n                ctx.lineWidth = 4;\n                ctx.strokeStyle = \"#0090D2\";\n                ctx.beginPath();\n                ctx.lineCap = \"round\";\n                ctx.arc(150, 150, 100, Math.PI * 0.2, Math.PI * 0.8, true);\n                ctx.stroke();\n\n                ctx.beginPath(); //仪盘的指针根圆点\n                ctx.fillStyle = \"#0090D2\";\n                ctx.arc(150, 150, 5, 0, Math.PI * 2);\n                ctx.fill();\n\n                ctx.beginPath(); //指针的指针根圆点\n                ctx.fillStyle = 'red';\n                ctx.arc(150, 150, 3, 0, Math.PI * 2);\n                ctx.fill();\n\n                ctx.beginPath(); //仪盘的指针\n                ctx.strokeStyle = 'red';\n                ctx.lineCap = \"round\";\n                ctx.lineWidth = 2;\n                ctx.moveTo(150, 150);\n                var _nDeg = allDeg;\n                var _p = _this.getPos(allDeg, 150, 150, 85);\n                ctx.lineTo(_p.x, _p.y);\n\n                _this.log(allDeg, 'pink', '16px');\n                // _this.log(eDeg+90,'pink','16px')\n                if (!(_nDeg > sDeg + 90 && _nDeg < eDeg + 90)) {\n                    //指针动画运动中\n                    ctx.stroke();\n                } else if (_nDeg >= sDeg) {\n                    //指针动画开始\n                    _this.log('动画开始啦');\n                } else if (_nDeg >= eDeg) {\n                    //指针到达极限\n                    _this.log('动画完了');\n                }\n\n                if (allDeg % 360 == sDeg + 90) {\n                    cancelAnimationFrame(_this.ani);\n                    return;\n                } else {\n                    //继续动画\n                    requestAnimationFrame(_this.draw);\n                };\n            };\n\n            this.ani = requestAnimationFrame(this.draw); //执行动画\n        }\n    }]);\n\n    return Chart;\n}();\n\nexports.default = Chart;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tbW9uL21DaGFydC5qcz84NzZlIl0sIm5hbWVzIjpbIkNoYXJ0IiwiZ2V0UGl4ZWxSYXRpbyIsImNvbnRleHQiLCJiYWNraW5nU3RvcmUiLCJiYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwid2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJtc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJvQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJyZW0iLCJfbnVtIiwicGFyc2VJbnQiLCJ3aW5XaW50aCIsImlubmVyV2lkdGgiLCJkZWciLCJ4IiwieSIsInIiLCJodWR1IiwiTWF0aCIsIlBJIiwiX3giLCJzaW4iLCJfeSIsImNvcyIsInRleHQiLCJjb2xvciIsImZvbnRTaXplIiwiY29uc29sZSIsImxvZyIsIm9wdCIsImNhbnZhc1JlbSIsImNhbnZhc0NvbnRhaW5lciIsIiQiLCJlbGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImFwcGVuZENoaWxkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJhdGlvIiwiX3RoaXMiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsInNhdmUiLCJzRGVnIiwiZURlZyIsInNwZWVkIiwiYWxsRGVnIiwiZHJhdyIsImNsZWFyUmVjdCIsImJlZ2luUGF0aCIsImxpbmVXaWR0aCIsImxpbmVDYXAiLCJhcmMiLCJzdHJva2UiLCJmaWxsIiwibW92ZVRvIiwiX25EZWciLCJfcCIsImdldFBvcyIsImxpbmVUbyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYW5pIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0lBQ01BLEs7QUFDRixxQkFBYTtBQUFBOztBQUFDO0FBQ1YsYUFBS0Ms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QXJCLEVBQTBCLEdBQTFCLEVBQStCLEVBQS9CLENBQVQ7QUFDQVYsb0JBQUl1QixNQUFKLENBQVdGLEdBQUdoRCxDQUFkLEVBQWlCZ0QsR0FBRy9DLENBQXBCOztBQUVBNkIsc0JBQU1oQixHQUFOLENBQVd1QixNQUFYLEVBQW1CLE1BQW5CLEVBQTBCLE1BQTFCO0FBQ0E7QUFDQSxvQkFBSSxFQUFFVSxRQUFRYixPQUFPLEVBQWYsSUFBcUJhLFFBQVFaLE9BQU8sRUFBdEMsQ0FBSixFQUErQztBQUFDO0FBQzVDUix3QkFBSWlCLE1BQUo7QUFDSCxpQkFGRCxNQUVNLElBQUdHLFNBQVNiLElBQVosRUFBaUI7QUFBQztBQUNwQkosMEJBQU1oQixHQUFOLENBQVUsT0FBVjtBQUNILGlCQUZLLE1BRUEsSUFBR2lDLFNBQVNaLElBQVosRUFBaUI7QUFBQztBQUNwQkwsMEJBQU1oQixHQUFOLENBQVUsTUFBVjtBQUNIOztBQUVELG9CQUFHdUIsU0FBUyxHQUFULElBQWdCSCxPQUFPLEVBQTFCLEVBQThCO0FBQzFCaUIseUNBQXFCckIsTUFBTXNCLEdBQTNCO0FBQ0E7QUFDSCxpQkFIRCxNQUdLO0FBQUM7QUFDRkMsMENBQXNCdkIsTUFBTVEsSUFBNUI7QUFDSDtBQUNKLGFBL0NEOztBQWlEQSxpQkFBS2MsR0FBTCxHQUFXQyxzQkFBc0IsS0FBS2YsSUFBM0IsQ0FBWCxDQTdFSyxDQTZFdUM7QUFDL0M7Ozs7OztrQkFJVXZELEsiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY2FudmFzUmVtLmpzJztcclxuY2xhc3MgQ2hhcnQge1xyXG4gICAgY29uc3RydWN0b3IoKXsvL1xyXG4gICAgICAgIHRoaXMuZ2V0UGl4ZWxSYXRpbyA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgICAgICAgICAgIGxldCBiYWNraW5nU3RvcmUgPSBjb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgY29udGV4dC53ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGNvbnRleHQubW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxyXG4gICAgICAgICAgICAgICAgY29udGV4dC5tc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgY29udGV4dC5vQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCBjb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgMTtcclxuICAgICAgICAgICAgcmV0dXJuICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSAvIGJhY2tpbmdTdG9yZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIHRoaXMucmF0aW8gPSB0aGlzLmdldFBpeGVsUmF0aW8oY2FudmFzQ29udGVudCk7IC8v55S75Zu+54mH55qE5pe25YCZ5a696auY6YO9ICog5LiK6L+Z5Liq5pWwXHJcbiAgICB9ICAgXHJcblxyXG4gICAgY2FudmFzUmVtKHJlbSl7Ly8xcmVtID0gd2luZG93IC8gMTAgIOi/lOWbnuS4gOS4qmNhbnZhc+eUqOeahOWNleS9jVxyXG4gICAgICAgIGlmKCFyZW0pe3JldHVybn07XHJcbiAgICAgICAgbGV0IF9udW0gPSBwYXJzZUludChyZW0pO1xyXG4gICAgICAgIGxldCB3aW5XaW50aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHJldHVybiB3aW5XaW50aCAvIDEwICogX251bTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3MoZGVnLCB4LCB5LCByKXsvL+iOt+WPliDlnIbovrnkuIrnmoQg5p+Q5Liq5Z2Q5qCHICgg6KeS5bqmKDM2MCksIHgo5ZyG5b+DeCksIHko5ZyG5b+DeSksIHIo5Y2K5b6EKSlcclxuICAgICAgICAvLyB2YXIgX2FuZyA9IGRlZyAqIE1hdGguUEk7XHJcbiAgICAgICAgLy8gdmFyIF94ID0geCArIHIgKiBNYXRoLnNpbihfYW5nKTtcclxuICAgICAgICAvLyB2YXIgX3kgPSB5IC0gciAqIE1hdGguY29zKF9hbmcpO1xyXG4gICAgICAgIC8vIHJldHVybiB7eDpfeCwgeTpfeSwgZGVnOjE4MCAvIE1hdGguUEkgKiBfYW5nIH07XHJcblxyXG4gICAgICAgIHZhciBodWR1ID0gKDIqTWF0aC5QSSAvIDM2MCkgKiBkZWc7ICAgLy8gIDM2MC84PTQ1LOWNszQ15bqmKOi/meS4qumaj+S4quS6uuiuvue9rilcclxuICAgICAgICB2YXIgX3ggPSB4ICsgTWF0aC5zaW4oaHVkdSkgKiByOyAgICAvLyAgOTUg5piv5ZyG5b2i5Lit5b+D55qE5Z2Q5qCHWCAgIOWNs+WumuS9jWxlZnQg55qE5YC8XHJcbiAgICAgICAgdmFyIF95ID0geSAtIE1hdGguY29zKGh1ZHUpICogcjsgICAgLy8gIDk1IOaYr+WchuW9ouS4reW/g+eahOWdkOagh1kgICDljbPlrprkvY10b3Ag55qE5YC8XHJcbiAgICAgICAgcmV0dXJuIHt4Ol94LCB5Ol95fTtcclxuICAgIH1cclxuXHJcbiAgICBsb2codGV4dCwgY29sb3I9XCJyZWRcIiwgZm9udFNpemU9JzI1cHgnKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJWMke3RleHR9YCxgY29sb3I6JHtjb2xvcn07Zm9udC1zaXplOiR7Zm9udFNpemV9YClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KG9wdCl7XHJcbiAgICAgICAgdmFyIHJlbSA9IHRoaXMuY2FudmFzUmVtO1xyXG4gICAgICAgIGNvbnN0IGNhbnZhc0NvbnRhaW5lciA9ICQob3B0LmVsZSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNsYXNzTmFtZSA9IFwiY2FudmFzXCI7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSByZW0oJzEwcmVtJyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gcmVtKCc4cmVtJyk7XHJcbiAgICAgICAgY2FudmFzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNhbnZhc0NvbnRhaW5lcik7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB0aGlzLnJhdGlvID0gdGhpcy5nZXRQaXhlbFJhdGlvKGN0eCk7Ly/nlLvlm77niYfml7bop6PlhrPmqKHns4rpl67pophcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiMwMDkwRDJcIjtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5MEQyXCI7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgIFxyXG5cclxuICAgICAgICB2YXIgc0RlZyA9IDE4MCAvIE1hdGguUEkgKiBNYXRoLlBJICogMC4yOyAvL+S7quebmOihqOi1t+eCueeCueinkuW6plxyXG4gICAgICAgIHZhciBlRGVnID0gMTgwIC8gTWF0aC5QSSAqIE1hdGguUEkgKiAwLjg7IC8v5Luq55uY6KGo57uT5p2f54K56KeS5bqmXHJcbiAgICAgICAgdmFyIHNwZWVkID0gMjsvL+i9rOWKqOmAn+W6piDnm67liY3lj6rog73loavlhpnmlbTmlbBcclxuXHJcbiAgICAgICAgdmFyIGFsbERlZyA9IGVEZWcgKyA5MDtcclxuICAgIFxyXG4gICAgICAgIHRoaXMubG9nKGBb6LW35aeL6KeS5bqm77yaJHtzRGVnfSwg57uT5p2f6KeS5bqm77yaJHtlRGVnfV1gKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggTWF0aC5QSS8xODAgKiAoIGVEZWctc0RlZyApIClcclxuICAgICAgICB0aGlzLmRyYXcgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBhbGxEZWcgKz0gc3BlZWQ7XHJcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgNDAwLCA0MDApO1xyXG5cclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v6IOM5pmvIOS7quebmOWkluahhlxyXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gNDtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlPVwiIzAwOTBEMlwiO1xyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xyXG4gICAgICAgICAgICBjdHguYXJjKDE1MCwgMTUwLCAxMDAsIE1hdGguUEkgKiAwLjIsIE1hdGguUEkgKiAwLjgsIHRydWUpO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7Ly/ku6rnm5jnmoTmjIfpkojmoLnlnIbngrlcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTBEMlwiO1xyXG4gICAgICAgICAgICBjdHguYXJjKDE1MCwgMTUwLCA1LCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v5oyH6ZKI55qE5oyH6ZKI5qC55ZyG54K5XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmVkJztcclxuICAgICAgICAgICAgY3R4LmFyYygxNTAsIDE1MCwgMywgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICAgICAgICBjdHguZmlsbCgpO1xyXG5cclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v5Luq55uY55qE5oyH6ZKIXHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZWQnO1xyXG4gICAgICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oMTUwLCAxNTApO1xyXG4gICAgICAgICAgICBsZXQgX25EZWcgPSBhbGxEZWc7XHJcbiAgICAgICAgICAgIGxldCBfcCA9IF90aGlzLmdldFBvcyhhbGxEZWcsIDE1MCwgMTUwLCA4NSk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8oX3AueCwgX3AueSk7XHJcblxyXG4gICAgICAgICAgICBfdGhpcy5sb2coIGFsbERlZyAsJ3BpbmsnLCcxNnB4JylcclxuICAgICAgICAgICAgLy8gX3RoaXMubG9nKGVEZWcrOTAsJ3BpbmsnLCcxNnB4JylcclxuICAgICAgICAgICAgaWYoICEoX25EZWcgPiBzRGVnICsgOTAgJiYgX25EZWcgPCBlRGVnICsgOTApICl7Ly/mjIfpkojliqjnlLvov5DliqjkuK1cclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoX25EZWcgPj0gc0RlZyl7Ly/mjIfpkojliqjnlLvlvIDlp4tcclxuICAgICAgICAgICAgICAgIF90aGlzLmxvZygn5Yqo55S75byA5aeL5ZWmJylcclxuICAgICAgICAgICAgfWVsc2UgaWYoX25EZWcgPj0gZURlZyl7Ly/mjIfpkojliLDovr7mnoHpmZBcclxuICAgICAgICAgICAgICAgIF90aGlzLmxvZygn5Yqo55S75a6M5LqGJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoYWxsRGVnICUgMzYwID09IHNEZWcgKyA5MCApeyBcclxuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKF90aGlzLmFuaSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfWVsc2V7Ly/nu6fnu63liqjnlLtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShfdGhpcy5kcmF3KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLmFuaSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcpOy8v5omn6KGM5Yqo55S7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbW1vbi9tQ2hhcnQuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n")}});