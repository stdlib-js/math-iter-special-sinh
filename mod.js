// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function O(r){var t,e,n,i,a,c,f,l,s,p,y,v,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(t=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,g=void 0,(g=y-p.length)<0?p:p=v?p+m(g):m(g)+p)),c+=n.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,e,n,o;for(e=[],o=0,n=S.exec(r);n;)(t=r.slice(o,S.lastIndex-n[0].length)).length&&e.push(t),e.push(U(n)),o=S.lastIndex,n=S.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function F(r){var t,e;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[x(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return O.apply(null,t)}var I,T=Object.prototype,k=T.toString,V=T.__defineGetter__,P=T.__defineSetter__,N=T.__lookupGetter__,G=T.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===k.call(e))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(N.call(r,t)||G.call(r,t)?(n=r.__proto__,r.__proto__=T,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&V&&V.call(r,t,e.get),a&&P&&P.call(r,t,e.set),r};var L=I;function $(r,t,e){L(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var C=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;function Z(r,t){return null!=r&&M.call(r,t)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var z=B()?function(r){var t,e,n;if(null==r)return R.call(r);e=r[Y],t=Z(r,Y);try{r[Y]=void 0}catch(t){return R.call(r)}return n=R.call(r),t?r[Y]=e:delete r[Y],n}:function(r){return R.call(r)},q=Boolean,D=Boolean.prototype.toString;var J=B();function K(r){return"object"==typeof r&&(r instanceof q||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,er="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},nr="object"==typeof er?er:null,or="object"==typeof globalThis?globalThis:null;var ir=function(r){if(arguments.length){if(!H(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(or)return or;if(rr)return rr;if(tr)return tr;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=ir.document&&ir.document.childNodes,ur=Int8Array;function cr(){return/^\s*function\s*([^(]*)/i}var fr=/^\s*function\s*([^(]*)/i;$(cr,"REGEXP",fr);var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function sr(r){return null!==r&&"object"==typeof r}function pr(r){var t,e,n,o;if(("Object"===(e=z(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=fr.exec(n.toString()))return t[1]}return sr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}$(sr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!lr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(sr));var yr="function"==typeof C||"object"==typeof ur||"function"==typeof ar?function(r){return pr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?pr(r).toLowerCase():t};function vr(r){return"function"===yr(r)}function gr(r){return"number"==typeof r}var dr=Number,br=dr.prototype.toString;var hr=B();function wr(r){return"object"==typeof r&&(r instanceof dr||(hr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function mr(r){return gr(r)||wr(r)}$(mr,"isPrimitive",gr),$(mr,"isObject",wr);var jr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var Ar,_r=Object,Er=Object.getPrototypeOf;Ar=vr(Object.getPrototypeOf)?Er:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Or=Ar;var Sr=Object.prototype;function Ur(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!lr(r)}(r)&&(t=function(r){return null==r?null:(r=_r(r),Or(r))}(r),!t||!Z(r,"constructor")&&Z(t,"constructor")&&vr(t.constructor)&&"[object Function]"===z(t.constructor)&&Z(t,"isPrototypeOf")&&vr(t.isPrototypeOf)&&(t===Sr||function(r){var t;for(t in r)if(!Z(r,t))return!1;return!0}(r)))}function xr(r,t,e){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!vr(u.next))throw new TypeError(F("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!vr(t))throw new TypeError(F("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=function(r,t){return Ur(t)?(Z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",t))}(n,e),i))throw i;return $(o={},"next",(function(){var e;if(a)return{done:!0};if((e=r.next()).done)return a=!0,e;return{value:gr(e.value)?t(e.value):n.invalid,done:!1}})),$(o,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),jr&&vr(r[jr])&&$(o,jr,(function(){return xr(r[jr](),t,n)})),o}var Fr=Number.POSITIVE_INFINITY,Ir=dr.NEGATIVE_INFINITY;function Tr(r){return Math.abs(r)}function kr(r){return r!=r}var Vr=Math.floor,Pr=Math.ceil;function Nr(r){return r<0?Pr(r):Vr(r)}var Gr=1023,Lr=1023,$r=-1023,Cr=-1074;function Hr(r){return r===Fr||r===Ir}var Wr=2147483648,Br=2147483647,Rr="function"==typeof Uint32Array;var Mr="function"==typeof Uint32Array?Uint32Array:null;var Zr,Xr="function"==typeof Uint32Array?Uint32Array:void 0;Zr=function(){var r,t,e;if("function"!=typeof Mr)return!1;try{t=new Mr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Rr&&e instanceof Uint32Array||"[object Uint32Array]"===z(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};var Yr=Zr,zr="function"==typeof Float64Array;var qr="function"==typeof Float64Array?Float64Array:null;var Dr,Jr="function"==typeof Float64Array?Float64Array:void 0;Dr=function(){var r,t,e;if("function"!=typeof qr)return!1;try{t=new qr([1,3.14,-3.14,NaN]),e=t,r=(zr&&e instanceof Float64Array||"[object Float64Array]"===z(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Jr:function(){throw new Error("not implemented")};var Kr=Dr,Qr="function"==typeof Uint8Array;var rt="function"==typeof Uint8Array?Uint8Array:null;var tt,et="function"==typeof Uint8Array?Uint8Array:void 0;tt=function(){var r,t,e;if("function"!=typeof rt)return!1;try{t=new rt(t=[1,3.14,-3.14,256,257]),e=t,r=(Qr&&e instanceof Uint8Array||"[object Uint8Array]"===z(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?et:function(){throw new Error("not implemented")};var nt=tt,ot="function"==typeof Uint16Array;var it="function"==typeof Uint16Array?Uint16Array:null;var at,ut="function"==typeof Uint16Array?Uint16Array:void 0;at=function(){var r,t,e;if("function"!=typeof it)return!1;try{t=new it(t=[1,3.14,-3.14,65536,65537]),e=t,r=(ot&&e instanceof Uint16Array||"[object Uint16Array]"===z(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ut:function(){throw new Error("not implemented")};var ct,ft={uint16:at,uint8:nt};(ct=new ft.uint16(1))[0]=4660;var lt,st,pt=52===new ft.uint8(ct.buffer)[0];!0===pt?(lt=1,st=0):(lt=0,st=1);var yt={HIGH:lt,LOW:st},vt=new Kr(1),gt=new Yr(vt.buffer),dt=yt.HIGH,bt=yt.LOW;function ht(r,t,e,n){return vt[0]=r,t[n]=gt[dt],t[n+e]=gt[bt],t}function wt(r){return ht(r,[0,0],1,0)}$(wt,"assign",ht);var mt,jt,At=!0===pt?1:0,_t=new Kr(1),Et=new Yr(_t.buffer);function Ot(r){return _t[0]=r,Et[At]}!0===pt?(mt=1,jt=0):(mt=0,jt=1);var St={HIGH:mt,LOW:jt},Ut=new Kr(1),xt=new Yr(Ut.buffer),Ft=St.HIGH,It=St.LOW;function Tt(r,t){return xt[Ft]=r,xt[It]=t,Ut[0]}var kt=[0,0];var Vt=22250738585072014e-324,Pt=4503599627370496;function Nt(r,t,e,n){return kr(r)||Hr(r)?(t[n]=r,t[n+e]=0,t):0!==r&&Tr(r)<Vt?(t[n]=r*Pt,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}$((function(r){return Nt(r,[0,0],1,0)}),"assign",Nt);var Gt=2146435072;var Lt=2220446049250313e-31,$t=2148532223,Ct=[0,0],Ht=[0,0];function Wt(r,t){var e,n,o,i,a,u;return 0===t||0===r||kr(r)||Hr(r)?r:(Nt(r,Ct,1,0),r=Ct[0],t+=Ct[1],t+=function(r){var t=Ot(r);return(t=(t&Gt)>>>20)-Gr|0}(r),t<Cr?(o=0,i=r,wt.assign(o,kt,1,0),a=kt[0],a&=Br,u=Ot(i),Tt(a|=u&=Wr,kt[1])):t>Lr?r<0?Ir:Fr:(t<=$r?(t+=52,n=Lt):n=1,wt.assign(r,Ht,1,0),e=Ht[0],e&=$t,n*Tt(e|=t+Gr<<20,Ht[1])))}var Bt=.6931471803691238,Rt=1.9082149292705877e-10,Mt=1.4426950408889634,Zt=709.782712893384,Xt=-745.1332191019411,Yt=1/(1<<28),zt=-Yt;function qt(r){var t;return kr(r)||r===Fr?r:r===Ir?0:r>Zt?Fr:r<Xt?0:r>zt&&r<Yt?1+r:function(r,t,e){var n,o,i,a;return Wt(1-(t-(n=r-t)*(i=n-(o=n*n)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),e)}(r-(t=Nr(r<0?Mt*r-.5:Mt*r+.5))*Bt,t*Rt,t)}var Dt=.6931471805599453;var Jt=709.782712893384,Kt=Jt+Dt,Qt=-709.089565712824,re=Jt-Dt;function te(r){var t;return 0===r?r:r>Kt||r<Qt?r>0?Fr:Ir:(t=Tr(r))>1?t>=re?(t=qt(.5*t),t*=.5*t,r<0&&(t=-t),t):(t=.5*(t=qt(t))-.5/t,r<0&&(t=-t),t):r+r*(t*=t)*function(r){var t,e;return 0===r?.16666666666666666:((r<0?-r:r)<=1?(t=r*(r*(-.789474443963537*r-163.72585752598383)-11561.443576500522)-351754.9648081514,e=r*(36157.827983443196+r*(1*r-277.7110814206028))-2110529.7888489086):(t=(r=1/r)*(r*(-351754.9648081514*r-11561.443576500522)-163.72585752598383)-.789474443963537,e=1+r*(r*(36157.827983443196+-2110529.7888489086*r)-277.7110814206028)),t/e)}(t)}function ee(r){return xr(r,te)}export{ee as default};
//# sourceMappingURL=mod.js.map
