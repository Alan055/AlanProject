webpackJsonp([4],{"/ze0":function(t,r){},"2lQP":function(t,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=n("L6bb"),o=n.n(e),s={data:function(){return{username:"",email:"",password:"",passwordAgin:"",errorInfo:""}},computed:{},watch:{},methods:{reg:function(){return this.regular.username.test(this.username)?this.regular.email.test(this.email)?this.regular.password.test(this.password)?this.password===this.passwordAgin||(this.errorInfo="两次密码不一样"):this.errorInfo="密码输入规则不正确":this.errorInfo="邮箱输入规则不正确":this.errorInfo="账号输入规则不正确"},submit:function(){var t=this;!0===this.reg()&&service.post(this,"/register",{username:this.username,password:o()(this.password),email:this.email}).then(function(r){200===r.code?(console.log(r),t.jumpRouter("/")):t.errorInfo=r.msg})},init:function(){}},created:function(){this.init()},mounted:function(){}},i={render:function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"register"},[n("div",{staticClass:"form"},[n("div",{staticClass:"item"},[n("label",[t._v("用户名：")]),t._v(" "),n("i-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入用户名"},on:{"on-enter":t.submit},model:{value:t.username,callback:function(r){t.username=r},expression:"username"}})],1),t._v(" "),n("div",{staticClass:"item"},[n("label",[t._v("邮箱：")]),t._v(" "),n("i-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入邮箱"},on:{"on-enter":t.submit},model:{value:t.email,callback:function(r){t.email=r},expression:"email"}})],1),t._v(" "),n("div",{staticClass:"item"},[n("label",[t._v("密码：")]),t._v(" "),n("i-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入密码"},on:{"on-enter":t.submit},model:{value:t.password,callback:function(r){t.password=r},expression:"password"}})],1),t._v(" "),n("div",{staticClass:"item"},[n("label",[t._v("确认密码：")]),t._v(" "),n("i-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请再次输入密码"},on:{"on-enter":t.submit},model:{value:t.passwordAgin,callback:function(r){t.passwordAgin=r},expression:"passwordAgin"}})],1),t._v(" "),n("div",{staticClass:"item error"},[t.errorInfo?n("label",[t._v("错误信息：")]):t._e(),t._v(" "),t.errorInfo?n("span",{staticClass:"errorInfo"},[t._v(t._s(t.errorInfo))]):t._e(),t._v(" "),n("span",{staticClass:"forget",on:{click:function(r){return t.jumpRouter("/login")}}},[t._v("已有账号")])]),t._v(" "),n("div",{staticClass:"item"},[n("i-button",{attrs:{type:"primary",long:""},on:{click:t.submit}},[t._v("提交")])],1)])])},staticRenderFns:[]};var a=n("VU/8")(s,i,!1,function(t){n("/ze0")},"data-v-403f69e4",null);r.default=a.exports},"95Qu":function(t,r){var n,e;n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e={rotl:function(t,r){return t<<r|t>>>32-r},rotr:function(t,r){return t<<32-r|t>>>r},endian:function(t){if(t.constructor==Number)return 16711935&e.rotl(t,8)|4278255360&e.rotl(t,24);for(var r=0;r<t.length;r++)t[r]=e.endian(t[r]);return t},randomBytes:function(t){for(var r=[];t>0;t--)r.push(Math.floor(256*Math.random()));return r},bytesToWords:function(t){for(var r=[],n=0,e=0;n<t.length;n++,e+=8)r[e>>>5]|=t[n]<<24-e%32;return r},wordsToBytes:function(t){for(var r=[],n=0;n<32*t.length;n+=8)r.push(t[n>>>5]>>>24-n%32&255);return r},bytesToHex:function(t){for(var r=[],n=0;n<t.length;n++)r.push((t[n]>>>4).toString(16)),r.push((15&t[n]).toString(16));return r.join("")},hexToBytes:function(t){for(var r=[],n=0;n<t.length;n+=2)r.push(parseInt(t.substr(n,2),16));return r},bytesToBase64:function(t){for(var r=[],e=0;e<t.length;e+=3)for(var o=t[e]<<16|t[e+1]<<8|t[e+2],s=0;s<4;s++)8*e+6*s<=8*t.length?r.push(n.charAt(o>>>6*(3-s)&63)):r.push("=");return r.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],e=0,o=0;e<t.length;o=++e%4)0!=o&&r.push((n.indexOf(t.charAt(e-1))&Math.pow(2,-2*o+8)-1)<<2*o|n.indexOf(t.charAt(e))>>>6-2*o);return r}},t.exports=e},L6bb:function(t,r,n){var e,o,s,i,a;e=n("95Qu"),o=n("iFDI").utf8,s=n("Re3r"),i=n("iFDI").bin,(a=function(t,r){t.constructor==String?t=r&&"binary"===r.encoding?i.stringToBytes(t):o.stringToBytes(t):s(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var n=e.bytesToWords(t),u=8*t.length,c=1732584193,l=-271733879,f=-1732584194,h=271733878,p=0;p<n.length;p++)n[p]=16711935&(n[p]<<8|n[p]>>>24)|4278255360&(n[p]<<24|n[p]>>>8);n[u>>>5]|=128<<u%32,n[14+(u+64>>>9<<4)]=u;var d=a._ff,v=a._gg,g=a._hh,m=a._ii;for(p=0;p<n.length;p+=16){var b=c,_=l,y=f,w=h;l=m(l=m(l=m(l=m(l=g(l=g(l=g(l=g(l=v(l=v(l=v(l=v(l=d(l=d(l=d(l=d(l,f=d(f,h=d(h,c=d(c,l,f,h,n[p+0],7,-680876936),l,f,n[p+1],12,-389564586),c,l,n[p+2],17,606105819),h,c,n[p+3],22,-1044525330),f=d(f,h=d(h,c=d(c,l,f,h,n[p+4],7,-176418897),l,f,n[p+5],12,1200080426),c,l,n[p+6],17,-1473231341),h,c,n[p+7],22,-45705983),f=d(f,h=d(h,c=d(c,l,f,h,n[p+8],7,1770035416),l,f,n[p+9],12,-1958414417),c,l,n[p+10],17,-42063),h,c,n[p+11],22,-1990404162),f=d(f,h=d(h,c=d(c,l,f,h,n[p+12],7,1804603682),l,f,n[p+13],12,-40341101),c,l,n[p+14],17,-1502002290),h,c,n[p+15],22,1236535329),f=v(f,h=v(h,c=v(c,l,f,h,n[p+1],5,-165796510),l,f,n[p+6],9,-1069501632),c,l,n[p+11],14,643717713),h,c,n[p+0],20,-373897302),f=v(f,h=v(h,c=v(c,l,f,h,n[p+5],5,-701558691),l,f,n[p+10],9,38016083),c,l,n[p+15],14,-660478335),h,c,n[p+4],20,-405537848),f=v(f,h=v(h,c=v(c,l,f,h,n[p+9],5,568446438),l,f,n[p+14],9,-1019803690),c,l,n[p+3],14,-187363961),h,c,n[p+8],20,1163531501),f=v(f,h=v(h,c=v(c,l,f,h,n[p+13],5,-1444681467),l,f,n[p+2],9,-51403784),c,l,n[p+7],14,1735328473),h,c,n[p+12],20,-1926607734),f=g(f,h=g(h,c=g(c,l,f,h,n[p+5],4,-378558),l,f,n[p+8],11,-2022574463),c,l,n[p+11],16,1839030562),h,c,n[p+14],23,-35309556),f=g(f,h=g(h,c=g(c,l,f,h,n[p+1],4,-1530992060),l,f,n[p+4],11,1272893353),c,l,n[p+7],16,-155497632),h,c,n[p+10],23,-1094730640),f=g(f,h=g(h,c=g(c,l,f,h,n[p+13],4,681279174),l,f,n[p+0],11,-358537222),c,l,n[p+3],16,-722521979),h,c,n[p+6],23,76029189),f=g(f,h=g(h,c=g(c,l,f,h,n[p+9],4,-640364487),l,f,n[p+12],11,-421815835),c,l,n[p+15],16,530742520),h,c,n[p+2],23,-995338651),f=m(f,h=m(h,c=m(c,l,f,h,n[p+0],6,-198630844),l,f,n[p+7],10,1126891415),c,l,n[p+14],15,-1416354905),h,c,n[p+5],21,-57434055),f=m(f,h=m(h,c=m(c,l,f,h,n[p+12],6,1700485571),l,f,n[p+3],10,-1894986606),c,l,n[p+10],15,-1051523),h,c,n[p+1],21,-2054922799),f=m(f,h=m(h,c=m(c,l,f,h,n[p+8],6,1873313359),l,f,n[p+15],10,-30611744),c,l,n[p+6],15,-1560198380),h,c,n[p+13],21,1309151649),f=m(f,h=m(h,c=m(c,l,f,h,n[p+4],6,-145523070),l,f,n[p+11],10,-1120210379),c,l,n[p+2],15,718787259),h,c,n[p+9],21,-343485551),c=c+b>>>0,l=l+_>>>0,f=f+y>>>0,h=h+w>>>0}return e.endian([c,l,f,h])})._ff=function(t,r,n,e,o,s,i){var a=t+(r&n|~r&e)+(o>>>0)+i;return(a<<s|a>>>32-s)+r},a._gg=function(t,r,n,e,o,s,i){var a=t+(r&e|n&~e)+(o>>>0)+i;return(a<<s|a>>>32-s)+r},a._hh=function(t,r,n,e,o,s,i){var a=t+(r^n^e)+(o>>>0)+i;return(a<<s|a>>>32-s)+r},a._ii=function(t,r,n,e,o,s,i){var a=t+(n^(r|~e))+(o>>>0)+i;return(a<<s|a>>>32-s)+r},a._blocksize=16,a._digestsize=16,t.exports=function(t,r){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var n=e.wordsToBytes(a(t,r));return r&&r.asBytes?n:r&&r.asString?i.bytesToString(n):e.bytesToHex(n)}},Re3r:function(t,r){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},iFDI:function(t,r){var n={utf8:{stringToBytes:function(t){return n.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(n.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var r=[],n=0;n<t.length;n++)r.push(255&t.charCodeAt(n));return r},bytesToString:function(t){for(var r=[],n=0;n<t.length;n++)r.push(String.fromCharCode(t[n]));return r.join("")}}};t.exports=n}});
//# sourceMappingURL=4.45b8e5dded1b0cdd5789.js.map