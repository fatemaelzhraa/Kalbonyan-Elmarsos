function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},o={},i=t.parcelRequired251;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired251=i),i.register("27Lyk",(function(t,n){var r,o;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("27Lyk").register(JSON.parse('{"f9fpV":"index.1aba778b.js","eyyUD":"icons.c14567a0.svg"}'));var a,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,d;l=!(d=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,f={};p=!d((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h,g=Function.prototype.call;f=p?g.bind(g):function(){return g.apply(g,arguments)};var v={}.propertyIsEnumerable,m=Object.getOwnPropertyDescriptor,y=m&&!v.call({1:2},1);h=y?function(e){var t=m(this,e);return!!t&&t.enumerable}:v;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,k={},E={},S=Function.prototype,O=S.bind,j=S.call,L=p&&O.bind(j,j),F=(E=p?function(e){return e&&L(e)}:function(e){return e&&function(){return j.apply(e,arguments)}})({}.toString),$=E("".slice);w=function(e){return $(F(e),8,-1)};var x=Object,M=E("".split);k=d((function(){return!x("z").propertyIsEnumerable(0)}))?function(e){return"String"==w(e)?M(e,""):x(e)}:x;var P,T=TypeError;P=function(e){if(null==e)throw T("Can't call method on "+e);return e},_=function(e){return k(P(e))};var q,H,I,N;N=function(e){return"function"==typeof e},I=function(e){return"object"==typeof e?null!==e:N(e)};var C,A={},R=function(e){return N(e)?e:void 0};C=function(e,t){return arguments.length<2?R(c[e]):c[e]&&c[e][t]};var z={};z=E({}.isPrototypeOf);var D,W,U,G={};G=C("navigator","userAgent")||"";var B,J,V=c.process,Y=c.Deno,Q=V&&V.versions||Y&&Y.version,K=Q&&Q.v8;K&&(J=(B=K.split("."))[0]>0&&B[0]<4?1:+(B[0]+B[1])),!J&&G&&(!(B=G.match(/Edge\/(\d+)/))||B[1]>=74)&&(B=G.match(/Chrome\/(\d+)/))&&(J=+B[1]),U=J,W=!!Object.getOwnPropertySymbols&&!d((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&U&&U<41})),D=W&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var X=Object;A=D?function(e){return"symbol"==typeof e}:function(e){var t=C("Symbol");return N(t)&&z(t.prototype,X(e))};var Z,ee,te,ne=String;te=function(e){try{return ne(e)}catch(e){return"Object"}};var re=TypeError;ee=function(e){if(N(e))return e;throw re(te(e)+" is not a function")},Z=function(e,t){var n=e[t];return null==n?void 0:ee(n)};var oe,ie=TypeError;oe=function(e,t){var n,r;if("string"===t&&N(n=e.toString)&&!I(r=f(n,e)))return r;if(N(n=e.valueOf)&&!I(r=f(n,e)))return r;if("string"!==t&&N(n=e.toString)&&!I(r=f(n,e)))return r;throw ie("Can't convert object to primitive value")};var ae;var se,ce={},ue=Object.defineProperty;se=function(e,t){try{ue(c,e,{value:t,configurable:!0,writable:!0})}catch(n){c[e]=t}return t};var le=c["__core-js_shared__"]||se("__core-js_shared__",{});ce=le,(ae=function(e,t){return ce[e]||(ce[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.23.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.5/LICENSE",source:"https://github.com/zloirock/core-js"});var de,pe={},fe=Object;de=function(e){return fe(P(e))};var he=E({}.hasOwnProperty);pe=Object.hasOwn||function(e,t){return he(de(e),t)};var ge,ve=0,me=Math.random(),ye=E(1..toString);ge=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ye(++ve+me,36)};var be=ae("wks"),_e=c.Symbol,we=_e&&_e.for,ke=D?_e:_e&&_e.withoutSetter||ge,Ee=TypeError,Se=function(e){if(!pe(be,e)||!W&&"string"!=typeof be[e]){var t="Symbol."+e;W&&pe(_e,e)?be[e]=_e[e]:be[e]=D&&we?we(t):ke(t)}return be[e]}("toPrimitive");H=function(e,t){if(!I(e)||A(e))return e;var n,r=Z(e,Se);if(r){if(void 0===t&&(t="default"),n=f(r,e,t),!I(n)||A(n))return n;throw Ee("Can't convert object to primitive value")}return void 0===t&&(t="number"),oe(e,t)},q=function(e){var t=H(e,"string");return A(t)?t:t+""};var Oe,je,Le=c.document,Fe=I(Le)&&I(Le.createElement);je=function(e){return Fe?Le.createElement(e):{}},Oe=!l&&!d((function(){return 7!=Object.defineProperty(je("div"),"a",{get:function(){return 7}}).a}));var $e,xe,Me=Object.getOwnPropertyDescriptor,Pe=s=l?Me:function(e,t){if(e=_(e),t=q(t),Oe)try{return Me(e,t)}catch(e){}if(pe(e,t))return b(!f(h,e,t),e[t])},Te={};xe=l&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var qe,He=String,Ie=TypeError;qe=function(e){if(I(e))return e;throw Ie(He(e)+" is not an object")};var Ne=TypeError,Ce=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor;$e=l?xe?function(e,t,n){if(qe(e),t=q(t),qe(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=Ae(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Ce(e,t,n)}:Ce:function(e,t,n){if(qe(e),t=q(t),qe(n),Oe)try{return Ce(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Ne("Accessors not supported");return"value"in n&&(e[t]=n.value),e},Te=l?function(e,t,n){return $e(e,t,b(1,n))}:function(e,t,n){return e[t]=n,e};var Re,ze,De=Function.prototype,We=l&&Object.getOwnPropertyDescriptor,Ue=pe(De,"name"),Ge={EXISTS:Ue,PROPER:Ue&&"something"===function(){}.name,CONFIGURABLE:Ue&&(!l||l&&We(De,"name").configurable)}.CONFIGURABLE,Be={},Je=E(Function.toString);N(ce.inspectSource)||(ce.inspectSource=function(e){return Je(e)}),Be=ce.inspectSource;var Ve,Ye,Qe=c.WeakMap;Ye=N(Qe)&&/native code/.test(Be(Qe));var Ke,Xe=ae("keys");Ke=function(e){return Xe[e]||(Xe[e]=ge(e))};var Ze={};Ze={};var et,tt,nt,rt=c.TypeError,ot=c.WeakMap;if(Ye||ce.state){var it=ce.state||(ce.state=new ot),at=E(it.get),st=E(it.has),ct=E(it.set);et=function(e,t){if(st(it,e))throw new rt("Object already initialized");return t.facade=e,ct(it,e,t),t},tt=function(e){return at(it,e)||{}},nt=function(e){return st(it,e)}}else{var ut=Ke("state");Ze[ut]=!0,et=function(e,t){if(pe(e,ut))throw new rt("Object already initialized");return t.facade=e,Te(e,ut,t),t},tt=function(e){return pe(e,ut)?e[ut]:{}},nt=function(e){return pe(e,ut)}}var lt=(Ve={set:et,get:tt,has:nt,enforce:function(e){return nt(e)?tt(e):et(e,{})},getterFor:function(e){return function(t){var n;if(!I(t)||(n=tt(t)).type!==e)throw rt("Incompatible receiver, "+e+" required");return n}}}).enforce,dt=Ve.get,pt=Object.defineProperty,ft=l&&!d((function(){return 8!==pt((function(){}),"length",{value:8}).length})),ht=String(String).split("String"),gt=ze=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!pe(e,"name")||Ge&&e.name!==t)&&(l?pt(e,"name",{value:t,configurable:!0}):e.name=t),ft&&n&&pe(n,"arity")&&e.length!==n.arity&&pt(e,"length",{value:n.arity});try{n&&pe(n,"constructor")&&n.constructor?l&&pt(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=lt(e);return pe(r,"source")||(r.source=ht.join("string"==typeof t?t:"")),e};Function.prototype.toString=gt((function(){return N(this)&&dt(this).source||Be(this)}),"toString"),Re=function(e,t,n,r){r||(r={});var o=r.enumerable,i=void 0!==r.name?r.name:t;if(N(n)&&ze(n,i,r),r.global)o?e[t]=n:se(t,n);else{try{r.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=n:$e(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var vt,mt,yt,bt,_t,wt={},kt={},Et=Math.ceil,St=Math.floor;kt=Math.trunc||function(e){var t=+e;return(t>0?St:Et)(t)},_t=function(e){var t=+e;return t!=t||0===t?0:kt(t)};var Ot=Math.max,jt=Math.min;bt=function(e,t){var n=_t(e);return n<0?Ot(n+t,0):jt(n,t)};var Lt,Ft,$t=Math.min;Ft=function(e){return e>0?$t(_t(e),9007199254740991):0},Lt=function(e){return Ft(e.length)};var xt=function(e){return function(t,n,r){var o,i=_(t),a=Lt(i),s=bt(r,a);if(e&&n!=n){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((e||s in i)&&i[s]===n)return e||s||0;return!e&&-1}},Mt={includes:xt(!0),indexOf:xt(!1)}.indexOf,Pt=E([].push);yt=function(e,t){var n,r=_(e),o=0,i=[];for(n in r)!pe(Ze,n)&&pe(r,n)&&Pt(i,n);for(;t.length>o;)pe(r,n=t[o++])&&(~Mt(i,n)||Pt(i,n));return i};var Tt,qt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");mt=Object.getOwnPropertyNames||function(e){return yt(e,qt)},Tt=Object.getOwnPropertySymbols;var Ht=E([].concat);wt=C("Reflect","ownKeys")||function(e){var t=mt(qe(e));return Tt?Ht(t,Tt(e)):t},vt=function(e,t,n){for(var r=wt(t),o=$e,i=s,a=0;a<r.length;a++){var c=r[a];pe(e,c)||n&&pe(n,c)||o(e,c,i(t,c))}};var It={},Nt=/#|\.prototype\./,Ct=function(e,t){var n=Rt[At(e)];return n==Dt||n!=zt&&(N(t)?d(t):!!t)},At=Ct.normalize=function(e){return String(e).replace(Nt,".").toLowerCase()},Rt=Ct.data={},zt=Ct.NATIVE="N",Dt=Ct.POLYFILL="P";It=Ct,a=function(e,t){var n,r,o,i,a,s=e.target,u=e.global,l=e.stat;if(n=u?c:l?c[s]||se(s,{}):(c[s]||{}).prototype)for(r in t){if(i=t[r],o=e.dontCallGetSet?(a=Pe(n,r))&&a.value:n[r],!It(u?r:s+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;vt(i,o)}(e.sham||o&&o.sham)&&Te(i,"sham",!0),Re(n,r,i,e)}};var Wt,Ut={},Gt=Function.prototype,Bt=Gt.apply,Jt=Gt.call;Ut="object"==typeof Reflect&&Reflect.apply||(p?Jt.bind(Bt):function(){return Jt.apply(Bt,arguments)});var Vt,Yt=E(E.bind);Vt=function(e,t){return ee(e),void 0===t?e:p?Yt(e,t):function(){return e.apply(t,arguments)}};var Qt={};Qt=C("document","documentElement");var Kt={};Kt=E([].slice);var Xt,Zt=TypeError;Xt=function(e,t){if(e<t)throw Zt("Not enough arguments");return e};var en;en=/(?:ipad|iphone|ipod).*applewebkit/i.test(G);var tn;tn="process"==w(c.process);var nn,rn,on,an,sn=c.setImmediate,cn=c.clearImmediate,un=c.process,ln=c.Dispatch,dn=c.Function,pn=c.MessageChannel,fn=c.String,hn=0,gn={};try{nn=c.location}catch(e){}var vn=function(e){if(pe(gn,e)){var t=gn[e];delete gn[e],t()}},mn=function(e){return function(){vn(e)}},yn=function(e){vn(e.data)},bn=function(e){c.postMessage(fn(e),nn.protocol+"//"+nn.host)};sn&&cn||(sn=function(e){Xt(arguments.length,1);var t=N(e)?e:dn(e),n=Kt(arguments,1);return gn[++hn]=function(){Ut(t,void 0,n)},rn(hn),hn},cn=function(e){delete gn[e]},tn?rn=function(e){un.nextTick(mn(e))}:ln&&ln.now?rn=function(e){ln.now(mn(e))}:pn&&!en?(an=(on=new pn).port2,on.port1.onmessage=yn,rn=Vt(an.postMessage,an)):c.addEventListener&&N(c.postMessage)&&!c.importScripts&&nn&&"file:"!==nn.protocol&&!d(bn)?(rn=bn,c.addEventListener("message",yn,!1)):rn="onreadystatechange"in je("script")?function(e){Qt.appendChild(je("script")).onreadystatechange=function(){Qt.removeChild(this),vn(e)}}:function(e){setTimeout(mn(e),0)});var _n=(Wt={set:sn,clear:cn}).clear;a({global:!0,bind:!0,enumerable:!0,forced:c.clearImmediate!==_n},{clearImmediate:_n});var wn=Wt.set;a({global:!0,bind:!0,enumerable:!0,forced:c.setImmediate!==wn},{setImmediate:wn});var kn=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),a=new F(r||[]);return i._invoke=function(e,t,n){var r=d;return function(o,i){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return x()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=O(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?h:p,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(e,n,a),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",p="suspendedYield",f="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};c(b,i,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_($([])));w&&w!==n&&r.call(w,i)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(o,i,a,s){var c=l(e[o],e,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function O(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function $(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:x}}function x(){return{value:t,done:!0}}return m.prototype=y,c(k,"constructor",y),c(y,"constructor",m),m.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new S(u(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),c(k,s,"Generator"),c(k,i,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=$,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:$(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=kn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=kn:Function("r","regeneratorRuntime = r")(kn)}const En=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),o=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]),i=await o.json();if(!o.ok)throw new Error(`${i.message} (${o.status})`);return i}catch(e){throw e}var n},Sn={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},On=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},jn=function(e=Sn.search.page){Sn.search.page=e;const t=(e-1)*Sn.search.resultsPerPage,n=e*Sn.search.resultsPerPage;return Sn.search.results.slice(t,n)},Ln=function(){localStorage.setItem("bookmarks",JSON.stringify(Sn.bookmarks))},Fn=function(e){Sn.bookmarks.push(e),e.id===Sn.recipe.id&&(Sn.recipe.bookmarked=!0),Ln()};!function(){const e=localStorage.getItem("bookmarks");e&&(Sn.bookmarks=JSON.parse(e))}();var $n,xn,Mn,Pn;$n=new URL(i("27Lyk").resolve("eyyUD"),import.meta.url).toString();class Tn{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),o=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=o[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=`\n  <div class="spinner">\n  <svg>\n    <use href="${n($n)}#icon-loader"></use>\n  </svg>\n</div> \n`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n    <div class="error">\n            <div>\n              <svg>\n                <use href="${n($n)}#icon-alert-triangle"></use>\n              </svg>\n            </div>\n            <p>${e}</p>\n          </div>\n    \n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n    <div class="message">\n            <div>\n              <svg>\n                <use href="${n($n)}#icon-smile"></use>\n              </svg>\n            </div>\n            <p>${e}</p>\n          </div>\n    \n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,o=num.split(" ");if(o[0]&&(n=o[0]),o[1]&&(r=o[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var i=n.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(Mn=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},Pn=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(Mn(this.denominator)){var e=Pn(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}Mn(this.numerator)&&(e=Pn(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),o=Fraction.primeFactors(t);return r.forEach((function(e){var t=o.indexOf(e);t>=0&&(n.push(e),o.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},xn=Fraction;var qn=new class extends Tn{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe.Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;console.log(n);const{updateTo:r}=n.dataset;+r>0&&e(+r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n      <figure class="recipe__fig">\n        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>${this._data.title}</span>\n        </h1>\n      </figure>\n\n      <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${n($n)}#icon-clock"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n          <span class="recipe__info-text">minutes</span>\n        </div>\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${n($n)}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n          <span class="recipe__info-text">servings</span>\n\n          <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n              <svg>\n                <use href="${n($n)}#icon-minus-circle"></use>\n              </svg>\n            </button>\n            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n              <svg>\n                <use href="${n($n)}#icon-plus-circle"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n\n        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n          <svg>\n            <use href="${n($n)}#icon-user"></use>\n          </svg>\n        </div>\n        <button class="btn--round btn--bookmark">\n          <svg class="">\n            <use href="${n($n)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n          </svg>\n        </button>\n      </div>\n\n      <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n      </div>\n\n      <div class="recipe__directions">\n        <h2 class="heading--2">How to cook it</h2>\n        <p class="recipe__directions-text">\n          This recipe was carefully designed and tested by\n          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n          directions at their website.\n        </p>\n        <a\n          class="btn--small recipe__btn"\n          href="${this._data.sourceUrl}"\n          target="_blank"\n        >\n          <span>Directions</span>\n          <svg class="search__icon">\n            <use href="${n($n)}#icon-arrow-right"></use>\n          </svg>\n        </a>\n      </div>\n    `}_generateMarkupIngredient(e){return`\n    <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${n($n)}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${e.quantity?new xn(e.quantity).toString():""}</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${e.unit}</span>\n        ${e.description}\n      </div>\n    </li>\n  `}};var Hn=new class{_parentEl=document.querySelector(".search");getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){return this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var In=new class extends Tn{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n    <li class="preview">\n    <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n      <figure class="preview__fig">\n        <img src="${this._data.image}" alt="${this._data.title}" />\n      </figure>\n      <div class="preview__data">\n        <h4 class="preview__title">${this._data.title}</h4>\n        <p class="preview__publisher">${this._data.publisher}</p>\n        <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n          <svg>\n          <use href="${n($n)}#icon-user"></use>\n          </svg>\n        </div>\n      </div>\n    </a>\n  </li>\n`}};var Nn=new class extends Tn{_parentElement=document.querySelector(".results");_errorMessage="No recipes foun for your query!Please try again;)";_message="";_generateMarkup(){return this._data.map((e=>In.render(e,!1))).join("")}};var Cn=new class extends Tn{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`\n      <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n            <span>Page ${e+1}</span>\n            <svg class="search__icon">\n              <use href="${n($n)}#icon-arrow-right"></use>\n            </svg>\n          </button>`:e===t&&t>1?`\n      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n              <use href="${n($n)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${e-1}</span>\n          </button`:e<t?`\n      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n              <use href="${n($n)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${e-1}</span>\n          </button>\n          <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n            <span>Page ${e+1}</span>\n            <svg class="search__icon">\n              <use href="${n($n)}#icon-arrow-right"></use>\n            </svg>\n          </button>\n          `:""}};var An=new class extends Tn{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet.Find a nice recipe and bookmark it;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>In.render(e,!1))).join("")}};var Rn=new class extends Tn{_parentElement=document.querySelector(".upload");_message="Recipe was successfully upload:)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}};const zn=async function(){try{const e=window.location.hash.slice(1);if(!e)return;qn.renderSpinner(),Nn.update(jn()),An.update(Sn.bookmarks),await async function(e){try{const t=await En(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=8b904e06-5ca3-4d52-8641-e29bed479a06`);Sn.recipe=On(t),Sn.bookmarks.some((t=>t.id===e))?Sn.recipe.bookmarked=!0:Sn.recipe.bookmarked=!1,console.log(Sn.recipe)}catch(e){throw console.error(`${e} ⏰⏰⏰`),e}}(e),qn.render(Sn.recipe)}catch(e){qn.renderError()}},Dn=async function(){try{Nn.renderSpinner();const e=Hn.getQuery();if(!e)return;await async function(e){try{Sn.search.query=e;const t=await En(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=8b904e06-5ca3-4d52-8641-e29bed479a06`);console.log(t),Sn.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),Sn.search.page=1}catch(e){throw console.error(`${e}⏰⏰⏰`),e}}(e),Nn.render(jn()),Cn.render(Sn.search)}catch(e){console.log(e)}},Wn=function(e){Nn.render(jn(e)),Cn.render(Sn.search)},Un=function(e){!function(e){Sn.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/Sn.recipe.servings})),Sn.recipe.servings=e}(e),qn.update(Sn.recipe)},Gn=function(){Sn.recipe.bookmarked?function(e){const t=Sn.bookmarks.findIndex((t=>t.id===e));Sn.bookmarks.splice(t,1),e===Sn.recipe.id&&(Sn.recipe.bookmarked=!1),Ln()}(Sn.recipe.id):Fn(Sn.recipe),qn.update(Sn.recipe),An.render(Sn.bookmarks)},Bn=function(){An.render(Sn.bookmarks)},Jn=async function(e){try{Rn.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient fromat!Please use the correct format:)");const[n,r,o]=t;return{quantity:n?+n:null,unit:r,description:o}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await En("https://forkify-api.herokuapp.com/api/v2/recipes/?key=8b904e06-5ca3-4d52-8641-e29bed479a06",n);Sn.recipe=On(r),Fn(Sn.recipe)}catch(e){throw e}}(e),console.log(Sn.recipe),qn.render(Sn.recipe),Rn.renderMessage(),An.render(Sn.bookmarks),window.history.pushState(null,"",`#${Sn.recipe.id}`),setTimeout((function(){Rn.toggleWindow()}),2500)}catch(e){console.error("💥💥💥💥💥💥",e),Rn.renderError(e.message)}};An.addHandlerRender(Bn),qn.addHandlerRender(zn),qn.addHandlerUpdateServings(Un),qn.addHandlerAddBookmark(Gn),Hn.addHandlerSearch(Dn),Cn.addHandlerClick(Wn),Rn.addHandlerUpload(Jn);
//# sourceMappingURL=index.1aba778b.js.map
