(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-events-index-vue"],{"05b0":function(t,n,e){t.exports=e.p+"img/ag-rec.6e52e156.png"},5874:function(t,n,e){t.exports=e.p+"img/ds-bst.16327127.png"},"7a7d":function(t,n,e){"use strict";var i=e("ccef"),s=e.n(i);s.a},b0c0:function(t,n,e){var i=e("83ab"),s=e("9bf2").f,o=Function.prototype,a=o.toString,c=/^\s*function ([^ (]*)/,r="name";i&&!(r in o)&&s(o,r,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},b293:function(t,n,e){t.exports=e.p+"img/ds-hash.2ce3d2b1.png"},c03b:function(t,n,e){t.exports=e.p+"img/ml.aa7cda9a.png"},c3a9:function(t,n,e){t.exports=e.p+"img/ds-array.57b5c83c.png"},ccef:function(t,n,e){},d8de:function(t,n,e){t.exports=e.p+"img/ds-queue.0fbb153e.png"},f19f:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"margin-bottom":"70px"}},[e("b-container",[e("van-list",{attrs:{finished:t.finished,"finished-text":"No more events","loading-text":"Loading..."},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},[e("b-row",[e("b-col",{attrs:{cols:"6",lg:"6",md:"6","no-gutters":"true",sm:"6"}},[e("b-row",t._l(t.eventList,(function(n,i){return e("b-col",{key:i,style:{padding:"0px",margin:"0px"},attrs:{cols:"12",lg:"6",md:"12","no-gutters":"true",sm:"12",xl:"6"}},[e("div",{staticClass:"cr-van-card"},[e("img",{staticStyle:{width:"100%"},attrs:{src:n.imgUrl}}),e("div",[t._v(t._s(n.name))]),e("p",{staticClass:"event-desc"},[t._v(t._s(n.desc))]),e("van-button",{attrs:{block:"",color:"#8ba38d",text:"More"},on:{click:function(e){return t.viewQuestions(n.id)}}})],1)])})),1)],1),e("b-col",{attrs:{cols:"6",lg:"6",md:"6","no-gutters":"true",sm:"6"}},[e("b-row",t._l(t.eventList2,(function(n,i){return e("b-col",{key:i,style:{padding:"0px",margin:"0px"},attrs:{cols:"12",lg:"6",md:"12","no-gutters":"true",sm:"12",xl:"6"}},[e("div",{staticClass:"cr-van-card"},[e("img",{staticStyle:{width:"100%"},attrs:{src:n.imgUrl}}),e("div",[t._v(t._s(n.name))]),e("p",{staticClass:"event-desc"},[t._v(t._s(n.desc))]),e("van-button",{attrs:{block:"",color:"#8ba38d",text:"More"},on:{click:function(e){return t.viewQuestions(n.id)}}})],1)])})),1)],1)],1)],1)],1)],1)},s=[],o=(e("b0c0"),{data:function(){return{imageList:[e("b293"),e("d8de"),e("c03b"),e("05b0"),e("c3a9"),e("5874")],eventList:[],eventList2:[],loading:!1,finished:!1}},methods:{viewQuestions:function(t){this.$router.push({path:"/events/view/"+t})},onLoad:function(){var t=this;this.$axios({method:"post",url:"/get-recommendation",data:{numEvent:10},withCredentials:!1}).then((function(n){var e=n.data.recommendations;for(var i in e){var s=e[i],o={name:s.name,rating:5*s.score,id:s._id,desc:s.details,date:s.date,time:s.time,host:s.host,location:s.location,imgUrl:t.imageList[t.eventList.length%6]};console.log(o),i%2===0?t.eventList.push(o):t.eventList2.push(o)}console.log(t.eventList,t.eventList2),t.eventList.length>10?(t.loading=!1,t.finished=!0):t.onLoad()}))}}}),a=o,c=(e("7a7d"),e("2877")),r=Object(c["a"])(a,i,s,!1,null,"6b00ca3e",null);n["default"]=r.exports}}]);
//# sourceMappingURL=view-events-index-vue.4012b8f5.js.map