(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-events-index-vue"],{"05b0":function(t,n,e){t.exports=e.p+"img/ag-rec.6e52e156.png"},5874:function(t,n,e){t.exports=e.p+"img/ds-bst.16327127.png"},b293:function(t,n,e){t.exports=e.p+"img/ds-hash.2ce3d2b1.png"},b9b8:function(t,n,e){},c03b:function(t,n,e){t.exports=e.p+"img/ml.aa7cda9a.png"},c3a9:function(t,n,e){t.exports=e.p+"img/ds-array.57b5c83c.png"},d138:function(t,n,e){"use strict";var i=e("b9b8"),s=e.n(i);s.a},d8de:function(t,n,e){t.exports=e.p+"img/ds-queue.0fbb153e.png"},f19f:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"margin-bottom":"70px"}},[e("b-container",[e("van-list",{attrs:{finished:t.finished,"finished-text":"No more events","loading-text":"Loading..."},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},[e("b-row",t._l(t.eventList,(function(n,i){return e("b-col",{key:i,style:{padding:"0px",margin:"0px"},attrs:{cols:"12",lg:"4",md:"12","no-gutters":"true",sm:"12",xl:"4"}},[e("div",{staticClass:"cr-van-card"},[e("img",{staticStyle:{width:"100%"},attrs:{src:n.imgUrl}}),e("van-goods-action-button",{staticClass:"float-btn",attrs:{text:"More",color:"#8ba38d",type:"primary"},on:{click:function(e){return t.viewQuestions(n.id)}}}),e("div",{staticStyle:{"margin-top":"15px"}},[t._v("Event"+t._s(n.name)+" - "+t._s(n.desc))])],1)])})),1)],1)],1)],1)},s=[],o={data:function(){return{imageList:[e("b293"),e("d8de"),e("c03b"),e("05b0"),e("c3a9"),e("5874")],eventList:[],loading:!1,finished:!1}},methods:{viewQuestions:function(t){this.$router.push({path:"/events/view/"+t})},onLoad:function(){var t=this;setTimeout((function(){for(var n=0;n<5;n++)t.eventList.push({name:t.eventList.length+1,rating:t.eventList.length%5+1,id:t.eventList.length%6,desc:"Events details",imgUrl:t.imageList[t.eventList.length%6]});t.loading=!1,t.eventList.length>=20&&(t.finished=!0)}),1e3)}}},a=o,r=(e("d138"),e("2877")),c=Object(r["a"])(a,i,s,!1,null,"2532773d",null);n["default"]=c.exports}}]);
//# sourceMappingURL=view-events-index-vue.96b78354.js.map