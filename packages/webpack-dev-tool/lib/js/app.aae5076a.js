(function(e){function s(s){for(var t,j,r=s[0],d=s[1],o=s[2],l=0,f=[];l<r.length;l++)j=r[l],Object.prototype.hasOwnProperty.call(a,j)&&a[j]&&f.push(a[j][0]),a[j]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);b&&b(s);while(f.length)f.shift()();return c.push.apply(c,o||[]),n()}function n(){for(var e,s=0;s<c.length;s++){for(var n=c[s],t=!0,r=1;r<n.length;r++){var d=n[r];0!==a[d]&&(t=!1)}t&&(c.splice(s--,1),e=j(j.s=n[0]))}return e}var t={},a={app:0},c=[];function j(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,j),n.l=!0,n.exports}j.m=e,j.c=t,j.d=function(e,s,n){j.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:n})},j.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},j.t=function(e,s){if(1&s&&(e=j(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(j.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var t in e)j.d(n,t,function(s){return e[s]}.bind(null,t));return n},j.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return j.d(s,"a",s),s},j.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},j.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=s,r=r.slice();for(var o=0;o<r.length;o++)s(r[o]);var b=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,s,n){e.exports=n("56d7")},3113:function(e,s,n){var t={"./af":"f064","./af.js":"f064","./ar":"35c3","./ar-dz":"d68a","./ar-dz.js":"d68a","./ar-kw":"49cd","./ar-kw.js":"49cd","./ar-ly":"1b3b","./ar-ly.js":"1b3b","./ar-ma":"847d","./ar-ma.js":"847d","./ar-sa":"bb68","./ar-sa.js":"bb68","./ar-tn":"e4cc","./ar-tn.js":"e4cc","./ar.js":"35c3","./az":"6555","./az.js":"6555","./be":"9106","./be.js":"9106","./bg":"fa7e","./bg.js":"fa7e","./bm":"4d38","./bm.js":"4d38","./bn":"6881","./bn-bd":"953a","./bn-bd.js":"953a","./bn.js":"6881","./bo":"4166","./bo.js":"4166","./br":"890a","./br.js":"890a","./bs":"10be","./bs.js":"10be","./ca":"bddf","./ca.js":"bddf","./cs":"2bed","./cs.js":"2bed","./cv":"26dd","./cv.js":"26dd","./cy":"b168","./cy.js":"b168","./da":"61c1","./da.js":"61c1","./de":"04a6","./de-at":"3aaf","./de-at.js":"3aaf","./de-ch":"8476","./de-ch.js":"8476","./de.js":"04a6","./dv":"c3c1","./dv.js":"c3c1","./el":"b526","./el.js":"b526","./en-au":"1e0c","./en-au.js":"1e0c","./en-ca":"6724","./en-ca.js":"6724","./en-gb":"7b16","./en-gb.js":"7b16","./en-ie":"c8ac","./en-ie.js":"c8ac","./en-il":"4c1e","./en-il.js":"4c1e","./en-in":"4bbd","./en-in.js":"4bbd","./en-nz":"883c","./en-nz.js":"883c","./en-sg":"cd2d","./en-sg.js":"cd2d","./eo":"e1bb","./eo.js":"e1bb","./es":"18d3","./es-do":"47b9","./es-do.js":"47b9","./es-mx":"164a","./es-mx.js":"164a","./es-us":"36cb","./es-us.js":"36cb","./es.js":"18d3","./et":"64e8","./et.js":"64e8","./eu":"9050","./eu.js":"9050","./fa":"f028","./fa.js":"f028","./fi":"bdc3","./fi.js":"bdc3","./fil":"de0d","./fil.js":"de0d","./fo":"f188","./fo.js":"f188","./fr":"63c2","./fr-ca":"b7e6","./fr-ca.js":"b7e6","./fr-ch":"48f5","./fr-ch.js":"48f5","./fr.js":"63c2","./fy":"4f73","./fy.js":"4f73","./ga":"368c","./ga.js":"368c","./gd":"1896","./gd.js":"1896","./gl":"31d0","./gl.js":"31d0","./gom-deva":"4098","./gom-deva.js":"4098","./gom-latn":"e63d","./gom-latn.js":"e63d","./gu":"7d8d","./gu.js":"7d8d","./he":"0020","./he.js":"0020","./hi":"dd6a","./hi.js":"dd6a","./hr":"3a73","./hr.js":"3a73","./hu":"1109","./hu.js":"1109","./hy-am":"30d7","./hy-am.js":"30d7","./id":"d32a","./id.js":"d32a","./is":"4e63","./is.js":"4e63","./it":"c43f","./it-ch":"7e84","./it-ch.js":"7e84","./it.js":"c43f","./ja":"8ce9","./ja.js":"8ce9","./jv":"94eb","./jv.js":"94eb","./ka":"0403","./ka.js":"0403","./kk":"88d8","./kk.js":"88d8","./km":"4d4c","./km.js":"4d4c","./kn":"850c","./kn.js":"850c","./ko":"64d6","./ko.js":"64d6","./ku":"4b44","./ku.js":"4b44","./ky":"24ef","./ky.js":"24ef","./lb":"be7f","./lb.js":"be7f","./lo":"8272","./lo.js":"8272","./lt":"e8f0","./lt.js":"e8f0","./lv":"60a7","./lv.js":"60a7","./me":"7774","./me.js":"7774","./mi":"8539","./mi.js":"8539","./mk":"7df5","./mk.js":"7df5","./ml":"7a32","./ml.js":"7a32","./mn":"448b","./mn.js":"448b","./mr":"08f2","./mr.js":"08f2","./ms":"7791","./ms-my":"b784","./ms-my.js":"b784","./ms.js":"7791","./mt":"d4a5","./mt.js":"d4a5","./my":"2ec3","./my.js":"2ec3","./nb":"87e5","./nb.js":"87e5","./ne":"d894","./ne.js":"d894","./nl":"8ec6","./nl-be":"fa1e","./nl-be.js":"fa1e","./nl.js":"8ec6","./nn":"9a1d","./nn.js":"9a1d","./oc-lnc":"cd7f","./oc-lnc.js":"cd7f","./pa-in":"3ba6","./pa-in.js":"3ba6","./pl":"f017","./pl.js":"f017","./pt":"0c38","./pt-br":"b879","./pt-br.js":"b879","./pt.js":"0c38","./ro":"6da0","./ro.js":"6da0","./ru":"79cb","./ru.js":"79cb","./sd":"7bd2","./sd.js":"7bd2","./se":"0994","./se.js":"0994","./si":"4cee","./si.js":"4cee","./sk":"2be2","./sk.js":"2be2","./sl":"40ae","./sl.js":"40ae","./sq":"bf74","./sq.js":"bf74","./sr":"35dc","./sr-cyrl":"3c6b","./sr-cyrl.js":"3c6b","./sr.js":"35dc","./ss":"d81f","./ss.js":"d81f","./sv":"585e","./sv.js":"585e","./sw":"e15b","./sw.js":"e15b","./ta":"770d","./ta.js":"770d","./te":"e0c0","./te.js":"e0c0","./tet":"fe18","./tet.js":"fe18","./tg":"3e85","./tg.js":"3e85","./th":"398d","./th.js":"398d","./tk":"ccee","./tk.js":"ccee","./tl-ph":"502f","./tl-ph.js":"502f","./tlh":"7162","./tlh.js":"7162","./tr":"12a6","./tr.js":"12a6","./tzl":"7cdf","./tzl.js":"7cdf","./tzm":"e9c6","./tzm-latn":"a5d0","./tzm-latn.js":"a5d0","./tzm.js":"e9c6","./ug-cn":"27e4","./ug-cn.js":"27e4","./uk":"e8e9","./uk.js":"e8e9","./ur":"40d1","./ur.js":"40d1","./uz":"84bc","./uz-latn":"2aa3","./uz-latn.js":"2aa3","./uz.js":"84bc","./vi":"1272","./vi.js":"1272","./x-pseudo":"5bb75","./x-pseudo.js":"5bb75","./yo":"4038","./yo.js":"4038","./zh-cn":"6e33","./zh-cn.js":"6e33","./zh-hk":"2450","./zh-hk.js":"2450","./zh-mo":"e414","./zh-mo.js":"e414","./zh-tw":"c410","./zh-tw.js":"c410"};function a(e){var s=c(e);return n(s)}function c(e){if(!n.o(t,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t[e]}a.keys=function(){return Object.keys(t)},a.resolve=c,e.exports=a,a.id="3113"},"56d7":function(e,s,n){"use strict";n.r(s);n("d499");var t=n("612c"),a=(n("f653"),n("dd45")),c=(n("9531"),n("26d3"),n("2007"),n("41ab"),n("4430"));function j(e,s,n,t,a,j){var r=Object(c["z"])("Box");return Object(c["v"])(),Object(c["j"])(r)}n("6595");var r=n("1ed6"),d=(n("0709"),n("5935")),o=n("14e8"),b=n("7d89"),l=n.n(b),f=Object(c["m"])({setup:function(){var e=Object(c["y"])(!1),s=Object(c["y"])(l.a.get("_domain")),n=Object(c["y"])(window._domains||[]),j=function(e){s.value=e},b=function(){e.value=!1,l.a.set("_domain",s.value),a["a"].success("设置成功")};return function(){return Object(c["l"])(c["b"],null,[Object(c["l"])(t["a"],{class:"btn",type:"primary",style:{width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",left:"0px",bottom:"5px",opacity:"0.7",padding:"0px"},onClick:function(){return e.value=!0}},{default:function(){return[Object(c["l"])(o["a"],{style:{fontSize:"30px"}},null)]}}),Object(c["l"])(r["a"],{cancelText:"close",okText:"confirm",visible:e.value,onCancel:function(){e.value=!1},onOk:b},{default:function(){return[Object(c["l"])(d["a"],{value:s.value,options:n.value,style:"width: 200px",placeholder:"input or select",onChange:j},null)]}})])}}}),u=f,i={name:"App",components:{Box:u}};i.render=j;var p=i,m=Object(c["i"])(p);m.config.productionTip=!1,m.config.globalProperties.$message=a["a"],m.use(t["a"]),m.mount("#dev-tool")}});