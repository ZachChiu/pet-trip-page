(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213783"],{ad8b:function(t,a,o){"use strict";o.r(a);var i=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"firmSet pb-5"},[o("div",{staticClass:"container mx-auto"},[t._m(0),o("div",{staticClass:"bg-white text-nowrap tab-content border border-top-0",attrs:{id:"myTabContent"}},[o("div",{staticClass:"tab-pane p-3 fade show active",attrs:{id:"firmIntroduce",role:"tabpanel","aria-labelledby":"firmIntroduce-tab"}},[o("form",{attrs:{action:"#"}},[o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-3 col-lg-2 col-form-label font-weight-bold",attrs:{for:"mainIntroduce"}},[t._v("主頁介紹")]),o("div",{staticClass:"col-md-9 col-lg-10"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.companyData.introduce,expression:"companyData.introduce"}],staticClass:"form-control",attrs:{id:"mainIntroduce",rows:"3"},domProps:{value:t.companyData.introduce},on:{input:function(a){a.target.composing||t.$set(t.companyData,"introduce",a.target.value)}}})])]),o("div",{staticClass:"form-group align-items-center row text-wrap"},[o("label",{staticClass:"col-md-3 col-lg-2 col-form-label font-weight-bold",attrs:{for:"response"}},[t._v("回覆時間")]),o("div",{staticClass:"col-md-9 col-lg-10"},[o("div",{staticClass:"form-check form-check-inline"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.companyData.morning,expression:"companyData.morning"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"morning",value:"cat"},domProps:{checked:Array.isArray(t.companyData.morning)?t._i(t.companyData.morning,"cat")>-1:t.companyData.morning},on:{change:function(a){var o=t.companyData.morning,i=a.target,e=!!i.checked;if(Array.isArray(o)){var s="cat",n=t._i(o,s);i.checked?n<0&&t.$set(t.companyData,"morning",o.concat([s])):n>-1&&t.$set(t.companyData,"morning",o.slice(0,n).concat(o.slice(n+1)))}else t.$set(t.companyData,"morning",e)}}}),o("label",{staticClass:"form-check-label",attrs:{for:"morning"}},[t._v("早上")])]),o("div",{staticClass:"form-check form-check-inline"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.companyData.afternoon,expression:"companyData.afternoon"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"afternoon",value:"dog"},domProps:{checked:Array.isArray(t.companyData.afternoon)?t._i(t.companyData.afternoon,"dog")>-1:t.companyData.afternoon},on:{change:function(a){var o=t.companyData.afternoon,i=a.target,e=!!i.checked;if(Array.isArray(o)){var s="dog",n=t._i(o,s);i.checked?n<0&&t.$set(t.companyData,"afternoon",o.concat([s])):n>-1&&t.$set(t.companyData,"afternoon",o.slice(0,n).concat(o.slice(n+1)))}else t.$set(t.companyData,"afternoon",e)}}}),o("label",{staticClass:"form-check-label",attrs:{for:"afternoon"}},[t._v("下午")])]),o("div",{staticClass:"form-check form-check-inline"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.companyData.night,expression:"companyData.night"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"night",value:"other"},domProps:{checked:Array.isArray(t.companyData.night)?t._i(t.companyData.night,"other")>-1:t.companyData.night},on:{change:function(a){var o=t.companyData.night,i=a.target,e=!!i.checked;if(Array.isArray(o)){var s="other",n=t._i(o,s);i.checked?n<0&&t.$set(t.companyData,"night",o.concat([s])):n>-1&&t.$set(t.companyData,"night",o.slice(0,n).concat(o.slice(n+1)))}else t.$set(t.companyData,"night",e)}}}),o("label",{staticClass:"form-check-label",attrs:{for:"night"}},[t._v("晚上")])]),o("div",{staticClass:"form-check form-check-inline"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.companyData.midnight,expression:"companyData.midnight"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"midnight",value:"other"},domProps:{checked:Array.isArray(t.companyData.midnight)?t._i(t.companyData.midnight,"other")>-1:t.companyData.midnight},on:{change:function(a){var o=t.companyData.midnight,i=a.target,e=!!i.checked;if(Array.isArray(o)){var s="other",n=t._i(o,s);i.checked?n<0&&t.$set(t.companyData,"midnight",o.concat([s])):n>-1&&t.$set(t.companyData,"midnight",o.slice(0,n).concat(o.slice(n+1)))}else t.$set(t.companyData,"midnight",e)}}}),o("label",{staticClass:"form-check-label",attrs:{for:"midnight"}},[t._v("半夜")])])])]),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-3 col-lg-2 col-form-label font-weight-bold",attrs:{for:"spaceName"}},[t._v("主頁相片")]),o("div",{staticClass:"col-md-9 col-lg-10"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.companyData.bannerimg,expression:"companyData.bannerimg",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"spaceName",placeholder:"圖片連結"},domProps:{value:t.companyData.bannerimg},on:{input:function(a){a.target.composing||t.$set(t.companyData,"bannerimg",a.target.value.trim())},blur:function(a){return t.$forceUpdate()}}})])]),o("div",{staticClass:"form-group d-flex mb-0"},[o("label",{staticClass:"d-flex align-items-center ml-auto btn btn-dark",class:{disabled:t.FirmPicUploading},attrs:{for:"upload"}},[o("ring-loader",{staticClass:"custom-class",attrs:{color:"black",loading:t.FirmPicUploading,size:20}}),t._v("主頁照片上傳 "),o("input",{staticClass:"d-none",attrs:{type:"file",id:"upload",disabled:t.FirmPicUploading},on:{change:t.updateFirmPic}})],1)]),t._m(1),o("div",{staticClass:"mx-auto",staticStyle:{"background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+t.companyData.bannerimg+")"}},[o("img",{staticClass:"w-100 img-fluid",class:{opacityZero:""!=t.companyData.bannerimg},attrs:{src:"https://upload.cc/i1/2020/09/04/0MY4iy.png",alt:""}})]),o("div",{staticClass:"form-group d-flex justify-content-center mt-4"},[o("button",{staticClass:"btn btn-primary",class:{disabled:t.FirmPicUploading},attrs:{type:"button",disabled:t.FirmPicUploading},on:{click:t.saveFirmData}},[t._v("儲存")])])])]),o("div",{staticClass:"tab-pane p-3 fade",attrs:{id:"firmData",role:"tabpanel","aria-labelledby":"firmData-tab"}},[o("div",{staticClass:"row no-gutters text-wrap"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"rounded-circle mx-auto overflow-hidden",staticStyle:{"background-size":"cover","max-width":"300px","background-position":"center"},style:{backgroundImage:"url("+t.companyData.avatar+")"}},[o("img",{staticClass:"w-100 img-fluid",class:{opacityZero:""!=t.companyData.avatar},attrs:{src:"https://upload.cc/i1/2020/09/01/IaZYfp.png",alt:""}})]),o("div",{staticClass:"form-group d-flex my-4"},[o("label",{staticClass:"d-flex align-items-center btn btn-primary mx-auto",class:{disabled:t.FirmAvatarUploading},attrs:{for:"uploadAvatar"}},[o("ring-loader",{staticClass:"custom-class",attrs:{color:"black",loading:t.FirmAvatarUploading,size:20}}),t._v("更新頭像 "),o("input",{staticClass:"d-none",attrs:{type:"file",id:"uploadAvatar",disabled:t.FirmAvatarUploading},on:{change:t.updateFirmAvatar}})],1)])]),o("div",{staticClass:"col-lg-6 col-12"},[o("div",{staticClass:"row no-gutters"},[t._m(2),o("div",{staticClass:"col-md-8 col-12"},[o("p",[t._v(t._s(t.companyData.companyname))])])])]),o("div",{staticClass:"col-lg-6 col-12"},[o("div",{staticClass:"row no-gutters"},[t._m(3),o("div",{staticClass:"col-md-8 col-12"},[o("p",[t._v(t._s(t.companyData.companybrand))])])])]),o("div",{staticClass:"col-lg-6 col-12"},[o("div",{staticClass:"row no-gutters"},[t._m(4),o("div",{staticClass:"col-md-8 col-12"},[o("p",[t._v(t._s(t.companyData.email))])])])]),o("div",{staticClass:"col-lg-6 col-12"},[o("div",{staticClass:"row no-gutters"},[t._m(5),o("div",{staticClass:"col-md-8 col-12"},[o("p",[t._v(t._s(t.companyData.companyseq))])])])]),o("div",{staticClass:"col-lg-6 col-12"},[o("div",{staticClass:"row no-gutters"},[t._m(6),o("div",{staticClass:"col-md-8 col-12"},[o("p",[t._v(t._s(t.companyData.phone))])])])]),o("div",{staticClass:"col-lg-6 col-12"},[o("div",{staticClass:"row no-gutters"},[t._m(7),o("div",{staticClass:"col-md-8 col-12"},[o("p",[o("span",[t._v(t._s(t.companyData.country))]),o("span",[t._v(t._s(t.companyData.area))]),o("span",[t._v(t._s(t.companyData.address))])])])])]),o("div",{staticClass:"col-lg-6 col-12"},[o("div",{staticClass:"row no-gutters"},[t._m(8),o("div",{staticClass:"col-md-8 col-12"},[o("p",[t._v(t._s(t.companyData.pblicense))])])])]),o("div",{staticClass:"col-lg-6 col-12"},[o("div",{staticClass:"row no-gutters"},[t._m(9),o("div",{staticClass:"col-md-8 col-12"},[o("p",[t._v(t._s(t.companyData.effectivedate))])])])])])]),o("div",{staticClass:"tab-pane p-3 fade",attrs:{id:"passwordChange",role:"tabpanel","aria-labelledby":"passwordChange-tab"}},[o("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(a){var i=a.invalid;return[o("form",{attrs:{action:"#"},on:{submit:function(a){return a.preventDefault(),t.savePassword(a)}}},[o("ValidationProvider",{attrs:{name:"密碼",rules:"required|alpha_num"},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.errors,e=a.classes;return[o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-3 col-form-label font-weight-bold",attrs:{for:"password"}},[t._v("新密碼")]),o("div",{staticClass:"col-md-9"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.updatePwd.pwd,expression:"updatePwd.pwd"}],staticClass:"form-control",class:e,attrs:{type:"password",id:"password",autocomplete:"off"},domProps:{value:t.updatePwd.pwd},on:{input:function(a){a.target.composing||t.$set(t.updatePwd,"pwd",a.target.value)}}}),o("span",{staticClass:"text-danger"},[t._v(t._s(i[0]))])])])]}}],null,!0)}),o("ValidationProvider",{attrs:{rules:"required|password:@密碼|alpha_num"},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.errors,e=a.classes;return[o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-3 col-form-label font-weight-bold",attrs:{for:"密碼"}},[t._v("再次輸入新密碼")]),o("div",{staticClass:"col-md-9"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.updatePwd.pwdCheck,expression:"updatePwd.pwdCheck"}],staticClass:"form-control",class:e,attrs:{type:"password",id:"密碼",autocomplete:"off"},domProps:{value:t.updatePwd.pwdCheck},on:{input:function(a){a.target.composing||t.$set(t.updatePwd,"pwdCheck",a.target.value)}}}),o("span",{staticClass:"text-danger"},[t._v(t._s(i[0]))])])])]}}],null,!0)}),o("div",{staticClass:"form-group d-flex justify-content-center mt-4"},[o("button",{staticClass:"btn btn-primary",class:{disabled:i},attrs:{type:"submit",disabled:i}},[t._v("修改")])])],1)]}}])})],1)])])])},e=[function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("ul",{staticClass:"nav nav-tabs nav-fill text-center",attrs:{id:"myTab",role:"tablist"}},[o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link active",attrs:{id:"firmIntroduce-tab","data-toggle":"tab",href:"#firmIntroduce",role:"tab","aria-controls":"firmIntroduce","aria-selected":"true"}},[t._v("廠商介紹")])]),o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{id:"firmData-tab","data-toggle":"tab",href:"#firmData",role:"tab","aria-controls":"firmData","aria-selected":"false"}},[t._v("廠商資料")])]),o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{id:"passwordChange-tab","data-toggle":"tab",href:"#passwordChange",role:"tab","aria-controls":"passwordChange","aria-selected":"false"}},[t._v("密碼修改")])])])},function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("p",{staticClass:"text-muted text-right mb-0"},[o("small",[t._v("儲存才能成功上傳圖片歐")])])},function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"col-md-4 col-12 font-weight-bold"},[o("p",[t._v("廠商名稱")])])},function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"col-md-4 col-12 font-weight-bold"},[o("p",[t._v("品牌名稱")])])},function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"col-md-4 col-12 font-weight-bold"},[o("p",[t._v("帳號")])])},function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"col-md-4 col-12 font-weight-bold"},[o("p",[t._v("廠商編號")])])},function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"col-md-4 col-12 font-weight-bold"},[o("p",[t._v("電話")])])},function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"col-md-4 col-12 font-weight-bold"},[o("p",[t._v("廠商地址")])])},function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"col-md-4 col-12 font-weight-bold"},[o("p",[t._v("寵物業許可證號")])])},function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"col-md-4 col-12 font-weight-bold"},[o("p",[t._v("有效日期")])])}],s=o("3dd1"),n=o.n(s),c=(o("415b"),{data:function(){return{companyData:{introduce:"",morning:!1,afternoon:!1,night:!1,midnight:!1,bannerimg:""},updatePwd:{pwd:"",pwdCheck:""},token:"",FirmPicUploading:!1,FirmAvatarUploading:!1}},props:["identify"],created:function(){this.getOne()},methods:{updateFirmAvatar:function(t){var a=this,o=t.target.files[0],i=new FormData;i.append("file",o);var e="http://pettrip.rocket-coding.com/api/Company/Uploadimg";this.FirmAvatarUploading=!0,this.$http.post(e,i,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){"圖片格式錯誤"===t.data.result?n.a.fire({toast:!0,position:"top-end",icon:"error",title:"圖片格式錯誤",showConfirmButton:!1,timer:2e3}):"Uploadimg錯誤，請至伺服器log查詢錯誤訊息"===t.data.result?n.a.fire({toast:!0,position:"top-end",icon:"info",title:"圖片不可超過 2 MB",showConfirmButton:!1,timer:2e3}):(n.a.fire({toast:!0,position:"top-end",icon:"success",title:"更新成功",showConfirmButton:!1,timer:2e3}),a.getOne()),a.FirmAvatarUploading=!1})).catch((function(){n.a.fire({toast:!0,position:"top-end",icon:"error",title:"更新失敗",showConfirmButton:!1,timer:2e3}),a.FirmAvatarUploading=!1}))},updateFirmPic:function(t){var a=this,o=t.target.files[0];if(void 0===o)n.a.fire({toast:!0,position:"top-end",icon:"info",title:"未選擇圖片",showConfirmButton:!1,timer:2e3});else{var i=new FormData;i.append("file",o);var e="http://pettrip.rocket-coding.com/api/Uploadimg";this.FirmPicUploading=!0,this.$http.post(e,i,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){"Uploadimg錯誤，請至伺服器log查詢錯誤訊息"===t.data.result?n.a.fire({toast:!0,position:"top-end",icon:"info",title:"圖片不可超過 2 MB",showConfirmButton:!1,timer:2e3}):(n.a.fire({toast:!0,position:"top-end",icon:"success",title:"上傳成功",showConfirmButton:!1,timer:2e3}),a.companyData.bannerimg=t.data.result),a.FirmPicUploading=!1})).catch((function(){n.a.fire({toast:!0,position:"top-end",icon:"error",title:"上傳失敗",showConfirmButton:!1,timer:2e3}),a.FirmPicUploading=!1}))}},saveFirmData:function(){this.$emit("loadAction",!0);var t=this,a={method:"patch",url:"http://pettrip.rocket-coding.com/api/Company/Patchcompany",headers:{},data:{introduce:"".concat(this.companyData.introduce),morning:"".concat(this.companyData.morning),afternoon:"".concat(this.companyData.afternoon),night:"".concat(this.companyData.night),midnight:"".concat(this.companyData.midnight),bannerimg:"".concat(this.companyData.bannerimg)}};this.$http(a).then((function(a){n.a.fire({toast:!0,position:"top-end",icon:"success",title:"儲存成功",showConfirmButton:!1,timer:2e3}),t.getOne()})).catch((function(){n.a.fire({toast:!0,position:"top-end",icon:"error",title:"失敗成功",showConfirmButton:!1,timer:2e3}),t.$emit("loadAction",!1)}))},savePassword:function(){this.$emit("loadAction",!0);var t=this,a={method:"patch",url:"http://pettrip.rocket-coding.com/api/Company/Resetpwd",data:{pwd:"".concat(this.updatePwd.pwd)}};this.$http(a).then((function(a){n.a.fire({toast:!0,position:"top-end",icon:"success",title:"密碼修改成功",showConfirmButton:!1,timer:2e3}),t.getOne()})).catch((function(){n.a.fire({toast:!0,position:"top-end",icon:"error",title:"密碼修改失敗",showConfirmButton:!1,timer:2e3}),t.$emit("loadAction",!1)}))},getOne:function(){this.$emit("checkStatus","check"),this.$emit("loadAction",!0);var t=this,a={method:"get",url:"http://pettrip.rocket-coding.com/api/Company/GetOne"};this.$http(a).then((function(a){t.companyData=a.data,t.$emit("loadAction",!1),setTimeout((function(){"廠商"!==t.identify.identity&&(n.a.fire({toast:!0,position:"top-end",icon:"error",title:"進入廠商後台失敗",showConfirmButton:!1,timer:2e3}),t.$router.push("/"))}),500),$("html, body").animate({scrollTop:$(".headerNav").offset().top},0)})).catch((function(){this.$emit("loadAction",!1)}))}}}),r=c,l=o("2877"),d=Object(l["a"])(r,i,e,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d213783.268ea21b.js.map