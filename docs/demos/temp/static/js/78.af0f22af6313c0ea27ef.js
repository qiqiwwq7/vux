webpackJsonp([78],{1011:function(t,n,e){var i=e(1012);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(246)("be6d1be6",i,!0)},1012:function(t,n,e){n=t.exports=e(84)(),n.push([t.i,"\n.m-img {\n  padding-bottom: 33%;\n  display: block;\n  position: relative;\n  max-width: 100%;\n  background-size: cover;\n  background-position: center center;\n  cursor: pointer;\n  border-radius: 2px;\n}\n.m-title {\n  color: #fff;\n  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n  font-weight: 500;\n  font-size: 16px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  text-align: center;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.m-time {\n  font-size: 12px;\n  padding-top: 4px;\n  border-top: 1px solid #f0f0f0;\n  display: inline-block;\n  margin-top: 5px;\n}\n",""])},1013:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._l(t.list,function(n){return e("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[e("masker",{staticStyle:{"border-radius":"2px"}},[e("div",{staticClass:"m-img",style:{backgroundImage:"url("+n.img+")"}}),t._v(" "),e("div",{staticClass:"m-title",attrs:{slot:"content"},slot:"content"},[t._v("\n        "+t._s(n.title)+"\n        "),e("br"),t._v(" "),e("span",{staticClass:"m-time"},[t._v("2016-03-18")])])])],1)}),t._v(" "),e("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[e("masker",{staticStyle:{"border-radius":"2px"},attrs:{color:"F9C90C",opacity:.8}},[e("div",{staticClass:"m-img",staticStyle:{"background-image":"url(https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg)"}}),t._v(" "),e("div",{staticClass:"m-title",attrs:{slot:"content"},slot:"content"},[t._v("\n        VUX\n        "),e("br"),t._v(" "),e("span",{staticClass:"m-time"},[t._v("2016-03-18")])])])],1)],2)},s=[],a={render:i,staticRenderFns:s};n.a=a},306:function(t,n,e){"use strict";function i(t){e(1011)}Object.defineProperty(n,"__esModule",{value:!0});var s=e(716),a=e(1013),o=e(0),r=i,l=o(s.a,a.a,!1,r,null,null);n.default=l.exports},566:function(t,n,e){"use strict";var i=e(628);n.a={name:"masker",props:{color:{type:String,default:"0, 0, 0"},opacity:{type:Number,default:.5},fullscreen:{type:Boolean,default:!1}},computed:{style:function(){return{backgroundColor:"rgba("+(/,/.test(this.color)?this.color:Object(i.a)(this.color.replace("#","")).join(","))+","+this.opacity+")"}}}}},625:function(t,n,e){"use strict";function i(t){e(626)}var s=e(566),a=e(629),o=e(0),r=i,l=o(s.a,a.a,!1,r,null,null);n.a=l.exports},626:function(t,n,e){var i=e(627);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(246)("4ce21c13",i,!0)},627:function(t,n,e){n=t.exports=e(84)(),n.push([t.i,"\n.vux-masker-box {\n  position: relative;\n}\n.vux-masker {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  border-radius: inherit;\n}\n.vux-masker-fullscreen {\n  position: fixed;\n  z-index: 10001;\n}\n",""])},628:function(t,n,e){"use strict";function i(t){var n=parseInt(t,16);return[n>>16,n>>8&255,255&n]}n.a=i},629:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vux-masker-box"},[t._t("default"),t._v(" "),e("div",{staticClass:"vux-masker",class:{"vux-masker-fullscreen":t.fullscreen},style:t.style},[t._t("content")],2)],2)},s=[],a={render:i,staticRenderFns:s};n.a=a},716:function(t,n,e){"use strict";var i=e(625);n.a={components:{Masker:i.a},data:function(){return{list:[{title:"洗颜新潮流！人气洁面皂排行榜",img:"https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg"},{title:"美容用品 & 日用品（上）",img:"https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg"},{title:"远离车内毒气，日本车载空气净化器精选",img:"https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg"}]}}}}});