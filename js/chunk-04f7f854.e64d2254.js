(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04f7f854"],{"14eb":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination justify-content-center"},[e("li",{staticClass:"page-item",class:{disabled:"1"==t.pageData.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.changePage(t.pageData.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pageData.total_page,(function(a,s){return e("li",{key:s,staticClass:"page-item",class:{active:t.pageData.current_page==a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pageData.current_page==t.pageData.total_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.changePage(t.pageData.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},i=[],r={data:function(){return{}},name:"Page",props:["pageData"],methods:{changePage:function(t){this.$emit("page-change",t)}}},o=r,l=e("2877"),c=Object(l["a"])(o,s,i,!1,null,null,null);a["a"]=c.exports},"1bb8":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"firmList bg-light"},[e("loading",{attrs:{active:t.isLoading,loader:"bars"},on:{"update:active":function(a){t.isLoading=a}}}),t._m(0),e("div",{staticClass:"container py-3"},[t._m(1),e("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[e("div",{staticClass:"tab-pane fade show active",attrs:{id:"firmLst",role:"tabpanel","aria-labelledby":"firmLst-tab"}},[e("firmListFirm",{attrs:{firmList:t.firmList},on:{reset:t.searchFirm,search:t.searchFirm}}),null!=t.firmList[0]?e("page",{attrs:{"page-data":t.pagelist},on:{"page-change":t.getFirmData}}):t._e()],1),e("div",{staticClass:"tab-pane fade",attrs:{id:"roomList",role:"tabpanel","aria-labelledby":"roomList-tab"}},[e("firmListRoom")],1)])]),e("div",{staticClass:"container py-5"})],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"banner position-relative"},[e("div",{staticClass:"bannerText position-absolute text-dark display-4 font-weight-bold"},[t._v("尋找寄宿")]),e("img",{staticClass:"img-fluid",staticStyle:{height:"200px","object-fit":"cover",width:"100%"},attrs:{src:"https://upload.cc/i1/2020/09/02/JE5b96.png",alt:""}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[e("li",{staticClass:"nav-item w-50",attrs:{role:"presentation"}},[e("a",{staticClass:"nav-link active",attrs:{id:"firmLst-tab","data-toggle":"tab",href:"#firmLst",role:"tab","aria-controls":"firmLst","aria-selected":"true"}},[t._v("廠商列表")])]),e("li",{staticClass:"nav-item w-50",attrs:{role:"presentation"}},[e("a",{staticClass:"nav-link",attrs:{id:"roomList-tab","data-toggle":"tab",href:"#roomList",role:"tab","aria-controls":"roomList","aria-selected":"false"}},[t._v("房間列表")])])])}],r=(e("99af"),e("9062")),o=e.n(r),l=(e("e40d"),e("14eb")),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("form",{staticClass:"p-3 mb-3 bg-white border border-top-0",on:{submit:function(a){return a.preventDefault(),t.searchBtn(a)}}},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6 col-12"},[e("div",{staticClass:"row"},[e("label",{staticClass:"col-lg-3 col-form-label",attrs:{for:"inputCity"}},[t._v("縣市")]),e("div",{staticClass:"col-lg-9"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.regin,expression:"regin"}],staticClass:"form-control",attrs:{id:"inputCity"},on:{change:[function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.regin=a.target.multiple?e:e[0]},t.selectRegion]}},[e("option",{attrs:{value:"",selected:""}},[t._v("請選擇")]),t._l(t.regionList,(function(a,s){return e("option",{key:s,domProps:{value:a}},[t._v(t._s(a))])}))],2)])])]),e("div",{staticClass:"form-group col-md-6 col-12"},[e("div",{staticClass:"row"},[e("label",{staticClass:"col-lg-3 col-form-label",attrs:{for:"inputState"}},[t._v("區域")]),e("div",{staticClass:"col-lg-9"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.area,expression:"area"}],staticClass:"form-control",attrs:{id:"inputState"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.area=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"",selected:""}},[t._v("請選擇")]),t._l(t.areaList,(function(a,s){return e("option",{key:s,domProps:{selected:"中正區"==a,value:a}},[t._v(t._s(a))])}))],2)])])])]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6 col-12 align-items-center"},[e("div",{staticClass:"row align-items-center"},[e("label",{staticClass:"col-lg-3 col-form-label",attrs:{for:"petType"}},[t._v("條件篩選")]),e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"form-check form-check-inline"},[e("button",{staticClass:"mb-1 btn btn-outline-danger",attrs:{type:"button",id:"priceBtn"},on:{click:function(a){return t.filter("price")}}},[e("i",{directives:[{name:"show",rawName:"v-show",value:!t.togglePrice,expression:"!togglePrice"}],staticClass:"mr-1 fas fa-sort-amount-down"}),e("i",{directives:[{name:"show",rawName:"v-show",value:t.togglePrice,expression:"togglePrice"}],staticClass:"mr-1 fas fa-sort-amount-down-alt"}),t._v("金額 "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.togglePrice,expression:"!togglePrice"}]},[t._v("(高-低)")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.togglePrice,expression:"togglePrice"}]},[t._v("(低-高)")])])]),e("div",{staticClass:"form-check form-check-inline"},[e("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button",id:"evaluationBtn"},on:{click:function(a){return t.filter("evaluation")}}},[e("i",{directives:[{name:"show",rawName:"v-show",value:!t.toggleEvaluation,expression:"!toggleEvaluation"}],staticClass:"mr-1 fas fa-sort-amount-down"}),e("i",{directives:[{name:"show",rawName:"v-show",value:t.toggleEvaluation,expression:"toggleEvaluation"}],staticClass:"mr-1 fas fa-sort-amount-down-alt"}),t._v("評價 "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.toggleEvaluation,expression:"!toggleEvaluation"}]},[t._v("(高-低)")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.toggleEvaluation,expression:"toggleEvaluation"}]},[t._v("(低-高)")])])])])])]),e("div",{staticClass:"form-group col-md-6 col-12 align-items-center"},[e("div",{staticClass:"row"},[e("label",{staticClass:"col-lg-3 col-form-label",attrs:{for:"search"}},[t._v("搜尋")]),e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],staticClass:"form-control",attrs:{type:"text",id:"search",placeholder:"關鍵字搜尋","aria-label":"Recipient's username","aria-describedby":"button-addon2"},domProps:{value:t.keywords},on:{input:function(a){a.target.composing||(t.keywords=a.target.value)}}})])])])])]),e("div",{staticClass:"text-right"},[e("button",{staticClass:"mr-3 btn btn-outline-primary",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.resetBtn(a)}}},[t._v("重置篩選條件")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("查詢")])])]),null!=t.firmList[0]?e("div",t._l(t.firmList,(function(a,s){return e("div",{key:s,staticClass:"card w-100 mb-4"},[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"h-100",staticStyle:{"background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+a.bannerimg+")"}},[e("img",{staticClass:"card-img",class:{opacityZero:""!=a.bannerimg},attrs:{src:"https://upload.cc/i1/2020/09/09/GIaohq.jpg",alt:""}})])]),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card-body w-100 h-100"},[e("div",{staticClass:"row align-items-md-end align-items-start flex-md-row-reverse flex-row"},[e("div",{staticClass:"col-3 col-sm-3 col-md-2 col-lg-2"},[e("div",{staticClass:"rounded-circle mx-auto overflow-hidden",staticStyle:{"background-size":"cover","max-width":"300px"},style:{backgroundImage:"url("+a.avatar+")"}},[e("img",{staticClass:"w-100 img-fluid",class:{opacityZero:""!=a.avatar},attrs:{src:"https://upload.cc/i1/2020/09/09/wa8QmM.png",alt:""}})])]),e("div",{staticClass:"col-9 col-sm-9 col-md-10 col-lg-10"},[e("div",{staticClass:"my-1 d-flex flex-column flex-sm-row-reverse align-items-start justify-content-end"},[e("p",{staticClass:"my-1 d-flex align-items-end flex-wrap"},[e("star-rating",{attrs:{inline:!0,increment:.1,"rounded-corners":!0,"read-only":!0,"star-size":20},model:{value:a.evaluation,callback:function(e){t.$set(a,"evaluation",e)},expression:"firm.evaluation"}}),e("small",{staticClass:"ml-1"},[t._v("("+t._s(a.evaluation_count)+"筆)")])],1),e("h6",{staticClass:"my-1 mr-1 card-title text-truncate font-weight-bold"},[e("router-link",{staticClass:"stretched-link btn btn-secondary text-white",attrs:{to:"/FirmPage/"+a.companyseq}},[e("i",{staticClass:"mr-1 fas fa-hashtag"}),t._v(" "+t._s(a.companybrand)+" ")])],1)]),e("p",{staticClass:"my-1 card-text"},[e("i",{staticClass:"mr-1 fas fa-map-marker-alt"}),t._v(" "+t._s(a.country)+"、"+t._s(a.area)+" ")]),e("p",{staticClass:"my-1 card-text"},[t._v(t._s(a.pettype))]),e("p",{staticClass:"my-1 text-truncate"},[e("i",{staticClass:"mr-1 fas fa-paw"}),a.pettype_cat?e("span",[t._v("貓")]):t._e(),a.pettype_cat&&a.pettype_dog?e("span",[t._v("、")]):t._e(),a.pettype_dog?e("span",[t._v("狗")]):t._e(),a.pettype_dog&&a.pettype_other?e("span",[t._v("、")]):t._e(),a.pettype_cat&&!a.pettype_dog&&a.pettype_other?e("span",[t._v("、")]):t._e(),a.pettype_other?e("span",[t._v("其他")]):t._e()]),e("p",{staticClass:"my-1 card-text text-secondary"},[e("i",{staticClass:"mr-1 fas fa-tag"}),t._v(" 共有"+t._s(a.rooms)+"間房間 ")]),e("p",{staticClass:"my-1 card-text text-danger"},[e("i",{staticClass:"mr-1 fas fa-barcode"}),t._v(" $ "+t._s(a.roomprice_min)+" "),a.roomprice_min!=a.roomprice_max?e("span",[t._v("~"+t._s(a.roomprice_max))]):t._e(),t._v(" / 天 ")])])])])])])])})),0):t._e(),null==t.firmList[0]?e("div",{staticClass:"text-muted py-3 display-4 text-center"},[e("p",[t._v("查無資料")])]):t._e()])},n=[],u=(e("4160"),e("c975"),e("b0c0"),e("159b"),e("bb0b")),m={data:function(){return{regin:"",regionList:[],area:"",areaList:[],taiwan:u,togglePrice:!1,toggleEvaluation:!1,filterSelect:"",keywords:""}},name:"firmListFirm",props:["firmList"],created:function(){this.getRegion()},methods:{getRegion:function(){var t=this;this.taiwan.forEach((function(a){return t.regionList.push(a.name)}))},selectRegion:function(){var t=this;t.areaList=[],t.area="",this.taiwan.forEach((function(a){-1!==t.regin.indexOf(a.name)&&a.districts.forEach((function(a){return t.areaList.push(a.name)}))}))},filter:function(t){if("price"===t){switch($("#evaluationBtn").removeClass("active"),$("#priceBtn").addClass("active"),this.togglePrice){case!0:this.togglePrice=!1;break;default:this.togglePrice=!0;break}this.filterSelect="price"}else{switch($("#evaluationBtn").addClass("active"),$("#priceBtn").removeClass("active"),this.toggleEvaluation){case!0:this.toggleEvaluation=!1;break;default:this.toggleEvaluation=!0;break}this.filterSelect="evaluation"}this.searchBtn()},searchBtn:function(){var t="",a="";if("evaluation"===this.filterSelect)switch(t="",this.toggleEvaluation){case!0:a="ASC";break;default:a="DESC";break}else if("price"===this.filterSelect)switch(a="",this.togglePrice){case!0:t="ASC";break;default:t="DESC";break}var e={country:this.regin,area:this.area,keyword:this.keywords,money:t,evaluation:a};this.$emit("search",e)},resetBtn:function(){this.regin="",this.area="",this.keywords="",this.filterSelect="",$("#evaluationBtn").removeClass("active"),$("#priceBtn").removeClass("active");var t={country:"",area:"",keyword:"",money:"",evaluation:""};this.$emit("reset",t)}}},v=m,d=e("2877"),p=Object(d["a"])(v,c,n,!1,null,null,null),g=p.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("form",{staticClass:"p-3 mb-3 bg-white border border-top-0"},[t._m(0),t._m(1),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6 col-12"},[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-lg-3 col-form-label",attrs:{for:"petSize"}},[t._v("期間")]),e("div",{staticClass:"col-lg-9"},[e("vc-date-picker",{attrs:{mode:"range","min-date":new Date},model:{value:t.range,callback:function(a){t.range=a},expression:"range"}})],1)])])]),t._m(2)])])},h=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6 col-12 align-items-center"},[e("div",{staticClass:"row align-items-center"},[e("label",{staticClass:"col-lg-3 col-form-label",attrs:{for:"petType"}},[t._v("寵物類型")]),e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"form-check form-check-inline"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"cat",value:"cat"}}),e("label",{staticClass:"form-check-label",attrs:{for:"cat"}},[t._v("貓")])]),e("div",{staticClass:"form-check form-check-inline"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"bog",value:"dog"}}),e("label",{staticClass:"form-check-label",attrs:{for:"bog"}},[t._v("狗")])]),e("div",{staticClass:"form-check form-check-inline"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"other",value:"other"}}),e("label",{staticClass:"form-check-label",attrs:{for:"other"}},[t._v("其他")])])])])]),e("div",{staticClass:"form-group col-md-6 col-12 align-items-center"},[e("div",{staticClass:"row align-items-center"},[e("label",{staticClass:"col-lg-3 col-form-label",attrs:{for:"petType"}},[t._v("條件篩選")]),e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"form-check form-check-inline"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"price",value:"金額(低-高)"}}),e("label",{staticClass:"form-check-label",attrs:{for:"price"}},[t._v("金額(低-高)")])]),e("div",{staticClass:"form-check form-check-inline"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"evaluation",value:"評價(高-低)"}}),e("label",{staticClass:"form-check-label",attrs:{for:"evaluation"}},[t._v("評價(高-低)")])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6 col-12"},[e("div",{staticClass:"row"},[e("label",{staticClass:"col-lg-3 col-form-label",attrs:{for:"petNum"}},[t._v("寵物數量")]),e("div",{staticClass:"col-lg-9"},[e("select",{staticClass:"form-control",attrs:{id:"petNum"}},[e("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("請選擇")]),e("option",{attrs:{value:"1"}},[t._v("1")]),e("option",{attrs:{value:"2"}},[t._v("2")]),e("option",{attrs:{value:"3"}},[t._v("3")]),e("option",{attrs:{value:"4"}},[t._v("4")]),e("option",{attrs:{value:"5"}},[t._v("5")]),e("option",{attrs:{value:"6"}},[t._v("5以上")])])])])]),e("div",{staticClass:"form-group col-md-6 col-12"},[e("div",{staticClass:"row"},[e("label",{staticClass:"col-lg-3 col-form-label",attrs:{for:"petWeight"}},[t._v("接受重量")]),e("div",{staticClass:"col-lg-9"},[e("select",{staticClass:"form-control",attrs:{id:"petWeight"}},[e("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("請選擇")]),e("option",{attrs:{value:"5"}},[t._v("5以下")]),e("option",{attrs:{value:"10"}},[t._v("10以下")]),e("option",{attrs:{value:"15"}},[t._v("15以下")]),e("option",{attrs:{value:"20"}},[t._v("20以下")]),e("option",{attrs:{value:"25"}},[t._v("25以下")]),e("option",{attrs:{value:"30"}},[t._v("25以上")])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-primary"},[t._v("查詢")])])}],b={data:function(){return{range:{}}},name:"firmListRoom",props:["orderDetail"],created:function(){},methods:{}},C=b,_=Object(d["a"])(C,f,h,!1,null,null,null),y=_.exports,w={data:function(){return{firmList:{},pagelist:{},isLoading:!1,searchConfig:{keyword:"",evaluation:"",money:"",area:"",country:""}}},created:function(){this.getFirmData(),this.getRoomData(),$("html, body").animate({scrollTop:$("#app").offset().top},0)},components:{page:l["a"],loading:o.a,firmListFirm:g,firmListRoom:y},methods:{getFirmData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var a=this,e={method:"get",url:"http://pettrip.rocket-coding.com/api/Room/GetCompanys?page=".concat(t,"&paged=6&keyword=").concat(this.searchConfig.keyword,"&money=").concat(this.searchConfig.money,"&evaluation=").concat(this.searchConfig.evaluation,"&country=").concat(this.searchConfig.country,"&area=").concat(this.searchConfig.area)};this.$http(e).then((function(t){console.log(t),a.firmList=t.data.companies,a.pagelist=t.data.meta,a.isLoading=!1})).catch((function(t){console.log(t),a.isLoading=!1}))},searchFirm:function(t){this.searchConfig=t,this.getFirmData()},getRoomData:function(){var t={method:"get",url:"http://pettrip.rocket-coding.com/api/Room/GetRoom?chk_cat=false&chk_dog=true&dates=2020-09-23&datee=2020-09-24"};this.$http(t).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}}},k=w,x=Object(d["a"])(k,s,i,!1,null,null,null);a["default"]=x.exports},"99af":function(t,a,e){"use strict";var s=e("23e7"),i=e("d039"),r=e("e8b5"),o=e("861d"),l=e("7b0b"),c=e("50c4"),n=e("8418"),u=e("65f0"),m=e("1dde"),v=e("b622"),d=e("2d00"),p=v("isConcatSpreadable"),g=9007199254740991,f="Maximum allowed index exceeded",h=d>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),b=m("concat"),C=function(t){if(!o(t))return!1;var a=t[p];return void 0!==a?!!a:r(t)},_=!h||!b;s({target:"Array",proto:!0,forced:_},{concat:function(t){var a,e,s,i,r,o=l(this),m=u(o,0),v=0;for(a=-1,s=arguments.length;a<s;a++)if(r=-1===a?o:arguments[a],C(r)){if(i=c(r.length),v+i>g)throw TypeError(f);for(e=0;e<i;e++,v++)e in r&&n(m,v,r[e])}else{if(v>=g)throw TypeError(f);n(m,v++,r)}return m.length=v,m}})}}]);
//# sourceMappingURL=chunk-04f7f854.e64d2254.js.map