webpackJsonp([5],{"4n9X":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("Xxa5"),i=e.n(n),s=e("exGp"),o=e.n(s),r=e("Dd8w"),c=e.n(r),u=e("NYxO"),l={data:function(){return{text:"",pagination:{pageNumber:0,pageSize:10,total:0},communityData:[],showMore:!1,timer:null}},computed:c()({},Object(u.d)(["isLogin","userInfo"])),watch:{},methods:{submit:function(){var t=this;return o()(i.a.mark(function a(){var e;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(t.isLogin){a.next=2;break}return a.abrupt("return",console.log("没有登录"));case 2:return a.next=4,service.post(t,"/pushMood",{title:t.text});case 4:200===(e=a.sent).code?(t.getComunityData(!1),t.text=""):console.log(e.msg);case 6:case"end":return a.stop()}},a,t)}))()},getComunityData:function(t){var a=this;return o()(i.a.mark(function e(){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,service.post(a,"/community",{startId:a.communityData.length?t?a.communityData[a.communityData.length-1].id:a.communityData[0].id:0,direction:Boolean(t),pageNumber:0,pageSize:a.pagination.pageSize});case 2:200===(n=e.sent).code?!0===t||void 0===t?(a.communityData=a.communityData.concat(n.data.list),a.pagination.total=n.data.total,a.showMore=n.data.total>n.data.list.length):a.communityData=n.data.list.concat(a.communityData):console.log(n.msg);case 4:case"end":return e.stop()}},e,a)}))()},init:function(){var t=this;this.getComunityData(),this.timer=setInterval(function(){t.getComunityData(!1)},1e4)}},created:function(){this.init()},mounted:function(){},destroyed:function(){clearInterval(this.timer),this.timer=null}},m={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"forum"},[e("div",{staticClass:"top"},[e("div",{staticClass:"label"},[t._v("我来写点东西：")]),t._v(" "),e("i-input",{attrs:{type:"textarea",rows:4},model:{value:t.text,callback:function(a){t.text=a},expression:"text"}}),t._v(" "),e("div",{staticClass:"btn"},[e("i-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("发表")])],1)],1),t._v(" "),e("div",{staticClass:"title"},[t._v("社区空间")]),t._v(" "),e("div",{staticClass:"content"},[t._l(t.communityData,function(a,n){return e("div",{key:n,staticClass:"item"},[e("div",{staticClass:"author"},[t._v("@"+t._s(a.username)+"：")]),t._v(" "),e("div",{staticClass:"title"},[t._v(t._s(a.title)),e("em")]),t._v(" "),t._m(0,!0)])}),t._v(" "),t.showMore?e("div",{staticClass:"more"},[e("span",{on:{click:function(a){++t.pagination.pageNumber,t.getComunityData(!0)}}},[t._v("加载更多>>")])]):t._e()],2)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"btn"},[a("div",{staticClass:"left"},[a("span",[this._v("评论")])])])}]};var v=e("VU/8")(l,m,!1,function(t){e("HTIk")},"data-v-ae127268",null);a.default=v.exports},HTIk:function(t,a){}});
//# sourceMappingURL=5.4c88f7f52e9af304b17a.js.map