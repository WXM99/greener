(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-TabbarFrame-vue"],{"552f":function(e,t,a){},6524:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("router-view"),a("van-popup",{style:{height:"70px"},attrs:{closeable:"",round:"",position:"top"},model:{value:e.showMsg,callback:function(t){e.showMsg=t},expression:"showMsg"}},[a("div",{staticClass:"pop-message"},[e._v(e._s(this.message))])]),a("van-popup",{style:{height:"90%"},attrs:{closeable:"",round:"",position:"top"},model:{value:e.showPop,callback:function(t){e.showPop=t},expression:"showPop"}},[a("div",{staticClass:"pop-message"},[a("van-cell-group",{attrs:{inset:""}},[a("van-field",{attrs:{rules:[{required:!0,message:"Please fill event name"}],label:"Event Name",name:"Event Name",placeholder:"Event Name"},model:{value:e.eventName,callback:function(t){e.eventName=t},expression:"eventName"}}),a("van-field",{attrs:{rules:[{required:!0,message:"Please fill event desc"}],label:"Event Desc",name:"Event Desc",placeholder:"Event Desc"},model:{value:e.eventDesc,callback:function(t){e.eventDesc=t},expression:"eventDesc"}})],1),a("div",{staticClass:"cr-van-card"},[a("van-button",{attrs:{block:"",color:"#8ba38d"},on:{click:function(t){return e.submit()}}},[e._v(" Submit ")])],1)],1)]),a("van-tabbar",{attrs:{route:"","active-color":"#afbc90","inactive-color":"#7f8182"}},[a("van-tabbar-item",{attrs:{replace:"",icon:"add-o"},on:{click:e.showPopup}},[e._v("New")]),a("van-tabbar-item",{attrs:{replace:"",to:"/events",icon:"fire-o"}},[e._v("Trending")]),a("van-tabbar-item",{attrs:{replace:"",to:"/matching",icon:"star-o"}},[e._v("Match")]),a("van-tabbar-item",{attrs:{replace:"",to:"/",icon:"user-circle-o"}},[e._v("Me")])],1)],1)},n=[],o={data:function(){return{msgNum:0,showPop:!1,showMsg:!1,message:"Upload Successfully",eventName:"",eventDesc:""}},methods:{showPopup:function(){this.showPop=!0},submit:function(){this.showPop=!1,this.showMsg=!0}}},c=o,l=(a("9269"),a("2877")),i=Object(l["a"])(c,s,n,!1,null,null,null);t["default"]=i.exports},9269:function(e,t,a){"use strict";var s=a("552f"),n=a.n(s);n.a}}]);
//# sourceMappingURL=view-TabbarFrame-vue.6ab567b2.js.map