/*! wxx专用！https://github.com/wangzongming */
webpackHotUpdate(0,{10:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n        value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(11);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nvar Chart = function () {\n        function Chart() {\n                _classCallCheck(this, Chart);\n\n                //\n                this.getPixelRatio = function (context) {\n                        var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;\n                        return (window.devicePixelRatio || 1) / backingStore;\n                };\n                // this.ratio = this.getPixelRatio(canvasContent); //画图片的时候宽高都 * 上这个数\n        }\n\n        _createClass(Chart, [{\n                key: "canvasRem",\n                value: function canvasRem(rem) {\n                        //1rem = window / 10  返回一个canvas用的单位\n                        if (!rem) {\n                                return;\n                        };\n                        var _num = parseInt(rem);\n                        var winWinth = window.innerWidth;\n                        return winWinth / 10 * _num;\n                }\n        }, {\n                key: "getPos",\n                value: function getPos(deg, x, y, r) {\n                        //获取 圆边上的 某个坐标 ( 角度(0-2), x(圆心x), y(圆心y), r(半径))\n                        var _ang = deg * Math.PI;\n                        var _x = x + r * Math.sin(_ang);\n                        var _y = y - r * Math.cos(_ang);\n                        // console.log( 180 / Math.PI * _ang )\n                        return { x: _x, y: _y, deg: 180 / Math.PI * _ang };\n                }\n        }, {\n                key: "init",\n                value: function init(opt) {\n                        var rem = this.canvasRem;\n                        var canvasContainer = $(opt.ele);\n                        this.canvas = document.createElement("canvas");\n                        this.canvas.className = "canvas";\n                        this.canvas.width = rem(\'10rem\');\n                        this.canvas.height = rem(\'8rem\');\n                        canvasContainer.appendChild(this.canvas);\n                        // console.log(opt);\n                        // console.log(canvasContainer);\n                        var ctx = this.canvas.getContext("2d");\n                        this.ratio = this.getPixelRatio(ctx); //画图片时解决模糊问题\n\n                        ctx.strokeStyle = "#0090D2";\n                        ctx.fillStyle = "#0090D2";\n\n                        ctx.beginPath(); //背景 仪盘\n                        ctx.lineWidth = 4;\n                        ctx.beginPath();\n                        ctx.lineCap = "round";\n                        ctx.arc(150, 150, 100, Math.PI * 0.2, Math.PI * 0.8, true);\n                        ctx.stroke();\n\n                        var sDeg = 180 / Math.PI * Math.PI * 0.2; //仪盘表起点点角度\n                        var eDeg = 180 / Math.PI * Math.PI * 0.8; //仪盘表结束点角度\n                        // console.log(sDeg,eDeg)\n\n                        ctx.beginPath(); //仪盘下面横线\n                        ctx.lineWidth = 1;\n                        ctx.lineCap = "round";\n                        ctx.moveTo(20, 210);\n                        ctx.lineTo(280, 210);\n\n                        console.log(sDeg, eDeg);\n                        // console.log( Math.PI/180 * ( eDeg-sDeg ) )\n\n                        for (var i = 0; i < 360; i += 5) {\n                                //仪盘的指针 小\n                                var _p = this.getPos(i * 2 / 360, 150, 150, 100);\n                                ctx.beginPath();\n                                ctx.lineWidth = 2;\n                                ctx.moveTo(150, 150);\n                                ctx.lineTo(_p.x, _p.y);\n                                ctx.stroke();\n                        }\n\n                        ctx.beginPath(); //缺口背景\n                        ctx.fillStyle = \'black\';\n                        ctx.arc(150, 150, 105, Math.PI / 180 * sDeg, Math.PI / 180 * eDeg);\n                        ctx.fill();\n\n                        ctx.beginPath(); //背景2 仪盘\n                        ctx.fillStyle = \'black\';\n                        ctx.lineCap = "round";\n                        ctx.arc(150, 150, 95, Math.PI * 0, Math.PI * 2, true);\n                        ctx.fill();\n\n                        for (var i = 0; i < 360; i += 10) {\n                                //仪盘的指针 大\n                                var _p = this.getPos(i * 2 / 360, 150, 150, 100);\n                                ctx.beginPath();\n                                ctx.lineCap = "";\n                                ctx.strokeStyle = "orange";\n                                ctx.lineJoin = "round";\n                                ctx.lineWidth = 3;\n                                ctx.moveTo(150, 150);\n                                ctx.lineTo(_p.x, _p.y);\n                                ctx.stroke();\n                        }\n\n                        ctx.beginPath(); //缺口背景\n                        ctx.fillStyle = \'black\';\n                        ctx.arc(150, 140, 115, Math.PI / 180 * sDeg, Math.PI / 180 * eDeg);\n                        ctx.fill();\n\n                        ctx.beginPath(); //背景3 \n                        ctx.fillStyle = \'black\';\n                        ctx.lineCap = "round";\n                        ctx.lineJoin = "round";\n                        ctx.arc(150, 150, 92, Math.PI * 0, Math.PI * 2, true);\n                        ctx.fill();\n\n                        ctx.beginPath(); //背景 仪盘\n                        ctx.strokeStyle = "#0090D2";\n                        ctx.lineWidth = 4;\n                        ctx.beginPath();\n                        ctx.lineCap = "round";\n                        ctx.arc(150, 150, 100, Math.PI * 0.2, Math.PI * 0.8, true);\n                        ctx.stroke();\n\n                        ctx.beginPath(); //仪盘的指针根\n                        ctx.strokeStyle = "#0090D2";\n                        ctx.arc(150, 150, 1, 0, Math.PI * 2);\n                        ctx.fill();\n\n                        ctx.beginPath(); //指针的指针根\n                        ctx.fillStyle = \'red\';\n                        ctx.arc(150, 150, 3, 0, Math.PI * 2);\n                        ctx.fill();\n\n                        ctx.beginPath(); //仪盘的指针\n                        ctx.strokeStyle = \'red\';\n                        ctx.lineWidth = 2;\n                        ctx.moveTo(150, 150);\n                        var _p = this.getPos(1.5, 150, 150, 100);\n                        ctx.lineTo(_p.x + 20, _p.y);\n                        ctx.stroke();\n                }\n        }]);\n\n        return Chart;\n}();\n\nexports.default = Chart;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tbW9uL21DaGFydC5qcz84NzZlIl0sIm5hbWVzIjpbIkNoYXJ0IiwiZ2V0UGl4ZWxSYXRpbyIsImNvbnRleHQiLCJiYWNraW5nU3RvcmUiLCJiYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwid2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJtc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJvQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJyZW0iLCJfbnVtIiwicGFyc2VJbnQiLCJ3aW5XaW50aCIsImlubmVyV2lkdGgiLCJkZWciLCJ4IiwieSIsInIiLCJfYW5nIiwiTWF0aCIsIlBJIiwiX3giLCJzaW4iLCJfeSIsImNvcyIsIm9wdCIsImNhbnZhc1JlbSIsImNhbnZhc0NvbnRhaW5lciIsIiQiLCJlbGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImFwcGVuZENoaWxkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJhdGlvIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJsaW5lV2lkdGgiLCJsaW5lQ2FwIiwiYXJjIiwic3Ryb2tlIiwic0RlZyIsImVEZWciLCJtb3ZlVG8iLCJsaW5lVG8iLCJjb25zb2xlIiwibG9nIiwiaSIsIl9wIiwiZ2V0UG9zIiwiZmlsbCIsImxpbmVKb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0lBQ01BLEs7QUFDRix5QkFBYTtBQUFBOztBQUFDO0FBQ1YscUJBQUtDLGFBQUwsR0FBcUIsVUFBVUMsT0FBVixFQUFtQjtBQUNwQyw0QkFBSUMsZUFBZUQsUUFBUUUsc0JBQVIsSUFBa0NGLFFBQVFHLDRCQUExQyxJQUEwRUgsUUFBUUkseUJBQWxGLElBQ2ZKLFFBQVFLLHdCQURPLElBQ3FC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QUFiLEVBQWtCLEdBQWxCLEVBQXVCMUIsS0FBS0MsRUFBTCxHQUFVLEdBQWpDLEVBQXNDRCxLQUFLQyxFQUFMLEdBQVUsR0FBaEQsRUFBcUQsSUFBckQ7QUFDQWlCLDRCQUFJUyxNQUFKOztBQUlBVCw0QkFBSUssU0FBSixHQTlGSyxDQThGVztBQUNoQkwsNEJBQUlHLFdBQUosR0FBa0IsU0FBbEI7QUFDQUgsNEJBQUlRLEdBQUosQ0FBUSxHQUFSLEVBQWEsR0FBYixFQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QjFCLEtBQUtDLEVBQUwsR0FBVSxDQUFsQztBQUNBaUIsNEJBQUltQixJQUFKOztBQUVBbkIsNEJBQUlLLFNBQUosR0FuR0ssQ0FtR1c7QUFDaEJMLDRCQUFJSSxTQUFKLEdBQWdCLEtBQWhCO0FBQ0FKLDRCQUFJUSxHQUFKLENBQVEsR0FBUixFQUFhLEdBQWIsRUFBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IxQixLQUFLQyxFQUFMLEdBQVUsQ0FBbEM7QUFDQWlCLDRCQUFJbUIsSUFBSjs7QUFHQW5CLDRCQUFJSyxTQUFKLEdBekdLLENBeUdXO0FBQ2hCTCw0QkFBSUcsV0FBSixHQUFrQixLQUFsQjtBQUNBSCw0QkFBSU0sU0FBSixHQUFnQixDQUFoQjtBQUNBTiw0QkFBSVksTUFBSixDQUFXLEdBQVgsRUFBZ0IsR0FBaEI7QUFDQSw0QkFBSUssS0FBSyxLQUFLQyxNQUFMLENBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixHQUF2QixFQUE0QixHQUE1QixDQUFUO0FBQ0FsQiw0QkFBSWEsTUFBSixDQUFXSSxHQUFHdkMsQ0FBSCxHQUFPLEVBQWxCLEVBQXNCdUMsR0FBR3RDLENBQXpCO0FBQ0FxQiw0QkFBSVMsTUFBSjtBQUNIOzs7Ozs7a0JBSVVoRCxLIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2NhbnZhc1JlbS5qcyc7XHJcbmNsYXNzIENoYXJ0IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7Ly9cclxuICAgICAgICB0aGlzLmdldFBpeGVsUmF0aW8gPSBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gICAgICAgICAgICBsZXQgYmFja2luZ1N0b3JlID0gY29udGV4dC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGNvbnRleHQud2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCBjb250ZXh0Lm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgICAgICAgICAgICAgIGNvbnRleHQubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGNvbnRleHQub0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgY29udGV4dC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IDE7XHJcbiAgICAgICAgICAgIHJldHVybiAod2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSkgLyBiYWNraW5nU3RvcmU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyB0aGlzLnJhdGlvID0gdGhpcy5nZXRQaXhlbFJhdGlvKGNhbnZhc0NvbnRlbnQpOyAvL+eUu+WbvueJh+eahOaXtuWAmeWuvemrmOmDvSAqIOS4iui/meS4quaVsFxyXG4gICAgfSAgIFxyXG5cclxuICAgIGNhbnZhc1JlbShyZW0pey8vMXJlbSA9IHdpbmRvdyAvIDEwICDov5Tlm57kuIDkuKpjYW52YXPnlKjnmoTljZXkvY1cclxuICAgICAgICBpZighcmVtKXtyZXR1cm59O1xyXG4gICAgICAgIGxldCBfbnVtID0gcGFyc2VJbnQocmVtKTtcclxuICAgICAgICBsZXQgd2luV2ludGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICByZXR1cm4gd2luV2ludGggLyAxMCAqIF9udW07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zKGRlZywgeCwgeSwgcil7Ly/ojrflj5Yg5ZyG6L655LiK55qEIOafkOS4quWdkOaghyAoIOinkuW6pigwLTIpLCB4KOWchuW/g3gpLCB5KOWchuW/g3kpLCByKOWNiuW+hCkpXHJcbiAgICAgICAgdmFyIF9hbmcgPSBkZWcgKiBNYXRoLlBJO1xyXG4gICAgICAgIHZhciBfeCA9IHggKyByICogTWF0aC5zaW4oX2FuZyk7XHJcbiAgICAgICAgdmFyIF95ID0geSAtIHIgKiBNYXRoLmNvcyhfYW5nKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggMTgwIC8gTWF0aC5QSSAqIF9hbmcgKVxyXG4gICAgICAgIHJldHVybiB7eDpfeCwgeTpfeSwgZGVnOjE4MCAvIE1hdGguUEkgKiBfYW5nIH07XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChvcHQpe1xyXG4gICAgICAgIHZhciByZW0gPSB0aGlzLmNhbnZhc1JlbTtcclxuICAgICAgICBjb25zdCBjYW52YXNDb250YWluZXIgPSAkKG9wdC5lbGUpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jbGFzc05hbWUgPSBcImNhbnZhc1wiO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gcmVtKCcxMHJlbScpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHJlbSgnOHJlbScpO1xyXG4gICAgICAgIGNhbnZhc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob3B0KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYW52YXNDb250YWluZXIpO1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgdGhpcy5yYXRpbyA9IHRoaXMuZ2V0UGl4ZWxSYXRpbyhjdHgpOy8v55S75Zu+54mH5pe26Kej5Yaz5qih57OK6Zeu6aKYXHJcblxyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzAwOTBEMlwiO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDkwRDJcIjtcclxuXHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v6IOM5pmvIOS7quebmFxyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA0O1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgICAgICBjdHguYXJjKDE1MCwgMTUwLCAxMDAsIE1hdGguUEkgKiAwLjIsIE1hdGguUEkgKiAwLjgsIHRydWUpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgdmFyIHNEZWcgPSAxODAgLyBNYXRoLlBJICogTWF0aC5QSSAqIDAuMjsgLy/ku6rnm5jooajotbfngrnngrnop5LluqZcclxuICAgICAgICB2YXIgZURlZyA9IDE4MCAvIE1hdGguUEkgKiBNYXRoLlBJICogMC44OyAvL+S7quebmOihqOe7k+adn+eCueinkuW6plxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNEZWcsZURlZylcclxuXHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v5Luq55uY5LiL6Z2i5qiq57q/XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgICAgICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XHJcbiAgICAgICAgY3R4Lm1vdmVUbygyMCwgMjEwKTtcclxuICAgICAgICBjdHgubGluZVRvKDI4MCwgMjEwKTtcclxuXHJcbiAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhzRGVnLCBlRGVnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggTWF0aC5QSS8xODAgKiAoIGVEZWctc0RlZyApIClcclxuICAgICAgICBcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgMzYwOyBpKz01KXsvL+S7quebmOeahOaMh+mSiCDlsI9cclxuICAgICAgICAgICAgdmFyICBfcCA9IHRoaXMuZ2V0UG9zKCBpICogMi8zNjAsIDE1MCwgMTUwLCAxMDApO1xyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGg9MjtcclxuICAgICAgICAgICAgY3R4Lm1vdmVUbygxNTAsIDE1MCk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8oX3AueCwgX3AueSk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7Ly/nvLrlj6Pog4zmma9cclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcclxuICAgICAgICBjdHguYXJjKDE1MCwgMTUwLCAxMDUsIE1hdGguUEkgLyAxODAgKiBzRGVnLCBNYXRoLlBJIC8gMTgwICogZURlZyk7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuXHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v6IOM5pmvMiDku6rnm5hcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcclxuICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgICAgICBjdHguYXJjKDE1MCwgMTUwLCA5NSwgTWF0aC5QSSAqIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgMzYwOyBpKz0xMCl7Ly/ku6rnm5jnmoTmjIfpkogg5aSnXHJcbiAgICAgICAgICAgIHZhciAgX3AgPSB0aGlzLmdldFBvcyggaSAqIDIvMzYwLCAxNTAsIDE1MCwgMTAwKTtcclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHgubGluZUNhcCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZT1cIm9yYW5nZVwiXHJcbiAgICAgICAgICAgIGN0eC5saW5lSm9pbj1cInJvdW5kXCI7XHJcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGg9MztcclxuICAgICAgICAgICAgY3R4Lm1vdmVUbygxNTAsIDE1MCk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8oX3AueCwgX3AueSk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsvL+e8uuWPo+iDjOaZr1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgICAgIGN0eC5hcmMoMTUwLCAxNDAsIDExNSwgTWF0aC5QSSAvIDE4MCAqIHNEZWcsIE1hdGguUEkgLyAxODAgKiBlRGVnKTtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG5cclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7Ly/og4zmma8zIFxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xyXG4gICAgICAgIGN0eC5saW5lSm9pbj1cInJvdW5kXCI7XHJcbiAgICAgICAgY3R4LmFyYygxNTAsIDE1MCwgOTIsIE1hdGguUEkgKiAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuXHJcblxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsvL+iDjOaZryDku6rnm5hcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiMwMDkwRDJcIjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gNDtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XHJcbiAgICAgICAgY3R4LmFyYygxNTAsIDE1MCwgMTAwLCBNYXRoLlBJICogMC4yLCBNYXRoLlBJICogMC44LCB0cnVlKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v5Luq55uY55qE5oyH6ZKI5qC5XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMDA5MEQyXCI7XHJcbiAgICAgICAgY3R4LmFyYygxNTAsIDE1MCwgMSwgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcblxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsvL+aMh+mSiOeahOaMh+mSiOaguVxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmVkJztcclxuICAgICAgICBjdHguYXJjKDE1MCwgMTUwLCAzLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuXHJcblxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsvL+S7quebmOeahOaMh+mSiFxyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZWQnO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8oMTUwLCAxNTApO1xyXG4gICAgICAgIHZhciBfcCA9IHRoaXMuZ2V0UG9zKCAxLjUsIDE1MCwgMTUwLCAxMDApO1xyXG4gICAgICAgIGN0eC5saW5lVG8oX3AueCArIDIwLCBfcC55KTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbW1vbi9tQ2hhcnQuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n')}});