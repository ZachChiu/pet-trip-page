(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c55a5"],{"3f73":function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"firmBackstage"},[t._m(0),i("div",{staticClass:"container py-4"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-3 col-12 mb-3"},[i("nav",{staticClass:"bg-light"},[i("ul",{staticClass:"nav nav-pills flex-md-column text-center"},[i("li",{staticClass:"nav-item",on:{click:function(a){t.pageCurrent="/FirmBackstage"}}},[i("router-link",{staticClass:"nav-link",class:{active:"/FirmBackstage"==t.pageCurrent},attrs:{to:"/FirmBackstage"}},[i("i",{staticClass:"fas fa-clipboard-list"}),t._v(" 訂單列表 ")])],1),i("li",{staticClass:"nav-item",on:{click:function(a){t.pageCurrent="/FirmBackstage/FirmRoom"}}},[i("router-link",{staticClass:"nav-link",class:{active:"/FirmBackstage/FirmRoom"==t.pageCurrent},attrs:{to:"/FirmBackstage/FirmRoom"}},[i("i",{staticClass:"fas fa-box-open"}),t._v("空間管理 ")])],1),i("li",{staticClass:"nav-item",on:{click:function(a){t.pageCurrent="/FirmBackstage/FirmQA"}}},[i("router-link",{staticClass:"nav-link",class:{active:"/FirmBackstage/FirmQA"==t.pageCurrent},attrs:{to:"/FirmBackstage/FirmQA"}},[i("i",{staticClass:"fas fa-question"}),t._v("問與答QA ")])],1),i("li",{staticClass:"nav-item",on:{click:function(a){t.pageCurrent="/FirmBackstage/FirmSet"}}},[i("router-link",{staticClass:"nav-link",class:{active:"/FirmBackstage/FirmSet"==t.pageCurrent},attrs:{to:"/FirmBackstage/FirmSet"}},[i("i",{staticClass:"fas fa-cog"}),t._v("廠商設定 ")])],1)])])]),i("div",{staticClass:"col-md-9 col-12"},[i("router-view",{on:{checkStatus:t.getFirmBackstageData}})],1)])])])},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"banner position-relative"},[i("div",{staticClass:"bannerText position-absolute text-dark display-4 font-weight-bold"},[t._v("廠商後台")]),i("img",{staticClass:"img-fluid",staticStyle:{height:"200px","object-fit":"cover",width:"100%"},attrs:{src:"https://upload.cc/i1/2020/09/02/JE5b96.png",alt:""}})])}],c=(i("ac1f"),i("5319"),{data:function(){return{pageCurrent:"/FirmBackstage"}},props:["identify"],created:function(){this.getFirmBackstageData()},methods:{getFirmBackstageData:function(){this.pageCurrent=this.$route.path;var t=document.cookie.replace(/(?:(?:^|.*;\s*)pet\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization="Bearer ".concat(t),""!==t&&null!=t&&void 0!==t&&"無授權"!==this.identify.identity||this.$router.push("/")}}}),r=c,n=i("2877"),l=Object(n["a"])(r,s,e,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0c55a5.b238b296.js.map