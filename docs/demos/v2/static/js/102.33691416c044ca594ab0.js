webpackJsonp([102],{1e3:function(t,e,o){var r=o(1001);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);o(246)("3232be0f",r,!0)},1001:function(t,e,o){e=t.exports=o(84)(),e.push([t.i,"\n.overwrite-title-demo {\n  margin-top: 5px;\n}\n",""])},1002:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("br"),t._v(" "),o("x-header",[t._v("This is the page title.")]),t._v(" "),o("br"),t._v(" "),o("x-header",{attrs:{title:"use prop:title"}}),t._v(" "),o("br"),t._v(" "),o("x-header",{attrs:{"left-options":{showBack:!1}}},[t._v("do not show Back")]),t._v(" "),o("br"),t._v(" "),o("x-header",{attrs:{"left-options":{backText:""}}},[t._v("set empty back text")]),t._v(" "),o("br"),t._v(" "),o("x-header",{attrs:{"right-options":{showMore:!0}},on:{"on-click-more":function(e){t.showMenus=!0}}},[t._v("with more menu")]),t._v(" "),o("br"),t._v(" "),o("x-header",[t._v("with right link"),o("a",{attrs:{slot:"right"},slot:"right"},[t._v("Feedback")])]),t._v(" "),o("br"),t._v(" "),o("x-header",[t._v("long long long long long long long text"),o("a",{attrs:{slot:"right"},slot:"right"},[t._v("Feedback")])]),t._v(" "),o("br"),t._v(" "),o("x-header",[t._v("with left slot"),o("a",{attrs:{slot:"left"},slot:"left"},[t._v("Close")])]),t._v(" "),o("br"),t._v(" "),o("x-header",[o("span",[t._v("overwrite-left")]),t._v(" "),o("svg",{staticClass:"vux-x-icon vux-x-icon-navicon",staticStyle:{fill:"#fff",position:"relative",top:"-8px",left:"-3px"},attrs:{slot:"overwrite-left",type:"navicon",size:"35",xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",viewBox:"0 0 512 512"},slot:"overwrite-left"},[o("path",{attrs:{d:"M96 241h320v32H96zm0-96h320v32H96zm0 192h320v32H96z"}})])]),t._v(" "),o("br"),t._v(" "),o("x-header",{staticStyle:{"background-color":"#000"}},[t._v("custom background color")]),t._v(" "),o("br"),t._v(" "),o("x-header",{attrs:{title:"slot:overwrite-title"}},[o("div",{staticClass:"overwrite-title-demo",attrs:{slot:"overwrite-title"},slot:"overwrite-title"},[o("button-tab",[o("button-tab-item",{attrs:{selected:""}},[t._v("A")]),t._v(" "),o("button-tab-item",[t._v("B")])],1)],1)]),t._v(" "),o("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[o("actionsheet",{attrs:{menus:t.menus,"show-cancel":""},model:{value:t.showMenus,callback:function(e){t.showMenus=e},expression:"showMenus"}})],1)],1)},s=[],a={render:r,staticRenderFns:s};e.a=a},304:function(t,e,o){"use strict";function r(t){o(1e3)}Object.defineProperty(e,"__esModule",{value:!0});var s=o(709),a=o(1002),n=o(0),i=r,v=n(s.a,a.a,!1,i,null,null);e.default=v.exports},709:function(t,e,o){"use strict";var r=o(107),s=o(104),a=o(86),n=o.n(a),i=o(105),v=o(106);e.a={directives:{TransferDom:n.a},components:{XHeader:r.a,Actionsheet:s.a,ButtonTab:i.a,ButtonTabItem:v.a},data:function(){return{menus:{menu1:"Take Photo",menu2:"Choose from photos"},showMenus:!1}}}}});