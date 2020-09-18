(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7afb3744"],{8470:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"firmRegister"},[r("loading",{attrs:{active:t.isLoading,loader:"bars"},on:{"update:active":function(e){t.isLoading=e}}}),t._m(0),r("div",{staticClass:"container py-5"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 col-11 mx-auto border rounded"},[r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.invalid;return[r("form",{staticClass:"py-5 px-2 px-sm-5",on:{submit:function(e){return e.preventDefault(),t.firmRegister(e)}}},[r("h3",{staticClass:"text-center mb-3"},[t._v("廠商註冊")]),r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,i=e.classes;return[r("div",{staticClass:"form-group"},[r("label",{staticClass:"xrequired",attrs:{for:"firmName"}},[t._v("廠商名稱")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.register.companyname,expression:"register.companyname"}],staticClass:"form-control",class:i,attrs:{type:"text",id:"firmName",required:"",autocomplete:"off",placeholder:"Pet trip 股份有限公司"},domProps:{value:t.register.companyname},on:{input:function(e){e.target.composing||t.$set(t.register,"companyname",e.target.value)}}}),r("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])])]}}],null,!0)}),r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,i=e.classes;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"brandName"}},[t._v("品牌名稱")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.register.companybrand,expression:"register.companybrand"}],staticClass:"form-control",class:i,attrs:{type:"text",id:"brandName",autocomplete:"off",placeholder:"Pet trip"},domProps:{value:t.register.companybrand},on:{input:function(e){e.target.composing||t.$set(t.register,"companybrand",e.target.value)}}}),r("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])])]}}],null,!0)}),r("ValidationProvider",{attrs:{rules:"required|numeric"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,i=e.classes;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"電話"}},[t._v("電話")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.register.phone,expression:"register.phone"}],staticClass:"form-control",class:i,attrs:{type:"text",id:"電話",autocomplete:"off"},domProps:{value:t.register.phone},on:{input:function(e){e.target.composing||t.$set(t.register,"phone",e.target.value)}}}),r("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])])]}}],null,!0)}),r("ValidationProvider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,i=e.classes;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[t._v("信箱 (帳號)")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.register.email,expression:"register.email"}],staticClass:"form-control",class:i,attrs:{type:"text",id:"email",autocomplete:"off"},domProps:{value:t.register.email},on:{input:function(e){e.target.composing||t.$set(t.register,"email",e.target.value)}}}),r("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])])]}}],null,!0)}),r("ValidationProvider",{attrs:{name:"密碼",rules:"required|alpha_num"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,i=e.classes;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[t._v("密碼")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.register.pwd,expression:"register.pwd"}],staticClass:"form-control",class:i,attrs:{type:"password",id:"password",autocomplete:"off"},domProps:{value:t.register.pwd},on:{input:function(e){e.target.composing||t.$set(t.register,"pwd",e.target.value)}}}),r("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])])]}}],null,!0)}),r("ValidationProvider",{attrs:{rules:"required|password:@密碼|alpha_num"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,i=e.classes;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"確認密碼"}},[t._v("再次確認密碼")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.register.pwdcheck,expression:"register.pwdcheck"}],staticClass:"form-control",class:i,attrs:{type:"password",id:"確認密碼",autocomplete:"off"},domProps:{value:t.register.pwdcheck},on:{input:function(e){e.target.composing||t.$set(t.register,"pwdcheck",e.target.value)}}}),r("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])])]}}],null,!0)}),r("div",{staticClass:"form-row"},[r("div",{staticClass:"form-group col-6"},[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,i=e.classes;return[r("label",{attrs:{for:"inputCity"}},[t._v("縣市")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.register.country,expression:"register.country"}],staticClass:"form-control",class:i,attrs:{id:"inputCity"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.register,"country",e.target.multiple?r:r[0])},t.selectRegion]}},[r("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("請選擇")]),t._l(t.regionList,(function(e,a){return r("option",{key:a,domProps:{value:e}},[t._v(t._s(e))])}))],2),r("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),r("div",{staticClass:"form-group col-6"},[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,i=e.classes;return[r("label",{attrs:{for:"inputState"}},[t._v("區域")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.register.area,expression:"register.area"}],staticClass:"form-control",class:i,attrs:{id:"inputState"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.register,"area",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",disabled:""}},[t._v("請選擇")]),t._l(t.areaList,(function(e,a){return r("option",{key:a,domProps:{selected:"中正區"==e,value:e}},[t._v(t._s(e))])}))],2),r("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),r("div",{staticClass:"form-group col-12"},[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,i=e.classes;return[r("label",{attrs:{for:"address"}},[t._v("地址")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.register.address,expression:"register.address"}],staticClass:"form-control",class:i,attrs:{type:"address",id:"address"},domProps:{value:t.register.address},on:{input:function(e){e.target.composing||t.$set(t.register,"address",e.target.value)}}}),r("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)]),r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,i=e.classes;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"identify"}},[t._v("特定寵物業許可證號")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.register.pblicense,expression:"register.pblicense"}],staticClass:"form-control",class:i,attrs:{type:"text",id:"identify",autocomplete:"off",placeholder:"特寵業繁字第********號"},domProps:{value:t.register.pblicense},on:{input:function(e){e.target.composing||t.$set(t.register,"pblicense",e.target.value)}}}),r("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])])]}}],null,!0)}),r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,i=e.classes;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"date"}},[t._v("有效日期")]),r("vc-date-picker",{attrs:{"min-date":new Date,value:Object},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.inputProps,s=e.inputEvents;return r("input",t._g(t._b({staticClass:"form-control",class:i,attrs:{id:"date"}},"input",a,!1),s))}}],null,!0),model:{value:t.register.effectivedate,callback:function(e){t.$set(t.register,"effectivedate",e)},expression:"register.effectivedate"}}),r("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])],1)]}}],null,!0)}),r("div",{staticClass:"form-group d-flex mt-4"},[r("router-link",{staticClass:"w-50 mr-2 btn btn-outline-primary",attrs:{to:"/Login"}},[t._v("返回上一頁")]),r("button",{staticClass:"w-50 ml-2 btn btn-primary",class:{disabled:a},attrs:{type:"submit",disabled:a}},[t._v("廠商註冊")])],1)],1)]}}])})],1)])])],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner position-relative"},[r("div",{staticClass:"bannerText position-absolute text-dark display-4 font-weight-bold"},[t._v("註冊")]),r("img",{staticClass:"img-fluid",staticStyle:{height:"200px","object-fit":"cover",width:"100%"},attrs:{src:"https://upload.cc/i1/2020/09/02/JE5b96.png",alt:""}})])}],s=(r("4160"),r("c975"),r("b0c0"),r("159b"),r("3dd1")),n=r.n(s),o=(r("415b"),r("9062")),l=r.n(o),c=(r("e40d"),r("bb0b")),u={data:function(){return{isLoading:!1,change:"",register:{companyname:"",companybrand:"",phone:"",email:"",pwd:"",pwdcheck:"",country:"",area:"",address:"",pblicense:"",effectivedate:new Date},regionList:[],areaList:[],fileUploading:!1,taiwan:c}},components:{loading:l.a},created:function(){$("html, body").animate({scrollTop:$("#app").offset().top},0),this.getRegion()},methods:{firmRegister:function(){this.isLoading=!0;var t=this,e={method:"post",url:"http://pettrip.rocket-coding.com/api/Company/Register",data:{companyname:"".concat(this.register.companyname),companybrand:"".concat(this.register.companybrand),phone:"".concat(this.register.phone),email:"".concat(this.register.email),pwd:"".concat(this.register.pwd),country:"".concat(this.register.country),area:"".concat(this.register.area),address:"".concat(this.register.address),pblicense:"".concat(this.register.pblicense),effectivedate:new Date(this.register.effectivedate).toLocaleDateString()}};console.log(e),this.$http(e).then((function(e){console.log(e),"註冊成功"===e.data.result?(t.$router.push("/Login"),n.a.fire({toast:!0,position:"top-end",icon:"success",title:"註冊成功，請登入",showConfirmButton:!1,timer:2e3})):n.a.fire({toast:!0,position:"top-end",icon:"error",title:e.data.result,showConfirmButton:!1,timer:2e3}),t.isLoading=!1})).catch((function(e){console.log(e),t.isLoading=!1}))},getRegion:function(){var t=this;this.taiwan.forEach((function(e){return t.regionList.push(e.name)}))},selectRegion:function(){var t=this;t.areaList=[],this.taiwan.forEach((function(e){-1!==t.register.country.indexOf(e.name)&&(e.districts.forEach((function(e){return t.areaList.push(e.name)})),t.register.area=e.districts[0].name)}))}}},d=u,p=r("2877"),f=Object(p["a"])(d,a,i,!1,null,null,null);e["default"]=f.exports},9062:function(t,e,r){!function(e,r){t.exports=r()}("undefined"!=typeof self&&self,(function(){return function(t){var e={};function r(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){},function(t,e,r){"use strict";r.r(e);var a="undefined"!=typeof window?window.HTMLElement:Object,i={mounted:function(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function s(t,e,r,a,i,s,n,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=r,c._compiled=!0),a&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),n?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=l):i&&(l=o?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}var n=s({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,o=s({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,l=s({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,c=s({name:"vue-loading",mixins:[i],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,a],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,blur:{type:String,default:"2px"},opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:n,Dots:o,Bars:l},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},disableScroll:function(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vld-shown")},enableScroll:function(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vld-shown")},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t},isActive:function(t){t?this.disableScroll():this.enableScroll()}},computed:{bgStyle:function(){return{background:this.backgroundColor,opacity:this.opacity,backdropFilter:"blur(".concat(this.blur,")")}}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:t.transition}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[r("div",{staticClass:"vld-background",style:t.bgStyle,on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),r("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[r(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,s={programmatic:!0},n=Object.assign({},e,a,s),o=new(t.extend(c))({el:document.createElement("div"),propsData:n}),l=Object.assign({},r,i);return Object.keys(l).map((function(t){o.$slots[t]=l[t]})),o}}};r(0),c.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=u(t,e,r);t.$loading=a,t.prototype.$loading=a},e.default=c}]).default}))},e40d:function(t,e,r){}}]);
//# sourceMappingURL=chunk-7afb3744.7ce27fb0.js.map