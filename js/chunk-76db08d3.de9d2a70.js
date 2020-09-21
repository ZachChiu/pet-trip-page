(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76db08d3"],{"14eb":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center"},[a("li",{staticClass:"page-item",class:{disabled:"1"==t.pageData.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.changePage(t.pageData.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pageData.total_page,(function(e,s){return a("li",{key:s,staticClass:"page-item",class:{active:t.pageData.current_page==e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.changePage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:t.pageData.current_page==t.pageData.total_page}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.changePage(t.pageData.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},i=[],r={data:function(){return{}},name:"Page",props:["pageData"],methods:{changePage:function(t){this.$emit("page-change",t)}}},o=r,c=a("2877"),n=Object(c["a"])(o,s,i,!1,null,null,null);e["a"]=n.exports},"1b4e":function(t,e,a){"use strict";var s=a("29b7"),i=a.n(s);i.a},"1bb8":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"firmList bg-light"},[t._m(0),a("div",{staticClass:"container py-3"},[t._m(1),a("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[a("div",{staticClass:"tab-pane fade show active",attrs:{id:"firmLst",role:"tabpanel","aria-labelledby":"firmLst-tab"}},[a("firmListFirm",{attrs:{firmList:t.firmList},on:{search:t.searchFirm}}),null!=t.firmList[0]?a("page",{attrs:{"page-data":t.firmPagelist},on:{"page-change":t.getFirmData}}):t._e()],1),a("div",{staticClass:"tab-pane fade",attrs:{id:"roomList",role:"tabpanel","aria-labelledby":"roomList-tab"}},[a("firmListRoom",{attrs:{roomList:t.roomList,disabledDate:t.disabledDate},on:{search:t.searchRoom}}),null!=t.roomList[0]?a("page",{attrs:{"page-data":t.roomPagelist},on:{"page-change":t.getRoomData}}):t._e()],1)])]),a("div",{staticClass:"container py-5"})])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner position-relative"},[a("div",{staticClass:"bannerText position-absolute text-dark display-4 font-weight-bold"},[t._v("尋找寄宿")]),a("img",{staticClass:"img-fluid",staticStyle:{height:"200px","object-fit":"cover",width:"100%"},attrs:{src:"https://upload.cc/i1/2020/09/02/JE5b96.png",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[a("li",{staticClass:"nav-item w-50",attrs:{role:"presentation"}},[a("a",{staticClass:"nav-link active h4 mb-0",attrs:{id:"firmLst-tab","data-toggle":"tab",href:"#firmLst",role:"tab","aria-controls":"firmLst","aria-selected":"true"}},[a("i",{staticClass:"mr-1 fas fa-tags"}),t._v("廠商列表 ")])]),a("li",{staticClass:"nav-item w-50",attrs:{role:"presentation"}},[a("a",{staticClass:"nav-link h4 mb-0",attrs:{id:"roomList-tab","data-toggle":"tab",href:"#roomList",role:"tab","aria-controls":"roomList","aria-selected":"false"}},[a("i",{staticClass:"mr-1 fas fa-tags"}),t._v("房間列表 ")])])])}],r=(a("99af"),a("4160"),a("159b"),a("14eb")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",{staticClass:"p-3 mb-3 bg-white border border-top-0",on:{submit:function(e){return e.preventDefault(),t.searchBtn(e)}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6 col-12"},[a("div",{staticClass:"row"},[a("label",{staticClass:"col-lg-3 col-form-label",attrs:{for:"inputCity"}},[t._v("縣市")]),a("div",{staticClass:"col-lg-9"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.regin,expression:"regin"}],staticClass:"form-control",attrs:{id:"inputCity"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.regin=e.target.multiple?a:a[0]},t.selectRegion]}},[a("option",{attrs:{value:"",selected:""}},[t._v("請選擇")]),t._l(t.regionList,(function(e,s){return a("option",{key:s,domProps:{value:e}},[t._v(t._s(e))])}))],2)])])]),a("div",{staticClass:"form-group col-md-6 col-12"},[a("div",{staticClass:"row"},[a("label",{staticClass:"col-lg-3 col-form-label",attrs:{for:"inputState"}},[t._v("區域")]),a("div",{staticClass:"col-lg-9"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.area,expression:"area"}],staticClass:"form-control",attrs:{id:"inputState"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.area=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",selected:""}},[t._v("請選擇")]),t._l(t.areaList,(function(e,s){return a("option",{key:s,domProps:{value:e}},[t._v(t._s(e))])}))],2)])])])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6 col-12 align-items-center"},[a("div",{staticClass:"row align-items-center"},[a("label",{staticClass:"col-lg-3 col-form-label",attrs:{for:"petType"}},[t._v("條件篩選")]),a("div",{staticClass:"col-lg-9"},[a("div",{staticClass:"form-check form-check-inline"},[a("button",{staticClass:"mb-1 btn btn-outline-danger",attrs:{type:"button",id:"priceBtn"},on:{click:function(e){return t.filter("price")}}},[a("i",{directives:[{name:"show",rawName:"v-show",value:!t.togglePrice,expression:"!togglePrice"}],staticClass:"mr-1 fas fa-sort-amount-down"}),a("i",{directives:[{name:"show",rawName:"v-show",value:t.togglePrice,expression:"togglePrice"}],staticClass:"mr-1 fas fa-sort-amount-down-alt"}),t._v("金額 "),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.togglePrice,expression:"!togglePrice"}]},[t._v("(高-低)")]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.togglePrice,expression:"togglePrice"}]},[t._v("(低-高)")])])]),a("div",{staticClass:"form-check form-check-inline"},[a("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button",id:"evaluationBtn"},on:{click:function(e){return t.filter("evaluation")}}},[a("i",{directives:[{name:"show",rawName:"v-show",value:!t.toggleEvaluation,expression:"!toggleEvaluation"}],staticClass:"mr-1 fas fa-sort-amount-down"}),a("i",{directives:[{name:"show",rawName:"v-show",value:t.toggleEvaluation,expression:"toggleEvaluation"}],staticClass:"mr-1 fas fa-sort-amount-down-alt"}),t._v("評價 "),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.toggleEvaluation,expression:"!toggleEvaluation"}]},[t._v("(高-低)")]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.toggleEvaluation,expression:"toggleEvaluation"}]},[t._v("(低-高)")])])])])])]),a("div",{staticClass:"form-group col-md-6 col-12 align-items-center"},[a("div",{staticClass:"row"},[a("label",{staticClass:"col-lg-3 col-form-label",attrs:{for:"search"}},[t._v("搜尋")]),a("div",{staticClass:"col-lg-9"},[a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],staticClass:"form-control",attrs:{type:"text",id:"search",placeholder:"關鍵字搜尋","aria-label":"Recipient's username","aria-describedby":"button-addon2"},domProps:{value:t.keywords},on:{input:function(e){e.target.composing||(t.keywords=e.target.value)}}})])])])])]),a("div",{staticClass:"text-right"},[a("button",{staticClass:"mr-3 btn btn-outline-primary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.resetBtn(e)}}},[t._v("重置篩選條件")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("查詢")])])]),null!=t.firmList[0]?a("div",t._l(t.firmList,(function(e,s){return a("div",{key:s,staticClass:"firmCard shadow card w-100 mb-4"},[a("router-link",{staticClass:"text-reset text-decoration-none",attrs:{to:"/FirmPage/"+e.companyseq}},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"firmPic h-100",staticStyle:{"background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+e.bannerimg+")"}},[a("img",{staticClass:"card-img",class:{opacityZero:""!=e.bannerimg},attrs:{src:"https://upload.cc/i1/2020/09/09/GIaohq.jpg",alt:""}})])]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body w-100 h-100"},[a("div",{staticClass:"row align-items-md-end align-items-start flex-md-row-reverse flex-row"},[a("div",{staticClass:"col-3 col-sm-3 col-md-2 col-lg-2"},[a("div",{staticClass:"rounded-circle mx-auto overflow-hidden",staticStyle:{"background-size":"cover","max-width":"300px"},style:{backgroundImage:"url("+e.avatar+")"}},[a("img",{staticClass:"w-100 img-fluid",class:{opacityZero:""!=e.avatar},attrs:{src:"https://upload.cc/i1/2020/09/09/wa8QmM.png",alt:""}})])]),a("div",{staticClass:"col-9 col-sm-9 col-md-10 col-lg-10"},[a("div",{staticClass:"my-1 d-flex flex-column flex-sm-row-reverse align-items-start justify-content-end"},[a("p",{staticClass:"my-1 d-flex align-items-end flex-wrap"},[a("star-rating",{attrs:{inline:!0,increment:.1,"rounded-corners":!0,"read-only":!0,"star-size":20},model:{value:e.evaluation,callback:function(a){t.$set(e,"evaluation",a)},expression:"firm.evaluation"}}),a("small",{staticClass:"ml-1"},[t._v("("+t._s(e.evaluation_count)+"筆)")])],1),a("h6",{staticClass:"my-1 mr-1 card-title text-truncate font-weight-bold"},[a("p",{staticClass:"mb-0 btn btn-secondary text-white"},[a("i",{staticClass:"mr-1 fas fa-hashtag"}),t._v(" "+t._s(e.companybrand)+" ")])])]),a("p",{staticClass:"my-1 card-text"},[a("i",{staticClass:"mr-1 fas fa-map-marker-alt"}),t._v(" "+t._s(e.country)+"、"+t._s(e.area)+" ")]),a("p",{staticClass:"my-1 card-text"},[t._v(t._s(e.pettype))]),a("p",{staticClass:"my-1 text-truncate"},[a("i",{staticClass:"mr-1 fas fa-paw"}),e.pettype_cat?a("span",[t._v("貓")]):t._e(),e.pettype_cat&&e.pettype_dog?a("span",[t._v("、")]):t._e(),e.pettype_dog?a("span",[t._v("狗")]):t._e(),e.pettype_dog&&e.pettype_other?a("span",[t._v("、")]):t._e(),e.pettype_cat&&!e.pettype_dog&&e.pettype_other?a("span",[t._v("、")]):t._e(),e.pettype_other?a("span",[t._v("其他")]):t._e()]),a("p",{staticClass:"my-1 card-text text-secondary"},[a("i",{staticClass:"mr-1 fas fa-tag"}),t._v(" 共有"+t._s(e.rooms)+"間房間 ")]),a("p",{staticClass:"my-1 card-text text-danger"},[a("i",{staticClass:"mr-1 fas fa-barcode"}),t._v(" $ "+t._s(e.roomprice_min)+" "),e.roomprice_min!=e.roomprice_max?a("span",[t._v("~"+t._s(e.roomprice_max))]):t._e(),t._v(" / 天 ")])])])])])])])],1)})),0):t._e(),null==t.firmList[0]?a("div",{staticClass:"text-muted py-3 display-4 text-center"},[a("p",[t._v("查無資料")])]):t._e()])},c=[],n=(a("c975"),a("b0c0"),a("bb0b")),l={data:function(){return{regin:"",regionList:[],area:"",areaList:[],taiwan:n,togglePrice:!1,toggleEvaluation:!1,filterSelect:"",keywords:""}},name:"firmListFirm",props:["firmList"],created:function(){this.getRegion()},methods:{getRegion:function(){var t=this;this.taiwan.forEach((function(e){return t.regionList.push(e.name)}))},selectRegion:function(){var t=this;t.areaList=[],t.area="",this.taiwan.forEach((function(e){-1!==t.regin.indexOf(e.name)&&e.districts.forEach((function(e){return t.areaList.push(e.name)}))}))},filter:function(t){if("price"===t){switch($("#evaluationBtn").removeClass("active"),$("#priceBtn").addClass("active"),this.togglePrice){case!0:this.togglePrice=!1;break;default:this.togglePrice=!0;break}this.filterSelect="price"}else{switch($("#evaluationBtn").addClass("active"),$("#priceBtn").removeClass("active"),this.toggleEvaluation){case!0:this.toggleEvaluation=!1;break;default:this.toggleEvaluation=!0;break}this.filterSelect="evaluation"}this.searchBtn()},searchBtn:function(){var t="",e="";if("evaluation"===this.filterSelect)switch(t="",this.toggleEvaluation){case!0:e="ASC";break;default:e="DESC";break}else if("price"===this.filterSelect)switch(e="",this.togglePrice){case!0:t="ASC";break;default:t="DESC";break}var a={country:this.regin,area:this.area,keyword:this.keywords,money:t,evaluation:e};this.$emit("search",a)},resetBtn:function(){this.regin="",this.area="",this.keywords="",this.filterSelect="",$("#evaluationBtn").removeClass("active"),$("#priceBtn").removeClass("active"),this.searchBtn()}}},m=l,p=(a("40a6"),a("2877")),d=Object(p["a"])(m,o,c,!1,null,null,null),u=d.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",{staticClass:"p-3 mb-3 bg-white border border-top-0",on:{submit:function(e){return e.preventDefault(),t.searchBtn(e)}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6 col-12 align-items-center"},[a("div",{staticClass:"row align-items-center"},[a("label",{staticClass:"col-lg-3 col-form-label",attrs:{for:"petType"}},[t._v("寵物類型")]),a("div",{staticClass:"col-lg-9"},[a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.typeCat,expression:"typeCat"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"cat",value:"cat"},domProps:{checked:Array.isArray(t.typeCat)?t._i(t.typeCat,"cat")>-1:t.typeCat},on:{change:function(e){var a=t.typeCat,s=e.target,i=!!s.checked;if(Array.isArray(a)){var r="cat",o=t._i(a,r);s.checked?o<0&&(t.typeCat=a.concat([r])):o>-1&&(t.typeCat=a.slice(0,o).concat(a.slice(o+1)))}else t.typeCat=i}}}),a("label",{staticClass:"form-check-label",attrs:{for:"cat"}},[t._v("貓")])]),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.typeDog,expression:"typeDog"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"bog",value:"dog"},domProps:{checked:Array.isArray(t.typeDog)?t._i(t.typeDog,"dog")>-1:t.typeDog},on:{change:function(e){var a=t.typeDog,s=e.target,i=!!s.checked;if(Array.isArray(a)){var r="dog",o=t._i(a,r);s.checked?o<0&&(t.typeDog=a.concat([r])):o>-1&&(t.typeDog=a.slice(0,o).concat(a.slice(o+1)))}else t.typeDog=i}}}),a("label",{staticClass:"form-check-label",attrs:{for:"bog"}},[t._v("狗")])]),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.typeOther,expression:"typeOther"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"other",value:"other"},domProps:{checked:Array.isArray(t.typeOther)?t._i(t.typeOther,"other")>-1:t.typeOther},on:{change:function(e){var a=t.typeOther,s=e.target,i=!!s.checked;if(Array.isArray(a)){var r="other",o=t._i(a,r);s.checked?o<0&&(t.typeOther=a.concat([r])):o>-1&&(t.typeOther=a.slice(0,o).concat(a.slice(o+1)))}else t.typeOther=i}}}),a("label",{staticClass:"form-check-label",attrs:{for:"other"}},[t._v("其他")])])])])]),a("div",{staticClass:"form-group col-md-6 col-12 align-items-center"},[a("div",{staticClass:"row"},[a("label",{staticClass:"col-lg-3 col-form-label",attrs:{for:"petType"}},[t._v("條件篩選")]),a("div",{staticClass:"col-lg-9"},[a("div",{staticClass:"form-check form-check-inline"},[a("button",{staticClass:"mb-1 btn btn-outline-danger",attrs:{type:"button",id:"price"},on:{click:function(e){return t.filter()}}},[a("i",{directives:[{name:"show",rawName:"v-show",value:!t.togglePrice,expression:"!togglePrice"}],staticClass:"mr-1 fas fa-sort-amount-down"}),a("i",{directives:[{name:"show",rawName:"v-show",value:t.togglePrice,expression:"togglePrice"}],staticClass:"mr-1 fas fa-sort-amount-down-alt"}),t._v("金額 "),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.togglePrice,expression:"!togglePrice"}]},[t._v("(高-低)")]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.togglePrice,expression:"togglePrice"}]},[t._v("(低-高)")])])])])])])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6 col-12"},[a("div",{staticClass:"row"},[a("label",{staticClass:"col-lg-3 col-form-label",attrs:{for:"petNum"}},[t._v("寵物數量")]),a("div",{staticClass:"col-lg-9"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"form-control",attrs:{id:"petNum"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.amount=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",selected:""}},[t._v("請選擇")]),a("option",{attrs:{value:"1"}},[t._v("1")]),a("option",{attrs:{value:"2"}},[t._v("2")]),a("option",{attrs:{value:"3"}},[t._v("3")]),a("option",{attrs:{value:"4"}},[t._v("4")]),a("option",{attrs:{value:"5"}},[t._v("5")]),a("option",{attrs:{value:"6"}},[t._v("5以上")])])])])]),a("div",{staticClass:"form-group col-md-6 col-12"},[a("div",{staticClass:"row"},[a("label",{staticClass:"col-lg-3 col-form-label",attrs:{for:"petWeight"}},[t._v("接受重量")]),a("div",{staticClass:"col-lg-9"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.size,expression:"size"}],staticClass:"form-control",attrs:{id:"petWeight"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.size=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",selected:""}},[t._v("請選擇")]),a("option",{attrs:{value:"5"}},[t._v("5以下")]),a("option",{attrs:{value:"10"}},[t._v("10以下")]),a("option",{attrs:{value:"15"}},[t._v("15以下")]),a("option",{attrs:{value:"20"}},[t._v("20以下")]),a("option",{attrs:{value:"25"}},[t._v("25以下")]),a("option",{attrs:{value:"26"}},[t._v("25以上")])])])])])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6 col-12"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label",attrs:{for:"petSize"}},[t._v("期間")]),a("div",{staticClass:"col-lg-9"},[a("vc-date-picker",{attrs:{mode:"range","disabled-dates":t.disabledDate},model:{value:t.range,callback:function(e){t.range=e},expression:"range"}})],1)])])]),a("div",{staticClass:"text-right"},[a("button",{staticClass:"mr-3 btn btn-outline-primary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.resetBtn(e)}}},[t._v("重置篩選條件")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("查詢")])])]),null!=t.roomList[0]?a("div",{staticClass:"pt-4 mx-0 row"},t._l(t.roomList,(function(e,s){return a("div",{key:s,staticClass:"col-lg-4 col-md-6 mb-3"},[a("div",{staticClass:"roomCard shadow card mb-3"},[a("div",{staticClass:"h-100",staticStyle:{"background-size":"cover"},style:{backgroundImage:"url("+e.img1+")"}},[a("img",{staticClass:"card-img",class:{opacityZero:""!=e.bannerimg},attrs:{src:"https://upload.cc/i1/2020/09/09/GIaohq.jpg",alt:""}})]),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[a("router-link",{staticClass:"text-body stretched-link",attrs:{target:"_blank",to:"/FirmPage/"+e.companyseq+"/Room/"+e.roomseq}},[a("i",{staticClass:"text-warning fas fa-star"}),t._v(" "+t._s(e.roomname)+" ")])],1),a("p",{staticClass:"card-text"},[a("i",{staticClass:"mr-1 fas fa-paw"}),t._v("可接受： "),e.pettype_cat?a("span",[t._v("貓")]):t._e(),e.pettype_cat&&e.pettype_dog?a("span",[t._v("、")]):t._e(),e.pettype_dog?a("span",[t._v("狗")]):t._e(),e.pettype_dog&&e.pettype_other?a("span",[t._v("、")]):t._e(),e.pettype_cat&&!e.pettype_dog&&e.pettype_other?a("span",[t._v("、")]):t._e(),e.pettype_other?a("span",[t._v("其他")]):t._e()]),a("p",{staticClass:"card-text"},[a("i",{staticClass:"mr-1 fas fa-sort-numeric-down"}),t._v(" 可容納："+t._s(e.roomamount)+"隻 ")]),a("p",{staticClass:"card-text"},[a("i",{staticClass:"mr-1 fas fa-expand-alt"}),t._v("接受重量： "),a("span",[t._v(t._s(e.petsizes))]),e.petsizes!=e.petsizee?a("span",[t._v("~")]):t._e(),e.petsizes!=e.petsizee?a("span",[t._v(t._s(e.petsizee))]):t._e(),t._v("公斤 ")]),a("p",{staticClass:"card-text text-danger h5 text-right"},[t._v("$ "+t._s(e.roomprice)+" / 天")]),a("p",{staticClass:"text-center card-text p-2 rounded text-light bg-secondary"},[a("i",{staticClass:"mr-1 fas fa-hashtag"}),t._v(t._s(e.companybrand))])])])])})),0):t._e(),null==t.roomList[0]?a("div",{staticClass:"text-muted py-3 display-4 text-center"},[a("p",[t._v("查無資料")])]):t._e()])},g=[],h={data:function(){return{range:{},size:"",amount:"",typeCat:!1,typeDog:!1,typeOther:!1,togglePrice:!1,filterSelect:""}},name:"firmListRoom",props:["roomList","disabledDate"],created:function(){},methods:{filter:function(){switch($("#price").addClass("active"),this.togglePrice){case!0:this.togglePrice=!1,this.filterSelect="DESC";break;default:this.togglePrice=!0,this.filterSelect="ASC";break}this.searchBtn()},searchBtn:function(){var t={chk_cat:this.typeCat,chk_dog:this.typeDog,chk_other:this.typeOther,dates:"",datee:"",size:this.size,amount:this.amount,money:this.filterSelect};console.log(this.range),null!=this.range&&(t.dates=new Date(this.range.start).toLocaleDateString(),t.datee=new Date(this.range.end).toLocaleDateString()),this.$emit("search",t)},resetBtn:function(){$("#price").removeClass("active"),this.range=null,this.size="",this.filterSelect="",this.amount="",this.typeCat=!1,this.typeDog=!1,this.typeOther=!1,this.togglePrice=!1,this.searchBtn()}}},f=h,C=(a("1b4e"),Object(p["a"])(f,v,g,!1,null,null,null)),_=C.exports,b={data:function(){return{disabledDate:[],firmList:{},roomList:{},firmPagelist:{},roomPagelist:{},searchFirmConfig:{keyword:"",evaluation:"",money:"",area:"",country:""},searchRoomConfig:{chk_cat:!1,chk_other:!1,chk_dog:!1,amount:"",datee:"",dates:"",size:"",money:""}}},created:function(){var t=this;t.$emit("loadAction",!0),this.$http.all([this.$http("http://pettrip.rocket-coding.com/api/Room/GetRoom?page=1paged=6"),this.$http("http://pettrip.rocket-coding.com/api/Room/GetCompanys?page=1paged=6")]).then((function(e){t.firmList=e[1].data.companies,t.firmPagelist=e[1].data.meta,t.roomList=e[0].data.rooms,e[0].data.remove.forEach((function(e){t.disabledDate.push({start:e.orderdates,end:e.orderdatee})})),t.roomPagelist=e[0].data.meta,t.$emit("loadAction",!1)}))},components:{page:r["a"],firmListFirm:u,firmListRoom:_},methods:{getFirmData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this;e.$emit("loadAction",!0);var a={method:"get",url:"http://pettrip.rocket-coding.com/api/Room/GetCompanys?page=".concat(t,"&paged=6&keyword=").concat(this.searchFirmConfig.keyword,"&money=").concat(this.searchFirmConfig.money,"&evaluation=").concat(this.searchFirmConfig.evaluation,"&country=").concat(this.searchFirmConfig.country,"&area=").concat(this.searchFirmConfig.area)};this.$http(a).then((function(t){e.firmList=t.data.companies,e.firmPagelist=t.data.meta,e.$emit("loadAction",!1)})).catch((function(){e.$emit("loadAction",!1)}))},searchFirm:function(t){this.searchFirmConfig=t,this.getFirmData()},searchRoom:function(t){this.searchRoomConfig=t,this.getRoomData()},getRoomData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this;e.$emit("loadAction",!0);var a={method:"get",url:"http://pettrip.rocket-coding.com/api/Room/GetRoom?page=".concat(t,"&paged=6&chk_cat=").concat(this.searchRoomConfig.chk_cat,"&chk_dog=").concat(this.searchRoomConfig.chk_dog,"&chk_other=").concat(this.searchRoomConfig.chk_other,"&dates=").concat(this.searchRoomConfig.dates,"&datee=").concat(this.searchRoomConfig.datee,"&size=").concat(this.searchRoomConfig.size,"&amount=").concat(this.searchRoomConfig.amount,"&money=").concat(this.searchRoomConfig.money)};this.$http(a).then((function(t){e.roomList=t.data.rooms,e.roomPagelist=t.data.meta,e.$emit("loadAction",!1),$("html, body").animate({scrollTop:$("#app").offset().top},0)})).catch((function(){e.$emit("loadAction",!1)}))}}},y=b,w=Object(p["a"])(y,s,i,!1,null,null,null);e["default"]=w.exports},"29b7":function(t,e,a){},"40a6":function(t,e,a){"use strict";var s=a("4556"),i=a.n(s);i.a},4556:function(t,e,a){},"99af":function(t,e,a){"use strict";var s=a("23e7"),i=a("d039"),r=a("e8b5"),o=a("861d"),c=a("7b0b"),n=a("50c4"),l=a("8418"),m=a("65f0"),p=a("1dde"),d=a("b622"),u=a("2d00"),v=d("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",f=u>=51||!i((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),C=p("concat"),_=function(t){if(!o(t))return!1;var e=t[v];return void 0!==e?!!e:r(t)},b=!f||!C;s({target:"Array",proto:!0,forced:b},{concat:function(t){var e,a,s,i,r,o=c(this),p=m(o,0),d=0;for(e=-1,s=arguments.length;e<s;e++)if(r=-1===e?o:arguments[e],_(r)){if(i=n(r.length),d+i>g)throw TypeError(h);for(a=0;a<i;a++,d++)a in r&&l(p,d,r[a])}else{if(d>=g)throw TypeError(h);l(p,d++,r)}return p.length=d,p}})}}]);
//# sourceMappingURL=chunk-76db08d3.de9d2a70.js.map