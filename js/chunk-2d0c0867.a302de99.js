(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0867"],{"41c7":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"memberSet"},[e("loading",{attrs:{active:t.isLoading,loader:"bars"},on:{"update:active":function(a){t.isLoading=a}}}),null!=t.memberData.avatar?e("div",{staticClass:"row no-gutters text-wrap align-items-center"},[e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"rounded-circle mx-auto overflow-hidden",staticStyle:{"background-size":"cover","max-width":"300px","background-position":"center"},style:{backgroundImage:"url("+t.memberData.avatar+")"}},[e("img",{staticClass:"w-100 img-fluid",class:{opacityZero:null!=t.memberData.avatar},attrs:{src:"https://upload.cc/i1/2020/09/01/IaZYfp.png",alt:""}})]),e("div",{staticClass:"form-group d-flex my-4"},[e("label",{staticClass:"btn btn-primary mx-auto",class:{disabled:t.MemberPicUploading},attrs:{for:"upload"}},[t.MemberPicUploading?e("i",{staticClass:"mr-1 fas fa-spinner fa-spin"}):t._e(),t._v("更新頭像 "),e("input",{staticClass:"d-none",attrs:{type:"file",id:"upload",disabled:t.MemberPicUploading},on:{change:t.updateMemberAvatar}})])])]),e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"row no-gutters"},[t._m(0),e("div",{staticClass:"col-md-8 col-12"},[e("p",[t._v(t._s(t.memberData.membername))])])]),e("div",{staticClass:"row no-gutters"},[t._m(1),e("div",{staticClass:"col-md-8 col-12"},[e("p",[t._v(t._s(t.memberData.email))])])]),e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(a){var s=a.invalid;return[e("form",{attrs:{action:"#"},on:{submit:function(a){return a.preventDefault(),t.saveMemberData(a)}}},[e("ValidationProvider",{attrs:{name:"密碼",rules:"required|alpha_num"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,o=a.classes;return[e("div",{staticClass:"form-group row no-gutters"},[e("label",{staticClass:"col-md-4 col-form-label font-weight-bold",attrs:{for:"password"}},[t._v("新密碼")]),e("div",{staticClass:"col-md-8 col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.memberData.pwd,expression:"memberData.pwd"}],staticClass:"form-control",class:o,attrs:{type:"password",id:"password"},domProps:{value:t.memberData.pwd},on:{input:function(a){a.target.composing||t.$set(t.memberData,"pwd",a.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])])])]}}],null,!0)}),e("ValidationProvider",{attrs:{rules:"required|password:@密碼|alpha_num"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,o=a.classes;return[e("div",{staticClass:"form-group row no-gutters"},[e("label",{staticClass:"col-md-4 col-form-label font-weight-bold",attrs:{for:"密碼"}},[t._v("再次輸入新密碼")]),e("div",{staticClass:"col-md-8 col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.memberData.pwdcheck,expression:"memberData.pwdcheck"}],staticClass:"form-control",class:o,attrs:{type:"password",id:"密碼"},domProps:{value:t.memberData.pwdcheck},on:{input:function(a){a.target.composing||t.$set(t.memberData,"pwdcheck",a.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])])])]}}],null,!0)}),e("div",{staticClass:"form-group d-flex justify-content-center mt-4"},[e("button",{staticClass:"btn btn-primary",class:{disabled:s},attrs:{type:"submit",disabled:s}},[t._v("更新")])])],1)]}}],null,!1,1474955290)})],1)]):t._e()],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-4 col-12 font-weight-bold"},[e("p",[t._v("姓名")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-4 col-12 font-weight-bold"},[e("p",[t._v("信箱(帳號)")])])}],i=e("3dd1"),r=e.n(i),n=e("9062"),l=e.n(n),c=(e("e40d"),e("415b"),{data:function(){return{memberData:{},MemberPicUploading:!1,isLoading:!1}},created:function(){this.getData(),$("html, body").animate({scrollTop:$("#app").offset().top},0)},components:{loading:l.a},methods:{getData:function(){this.isLoading=!0;var t=this;this.$emit("checkStatus","check");var a={method:"get",url:"http://pettrip.rocket-coding.com/api/Member/GetOne"};this.$http(a).then((function(a){console.log(a),t.memberData=a.data,t.isLoading=!1})).catch((function(a){console.log(a),t.isLoading=!1}))},saveMemberData:function(){this.isLoading=!0;var t=this,a={method:"patch",url:"http://pettrip.rocket-coding.com/api/Member/Resetpwd",data:{pwd:"".concat(this.memberData.pwd)}};this.$http(a).then((function(a){console.log(a),r.a.fire({toast:!0,position:"top-end",icon:"success",title:"更新密碼成功",showConfirmButton:!1,timer:2e3}),t.getData()})).catch((function(a){console.log(a),r.a.fire({toast:!0,position:"top-end",icon:"error",title:"更新密碼失敗",showConfirmButton:!1,timer:2e3}),t.isLoading=!1}))},updateMemberAvatar:function(){var t=this,a=this,e=event.target.files[0],s=new FormData;s.append("file",e);var o="http://pettrip.rocket-coding.com/api/Member/Uploadimg";this.MemberPicUploading=!0,this.$http.post(o,s,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){a.getData(),t.MemberPicUploading=!1,"圖片格式錯誤"===e.data.result?r.a.fire({toast:!0,position:"top-end",icon:"error",title:"圖片格式錯誤",showConfirmButton:!1,timer:2e3}):r.a.fire({toast:!0,position:"top-end",icon:"success",title:"頭像上傳成功",showConfirmButton:!1,timer:2e3}),console.log(e)})).catch((function(){r.a.fire({toast:!0,position:"top-end",icon:"success",title:"頭像上傳失敗",showConfirmButton:!1,timer:2e3}),t.MemberPicUploading=!1}))}}}),d=c,m=e("2877"),p=Object(m["a"])(d,s,o,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0c0867.a302de99.js.map