webpackJsonp([74],{291:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(687),r=t(939),a=t(0),o=a(i.a,r.a,!1,null,null,null);e.default=o.exports},389:function(n,e,t){"use strict";var i=t(41),r=t(42),a=t.n(r);e.a={name:"x-switch",components:{InlineDesc:i.a},computed:{labelStyle:function(){var n=/<\/?[^>]*>/.test(this.title),e=Math.min(n?5:this.title.length+1,14)+"em";return a()({display:"block",width:this.$parent.labelWidth||e,textAlign:this.$parent.labelAlign})},labelClass:function(){return{"vux-cell-justify":this.$parent&&"justify"===this.$parent.labelAlign}}},methods:{onClick:function(){this.$emit("on-click",!this.currentValue,this.currentValue)},toBoolean:function(n){if(this.valueMap){return 1===this.valueMap.indexOf(n)}return n},toRaw:function(n){return this.valueMap?this.valueMap[n?1:0]:n}},props:{title:{type:String,required:!0},disabled:Boolean,value:{type:[Boolean,String,Number],default:!1},inlineDesc:[String,Boolean,Number],preventDefault:Boolean,valueMap:{type:Array,default:function(){return[!1,!0]}}},data:function(){return{currentValue:this.toBoolean(this.value)}},watch:{currentValue:function(n){var e=this.toRaw(n);this.$emit("input",e),this.$emit("on-change",e)},value:function(n){this.currentValue=this.toBoolean(n)}}}},412:function(n,e,t){"use strict";function i(n){t(413)}var r=t(389),a=t(415),o=t(0),s=i,c=o(r.a,a.a,!1,s,null,null);e.a=c.exports},413:function(n,e,t){var i=t(414);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t(246)("6abe166a",i,!0)},414:function(n,e,t){e=n.exports=t(84)(),e.push([n.i,'/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.weui-label {\n  display: block;\n  width: 105px;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.weui-input {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  -webkit-appearance: none;\n  background-color: transparent;\n  font-size: inherit;\n  color: inherit;\n  height: 1.41176471em;\n  line-height: 1.41176471;\n}\n.weui-input::-webkit-outer-spin-button,\n.weui-input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.weui-textarea {\n  display: block;\n  border: 0;\n  resize: none;\n  width: 100%;\n  color: inherit;\n  font-size: 1em;\n  line-height: inherit;\n  outline: 0;\n}\n.weui-textarea-counter {\n  color: #B2B2B2;\n  text-align: right;\n}\n.weui-cell_warn .weui-textarea-counter {\n  color: #E64340;\n}\n.weui-toptips {\n  display: none;\n  position: fixed;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 5px;\n  font-size: 14px;\n  text-align: center;\n  color: #FFF;\n  z-index: 5000;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.weui-toptips_warn {\n  background-color: #E64340;\n}\n.weui-cells_form .weui-cell__ft {\n  font-size: 0;\n}\n.weui-cells_form .weui-icon-warn {\n  display: none;\n}\n.weui-cells_form input,\n.weui-cells_form textarea,\n.weui-cells_form label[for] {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.weui-cell_warn {\n  color: #E64340;\n}\n.weui-cell_warn .weui-icon-warn {\n  display: inline-block;\n}\n.weui-cell_switch {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.weui-switch {\n  -webkit-appearance: none;\n          appearance: none;\n}\n.weui-switch,\n.weui-switch-cp__box {\n  position: relative;\n  width: 52px;\n  height: 32px;\n  border: 1px solid #DFDFDF;\n  outline: 0;\n  border-radius: 16px;\n  box-sizing: border-box;\n  background-color: #DFDFDF;\n  -webkit-transition: background-color 0.1s, border 0.1s;\n  transition: background-color 0.1s, border 0.1s;\n}\n.weui-switch:before,\n.weui-switch-cp__box:before {\n  content: " ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: #FDFDFD;\n  -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n  transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n  transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n  transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n}\n.weui-switch:after,\n.weui-switch-cp__box:after {\n  content: " ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: #FFFFFF;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n  transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n  transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n  transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35), -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n}\n.weui-switch:checked,\n.weui-switch-cp__input:checked ~ .weui-switch-cp__box {\n  /** vux **/\n  border-color: #ffe26d;\n  background-color: #ffe26d;\n  /** end vux **/\n}\n.weui-switch:checked:before,\n.weui-switch-cp__input:checked ~ .weui-switch-cp__box:before {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n.weui-switch:checked:after,\n.weui-switch-cp__input:checked ~ .weui-switch-cp__box:after {\n  -webkit-transform: translateX(20px);\n          transform: translateX(20px);\n}\n.weui-switch-cp__input {\n  position: absolute;\n  left: -9999px;\n}\n.weui-switch-cp__box {\n  display: block;\n}\n.weui-cell_switch .weui-cell__ft {\n  font-size: 0;\n  position: relative;\n}\ninput.weui-switch[disabled] {\n  opacity: 0.6;\n}\n.vux-x-switch.weui-cell_switch {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.vux-x-switch-overlay {\n  width: 60px;\n  height: 50px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  opacity: 0;\n}\n',""])},415:function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"vux-x-switch weui-cell weui-cell_switch"},[t("div",{staticClass:"weui-cell__bd"},[t("label",{staticClass:"weui-label",class:n.labelClass,style:n.labelStyle,domProps:{innerHTML:n._s(n.title)}}),n._v(" "),n.inlineDesc?t("inline-desc",[n._v(n._s(n.inlineDesc))]):n._e()],1),n._v(" "),t("div",{staticClass:"weui-cell__ft"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.currentValue,expression:"currentValue"}],staticClass:"weui-switch",attrs:{type:"checkbox",disabled:n.disabled},domProps:{checked:Array.isArray(n.currentValue)?n._i(n.currentValue,null)>-1:n.currentValue},on:{change:function(e){var t=n.currentValue,i=e.target,r=!!i.checked;if(Array.isArray(t)){var a=n._i(t,null);i.checked?a<0&&(n.currentValue=t.concat([null])):a>-1&&(n.currentValue=t.slice(0,a).concat(t.slice(a+1)))}else n.currentValue=r}}}),n._v(" "),n.preventDefault?t("div",{staticClass:"vux-x-switch-overlay",on:{click:n.onClick}}):n._e()])])},r=[],a={render:i,staticRenderFns:r};e.a=a},687:function(n,e,t){"use strict";var i=t(39),r=t(85),a=t(937),o=t(412);e.a={components:{Group:i.a,Cell:r.a,Countdown:a.a,XSwitch:o.a},methods:{finish:function(n){this.show=!1,this.value="completed",console.log("current index",n)},finish2:function(n){this.start=!1,this.time=20}},data:function(){return{show:!0,time1:15,time2:15,value:"",start:!1}}}},688:function(n,e,t){"use strict";e.a={name:"countdown",props:{value:Number,start:{type:Boolean,default:!0}},created:function(){this.currentTime=this.time,this.value&&(this.currentTime=this.value)},methods:{tick:function(){var n=this;this.interval=setInterval(function(){n.currentTime>0?n.currentTime--:(n.stop(),n.index++,n.$emit("on-finish",n.index))},1e3)},stop:function(){clearInterval(this.interval)}},watch:{value:function(n){this.currentTime=n},currentTime:function(n){this.$emit("input",n)},start:function(n,e){!0===n&&!1===e&&this.currentTime>0&&this.tick(),!1===n&&!0===e&&this.stop()}},mounted:function(){this.start&&this.tick()},data:function(){return{interval:null,index:0,currentTime:60}}}},937:function(n,e,t){"use strict";var i=t(688),r=t(938),a=t(0),o=a(i.a,r.a,!1,null,null,null);e.a=o.exports},938:function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement;return(n._self._c||e)("span",[n._v(n._s(n.currentTime))])},r=[],a={render:i,staticRenderFns:r};e.a=a},939:function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("group",{attrs:{title:n.$t("Automatic countdown")}},[t("cell",{attrs:{title:"15s"},model:{value:n.value,callback:function(e){n.value=e},expression:"value"}},[t("countdown",{directives:[{name:"show",rawName:"v-show",value:n.show,expression:"show"}],on:{"on-finish":n.finish},model:{value:n.time1,callback:function(e){n.time1=e},expression:"time1"}})],1)],1),n._v(" "),t("group",{attrs:{title:n.$t("Manually")}},[t("x-switch",{attrs:{title:n.$t("Start")},model:{value:n.start,callback:function(e){n.start=e},expression:"start"}}),n._v(" "),t("cell",{attrs:{title:"15s"}},[t("countdown",{attrs:{start:n.start},on:{"on-finish":n.finish2},model:{value:n.time2,callback:function(e){n.time2=e},expression:"time2"}})],1)],1)],1)},r=[],a={render:i,staticRenderFns:r};e.a=a}});