(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7316d48"],{"14eb":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination justify-content-center"},[e("li",{staticClass:"page-item",class:{disabled:"1"==t.pageData.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.changePage(t.pageData.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pageData.total_page,(function(a,n){return e("li",{key:n,staticClass:"page-item",class:{active:t.pageData.current_page==a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pageData.current_page==t.pageData.total_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.changePage(t.pageData.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},s=[],i={data:function(){return{}},name:"Page",props:["pageData"],methods:{changePage:function(t){this.$emit("page-change",t)}}},l=i,r=e("2877"),c=Object(r["a"])(l,n,s,!1,null,null,null);a["a"]=c.exports},b654:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"firmQA"},[e("loading",{attrs:{active:t.isLoading,loader:"bars"},on:{"update:active":function(a){t.isLoading=a}}}),e("ul",{staticClass:"nav nav-tabs nav-fill text-center",attrs:{id:"myTab",role:"tablist"}},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{id:"whole-tab","data-toggle":"tab",href:"#whole",role:"tab","aria-controls":"whole","aria-selected":"true"},on:{click:function(a){return t.changeState("all")}}},[t._v("全部")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{id:"already-tab","data-toggle":"tab",href:"#already",role:"tab","aria-controls":"already","aria-selected":"false"},on:{click:function(a){return t.changeState("1")}}},[t._v("已回覆")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{id:"yet-tab","data-toggle":"tab",href:"#yet",role:"tab","aria-controls":"yet","aria-selected":"false"},on:{click:function(a){return t.changeState("4")}}},[t._v("未回覆")])])]),e("div",{staticClass:"bg-white text-nowrap tab-content border border-top-0",attrs:{id:"myTabContent"}},[t.isLoading?t._e():e("div",{staticClass:"tab-pane p-3 fade show active",attrs:{id:"whole",role:"tabpanel","aria-labelledby":"whole-tab"}},[e("QAList",{attrs:{QAData:t.QAData}}),0!=t.pagelist.total?e("page",{staticClass:"mt-3",attrs:{"page-data":t.pagelist},on:{"page-change":t.getData}}):t._e()],1),t.isLoading?t._e():e("div",{staticClass:"tab-pane p-3 fade",attrs:{id:"already",role:"tabpanel","aria-labelledby":"already-tab"}},[0!=t.pagelist.total?e("page",{staticClass:"mt-3",attrs:{"page-data":t.pagelist},on:{"page-change":t.getData}}):t._e()],1),t.isLoading?t._e():e("div",{staticClass:"tab-pane p-3 fade",attrs:{id:"yet",role:"tabpanel","aria-labelledby":"yet-tab"}},[0!=t.pagelist.total?e("page",{staticClass:"mt-3",attrs:{"page-data":t.pagelist},on:{"page-change":t.getData}}):t._e()],1)])],1)},s=[],i=e("9062"),l=e.n(i),r=(e("e40d"),e("3dd1")),c=e.n(r),o=(e("415b"),e("14eb")),p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"table-responsive-lg"},[e("table",{staticClass:"table table-hover"},[t._m(0),e("tbody",[t._l(t.QAData,(function(a,n){return e("tr",{key:n},[t._m(1,!0),t._m(2,!0),t._m(3,!0),e("td",[e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal"},on:{click:function(a){return t.openDetail()}}},[t._v("詳情")])])])})),e("tr",[t._m(4),t._m(5),t._m(6),e("td",[e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal"},on:{click:function(a){return t.openDetail()}}},[t._v("詳情")])])])],2)])])},u=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticClass:"thead-light"},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("狀態")]),e("th",{attrs:{scope:"col"}},[t._v("問題")]),e("th",{attrs:{scope:"col"}},[t._v("空間名稱")]),e("th",{attrs:{scope:"col"}},[t._v("操作")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("th",{attrs:{scope:"row"}},[e("span",[t._v("未回覆")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",[e("span",{staticClass:"d-inline-block text-truncate",staticStyle:{"max-width":"150px"}},[t._v("我想要下定那一間啦 真的拜託啦 我好想要歐真的真得拜託你啦 我想要下定那一間啦 真的拜託啦 我好想要歐真的真得拜託你啦 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",[e("span",{staticClass:"d-inline-block text-truncate",staticStyle:{"max-width":"100px"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("th",{attrs:{scope:"row"}},[e("span",[t._v("已回覆")]),e("br"),e("small",{staticClass:"text-muted"},[t._v("2020/09/18 12:00")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",[e("br"),e("small")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",[t._v(" ~ "),e("br")])}],d={data:function(){return{loading:!1}},name:"QAList",props:["QAData"],methods:{openDetail:function(){}}},g=d,h=e("2877"),b=Object(h["a"])(g,p,u,!1,null,null,null),f=b.exports,v={data:function(){return{isLoading:!1,pagelist:{},QAData:{}}},components:{loading:l.a,page:o["a"],QAList:f},created:function(){this.getData()},methods:{getData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$emit("checkStatus");var a=this;this.isLoading=!0;var e={method:"get",url:"http://pettrip.rocket-coding.com/api/Qa/GetQuestion?page=".concat(t)};this.$http(e).then((function(t){console.log(t),a.QAData=t.data.question,a.pagelist=t.data.meta,a.isLoading=!1})).catch((function(t){console.log(t),a.isLoading=!1})),c.a.fire({toast:!0,position:"top-end",icon:"error",title:"開啟失敗",showConfirmButton:!1,timer:2e3})},changeState:function(){}}},_=v,m=Object(h["a"])(_,n,s,!1,null,null,null);a["default"]=m.exports}}]);
//# sourceMappingURL=chunk-b7316d48.5e0562bb.js.map