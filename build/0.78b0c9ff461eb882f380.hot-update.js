/*! wxx专用！https://github.com/wangzongming */
webpackHotUpdate(0,{10:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(11);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Chart = function () {\n    function Chart() {\n        _classCallCheck(this, Chart);\n\n        //\n        this.getPixelRatio = function (context) {\n            var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;\n            return (window.devicePixelRatio || 1) / backingStore;\n        };\n        // this.ratio = this.getPixelRatio(canvasContent); //画图片的时候宽高都 * 上这个数\n    }\n\n    _createClass(Chart, [{\n        key: 'canvasRem',\n        value: function canvasRem(rem) {\n            //1rem = window / 10  返回一个canvas用的单位\n            if (!rem) {\n                return;\n            };\n            var _num = parseInt(rem);\n            var winWinth = window.innerWidth;\n            return winWinth / 10 * _num;\n        }\n    }, {\n        key: 'getPos',\n        value: function getPos(deg, x, y, r) {\n            //获取 圆边上的 某个坐标 ( 角度(360), x(圆心x), y(圆心y), r(半径))\n            // var _ang = deg * Math.PI;\n            // var _x = x + r * Math.sin(_ang);\n            // var _y = y - r * Math.cos(_ang);\n            // return {x:_x, y:_y, deg:180 / Math.PI * _ang };\n\n            var hudu = 2 * Math.PI / 360 * deg; //  360/8=45,即45度(这个随个人设置)\n            var _x = x + Math.sin(hudu) * r; //  95 是圆形中心的坐标X   即定位left 的值\n            var _y = y - Math.cos(hudu) * r; //  95 是圆形中心的坐标Y   即定位top 的值\n            return { x: _x, y: _y };\n        }\n    }, {\n        key: 'log',\n        value: function log(text) {\n            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"red\";\n            var fontSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '25px';\n\n            console.log('%c' + text, 'color:' + color + ';font-size:' + fontSize);\n        }\n    }, {\n        key: 'init',\n        value: function init(opt) {\n            var rem = this.canvasRem;\n            var canvasContainer = $(opt.ele);\n            this.canvas = document.createElement(\"canvas\");\n            this.canvas.className = \"canvas\";\n            this.canvas.width = rem('10rem');\n            this.canvas.height = rem('8rem');\n            canvasContainer.appendChild(this.canvas);\n            // console.log(opt);\n            // console.log(canvasContainer);\n            var ctx = this.canvas.getContext(\"2d\");\n            this.ratio = this.getPixelRatio(ctx); //画图片时解决模糊问题\n            var _this = this;\n\n            ctx.strokeStyle = \"#0090D2\";\n            ctx.fillStyle = \"#0090D2\";\n            ctx.save();\n\n            var sDeg = 180 / Math.PI * Math.PI * 0.2; //仪盘表起点点角度\n            var eDeg = 180 / Math.PI * Math.PI * 0.8; //仪盘表结束点角度\n            var speed = 2; //转动速度 目前只能填写整数\n\n            var allDeg = eDeg + 90;\n\n            this.log('[\\u8D77\\u59CB\\u89D2\\u5EA6\\uFF1A' + sDeg + ', \\u7ED3\\u675F\\u89D2\\u5EA6\\uFF1A' + eDeg + ']');\n            // console.log( Math.PI/180 * ( eDeg-sDeg ) )\n            this.draw = function () {\n                ctx.clearRect(0, 0, 400, 400);\n                var _p = _this.getPos(allDeg, 150, 150, 85); //获取坐标\n                // _this.log( allDeg ,'pink','16px')\n                // _this.log(eDeg+90,'pink','16px')\n                if (!(allDeg > sDeg + 90 && allDeg < eDeg + 90)) {\n                    //指针动画运动中\n                    ctx.beginPath(); //背景 仪盘外框\n                    ctx.lineWidth = 4;\n                    ctx.strokeStyle = \"#0090D2\";\n                    ctx.beginPath();\n                    ctx.lineCap = \"round\";\n                    ctx.arc(150, 150, 100, Math.PI * 0.2, Math.PI * 0.8, true);\n                    ctx.stroke();\n\n                    ctx.beginPath(); //仪盘的指针根圆点\n                    ctx.fillStyle = \"#0090D2\";\n                    ctx.arc(150, 150, 5, 0, Math.PI * 2);\n                    ctx.fill();\n\n                    ctx.beginPath(); //指针的指针根圆点\n                    ctx.fillStyle = 'red';\n                    ctx.arc(150, 150, 3, 0, Math.PI * 2);\n                    ctx.fill();\n\n                    ctx.beginPath(); //仪盘的指针\n                    ctx.strokeStyle = 'red';\n                    ctx.lineCap = \"round\";\n                    ctx.lineWidth = 2;\n                    ctx.moveTo(150, 150);\n                    ctx.lineTo(_p.x, _p.y);\n\n                    ctx.stroke();\n                } else if (allDeg >= eDeg + 90) {\n                    //指针动画开始\n                    _this.log('动画开始啦');\n                } else if (allDeg >= eDeg) {\n                    //指针到达极限\n                    _this.log('动画完了');\n                }\n\n                if (allDeg % 360 == sDeg + 90) {\n                    cancelAnimationFrame(_this.ani);\n                    return;\n                } else {\n                    //继续动画\n                    allDeg += speed;\n                    requestAnimationFrame(_this.draw);\n                };\n            };\n\n            this.ani = requestAnimationFrame(this.draw); //执行动画\n        }\n    }]);\n\n    return Chart;\n}();\n\nexports.default = Chart;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tbW9uL21DaGFydC5qcz84NzZlIl0sIm5hbWVzIjpbIkNoYXJ0IiwiZ2V0UGl4ZWxSYXRpbyIsImNvbnRleHQiLCJiYWNraW5nU3RvcmUiLCJiYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwid2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJtc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJvQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJyZW0iLCJfbnVtIiwicGFyc2VJbnQiLCJ3aW5XaW50aCIsImlubmVyV2lkdGgiLCJkZWciLCJ4IiwieSIsInIiLCJodWR1IiwiTWF0aCIsIlBJIiwiX3giLCJzaW4iLCJfeSIsImNvcyIsInRleHQiLCJjb2xvciIsImZvbnRTaXplIiwiY29uc29sZSIsImxvZyIsIm9wdCIsImNhbnZhc1JlbSIsImNhbnZhc0NvbnRhaW5lciIsIiQiLCJlbGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImFwcGVuZENoaWxkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJhdGlvIiwiX3RoaXMiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsInNhdmUiLCJzRGVnIiwiZURlZyIsInNwZWVkIiwiYWxsRGVnIiwiZHJhdyIsImNsZWFyUmVjdCIsIl9wIiwiZ2V0UG9zIiwiYmVnaW5QYXRoIiwibGluZVdpZHRoIiwibGluZUNhcCIsImFyYyIsInN0cm9rZSIsImZpbGwiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFuaSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztJQUNNQSxLO0FBQ0YscUJBQWE7QUFBQTs7QUFBQztBQUNWLGFBQUtDLGFBQUwsR0FBcUIsVUFBVUMsT0FBVixFQUFtQjtBQUNwQyxnQkFBSUMsZUFBZUQsUUFBUUUsc0JBQVIsSUFBa0NGLFFBQVFHLDRCQUExQyxJQUEwRUgsUUFBUUkseUJBQWxGLElBQ2ZKLFFBQVFLLHdCQURPLElBQ3FCTCxRQUFRTSx1QkFEN0IsSUFDd0ROLFFBQVFFLHNCQURoRSxJQUMwRixDQUQ3RztBQUVBLG1CQUFPLENBQUNLLE9BQU9DLGdCQUFQLElBQTJCLENBQTVCLElBQWlDUCxZQUF4QztBQUNILFNBSkQ7QUFLQTtBQUNIOzs7O2tDQUVTUSxHLEVBQUk7QUFBQztBQUNYLGdCQUFHLENBQUNBLEdBQUosRUFBUTtBQUFDO0FBQU87QUFDaEIsZ0JBQUlDLE9BQU9DLFNBQVNGLEdBQVQsQ0FBWDtBQUNBLGdCQUFJRyxXQUFXTCxPQUFPTSxVQUF0QjtBQUNBLG1CQUFPRCxXQUFXLEVBQVgsR0FBZ0JGLElBQXZCO0FBQ0g7OzsrQkFFTUksRyxFQUFLQyxDLEVBQUdDLEMsRUFBR0MsQyxFQUFFO0FBQUM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQUlDLE9BQVEsSUFBRUMsS0FBS0MsRUFBUCxHQUFZLEdBQWIsR0FBb0JOLEdBQS9CLENBTmdCLENBTXNCO0FBQ3RDLGdCQUFJTyxLQUFLTixJQUFJSSxLQUFLRyxHQUFMLENBQVNKLElBQVQsSUFBaUJELENBQTlCLENBUGdCLENBT29CO0FBQ3BDLGdCQUFJTSxLQUFLUCxJQUFJRyxLQUFLSyxHQUFMLENBQVNOLElBQVQsSUFBaUJELENBQTlCLENBUmdCLENBUW9CO0FBQ3BDLG1CQUFPLEVBQUNGLEdBQUVNLEVBQUgsRUFBT0wsR0FBRU8sRUFBVCxFQUFQO0FBQ0g7Ozs0QkFFR0UsSSxFQUFtQztBQUFBLGdCQUE3QkMsS0FBNkIsdUVBQXZCLEtBQXVCO0FBQUEsZ0JBQWhCQyxRQUFnQix1RUFBUCxNQUFPOztBQUNuQ0Msb0JBQVFDLEdBQVIsUUFBaUJKLElBQWpCLGFBQWlDQyxLQUFqQyxtQkFBb0RDLFFBQXBEO0FBQ0g7Ozs2QkFFSUcsRyxFQUFJO0FBQ0wsZ0JBQUlyQixNQUFNLEtBQUtzQixTQUFmO0FBQ0EsZ0JBQU1DLGtCQUFrQkMsRUFBRUgsSUFBSUksR0FBTixDQUF4QjtBQUNBLGlCQUFLQyxNQUFMLEdBQWNDLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNBLGlCQUFLRixNQUFMLENBQVlHLFNBQVosR0FBd0IsUUFBeEI7QUFDQSxpQkFBS0gsTUFBTCxDQUFZSSxLQUFaLEdBQW9COUIsSUFBSSxPQUFKLENBQXBCO0FBQ0EsaUJBQUswQixNQUFMLENBQVlLLE1BQVosR0FBcUIvQixJQUFJLE1BQUosQ0FBckI7QUFDQXVCLDRCQUFnQlMsV0FBaEIsQ0FBNEIsS0FBS04sTUFBakM7QUFDQTtBQUNBO0FBQ0EsZ0JBQUlPLE1BQU0sS0FBS1AsTUFBTCxDQUFZUSxVQUFaLENBQXVCLElBQXZCLENBQVY7QUFDQSxpQkFBS0MsS0FBTCxHQUFhLEtBQUs3QyxhQUFMLENBQW1CMkMsR0FBbkIsQ0FBYixDQVhLLENBV2dDO0FBQ3JDLGdCQUFJRyxRQUFRLElBQVo7O0FBR0FILGdCQUFJSSxXQUFKLEdBQWtCLFNBQWxCO0FBQ0FKLGdCQUFJSyxTQUFKLEdBQWdCLFNBQWhCO0FBQ0FMLGdCQUFJTSxJQUFKOztBQUdBLGdCQUFJQyxPQUFPLE1BQU05QixLQUFLQyxFQUFYLEdBQWdCRCxLQUFLQyxFQUFyQixHQUEwQixHQUFyQyxDQXBCSyxDQW9CcUM7QUFDMUMsZ0JBQUk4QixPQUFPLE1BQU0vQixLQUFLQyxFQUFYLEdBQWdCRCxLQUFLQyxFQUFyQixHQUEwQixHQUFyQyxDQXJCSyxDQXFCcUM7QUFDMUMsZ0JBQUkrQixRQUFRLENBQVosQ0F0QkssQ0FzQlM7O0FBRWQsZ0JBQUlDLFNBQVNGLE9BQU8sRUFBcEI7O0FBRUEsaUJBQUtyQixHQUFMLHFDQUFrQm9CLElBQWxCLHdDQUFnQ0MsSUFBaEM7QUFDQTtBQUNBLGlCQUFLRyxJQUFMLEdBQVksWUFBVTtBQUNsQlgsb0JBQUlZLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCO0FBQ0Esb0JBQUlDLEtBQUtWLE1BQU1XLE1BQU4sQ0FBYUosTUFBYixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixFQUEvQixDQUFULENBRmtCLENBRTJCO0FBQzdDO0FBQ0E7QUFDQSxvQkFBSSxFQUFFQSxTQUFTSCxPQUFPLEVBQWhCLElBQXNCRyxTQUFTRixPQUFPLEVBQXhDLENBQUosRUFBaUQ7QUFBQztBQUM5Q1Isd0JBQUllLFNBQUosR0FENkMsQ0FDN0I7QUFDaEJmLHdCQUFJZ0IsU0FBSixHQUFnQixDQUFoQjtBQUNBaEIsd0JBQUlJLFdBQUosR0FBZ0IsU0FBaEI7QUFDQUosd0JBQUllLFNBQUo7QUFDQWYsd0JBQUlpQixPQUFKLEdBQWMsT0FBZDtBQUNBakIsd0JBQUlrQixHQUFKLENBQVEsR0FBUixFQUFhLEdBQWIsRUFBa0IsR0FBbEIsRUFBdUJ6QyxLQUFLQyxFQUFMLEdBQVUsR0FBakMsRUFBc0NELEtBQUtDLEVBQUwsR0FBVSxHQUFoRCxFQUFxRCxJQUFyRDtBQUNBc0Isd0JBQUltQixNQUFKOztBQUVBbkIsd0JBQUllLFNBQUosR0FUNkMsQ0FTN0I7QUFDaEJmLHdCQUFJSyxTQUFKLEdBQWdCLFNBQWhCO0FBQ0FMLHdCQUFJa0IsR0FBSixDQUFRLEdBQVIsRUFBYSxHQUFiLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCekMsS0FBS0MsRUFBTCxHQUFVLENBQWxDO0FBQ0FzQix3QkFBSW9CLElBQUo7O0FBRUFwQix3QkFBSWUsU0FBSixHQWQ2QyxDQWM3QjtBQUNoQmYsd0JBQUlLLFNBQUosR0FBZ0IsS0FBaEI7QUFDQUwsd0JBQUlrQixHQUFKLENBQVEsR0FBUixFQUFhLEdBQWIsRUFBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0J6QyxLQUFLQyxFQUFMLEdBQVUsQ0FBbEM7QUFDQXNCLHdCQUFJb0IsSUFBSjs7QUFFQXBCLHdCQUFJZSxTQUFKLEdBbkI2QyxDQW1CN0I7QUFDaEJmLHdCQUFJSSxXQUFKLEdBQWtCLEtBQWxCO0FBQ0FKLHdCQUFJaUIsT0FBSixHQUFjLE9BQWQ7QUFDQWpCLHdCQUFJZ0IsU0FBSixHQUFnQixDQUFoQjtBQUNBaEIsd0JBQUlxQixNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQjtBQUNBckIsd0JBQUlzQixNQUFKLENBQVdULEdBQUd4QyxDQUFkLEVBQWlCd0MsR0FBR3ZDLENBQXBCOztBQUVBMEIsd0JBQUltQixNQUFKO0FBQ0gsaUJBM0JELE1BMkJNLElBQUdULFVBQVVGLE9BQU8sRUFBcEIsRUFBdUI7QUFBQztBQUMxQkwsMEJBQU1oQixHQUFOLENBQVUsT0FBVjtBQUNILGlCQUZLLE1BRUEsSUFBR3VCLFVBQVVGLElBQWIsRUFBa0I7QUFBQztBQUNyQkwsMEJBQU1oQixHQUFOLENBQVUsTUFBVjtBQUNIOztBQUVELG9CQUFHdUIsU0FBUyxHQUFULElBQWdCSCxPQUFPLEVBQTFCLEVBQThCO0FBQzFCZ0IseUNBQXFCcEIsTUFBTXFCLEdBQTNCO0FBQ0E7QUFDSCxpQkFIRCxNQUdLO0FBQUM7QUFDRmQsOEJBQVVELEtBQVY7QUFDQWdCLDBDQUFzQnRCLE1BQU1RLElBQTVCO0FBQ0g7QUFDSixhQTdDRDs7QUErQ0EsaUJBQUthLEdBQUwsR0FBV0Msc0JBQXNCLEtBQUtkLElBQTNCLENBQVgsQ0EzRUssQ0EyRXVDO0FBQy9DOzs7Ozs7a0JBSVV2RCxLIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2NhbnZhc1JlbS5qcyc7XHJcbmNsYXNzIENoYXJ0IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7Ly9cclxuICAgICAgICB0aGlzLmdldFBpeGVsUmF0aW8gPSBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gICAgICAgICAgICBsZXQgYmFja2luZ1N0b3JlID0gY29udGV4dC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGNvbnRleHQud2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCBjb250ZXh0Lm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgICAgICAgICAgICAgIGNvbnRleHQubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGNvbnRleHQub0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgY29udGV4dC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IDE7XHJcbiAgICAgICAgICAgIHJldHVybiAod2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSkgLyBiYWNraW5nU3RvcmU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyB0aGlzLnJhdGlvID0gdGhpcy5nZXRQaXhlbFJhdGlvKGNhbnZhc0NvbnRlbnQpOyAvL+eUu+WbvueJh+eahOaXtuWAmeWuvemrmOmDvSAqIOS4iui/meS4quaVsFxyXG4gICAgfSAgIFxyXG5cclxuICAgIGNhbnZhc1JlbShyZW0pey8vMXJlbSA9IHdpbmRvdyAvIDEwICDov5Tlm57kuIDkuKpjYW52YXPnlKjnmoTljZXkvY1cclxuICAgICAgICBpZighcmVtKXtyZXR1cm59O1xyXG4gICAgICAgIGxldCBfbnVtID0gcGFyc2VJbnQocmVtKTtcclxuICAgICAgICBsZXQgd2luV2ludGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICByZXR1cm4gd2luV2ludGggLyAxMCAqIF9udW07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zKGRlZywgeCwgeSwgcil7Ly/ojrflj5Yg5ZyG6L655LiK55qEIOafkOS4quWdkOaghyAoIOinkuW6pigzNjApLCB4KOWchuW/g3gpLCB5KOWchuW/g3kpLCByKOWNiuW+hCkpXHJcbiAgICAgICAgLy8gdmFyIF9hbmcgPSBkZWcgKiBNYXRoLlBJO1xyXG4gICAgICAgIC8vIHZhciBfeCA9IHggKyByICogTWF0aC5zaW4oX2FuZyk7XHJcbiAgICAgICAgLy8gdmFyIF95ID0geSAtIHIgKiBNYXRoLmNvcyhfYW5nKTtcclxuICAgICAgICAvLyByZXR1cm4ge3g6X3gsIHk6X3ksIGRlZzoxODAgLyBNYXRoLlBJICogX2FuZyB9O1xyXG5cclxuICAgICAgICB2YXIgaHVkdSA9ICgyKk1hdGguUEkgLyAzNjApICogZGVnOyAgIC8vICAzNjAvOD00NSzljbM0NeW6pijov5nkuKrpmo/kuKrkurrorr7nva4pXHJcbiAgICAgICAgdmFyIF94ID0geCArIE1hdGguc2luKGh1ZHUpICogcjsgICAgLy8gIDk1IOaYr+WchuW9ouS4reW/g+eahOWdkOagh1ggICDljbPlrprkvY1sZWZ0IOeahOWAvFxyXG4gICAgICAgIHZhciBfeSA9IHkgLSBNYXRoLmNvcyhodWR1KSAqIHI7ICAgIC8vICA5NSDmmK/lnIblvaLkuK3lv4PnmoTlnZDmoIdZICAg5Y2z5a6a5L2NdG9wIOeahOWAvFxyXG4gICAgICAgIHJldHVybiB7eDpfeCwgeTpfeX07XHJcbiAgICB9XHJcblxyXG4gICAgbG9nKHRleHQsIGNvbG9yPVwicmVkXCIsIGZvbnRTaXplPScyNXB4Jyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCVjJHt0ZXh0fWAsYGNvbG9yOiR7Y29sb3J9O2ZvbnQtc2l6ZToke2ZvbnRTaXplfWApXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChvcHQpe1xyXG4gICAgICAgIHZhciByZW0gPSB0aGlzLmNhbnZhc1JlbTtcclxuICAgICAgICBjb25zdCBjYW52YXNDb250YWluZXIgPSAkKG9wdC5lbGUpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jbGFzc05hbWUgPSBcImNhbnZhc1wiO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gcmVtKCcxMHJlbScpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHJlbSgnOHJlbScpO1xyXG4gICAgICAgIGNhbnZhc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob3B0KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYW52YXNDb250YWluZXIpO1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgdGhpcy5yYXRpbyA9IHRoaXMuZ2V0UGl4ZWxSYXRpbyhjdHgpOy8v55S75Zu+54mH5pe26Kej5Yaz5qih57OK6Zeu6aKYXHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMDA5MEQyXCI7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTBEMlwiO1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgdmFyIHNEZWcgPSAxODAgLyBNYXRoLlBJICogTWF0aC5QSSAqIDAuMjsgLy/ku6rnm5jooajotbfngrnngrnop5LluqZcclxuICAgICAgICB2YXIgZURlZyA9IDE4MCAvIE1hdGguUEkgKiBNYXRoLlBJICogMC44OyAvL+S7quebmOihqOe7k+adn+eCueinkuW6plxyXG4gICAgICAgIHZhciBzcGVlZCA9IDI7Ly/ovazliqjpgJ/luqYg55uu5YmN5Y+q6IO95aGr5YaZ5pW05pWwXHJcblxyXG4gICAgICAgIHZhciBhbGxEZWcgPSBlRGVnICsgOTA7XHJcbiAgICBcclxuICAgICAgICB0aGlzLmxvZyhgW+i1t+Wni+inkuW6pu+8miR7c0RlZ30sIOe7k+adn+inkuW6pu+8miR7ZURlZ31dYCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIE1hdGguUEkvMTgwICogKCBlRGVnLXNEZWcgKSApXHJcbiAgICAgICAgdGhpcy5kcmF3ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCA0MDAsIDQwMCk7XHJcbiAgICAgICAgICAgIGxldCBfcCA9IF90aGlzLmdldFBvcyhhbGxEZWcsIDE1MCwgMTUwLCA4NSk7IC8v6I635Y+W5Z2Q5qCHXHJcbiAgICAgICAgICAgIC8vIF90aGlzLmxvZyggYWxsRGVnICwncGluaycsJzE2cHgnKVxyXG4gICAgICAgICAgICAvLyBfdGhpcy5sb2coZURlZys5MCwncGluaycsJzE2cHgnKVxyXG4gICAgICAgICAgICBpZiggIShhbGxEZWcgPiBzRGVnICsgOTAgJiYgYWxsRGVnIDwgZURlZyArIDkwKSApey8v5oyH6ZKI5Yqo55S76L+Q5Yqo5LitXHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7Ly/og4zmma8g5Luq55uY5aSW5qGGXHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gNDtcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZT1cIiMwMDkwRDJcIjtcclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xyXG4gICAgICAgICAgICAgICAgY3R4LmFyYygxNTAsIDE1MCwgMTAwLCBNYXRoLlBJICogMC4yLCBNYXRoLlBJICogMC44LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v5Luq55uY55qE5oyH6ZKI5qC55ZyG54K5XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5MEQyXCI7XHJcbiAgICAgICAgICAgICAgICBjdHguYXJjKDE1MCwgMTUwLCA1LCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOy8v5oyH6ZKI55qE5oyH6ZKI5qC55ZyG54K5XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XHJcbiAgICAgICAgICAgICAgICBjdHguYXJjKDE1MCwgMTUwLCAzLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTsvL+S7quebmOeahOaMh+mSiFxyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JlZCc7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbygxNTAsIDE1MCk7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKF9wLngsIF9wLnkpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGFsbERlZyA+PSBlRGVnICsgOTApey8v5oyH6ZKI5Yqo55S75byA5aeLXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5sb2coJ+WKqOeUu+W8gOWni+WVpicpXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGFsbERlZyA+PSBlRGVnKXsvL+aMh+mSiOWIsOi+vuaegemZkFxyXG4gICAgICAgICAgICAgICAgX3RoaXMubG9nKCfliqjnlLvlrozkuoYnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihhbGxEZWcgJSAzNjAgPT0gc0RlZyArIDkwICl7IFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoX3RoaXMuYW5pKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9ZWxzZXsvL+e7p+e7reWKqOeUu1xyXG4gICAgICAgICAgICAgICAgYWxsRGVnICs9IHNwZWVkO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF90aGlzLmRyYXcpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMuYW5pID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhdyk7Ly/miafooYzliqjnlLtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tbW9uL21DaGFydC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n")}});