// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,h,"$1e"),n=p.call(n,w,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,v,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function A(r,t,e){var n=t-r.length;return n<0?r:r=e?r+j(n):j(n)+r}var _=String.fromCharCode,E=isNaN,O=Array.isArray;function S(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function U(r){var t,e,n,i,a,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(t=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function I(r){var t,e,n,o;for(e=[],o=0,n=x.exec(r);n;)(t=r.slice(o,x.lastIndex-n[0].length)).length&&e.push(t),e.push(F(n)),o=x.lastIndex,n=x.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function T(r){return"string"==typeof r}function k(r){var t,e,n;if(!T(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=I(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return U.apply(null,e)}var V,N=Object.prototype,P=N.toString,G=N.__defineGetter__,L=N.__defineSetter__,$=N.__lookupGetter__,C=N.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&($.call(r,t)||C.call(r,t)?(n=r.__proto__,r.__proto__=N,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,e.get),a&&L&&L.call(r,t,e.set),r};var H=V;function W(r,t,e){H(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var B=/./;function R(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function z(r,t){return null!=r&&Y.call(r,t)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";var J=Z()?function(r){var t,e,n;if(null==r)return X.call(r);e=r[D],t=z(r,D);try{r[D]=void 0}catch(t){return X.call(r)}return n=X.call(r),t?r[D]=e:delete r[D],n}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=Z();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function er(r){return R(r)||tr(r)}function nr(){return new Function("return this;")()}W(er,"isPrimitive",R),W(er,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ur="object"==typeof ar?ar:null,cr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!R(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(cr)return cr;if(or)return or;if(ir)return ir;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=fr.document&&fr.document.childNodes,sr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;W(pr,"REGEXP",yr);var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function dr(r){return null!==r&&"object"==typeof r}function gr(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=yr.exec(n.toString()))return t[1]}return dr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}W(dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!vr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(dr));var br="function"==typeof B||"object"==typeof sr||"function"==typeof lr?function(r){return gr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?gr(r).toLowerCase():t};function wr(r){return"function"===br(r)}function hr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&wr(r.next)}function mr(r){return"number"==typeof r}var jr=Number,Ar=jr.prototype.toString;var _r=Z();function Er(r){return"object"==typeof r&&(r instanceof jr||(_r?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Or(r){return mr(r)||Er(r)}W(Or,"isPrimitive",mr),W(Or,"isObject",Er);var Sr="function"==typeof q&&"symbol"==typeof q("foo")&&z(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null;var Ur,xr=Object,Fr=Object.getPrototypeOf;Ur=wr(Object.getPrototypeOf)?Fr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ir=Ur;var Tr=Object.prototype;function kr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!vr(r)}(r)&&(t=function(r){return null==r?null:(r=xr(r),Ir(r))}(r),!t||!z(r,"constructor")&&z(t,"constructor")&&wr(t.constructor)&&"[object Function]"===J(t.constructor)&&z(t,"isPrototypeOf")&&wr(t.isPrototypeOf)&&(t===Tr||function(r){var t;for(t in r)if(!z(r,t))return!1;return!0}(r)))}function Vr(r,t){return kr(t)?(z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Nr(r,t,e){var n,o,i,a;if(!hr(r))throw new TypeError(k("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!wr(t))throw new TypeError(k("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=Vr(n,e)))throw i;return W(o={},"next",u),W(o,"return",c),Sr&&wr(r[Sr])&&W(o,Sr,f),o;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:mr(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Nr(r[Sr](),t,n)}}var Pr=Number.POSITIVE_INFINITY,Gr=jr.NEGATIVE_INFINITY;function Lr(r){return Math.abs(r)}function $r(r){return r!=r}var Cr=Math.floor,Hr=Math.ceil;function Wr(r){return r<0?Hr(r):Cr(r)}function Br(r){return r===Pr||r===Gr}var Rr="function"==typeof Uint32Array;var Mr="function"==typeof Uint32Array?Uint32Array:null;var Zr,Xr="function"==typeof Uint32Array?Uint32Array:void 0;Zr=function(){var r,t,e;if("function"!=typeof Mr)return!1;try{t=new Mr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Rr&&e instanceof Uint32Array||"[object Uint32Array]"===J(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};var Yr=Zr,zr="function"==typeof Float64Array;var qr="function"==typeof Float64Array?Float64Array:null;var Dr,Jr="function"==typeof Float64Array?Float64Array:void 0;Dr=function(){var r,t,e;if("function"!=typeof qr)return!1;try{t=new qr([1,3.14,-3.14,NaN]),e=t,r=(zr&&e instanceof Float64Array||"[object Float64Array]"===J(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Jr:function(){throw new Error("not implemented")};var Kr=Dr,Qr="function"==typeof Uint8Array;var rt="function"==typeof Uint8Array?Uint8Array:null;var tt,et="function"==typeof Uint8Array?Uint8Array:void 0;tt=function(){var r,t,e;if("function"!=typeof rt)return!1;try{t=new rt(t=[1,3.14,-3.14,256,257]),e=t,r=(Qr&&e instanceof Uint8Array||"[object Uint8Array]"===J(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?et:function(){throw new Error("not implemented")};var nt=tt,ot="function"==typeof Uint16Array;var it="function"==typeof Uint16Array?Uint16Array:null;var at,ut="function"==typeof Uint16Array?Uint16Array:void 0;at=function(){var r,t,e;if("function"!=typeof it)return!1;try{t=new it(t=[1,3.14,-3.14,65536,65537]),e=t,r=(ot&&e instanceof Uint16Array||"[object Uint16Array]"===J(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ut:function(){throw new Error("not implemented")};var ct,ft={uint16:at,uint8:nt};(ct=new ft.uint16(1))[0]=4660;var lt,st,pt=52===new ft.uint8(ct.buffer)[0];!0===pt?(lt=1,st=0):(lt=0,st=1);var yt={HIGH:lt,LOW:st},vt=new Kr(1),dt=new Yr(vt.buffer),gt=yt.HIGH,bt=yt.LOW;function wt(r,t,e,n){return vt[0]=r,t[n]=dt[gt],t[n+e]=dt[bt],t}function ht(r){return wt(r,[0,0],1,0)}W(ht,"assign",wt);var mt,jt,At=!0===pt?1:0,_t=new Kr(1),Et=new Yr(_t.buffer);function Ot(r){return _t[0]=r,Et[At]}!0===pt?(mt=1,jt=0):(mt=0,jt=1);var St={HIGH:mt,LOW:jt},Ut=new Kr(1),xt=new Yr(Ut.buffer),Ft=St.HIGH,It=St.LOW;function Tt(r,t){return xt[Ft]=r,xt[It]=t,Ut[0]}var kt=[0,0];function Vt(r,t,e,n){return $r(r)||Br(r)?(t[n]=r,t[n+e]=0,t):0!==r&&Lr(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}W((function(r){return Vt(r,[0,0],1,0)}),"assign",Vt);var Nt=[0,0],Pt=[0,0];function Gt(r,t){var e,n,o,i,a,u;return 0===t||0===r||$r(r)||Br(r)?r:(Vt(r,Nt,1,0),t+=Nt[1],t+=function(r){var t=Ot(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Nt[0]),t<-1074?(o=0,i=r,ht.assign(o,kt,1,0),a=kt[0],a&=2147483647,u=Ot(i),Tt(a|=u&=2147483648,kt[1])):t>1023?r<0?Gr:Pr:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,ht.assign(r,Pt,1,0),e=Pt[0],e&=2148532223,n*Tt(e|=t+1023<<20,Pt[1])))}function Lt(r){var t;return $r(r)||r===Pr?r:r===Gr?0:r>709.782712893384?Pr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,e){var n,o,i,a;return Gt(1-(t-(n=r-t)*(i=n-(o=n*n)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),e)}(r-.6931471803691238*(t=Wr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function $t(r){var t;return 0===r?r:r>710.4758600739439||r<-709.089565712824?r>0?Pr:Gr:(t=Lr(r))>1?t>=709.0895657128241?(t=Lt(.5*t),t*=.5*t,r<0&&(t=-t),t):(t=.5*(t=Lt(t))-.5/t,r<0&&(t=-t),t):r+r*(t*=t)*function(r){var t,e;return 0===r?.16666666666666666:((r<0?-r:r)<=1?(t=r*(r*(-.789474443963537*r-163.72585752598383)-11561.443576500522)-351754.9648081514,e=r*(36157.827983443196+r*(1*r-277.7110814206028))-2110529.7888489086):(t=(r=1/r)*(r*(-351754.9648081514*r-11561.443576500522)-163.72585752598383)-.789474443963537,e=1+r*(r*(36157.827983443196+-2110529.7888489086*r)-277.7110814206028)),t/e)}(t)}function Ct(r){return Nr(r,$t)}export{Ct as default};
//# sourceMappingURL=mod.js.map
