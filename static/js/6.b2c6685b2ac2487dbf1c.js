webpackJsonp([6],{120:function(t,e,s){s(203);var n=s(35)(s(178),s(229),null,null);t.exports=n.exports},121:function(t,e,s){"use strict";function n(t){var e="",s=t.url,n=Object(t.params);for(var i in n)e&&(e+="&"),e+=i+"="+encodeURIComponent(n[i]);return s+"?"+e}function i(t,e){window.jsonp1=function(t){window.jsonp1=void 0,document.body.removeChild(s),e(t)};var s=document.createElement("script");s.src=t,document.body.appendChild(s)}function a(t,e){return i(n("string"==typeof t?f[t]:(f[t.name].params=c()({},f[t.name].params,t.params),f[t.name])),e)}e.a=i,e.b=a;var o=s(58),c=s.n(o),r=s(123),l=s.n(r),u=s(19),p=s.n(u),m={g_tk:1604785682,uin:494873674,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5",needNewCode:1,jsonpCallback:"jsonp1",_:(new Date).getTime()},f={topList:{url:"https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",params:m},rankList:{url:"https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",params:p()({},m,{type:"top",page:"detail",tpl:3})},recommend:{url:"https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg",params:p()({},m,l()({pic:500,json:1,type:1,utf8:1,nosign:1,onlysong:0},"nosign",1))},indexMsg:{url:"https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",params:p()({},m)},hotkey:{url:"https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg",params:p()({},m)},search:{url:"https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg",params:p()({},m,{is_xml:0})}}},122:function(t,e,s){t.exports={default:s(124),__esModule:!0}},123:function(t,e,s){"use strict";e.__esModule=!0;var n=s(122),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t,e,s){return e in t?(0,i.default)(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}},124:function(t,e,s){s(125);var n=s(6).Object;t.exports=function(t,e,s){return n.defineProperty(t,e,s)}},125:function(t,e,s){var n=s(15);n(n.S+n.F*!s(7),"Object",{defineProperty:s(3).f})},178:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(121),i=s(36);s.n(i);e.default={name:"topList",created:function(){var t=this;s.i(n.b)("topList",function(e){t.topList=e.data.topList})},data:function(){return{topList:{}}}}},191:function(t,e,s){e=t.exports=s(109)(),e.push([t.i,".music-list>li{margin:0 10px 10px}","",{version:3,sources:["/Users/zhenhuadeng/Desktop/demo/vue-scaffold/src/components/topList.vue"],names:[],mappings:"AAQA,eACE,kBAAoB,CACrB",file:"topList.vue",sourcesContent:['\n@charset "UTF-8";\n/* ==================================================\n * \t\t\t  全局Sass变量\n * \t这里简单介绍下CSS的布局，这里采用主流的Flexbox,\n *  在高度上采取固定Px，宽度自适应, 在布局上有参考下\n *  Framework7 的布局,在一些宽度上采用rem来优化多终端的适应\n * ================================================= */\n.music-list > li {\n  margin: 0 10px 10px;\n}\n'],sourceRoot:""}])},203:function(t,e,s){var n=s(191);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(110)("c994cce2",n,!0)},229:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("mt-header",{staticClass:"music-header",attrs:{fixed:"",title:"排行"}},[s("fallback",{slot:"left"})],1),t._v(" "),s("div",{staticClass:"page-content"},[s("ul",{staticClass:"music-list"},[s("li",[s("mt-cell",{staticClass:"music-cell-type1",attrs:{title:"Q Q 音 乐 巅 峰 榜"}})],1),t._v(" "),t._l(t.topList,function(e){return s("router-link",{key:"item.id",attrs:{tag:"li",to:{name:"rankList",params:{id:e.id}}}},[s("mt-cell",{staticClass:"music-cell-type2"},[s("div",{staticClass:"listen-cover"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}]}),t._v(" "),s("span",{staticClass:"listen-count"},[s("i",{staticClass:"listen-icon"}),t._v("\n              "+t._s(t._f("listenFormat")(e.listenCount))+"万\n            ")]),t._v(" "),s("i",{staticClass:"listen-play"})]),t._v(" "),s("ul",{staticClass:"song-list",slot:"title"},t._l(e.songList,function(e,n){return s("li",{key:"index",staticClass:"song-item"},[t._v(" \n              "+t._s(n+1)+"\n              "+t._s(e.songname)+"\n              "),s("span",{staticClass:"song-singer"},[t._v(t._s("- "+e.singername))])])})),t._v(" "),s("i",{staticClass:"song-arrow",slot:"right"})])],1)})],2)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=6.b2c6685b2ac2487dbf1c.js.map