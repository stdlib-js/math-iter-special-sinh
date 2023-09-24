// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function e(t){return"number"==typeof t}function n(t){var r,e="";for(r=0;r<t;r++)e+="0";return e}function o(t,r,e){var o=!1,i=r-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(o=!0,t=t.substr(1)),t=e?t+n(i):n(i)+t,o&&(t="-"+t)),t}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(t){var r,n,a;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=t.arg,a=parseInt(n,10),!isFinite(a)){if(!e(n))throw new Error("invalid integer. Value: "+n);a=0}return a<0&&("u"===t.specifier||10!==r)&&(a=4294967295+a+1),a<0?(n=(-a).toString(r),t.precision&&(n=o(n,t.precision,t.padRight)),n="-"+n):(n=a.toString(r),a||t.precision?t.precision&&(n=o(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===r&&(t.alternate&&(n="0x"+n),n=t.specifier===u.call(t.specifier)?u.call(n):i.call(n)),8===r&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(t){return"string"==typeof t}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,d=/\.0$/,_=/\.0*e/,w=/(\..*[^0])0*e/;function h(t){var r,n,o=parseFloat(t.arg);if(!isFinite(o)){if(!e(t.arg))throw new Error("invalid floating-point number. Value: "+n);o=t.arg}switch(t.specifier){case"e":case"E":n=o.toExponential(t.precision);break;case"f":case"F":n=o.toFixed(t.precision);break;case"g":case"G":l(o)<1e-4?((r=t.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(t.precision),t.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,_,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,b,"e-0$1"),t.alternate&&(n=s.call(n,g,"$1."),n=s.call(n,v,"$1.e")),o>=0&&t.sign&&(n=t.sign+n),n=t.specifier===p.call(t.specifier)?p.call(n):f.call(n)}function m(t){var r,e="";for(r=0;r<t;r++)e+=" ";return e}function j(t,r,e){var n=r-t.length;return n<0?t:t=e?t+m(n):m(n)+t}var S=String.fromCharCode,A=isNaN,E=Array.isArray;function T(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function O(t){var r,e,n,i,u,l,f,p,s;if(!E(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(l="",f=1,p=0;p<t.length;p++)if(c(n=t[p]))l+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,A(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=a(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!A(n.arg)){if((u=parseInt(n.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(u)?String(n.arg):S(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function I(t){var r,e,n,o;for(e=[],o=0,n=F.exec(t);n;)(r=t.slice(o,F.lastIndex-n[0].length)).length&&e.push(r),e.push(P(n)),o=F.lastIndex,n=F.exec(t);return(r=t.slice(o)).length&&e.push(r),e}function V(t){return"string"==typeof t}function x(t){var r,e,n;if(!V(t))throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=I(t),(e=new Array(arguments.length))[0]=r,n=1;n<e.length;n++)e[n]=arguments[n];return O.apply(null,e)}var k,N=Object.prototype,U=N.toString,B=N.__defineGetter__,G=N.__defineSetter__,C=N.__lookupGetter__,L=N.__lookupSetter__;k=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===U.call(t))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===U.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(C.call(t,r)||L.call(t,r)?(n=t.__proto__,t.__proto__=N,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&B&&B.call(t,r,e.get),u&&G&&G.call(t,r,e.set),t};var M=k;function R(t,r,e){M(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var $=/./;function H(t){return"boolean"==typeof t}function W(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var X=W();function Y(){return X&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,z=Object.prototype.hasOwnProperty;function q(t,r){return null!=t&&z.call(t,r)}var D="function"==typeof Symbol?Symbol:void 0,J="function"==typeof D?D.toStringTag:"",K=Y()?function(t){var r,e,n;if(null==t)return Z.call(t);e=t[J],r=q(t,J);try{t[J]=void 0}catch(r){return Z.call(t)}return n=Z.call(t),r?t[J]=e:delete t[J],n}:function(t){return Z.call(t)},Q=Boolean,tt=Boolean.prototype.toString,rt=Y();function et(t){return"object"==typeof t&&(t instanceof Q||(rt?function(t){try{return tt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===K(t)))}function nt(t){return H(t)||et(t)}function ot(){return new Function("return this;")()}R(nt,"isPrimitive",H),R(nt,"isObject",et);var it="object"==typeof self?self:null,ut="object"==typeof window?window:null,at="object"==typeof globalThis?globalThis:null,ct=function(t){if(arguments.length){if(!H(t))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return ot()}if(at)return at;if(it)return it;if(ut)return ut;throw new Error("unexpected error. Unable to resolve global object.")}(),lt=ct.document&&ct.document.childNodes,ft=Int8Array;function pt(){return/^\s*function\s*([^(]*)/i}var st=/^\s*function\s*([^(]*)/i;R(pt,"REGEXP",st);var yt,bt=W(),gt=Object.prototype.toString,vt="function"==typeof D?D.toStringTag:"",dt=bt&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return gt.call(t);e=t[vt],r=q(t,vt);try{t[vt]=void 0}catch(r){return gt.call(t)}return n=gt.call(t),r?t[vt]=e:delete t[vt],n}:function(t){return gt.call(t)};yt=Array.isArray?Array.isArray:function(t){return"[object Array]"===dt(t)};var _t=yt;function wt(t){return null!==t&&"object"==typeof t}var ht=function(t){if("function"!=typeof t)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!_t(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(wt);function mt(t){var r,e,n,o;if(("Object"===(e=K(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=st.exec(n.toString()))return r[1]}return wt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}R(wt,"isObjectLikeArray",ht);var jt="function"==typeof $||"object"==typeof ft||"function"==typeof lt?function(t){return mt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"==(r=typeof t)?mt(t).toLowerCase():r};function St(t){return"function"===jt(t)}var At,Et=/./,Tt="function"==typeof Object.defineProperty?Object.defineProperty:null,Ot=Object.defineProperty,Ft=Object.prototype,Pt=Ft.toString,It=Ft.__defineGetter__,Vt=Ft.__defineSetter__,xt=Ft.__lookupGetter__,kt=Ft.__lookupSetter__;At=function(){try{return Tt({},"x",{}),!0}catch(t){return!1}}()?Ot:function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===Pt.call(t))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===Pt.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(xt.call(t,r)||kt.call(t,r)?(n=t.__proto__,t.__proto__=Ft,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&It&&It.call(t,r,e.get),u&&Vt&&Vt.call(t,r,e.set),t};var Nt=At;function Ut(t,r,e){Nt(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Bt(t){return"boolean"==typeof t}var Gt=W();function Ct(){return Gt&&"symbol"==typeof Symbol.toStringTag}var Lt=Object.prototype.toString,Mt="function"==typeof D?D.toStringTag:"",Rt=Ct()?function(t){var r,e,n;if(null==t)return Lt.call(t);e=t[Mt],r=q(t,Mt);try{t[Mt]=void 0}catch(r){return Lt.call(t)}return n=Lt.call(t),r?t[Mt]=e:delete t[Mt],n}:function(t){return Lt.call(t)},$t=Boolean.prototype.toString,Ht=Ct();function Wt(t){return"object"==typeof t&&(t instanceof Q||(Ht?function(t){try{return $t.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===Rt(t)))}function Xt(t){return Bt(t)||Wt(t)}function Yt(){return new Function("return this;")()}Ut(Xt,"isPrimitive",Bt),Ut(Xt,"isObject",Wt);var Zt="object"==typeof self?self:null,zt="object"==typeof window?window:null,qt="object"==typeof globalThis?globalThis:null,Dt=function(t){if(arguments.length){if(!Bt(t))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Yt()}if(qt)return qt;if(Zt)return Zt;if(zt)return zt;throw new Error("unexpected error. Unable to resolve global object.")}(),Jt=Dt.document&&Dt.document.childNodes,Kt=Int8Array;function Qt(){return/^\s*function\s*([^(]*)/i}var tr=/^\s*function\s*([^(]*)/i;function rr(t){return null!==t&&"object"==typeof t}Ut(Qt,"REGEXP",tr);var er=function(t){if("function"!=typeof t)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!_t(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(rr);function nr(t){var r,e,n,o;if(("Object"===(e=Rt(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=tr.exec(n.toString()))return r[1]}return rr(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Ut(rr,"isObjectLikeArray",er);var or="function"==typeof Et||"object"==typeof Kt||"function"==typeof Jt?function(t){return nr(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"==(r=typeof t)?nr(t).toLowerCase():r};function ir(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&function(t){return"function"===or(t)}(t.next)}function ur(t){return"number"==typeof t}var ar=Number,cr=ar.prototype.toString,lr=Y();function fr(t){return"object"==typeof t&&(t instanceof ar||(lr?function(t){try{return cr.call(t),!0}catch(t){return!1}}(t):"[object Number]"===K(t)))}function pr(t){return ur(t)||fr(t)}R(pr,"isPrimitive",ur),R(pr,"isObject",fr);var sr,yr="function"==typeof D&&"symbol"==typeof D("foo")&&q(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null,br=/./,gr="function"==typeof Object.defineProperty?Object.defineProperty:null,vr=Object.defineProperty,dr=Object.prototype,_r=dr.toString,wr=dr.__defineGetter__,hr=dr.__defineSetter__,mr=dr.__lookupGetter__,jr=dr.__lookupSetter__;sr=function(){try{return gr({},"x",{}),!0}catch(t){return!1}}()?vr:function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===_r.call(t))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===_r.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(mr.call(t,r)||jr.call(t,r)?(n=t.__proto__,t.__proto__=dr,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&wr&&wr.call(t,r,e.get),u&&hr&&hr.call(t,r,e.set),t};var Sr=sr;function Ar(t,r,e){Sr(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Er(t){return"boolean"==typeof t}var Tr=W();function Or(){return Tr&&"symbol"==typeof Symbol.toStringTag}var Fr=Object.prototype.toString,Pr="function"==typeof D?D.toStringTag:"",Ir=Or()?function(t){var r,e,n;if(null==t)return Fr.call(t);e=t[Pr],r=q(t,Pr);try{t[Pr]=void 0}catch(r){return Fr.call(t)}return n=Fr.call(t),r?t[Pr]=e:delete t[Pr],n}:function(t){return Fr.call(t)},Vr=Boolean.prototype.toString,xr=Or();function kr(t){return"object"==typeof t&&(t instanceof Q||(xr?function(t){try{return Vr.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===Ir(t)))}function Nr(t){return Er(t)||kr(t)}function Ur(){return new Function("return this;")()}Ar(Nr,"isPrimitive",Er),Ar(Nr,"isObject",kr);var Br="object"==typeof self?self:null,Gr="object"==typeof window?window:null,Cr="object"==typeof globalThis?globalThis:null,Lr=function(t){if(arguments.length){if(!Er(t))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Ur()}if(Cr)return Cr;if(Br)return Br;if(Gr)return Gr;throw new Error("unexpected error. Unable to resolve global object.")}(),Mr=Lr.document&&Lr.document.childNodes,Rr=Int8Array;function $r(){return/^\s*function\s*([^(]*)/i}var Hr=/^\s*function\s*([^(]*)/i;function Wr(t){return null!==t&&"object"==typeof t}Ar($r,"REGEXP",Hr);var Xr=function(t){if("function"!=typeof t)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!_t(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Wr);function Yr(t){var r,e,n,o;if(("Object"===(e=Ir(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Hr.exec(n.toString()))return r[1]}return Wr(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Ar(Wr,"isObjectLikeArray",Xr);var Zr="function"==typeof br||"object"==typeof Rr||"function"==typeof Mr?function(t){return Yr(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"==(r=typeof t)?Yr(t).toLowerCase():r};function zr(t){return"function"===Zr(t)}var qr,Dr=Object,Jr=/./,Kr="function"==typeof Object.defineProperty?Object.defineProperty:null,Qr=Object.defineProperty,te=Object.prototype,re=te.toString,ee=te.__defineGetter__,ne=te.__defineSetter__,oe=te.__lookupGetter__,ie=te.__lookupSetter__;qr=function(){try{return Kr({},"x",{}),!0}catch(t){return!1}}()?Qr:function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===re.call(t))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===re.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(oe.call(t,r)||ie.call(t,r)?(n=t.__proto__,t.__proto__=te,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ee&&ee.call(t,r,e.get),u&&ne&&ne.call(t,r,e.set),t};var ue=qr;function ae(t,r,e){ue(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function ce(t){return"boolean"==typeof t}var le=W();function fe(){return le&&"symbol"==typeof Symbol.toStringTag}var pe=Object.prototype.toString,se="function"==typeof D?D.toStringTag:"",ye=fe()?function(t){var r,e,n;if(null==t)return pe.call(t);e=t[se],r=q(t,se);try{t[se]=void 0}catch(r){return pe.call(t)}return n=pe.call(t),r?t[se]=e:delete t[se],n}:function(t){return pe.call(t)},be=Boolean.prototype.toString,ge=fe();function ve(t){return"object"==typeof t&&(t instanceof Q||(ge?function(t){try{return be.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===ye(t)))}function de(t){return ce(t)||ve(t)}function _e(){return new Function("return this;")()}ae(de,"isPrimitive",ce),ae(de,"isObject",ve);var we="object"==typeof self?self:null,he="object"==typeof window?window:null,me="object"==typeof globalThis?globalThis:null,je=function(t){if(arguments.length){if(!ce(t))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return _e()}if(me)return me;if(we)return we;if(he)return he;throw new Error("unexpected error. Unable to resolve global object.")}(),Se=je.document&&je.document.childNodes,Ae=Int8Array;function Ee(){return/^\s*function\s*([^(]*)/i}var Te=/^\s*function\s*([^(]*)/i;function Oe(t){return null!==t&&"object"==typeof t}ae(Ee,"REGEXP",Te);var Fe=function(t){if("function"!=typeof t)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!_t(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Oe);function Pe(t){var r,e,n,o;if(("Object"===(e=ye(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Te.exec(n.toString()))return r[1]}return Oe(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}ae(Oe,"isObjectLikeArray",Fe);var Ie,Ve,xe="function"==typeof Jr||"object"==typeof Ae||"function"==typeof Se?function(t){return Pe(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"==(r=typeof t)?Pe(t).toLowerCase():r},ke=Object.getPrototypeOf;Ve=Object.getPrototypeOf,Ie="function"===xe(Ve)?ke:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===ye(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Ne=Ie,Ue=Object.prototype;function Be(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!_t(t)}(t)&&(r=function(t){return null==t?null:(t=Dr(t),Ne(t))}(t),!r||!q(t,"constructor")&&q(r,"constructor")&&zr(r.constructor)&&"[object Function]"===Ir(r.constructor)&&q(r,"isPrototypeOf")&&zr(r.isPrototypeOf)&&(r===Ue||function(t){var r;for(r in t)if(!q(t,r))return!1;return!0}(t)))}function Ge(t,r){return Be(r)?(q(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError(x("invalid argument. Options argument must be an object. Value: `%s`.",r))}function Ce(t,r,e){var n,o,i,u;if(!ir(t))throw new TypeError(x("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",t));if(!St(r))throw new TypeError(x("invalid argument. Second argument must be a function. Value: `%s`.",r));if(n={invalid:NaN},arguments.length>2&&(i=Ge(n,e)))throw i;return R(o={},"next",a),R(o,"return",c),yr&&St(t[yr])&&R(o,yr,l),o;function a(){var e;return u?{done:!0}:(e=t.next()).done?(u=!0,e):{value:ur(e.value)?r(e.value):n.invalid,done:!1}}function c(t){return u=!0,arguments.length?{value:t,done:!0}:{done:!0}}function l(){return Ce(t[yr](),r,n)}}var Le=Number.POSITIVE_INFINITY,Me=Number.NEGATIVE_INFINITY;function Re(t){return Math.abs(t)}function $e(t){return t!=t}var He=Math.floor,We=Math.ceil;function Xe(t){return t<0?We(t):He(t)}var Ye=Number.POSITIVE_INFINITY,Ze=Number.POSITIVE_INFINITY,ze=Number.POSITIVE_INFINITY;function qe(t){return t===ze||t===Me}var De,Je="function"==typeof Object.defineProperty?Object.defineProperty:null,Ke=Object.defineProperty,Qe=Object.prototype,tn=Qe.toString,rn=Qe.__defineGetter__,en=Qe.__defineSetter__,nn=Qe.__lookupGetter__,on=Qe.__lookupSetter__;De=function(){try{return Je({},"x",{}),!0}catch(t){return!1}}()?Ke:function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===tn.call(t))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===tn.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(nn.call(t,r)||on.call(t,r)?(n=t.__proto__,t.__proto__=Qe,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&rn&&rn.call(t,r,e.get),u&&en&&en.call(t,r,e.set),t};var un,an=De,cn=W(),ln=Object.prototype.toString,fn="function"==typeof D?D.toStringTag:"",pn=cn&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return ln.call(t);e=t[fn],r=q(t,fn);try{t[fn]=void 0}catch(r){return ln.call(t)}return n=ln.call(t),r?t[fn]=e:delete t[fn],n}:function(t){return ln.call(t)},sn="function"==typeof Uint32Array,yn="function"==typeof Uint32Array?Uint32Array:null,bn="function"==typeof Uint32Array?Uint32Array:void 0;un=function(){var t,r;if("function"!=typeof yn)return!1;try{t=function(t){return sn&&t instanceof Uint32Array||"[object Uint32Array]"===pn(t)}(r=new yn(r=[1,3.14,-3.14,4294967296,4294967297]))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?bn:function(){throw new Error("not implemented")};var gn,vn=un,dn=W(),_n=Object.prototype.toString,wn="function"==typeof D?D.toStringTag:"",hn=dn&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return _n.call(t);e=t[wn],r=q(t,wn);try{t[wn]=void 0}catch(r){return _n.call(t)}return n=_n.call(t),r?t[wn]=e:delete t[wn],n}:function(t){return _n.call(t)},mn="function"==typeof Float64Array,jn="function"==typeof Float64Array?Float64Array:null,Sn="function"==typeof Float64Array?Float64Array:void 0;gn=function(){var t,r;if("function"!=typeof jn)return!1;try{t=function(t){return mn&&t instanceof Float64Array||"[object Float64Array]"===hn(t)}(r=new jn([1,3.14,-3.14,NaN]))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?Sn:function(){throw new Error("not implemented")};var An,En=gn,Tn=W(),On=Object.prototype.toString,Fn="function"==typeof D?D.toStringTag:"",Pn=Tn&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return On.call(t);e=t[Fn],r=q(t,Fn);try{t[Fn]=void 0}catch(r){return On.call(t)}return n=On.call(t),r?t[Fn]=e:delete t[Fn],n}:function(t){return On.call(t)},In="function"==typeof Uint8Array,Vn="function"==typeof Uint8Array?Uint8Array:null,xn="function"==typeof Uint8Array?Uint8Array:void 0;An=function(){var t,r;if("function"!=typeof Vn)return!1;try{t=function(t){return In&&t instanceof Uint8Array||"[object Uint8Array]"===Pn(t)}(r=new Vn(r=[1,3.14,-3.14,256,257]))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?xn:function(){throw new Error("not implemented")};var kn,Nn=An,Un=W(),Bn=Object.prototype.toString,Gn="function"==typeof D?D.toStringTag:"",Cn=Un&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return Bn.call(t);e=t[Gn],r=q(t,Gn);try{t[Gn]=void 0}catch(r){return Bn.call(t)}return n=Bn.call(t),r?t[Gn]=e:delete t[Gn],n}:function(t){return Bn.call(t)},Ln="function"==typeof Uint16Array,Mn="function"==typeof Uint16Array?Uint16Array:null,Rn="function"==typeof Uint16Array?Uint16Array:void 0;kn=function(){var t,r;if("function"!=typeof Mn)return!1;try{t=function(t){return Ln&&t instanceof Uint16Array||"[object Uint16Array]"===Cn(t)}(r=new Mn(r=[1,3.14,-3.14,65536,65537]))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Rn:function(){throw new Error("not implemented")};var $n,Hn={uint16:kn,uint8:Nn};($n=new Hn.uint16(1))[0]=4660;var Wn,Xn,Yn=52===new Hn.uint8($n.buffer)[0];!0===Yn?(Wn=1,Xn=0):(Wn=0,Xn=1);var Zn={HIGH:Wn,LOW:Xn},zn=new En(1),qn=new vn(zn.buffer),Dn=Zn.HIGH,Jn=Zn.LOW;function Kn(t,r,e,n){return zn[0]=t,r[n]=qn[Dn],r[n+e]=qn[Jn],r}function Qn(t){return Kn(t,[0,0],1,0)}!function(t,r,e){an(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}(Qn,"assign",Kn);var to,ro=W(),eo=Object.prototype.toString,no="function"==typeof D?D.toStringTag:"",oo=ro&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return eo.call(t);e=t[no],r=q(t,no);try{t[no]=void 0}catch(r){return eo.call(t)}return n=eo.call(t),r?t[no]=e:delete t[no],n}:function(t){return eo.call(t)},io="function"==typeof Float64Array,uo="function"==typeof Float64Array?Float64Array:null,ao="function"==typeof Float64Array?Float64Array:void 0;to=function(){var t,r;if("function"!=typeof uo)return!1;try{t=function(t){return io&&t instanceof Float64Array||"[object Float64Array]"===oo(t)}(r=new uo([1,3.14,-3.14,NaN]))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?ao:function(){throw new Error("not implemented")};var co=!0===Yn?1:0,lo=new to(1),fo=new vn(lo.buffer);function po(t){return lo[0]=t,fo[co]}var so,yo,bo,go=W(),vo=Object.prototype.toString,_o="function"==typeof D?D.toStringTag:"",wo=go&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return vo.call(t);e=t[_o],r=q(t,_o);try{t[_o]=void 0}catch(r){return vo.call(t)}return n=vo.call(t),r?t[_o]=e:delete t[_o],n}:function(t){return vo.call(t)},ho="function"==typeof Float64Array,mo="function"==typeof Float64Array?Float64Array:null,jo="function"==typeof Float64Array?Float64Array:void 0;so=function(){var t,r;if("function"!=typeof mo)return!1;try{t=function(t){return ho&&t instanceof Float64Array||"[object Float64Array]"===wo(t)}(r=new mo([1,3.14,-3.14,NaN]))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?jo:function(){throw new Error("not implemented")},!0===Yn?(yo=1,bo=0):(yo=0,bo=1);var So={HIGH:yo,LOW:bo},Ao=new so(1),Eo=new vn(Ao.buffer),To=So.HIGH,Oo=So.LOW;function Fo(t,r){return Eo[To]=t,Eo[Oo]=r,Ao[0]}var Po,Io=[0,0],Vo="function"==typeof Object.defineProperty?Object.defineProperty:null,xo=Object.defineProperty,ko=Object.prototype,No=ko.toString,Uo=ko.__defineGetter__,Bo=ko.__defineSetter__,Go=ko.__lookupGetter__,Co=ko.__lookupSetter__;Po=function(){try{return Vo({},"x",{}),!0}catch(t){return!1}}()?xo:function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===No.call(t))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===No.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Go.call(t,r)||Co.call(t,r)?(n=t.__proto__,t.__proto__=ko,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Uo&&Uo.call(t,r,e.get),u&&Bo&&Bo.call(t,r,e.set),t};var Lo=Po;function Mo(t,r,e,n){return $e(t)||qe(t)?(r[n]=t,r[n+e]=0,r):0!==t&&Re(t)<22250738585072014e-324?(r[n]=4503599627370496*t,r[n+e]=-52,r):(r[n]=t,r[n+e]=0,r)}!function(t,r,e){Lo(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}((function(t){return Mo(t,[0,0],1,0)}),"assign",Mo);var Ro=[0,0],$o=[0,0];function Ho(t,r){var e,n,o,i,u,a;return 0===r||0===t||$e(t)||qe(t)?t:(Mo(t,Ro,1,0),r+=Ro[1],r+=function(t){var r=po(t);return(r=(2146435072&r)>>>20)-1023|0}(t=Ro[0]),r<-1074?(o=0,i=t,Qn.assign(o,Io,1,0),u=Io[0],u&=2147483647,a=po(i),Fo(u|=a&=2147483648,Io[1])):r>1023?t<0?Me:Ze:(r<=-1023?(r+=52,n=2220446049250313e-31):n=1,Qn.assign(t,$o,1,0),e=$o[0],e&=2148532223,n*Fo(e|=r+1023<<20,$o[1])))}var Wo=1.4426950408889634,Xo=1/(1<<28);function Yo(t){var r;return $e(t)||t===Ye?t:t===Me?0:t>709.782712893384?Ye:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<Xo?1+t:function(t,r,e){var n,o,i,u;return Ho(1-(r-(n=t-r)*(i=n-(o=n*n)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-t),e)}(t-.6931471803691238*(r=Xe(t<0?Wo*t-.5:Wo*t+.5)),1.9082149292705877e-10*r,r)}function Zo(t){var r;return 0===t?t:t>710.4758600739439||t<-709.089565712824?t>0?Le:Me:(r=Re(t))>1?r>=709.0895657128241?(r=Yo(.5*r),r*=.5*r,t<0&&(r=-r),r):(r=.5*(r=Yo(r))-.5/r,t<0&&(r=-r),r):t+t*(r*=r)*function(t){var r,e;return 0===t?.16666666666666666:((t<0?-t:t)<=1?(r=t*(t*(-.789474443963537*t-163.72585752598383)-11561.443576500522)-351754.9648081514,e=t*(36157.827983443196+t*(1*t-277.7110814206028))-2110529.7888489086):(r=(t=1/t)*(t*(-351754.9648081514*t-11561.443576500522)-163.72585752598383)-.789474443963537,e=1+t*(t*(36157.827983443196+-2110529.7888489086*t)-277.7110814206028)),r/e)}(r)}return function(t){return Ce(t,Zo)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterSinh=r();
//# sourceMappingURL=browser.js.map
