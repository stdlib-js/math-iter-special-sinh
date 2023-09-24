// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,b=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,_=/\.0*e/,w=/(\..*[^0])0*e/;function h(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,_,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,v,"e-0$1"),r.alternate&&(n=s.call(n,b,"$1."),n=s.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function j(r,t,e){var n=t-r.length;return n<0?r:r=e?r+m(n):m(n)+r}var S=String.fromCharCode,A=isNaN,E=Array.isArray;function O(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function T(r){var t,e,n,i,a,l,f,p,s;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",f=1,p=0;p<r.length;p++)if(c(n=r[p]))l+=n;else{if(t=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,A(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function I(r){var t,e,n,o;for(e=[],o=0,n=F.exec(r);n;)(t=r.slice(o,F.lastIndex-n[0].length)).length&&e.push(t),e.push(P(n)),o=F.lastIndex,n=F.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function V(r){return"string"==typeof r}function x(r){var t,e,n;if(!V(r))throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=I(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return T.apply(null,e)}var k,N=Object.prototype,U=N.toString,B=N.__defineGetter__,G=N.__defineSetter__,C=N.__lookupGetter__,L=N.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===U.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===U.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(C.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=N,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&B&&B.call(r,t,e.get),a&&G&&G.call(r,t,e.set),r};var M=k;function R(r,t,e){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var $=/./;function H(r){return"boolean"==typeof r}function W(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var X=W();function Y(){return X&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function q(r,t){return null!=r&&z.call(r,t)}var D="function"==typeof Symbol?Symbol:void 0,J="function"==typeof D?D.toStringTag:"";var K=Y()?function(r){var t,e,n;if(null==r)return Z.call(r);e=r[J],t=q(r,J);try{r[J]=void 0}catch(t){return Z.call(r)}return n=Z.call(r),t?r[J]=e:delete r[J],n}:function(r){return Z.call(r)},Q=Boolean,rr=Boolean.prototype.toString;var tr=Y();function er(r){return"object"==typeof r&&(r instanceof Q||(tr?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===K(r)))}function nr(r){return H(r)||er(r)}function or(){return new Function("return this;")()}R(nr,"isPrimitive",H),R(nr,"isObject",er);var ir="object"==typeof self?self:null,ar="object"==typeof window?window:null,ur="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},cr="object"==typeof ur?ur:null,lr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!H(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return or()}if(lr)return lr;if(ir)return ir;if(ar)return ar;if(cr)return cr;throw new Error("unexpected error. Unable to resolve global object.")}(),pr=fr.document&&fr.document.childNodes,sr=Int8Array;function yr(){return/^\s*function\s*([^(]*)/i}var vr=/^\s*function\s*([^(]*)/i;R(yr,"REGEXP",vr);var br=W();var gr=Object.prototype.toString;var dr="function"==typeof D?D.toStringTag:"";var _r,wr=br&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return gr.call(r);e=r[dr],t=q(r,dr);try{r[dr]=void 0}catch(t){return gr.call(r)}return n=gr.call(r),t?r[dr]=e:delete r[dr],n}:function(r){return gr.call(r)};_r=Array.isArray?Array.isArray:function(r){return"[object Array]"===wr(r)};var hr=_r;function mr(r){return null!==r&&"object"==typeof r}var jr=function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!hr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(mr);function Sr(r){var t,e,n,o;if(("Object"===(e=K(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=vr.exec(n.toString()))return t[1]}return mr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}R(mr,"isObjectLikeArray",jr);var Ar="function"==typeof $||"object"==typeof sr||"function"==typeof pr?function(r){return Sr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Sr(r).toLowerCase():t};function Er(r){return"function"===Ar(r)}var Or=/./,Tr="function"==typeof Object.defineProperty?Object.defineProperty:null;var Fr,Pr=Object.defineProperty,Ir=Object.prototype,Vr=Ir.toString,xr=Ir.__defineGetter__,kr=Ir.__defineSetter__,Nr=Ir.__lookupGetter__,Ur=Ir.__lookupSetter__;Fr=function(){try{return Tr({},"x",{}),!0}catch(r){return!1}}()?Pr:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Vr.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Vr.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Nr.call(r,t)||Ur.call(r,t)?(n=r.__proto__,r.__proto__=Ir,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&xr&&xr.call(r,t,e.get),a&&kr&&kr.call(r,t,e.set),r};var Br=Fr;function Gr(r,t,e){Br(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Cr(r){return"boolean"==typeof r}var Lr=W();function Mr(){return Lr&&"symbol"==typeof Symbol.toStringTag}var Rr=Object.prototype.toString;var $r="function"==typeof D?D.toStringTag:"";var Hr=Mr()?function(r){var t,e,n;if(null==r)return Rr.call(r);e=r[$r],t=q(r,$r);try{r[$r]=void 0}catch(t){return Rr.call(r)}return n=Rr.call(r),t?r[$r]=e:delete r[$r],n}:function(r){return Rr.call(r)},Wr=Boolean.prototype.toString;var Xr=Mr();function Yr(r){return"object"==typeof r&&(r instanceof Q||(Xr?function(r){try{return Wr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Hr(r)))}function Zr(r){return Cr(r)||Yr(r)}function zr(){return new Function("return this;")()}Gr(Zr,"isPrimitive",Cr),Gr(Zr,"isObject",Yr);var qr="object"==typeof self?self:null,Dr="object"==typeof window?window:null,Jr="object"==typeof ur?ur:null,Kr="object"==typeof globalThis?globalThis:null;var Qr=function(r){if(arguments.length){if(!Cr(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return zr()}if(Kr)return Kr;if(qr)return qr;if(Dr)return Dr;if(Jr)return Jr;throw new Error("unexpected error. Unable to resolve global object.")}(),rt=Qr.document&&Qr.document.childNodes,tt=Int8Array;function et(){return/^\s*function\s*([^(]*)/i}var nt=/^\s*function\s*([^(]*)/i;function ot(r){return null!==r&&"object"==typeof r}Gr(et,"REGEXP",nt);var it=function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!hr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(ot);function at(r){var t,e,n,o;if(("Object"===(e=Hr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=nt.exec(n.toString()))return t[1]}return ot(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Gr(ot,"isObjectLikeArray",it);var ut="function"==typeof Or||"object"==typeof tt||"function"==typeof rt?function(r){return at(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?at(r).toLowerCase():t};function ct(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===ut(r)}(r.next)}function lt(r){return"number"==typeof r}var ft=Number,pt=ft.prototype.toString;var st=Y();function yt(r){return"object"==typeof r&&(r instanceof ft||(st?function(r){try{return pt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===K(r)))}function vt(r){return lt(r)||yt(r)}R(vt,"isPrimitive",lt),R(vt,"isObject",yt);var bt="function"==typeof D&&"symbol"==typeof D("foo")&&q(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null;var gt=/./,dt="function"==typeof Object.defineProperty?Object.defineProperty:null;var _t,wt=Object.defineProperty,ht=Object.prototype,mt=ht.toString,jt=ht.__defineGetter__,St=ht.__defineSetter__,At=ht.__lookupGetter__,Et=ht.__lookupSetter__;_t=function(){try{return dt({},"x",{}),!0}catch(r){return!1}}()?wt:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===mt.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===mt.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(At.call(r,t)||Et.call(r,t)?(n=r.__proto__,r.__proto__=ht,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&jt&&jt.call(r,t,e.get),a&&St&&St.call(r,t,e.set),r};var Ot=_t;function Tt(r,t,e){Ot(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Ft(r){return"boolean"==typeof r}var Pt=W();function It(){return Pt&&"symbol"==typeof Symbol.toStringTag}var Vt=Object.prototype.toString;var xt="function"==typeof D?D.toStringTag:"";var kt=It()?function(r){var t,e,n;if(null==r)return Vt.call(r);e=r[xt],t=q(r,xt);try{r[xt]=void 0}catch(t){return Vt.call(r)}return n=Vt.call(r),t?r[xt]=e:delete r[xt],n}:function(r){return Vt.call(r)},Nt=Boolean.prototype.toString;var Ut=It();function Bt(r){return"object"==typeof r&&(r instanceof Q||(Ut?function(r){try{return Nt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===kt(r)))}function Gt(r){return Ft(r)||Bt(r)}function Ct(){return new Function("return this;")()}Tt(Gt,"isPrimitive",Ft),Tt(Gt,"isObject",Bt);var Lt="object"==typeof self?self:null,Mt="object"==typeof window?window:null,Rt="object"==typeof ur?ur:null,$t="object"==typeof globalThis?globalThis:null;var Ht=function(r){if(arguments.length){if(!Ft(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ct()}if($t)return $t;if(Lt)return Lt;if(Mt)return Mt;if(Rt)return Rt;throw new Error("unexpected error. Unable to resolve global object.")}(),Wt=Ht.document&&Ht.document.childNodes,Xt=Int8Array;function Yt(){return/^\s*function\s*([^(]*)/i}var Zt=/^\s*function\s*([^(]*)/i;function zt(r){return null!==r&&"object"==typeof r}Tt(Yt,"REGEXP",Zt);var qt=function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!hr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(zt);function Dt(r){var t,e,n,o;if(("Object"===(e=kt(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Zt.exec(n.toString()))return t[1]}return zt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Tt(zt,"isObjectLikeArray",qt);var Jt="function"==typeof gt||"object"==typeof Xt||"function"==typeof Wt?function(r){return Dt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Dt(r).toLowerCase():t};function Kt(r){return"function"===Jt(r)}var Qt=Object,re=/./,te="function"==typeof Object.defineProperty?Object.defineProperty:null;var ee,ne=Object.defineProperty,oe=Object.prototype,ie=oe.toString,ae=oe.__defineGetter__,ue=oe.__defineSetter__,ce=oe.__lookupGetter__,le=oe.__lookupSetter__;ee=function(){try{return te({},"x",{}),!0}catch(r){return!1}}()?ne:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===ie.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===ie.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(ce.call(r,t)||le.call(r,t)?(n=r.__proto__,r.__proto__=oe,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ae&&ae.call(r,t,e.get),a&&ue&&ue.call(r,t,e.set),r};var fe=ee;function pe(r,t,e){fe(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function se(r){return"boolean"==typeof r}var ye=W();function ve(){return ye&&"symbol"==typeof Symbol.toStringTag}var be=Object.prototype.toString;var ge="function"==typeof D?D.toStringTag:"";var de=ve()?function(r){var t,e,n;if(null==r)return be.call(r);e=r[ge],t=q(r,ge);try{r[ge]=void 0}catch(t){return be.call(r)}return n=be.call(r),t?r[ge]=e:delete r[ge],n}:function(r){return be.call(r)},_e=Boolean.prototype.toString;var we=ve();function he(r){return"object"==typeof r&&(r instanceof Q||(we?function(r){try{return _e.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===de(r)))}function me(r){return se(r)||he(r)}function je(){return new Function("return this;")()}pe(me,"isPrimitive",se),pe(me,"isObject",he);var Se="object"==typeof self?self:null,Ae="object"==typeof window?window:null,Ee="object"==typeof ur?ur:null,Oe="object"==typeof globalThis?globalThis:null;var Te=function(r){if(arguments.length){if(!se(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return je()}if(Oe)return Oe;if(Se)return Se;if(Ae)return Ae;if(Ee)return Ee;throw new Error("unexpected error. Unable to resolve global object.")}(),Fe=Te.document&&Te.document.childNodes,Pe=Int8Array;function Ie(){return/^\s*function\s*([^(]*)/i}var Ve=/^\s*function\s*([^(]*)/i;function xe(r){return null!==r&&"object"==typeof r}pe(Ie,"REGEXP",Ve);var ke=function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!hr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(xe);function Ne(r){var t,e,n,o;if(("Object"===(e=de(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Ve.exec(n.toString()))return t[1]}return xe(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}pe(xe,"isObjectLikeArray",ke);var Ue="function"==typeof re||"object"==typeof Pe||"function"==typeof Fe?function(r){return Ne(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Ne(r).toLowerCase():t};var Be,Ge,Ce=Object.getPrototypeOf;Ge=Object.getPrototypeOf,Be="function"===Ue(Ge)?Ce:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===de(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Le=Be;var Me=Object.prototype;function Re(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!hr(r)}(r)&&(t=function(r){return null==r?null:(r=Qt(r),Le(r))}(r),!t||!q(r,"constructor")&&q(t,"constructor")&&Kt(t.constructor)&&"[object Function]"===kt(t.constructor)&&q(t,"isPrototypeOf")&&Kt(t.isPrototypeOf)&&(t===Me||function(r){var t;for(t in r)if(!q(r,t))return!1;return!0}(r)))}function $e(r,t){return Re(t)?(q(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(x("invalid argument. Options argument must be an object. Value: `%s`.",t))}function He(r,t,e){var n,o,i,a;if(!ct(r))throw new TypeError(x("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!Er(t))throw new TypeError(x("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=$e(n,e)))throw i;return R(o={},"next",u),R(o,"return",c),bt&&Er(r[bt])&&R(o,bt,l),o;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:lt(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return He(r[bt](),t,n)}}var We=Number.POSITIVE_INFINITY,Xe=Number.NEGATIVE_INFINITY;function Ye(r){return Math.abs(r)}function Ze(r){return r!=r}var ze=Math.floor,qe=Math.ceil;function De(r){return r<0?qe(r):ze(r)}var Je=Number.POSITIVE_INFINITY,Ke=Number.POSITIVE_INFINITY,Qe=Number.POSITIVE_INFINITY;function rn(r){return r===Qe||r===Xe}var tn="function"==typeof Object.defineProperty?Object.defineProperty:null;var en,nn=Object.defineProperty,on=Object.prototype,an=on.toString,un=on.__defineGetter__,cn=on.__defineSetter__,ln=on.__lookupGetter__,fn=on.__lookupSetter__;en=function(){try{return tn({},"x",{}),!0}catch(r){return!1}}()?nn:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===an.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===an.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(ln.call(r,t)||fn.call(r,t)?(n=r.__proto__,r.__proto__=on,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&un&&un.call(r,t,e.get),a&&cn&&cn.call(r,t,e.set),r};var pn=en;var sn=W();var yn=Object.prototype.toString;var vn="function"==typeof D?D.toStringTag:"";var bn=sn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return yn.call(r);e=r[vn],t=q(r,vn);try{r[vn]=void 0}catch(t){return yn.call(r)}return n=yn.call(r),t?r[vn]=e:delete r[vn],n}:function(r){return yn.call(r)},gn="function"==typeof Uint32Array;var dn="function"==typeof Uint32Array?Uint32Array:null;var _n,wn="function"==typeof Uint32Array?Uint32Array:void 0;_n=function(){var r,t;if("function"!=typeof dn)return!1;try{r=function(r){return gn&&r instanceof Uint32Array||"[object Uint32Array]"===bn(r)}(t=new dn(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?wn:function(){throw new Error("not implemented")};var hn=_n,mn=W();var jn=Object.prototype.toString;var Sn="function"==typeof D?D.toStringTag:"";var An=mn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return jn.call(r);e=r[Sn],t=q(r,Sn);try{r[Sn]=void 0}catch(t){return jn.call(r)}return n=jn.call(r),t?r[Sn]=e:delete r[Sn],n}:function(r){return jn.call(r)},En="function"==typeof Float64Array;var On="function"==typeof Float64Array?Float64Array:null;var Tn,Fn="function"==typeof Float64Array?Float64Array:void 0;Tn=function(){var r,t;if("function"!=typeof On)return!1;try{r=function(r){return En&&r instanceof Float64Array||"[object Float64Array]"===An(r)}(t=new On([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Fn:function(){throw new Error("not implemented")};var Pn=Tn,In=W();var Vn=Object.prototype.toString;var xn="function"==typeof D?D.toStringTag:"";var kn=In&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Vn.call(r);e=r[xn],t=q(r,xn);try{r[xn]=void 0}catch(t){return Vn.call(r)}return n=Vn.call(r),t?r[xn]=e:delete r[xn],n}:function(r){return Vn.call(r)},Nn="function"==typeof Uint8Array;var Un="function"==typeof Uint8Array?Uint8Array:null;var Bn,Gn="function"==typeof Uint8Array?Uint8Array:void 0;Bn=function(){var r,t;if("function"!=typeof Un)return!1;try{r=function(r){return Nn&&r instanceof Uint8Array||"[object Uint8Array]"===kn(r)}(t=new Un(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Gn:function(){throw new Error("not implemented")};var Cn=Bn,Ln=W();var Mn=Object.prototype.toString;var Rn="function"==typeof D?D.toStringTag:"";var $n=Ln&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Mn.call(r);e=r[Rn],t=q(r,Rn);try{r[Rn]=void 0}catch(t){return Mn.call(r)}return n=Mn.call(r),t?r[Rn]=e:delete r[Rn],n}:function(r){return Mn.call(r)},Hn="function"==typeof Uint16Array;var Wn="function"==typeof Uint16Array?Uint16Array:null;var Xn,Yn="function"==typeof Uint16Array?Uint16Array:void 0;Xn=function(){var r,t;if("function"!=typeof Wn)return!1;try{r=function(r){return Hn&&r instanceof Uint16Array||"[object Uint16Array]"===$n(r)}(t=new Wn(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Yn:function(){throw new Error("not implemented")};var Zn,zn={uint16:Xn,uint8:Cn};(Zn=new zn.uint16(1))[0]=4660;var qn,Dn,Jn=52===new zn.uint8(Zn.buffer)[0];!0===Jn?(qn=1,Dn=0):(qn=0,Dn=1);var Kn={HIGH:qn,LOW:Dn},Qn=new Pn(1),ro=new hn(Qn.buffer),to=Kn.HIGH,eo=Kn.LOW;function no(r,t,e,n){return Qn[0]=r,t[n]=ro[to],t[n+e]=ro[eo],t}function oo(r){return no(r,[0,0],1,0)}!function(r,t,e){pn(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}(oo,"assign",no);var io=W();var ao=Object.prototype.toString;var uo="function"==typeof D?D.toStringTag:"";var co=io&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return ao.call(r);e=r[uo],t=q(r,uo);try{r[uo]=void 0}catch(t){return ao.call(r)}return n=ao.call(r),t?r[uo]=e:delete r[uo],n}:function(r){return ao.call(r)},lo="function"==typeof Float64Array;var fo="function"==typeof Float64Array?Float64Array:null;var po,so="function"==typeof Float64Array?Float64Array:void 0;po=function(){var r,t;if("function"!=typeof fo)return!1;try{r=function(r){return lo&&r instanceof Float64Array||"[object Float64Array]"===co(r)}(t=new fo([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?so:function(){throw new Error("not implemented")};var yo=!0===Jn?1:0,vo=new po(1),bo=new hn(vo.buffer);function go(r){return vo[0]=r,bo[yo]}var _o=W();var wo=Object.prototype.toString;var ho="function"==typeof D?D.toStringTag:"";var mo=_o&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return wo.call(r);e=r[ho],t=q(r,ho);try{r[ho]=void 0}catch(t){return wo.call(r)}return n=wo.call(r),t?r[ho]=e:delete r[ho],n}:function(r){return wo.call(r)},jo="function"==typeof Float64Array;var So="function"==typeof Float64Array?Float64Array:null;var Ao,Eo,Oo,To="function"==typeof Float64Array?Float64Array:void 0;Ao=function(){var r,t;if("function"!=typeof So)return!1;try{r=function(r){return jo&&r instanceof Float64Array||"[object Float64Array]"===mo(r)}(t=new So([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?To:function(){throw new Error("not implemented")},!0===Jn?(Eo=1,Oo=0):(Eo=0,Oo=1);var Fo={HIGH:Eo,LOW:Oo},Po=new Ao(1),Io=new hn(Po.buffer),Vo=Fo.HIGH,xo=Fo.LOW;function ko(r,t){return Io[Vo]=r,Io[xo]=t,Po[0]}var No=[0,0];var Uo="function"==typeof Object.defineProperty?Object.defineProperty:null;var Bo,Go=Object.defineProperty,Co=Object.prototype,Lo=Co.toString,Mo=Co.__defineGetter__,Ro=Co.__defineSetter__,$o=Co.__lookupGetter__,Ho=Co.__lookupSetter__;Bo=function(){try{return Uo({},"x",{}),!0}catch(r){return!1}}()?Go:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Lo.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Lo.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&($o.call(r,t)||Ho.call(r,t)?(n=r.__proto__,r.__proto__=Co,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Mo&&Mo.call(r,t,e.get),a&&Ro&&Ro.call(r,t,e.set),r};var Wo=Bo;function Xo(r,t,e,n){return Ze(r)||rn(r)?(t[n]=r,t[n+e]=0,t):0!==r&&Ye(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}!function(r,t,e){Wo(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}((function(r){return Xo(r,[0,0],1,0)}),"assign",Xo);var Yo=[0,0],Zo=[0,0];function zo(r,t){var e,n,o,i,a,u;return 0===t||0===r||Ze(r)||rn(r)?r:(Xo(r,Yo,1,0),t+=Yo[1],t+=function(r){var t=go(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Yo[0]),t<-1074?(o=0,i=r,oo.assign(o,No,1,0),a=No[0],a&=2147483647,u=go(i),ko(a|=u&=2147483648,No[1])):t>1023?r<0?Xe:Ke:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,oo.assign(r,Zo,1,0),e=Zo[0],e&=2148532223,n*ko(e|=t+1023<<20,Zo[1])))}function qo(r){var t;return Ze(r)||r===Je?r:r===Xe?0:r>709.782712893384?Je:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,e){var n,o,i,a;return zo(1-(t-(n=r-t)*(i=n-(o=n*n)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),e)}(r-.6931471803691238*(t=De(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function Do(r){var t;return 0===r?r:r>710.4758600739439||r<-709.089565712824?r>0?We:Xe:(t=Ye(r))>1?t>=709.0895657128241?(t=qo(.5*t),t*=.5*t,r<0&&(t=-t),t):(t=.5*(t=qo(t))-.5/t,r<0&&(t=-t),t):r+r*(t*=t)*function(r){var t,e;return 0===r?.16666666666666666:((r<0?-r:r)<=1?(t=r*(r*(-.789474443963537*r-163.72585752598383)-11561.443576500522)-351754.9648081514,e=r*(36157.827983443196+r*(1*r-277.7110814206028))-2110529.7888489086):(t=(r=1/r)*(r*(-351754.9648081514*r-11561.443576500522)-163.72585752598383)-.789474443963537,e=1+r*(r*(36157.827983443196+-2110529.7888489086*r)-277.7110814206028)),t/e)}(t)}function Jo(r){return He(r,Do)}export{Jo as default};
//# sourceMappingURL=mod.js.map
