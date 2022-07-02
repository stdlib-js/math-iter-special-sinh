// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var t=r.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,c=o.__lookupGetter__,f=o.__lookupSetter__;var l=function(r,t,n){var e,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(c.call(r,t)||f.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),v&&a&&a.call(r,t,n.set),r},y=e,v=l,p=n()?y:v;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,d=/./;var m=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,g=_;var A=function(r){return g.call(r)},h=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&h.call(r,t)},E="function"==typeof Symbol?Symbol.toStringTag:"",U=O,S=E,P=_;var F=A,I=function(r){var t,n,e;if(null==r)return P.call(r);n=r[S],t=U(r,S);try{r[S]=void 0}catch(t){return P.call(r)}return e=P.call(r),t?r[S]=n:delete r[S],e},N=j()?I:F,T=Boolean.prototype.toString;var G=N,V=function(r){try{return T.call(r),!0}catch(r){return!1}},x=j();var H=function(r){return"object"==typeof r&&(r instanceof Boolean||(x?V(r):"[object Boolean]"===G(r)))},B=m,L=H;var M=s,k=function(r){return B(r)||L(r)},W=H;M(k,"isPrimitive",m),M(k,"isObject",W);var C=k;var R=function(){return new Function("return this;")()},X="object"==typeof self?self:null,Y="object"==typeof window?window:null,z="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},D="object"==typeof z?z:null;module.exports=D;var q=C.isPrimitive,J=R,K=X,Q=Y,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!q(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),tr=rr.document&&rr.document.childNodes,nr=Int8Array,er=d,or=tr,ur=nr;var ir=function(){return"function"==typeof er||"object"==typeof ur||"function"==typeof or};var ar=function(){return/^\s*function\s*([^(]*)/i},cr=ar;s(cr,"REGEXP",ar());var fr=cr,lr=N;var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)},vr=yr;var pr=function(r){return null!==r&&"object"==typeof r};s(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!vr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(pr));var br=pr;var sr=N,dr=fr.REGEXP,mr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var wr=function(r){var t,n,e;if(("Object"===(n=sr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=dr.exec(e.toString()))return t[1]}return mr(r)?"Buffer":n},jr=wr;var _r=wr;var gr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?jr(r).toLowerCase():t},Ar=function(r){return _r(r).toLowerCase()},hr=ir()?Ar:gr;var Or=function(r){return"function"===hr(r)},Er=Or;var Ur=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Er(r.next)};var Sr=function(r){return"number"==typeof r},Pr=Number,Fr=Pr.prototype.toString;var Ir=N,Nr=Pr,Tr=function(r){try{return Fr.call(r),!0}catch(r){return!1}},Gr=j();var Vr=function(r){return"object"==typeof r&&(r instanceof Nr||(Gr?Tr(r):"[object Number]"===Ir(r)))},xr=Sr,Hr=Vr;var Br=s,Lr=function(r){return xr(r)||Hr(r)},Mr=Vr;Br(Lr,"isPrimitive",Sr),Br(Lr,"isObject",Mr);var kr=Lr,Wr=O;var Cr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Wr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Rr=yr;var Xr=function(r){return"object"==typeof r&&null!==r&&!Rr(r)},Yr=Object.getPrototypeOf;var zr=function(r){return r.__proto__},Dr=N,qr=zr;var Jr=function(r){var t=qr(r);return t||null===t?t:"[object Function]"===Dr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Kr=Yr,Qr=Jr,Zr=Or(Object.getPrototypeOf)?Kr:Qr;var $r=Xr,rt=Or,tt=function(r){return null==r?null:(r=Object(r),Zr(r))},nt=O,et=N,ot=Object.prototype;var ut=function(r){var t;return!!$r(r)&&(!(t=tt(r))||!nt(r,"constructor")&&nt(t,"constructor")&&rt(t.constructor)&&"[object Function]"===et(t.constructor)&&nt(t,"isPrototypeOf")&&rt(t.isPrototypeOf)&&(t===ot||function(r){var t;for(t in r)if(!nt(r,t))return!1;return!0}(r)))},it=ut,at=O;var ct=s,ft=Or,lt=Ur,yt=kr.isPrimitive,vt=Cr,pt=function(r,t){return it(t)?(at(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var bt=function r(t,n,e){var o,u,i,a;if(!lt(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ft(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=pt(o,e)))throw i;return ct(u={},"next",c),ct(u,"return",f),vt&&ft(t[vt])&&ct(u,vt,l),u;function c(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:yt(r.value)?n(r.value):o.invalid,done:!1}}function f(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[vt](),n,o)}},st=bt,dt=Number.POSITIVE_INFINITY,mt=Pr.NEGATIVE_INFINITY;var wt=function(r){return Math.abs(r)};var jt=function(r){return r!=r},_t=Math.floor,gt=Math.ceil,At=_t,ht=gt;var Ot=function(r){return r<0?ht(r):At(r)},Et=dt,Ut=mt;var St=function(r){return r===Et||r===Ut},Pt=N,Ft="function"==typeof Uint32Array;var It="function"==typeof Uint32Array?Uint32Array:null,Nt=function(r){return Ft&&r instanceof Uint32Array||"[object Uint32Array]"===Pt(r)},Tt=It;var Gt=function(){var r,t;if("function"!=typeof Tt)return!1;try{t=new Tt(t=[1,3.14,-3.14,4294967296,4294967297]),r=Nt(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Vt="function"==typeof Uint32Array?Uint32Array:void 0,xt=function(){throw new Error("not implemented")},Ht=Gt()?Vt:xt,Bt=N,Lt="function"==typeof Float64Array;var Mt="function"==typeof Float64Array?Float64Array:null,kt=function(r){return Lt&&r instanceof Float64Array||"[object Float64Array]"===Bt(r)},Wt=Mt;var Ct=function(){var r,t;if("function"!=typeof Wt)return!1;try{t=new Wt([1,3.14,-3.14,NaN]),r=kt(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Rt="function"==typeof Float64Array?Float64Array:void 0,Xt=function(){throw new Error("not implemented")},Yt=Ct()?Rt:Xt,zt=N,Dt="function"==typeof Uint8Array;var qt="function"==typeof Uint8Array?Uint8Array:null,Jt=function(r){return Dt&&r instanceof Uint8Array||"[object Uint8Array]"===zt(r)},Kt=qt;var Qt=function(){var r,t;if("function"!=typeof Kt)return!1;try{t=new Kt(t=[1,3.14,-3.14,256,257]),r=Jt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Zt="function"==typeof Uint8Array?Uint8Array:void 0,$t=function(){throw new Error("not implemented")},rn=Qt()?Zt:$t,tn=N,nn="function"==typeof Uint16Array;var en="function"==typeof Uint16Array?Uint16Array:null,on=function(r){return nn&&r instanceof Uint16Array||"[object Uint16Array]"===tn(r)},un=en;var an=function(){var r,t;if("function"!=typeof un)return!1;try{t=new un(t=[1,3.14,-3.14,65536,65537]),r=on(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var cn,fn="function"==typeof Uint16Array?Uint16Array:void 0,ln=function(){throw new Error("not implemented")},yn={uint16:an()?fn:ln,uint8:rn};(cn=new yn.uint16(1))[0]=4660;var vn,pn,bn=52===new yn.uint8(cn.buffer)[0];!0===bn?(vn=1,pn=0):(vn=0,pn=1);var sn=Ht,dn={HIGH:vn,LOW:pn},mn=new Yt(1),wn=new sn(mn.buffer),jn=dn.HIGH,_n=dn.LOW;var gn=function(r,t){return mn[0]=t,r[0]=wn[jn],r[1]=wn[_n],r};var An=function(r,t){return 1===arguments.length?gn([0,0],r):gn(r,t)},hn=Ht,On=!0===bn?1:0,En=new Yt(1),Un=new hn(En.buffer);var Sn,Pn,Fn=function(r){return En[0]=r,Un[On]};!0===bn?(Sn=1,Pn=0):(Sn=0,Pn=1);var In=Ht,Nn={HIGH:Sn,LOW:Pn},Tn=new Yt(1),Gn=new In(Tn.buffer),Vn=Nn.HIGH,xn=Nn.LOW;var Hn=function(r,t){return Gn[Vn]=r,Gn[xn]=t,Tn[0]},Bn=An,Ln=Fn,Mn=Hn,kn=[0,0];var Wn=St,Cn=jt,Rn=wt;var Xn=function(r,t){return Cn(t)||Wn(t)?(r[0]=t,r[1]=0,r):0!==t&&Rn(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var Yn=Fn;var zn=function(r){var t=Yn(r);return(t=(2146435072&t)>>>20)-1023|0},Dn=dt,qn=mt,Jn=jt,Kn=St,Qn=function(r,t){var n,e;return Bn(kn,r),n=kn[0],n&=2147483647,e=Ln(t),Mn(n|=e&=2147483648,kn[1])},Zn=function(r,t){return 1===arguments.length?Xn([0,0],r):Xn(r,t)},$n=zn,re=An,te=Hn,ne=[0,0],ee=[0,0];var oe=function(r,t){var n,e;return 0===t||0===r||Jn(r)||Kn(r)?r:(Zn(ne,r),t+=ne[1],(t+=$n(r=ne[0]))<-1074?Qn(0,r):t>1023?r<0?qn:Dn:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,re(ee,r),n=ee[0],n&=2148532223,e*te(n|=t+1023<<20,ee[1])))};var ue=oe,ie=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var ae=jt,ce=Ot,fe=mt,le=dt,ye=function(r,t,n){var e,o,u;return u=(e=r-t)-(o=e*e)*ie(o),ue(1-(t-e*u/(2-u)-r),n)};var ve=dt,pe=mt,be=wt,se=function(r){var t;return ae(r)||r===le?r:r===fe?0:r>709.782712893384?le:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(t=ce(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),ye(r-.6931471803691238*t,1.9082149292705877e-10*t,t))},de=function(r){var t,n;return 0===r?.16666666666666666:((r<0?-r:r)<=1?(t=r*(r*(-.789474443963537*r-163.72585752598383)-11561.443576500522)-351754.9648081514,n=r*(36157.827983443196+r*(1*r-277.7110814206028))-2110529.7888489086):(t=(r=1/r)*(r*(-351754.9648081514*r-11561.443576500522)-163.72585752598383)-.789474443963537,n=1+r*(r*(36157.827983443196+-2110529.7888489086*r)-277.7110814206028)),t/n)};var me=function(r){var t;return 0===r?r:(t=be(r),r>710.4758600739439||r<-709.089565712824?r>0?ve:pe:t>1?t>=709.0895657128241?(t=se(.5*t),t*=.5*t,r<0&&(t=-t),t):(t=.5*(t=se(t))-.5/t,r<0&&(t=-t),t):r+r*(t*=t)*de(t))};function we(r){return st(r,me)}export{we as default};
//# sourceMappingURL=mod.js.map
