(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bc9ca02"],{9062:function(t,e,i){!function(e,i){t.exports=i()}("undefined"!=typeof self&&self,(function(){return function(t){var e={};function i(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);var a="undefined"!=typeof window?window.HTMLElement:Object,n={mounted:function(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function r(t,e,i,a,n,r,s,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),a&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):n&&(l=o?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}var s=r({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,o=r({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,l=r({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,c=r({name:"vue-loading",mixins:[n],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,a],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,blur:{type:String,default:"2px"},opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:s,Dots:o,Bars:l},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},disableScroll:function(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vld-shown")},enableScroll:function(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vld-shown")},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t},isActive:function(t){t?this.disableScroll():this.enableScroll()}},computed:{bgStyle:function(){return{background:this.backgroundColor,opacity:this.opacity,backdropFilter:"blur(".concat(this.blur,")")}}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[i("div",{staticClass:"vld-background",style:t.bgStyle,on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),i("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[i(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,r={programmatic:!0},s=Object.assign({},e,a,r),o=new(t.extend(c))({el:document.createElement("div"),propsData:s}),l=Object.assign({},i,n);return Object.keys(l).map((function(t){o.$slots[t]=l[t]})),o}}};i(0),c.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=u(t,e,i);t.$loading=a,t.prototype.$loading=a},e.default=c}]).default}))},"99af":function(t,e,i){"use strict";var a=i("23e7"),n=i("d039"),r=i("e8b5"),s=i("861d"),o=i("7b0b"),l=i("50c4"),c=i("8418"),u=i("65f0"),d=i("1dde"),f=i("b622"),p=i("2d00"),m=f("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",g=p>=51||!n((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),b=d("concat"),y=function(t){if(!s(t))return!1;var e=t[m];return void 0!==e?!!e:r(t)},w=!g||!b;a({target:"Array",proto:!0,forced:w},{concat:function(t){var e,i,a,n,r,s=o(this),d=u(s,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?s:arguments[e],y(r)){if(n=l(r.length),f+n>h)throw TypeError(v);for(i=0;i<n;i++,f++)i in r&&c(d,f,r[i])}else{if(f>=h)throw TypeError(v);c(d,f++,r)}return d.length=f,d}})},a55b:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login"},[i("loading",{attrs:{active:t.isLoading,loader:"bars"},on:{"update:active":function(e){t.isLoading=e}}}),t._m(0),i("div",{staticClass:"container py-5"},[i("div",{staticClass:"row no-gutters"},[i("div",{staticClass:"col-lg-6 col-12 mx-auto border rounded"},[t._m(1),i("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[i("div",{staticClass:"tab-pane fade show active",attrs:{id:"member",role:"tabpanel","aria-labelledby":"member-tab"}},[i("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.invalid;return[i("form",{staticClass:"py-5 px-2 px-sm-5",on:{submit:function(e){return e.preventDefault(),t.memberLogin(e)}}},[i("h3",{staticClass:"text-center mb-3"},[t._v("會員登入")]),i("ValidationProvider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,n=e.classes;return[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"memberEmail"}},[t._v(" 帳號 "),i("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],staticClass:"form-control",class:n,attrs:{type:"text",id:"memberEmail","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:t.login.email},on:{input:function(e){e.target.composing||t.$set(t.login,"email",e.target.value)}}})])]}}],null,!0)}),i("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,n=e.classes;return[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"memberPassword"}},[t._v(" 密碼 "),i("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"form-control",class:n,attrs:{type:"password",id:"memberPassword",placeholder:"Password"},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),i("a",{staticClass:"text-danger",attrs:{href:"#"}},[t._v("忘記密碼?")])])]}}],null,!0)}),i("div",{staticClass:"form-group d-flex"},[i("router-link",{staticClass:"w-50 mr-2 btn btn btn-outline-primary",attrs:{to:"/MemberRegister"}},[t._v("會員註冊")]),i("button",{staticClass:"w-50 ml-2 btn btn-primary",class:{disabled:a},attrs:{type:"submit",disabled:a}},[t._v("會員登入")])],1)],1)]}}])})],1),i("div",{staticClass:"tab-pane fade",attrs:{id:"firm",role:"tabpanel","aria-labelledby":"firm-tab"}},[i("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.invalid;return[i("form",{staticClass:"py-5 px-2 px-sm-5",on:{submit:function(e){return e.preventDefault(),t.firmLogin(e)}}},[i("h3",{staticClass:"text-center mb-3"},[t._v("廠商登入")]),i("ValidationProvider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,n=e.classes;return[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"firmEmail"}},[t._v(" 帳號 "),i("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],staticClass:"form-control",class:n,attrs:{type:"text",id:"firmEmail","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:t.login.email},on:{input:function(e){e.target.composing||t.$set(t.login,"email",e.target.value)}}})])]}}],null,!0)}),i("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,n=e.classes;return[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"firmPassword"}},[t._v(" 密碼 "),i("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"form-control",class:n,attrs:{type:"password",id:"firmPassword",placeholder:"Password"},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),i("a",{staticClass:"text-danger",attrs:{href:"#"}},[t._v("忘記密碼?")])])]}}],null,!0)}),i("div",{staticClass:"form-group d-flex"},[i("router-link",{staticClass:"w-50 mr-2 btn btn btn-outline-primary",attrs:{to:"/FirmRegister"}},[t._v("廠商註冊")]),i("button",{staticClass:"w-50 ml-2 btn btn-primary",class:{disabled:a},attrs:{type:"submit",disabled:a}},[t._v("廠商登入")])],1)],1)]}}])})],1)])])])])],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"banner position-relative"},[i("div",{staticClass:"bannerText position-absolute text-dark display-4 font-weight-bold"},[t._v("登入")]),i("img",{staticClass:"img-fluid",staticStyle:{height:"200px","object-fit":"cover",width:"100%"},attrs:{src:"https://upload.cc/i1/2020/09/02/JE5b96.png",alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"nav nav-pills text-center",attrs:{id:"myTab",role:"tablist"}},[i("li",{staticClass:"nav-item w-50"},[i("a",{staticClass:"nav-link active",attrs:{id:"member-tab","data-toggle":"tab",href:"#member",role:"tab","aria-controls":"member","aria-selected":"true"}},[t._v("會員登入")])]),i("li",{staticClass:"nav-item w-50"},[i("a",{staticClass:"nav-link",attrs:{id:"firm-tab","data-toggle":"tab",href:"#firm",role:"tab","aria-controls":"firm","aria-selected":"false"}},[t._v("廠商登入")])])])}],r=(i("99af"),i("9062")),s=i.n(r),o=(i("e40d"),i("3dd1")),l=i.n(o),c=(i("415b"),{data:function(){return{login:{email:"",password:""},isLoading:!1}},components:{loading:s.a},created:function(){$("html, body").animate({scrollTop:$("#app").offset().top},0)},methods:{firmLogin:function(){this.isLoading=!0;var t=this,e={method:"post",url:"http://pettrip.rocket-coding.com/api/Company/Login",data:{email:"".concat(this.login.email),pwd:"".concat(this.login.password)}};this.$http(e).then((function(e){if(console.log(e),"登入成功"===e.data.result){l.a.fire({toast:!0,position:"top-end",icon:"success",title:"登入成功",showConfirmButton:!1,timer:2e3});var i=e.data.token;document.cookie="pet=".concat(i,";expires=").concat(1e3*new Date,"; path=/"),t.$emit("page-refresh","廠商")}else l.a.fire({toast:!0,position:"top-end",icon:"error",title:e.data.result,showConfirmButton:!1,timer:2e3}),t.isLoading=!1})).catch((function(e){console.log(e),l.a.fire({toast:!0,position:"top-end",icon:"error",title:"登入失敗",timer:2e3,showConfirmButton:!1}),t.isLoading=!1}))},memberLogin:function(){this.isLoading=!0;var t=this,e={method:"post",url:"http://pettrip.rocket-coding.com/api/Member/Login",data:{email:"".concat(this.login.email),pwd:"".concat(this.login.password)}};this.$http(e).then((function(e){if(console.log(e),"登入成功"===e.data.result){l.a.fire({toast:!0,position:"top-end",icon:"success",title:"登入成功",showConfirmButton:!1,timer:2e3});var i=e.data.token;document.cookie="pet=".concat(i,";expires=").concat(1e3*new Date,"; path=/"),t.$emit("page-refresh","會員")}else l.a.fire({toast:!0,position:"top-end",icon:"error",title:e.data.result,showConfirmButton:!1,timer:2e3}),t.isLoading=!1})).catch((function(e){console.log(e),l.a.fire({toast:!0,position:"top-end",icon:"error",title:"登入失敗",timer:2e3,showConfirmButton:!1}),t.isLoading=!1}))}}}),u=c,d=i("2877"),f=Object(d["a"])(u,a,n,!1,null,null,null);e["default"]=f.exports},e40d:function(t,e,i){}}]);
//# sourceMappingURL=chunk-7bc9ca02.bd720859.js.map