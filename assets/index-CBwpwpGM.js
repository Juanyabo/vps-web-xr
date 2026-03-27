(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var ud={exports:{}},Lo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function ox(){if(B_)return Lo;B_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:u}}return Lo.Fragment=t,Lo.jsx=i,Lo.jsxs=i,Lo}var F_;function lx(){return F_||(F_=1,ud.exports=ox()),ud.exports}var la=lx(),cd={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function ux(){if(I_)return re;I_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function E(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,x={};function S(L,$,St){this.props=L,this.context=$,this.refs=x,this.updater=St||M}S.prototype.isReactComponent={},S.prototype.setState=function(L,$){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,$,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function B(){}B.prototype=S.prototype;function N(L,$,St){this.props=L,this.context=$,this.refs=x,this.updater=St||M}var w=N.prototype=new B;w.constructor=N,T(w,S.prototype),w.isPureReactComponent=!0;var X=Array.isArray;function I(){}var P={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function D(L,$,St){var Y=St.ref;return{$$typeof:s,type:L,key:$,ref:Y!==void 0?Y:null,props:St}}function C(L,$){return D(L.type,$,L.props)}function G(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function lt(L){var $={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(St){return $[St]})}var at=/\/+/g;function ht(L,$){return typeof L=="object"&&L!==null&&L.key!=null?lt(""+L.key):$.toString(36)}function _t(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(I,I):(L.status="pending",L.then(function($){L.status==="pending"&&(L.status="fulfilled",L.value=$)},function($){L.status==="pending"&&(L.status="rejected",L.reason=$)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function O(L,$,St,Y,ft){var Mt=typeof L;(Mt==="undefined"||Mt==="boolean")&&(L=null);var xt=!1;if(L===null)xt=!0;else switch(Mt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(L.$$typeof){case s:case t:xt=!0;break;case g:return xt=L._init,O(xt(L._payload),$,St,Y,ft)}}if(xt)return ft=ft(L),xt=Y===""?"."+ht(L,0):Y,X(ft)?(St="",xt!=null&&(St=xt.replace(at,"$&/")+"/"),O(ft,$,St,"",function(Zt){return Zt})):ft!=null&&(G(ft)&&(ft=C(ft,St+(ft.key==null||L&&L.key===ft.key?"":(""+ft.key).replace(at,"$&/")+"/")+xt)),$.push(ft)),1;xt=0;var zt=Y===""?".":Y+":";if(X(L))for(var Yt=0;Yt<L.length;Yt++)Y=L[Yt],Mt=zt+ht(Y,Yt),xt+=O(Y,$,St,Mt,ft);else if(Yt=E(L),typeof Yt=="function")for(L=Yt.call(L),Yt=0;!(Y=L.next()).done;)Y=Y.value,Mt=zt+ht(Y,Yt++),xt+=O(Y,$,St,Mt,ft);else if(Mt==="object"){if(typeof L.then=="function")return O(_t(L),$,St,Y,ft);throw $=String(L),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return xt}function K(L,$,St){if(L==null)return L;var Y=[],ft=0;return O(L,Y,"","",function(Mt){return $.call(St,Mt,ft++)}),Y}function q(L){if(L._status===-1){var $=L._result;$=$(),$.then(function(St){(L._status===0||L._status===-1)&&(L._status=1,L._result=St)},function(St){(L._status===0||L._status===-1)&&(L._status=2,L._result=St)}),L._status===-1&&(L._status=0,L._result=$)}if(L._status===1)return L._result.default;throw L._result}var yt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Tt={map:K,forEach:function(L,$,St){K(L,function(){$.apply(this,arguments)},St)},count:function(L){var $=0;return K(L,function(){$++}),$},toArray:function(L){return K(L,function($){return $})||[]},only:function(L){if(!G(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return re.Activity=_,re.Children=Tt,re.Component=S,re.Fragment=i,re.Profiler=l,re.PureComponent=N,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,re.__COMPILER_RUNTIME={__proto__:null,c:function(L){return P.H.useMemoCache(L)}},re.cache=function(L){return function(){return L.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(L,$,St){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Y=T({},L.props),ft=L.key;if($!=null)for(Mt in $.key!==void 0&&(ft=""+$.key),$)!Z.call($,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&$.ref===void 0||(Y[Mt]=$[Mt]);var Mt=arguments.length-2;if(Mt===1)Y.children=St;else if(1<Mt){for(var xt=Array(Mt),zt=0;zt<Mt;zt++)xt[zt]=arguments[zt+2];Y.children=xt}return D(L.type,ft,Y)},re.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},re.createElement=function(L,$,St){var Y,ft={},Mt=null;if($!=null)for(Y in $.key!==void 0&&(Mt=""+$.key),$)Z.call($,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(ft[Y]=$[Y]);var xt=arguments.length-2;if(xt===1)ft.children=St;else if(1<xt){for(var zt=Array(xt),Yt=0;Yt<xt;Yt++)zt[Yt]=arguments[Yt+2];ft.children=zt}if(L&&L.defaultProps)for(Y in xt=L.defaultProps,xt)ft[Y]===void 0&&(ft[Y]=xt[Y]);return D(L,Mt,ft)},re.createRef=function(){return{current:null}},re.forwardRef=function(L){return{$$typeof:h,render:L}},re.isValidElement=G,re.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:q}},re.memo=function(L,$){return{$$typeof:p,type:L,compare:$===void 0?null:$}},re.startTransition=function(L){var $=P.T,St={};P.T=St;try{var Y=L(),ft=P.S;ft!==null&&ft(St,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(I,yt)}catch(Mt){yt(Mt)}finally{$!==null&&St.types!==null&&($.types=St.types),P.T=$}},re.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},re.use=function(L){return P.H.use(L)},re.useActionState=function(L,$,St){return P.H.useActionState(L,$,St)},re.useCallback=function(L,$){return P.H.useCallback(L,$)},re.useContext=function(L){return P.H.useContext(L)},re.useDebugValue=function(){},re.useDeferredValue=function(L,$){return P.H.useDeferredValue(L,$)},re.useEffect=function(L,$){return P.H.useEffect(L,$)},re.useEffectEvent=function(L){return P.H.useEffectEvent(L)},re.useId=function(){return P.H.useId()},re.useImperativeHandle=function(L,$,St){return P.H.useImperativeHandle(L,$,St)},re.useInsertionEffect=function(L,$){return P.H.useInsertionEffect(L,$)},re.useLayoutEffect=function(L,$){return P.H.useLayoutEffect(L,$)},re.useMemo=function(L,$){return P.H.useMemo(L,$)},re.useOptimistic=function(L,$){return P.H.useOptimistic(L,$)},re.useReducer=function(L,$,St){return P.H.useReducer(L,$,St)},re.useRef=function(L){return P.H.useRef(L)},re.useState=function(L){return P.H.useState(L)},re.useSyncExternalStore=function(L,$,St){return P.H.useSyncExternalStore(L,$,St)},re.useTransition=function(){return P.H.useTransition()},re.version="19.2.4",re}var H_;function Hh(){return H_||(H_=1,cd.exports=ux()),cd.exports}var kn=Hh(),fd={exports:{}},No={},dd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function cx(){return G_||(G_=1,(function(s){function t(O,K){var q=O.length;O.push(K);t:for(;0<q;){var yt=q-1>>>1,Tt=O[yt];if(0<l(Tt,K))O[yt]=K,O[q]=Tt,q=yt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var K=O[0],q=O.pop();if(q!==K){O[0]=q;t:for(var yt=0,Tt=O.length,L=Tt>>>1;yt<L;){var $=2*(yt+1)-1,St=O[$],Y=$+1,ft=O[Y];if(0>l(St,q))Y<Tt&&0>l(ft,St)?(O[yt]=ft,O[Y]=q,yt=Y):(O[yt]=St,O[$]=q,yt=$);else if(Y<Tt&&0>l(ft,q))O[yt]=ft,O[Y]=q,yt=Y;else break t}}return K}function l(O,K){var q=O.sortIndex-K.sortIndex;return q!==0?q:O.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,_=null,y=3,E=!1,M=!1,T=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function w(O){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=O)r(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function X(O){if(T=!1,w(O),!M)if(i(m)!==null)M=!0,I||(I=!0,lt());else{var K=i(p);K!==null&&_t(X,K.startTime-O)}}var I=!1,P=-1,Z=5,D=-1;function C(){return x?!0:!(s.unstable_now()-D<Z)}function G(){if(x=!1,I){var O=s.unstable_now();D=O;var K=!0;try{t:{M=!1,T&&(T=!1,B(P),P=-1),E=!0;var q=y;try{e:{for(w(O),_=i(m);_!==null&&!(_.expirationTime>O&&C());){var yt=_.callback;if(typeof yt=="function"){_.callback=null,y=_.priorityLevel;var Tt=yt(_.expirationTime<=O);if(O=s.unstable_now(),typeof Tt=="function"){_.callback=Tt,w(O),K=!0;break e}_===i(m)&&r(m),w(O)}else r(m);_=i(m)}if(_!==null)K=!0;else{var L=i(p);L!==null&&_t(X,L.startTime-O),K=!1}}break t}finally{_=null,y=q,E=!1}K=void 0}}finally{K?lt():I=!1}}}var lt;if(typeof N=="function")lt=function(){N(G)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ht=at.port2;at.port1.onmessage=G,lt=function(){ht.postMessage(null)}}else lt=function(){S(G,0)};function _t(O,K){P=S(function(){O(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(O){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var q=y;y=K;try{return O()}finally{y=q}},s.unstable_requestPaint=function(){x=!0},s.unstable_runWithPriority=function(O,K){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=y;y=O;try{return K()}finally{y=q}},s.unstable_scheduleCallback=function(O,K,q){var yt=s.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?yt+q:yt):q=yt,O){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=q+Tt,O={id:g++,callback:K,priorityLevel:O,startTime:q,expirationTime:Tt,sortIndex:-1},q>yt?(O.sortIndex=q,t(p,O),i(m)===null&&O===i(p)&&(T?(B(P),P=-1):T=!0,_t(X,q-yt))):(O.sortIndex=Tt,t(m,O),M||E||(M=!0,I||(I=!0,lt()))),O},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(O){var K=y;return function(){var q=y;y=K;try{return O.apply(this,arguments)}finally{y=q}}}})(hd)),hd}var V_;function fx(){return V_||(V_=1,dd.exports=cx()),dd.exports}var pd={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function dx(){if(k_)return An;k_=1;var s=Hh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},An.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:E}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:y,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},An.useFormStatus=function(){return f.H.useHostTransitionStatus()},An.version="19.2.4",An}var X_;function hx(){if(X_)return pd.exports;X_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),pd.exports=dx(),pd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function px(){if(q_)return No;q_=1;var s=fx(),t=Hh(),i=hx();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===a)return m(c),e;if(d===o)return m(c),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=d;else{for(var v=!1,b=c.child;b;){if(b===a){v=!0,a=c,o=d;break}if(b===o){v=!0,o=c,a=d;break}b=b.sibling}if(!v){for(b=d.child;b;){if(b===a){v=!0,a=d,o=c;break}if(b===o){v=!0,o=d,a=c;break}b=b.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),N=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function lt(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case S:return"Profiler";case x:return"StrictMode";case X:return"Suspense";case I:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case N:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:ht(e.type)||"Memo";case Z:n=e._payload,e=e._init;try{return ht(e(n))}catch{}}return null}var _t=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},yt=[],Tt=-1;function L(e){return{current:e}}function $(e){0>Tt||(e.current=yt[Tt],yt[Tt]=null,Tt--)}function St(e,n){Tt++,yt[Tt]=e.current,e.current=n}var Y=L(null),ft=L(null),Mt=L(null),xt=L(null);function zt(e,n){switch(St(Mt,n),St(ft,e),St(Y,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?s_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=s_(n),e=o_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(Y),St(Y,e)}function Yt(){$(Y),$(ft),$(Mt)}function Zt(e){e.memoizedState!==null&&St(xt,e);var n=Y.current,a=o_(n,e.type);n!==a&&(St(ft,e),St(Y,a))}function Ve(e){ft.current===e&&($(Y),$(ft)),xt.current===e&&($(xt),Co._currentValue=q)}var Ie,fe;function F(e){if(Ie===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ie=n&&n[1]||"",fe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ie+e+fe}var Tn=!1;function de(e,n){if(!e||Tn)return"";Tn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(st){var tt=st}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(st){tt=st}e.call(gt.prototype)}}else{try{throw Error()}catch(st){tt=st}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(st){if(st&&tt&&typeof st.stack=="string")return[st.stack,tt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),v=d[0],b=d[1];if(v&&b){var z=v.split(`
`),J=b.split(`
`);for(c=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(o===z.length||c===J.length)for(o=z.length-1,c=J.length-1;1<=o&&0<=c&&z[o]!==J[c];)c--;for(;1<=o&&0<=c;o--,c--)if(z[o]!==J[c]){if(o!==1||c!==1)do if(o--,c--,0>c||z[o]!==J[c]){var ct=`
`+z[o].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=o&&0<=c);break}}}finally{Tn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?F(a):""}function me(e,n){switch(e.tag){case 26:case 27:case 5:return F(e.type);case 16:return F("Lazy");case 13:return e.child!==n&&n!==null?F("Suspense Fallback"):F("Suspense");case 19:return F("SuspenseList");case 0:case 15:return de(e.type,!1);case 11:return de(e.type.render,!1);case 1:return de(e.type,!0);case 31:return F("Activity");default:return""}}function kt(e){try{var n="",a=null;do n+=me(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var we=Object.prototype.hasOwnProperty,Vt=s.unstable_scheduleCallback,U=s.unstable_cancelCallback,A=s.unstable_shouldYield,et=s.unstable_requestPaint,dt=s.unstable_now,Et=s.unstable_getCurrentPriorityLevel,mt=s.unstable_ImmediatePriority,Ht=s.unstable_UserBlockingPriority,Ct=s.unstable_NormalPriority,Kt=s.unstable_LowPriority,Jt=s.unstable_IdlePriority,At=s.log,Bt=s.unstable_setDisableYieldValue,jt=null,Gt=null;function Ot(e){if(typeof At=="function"&&Bt(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(jt,e)}catch{}}var te=Math.clz32?Math.clz32:k,se=Math.log,Le=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(se(e)/Le|0)|0}var wt=256,ut=262144,vt=4194304;function Rt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~d,o!==0?c=Rt(o):(v&=b,v!==0?c=Rt(v):a||(a=b&~e,a!==0&&(c=Rt(a))))):(b=o&~d,b!==0?c=Rt(b):v!==0?c=Rt(v):a||(a=o&~e,a!==0&&(c=Rt(a)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:c}function ne(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ye(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function un(){var e=vt;return vt<<=1,(vt&62914560)===0&&(vt=4194304),e}function Me(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function _n(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gi(e,n,a,o,c,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,z=e.expirationTimes,J=e.hiddenUpdates;for(a=v&~a;0<a;){var ct=31-te(a),gt=1<<ct;b[ct]=0,z[ct]=-1;var tt=J[ct];if(tt!==null)for(J[ct]=null,ct=0;ct<tt.length;ct++){var st=tt[ct];st!==null&&(st.lane&=-536870913)}a&=~gt}o!==0&&Is(e,o,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~n))}function Is(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-te(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Hs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-te(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function wi(e,n){var a=n&-n;return a=(a&42)!==0?1:Za(a),(a&(e.suspendedLanes|n))!==0?0:a}function Za(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Nr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gs(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:D_(e.type))}function Ka(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var _i=Math.random().toString(36).slice(2),Ze="__reactFiber$"+_i,vn="__reactProps$"+_i,Fi="__reactContainer$"+_i,Vs="__reactEvents$"+_i,nc="__reactListeners$"+_i,ic="__reactHandles$"+_i,tl="__reactResources$"+_i,Qa="__reactMarker$"+_i;function ks(e){delete e[Ze],delete e[vn],delete e[Vs],delete e[nc],delete e[ic]}function R(e){var n=e[Ze];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Fi]||a[Ze]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=p_(e);e!==null;){if(a=e[Ze])return a;e=p_(e)}return n}e=a,a=e.parentNode}return null}function W(e){if(e=e[Ze]||e[Fi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function nt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function it(e){var n=e[tl];return n||(n=e[tl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function V(e){e[Qa]=!0}var bt=new Set,Ut={};function Nt(e,n){Pt(e,n),Pt(e+"Capture",n)}function Pt(e,n){for(Ut[e]=n,e=0;e<n.length;e++)bt.add(n[e])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},Xt={};function ve(e){return we.call(Xt,e)?!0:we.call($t,e)?!1:ie.test(e)?Xt[e]=!0:($t[e]=!0,!1)}function Se(e,n,a){if(ve(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ke(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Te(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ae(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function cn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,d.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ee(e){if(!e._valueTracker){var n=Wt(e)?"checked":"value";e._valueTracker=cn(e,n,""+e[n])}}function On(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Wt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dn=/[\n"\\]/g;function pn(e){return e.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ne(e,n,a,o,c,d,v,b){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ae(n)):e.value!==""+ae(n)&&(e.value=""+ae(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?bn(e,v,ae(n)):a!=null?bn(e,v,ae(a)):o!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+ae(b):e.removeAttribute("name")}function Un(e,n,a,o,c,d,v,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ee(e);return}a=a!=null?""+ae(a):"",n=n!=null?""+ae(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Ee(e)}function bn(e,n,a){n==="number"&&vi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ke(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ae(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Sn(e,n,a){if(n!=null&&(n=""+ae(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ae(a):""}function Or(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(_t(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ae(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ee(e)}function Pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var nS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ip(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||nS.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ap(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&ip(e,c,o)}else for(var d in n)n.hasOwnProperty(d)&&ip(e,d,n[d])}function ac(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),aS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function el(e){return aS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ii(){}var rc=null;function sc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pr=null,zr=null;function rp(e){var n=W(e);if(n&&(e=n.stateNode)){var a=e[vn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ne(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[vn]||null;if(!c)throw Error(r(90));Ne(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&On(o)}break t;case"textarea":Sn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ke(e,!!a.multiple,n,!1)}}}var oc=!1;function sp(e,n,a){if(oc)return e(n,a);oc=!0;try{var o=e(n);return o}finally{if(oc=!1,(Pr!==null||zr!==null)&&(Vl(),Pr&&(n=Pr,e=zr,zr=Pr=null,rp(n),e)))for(n=0;n<e.length;n++)rp(e[n])}}function Xs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[vn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lc=!1;if(Hi)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){lc=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{lc=!1}var ma=null,uc=null,nl=null;function op(){if(nl)return nl;var e,n=uc,a=n.length,o,c="value"in ma?ma.value:ma.textContent,d=c.length;for(e=0;e<a&&n[e]===c[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===c[d-o];o++);return nl=c.slice(e,1<o?1-o:void 0)}function il(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function al(){return!0}function lp(){return!1}function zn(e){function n(a,o,c,d,v){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?al:lp,this.isPropagationStopped=lp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=zn(Ja),Ws=_({},Ja,{view:0,detail:0}),rS=zn(Ws),cc,fc,Ys,sl=_({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ys&&(Ys&&e.type==="mousemove"?(cc=e.screenX-Ys.screenX,fc=e.screenY-Ys.screenY):fc=cc=0,Ys=e),cc)},movementY:function(e){return"movementY"in e?e.movementY:fc}}),up=zn(sl),sS=_({},sl,{dataTransfer:0}),oS=zn(sS),lS=_({},Ws,{relatedTarget:0}),dc=zn(lS),uS=_({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),cS=zn(uS),fS=_({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dS=zn(fS),hS=_({},Ja,{data:0}),cp=zn(hS),pS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _S(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=gS[e])?!!n[e]:!1}function hc(){return _S}var vS=_({},Ws,{key:function(e){if(e.key){var n=pS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hc,charCode:function(e){return e.type==="keypress"?il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),SS=zn(vS),yS=_({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fp=zn(yS),xS=_({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hc}),ES=zn(xS),MS=_({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),TS=zn(MS),bS=_({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),AS=zn(bS),RS=_({},Ja,{newState:0,oldState:0}),CS=zn(RS),wS=[9,13,27,32],pc=Hi&&"CompositionEvent"in window,js=null;Hi&&"documentMode"in document&&(js=document.documentMode);var DS=Hi&&"TextEvent"in window&&!js,dp=Hi&&(!pc||js&&8<js&&11>=js),hp=" ",pp=!1;function mp(e,n){switch(e){case"keyup":return wS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function US(e,n){switch(e){case"compositionend":return gp(n);case"keypress":return n.which!==32?null:(pp=!0,hp);case"textInput":return e=n.data,e===hp&&pp?null:e;default:return null}}function LS(e,n){if(Br)return e==="compositionend"||!pc&&mp(e,n)?(e=op(),nl=uc=ma=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dp&&n.locale!=="ko"?null:n.data;default:return null}}var NS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!NS[e.type]:n==="textarea"}function vp(e,n,a,o){Pr?zr?zr.push(o):zr=[o]:Pr=o,n=Zl(n,"onChange"),0<n.length&&(a=new rl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Zs=null,Ks=null;function OS(e){t_(e,0)}function ol(e){var n=nt(e);if(On(n))return e}function Sp(e,n){if(e==="change")return n}var yp=!1;if(Hi){var mc;if(Hi){var gc="oninput"in document;if(!gc){var xp=document.createElement("div");xp.setAttribute("oninput","return;"),gc=typeof xp.oninput=="function"}mc=gc}else mc=!1;yp=mc&&(!document.documentMode||9<document.documentMode)}function Ep(){Zs&&(Zs.detachEvent("onpropertychange",Mp),Ks=Zs=null)}function Mp(e){if(e.propertyName==="value"&&ol(Ks)){var n=[];vp(n,Ks,e,sc(e)),sp(OS,n)}}function PS(e,n,a){e==="focusin"?(Ep(),Zs=n,Ks=a,Zs.attachEvent("onpropertychange",Mp)):e==="focusout"&&Ep()}function zS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(Ks)}function BS(e,n){if(e==="click")return ol(n)}function FS(e,n){if(e==="input"||e==="change")return ol(n)}function IS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:IS;function Qs(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!we.call(n,c)||!jn(e[c],n[c]))return!1}return!0}function Tp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bp(e,n){var a=Tp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Tp(a)}}function Ap(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ap(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Rp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=vi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=vi(e.document)}return n}function _c(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var HS=Hi&&"documentMode"in document&&11>=document.documentMode,Fr=null,vc=null,Js=null,Sc=!1;function Cp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Sc||Fr==null||Fr!==vi(o)||(o=Fr,"selectionStart"in o&&_c(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Js&&Qs(Js,o)||(Js=o,o=Zl(vc,"onSelect"),0<o.length&&(n=new rl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Fr)))}function $a(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ir={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},yc={},wp={};Hi&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function tr(e){if(yc[e])return yc[e];if(!Ir[e])return e;var n=Ir[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in wp)return yc[e]=n[a];return e}var Dp=tr("animationend"),Up=tr("animationiteration"),Lp=tr("animationstart"),GS=tr("transitionrun"),VS=tr("transitionstart"),kS=tr("transitioncancel"),Np=tr("transitionend"),Op=new Map,xc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xc.push("scrollEnd");function Si(e,n){Op.set(e,n),Nt(n,[e])}var ll=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],Hr=0,Ec=0;function ul(){for(var e=Hr,n=Ec=Hr=0;n<e;){var a=ai[n];ai[n++]=null;var o=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var d=ai[n];if(ai[n++]=null,o!==null&&c!==null){var v=o.pending;v===null?c.next=c:(c.next=v.next,v.next=c),o.pending=c}d!==0&&Pp(a,c,d)}}function cl(e,n,a,o){ai[Hr++]=e,ai[Hr++]=n,ai[Hr++]=a,ai[Hr++]=o,Ec|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Mc(e,n,a,o){return cl(e,n,a,o),fl(e)}function er(e,n){return cl(e,null,null,n),fl(e)}function Pp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&n!==null&&(c=31-te(a),e=d.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),d):null}function fl(e){if(50<xo)throw xo=0,Nf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Gr={};function XS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,a,o){return new XS(e,n,a,o)}function Tc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gi(e,n){var a=e.alternate;return a===null?(a=Zn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function zp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function dl(e,n,a,o,c,d){var v=0;if(o=e,typeof e=="function")Tc(e)&&(v=1);else if(typeof e=="string")v=Zy(e,a,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Zn(31,a,n,c),e.elementType=D,e.lanes=d,e;case T:return nr(a.children,c,d,n);case x:v=8,c|=24;break;case S:return e=Zn(12,a,n,c|2),e.elementType=S,e.lanes=d,e;case X:return e=Zn(13,a,n,c),e.elementType=X,e.lanes=d,e;case I:return e=Zn(19,a,n,c),e.elementType=I,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:v=10;break t;case B:v=9;break t;case w:v=11;break t;case P:v=14;break t;case Z:v=16,o=null;break t}v=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Zn(v,a,n,c),n.elementType=e,n.type=o,n.lanes=d,n}function nr(e,n,a,o){return e=Zn(7,e,o,n),e.lanes=a,e}function bc(e,n,a){return e=Zn(6,e,null,n),e.lanes=a,e}function Bp(e){var n=Zn(18,null,null,0);return n.stateNode=e,n}function Ac(e,n,a){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Fp=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=Fp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:kt(n)},Fp.set(e,n),n)}return{value:e,source:n,stack:kt(n)}}var Vr=[],kr=0,hl=null,$s=0,si=[],oi=0,ga=null,Di=1,Ui="";function Vi(e,n){Vr[kr++]=$s,Vr[kr++]=hl,hl=e,$s=n}function Ip(e,n,a){si[oi++]=Di,si[oi++]=Ui,si[oi++]=ga,ga=e;var o=Di;e=Ui;var c=32-te(o)-1;o&=~(1<<c),a+=1;var d=32-te(n)+c;if(30<d){var v=c-c%5;d=(o&(1<<v)-1).toString(32),o>>=v,c-=v,Di=1<<32-te(n)+c|a<<c|o,Ui=d+e}else Di=1<<d|a<<c|o,Ui=e}function Rc(e){e.return!==null&&(Vi(e,1),Ip(e,1,0))}function Cc(e){for(;e===hl;)hl=Vr[--kr],Vr[kr]=null,$s=Vr[--kr],Vr[kr]=null;for(;e===ga;)ga=si[--oi],si[oi]=null,Ui=si[--oi],si[oi]=null,Di=si[--oi],si[oi]=null}function Hp(e,n){si[oi++]=Di,si[oi++]=Ui,si[oi++]=ga,Di=n.id,Ui=n.overflow,ga=e}var yn=null,Xe=null,ye=!1,_a=null,li=!1,wc=Error(r(519));function va(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw to(ri(n,e)),wc}function Gp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Ze]=e,n[vn]=o,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)pe(Mo[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Un(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),Or(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||a_(n.textContent,a)?(o.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),o.onScroll!=null&&pe("scroll",n),o.onScrollEnd!=null&&pe("scrollend",n),o.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||va(e,!0)}function Vp(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:yn=yn.return}}function Xr(e){if(e!==yn)return!1;if(!ye)return Vp(e),ye=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||jf(e.type,e.memoizedProps)),a=!a),a&&Xe&&va(e),Vp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Xe=h_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Xe=h_(e)}else n===27?(n=Xe,La(e.type)?(e=$f,$f=null,Xe=e):Xe=n):Xe=yn?ci(e.stateNode.nextSibling):null;return!0}function ir(){Xe=yn=null,ye=!1}function Dc(){var e=_a;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),_a=null),e}function to(e){_a===null?_a=[e]:_a.push(e)}var Uc=L(null),ar=null,ki=null;function Sa(e,n,a){St(Uc,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=Uc.current,$(Uc)}function Lc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Nc(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var v=c.child;d=d.firstContext;t:for(;d!==null;){var b=d;d=c;for(var z=0;z<n.length;z++)if(b.context===n[z]){d.lanes|=a,b=d.alternate,b!==null&&(b.lanes|=a),Lc(d.return,a,e),o||(v=null);break t}d=b.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(r(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Lc(v,a,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function qr(e,n,a,o){e=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var b=c.type;jn(c.pendingProps.value,v.value)||(e!==null?e.push(b):e=[b])}}else if(c===xt.current){if(v=c.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Co):e=[Co])}c=c.return}e!==null&&Nc(n,e,a,o),n.flags|=262144}function pl(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function rr(e){ar=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xn(e){return kp(ar,e)}function ml(e,n){return ar===null&&rr(e),kp(e,n)}function kp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(r(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var qS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},WS=s.unstable_scheduleCallback,YS=s.unstable_NormalPriority,nn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Oc(){return{controller:new qS,data:new Map,refCount:0}}function eo(e){e.refCount--,e.refCount===0&&WS(YS,function(){e.controller.abort()})}var no=null,Pc=0,Wr=0,Yr=null;function jS(e,n){if(no===null){var a=no=[];Pc=0,Wr=If(),Yr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Pc++,n.then(Xp,Xp),n}function Xp(){if(--Pc===0&&no!==null){Yr!==null&&(Yr.status="fulfilled");var e=no;no=null,Wr=0,Yr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ZS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var qp=O.S;O.S=function(e,n){Cg=dt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&jS(e,n),qp!==null&&qp(e,n)};var sr=L(null);function zc(){var e=sr.current;return e!==null?e:He.pooledCache}function gl(e,n){n===null?St(sr,sr.current):St(sr,n.pool)}function Wp(){var e=zc();return e===null?null:{parent:nn._currentValue,pool:e}}var jr=Error(r(460)),Bc=Error(r(474)),_l=Error(r(542)),vl={then:function(){}};function Yp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function jp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Kp(e),e;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Kp(e),e}throw lr=n,jr}}function or(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(lr=a,jr):a}}var lr=null;function Zp(){if(lr===null)throw Error(r(459));var e=lr;return lr=null,e}function Kp(e){if(e===jr||e===_l)throw Error(r(483))}var Zr=null,io=0;function Sl(e){var n=io;return io+=1,Zr===null&&(Zr=[]),jp(Zr,e,n)}function ao(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function yl(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Qp(e){function n(j,H){if(e){var Q=j.deletions;Q===null?(j.deletions=[H],j.flags|=16):Q.push(H)}}function a(j,H){if(!e)return null;for(;H!==null;)n(j,H),H=H.sibling;return null}function o(j){for(var H=new Map;j!==null;)j.key!==null?H.set(j.key,j):H.set(j.index,j),j=j.sibling;return H}function c(j,H){return j=Gi(j,H),j.index=0,j.sibling=null,j}function d(j,H,Q){return j.index=Q,e?(Q=j.alternate,Q!==null?(Q=Q.index,Q<H?(j.flags|=67108866,H):Q):(j.flags|=67108866,H)):(j.flags|=1048576,H)}function v(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function b(j,H,Q,pt){return H===null||H.tag!==6?(H=bc(Q,j.mode,pt),H.return=j,H):(H=c(H,Q),H.return=j,H)}function z(j,H,Q,pt){var qt=Q.type;return qt===T?ct(j,H,Q.props.children,pt,Q.key):H!==null&&(H.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===Z&&or(qt)===H.type)?(H=c(H,Q.props),ao(H,Q),H.return=j,H):(H=dl(Q.type,Q.key,Q.props,null,j.mode,pt),ao(H,Q),H.return=j,H)}function J(j,H,Q,pt){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=Ac(Q,j.mode,pt),H.return=j,H):(H=c(H,Q.children||[]),H.return=j,H)}function ct(j,H,Q,pt,qt){return H===null||H.tag!==7?(H=nr(Q,j.mode,pt,qt),H.return=j,H):(H=c(H,Q),H.return=j,H)}function gt(j,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=bc(""+H,j.mode,Q),H.return=j,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case E:return Q=dl(H.type,H.key,H.props,null,j.mode,Q),ao(Q,H),Q.return=j,Q;case M:return H=Ac(H,j.mode,Q),H.return=j,H;case Z:return H=or(H),gt(j,H,Q)}if(_t(H)||lt(H))return H=nr(H,j.mode,Q,null),H.return=j,H;if(typeof H.then=="function")return gt(j,Sl(H),Q);if(H.$$typeof===N)return gt(j,ml(j,H),Q);yl(j,H)}return null}function tt(j,H,Q,pt){var qt=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return qt!==null?null:b(j,H,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:return Q.key===qt?z(j,H,Q,pt):null;case M:return Q.key===qt?J(j,H,Q,pt):null;case Z:return Q=or(Q),tt(j,H,Q,pt)}if(_t(Q)||lt(Q))return qt!==null?null:ct(j,H,Q,pt,null);if(typeof Q.then=="function")return tt(j,H,Sl(Q),pt);if(Q.$$typeof===N)return tt(j,H,ml(j,Q),pt);yl(j,Q)}return null}function st(j,H,Q,pt,qt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return j=j.get(Q)||null,b(H,j,""+pt,qt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case E:return j=j.get(pt.key===null?Q:pt.key)||null,z(H,j,pt,qt);case M:return j=j.get(pt.key===null?Q:pt.key)||null,J(H,j,pt,qt);case Z:return pt=or(pt),st(j,H,Q,pt,qt)}if(_t(pt)||lt(pt))return j=j.get(Q)||null,ct(H,j,pt,qt,null);if(typeof pt.then=="function")return st(j,H,Q,Sl(pt),qt);if(pt.$$typeof===N)return st(j,H,Q,ml(H,pt),qt);yl(H,pt)}return null}function Ft(j,H,Q,pt){for(var qt=null,be=null,It=H,le=H=0,_e=null;It!==null&&le<Q.length;le++){It.index>le?(_e=It,It=null):_e=It.sibling;var Ae=tt(j,It,Q[le],pt);if(Ae===null){It===null&&(It=_e);break}e&&It&&Ae.alternate===null&&n(j,It),H=d(Ae,H,le),be===null?qt=Ae:be.sibling=Ae,be=Ae,It=_e}if(le===Q.length)return a(j,It),ye&&Vi(j,le),qt;if(It===null){for(;le<Q.length;le++)It=gt(j,Q[le],pt),It!==null&&(H=d(It,H,le),be===null?qt=It:be.sibling=It,be=It);return ye&&Vi(j,le),qt}for(It=o(It);le<Q.length;le++)_e=st(It,j,le,Q[le],pt),_e!==null&&(e&&_e.alternate!==null&&It.delete(_e.key===null?le:_e.key),H=d(_e,H,le),be===null?qt=_e:be.sibling=_e,be=_e);return e&&It.forEach(function(Ba){return n(j,Ba)}),ye&&Vi(j,le),qt}function Qt(j,H,Q,pt){if(Q==null)throw Error(r(151));for(var qt=null,be=null,It=H,le=H=0,_e=null,Ae=Q.next();It!==null&&!Ae.done;le++,Ae=Q.next()){It.index>le?(_e=It,It=null):_e=It.sibling;var Ba=tt(j,It,Ae.value,pt);if(Ba===null){It===null&&(It=_e);break}e&&It&&Ba.alternate===null&&n(j,It),H=d(Ba,H,le),be===null?qt=Ba:be.sibling=Ba,be=Ba,It=_e}if(Ae.done)return a(j,It),ye&&Vi(j,le),qt;if(It===null){for(;!Ae.done;le++,Ae=Q.next())Ae=gt(j,Ae.value,pt),Ae!==null&&(H=d(Ae,H,le),be===null?qt=Ae:be.sibling=Ae,be=Ae);return ye&&Vi(j,le),qt}for(It=o(It);!Ae.done;le++,Ae=Q.next())Ae=st(It,j,le,Ae.value,pt),Ae!==null&&(e&&Ae.alternate!==null&&It.delete(Ae.key===null?le:Ae.key),H=d(Ae,H,le),be===null?qt=Ae:be.sibling=Ae,be=Ae);return e&&It.forEach(function(sx){return n(j,sx)}),ye&&Vi(j,le),qt}function ze(j,H,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===T&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:t:{for(var qt=Q.key;H!==null;){if(H.key===qt){if(qt=Q.type,qt===T){if(H.tag===7){a(j,H.sibling),pt=c(H,Q.props.children),pt.return=j,j=pt;break t}}else if(H.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===Z&&or(qt)===H.type){a(j,H.sibling),pt=c(H,Q.props),ao(pt,Q),pt.return=j,j=pt;break t}a(j,H);break}else n(j,H);H=H.sibling}Q.type===T?(pt=nr(Q.props.children,j.mode,pt,Q.key),pt.return=j,j=pt):(pt=dl(Q.type,Q.key,Q.props,null,j.mode,pt),ao(pt,Q),pt.return=j,j=pt)}return v(j);case M:t:{for(qt=Q.key;H!==null;){if(H.key===qt)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){a(j,H.sibling),pt=c(H,Q.children||[]),pt.return=j,j=pt;break t}else{a(j,H);break}else n(j,H);H=H.sibling}pt=Ac(Q,j.mode,pt),pt.return=j,j=pt}return v(j);case Z:return Q=or(Q),ze(j,H,Q,pt)}if(_t(Q))return Ft(j,H,Q,pt);if(lt(Q)){if(qt=lt(Q),typeof qt!="function")throw Error(r(150));return Q=qt.call(Q),Qt(j,H,Q,pt)}if(typeof Q.then=="function")return ze(j,H,Sl(Q),pt);if(Q.$$typeof===N)return ze(j,H,ml(j,Q),pt);yl(j,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,H!==null&&H.tag===6?(a(j,H.sibling),pt=c(H,Q),pt.return=j,j=pt):(a(j,H),pt=bc(Q,j.mode,pt),pt.return=j,j=pt),v(j)):a(j,H)}return function(j,H,Q,pt){try{io=0;var qt=ze(j,H,Q,pt);return Zr=null,qt}catch(It){if(It===jr||It===_l)throw It;var be=Zn(29,It,null,j.mode);return be.lanes=pt,be.return=j,be}finally{}}}var ur=Qp(!0),Jp=Qp(!1),ya=!1;function Fc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ic(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ea(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ce&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=fl(e),Pp(e,null,a),n}return cl(e,o,n,a),fl(e)}function ro(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Hs(e,a)}}function Hc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?c=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?c=d=n:d=d.next=n}else c=d=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Gc=!1;function so(){if(Gc){var e=Yr;if(e!==null)throw e}}function oo(e,n,a,o){Gc=!1;var c=e.updateQueue;ya=!1;var d=c.firstBaseUpdate,v=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var z=b,J=z.next;z.next=null,v===null?d=J:v.next=J,v=z;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,b=ct.lastBaseUpdate,b!==v&&(b===null?ct.firstBaseUpdate=J:b.next=J,ct.lastBaseUpdate=z))}if(d!==null){var gt=c.baseState;v=0,ct=J=z=null,b=d;do{var tt=b.lane&-536870913,st=tt!==b.lane;if(st?(ge&tt)===tt:(o&tt)===tt){tt!==0&&tt===Wr&&(Gc=!0),ct!==null&&(ct=ct.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Ft=e,Qt=b;tt=n;var ze=a;switch(Qt.tag){case 1:if(Ft=Qt.payload,typeof Ft=="function"){gt=Ft.call(ze,gt,tt);break t}gt=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=Qt.payload,tt=typeof Ft=="function"?Ft.call(ze,gt,tt):Ft,tt==null)break t;gt=_({},gt,tt);break t;case 2:ya=!0}}tt=b.callback,tt!==null&&(e.flags|=64,st&&(e.flags|=8192),st=c.callbacks,st===null?c.callbacks=[tt]:st.push(tt))}else st={lane:tt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ct===null?(J=ct=st,z=gt):ct=ct.next=st,v|=tt;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;st=b,b=st.next,st.next=null,c.lastBaseUpdate=st,c.shared.pending=null}}while(!0);ct===null&&(z=gt),c.baseState=z,c.firstBaseUpdate=J,c.lastBaseUpdate=ct,d===null&&(c.shared.lanes=0),Ra|=v,e.lanes=v,e.memoizedState=gt}}function $p(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function tm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)$p(a[e],n)}var Kr=L(null),xl=L(0);function em(e,n){e=$i,St(xl,e),St(Kr,n),$i=e|n.baseLanes}function Vc(){St(xl,$i),St(Kr,Kr.current)}function kc(){$i=xl.current,$(Kr),$(xl)}var Kn=L(null),ui=null;function Ma(e){var n=e.alternate;St($e,$e.current&1),St(Kn,e),ui===null&&(n===null||Kr.current!==null||n.memoizedState!==null)&&(ui=e)}function Xc(e){St($e,$e.current),St(Kn,e),ui===null&&(ui=e)}function nm(e){e.tag===22?(St($e,$e.current),St(Kn,e),ui===null&&(ui=e)):Ta()}function Ta(){St($e,$e.current),St(Kn,Kn.current)}function Qn(e){$(Kn),ui===e&&(ui=null),$($e)}var $e=L(0);function El(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qf(a)||Jf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=0,oe=null,Oe=null,an=null,Ml=!1,Qr=!1,cr=!1,Tl=0,lo=0,Jr=null,KS=0;function Qe(){throw Error(r(321))}function qc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!jn(e[a],n[a]))return!1;return!0}function Wc(e,n,a,o,c,d){return qi=d,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Im:lf,cr=!1,d=a(o,c),cr=!1,Qr&&(d=am(n,a,o,c)),im(e),d}function im(e){O.H=fo;var n=Oe!==null&&Oe.next!==null;if(qi=0,an=Oe=oe=null,Ml=!1,lo=0,Jr=null,n)throw Error(r(300));e===null||rn||(e=e.dependencies,e!==null&&pl(e)&&(rn=!0))}function am(e,n,a,o){oe=e;var c=0;do{if(Qr&&(Jr=null),lo=0,Qr=!1,25<=c)throw Error(r(301));if(c+=1,an=Oe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=Hm,d=n(a,o)}while(Qr);return d}function QS(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?uo(n):n,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(oe.flags|=1024),n}function Yc(){var e=Tl!==0;return Tl=0,e}function jc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Zc(e){if(Ml){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ml=!1}qi=0,an=Oe=oe=null,Qr=!1,lo=Tl=0,Jr=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?oe.memoizedState=an=e:an=an.next=e,an}function tn(){if(Oe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=an===null?oe.memoizedState:an.next;if(n!==null)an=n,Oe=e;else{if(e===null)throw oe.alternate===null?Error(r(467)):Error(r(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},an===null?oe.memoizedState=an=e:an=an.next=e}return an}function bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uo(e){var n=lo;return lo+=1,Jr===null&&(Jr=[]),e=jp(Jr,e,n),n=oe,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Im:lf),e}function Al(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return uo(e);if(e.$$typeof===N)return xn(e)}throw Error(r(438,String(e)))}function Kc(e){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=oe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function Wi(e,n){return typeof n=="function"?n(e):n}function Rl(e){var n=tn();return Qc(n,Oe,e)}function Qc(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,d=o.pending;if(d!==null){if(c!==null){var v=c.next;c.next=d.next,d.next=v}n.baseQueue=c=d,o.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{n=c.next;var b=v=null,z=null,J=n,ct=!1;do{var gt=J.lane&-536870913;if(gt!==J.lane?(ge&gt)===gt:(qi&gt)===gt){var tt=J.revertLane;if(tt===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),gt===Wr&&(ct=!0);else if((qi&tt)===tt){J=J.next,tt===Wr&&(ct=!0);continue}else gt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(b=z=gt,v=d):z=z.next=gt,oe.lanes|=tt,Ra|=tt;gt=J.action,cr&&a(d,gt),d=J.hasEagerState?J.eagerState:a(d,gt)}else tt={lane:gt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(b=z=tt,v=d):z=z.next=tt,oe.lanes|=gt,Ra|=gt;J=J.next}while(J!==null&&J!==n);if(z===null?v=d:z.next=b,!jn(d,e.memoizedState)&&(rn=!0,ct&&(a=Yr,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=z,o.lastRenderedState=d}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Jc(e){var n=tn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,d=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do d=e(d,v.action),v=v.next;while(v!==c);jn(d,n.memoizedState)||(rn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function rm(e,n,a){var o=oe,c=tn(),d=ye;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!jn((Oe||c).memoizedState,a);if(v&&(c.memoizedState=a,rn=!0),c=c.queue,ef(lm.bind(null,o,c,e),[e]),c.getSnapshot!==n||v||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,$r(9,{destroy:void 0},om.bind(null,o,c,a,n),null),He===null)throw Error(r(349));d||(qi&127)!==0||sm(o,n,a)}return a}function sm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=bl(),oe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function om(e,n,a,o){n.value=a,n.getSnapshot=o,um(n)&&cm(e)}function lm(e,n,a){return a(function(){um(n)&&cm(e)})}function um(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!jn(e,a)}catch{return!0}}function cm(e){var n=er(e,2);n!==null&&Gn(n,e,2)}function $c(e){var n=Ln();if(typeof e=="function"){var a=e;if(e=a(),cr){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function fm(e,n,a,o){return e.baseState=a,Qc(e,Oe,typeof o=="function"?o:Wi)}function JS(e,n,a,o,c){if(Dl(e))throw Error(r(485));if(e=n.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};O.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,dm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function dm(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var d=O.T,v={};O.T=v;try{var b=a(c,o),z=O.S;z!==null&&z(v,b),hm(e,n,b)}catch(J){tf(e,n,J)}finally{d!==null&&v.types!==null&&(d.types=v.types),O.T=d}}else try{d=a(c,o),hm(e,n,d)}catch(J){tf(e,n,J)}}function hm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){pm(e,n,o)},function(o){return tf(e,n,o)}):pm(e,n,a)}function pm(e,n,a){n.status="fulfilled",n.value=a,mm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,dm(e,a)))}function tf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,mm(n),n=n.next;while(n!==o)}e.action=null}function mm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function gm(e,n){return n}function _m(e,n){if(ye){var a=He.formState;if(a!==null){t:{var o=oe;if(ye){if(Xe){e:{for(var c=Xe,d=li;c.nodeType!==8;){if(!d){c=null;break e}if(c=ci(c.nextSibling),c===null){c=null;break e}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Xe=ci(c.nextSibling),o=c.data==="F!";break t}}va(o)}o=!1}o&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gm,lastRenderedState:n},a.queue=o,a=zm.bind(null,oe,o),o.dispatch=a,o=$c(!1),d=of.bind(null,oe,!1,o.queue),o=Ln(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=JS.bind(null,oe,c,d,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function vm(e){var n=tn();return Sm(n,Oe,e)}function Sm(e,n,a){if(n=Qc(e,n,gm)[0],e=Rl(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=uo(n)}catch(v){throw v===jr?_l:v}else o=n;n=tn();var c=n.queue,d=c.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,$r(9,{destroy:void 0},$S.bind(null,c,a),null)),[o,d,e]}function $S(e,n){e.action=n}function ym(e){var n=tn(),a=Oe;if(a!==null)return Sm(n,a,e);tn(),n=n.memoizedState,a=tn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function $r(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=oe.updateQueue,n===null&&(n=bl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function xm(){return tn().memoizedState}function Cl(e,n,a,o){var c=Ln();oe.flags|=e,c.memoizedState=$r(1|n,{destroy:void 0},a,o===void 0?null:o)}function wl(e,n,a,o){var c=tn();o=o===void 0?null:o;var d=c.memoizedState.inst;Oe!==null&&o!==null&&qc(o,Oe.memoizedState.deps)?c.memoizedState=$r(n,d,a,o):(oe.flags|=e,c.memoizedState=$r(1|n,d,a,o))}function Em(e,n){Cl(8390656,8,e,n)}function ef(e,n){wl(2048,8,e,n)}function ty(e){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=bl(),oe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Mm(e){var n=tn().memoizedState;return ty({ref:n,nextImpl:e}),function(){if((Ce&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Tm(e,n){return wl(4,2,e,n)}function bm(e,n){return wl(4,4,e,n)}function Am(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Rm(e,n,a){a=a!=null?a.concat([e]):null,wl(4,4,Am.bind(null,n,e),a)}function nf(){}function Cm(e,n){var a=tn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&qc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function wm(e,n){var a=tn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&qc(n,o[1]))return o[0];if(o=e(),cr){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[o,n],o}function af(e,n,a){return a===void 0||(qi&1073741824)!==0&&(ge&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Dg(),oe.lanes|=e,Ra|=e,a)}function Dm(e,n,a,o){return jn(a,n)?a:Kr.current!==null?(e=af(e,a,o),jn(e,n)||(rn=!0),e):(qi&42)===0||(qi&1073741824)!==0&&(ge&261930)===0?(rn=!0,e.memoizedState=a):(e=Dg(),oe.lanes|=e,Ra|=e,n)}function Um(e,n,a,o,c){var d=K.p;K.p=d!==0&&8>d?d:8;var v=O.T,b={};O.T=b,of(e,!1,n,a);try{var z=c(),J=O.S;if(J!==null&&J(b,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ct=ZS(z,o);co(e,n,ct,ti(e))}else co(e,n,o,ti(e))}catch(gt){co(e,n,{then:function(){},status:"rejected",reason:gt},ti())}finally{K.p=d,v!==null&&b.types!==null&&(v.types=b.types),O.T=v}}function ey(){}function rf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=Lm(e).queue;Um(e,c,n,q,a===null?ey:function(){return Nm(e),a(o)})}function Lm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Nm(e){var n=Lm(e);n.next===null&&(n=e.alternate.memoizedState),co(e,n.next.queue,{},ti())}function sf(){return xn(Co)}function Om(){return tn().memoizedState}function Pm(){return tn().memoizedState}function ny(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();e=xa(a);var o=Ea(n,e,a);o!==null&&(Gn(o,n,a),ro(o,n,a)),n={cache:Oc()},e.payload=n;return}n=n.return}}function iy(e,n,a){var o=ti();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(e)?Bm(n,a):(a=Mc(e,n,a,o),a!==null&&(Gn(a,e,o),Fm(a,n,o)))}function zm(e,n,a){var o=ti();co(e,n,a,o)}function co(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(e))Bm(n,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var v=n.lastRenderedState,b=d(v,a);if(c.hasEagerState=!0,c.eagerState=b,jn(b,v))return cl(e,n,c,0),He===null&&ul(),!1}catch{}finally{}if(a=Mc(e,n,c,o),a!==null)return Gn(a,e,o),Fm(a,n,o),!0}return!1}function of(e,n,a,o){if(o={lane:2,revertLane:If(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Dl(e)){if(n)throw Error(r(479))}else n=Mc(e,a,o,2),n!==null&&Gn(n,e,2)}function Dl(e){var n=e.alternate;return e===oe||n!==null&&n===oe}function Bm(e,n){Qr=Ml=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Fm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Hs(e,a)}}var fo={readContext:xn,use:Al,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};fo.useEffectEvent=Qe;var Im={readContext:xn,use:Al,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:xn,useEffect:Em,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Cl(4194308,4,Am.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Cl(4194308,4,e,n)},useInsertionEffect:function(e,n){Cl(4,2,e,n)},useMemo:function(e,n){var a=Ln();n=n===void 0?null:n;var o=e();if(cr){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Ln();if(a!==void 0){var c=a(n);if(cr){Ot(!0);try{a(n)}finally{Ot(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=iy.bind(null,oe,e),[o.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=$c(e);var n=e.queue,a=zm.bind(null,oe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(e,n){var a=Ln();return af(a,e,n)},useTransition:function(){var e=$c(!1);return e=Um.bind(null,oe,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=oe,c=Ln();if(ye){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),He===null)throw Error(r(349));(ge&127)!==0||sm(o,n,a)}c.memoizedState=a;var d={value:a,getSnapshot:n};return c.queue=d,Em(lm.bind(null,o,d,e),[e]),o.flags|=2048,$r(9,{destroy:void 0},om.bind(null,o,d,a,n),null),a},useId:function(){var e=Ln(),n=He.identifierPrefix;if(ye){var a=Ui,o=Di;a=(o&~(1<<32-te(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=KS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:sf,useFormState:_m,useActionState:_m,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,oe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Kc,useCacheRefresh:function(){return Ln().memoizedState=ny.bind(null,oe)},useEffectEvent:function(e){var n=Ln(),a={impl:e};return n.memoizedState=a,function(){if((Ce&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},lf={readContext:xn,use:Al,useCallback:Cm,useContext:xn,useEffect:ef,useImperativeHandle:Rm,useInsertionEffect:Tm,useLayoutEffect:bm,useMemo:wm,useReducer:Rl,useRef:xm,useState:function(){return Rl(Wi)},useDebugValue:nf,useDeferredValue:function(e,n){var a=tn();return Dm(a,Oe.memoizedState,e,n)},useTransition:function(){var e=Rl(Wi)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:rm,useId:Om,useHostTransitionStatus:sf,useFormState:vm,useActionState:vm,useOptimistic:function(e,n){var a=tn();return fm(a,Oe,e,n)},useMemoCache:Kc,useCacheRefresh:Pm};lf.useEffectEvent=Mm;var Hm={readContext:xn,use:Al,useCallback:Cm,useContext:xn,useEffect:ef,useImperativeHandle:Rm,useInsertionEffect:Tm,useLayoutEffect:bm,useMemo:wm,useReducer:Jc,useRef:xm,useState:function(){return Jc(Wi)},useDebugValue:nf,useDeferredValue:function(e,n){var a=tn();return Oe===null?af(a,e,n):Dm(a,Oe.memoizedState,e,n)},useTransition:function(){var e=Jc(Wi)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:rm,useId:Om,useHostTransitionStatus:sf,useFormState:ym,useActionState:ym,useOptimistic:function(e,n){var a=tn();return Oe!==null?fm(a,Oe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Kc,useCacheRefresh:Pm};Hm.useEffectEvent=Mm;function uf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var cf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ti(),c=xa(o);c.payload=n,a!=null&&(c.callback=a),n=Ea(e,c,o),n!==null&&(Gn(n,e,o),ro(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ti(),c=xa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ea(e,c,o),n!==null&&(Gn(n,e,o),ro(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ti(),o=xa(a);o.tag=2,n!=null&&(o.callback=n),n=Ea(e,o,a),n!==null&&(Gn(n,e,a),ro(n,e,a))}};function Gm(e,n,a,o,c,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,v):n.prototype&&n.prototype.isPureReactComponent?!Qs(a,o)||!Qs(c,d):!0}function Vm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&cf.enqueueReplaceState(n,n.state,null)}function fr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function km(e){ll(e)}function Xm(e){console.error(e)}function qm(e){ll(e)}function Ul(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Wm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ff(e,n,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(e,n)},a}function Ym(e){return e=xa(e),e.tag=3,e}function jm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;e.payload=function(){return c(d)},e.callback=function(){Wm(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Wm(n,a,o),typeof c!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function ay(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&qr(n,a,c,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?kl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===vl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),zf(e,o,c)),!1;case 22:return a.flags|=65536,o===vl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),zf(e,o,c)),!1}throw Error(r(435,a.tag))}return zf(e,o,c),kl(),!1}if(ye)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==wc&&(e=Error(r(422),{cause:o}),to(ri(e,a)))):(o!==wc&&(n=Error(r(423),{cause:o}),to(ri(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ri(o,a),c=ff(e.stateNode,o,c),Hc(e,c),Je!==4&&(Je=2)),!1;var d=Error(r(520),{cause:o});if(d=ri(d,a),yo===null?yo=[d]:yo.push(d),Je!==4&&(Je=2),n===null)return!0;o=ri(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=ff(a.stateNode,o,e),Hc(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ca===null||!Ca.has(d))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Ym(c),jm(c,e,a,o),Hc(a,c),!1}a=a.return}while(a!==null);return!1}var df=Error(r(461)),rn=!1;function En(e,n,a,o){n.child=e===null?Jp(n,null,a,o):ur(n,e.child,a,o)}function Zm(e,n,a,o,c){a=a.render;var d=n.ref;if("ref"in o){var v={};for(var b in o)b!=="ref"&&(v[b]=o[b])}else v=o;return rr(n),o=Wc(e,n,a,v,d,c),b=Yc(),e!==null&&!rn?(jc(e,n,c),Yi(e,n,c)):(ye&&b&&Rc(n),n.flags|=1,En(e,n,o,c),n.child)}function Km(e,n,a,o,c){if(e===null){var d=a.type;return typeof d=="function"&&!Tc(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Qm(e,n,d,o,c)):(e=dl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!yf(e,c)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Qs,a(v,o)&&e.ref===n.ref)return Yi(e,n,c)}return n.flags|=1,e=Gi(d,o),e.ref=n.ref,e.return=n,n.child=e}function Qm(e,n,a,o,c){if(e!==null){var d=e.memoizedProps;if(Qs(d,o)&&e.ref===n.ref)if(rn=!1,n.pendingProps=o=d,yf(e,c))(e.flags&131072)!==0&&(rn=!0);else return n.lanes=e.lanes,Yi(e,n,c)}return hf(e,n,a,o,c)}function Jm(e,n,a,o){var c=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~d}else o=0,n.child=null;return $m(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&gl(n,d!==null?d.cachePool:null),d!==null?em(n,d):Vc(),nm(n);else return o=n.lanes=536870912,$m(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(gl(n,d.cachePool),em(n,d),Ta(),n.memoizedState=null):(e!==null&&gl(n,null),Vc(),Ta());return En(e,n,c,a),n.child}function ho(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function $m(e,n,a,o,c){var d=zc();return d=d===null?null:{parent:nn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&gl(n,null),Vc(),nm(n),e!==null&&qr(e,n,o,!0),n.childLanes=c,null}function Ll(e,n){return n=Ol({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function tg(e,n,a){return ur(n,e.child,null,a),e=Ll(n,n.pendingProps),e.flags|=2,Qn(n),n.memoizedState=null,e}function ry(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ye){if(o.mode==="hidden")return e=Ll(n,o),n.lanes=536870912,ho(null,e);if(Xc(n),(e=Xe)?(e=d_(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Bp(e),a.return=n,n.child=a,yn=n,Xe=null)):e=null,e===null)throw va(n);return n.lanes=536870912,null}return Ll(n,o)}var d=e.memoizedState;if(d!==null){var v=d.dehydrated;if(Xc(n),c)if(n.flags&256)n.flags&=-257,n=tg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(rn||qr(e,n,a,!1),c=(a&e.childLanes)!==0,rn||c){if(o=He,o!==null&&(v=wi(o,a),v!==0&&v!==d.retryLane))throw d.retryLane=v,er(e,v),Gn(o,e,v),df;kl(),n=tg(e,n,a)}else e=d.treeContext,Xe=ci(v.nextSibling),yn=n,ye=!0,_a=null,li=!1,e!==null&&Hp(n,e),n=Ll(n,o),n.flags|=4096;return n}return e=Gi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Nl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function hf(e,n,a,o,c){return rr(n),a=Wc(e,n,a,o,void 0,c),o=Yc(),e!==null&&!rn?(jc(e,n,c),Yi(e,n,c)):(ye&&o&&Rc(n),n.flags|=1,En(e,n,a,c),n.child)}function eg(e,n,a,o,c,d){return rr(n),n.updateQueue=null,a=am(n,o,a,c),im(e),o=Yc(),e!==null&&!rn?(jc(e,n,d),Yi(e,n,d)):(ye&&o&&Rc(n),n.flags|=1,En(e,n,a,d),n.child)}function ng(e,n,a,o,c){if(rr(n),n.stateNode===null){var d=Gr,v=a.contextType;typeof v=="object"&&v!==null&&(d=xn(v)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=cf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Fc(n),v=a.contextType,d.context=typeof v=="object"&&v!==null?xn(v):Gr,d.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(uf(n,a,v,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&cf.enqueueReplaceState(d,d.state,null),oo(n,o,d,c),so(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var b=n.memoizedProps,z=fr(a,b);d.props=z;var J=d.context,ct=a.contextType;v=Gr,typeof ct=="object"&&ct!==null&&(v=xn(ct));var gt=a.getDerivedStateFromProps;ct=typeof gt=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ct||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||J!==v)&&Vm(n,d,o,v),ya=!1;var tt=n.memoizedState;d.state=tt,oo(n,o,d,c),so(),J=n.memoizedState,b||tt!==J||ya?(typeof gt=="function"&&(uf(n,a,gt,o),J=n.memoizedState),(z=ya||Gm(n,a,z,o,tt,J,v))?(ct||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),d.props=o,d.state=J,d.context=v,o=z):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Ic(e,n),v=n.memoizedProps,ct=fr(a,v),d.props=ct,gt=n.pendingProps,tt=d.context,J=a.contextType,z=Gr,typeof J=="object"&&J!==null&&(z=xn(J)),b=a.getDerivedStateFromProps,(J=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==gt||tt!==z)&&Vm(n,d,o,z),ya=!1,tt=n.memoizedState,d.state=tt,oo(n,o,d,c),so();var st=n.memoizedState;v!==gt||tt!==st||ya||e!==null&&e.dependencies!==null&&pl(e.dependencies)?(typeof b=="function"&&(uf(n,a,b,o),st=n.memoizedState),(ct=ya||Gm(n,a,ct,o,tt,st,z)||e!==null&&e.dependencies!==null&&pl(e.dependencies))?(J||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,st,z),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,st,z)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=st),d.props=o,d.state=st,d.context=z,o=ct):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Nl(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=ur(n,e.child,null,c),n.child=ur(n,null,a,c)):En(e,n,a,c),n.memoizedState=d.state,e=n.child):e=Yi(e,n,c),e}function ig(e,n,a,o){return ir(),n.flags|=256,En(e,n,a,o),n.child}var pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mf(e){return{baseLanes:e,cachePool:Wp()}}function gf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=$n),e}function ag(e,n,a){var o=n.pendingProps,c=!1,d=(n.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:($e.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(ye){if(c?Ma(n):Ta(),(e=Xe)?(e=d_(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Bp(e),a.return=n,n.child=a,yn=n,Xe=null)):e=null,e===null)throw va(n);return Jf(e)?n.lanes=32:n.lanes=536870912,null}var b=o.children;return o=o.fallback,c?(Ta(),c=n.mode,b=Ol({mode:"hidden",children:b},c),o=nr(o,c,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,o=n.child,o.memoizedState=mf(a),o.childLanes=gf(e,v,a),n.memoizedState=pf,ho(null,o)):(Ma(n),_f(n,b))}var z=e.memoizedState;if(z!==null&&(b=z.dehydrated,b!==null)){if(d)n.flags&256?(Ma(n),n.flags&=-257,n=vf(e,n,a)):n.memoizedState!==null?(Ta(),n.child=e.child,n.flags|=128,n=null):(Ta(),b=o.fallback,c=n.mode,o=Ol({mode:"visible",children:o.children},c),b=nr(b,c,a,null),b.flags|=2,o.return=n,b.return=n,o.sibling=b,n.child=o,ur(n,e.child,null,a),o=n.child,o.memoizedState=mf(a),o.childLanes=gf(e,v,a),n.memoizedState=pf,n=ho(null,o));else if(Ma(n),Jf(b)){if(v=b.nextSibling&&b.nextSibling.dataset,v)var J=v.dgst;v=J,o=Error(r(419)),o.stack="",o.digest=v,to({value:o,source:null,stack:null}),n=vf(e,n,a)}else if(rn||qr(e,n,a,!1),v=(a&e.childLanes)!==0,rn||v){if(v=He,v!==null&&(o=wi(v,a),o!==0&&o!==z.retryLane))throw z.retryLane=o,er(e,o),Gn(v,e,o),df;Qf(b)||kl(),n=vf(e,n,a)}else Qf(b)?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,Xe=ci(b.nextSibling),yn=n,ye=!0,_a=null,li=!1,e!==null&&Hp(n,e),n=_f(n,o.children),n.flags|=4096);return n}return c?(Ta(),b=o.fallback,c=n.mode,z=e.child,J=z.sibling,o=Gi(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,J!==null?b=Gi(J,b):(b=nr(b,c,a,null),b.flags|=2),b.return=n,o.return=n,o.sibling=b,n.child=o,ho(null,o),o=n.child,b=e.child.memoizedState,b===null?b=mf(a):(c=b.cachePool,c!==null?(z=nn._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=Wp(),b={baseLanes:b.baseLanes|a,cachePool:c}),o.memoizedState=b,o.childLanes=gf(e,v,a),n.memoizedState=pf,ho(e.child,o)):(Ma(n),a=e.child,e=a.sibling,a=Gi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function _f(e,n){return n=Ol({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ol(e,n){return e=Zn(22,e,null,n),e.lanes=0,e}function vf(e,n,a){return ur(n,e.child,null,a),e=_f(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function rg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Lc(e.return,n,a)}function Sf(e,n,a,o,c,d){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:d}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=c,v.treeForkCount=d)}function sg(e,n,a){var o=n.pendingProps,c=o.revealOrder,d=o.tail;o=o.children;var v=$e.current,b=(v&2)!==0;if(b?(v=v&1|2,n.flags|=128):v&=1,St($e,v),En(e,n,o,a),o=ye?$s:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rg(e,a,n);else if(e.tag===19)rg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&El(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Sf(n,!1,c,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&El(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Sf(n,!0,a,null,d,o);break;case"together":Sf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(qr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Gi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Gi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function yf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&pl(e)))}function sy(e,n,a){switch(n.tag){case 3:zt(n,n.stateNode.containerInfo),Sa(n,nn,e.memoizedState.cache),ir();break;case 27:case 5:Zt(n);break;case 4:zt(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Xc(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ag(e,n,a):(Ma(n),e=Yi(e,n,a),e!==null?e.sibling:null);Ma(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(qr(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return sg(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St($e,$e.current),o)break;return null;case 22:return n.lanes=0,Jm(e,n,a,n.pendingProps);case 24:Sa(n,nn,e.memoizedState.cache)}return Yi(e,n,a)}function og(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)rn=!0;else{if(!yf(e,a)&&(n.flags&128)===0)return rn=!1,sy(e,n,a);rn=(e.flags&131072)!==0}else rn=!1,ye&&(n.flags&1048576)!==0&&Ip(n,$s,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=or(n.elementType),n.type=e,typeof e=="function")Tc(e)?(o=fr(e,o),n.tag=1,n=ng(null,n,e,o,a)):(n.tag=0,n=hf(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===w){n.tag=11,n=Zm(null,n,e,o,a);break t}else if(c===P){n.tag=14,n=Km(null,n,e,o,a);break t}}throw n=ht(e)||e,Error(r(306,n,""))}}return n;case 0:return hf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=fr(o,n.pendingProps),ng(e,n,o,c,a);case 3:t:{if(zt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;c=d.element,Ic(e,n),oo(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Sa(n,nn,o),o!==d.cache&&Nc(n,[nn],a,!0),so(),o=v.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=ig(e,n,o,a);break t}else if(o!==c){c=ri(Error(r(424)),n),to(c),n=ig(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Xe=ci(e.firstChild),yn=n,ye=!0,_a=null,li=!0,a=Jp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ir(),o===c){n=Yi(e,n,a);break t}En(e,n,o,a)}n=n.child}return n;case 26:return Nl(e,n),e===null?(a=v_(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,e=n.pendingProps,o=Kl(Mt.current).createElement(a),o[Ze]=n,o[vn]=e,Mn(o,a,e),V(o),n.stateNode=o):n.memoizedState=v_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Zt(n),e===null&&ye&&(o=n.stateNode=m_(n.type,n.pendingProps,Mt.current),yn=n,li=!0,c=Xe,La(n.type)?($f=c,Xe=ci(o.firstChild)):Xe=c),En(e,n,n.pendingProps.children,a),Nl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ye&&((c=o=Xe)&&(o=zy(o,n.type,n.pendingProps,li),o!==null?(n.stateNode=o,yn=n,Xe=ci(o.firstChild),li=!1,c=!0):c=!1),c||va(n)),Zt(n),c=n.type,d=n.pendingProps,v=e!==null?e.memoizedProps:null,o=d.children,jf(c,d)?o=null:v!==null&&jf(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Wc(e,n,QS,null,null,a),Co._currentValue=c),Nl(e,n),En(e,n,o,a),n.child;case 6:return e===null&&ye&&((e=a=Xe)&&(a=By(a,n.pendingProps,li),a!==null?(n.stateNode=a,yn=n,Xe=null,e=!0):e=!1),e||va(n)),null;case 13:return ag(e,n,a);case 4:return zt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ur(n,null,o,a):En(e,n,o,a),n.child;case 11:return Zm(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Sa(n,n.type,o.value),En(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,rr(n),c=xn(c),o=o(c),n.flags|=1,En(e,n,o,a),n.child;case 14:return Km(e,n,n.type,n.pendingProps,a);case 15:return Qm(e,n,n.type,n.pendingProps,a);case 19:return sg(e,n,a);case 31:return ry(e,n,a);case 22:return Jm(e,n,a,n.pendingProps);case 24:return rr(n),o=xn(nn),e===null?(c=zc(),c===null&&(c=He,d=Oc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=a),c=d),n.memoizedState={parent:o,cache:c},Fc(n),Sa(n,nn,c)):((e.lanes&a)!==0&&(Ic(e,n),oo(n,null,null,a),so()),c=e.memoizedState,d=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Sa(n,nn,o)):(o=d.cache,Sa(n,nn,o),o!==c.cache&&Nc(n,[nn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ji(e){e.flags|=4}function xf(e,n,a,o,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Og())e.flags|=8192;else throw lr=vl,Bc}else e.flags&=-16777217}function lg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!M_(n))if(Og())e.flags|=8192;else throw lr=vl,Bc}function Pl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?un():536870912,e.lanes|=n,is|=n)}function po(e,n){if(!ye)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function oy(e,n,a){var o=n.pendingProps;switch(Cc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Xi(nn),Yt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Xr(n)?ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Dc())),qe(n),null;case 26:var c=n.type,d=n.memoizedState;return e===null?(ji(n),d!==null?(qe(n),lg(n,d)):(qe(n),xf(n,c,null,o,a))):d?d!==e.memoizedState?(ji(n),qe(n),lg(n,d)):(qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ji(n),qe(n),xf(n,c,e,o,a)),null;case 27:if(Ve(n),a=Mt.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}e=Y.current,Xr(n)?Gp(n):(e=m_(c,o,a),n.stateNode=e,ji(n))}return qe(n),null;case 5:if(Ve(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(d=Y.current,Xr(n))Gp(n);else{var v=Kl(Mt.current);switch(d){case 1:d=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:d=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":d=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":d=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":d=v.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?v.createElement(c,{is:o.is}):v.createElement(c)}}d[Ze]=n,d[vn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)d.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=d;t:switch(Mn(d,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ji(n)}}return qe(n),xf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Mt.current,Xr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=yn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[Ze]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||a_(e.nodeValue,a)),e||va(n,!0)}else e=Kl(e).createTextNode(o),e[Ze]=n,n.stateNode=e}return qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Xr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Ze]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),e=!1}else a=Dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Xr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Ze]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=Dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),qe(n),null);case 4:return Yt(),e===null&&kf(n.stateNode.containerInfo),qe(n),null;case 10:return Xi(n.type),qe(n),null;case 19:if($($e),o=n.memoizedState,o===null)return qe(n),null;if(c=(n.flags&128)!==0,d=o.rendering,d===null)if(c)po(o,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=El(e),d!==null){for(n.flags|=128,po(o,!1),e=d.updateQueue,n.updateQueue=e,Pl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)zp(a,e),a=a.sibling;return St($e,$e.current&1|2),ye&&Vi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&dt()>Hl&&(n.flags|=128,c=!0,po(o,!1),n.lanes=4194304)}else{if(!c)if(e=El(d),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Pl(n,e),po(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!ye)return qe(n),null}else 2*dt()-o.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,c=!0,po(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=dt(),e.sibling=null,a=$e.current,St($e,c?a&1|2:a&1),ye&&Vi(n,o.treeForkCount),e):(qe(n),null);case 22:case 23:return Qn(n),kc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&$(sr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(nn),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function ly(e,n){switch(Cc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(nn),Yt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ve(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(r(340));ir()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Qn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ir()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $($e),null;case 4:return Yt(),null;case 10:return Xi(n.type),null;case 22:case 23:return Qn(n),kc(),e!==null&&$(sr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(nn),null;case 25:return null;default:return null}}function ug(e,n){switch(Cc(n),n.tag){case 3:Xi(nn),Yt();break;case 26:case 27:case 5:Ve(n);break;case 4:Yt();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:$($e);break;case 10:Xi(n.type);break;case 22:case 23:Qn(n),kc(),e!==null&&$(sr);break;case 24:Xi(nn)}}function mo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var d=a.create,v=a.inst;o=d(),v.destroy=o}a=a.next}while(a!==c)}}catch(b){Ue(n,n.return,b)}}function ba(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&e)===e){var v=o.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,c=n;var z=a,J=b;try{J()}catch(ct){Ue(c,z,ct)}}}o=o.next}while(o!==d)}}catch(ct){Ue(n,n.return,ct)}}function cg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{tm(n,a)}catch(o){Ue(e,e.return,o)}}}function fg(e,n,a){a.props=fr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ue(e,n,o)}}function go(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Ue(e,n,c)}}function Li(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ue(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ue(e,n,c)}else a.current=null}function dg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ue(e,e.return,c)}}function Ef(e,n,a){try{var o=e.stateNode;Dy(o,e.type,a,n),o[vn]=n}catch(c){Ue(e,e.return,c)}}function hg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function Mf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||hg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii));else if(o!==4&&(o===27&&La(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Tf(e,n,a),e=e.sibling;e!==null;)Tf(e,n,a),e=e.sibling}function zl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&La(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zl(e,n,a),e=e.sibling;e!==null;)zl(e,n,a),e=e.sibling}function pg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Mn(n,o,a),n[Ze]=e,n[vn]=a}catch(d){Ue(e,e.return,d)}}var Zi=!1,sn=!1,bf=!1,mg=typeof WeakSet=="function"?WeakSet:Set,mn=null;function uy(e,n){if(e=e.containerInfo,Wf=iu,e=Rp(e),_c(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,b=-1,z=-1,J=0,ct=0,gt=e,tt=null;e:for(;;){for(var st;gt!==a||c!==0&&gt.nodeType!==3||(b=v+c),gt!==d||o!==0&&gt.nodeType!==3||(z=v+o),gt.nodeType===3&&(v+=gt.nodeValue.length),(st=gt.firstChild)!==null;)tt=gt,gt=st;for(;;){if(gt===e)break e;if(tt===a&&++J===c&&(b=v),tt===d&&++ct===o&&(z=v),(st=gt.nextSibling)!==null)break;gt=tt,tt=gt.parentNode}gt=st}a=b===-1||z===-1?null:{start:b,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yf={focusedElem:e,selectionRange:a},iu=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,c=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Ft=fr(a.type,c);e=o.getSnapshotBeforeUpdate(Ft,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(Qt){Ue(a,a.return,Qt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Kf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}}function gg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(e,a),o&4&&mo(5,a);break;case 1:if(Qi(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Ue(a,a.return,v)}else{var c=fr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Ue(a,a.return,v)}}o&64&&cg(a),o&512&&go(a,a.return);break;case 3:if(Qi(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{tm(e,n)}catch(v){Ue(a,a.return,v)}}break;case 27:n===null&&o&4&&pg(a);case 26:case 5:Qi(e,a),n===null&&o&4&&dg(a),o&512&&go(a,a.return);break;case 12:Qi(e,a);break;case 31:Qi(e,a),o&4&&Sg(e,a);break;case 13:Qi(e,a),o&4&&yg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=vy.bind(null,a),Fy(e,a))));break;case 22:if(o=a.memoizedState!==null||Zi,!o){n=n!==null&&n.memoizedState!==null||sn,c=Zi;var d=sn;Zi=o,(sn=n)&&!d?Ji(e,a,(a.subtreeFlags&8772)!==0):Qi(e,a),Zi=c,sn=d}break;case 30:break;default:Qi(e,a)}}function _g(e){var n=e.alternate;n!==null&&(e.alternate=null,_g(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ks(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,Bn=!1;function Ki(e,n,a){for(a=a.child;a!==null;)vg(e,n,a),a=a.sibling}function vg(e,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(jt,a)}catch{}switch(a.tag){case 26:sn||Li(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:sn||Li(a,n);var o=je,c=Bn;La(a.type)&&(je=a.stateNode,Bn=!1),Ki(e,n,a),bo(a.stateNode),je=o,Bn=c;break;case 5:sn||Li(a,n);case 6:if(o=je,c=Bn,je=null,Ki(e,n,a),je=o,Bn=c,je!==null)if(Bn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(d){Ue(a,n,d)}else try{je.removeChild(a.stateNode)}catch(d){Ue(a,n,d)}break;case 18:je!==null&&(Bn?(e=je,c_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),fs(e)):c_(je,a.stateNode));break;case 4:o=je,c=Bn,je=a.stateNode.containerInfo,Bn=!0,Ki(e,n,a),je=o,Bn=c;break;case 0:case 11:case 14:case 15:ba(2,a,n),sn||ba(4,a,n),Ki(e,n,a);break;case 1:sn||(Li(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&fg(a,n,o)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:sn=(o=sn)||a.memoizedState!==null,Ki(e,n,a),sn=o;break;default:Ki(e,n,a)}}function Sg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{fs(e)}catch(a){Ue(n,n.return,a)}}}function yg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{fs(e)}catch(a){Ue(n,n.return,a)}}function cy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new mg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new mg),n;default:throw Error(r(435,e.tag))}}function Bl(e,n){var a=cy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=Sy.bind(null,e,o);o.then(c,c)}})}function Fn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],d=e,v=n,b=v;t:for(;b!==null;){switch(b.tag){case 27:if(La(b.type)){je=b.stateNode,Bn=!1;break t}break;case 5:je=b.stateNode,Bn=!1;break t;case 3:case 4:je=b.stateNode.containerInfo,Bn=!0;break t}b=b.return}if(je===null)throw Error(r(160));vg(d,v,c),je=null,Bn=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)xg(n,e),n=n.sibling}var yi=null;function xg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fn(n,e),In(e),o&4&&(ba(3,e,e.return),mo(3,e),ba(5,e,e.return));break;case 1:Fn(n,e),In(e),o&512&&(sn||a===null||Li(a,a.return)),o&64&&Zi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=yi;if(Fn(n,e),In(e),o&512&&(sn||a===null||Li(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Qa]||d[Ze]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),Mn(d,o,a),d[Ze]=e,V(d),o=d;break t;case"link":var v=x_("link","href",c).get(o+(a.href||""));if(v){for(var b=0;b<v.length;b++)if(d=v[b],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(b,1);break e}}d=c.createElement(o),Mn(d,o,a),c.head.appendChild(d);break;case"meta":if(v=x_("meta","content",c).get(o+(a.content||""))){for(b=0;b<v.length;b++)if(d=v[b],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(b,1);break e}}d=c.createElement(o),Mn(d,o,a),c.head.appendChild(d);break;default:throw Error(r(468,o))}d[Ze]=e,V(d),o=d}e.stateNode=o}else E_(c,e.type,e.stateNode);else e.stateNode=y_(c,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?E_(c,e.type,e.stateNode):y_(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Ef(e,e.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,e),In(e),o&512&&(sn||a===null||Li(a,a.return)),a!==null&&o&4&&Ef(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,e),In(e),o&512&&(sn||a===null||Li(a,a.return)),e.flags&32){c=e.stateNode;try{Pn(c,"")}catch(Ft){Ue(e,e.return,Ft)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,Ef(e,c,a!==null?a.memoizedProps:c)),o&1024&&(bf=!0);break;case 6:if(Fn(n,e),In(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Ft){Ue(e,e.return,Ft)}}break;case 3:if($l=null,c=yi,yi=Ql(n.containerInfo),Fn(n,e),yi=c,In(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{fs(n.containerInfo)}catch(Ft){Ue(e,e.return,Ft)}bf&&(bf=!1,Eg(e));break;case 4:o=yi,yi=Ql(e.stateNode.containerInfo),Fn(n,e),In(e),yi=o;break;case 12:Fn(n,e),In(e);break;case 31:Fn(n,e),In(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bl(e,o)));break;case 13:Fn(n,e),In(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Il=dt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bl(e,o)));break;case 22:c=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,J=Zi,ct=sn;if(Zi=J||c,sn=ct||z,Fn(n,e),sn=ct,Zi=J,In(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||Zi||sn||dr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(d=z.stateNode,c)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{b=z.stateNode;var gt=z.memoizedProps.style,tt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;b.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Ft){Ue(z,z.return,Ft)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(Ft){Ue(z,z.return,Ft)}}}else if(n.tag===18){if(a===null){z=n;try{var st=z.stateNode;c?f_(st,!0):f_(z.stateNode,!1)}catch(Ft){Ue(z,z.return,Ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Bl(e,a))));break;case 19:Fn(n,e),In(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bl(e,o)));break;case 30:break;case 21:break;default:Fn(n,e),In(e)}}function In(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(hg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,d=Mf(e);zl(e,d,c);break;case 5:var v=a.stateNode;a.flags&32&&(Pn(v,""),a.flags&=-33);var b=Mf(e);zl(e,b,v);break;case 3:case 4:var z=a.stateNode.containerInfo,J=Mf(e);Tf(e,J,z);break;default:throw Error(r(161))}}catch(ct){Ue(e,e.return,ct)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Eg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Eg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Qi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)gg(e,n.alternate,n),n=n.sibling}function dr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ba(4,n,n.return),dr(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&fg(n,n.return,a),dr(n);break;case 27:bo(n.stateNode);case 26:case 5:Li(n,n.return),dr(n);break;case 22:n.memoizedState===null&&dr(n);break;case 30:dr(n);break;default:dr(n)}e=e.sibling}}function Ji(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,d=n,v=d.flags;switch(d.tag){case 0:case 11:case 15:Ji(c,d,a),mo(4,d);break;case 1:if(Ji(c,d,a),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Ue(o,o.return,J)}if(o=d,c=o.updateQueue,c!==null){var b=o.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)$p(z[c],b)}catch(J){Ue(o,o.return,J)}}a&&v&64&&cg(d),go(d,d.return);break;case 27:pg(d);case 26:case 5:Ji(c,d,a),a&&o===null&&v&4&&dg(d),go(d,d.return);break;case 12:Ji(c,d,a);break;case 31:Ji(c,d,a),a&&v&4&&Sg(c,d);break;case 13:Ji(c,d,a),a&&v&4&&yg(c,d);break;case 22:d.memoizedState===null&&Ji(c,d,a),go(d,d.return);break;case 30:break;default:Ji(c,d,a)}n=n.sibling}}function Af(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&eo(a))}function Rf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e))}function xi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mg(e,n,a,o),n=n.sibling}function Mg(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:xi(e,n,a,o),c&2048&&mo(9,n);break;case 1:xi(e,n,a,o);break;case 3:xi(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e)));break;case 12:if(c&2048){xi(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,v=d.id,b=d.onPostCommit;typeof b=="function"&&b(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Ue(n,n.return,z)}}else xi(e,n,a,o);break;case 31:xi(e,n,a,o);break;case 13:xi(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,v=n.alternate,n.memoizedState!==null?d._visibility&2?xi(e,n,a,o):_o(e,n):d._visibility&2?xi(e,n,a,o):(d._visibility|=2,ts(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Af(v,n);break;case 24:xi(e,n,a,o),c&2048&&Rf(n.alternate,n);break;default:xi(e,n,a,o)}}function ts(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,v=n,b=a,z=o,J=v.flags;switch(v.tag){case 0:case 11:case 15:ts(d,v,b,z,c),mo(8,v);break;case 23:break;case 22:var ct=v.stateNode;v.memoizedState!==null?ct._visibility&2?ts(d,v,b,z,c):_o(d,v):(ct._visibility|=2,ts(d,v,b,z,c)),c&&J&2048&&Af(v.alternate,v);break;case 24:ts(d,v,b,z,c),c&&J&2048&&Rf(v.alternate,v);break;default:ts(d,v,b,z,c)}n=n.sibling}}function _o(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:_o(a,o),c&2048&&Af(o.alternate,o);break;case 24:_o(a,o),c&2048&&Rf(o.alternate,o);break;default:_o(a,o)}n=n.sibling}}var vo=8192;function es(e,n,a){if(e.subtreeFlags&vo)for(e=e.child;e!==null;)Tg(e,n,a),e=e.sibling}function Tg(e,n,a){switch(e.tag){case 26:es(e,n,a),e.flags&vo&&e.memoizedState!==null&&Ky(a,yi,e.memoizedState,e.memoizedProps);break;case 5:es(e,n,a);break;case 3:case 4:var o=yi;yi=Ql(e.stateNode.containerInfo),es(e,n,a),yi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=vo,vo=16777216,es(e,n,a),vo=o):es(e,n,a));break;default:es(e,n,a)}}function bg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function So(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,Rg(o,e)}bg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ag(e),e=e.sibling}function Ag(e){switch(e.tag){case 0:case 11:case 15:So(e),e.flags&2048&&ba(9,e,e.return);break;case 3:So(e);break;case 12:So(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Fl(e)):So(e);break;default:So(e)}}function Fl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,Rg(o,e)}bg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ba(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}e=e.sibling}}function Rg(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:eo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,mn=o;else t:for(a=e;mn!==null;){o=mn;var c=o.sibling,d=o.return;if(_g(o),o===a){mn=null;break t}if(c!==null){c.return=d,mn=c;break t}mn=d}}}var fy={getCacheForType:function(e){var n=xn(nn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return xn(nn).controller.signal}},dy=typeof WeakMap=="function"?WeakMap:Map,Ce=0,He=null,he=null,ge=0,De=0,Jn=null,Aa=!1,ns=!1,Cf=!1,$i=0,Je=0,Ra=0,hr=0,wf=0,$n=0,is=0,yo=null,Hn=null,Df=!1,Il=0,Cg=0,Hl=1/0,Gl=null,Ca=null,fn=0,wa=null,as=null,ta=0,Uf=0,Lf=null,wg=null,xo=0,Nf=null;function ti(){return(Ce&2)!==0&&ge!==0?ge&-ge:O.T!==null?If():Gs()}function Dg(){if($n===0)if((ge&536870912)===0||ye){var e=ut;ut<<=1,(ut&3932160)===0&&(ut=262144),$n=e}else $n=536870912;return e=Kn.current,e!==null&&(e.flags|=32),$n}function Gn(e,n,a){(e===He&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(rs(e,0),Da(e,ge,$n,!1)),_n(e,a),((Ce&2)===0||e!==He)&&(e===He&&((Ce&2)===0&&(hr|=a),Je===4&&Da(e,ge,$n,!1)),Ni(e))}function Ug(e,n,a){if((Ce&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ne(e,n),c=o?my(e,n):Pf(e,n,!0),d=o;do{if(c===0){ns&&!o&&Da(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!hy(a)){c=Pf(e,n,!1),d=!1;continue}if(c===2){if(d=n,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var b=e;c=yo;var z=b.current.memoizedState.isDehydrated;if(z&&(rs(b,v).flags|=256),v=Pf(b,v,!1),v!==2){if(Cf&&!z){b.errorRecoveryDisabledLanes|=d,hr|=d,c=4;break t}d=Hn,Hn=c,d!==null&&(Hn===null?Hn=d:Hn.push.apply(Hn,d))}c=v}if(d=!1,c!==2)continue}}if(c===1){rs(e,0),Da(e,n,0,!0);break}t:{switch(o=e,d=c,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Da(o,n,$n,!Aa);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Il+300-dt(),10<c)){if(Da(o,n,$n,!Aa),Dt(o,0,!0)!==0)break t;ta=n,o.timeoutHandle=l_(Lg.bind(null,o,a,Hn,Gl,Df,n,$n,hr,is,Aa,d,"Throttled",-0,0),c);break t}Lg(o,a,Hn,Gl,Df,n,$n,hr,is,Aa,d,null,-0,0)}}break}while(!0);Ni(e)}function Lg(e,n,a,o,c,d,v,b,z,J,ct,gt,tt,st){if(e.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},Tg(n,d,gt);var Ft=(d&62914560)===d?Il-dt():(d&4194048)===d?Cg-dt():0;if(Ft=Qy(gt,Ft),Ft!==null){ta=d,e.cancelPendingCommit=Ft(Hg.bind(null,e,n,d,a,o,c,v,b,z,ct,gt,null,tt,st)),Da(e,d,v,!J);return}}Hg(e,n,d,a,o,c,v,b,z)}function hy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],d=c.getSnapshot;c=c.value;try{if(!jn(d(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(e,n,a,o){n&=~wf,n&=~hr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var d=31-te(c),v=1<<d;o[d]=-1,c&=~v}a!==0&&Is(e,a,n)}function Vl(){return(Ce&6)===0?(Eo(0),!1):!0}function Of(){if(he!==null){if(De===0)var e=he.return;else e=he,ki=ar=null,Zc(e),Zr=null,io=0,e=he;for(;e!==null;)ug(e.alternate,e),e=e.return;he=null}}function rs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ny(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ta=0,Of(),He=e,he=a=Gi(e.current,null),ge=n,De=0,Jn=null,Aa=!1,ns=ne(e,n),Cf=!1,is=$n=wf=hr=Ra=Je=0,Hn=yo=null,Df=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-te(o),d=1<<c;n|=e[c],o&=~d}return $i=n,ul(),a}function Ng(e,n){oe=null,O.H=fo,n===jr||n===_l?(n=Zp(),De=3):n===Bc?(n=Zp(),De=4):De=n===df?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,he===null&&(Je=1,Ul(e,ri(n,e.current)))}function Og(){var e=Kn.current;return e===null?!0:(ge&4194048)===ge?ui===null:(ge&62914560)===ge||(ge&536870912)!==0?e===ui:!1}function Pg(){var e=O.H;return O.H=fo,e===null?fo:e}function zg(){var e=O.A;return O.A=fy,e}function kl(){Je=4,Aa||(ge&4194048)!==ge&&Kn.current!==null||(ns=!0),(Ra&134217727)===0&&(hr&134217727)===0||He===null||Da(He,ge,$n,!1)}function Pf(e,n,a){var o=Ce;Ce|=2;var c=Pg(),d=zg();(He!==e||ge!==n)&&(Gl=null,rs(e,n)),n=!1;var v=Je;t:do try{if(De!==0&&he!==null){var b=he,z=Jn;switch(De){case 8:Of(),v=6;break t;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var J=De;if(De=0,Jn=null,ss(e,b,z,J),a&&ns){v=0;break t}break;default:J=De,De=0,Jn=null,ss(e,b,z,J)}}py(),v=Je;break}catch(ct){Ng(e,ct)}while(!0);return n&&e.shellSuspendCounter++,ki=ar=null,Ce=o,O.H=c,O.A=d,he===null&&(He=null,ge=0,ul()),v}function py(){for(;he!==null;)Bg(he)}function my(e,n){var a=Ce;Ce|=2;var o=Pg(),c=zg();He!==e||ge!==n?(Gl=null,Hl=dt()+500,rs(e,n)):ns=ne(e,n);t:do try{if(De!==0&&he!==null){n=he;var d=Jn;e:switch(De){case 1:De=0,Jn=null,ss(e,n,d,1);break;case 2:case 9:if(Yp(d)){De=0,Jn=null,Fg(n);break}n=function(){De!==2&&De!==9||He!==e||(De=7),Ni(e)},d.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:Yp(d)?(De=0,Jn=null,Fg(n)):(De=0,Jn=null,ss(e,n,d,7));break;case 5:var v=null;switch(he.tag){case 26:v=he.memoizedState;case 5:case 27:var b=he;if(v?M_(v):b.stateNode.complete){De=0,Jn=null;var z=b.sibling;if(z!==null)he=z;else{var J=b.return;J!==null?(he=J,Xl(J)):he=null}break e}}De=0,Jn=null,ss(e,n,d,5);break;case 6:De=0,Jn=null,ss(e,n,d,6);break;case 8:Of(),Je=6;break t;default:throw Error(r(462))}}gy();break}catch(ct){Ng(e,ct)}while(!0);return ki=ar=null,O.H=o,O.A=c,Ce=a,he!==null?0:(He=null,ge=0,ul(),Je)}function gy(){for(;he!==null&&!A();)Bg(he)}function Bg(e){var n=og(e.alternate,e,$i);e.memoizedProps=e.pendingProps,n===null?Xl(e):he=n}function Fg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=eg(a,n,n.pendingProps,n.type,void 0,ge);break;case 11:n=eg(a,n,n.pendingProps,n.type.render,n.ref,ge);break;case 5:Zc(n);default:ug(a,n),n=he=zp(n,$i),n=og(a,n,$i)}e.memoizedProps=e.pendingProps,n===null?Xl(e):he=n}function ss(e,n,a,o){ki=ar=null,Zc(n),Zr=null,io=0;var c=n.return;try{if(ay(e,c,n,a,ge)){Je=1,Ul(e,ri(a,e.current)),he=null;return}}catch(d){if(c!==null)throw he=c,d;Je=1,Ul(e,ri(a,e.current)),he=null;return}n.flags&32768?(ye||o===1?e=!0:ns||(ge&536870912)!==0?e=!1:(Aa=e=!0,(o===2||o===9||o===3||o===6)&&(o=Kn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Ig(n,e)):Xl(n)}function Xl(e){var n=e;do{if((n.flags&32768)!==0){Ig(n,Aa);return}e=n.return;var a=oy(n.alternate,n,$i);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=e}while(n!==null);Je===0&&(Je=5)}function Ig(e,n){do{var a=ly(e.alternate,e);if(a!==null){a.flags&=32767,he=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){he=e;return}he=e=a}while(e!==null);Je=6,he=null}function Hg(e,n,a,o,c,d,v,b,z){e.cancelPendingCommit=null;do ql();while(fn!==0);if((Ce&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Ec,gi(e,a,d,v,b,z),e===He&&(he=He=null,ge=0),as=n,wa=e,ta=a,Uf=d,Lf=c,wg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yy(Ct,function(){return qg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,c=K.p,K.p=2,v=Ce,Ce|=4;try{uy(e,n,a)}finally{Ce=v,K.p=c,O.T=o}}fn=1,Gg(),Vg(),kg()}}function Gg(){if(fn===1){fn=0;var e=wa,n=as,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=K.p;K.p=2;var c=Ce;Ce|=4;try{xg(n,e);var d=Yf,v=Rp(e.containerInfo),b=d.focusedElem,z=d.selectionRange;if(v!==b&&b&&b.ownerDocument&&Ap(b.ownerDocument.documentElement,b)){if(z!==null&&_c(b)){var J=z.start,ct=z.end;if(ct===void 0&&(ct=J),"selectionStart"in b)b.selectionStart=J,b.selectionEnd=Math.min(ct,b.value.length);else{var gt=b.ownerDocument||document,tt=gt&&gt.defaultView||window;if(tt.getSelection){var st=tt.getSelection(),Ft=b.textContent.length,Qt=Math.min(z.start,Ft),ze=z.end===void 0?Qt:Math.min(z.end,Ft);!st.extend&&Qt>ze&&(v=ze,ze=Qt,Qt=v);var j=bp(b,Qt),H=bp(b,ze);if(j&&H&&(st.rangeCount!==1||st.anchorNode!==j.node||st.anchorOffset!==j.offset||st.focusNode!==H.node||st.focusOffset!==H.offset)){var Q=gt.createRange();Q.setStart(j.node,j.offset),st.removeAllRanges(),Qt>ze?(st.addRange(Q),st.extend(H.node,H.offset)):(Q.setEnd(H.node,H.offset),st.addRange(Q))}}}}for(gt=[],st=b;st=st.parentNode;)st.nodeType===1&&gt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<gt.length;b++){var pt=gt[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}iu=!!Wf,Yf=Wf=null}finally{Ce=c,K.p=o,O.T=a}}e.current=n,fn=2}}function Vg(){if(fn===2){fn=0;var e=wa,n=as,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=K.p;K.p=2;var c=Ce;Ce|=4;try{gg(e,n.alternate,n)}finally{Ce=c,K.p=o,O.T=a}}fn=3}}function kg(){if(fn===4||fn===3){fn=0,et();var e=wa,n=as,a=ta,o=wg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?fn=5:(fn=0,as=wa=null,Xg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ca=null),Nr(a),n=n.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(jt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,c=K.p,K.p=2,O.T=null;try{for(var d=e.onRecoverableError,v=0;v<o.length;v++){var b=o[v];d(b.value,{componentStack:b.stack})}}finally{O.T=n,K.p=c}}(ta&3)!==0&&ql(),Ni(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Nf?xo++:(xo=0,Nf=e):xo=0,Eo(0)}}function Xg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,eo(n)))}function ql(){return Gg(),Vg(),kg(),qg()}function qg(){if(fn!==5)return!1;var e=wa,n=Uf;Uf=0;var a=Nr(ta),o=O.T,c=K.p;try{K.p=32>a?32:a,O.T=null,a=Lf,Lf=null;var d=wa,v=ta;if(fn=0,as=wa=null,ta=0,(Ce&6)!==0)throw Error(r(331));var b=Ce;if(Ce|=4,Ag(d.current),Mg(d,d.current,v,a),Ce=b,Eo(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(jt,d)}catch{}return!0}finally{K.p=c,O.T=o,Xg(e,n)}}function Wg(e,n,a){n=ri(a,n),n=ff(e.stateNode,n,2),e=Ea(e,n,2),e!==null&&(_n(e,2),Ni(e))}function Ue(e,n,a){if(e.tag===3)Wg(e,e,a);else for(;n!==null;){if(n.tag===3){Wg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ca===null||!Ca.has(o))){e=ri(a,e),a=Ym(2),o=Ea(n,a,2),o!==null&&(jm(a,o,n,e),_n(o,2),Ni(o));break}}n=n.return}}function zf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new dy;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Cf=!0,c.add(a),e=_y.bind(null,e,n,a),n.then(e,e))}function _y(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,He===e&&(ge&a)===a&&(Je===4||Je===3&&(ge&62914560)===ge&&300>dt()-Il?(Ce&2)===0&&rs(e,0):wf|=a,is===ge&&(is=0)),Ni(e)}function Yg(e,n){n===0&&(n=un()),e=er(e,n),e!==null&&(_n(e,n),Ni(e))}function vy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Yg(e,a)}function Sy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Yg(e,a)}function yy(e,n){return Vt(e,n)}var Wl=null,os=null,Bf=!1,Yl=!1,Ff=!1,Ua=0;function Ni(e){e!==os&&e.next===null&&(os===null?Wl=os=e:os=os.next=e),Yl=!0,Bf||(Bf=!0,Ey())}function Eo(e,n){if(!Ff&&Yl){Ff=!0;do for(var a=!1,o=Wl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var v=o.suspendedLanes,b=o.pingedLanes;d=(1<<31-te(42|e)+1)-1,d&=c&~(v&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Qg(o,d))}else d=ge,d=Dt(o,o===He?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||ne(o,d)||(a=!0,Qg(o,d));o=o.next}while(a);Ff=!1}}function xy(){jg()}function jg(){Yl=Bf=!1;var e=0;Ua!==0&&Ly()&&(e=Ua);for(var n=dt(),a=null,o=Wl;o!==null;){var c=o.next,d=Zg(o,n);d===0?(o.next=null,a===null?Wl=c:a.next=c,c===null&&(os=a)):(a=o,(e!==0||(d&3)!==0)&&(Yl=!0)),o=c}fn!==0&&fn!==5||Eo(e),Ua!==0&&(Ua=0)}function Zg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-te(d),b=1<<v,z=c[v];z===-1?((b&a)===0||(b&o)!==0)&&(c[v]=Ye(b,n)):z<=n&&(e.expiredLanes|=b),d&=~b}if(n=He,a=ge,a=Dt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(De===2||De===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&U(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ne(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&U(o),Nr(a)){case 2:case 8:a=Ht;break;case 32:a=Ct;break;case 268435456:a=Jt;break;default:a=Ct}return o=Kg.bind(null,e),a=Vt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&U(o),e.callbackPriority=2,e.callbackNode=null,2}function Kg(e,n){if(fn!==0&&fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ql()&&e.callbackNode!==a)return null;var o=ge;return o=Dt(e,e===He?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Ug(e,o,n),Zg(e,dt()),e.callbackNode!=null&&e.callbackNode===a?Kg.bind(null,e):null)}function Qg(e,n){if(ql())return null;Ug(e,n,!0)}function Ey(){Oy(function(){(Ce&6)!==0?Vt(mt,xy):jg()})}function If(){if(Ua===0){var e=Wr;e===0&&(e=wt,wt<<=1,(wt&261888)===0&&(wt=256)),Ua=e}return Ua}function Jg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:el(""+e)}function $g(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function My(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var d=Jg((c[vn]||null).action),v=o.submitter;v&&(n=(n=v[vn]||null)?Jg(n.formAction):v.getAttribute("formAction"),n!==null&&(d=n,v=null));var b=new rl("action","action",null,o,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ua!==0){var z=v?$g(c,v):new FormData(c);rf(a,{pending:!0,data:z,method:c.method,action:d},null,z)}}else typeof d=="function"&&(b.preventDefault(),z=v?$g(c,v):new FormData(c),rf(a,{pending:!0,data:z,method:c.method,action:d},d,z))},currentTarget:c}]})}}for(var Hf=0;Hf<xc.length;Hf++){var Gf=xc[Hf],Ty=Gf.toLowerCase(),by=Gf[0].toUpperCase()+Gf.slice(1);Si(Ty,"on"+by)}Si(Dp,"onAnimationEnd"),Si(Up,"onAnimationIteration"),Si(Lp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(GS,"onTransitionRun"),Si(VS,"onTransitionStart"),Si(kS,"onTransitionCancel"),Si(Np,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ay=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function t_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var v=o.length-1;0<=v;v--){var b=o[v],z=b.instance,J=b.currentTarget;if(b=b.listener,z!==d&&c.isPropagationStopped())break t;d=b,c.currentTarget=J;try{d(c)}catch(ct){ll(ct)}c.currentTarget=null,d=z}else for(v=0;v<o.length;v++){if(b=o[v],z=b.instance,J=b.currentTarget,b=b.listener,z!==d&&c.isPropagationStopped())break t;d=b,c.currentTarget=J;try{d(c)}catch(ct){ll(ct)}c.currentTarget=null,d=z}}}}function pe(e,n){var a=n[Vs];a===void 0&&(a=n[Vs]=new Set);var o=e+"__bubble";a.has(o)||(e_(n,e,2,!1),a.add(o))}function Vf(e,n,a){var o=0;n&&(o|=4),e_(a,e,o,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function kf(e){if(!e[jl]){e[jl]=!0,bt.forEach(function(a){a!=="selectionchange"&&(Ay.has(a)||Vf(a,!1,e),Vf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jl]||(n[jl]=!0,Vf("selectionchange",!1,n))}}function e_(e,n,a,o){switch(D_(n)){case 2:var c=tx;break;case 8:c=ex;break;default:c=ad}a=c.bind(null,n,a,e),c=void 0,!lc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Xf(e,n,a,o,c){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var b=o.stateNode.containerInfo;if(b===c)break;if(v===4)for(v=o.return;v!==null;){var z=v.tag;if((z===3||z===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;b!==null;){if(v=R(b),v===null)return;if(z=v.tag,z===5||z===6||z===26||z===27){o=d=v;continue t}b=b.parentNode}}o=o.return}sp(function(){var J=d,ct=sc(a),gt=[];t:{var tt=Op.get(e);if(tt!==void 0){var st=rl,Ft=e;switch(e){case"keypress":if(il(a)===0)break t;case"keydown":case"keyup":st=SS;break;case"focusin":Ft="focus",st=dc;break;case"focusout":Ft="blur",st=dc;break;case"beforeblur":case"afterblur":st=dc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=oS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=ES;break;case Dp:case Up:case Lp:st=cS;break;case Np:st=TS;break;case"scroll":case"scrollend":st=rS;break;case"wheel":st=AS;break;case"copy":case"cut":case"paste":st=dS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=fp;break;case"toggle":case"beforetoggle":st=CS}var Qt=(n&4)!==0,ze=!Qt&&(e==="scroll"||e==="scrollend"),j=Qt?tt!==null?tt+"Capture":null:tt;Qt=[];for(var H=J,Q;H!==null;){var pt=H;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||j===null||(pt=Xs(H,j),pt!=null&&Qt.push(To(H,pt,Q))),ze)break;H=H.return}0<Qt.length&&(tt=new st(tt,Ft,null,a,ct),gt.push({event:tt,listeners:Qt}))}}if((n&7)===0){t:{if(tt=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",tt&&a!==rc&&(Ft=a.relatedTarget||a.fromElement)&&(R(Ft)||Ft[Fi]))break t;if((st||tt)&&(tt=ct.window===ct?ct:(tt=ct.ownerDocument)?tt.defaultView||tt.parentWindow:window,st?(Ft=a.relatedTarget||a.toElement,st=J,Ft=Ft?R(Ft):null,Ft!==null&&(ze=u(Ft),Qt=Ft.tag,Ft!==ze||Qt!==5&&Qt!==27&&Qt!==6)&&(Ft=null)):(st=null,Ft=J),st!==Ft)){if(Qt=up,pt="onMouseLeave",j="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(Qt=fp,pt="onPointerLeave",j="onPointerEnter",H="pointer"),ze=st==null?tt:nt(st),Q=Ft==null?tt:nt(Ft),tt=new Qt(pt,H+"leave",st,a,ct),tt.target=ze,tt.relatedTarget=Q,pt=null,R(ct)===J&&(Qt=new Qt(j,H+"enter",Ft,a,ct),Qt.target=Q,Qt.relatedTarget=ze,pt=Qt),ze=pt,st&&Ft)e:{for(Qt=Ry,j=st,H=Ft,Q=0,pt=j;pt;pt=Qt(pt))Q++;pt=0;for(var qt=H;qt;qt=Qt(qt))pt++;for(;0<Q-pt;)j=Qt(j),Q--;for(;0<pt-Q;)H=Qt(H),pt--;for(;Q--;){if(j===H||H!==null&&j===H.alternate){Qt=j;break e}j=Qt(j),H=Qt(H)}Qt=null}else Qt=null;st!==null&&n_(gt,tt,st,Qt,!1),Ft!==null&&ze!==null&&n_(gt,ze,Ft,Qt,!0)}}t:{if(tt=J?nt(J):window,st=tt.nodeName&&tt.nodeName.toLowerCase(),st==="select"||st==="input"&&tt.type==="file")var be=Sp;else if(_p(tt))if(yp)be=FS;else{be=zS;var It=PS}else st=tt.nodeName,!st||st.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?J&&ac(J.elementType)&&(be=Sp):be=BS;if(be&&(be=be(e,J))){vp(gt,be,a,ct);break t}It&&It(e,tt,J),e==="focusout"&&J&&tt.type==="number"&&J.memoizedProps.value!=null&&bn(tt,"number",tt.value)}switch(It=J?nt(J):window,e){case"focusin":(_p(It)||It.contentEditable==="true")&&(Fr=It,vc=J,Js=null);break;case"focusout":Js=vc=Fr=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,Cp(gt,a,ct);break;case"selectionchange":if(HS)break;case"keydown":case"keyup":Cp(gt,a,ct)}var le;if(pc)t:{switch(e){case"compositionstart":var _e="onCompositionStart";break t;case"compositionend":_e="onCompositionEnd";break t;case"compositionupdate":_e="onCompositionUpdate";break t}_e=void 0}else Br?mp(e,a)&&(_e="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(dp&&a.locale!=="ko"&&(Br||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Br&&(le=op()):(ma=ct,uc="value"in ma?ma.value:ma.textContent,Br=!0)),It=Zl(J,_e),0<It.length&&(_e=new cp(_e,e,null,a,ct),gt.push({event:_e,listeners:It}),le?_e.data=le:(le=gp(a),le!==null&&(_e.data=le)))),(le=DS?US(e,a):LS(e,a))&&(_e=Zl(J,"onBeforeInput"),0<_e.length&&(It=new cp("onBeforeInput","beforeinput",null,a,ct),gt.push({event:It,listeners:_e}),It.data=le)),My(gt,e,J,a,ct)}t_(gt,n)})}function To(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Zl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Xs(e,a),c!=null&&o.unshift(To(e,c,d)),c=Xs(e,n),c!=null&&o.push(To(e,c,d))),e.tag===3)return o;e=e.return}return[]}function Ry(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function n_(e,n,a,o,c){for(var d=n._reactName,v=[];a!==null&&a!==o;){var b=a,z=b.alternate,J=b.stateNode;if(b=b.tag,z!==null&&z===o)break;b!==5&&b!==26&&b!==27||J===null||(z=J,c?(J=Xs(a,d),J!=null&&v.unshift(To(a,J,z))):c||(J=Xs(a,d),J!=null&&v.push(To(a,J,z)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var Cy=/\r\n?/g,wy=/\u0000|\uFFFD/g;function i_(e){return(typeof e=="string"?e:""+e).replace(Cy,`
`).replace(wy,"")}function a_(e,n){return n=i_(n),i_(e)===n}function Pe(e,n,a,o,c,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Pn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Pn(e,""+o);break;case"className":ke(e,"class",o);break;case"tabIndex":ke(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ke(e,a,o);break;case"style":ap(e,o,d);break;case"data":if(n!=="object"){ke(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=el(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Pe(e,n,"name",c.name,c,null),Pe(e,n,"formEncType",c.formEncType,c,null),Pe(e,n,"formMethod",c.formMethod,c,null),Pe(e,n,"formTarget",c.formTarget,c,null)):(Pe(e,n,"encType",c.encType,c,null),Pe(e,n,"method",c.method,c,null),Pe(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=el(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ii);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=el(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Se(e,"popover",o);break;case"xlinkActuate":Te(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Te(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Te(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Te(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Te(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Te(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Te(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Se(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=iS.get(a)||a,Se(e,a,o))}}function qf(e,n,a,o,c,d){switch(a){case"style":ap(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Pn(e,o):(typeof o=="number"||typeof o=="bigint")&&Pn(e,""+o);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ut.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),d=e[vn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Se(e,a,o)}}}function Mn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var o=!1,c=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,d,v,a,null)}}c&&Pe(e,n,"srcSet",a.srcSet,a,null),o&&Pe(e,n,"src",a.src,a,null);return;case"input":pe("invalid",e);var b=d=v=c=null,z=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ct=a[o];if(ct!=null)switch(o){case"name":c=ct;break;case"type":v=ct;break;case"checked":z=ct;break;case"defaultChecked":J=ct;break;case"value":d=ct;break;case"defaultValue":b=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Pe(e,n,o,ct,a,null)}}Un(e,d,b,z,J,v,c,!1);return;case"select":pe("invalid",e),o=v=d=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":d=b;break;case"defaultValue":v=b;break;case"multiple":o=b;default:Pe(e,n,c,b,a,null)}n=d,a=v,e.multiple=!!o,n!=null?Ke(e,!!o,n,!1):a!=null&&Ke(e,!!o,a,!0);return;case"textarea":pe("invalid",e),d=c=o=null;for(v in a)if(a.hasOwnProperty(v)&&(b=a[v],b!=null))switch(v){case"value":o=b;break;case"defaultValue":c=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Pe(e,n,v,b,a,null)}Or(e,o,c,d);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Pe(e,n,z,o,a,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(o=0;o<Mo.length;o++)pe(Mo[o],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,J,o,a,null)}return;default:if(ac(n)){for(ct in a)a.hasOwnProperty(ct)&&(o=a[ct],o!==void 0&&qf(e,n,ct,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Pe(e,n,b,o,a,null))}function Dy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,v=null,b=null,z=null,J=null,ct=null;for(st in a){var gt=a[st];if(a.hasOwnProperty(st)&&gt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":z=gt;default:o.hasOwnProperty(st)||Pe(e,n,st,null,o,gt)}}for(var tt in o){var st=o[tt];if(gt=a[tt],o.hasOwnProperty(tt)&&(st!=null||gt!=null))switch(tt){case"type":d=st;break;case"name":c=st;break;case"checked":J=st;break;case"defaultChecked":ct=st;break;case"value":v=st;break;case"defaultValue":b=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:st!==gt&&Pe(e,n,tt,st,o,gt)}}Ne(e,v,b,z,J,ct,d,c);return;case"select":st=v=b=tt=null;for(d in a)if(z=a[d],a.hasOwnProperty(d)&&z!=null)switch(d){case"value":break;case"multiple":st=z;default:o.hasOwnProperty(d)||Pe(e,n,d,null,o,z)}for(c in o)if(d=o[c],z=a[c],o.hasOwnProperty(c)&&(d!=null||z!=null))switch(c){case"value":tt=d;break;case"defaultValue":b=d;break;case"multiple":v=d;default:d!==z&&Pe(e,n,c,d,o,z)}n=b,a=v,o=st,tt!=null?Ke(e,!!a,tt,!1):!!o!=!!a&&(n!=null?Ke(e,!!a,n,!0):Ke(e,!!a,a?[]:"",!1));return;case"textarea":st=tt=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Pe(e,n,b,null,o,c)}for(v in o)if(c=o[v],d=a[v],o.hasOwnProperty(v)&&(c!=null||d!=null))switch(v){case"value":tt=c;break;case"defaultValue":st=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==d&&Pe(e,n,v,c,o,d)}Sn(e,tt,st);return;case"option":for(var Ft in a)if(tt=a[Ft],a.hasOwnProperty(Ft)&&tt!=null&&!o.hasOwnProperty(Ft))switch(Ft){case"selected":e.selected=!1;break;default:Pe(e,n,Ft,null,o,tt)}for(z in o)if(tt=o[z],st=a[z],o.hasOwnProperty(z)&&tt!==st&&(tt!=null||st!=null))switch(z){case"selected":e.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:Pe(e,n,z,tt,o,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)tt=a[Qt],a.hasOwnProperty(Qt)&&tt!=null&&!o.hasOwnProperty(Qt)&&Pe(e,n,Qt,null,o,tt);for(J in o)if(tt=o[J],st=a[J],o.hasOwnProperty(J)&&tt!==st&&(tt!=null||st!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:Pe(e,n,J,tt,o,st)}return;default:if(ac(n)){for(var ze in a)tt=a[ze],a.hasOwnProperty(ze)&&tt!==void 0&&!o.hasOwnProperty(ze)&&qf(e,n,ze,void 0,o,tt);for(ct in o)tt=o[ct],st=a[ct],!o.hasOwnProperty(ct)||tt===st||tt===void 0&&st===void 0||qf(e,n,ct,tt,o,st);return}}for(var j in a)tt=a[j],a.hasOwnProperty(j)&&tt!=null&&!o.hasOwnProperty(j)&&Pe(e,n,j,null,o,tt);for(gt in o)tt=o[gt],st=a[gt],!o.hasOwnProperty(gt)||tt===st||tt==null&&st==null||Pe(e,n,gt,tt,o,st)}function r_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Uy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],d=c.transferSize,v=c.initiatorType,b=c.duration;if(d&&b&&r_(v)){for(v=0,b=c.responseEnd,o+=1;o<a.length;o++){var z=a[o],J=z.startTime;if(J>b)break;var ct=z.transferSize,gt=z.initiatorType;ct&&r_(gt)&&(z=z.responseEnd,v+=ct*(z<b?1:(b-J)/(z-J)))}if(--o,n+=8*(d+v)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Wf=null,Yf=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function s_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function o_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function jf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zf=null;function Ly(){var e=window.event;return e&&e.type==="popstate"?e===Zf?!1:(Zf=e,!0):(Zf=null,!1)}var l_=typeof setTimeout=="function"?setTimeout:void 0,Ny=typeof clearTimeout=="function"?clearTimeout:void 0,u_=typeof Promise=="function"?Promise:void 0,Oy=typeof queueMicrotask=="function"?queueMicrotask:typeof u_<"u"?function(e){return u_.resolve(null).then(e).catch(Py)}:l_;function Py(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function c_(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),fs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,bo(a);for(var d=a.firstChild;d;){var v=d.nextSibling,b=d.nodeName;d[Qa]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=v}}else a==="body"&&bo(e.ownerDocument.body);a=c}while(a);fs(n)}function f_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Kf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),ks(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function zy(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Qa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=ci(e.nextSibling),e===null)break}return null}function By(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ci(e.nextSibling),e===null))return null;return e}function d_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ci(e.nextSibling),e===null))return null;return e}function Qf(e){return e.data==="$?"||e.data==="$~"}function Jf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Fy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ci(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var $f=null;function h_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ci(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function p_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function m_(e,n,a){switch(n=Kl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function bo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ks(e)}var fi=new Map,g_=new Set;function Ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ea=K.d;K.d={f:Iy,r:Hy,D:Gy,C:Vy,L:ky,m:Xy,X:Wy,S:qy,M:Yy};function Iy(){var e=ea.f(),n=Vl();return e||n}function Hy(e){var n=W(e);n!==null&&n.tag===5&&n.type==="form"?Nm(n):ea.r(e)}var ls=typeof document>"u"?null:document;function __(e,n,a){var o=ls;if(o&&typeof n=="string"&&n){var c=pn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),g_.has(c)||(g_.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Mn(n,"link",e),V(n),o.head.appendChild(n)))}}function Gy(e){ea.D(e),__("dns-prefetch",e,null)}function Vy(e,n){ea.C(e,n),__("preconnect",e,n)}function ky(e,n,a){ea.L(e,n,a);var o=ls;if(o&&e&&n){var c='link[rel="preload"][as="'+pn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+pn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+pn(a.imageSizes)+'"]')):c+='[href="'+pn(e)+'"]';var d=c;switch(n){case"style":d=us(e);break;case"script":d=cs(e)}fi.has(d)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(d,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Ao(d))||n==="script"&&o.querySelector(Ro(d))||(n=o.createElement("link"),Mn(n,"link",e),V(n),o.head.appendChild(n)))}}function Xy(e,n){ea.m(e,n);var a=ls;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+pn(o)+'"][href="'+pn(e)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=cs(e)}if(!fi.has(d)&&(e=_({rel:"modulepreload",href:e},n),fi.set(d,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(d)))return}o=a.createElement("link"),Mn(o,"link",e),V(o),a.head.appendChild(o)}}}function qy(e,n,a){ea.S(e,n,a);var o=ls;if(o&&e){var c=it(o).hoistableStyles,d=us(e);n=n||"default";var v=c.get(d);if(!v){var b={loading:0,preload:null};if(v=o.querySelector(Ao(d)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(d))&&td(e,a);var z=v=o.createElement("link");V(z),Mn(z,"link",e),z._p=new Promise(function(J,ct){z.onload=J,z.onerror=ct}),z.addEventListener("load",function(){b.loading|=1}),z.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Jl(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:b},c.set(d,v)}}}function Wy(e,n){ea.X(e,n);var a=ls;if(a&&e){var o=it(a).hoistableScripts,c=cs(e),d=o.get(c);d||(d=a.querySelector(Ro(c)),d||(e=_({src:e,async:!0},n),(n=fi.get(c))&&ed(e,n),d=a.createElement("script"),V(d),Mn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function Yy(e,n){ea.M(e,n);var a=ls;if(a&&e){var o=it(a).hoistableScripts,c=cs(e),d=o.get(c);d||(d=a.querySelector(Ro(c)),d||(e=_({src:e,async:!0,type:"module"},n),(n=fi.get(c))&&ed(e,n),d=a.createElement("script"),V(d),Mn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function v_(e,n,a,o){var c=(c=Mt.current)?Ql(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=it(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=us(a.href);var d=it(c).hoistableStyles,v=d.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=c.querySelector(Ao(e)))&&!d._p&&(v.instance=d,v.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),d||jy(c,e,a,v.state))),n&&o===null)throw Error(r(528,""));return v}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=cs(a),a=it(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function us(e){return'href="'+pn(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function S_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function jy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Mn(n,"link",a),V(n),e.head.appendChild(n))}function cs(e){return'[src="'+pn(e)+'"]'}function Ro(e){return"script[async]"+e}function y_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+pn(a.href)+'"]');if(o)return n.instance=o,V(o),o;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),V(o),Mn(o,"style",c),Jl(o,a.precedence,e),n.instance=o;case"stylesheet":c=us(a.href);var d=e.querySelector(Ao(c));if(d)return n.state.loading|=4,n.instance=d,V(d),d;o=S_(a),(c=fi.get(c))&&td(o,c),d=(e.ownerDocument||e).createElement("link"),V(d);var v=d;return v._p=new Promise(function(b,z){v.onload=b,v.onerror=z}),Mn(d,"link",o),n.state.loading|=4,Jl(d,a.precedence,e),n.instance=d;case"script":return d=cs(a.src),(c=e.querySelector(Ro(d)))?(n.instance=c,V(c),c):(o=a,(c=fi.get(d))&&(o=_({},a),ed(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),V(c),Mn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Jl(o,a.precedence,e));return n.instance}function Jl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,v=0;v<o.length;v++){var b=o[v];if(b.dataset.precedence===n)d=b;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function td(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ed(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var $l=null;function x_(e,n,a){if($l===null){var o=new Map,c=$l=new Map;c.set(a,o)}else c=$l,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var d=a[c];if(!(d[Qa]||d[Ze]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(n)||"";v=e+v;var b=o.get(v);b?b.push(d):o.set(v,[d])}}return o}function E_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Zy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function M_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ky(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=us(o.href),d=n.querySelector(Ao(c));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=tu.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,V(d);return}d=n.ownerDocument||n,o=S_(o),(c=fi.get(c))&&td(o,c),d=d.createElement("link"),V(d);var v=d;v._p=new Promise(function(b,z){v.onload=b,v.onerror=z}),Mn(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=tu.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var nd=0;function Qy(e,n){return e.stylesheets&&e.count===0&&nu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&nu(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&nd===0&&(nd=62500*Uy());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&nu(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>nd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function tu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var eu=null;function nu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,eu=new Map,n.forEach(Jy,e),eu=null,tu.call(e))}function Jy(e,n){if(!(n.state.loading&4)){var a=eu.get(e);if(a)var o=a.get(null);else{a=new Map,eu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var v=c[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}c=n.instance,v=c.getAttribute("data-precedence"),d=a.get(v)||o,d===o&&a.set(null,c),a.set(v,c),this.count++,o=tu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Co={$$typeof:N,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function $y(e,n,a,o,c,d,v,b,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Me(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Me(0),this.hiddenUpdates=Me(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function T_(e,n,a,o,c,d,v,b,z,J,ct,gt){return e=new $y(e,n,a,v,z,J,ct,gt,b),n=1,d===!0&&(n|=24),d=Zn(3,null,null,n),e.current=d,d.stateNode=e,n=Oc(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Fc(d),e}function b_(e){return e?(e=Gr,e):Gr}function A_(e,n,a,o,c,d){c=b_(c),o.context===null?o.context=c:o.pendingContext=c,o=xa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ea(e,o,n),a!==null&&(Gn(a,e,n),ro(a,e,n))}function R_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function id(e,n){R_(e,n),(e=e.alternate)&&R_(e,n)}function C_(e){if(e.tag===13||e.tag===31){var n=er(e,67108864);n!==null&&Gn(n,e,67108864),id(e,67108864)}}function w_(e){if(e.tag===13||e.tag===31){var n=ti();n=Za(n);var a=er(e,n);a!==null&&Gn(a,e,n),id(e,n)}}var iu=!0;function tx(e,n,a,o){var c=O.T;O.T=null;var d=K.p;try{K.p=2,ad(e,n,a,o)}finally{K.p=d,O.T=c}}function ex(e,n,a,o){var c=O.T;O.T=null;var d=K.p;try{K.p=8,ad(e,n,a,o)}finally{K.p=d,O.T=c}}function ad(e,n,a,o){if(iu){var c=rd(o);if(c===null)Xf(e,n,o,au,a),U_(e,o);else if(ix(c,e,n,a,o))o.stopPropagation();else if(U_(e,o),n&4&&-1<nx.indexOf(e)){for(;c!==null;){var d=W(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Rt(d.pendingLanes);if(v!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var z=1<<31-te(v);b.entanglements[1]|=z,v&=~z}Ni(d),(Ce&6)===0&&(Hl=dt()+500,Eo(0))}}break;case 31:case 13:b=er(d,2),b!==null&&Gn(b,d,2),Vl(),id(d,2)}if(d=rd(o),d===null&&Xf(e,n,o,au,a),d===c)break;c=d}c!==null&&o.stopPropagation()}else Xf(e,n,o,null,a)}}function rd(e){return e=sc(e),sd(e)}var au=null;function sd(e){if(au=null,e=R(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return au=e,null}function D_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Et()){case mt:return 2;case Ht:return 8;case Ct:case Kt:return 32;case Jt:return 268435456;default:return 32}default:return 32}}var od=!1,Na=null,Oa=null,Pa=null,wo=new Map,Do=new Map,za=[],nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function U_(e,n){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(e,n,a,o,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},n!==null&&(n=W(n),n!==null&&C_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function ix(e,n,a,o,c){switch(n){case"focusin":return Na=Uo(Na,e,n,a,o,c),!0;case"dragenter":return Oa=Uo(Oa,e,n,a,o,c),!0;case"mouseover":return Pa=Uo(Pa,e,n,a,o,c),!0;case"pointerover":var d=c.pointerId;return wo.set(d,Uo(wo.get(d)||null,e,n,a,o,c)),!0;case"gotpointercapture":return d=c.pointerId,Do.set(d,Uo(Do.get(d)||null,e,n,a,o,c)),!0}return!1}function L_(e){var n=R(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Ka(e.priority,function(){w_(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Ka(e.priority,function(){w_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ru(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=rd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);rc=o,a.target.dispatchEvent(o),rc=null}else return n=W(a),n!==null&&C_(n),e.blockedOn=a,!1;n.shift()}return!0}function N_(e,n,a){ru(e)&&a.delete(n)}function ax(){od=!1,Na!==null&&ru(Na)&&(Na=null),Oa!==null&&ru(Oa)&&(Oa=null),Pa!==null&&ru(Pa)&&(Pa=null),wo.forEach(N_),Do.forEach(N_)}function su(e,n){e.blockedOn===n&&(e.blockedOn=null,od||(od=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ax)))}var ou=null;function O_(e){ou!==e&&(ou=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ou===e&&(ou=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(sd(o||a)===null)continue;break}var d=W(a);d!==null&&(e.splice(n,3),n-=3,rf(d,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function fs(e){function n(z){return su(z,e)}Na!==null&&su(Na,e),Oa!==null&&su(Oa,e),Pa!==null&&su(Pa,e),wo.forEach(n),Do.forEach(n);for(var a=0;a<za.length;a++){var o=za[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)L_(a),a.blockedOn===null&&za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],d=a[o+1],v=c[vn]||null;if(typeof d=="function")v||O_(a);else if(v){var b=null;if(d&&d.hasAttribute("formAction")){if(c=d,v=d[vn]||null)b=v.formAction;else if(sd(c)!==null)continue}else b=v.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),O_(a)}}}function P_(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function ld(e){this._internalRoot=e}lu.prototype.render=ld.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ti();A_(a,o,e,n,null,null)},lu.prototype.unmount=ld.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;A_(e.current,2,null,e,null,null),Vl(),n[Fi]=null}};function lu(e){this._internalRoot=e}lu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Gs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<za.length&&n!==0&&n<za[a].priority;a++);za.splice(a,0,e),a===0&&L_(e)}};var z_=t.version;if(z_!=="19.2.4")throw Error(r(527,z_,"19.2.4"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var rx={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{jt=uu.inject(rx),Gt=uu}catch{}}return No.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=km,d=Xm,v=qm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=T_(e,1,!1,null,null,a,o,null,c,d,v,P_),e[Fi]=n.current,kf(e),new ld(n)},No.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",d=km,v=Xm,b=qm,z=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=T_(e,1,!0,n,a??null,o,c,z,d,v,b,P_),n.context=b_(null),a=n.current,o=ti(),o=Za(o),c=xa(o),c.callback=null,Ea(a,c,o),a=o,n.current.lanes=a,_n(n,a),Ni(n),e[Fi]=n.current,kf(e),new lu(n)},No.version="19.2.4",No}var W_;function mx(){if(W_)return fd.exports;W_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),fd.exports=px(),fd.exports}var gx=mx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gh="176",_x=0,Y_=1,vx=2,r0=1,Sx=2,oa=3,Ya=0,Xn=1,ua=2,qa=0,Rs=1,j_=2,Z_=3,K_=4,yx=5,Er=100,xx=101,Ex=102,Mx=103,Tx=104,bx=200,Ax=201,Rx=202,Cx=203,Zd=204,Kd=205,wx=206,Dx=207,Ux=208,Lx=209,Nx=210,Ox=211,Px=212,zx=213,Bx=214,Qd=0,Jd=1,$d=2,ws=3,th=4,eh=5,nh=6,ih=7,s0=0,Fx=1,Ix=2,Wa=0,Hx=1,Gx=2,Vx=3,kx=4,Xx=5,qx=6,Wx=7,o0=300,Ds=301,Us=302,ah=303,rh=304,Yu=306,sh=1e3,Tr=1001,oh=1002,Ri=1003,Yx=1004,cu=1005,Pi=1006,md=1007,br=1008,ha=1009,l0=1010,u0=1011,Go=1012,Vh=1013,wr=1014,ca=1015,qo=1016,kh=1017,Xh=1018,Vo=1020,c0=35902,f0=1021,d0=1022,Ai=1023,ko=1026,Xo=1027,h0=1028,qh=1029,p0=1030,Wh=1031,Yh=1033,Nu=33776,Ou=33777,Pu=33778,zu=33779,lh=35840,uh=35841,ch=35842,fh=35843,dh=36196,hh=37492,ph=37496,mh=37808,gh=37809,_h=37810,vh=37811,Sh=37812,yh=37813,xh=37814,Eh=37815,Mh=37816,Th=37817,bh=37818,Ah=37819,Rh=37820,Ch=37821,Bu=36492,wh=36494,Dh=36495,m0=36283,Uh=36284,Lh=36285,Nh=36286,jx=3200,Zx=3201,Kx=0,Qx=1,Xa="",pi="srgb",Ls="srgb-linear",ku="linear",Be="srgb",ds=7680,Q_=519,Jx=512,$x=513,tE=514,g0=515,eE=516,nE=517,iE=518,aE=519,J_=35044,$_="300 es",fa=2e3,Xu=2001;class Ps{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gd=Math.PI/180,Oh=180/Math.PI;function Wo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function xe(s,t,i){return Math.max(t,Math.min(i,s))}function rE(s,t){return(s%t+t)%t}function _d(s,t,i){return(1-i)*s+i*t}function Oo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(t=0,i=0){Ge.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*r-f*l+t.x,this.y=u*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,i,r,l,u,f,h,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,h,m,p)}set(t,i,r,l,u,f,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],g=r[4],_=r[7],y=r[2],E=r[5],M=r[8],T=l[0],x=l[3],S=l[6],B=l[1],N=l[4],w=l[7],X=l[2],I=l[5],P=l[8];return u[0]=f*T+h*B+m*X,u[3]=f*x+h*N+m*I,u[6]=f*S+h*w+m*P,u[1]=p*T+g*B+_*X,u[4]=p*x+g*N+_*I,u[7]=p*S+g*w+_*P,u[2]=y*T+E*B+M*X,u[5]=y*x+E*N+M*I,u[8]=y*S+E*w+M*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*h*p-r*u*g+r*h*m+l*u*p-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=g*f-h*p,y=h*m-g*u,E=p*u-f*m,M=i*_+r*y+l*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return t[0]=_*T,t[1]=(l*p-g*r)*T,t[2]=(h*r-l*f)*T,t[3]=y*T,t[4]=(g*i-l*m)*T,t[5]=(l*u-h*i)*T,t[6]=E*T,t[7]=(r*m-p*i)*T,t[8]=(f*i-r*u)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,f,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(vd.makeScale(t,i)),this}rotate(t){return this.premultiply(vd.makeRotation(-t)),this}translate(t,i){return this.premultiply(vd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vd=new ue;function _0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function qu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sE(){const s=qu("canvas");return s.style.display="block",s}const tv={};function Fu(s){s in tv||(tv[s]=!0,console.warn(s))}function oE(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function lE(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function uE(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ev=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nv=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cE(){const s={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Be&&(l.r=da(l.r),l.g=da(l.g),l.b=da(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Be&&(l.r=Cs(l.r),l.g=Cs(l.g),l.b=Cs(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?ku:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ls]:{primaries:t,whitePoint:r,transfer:ku,toXYZ:ev,fromXYZ:nv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:ev,fromXYZ:nv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),s}const Re=cE();function da(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let hs;class fE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{hs===void 0&&(hs=qu("canvas")),hs.width=t.width,hs.height=t.height;const l=hs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=hs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=qu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=da(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(da(i[r]/255)*255):i[r]=da(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dE=0;class jh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Wo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?u.push(Sd(l[f].image)):u.push(Sd(l[f]))}else u=Sd(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Sd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hE=0;class qn extends Ps{constructor(t=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,r=Tr,l=Tr,u=Pi,f=br,h=Ai,m=ha,p=qn.DEFAULT_ANISOTROPY,g=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=Wo(),this.name="",this.source=new jh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==o0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sh:t.x=t.x-Math.floor(t.x);break;case Tr:t.x=t.x<0?0:1;break;case oh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sh:t.y=t.y-Math.floor(t.y);break;case Tr:t.y=t.y<0?0:1;break;case oh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=o0;qn.DEFAULT_ANISOTROPY=1;class en{constructor(t=0,i=0,r=0,l=1){en.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],g=m[4],_=m[8],y=m[1],E=m[5],M=m[9],T=m[2],x=m[6],S=m[10];if(Math.abs(g-y)<.01&&Math.abs(_-T)<.01&&Math.abs(M-x)<.01){if(Math.abs(g+y)<.1&&Math.abs(_+T)<.1&&Math.abs(M+x)<.1&&Math.abs(p+E+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,w=(E+1)/2,X=(S+1)/2,I=(g+y)/4,P=(_+T)/4,Z=(M+x)/4;return N>w&&N>X?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=I/r,u=P/r):w>X?w<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),r=I/l,u=Z/l):X<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(X),r=P/u,l=Z/u),this.set(r,l,u,i),this}let B=Math.sqrt((x-M)*(x-M)+(_-T)*(_-T)+(y-g)*(y-g));return Math.abs(B)<.001&&(B=1),this.x=(x-M)/B,this.y=(_-T)/B,this.z=(y-g)/B,this.w=Math.acos((p+E+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pE extends Ps{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new en(0,0,t,i),this.scissorTest=!1,this.viewport=new en(0,0,t,i);const l={width:t,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const u=new qn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new jh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends pE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class v0 extends qn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mE extends qn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,f,h){let m=r[l+0],p=r[l+1],g=r[l+2],_=r[l+3];const y=u[f+0],E=u[f+1],M=u[f+2],T=u[f+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(h===1){t[i+0]=y,t[i+1]=E,t[i+2]=M,t[i+3]=T;return}if(_!==T||m!==y||p!==E||g!==M){let x=1-h;const S=m*y+p*E+g*M+_*T,B=S>=0?1:-1,N=1-S*S;if(N>Number.EPSILON){const X=Math.sqrt(N),I=Math.atan2(X,S*B);x=Math.sin(x*I)/X,h=Math.sin(h*I)/X}const w=h*B;if(m=m*x+y*w,p=p*x+E*w,g=g*x+M*w,_=_*x+T*w,x===1-h){const X=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=X,p*=X,g*=X,_*=X}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,u,f){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],_=u[f],y=u[f+1],E=u[f+2],M=u[f+3];return t[i]=h*M+g*_+m*E-p*y,t[i+1]=m*M+g*y+p*_-h*E,t[i+2]=p*M+g*E+h*y-m*_,t[i+3]=g*M-h*_-m*y-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),_=h(u/2),y=m(r/2),E=m(l/2),M=m(u/2);switch(f){case"XYZ":this._x=y*g*_+p*E*M,this._y=p*E*_-y*g*M,this._z=p*g*M+y*E*_,this._w=p*g*_-y*E*M;break;case"YXZ":this._x=y*g*_+p*E*M,this._y=p*E*_-y*g*M,this._z=p*g*M-y*E*_,this._w=p*g*_+y*E*M;break;case"ZXY":this._x=y*g*_-p*E*M,this._y=p*E*_+y*g*M,this._z=p*g*M+y*E*_,this._w=p*g*_-y*E*M;break;case"ZYX":this._x=y*g*_-p*E*M,this._y=p*E*_+y*g*M,this._z=p*g*M-y*E*_,this._w=p*g*_+y*E*M;break;case"YZX":this._x=y*g*_+p*E*M,this._y=p*E*_+y*g*M,this._z=p*g*M-y*E*_,this._w=p*g*_-y*E*M;break;case"XZY":this._x=y*g*_-p*E*M,this._y=p*E*_-y*g*M,this._z=p*g*M+y*E*_,this._w=p*g*_+y*E*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],f=i[1],h=i[5],m=i[9],p=i[2],g=i[6],_=i[10],y=r+h+_;if(y>0){const E=.5/Math.sqrt(y+1);this._w=.25/E,this._x=(g-m)*E,this._y=(u-p)*E,this._z=(f-l)*E}else if(r>h&&r>_){const E=2*Math.sqrt(1+r-h-_);this._w=(g-m)/E,this._x=.25*E,this._y=(l+f)/E,this._z=(u+p)/E}else if(h>_){const E=2*Math.sqrt(1+h-r-_);this._w=(u-p)/E,this._x=(l+f)/E,this._y=.25*E,this._z=(m+g)/E}else{const E=2*Math.sqrt(1+_-r-h);this._w=(f-l)/E,this._x=(u+p)/E,this._y=(m+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,f=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*h+l*p-u*m,this._y=l*g+f*m+u*h-r*p,this._z=u*g+f*p+r*m-l*h,this._w=f*g-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,f=this._w;let h=f*t._w+r*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const E=1-i;return this._w=E*f+i*this._w,this._x=E*r+i*this._x,this._y=E*l+i*this._y,this._z=E*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),_=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=f*_+this._w*y,this._x=r*_+this._x*y,this._y=l*_+this._y*y,this._z=u*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(t=0,i=0,r=0){ot.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(iv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(iv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*r),g=2*(h*i-u*l),_=2*(u*r-f*i);return this.x=i+m*p+f*_-h*g,this.y=r+m*g+h*p-u*_,this.z=l+m*_+u*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*f-r*m,this.z=r*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return yd.copy(this).projectOnVector(t),this.sub(yd)}reflect(t){return this.sub(yd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yd=new ot,iv=new Yo;class jo{constructor(t=new ot(1/0,1/0,1/0),i=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ei.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ei.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ei.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=u.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Ei):Ei.fromBufferAttribute(u,f),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fu.copy(r.boundingBox)),fu.applyMatrix4(t.matrixWorld),this.union(fu)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),du.subVectors(this.max,Po),ps.subVectors(t.a,Po),ms.subVectors(t.b,Po),gs.subVectors(t.c,Po),Fa.subVectors(ms,ps),Ia.subVectors(gs,ms),pr.subVectors(ps,gs);let i=[0,-Fa.z,Fa.y,0,-Ia.z,Ia.y,0,-pr.z,pr.y,Fa.z,0,-Fa.x,Ia.z,0,-Ia.x,pr.z,0,-pr.x,-Fa.y,Fa.x,0,-Ia.y,Ia.x,0,-pr.y,pr.x,0];return!xd(i,ps,ms,gs,du)||(i=[1,0,0,0,1,0,0,0,1],!xd(i,ps,ms,gs,du))?!1:(hu.crossVectors(Fa,Ia),i=[hu.x,hu.y,hu.z],xd(i,ps,ms,gs,du))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(na),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const na=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],Ei=new ot,fu=new jo,ps=new ot,ms=new ot,gs=new ot,Fa=new ot,Ia=new ot,pr=new ot,Po=new ot,du=new ot,hu=new ot,mr=new ot;function xd(s,t,i,r,l){for(let u=0,f=s.length-3;u<=f;u+=3){mr.fromArray(s,u);const h=l.x*Math.abs(mr.x)+l.y*Math.abs(mr.y)+l.z*Math.abs(mr.z),m=t.dot(mr),p=i.dot(mr),g=r.dot(mr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const gE=new jo,zo=new ot,Ed=new ot;class Zh{constructor(t=new ot,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):gE.setFromPoints(t).getCenter(r);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const i=zo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(zo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ed.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(Ed)),this.expandByPoint(zo.copy(t.center).sub(Ed))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ia=new ot,Md=new ot,pu=new ot,Ha=new ot,Td=new ot,mu=new ot,bd=new ot;class _E{constructor(t=new ot,i=new ot(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ia)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ia.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ia.copy(this.origin).addScaledVector(this.direction,i),ia.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Md.copy(t).add(i).multiplyScalar(.5),pu.copy(i).sub(t).normalize(),Ha.copy(this.origin).sub(Md);const u=t.distanceTo(i)*.5,f=-this.direction.dot(pu),h=Ha.dot(this.direction),m=-Ha.dot(pu),p=Ha.lengthSq(),g=Math.abs(1-f*f);let _,y,E,M;if(g>0)if(_=f*m-h,y=f*h-m,M=u*g,_>=0)if(y>=-M)if(y<=M){const T=1/g;_*=T,y*=T,E=_*(_+f*y+2*h)+y*(f*_+y+2*m)+p}else y=u,_=Math.max(0,-(f*y+h)),E=-_*_+y*(y+2*m)+p;else y=-u,_=Math.max(0,-(f*y+h)),E=-_*_+y*(y+2*m)+p;else y<=-M?(_=Math.max(0,-(-f*u+h)),y=_>0?-u:Math.min(Math.max(-u,-m),u),E=-_*_+y*(y+2*m)+p):y<=M?(_=0,y=Math.min(Math.max(-u,-m),u),E=y*(y+2*m)+p):(_=Math.max(0,-(f*u+h)),y=_>0?u:Math.min(Math.max(-u,-m),u),E=-_*_+y*(y+2*m)+p);else y=f>0?-u:u,_=Math.max(0,-(f*y+h)),E=-_*_+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Md).addScaledVector(pu,y),E}intersectSphere(t,i){ia.subVectors(t.center,this.origin);const r=ia.dot(this.direction),l=ia.dot(ia)-r*r,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),g>=0?(u=(t.min.y-y.y)*g,f=(t.max.y-y.y)*g):(u=(t.max.y-y.y)*g,f=(t.min.y-y.y)*g),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-y.z)*_,m=(t.max.z-y.z)*_):(h=(t.max.z-y.z)*_,m=(t.min.z-y.z)*_),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ia)!==null}intersectTriangle(t,i,r,l,u){Td.subVectors(i,t),mu.subVectors(r,t),bd.crossVectors(Td,mu);let f=this.direction.dot(bd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ha.subVectors(this.origin,t);const m=h*this.direction.dot(mu.crossVectors(Ha,mu));if(m<0)return null;const p=h*this.direction.dot(Td.cross(Ha));if(p<0||m+p>f)return null;const g=-h*Ha.dot(bd);return g<0?null:this.at(g/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(t,i,r,l,u,f,h,m,p,g,_,y,E,M,T,x){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,h,m,p,g,_,y,E,M,T,x)}set(t,i,r,l,u,f,h,m,p,g,_,y,E,M,T,x){const S=this.elements;return S[0]=t,S[4]=i,S[8]=r,S[12]=l,S[1]=u,S[5]=f,S[9]=h,S[13]=m,S[2]=p,S[6]=g,S[10]=_,S[14]=y,S[3]=E,S[7]=M,S[11]=T,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/_s.setFromMatrixColumn(t,0).length(),u=1/_s.setFromMatrixColumn(t,1).length(),f=1/_s.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const y=f*g,E=f*_,M=h*g,T=h*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=E+M*p,i[5]=y-T*p,i[9]=-h*m,i[2]=T-y*p,i[6]=M+E*p,i[10]=f*m}else if(t.order==="YXZ"){const y=m*g,E=m*_,M=p*g,T=p*_;i[0]=y+T*h,i[4]=M*h-E,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-h,i[2]=E*h-M,i[6]=T+y*h,i[10]=f*m}else if(t.order==="ZXY"){const y=m*g,E=m*_,M=p*g,T=p*_;i[0]=y-T*h,i[4]=-f*_,i[8]=M+E*h,i[1]=E+M*h,i[5]=f*g,i[9]=T-y*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const y=f*g,E=f*_,M=h*g,T=h*_;i[0]=m*g,i[4]=M*p-E,i[8]=y*p+T,i[1]=m*_,i[5]=T*p+y,i[9]=E*p-M,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const y=f*m,E=f*p,M=h*m,T=h*p;i[0]=m*g,i[4]=T-y*_,i[8]=M*_+E,i[1]=_,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=E*_+M,i[10]=y-T*_}else if(t.order==="XZY"){const y=f*m,E=f*p,M=h*m,T=h*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=y*_+T,i[5]=f*g,i[9]=E*_-M,i[2]=M*_-E,i[6]=h*g,i[10]=T*_+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vE,t,SE)}lookAt(t,i,r){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Ga.crossVectors(r,ei),Ga.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Ga.crossVectors(r,ei)),Ga.normalize(),gu.crossVectors(ei,Ga),l[0]=Ga.x,l[4]=gu.x,l[8]=ei.x,l[1]=Ga.y,l[5]=gu.y,l[9]=ei.y,l[2]=Ga.z,l[6]=gu.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],g=r[1],_=r[5],y=r[9],E=r[13],M=r[2],T=r[6],x=r[10],S=r[14],B=r[3],N=r[7],w=r[11],X=r[15],I=l[0],P=l[4],Z=l[8],D=l[12],C=l[1],G=l[5],lt=l[9],at=l[13],ht=l[2],_t=l[6],O=l[10],K=l[14],q=l[3],yt=l[7],Tt=l[11],L=l[15];return u[0]=f*I+h*C+m*ht+p*q,u[4]=f*P+h*G+m*_t+p*yt,u[8]=f*Z+h*lt+m*O+p*Tt,u[12]=f*D+h*at+m*K+p*L,u[1]=g*I+_*C+y*ht+E*q,u[5]=g*P+_*G+y*_t+E*yt,u[9]=g*Z+_*lt+y*O+E*Tt,u[13]=g*D+_*at+y*K+E*L,u[2]=M*I+T*C+x*ht+S*q,u[6]=M*P+T*G+x*_t+S*yt,u[10]=M*Z+T*lt+x*O+S*Tt,u[14]=M*D+T*at+x*K+S*L,u[3]=B*I+N*C+w*ht+X*q,u[7]=B*P+N*G+w*_t+X*yt,u[11]=B*Z+N*lt+w*O+X*Tt,u[15]=B*D+N*at+w*K+X*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],f=t[1],h=t[5],m=t[9],p=t[13],g=t[2],_=t[6],y=t[10],E=t[14],M=t[3],T=t[7],x=t[11],S=t[15];return M*(+u*m*_-l*p*_-u*h*y+r*p*y+l*h*E-r*m*E)+T*(+i*m*E-i*p*y+u*f*y-l*f*E+l*p*g-u*m*g)+x*(+i*p*_-i*h*E-u*f*_+r*f*E+u*h*g-r*p*g)+S*(-l*h*g-i*m*_+i*h*y+l*f*_-r*f*y+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=t[9],y=t[10],E=t[11],M=t[12],T=t[13],x=t[14],S=t[15],B=_*x*p-T*y*p+T*m*E-h*x*E-_*m*S+h*y*S,N=M*y*p-g*x*p-M*m*E+f*x*E+g*m*S-f*y*S,w=g*T*p-M*_*p+M*h*E-f*T*E-g*h*S+f*_*S,X=M*_*m-g*T*m-M*h*y+f*T*y+g*h*x-f*_*x,I=i*B+r*N+l*w+u*X;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=B*P,t[1]=(T*y*u-_*x*u-T*l*E+r*x*E+_*l*S-r*y*S)*P,t[2]=(h*x*u-T*m*u+T*l*p-r*x*p-h*l*S+r*m*S)*P,t[3]=(_*m*u-h*y*u-_*l*p+r*y*p+h*l*E-r*m*E)*P,t[4]=N*P,t[5]=(g*x*u-M*y*u+M*l*E-i*x*E-g*l*S+i*y*S)*P,t[6]=(M*m*u-f*x*u-M*l*p+i*x*p+f*l*S-i*m*S)*P,t[7]=(f*y*u-g*m*u+g*l*p-i*y*p-f*l*E+i*m*E)*P,t[8]=w*P,t[9]=(M*_*u-g*T*u-M*r*E+i*T*E+g*r*S-i*_*S)*P,t[10]=(f*T*u-M*h*u+M*r*p-i*T*p-f*r*S+i*h*S)*P,t[11]=(g*h*u-f*_*u-g*r*p+i*_*p+f*r*E-i*h*E)*P,t[12]=X*P,t[13]=(g*T*l-M*_*l+M*r*y-i*T*y-g*r*x+i*_*x)*P,t[14]=(M*h*l-f*T*l-M*r*m+i*T*m+f*r*x-i*h*x)*P,t[15]=(f*_*l-g*h*l+g*r*m-i*_*m-f*r*y+i*h*y)*P,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=t.x,h=t.y,m=t.z,p=u*f,g=u*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*f,0,p*m-l*h,g*m+l*f,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,f){return this.set(1,r,u,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,f=i._y,h=i._z,m=i._w,p=u+u,g=f+f,_=h+h,y=u*p,E=u*g,M=u*_,T=f*g,x=f*_,S=h*_,B=m*p,N=m*g,w=m*_,X=r.x,I=r.y,P=r.z;return l[0]=(1-(T+S))*X,l[1]=(E+w)*X,l[2]=(M-N)*X,l[3]=0,l[4]=(E-w)*I,l[5]=(1-(y+S))*I,l[6]=(x+B)*I,l[7]=0,l[8]=(M+N)*P,l[9]=(x-B)*P,l[10]=(1-(y+T))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=_s.set(l[0],l[1],l[2]).length();const f=_s.set(l[4],l[5],l[6]).length(),h=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Mi.copy(this);const p=1/u,g=1/f,_=1/h;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=g,Mi.elements[5]*=g,Mi.elements[6]*=g,Mi.elements[8]*=_,Mi.elements[9]*=_,Mi.elements[10]*=_,i.setFromRotationMatrix(Mi),r.x=u,r.y=f,r.z=h,this}makePerspective(t,i,r,l,u,f,h=fa){const m=this.elements,p=2*u/(i-t),g=2*u/(r-l),_=(i+t)/(i-t),y=(r+l)/(r-l);let E,M;if(h===fa)E=-(f+u)/(f-u),M=-2*f*u/(f-u);else if(h===Xu)E=-f/(f-u),M=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=M,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,f,h=fa){const m=this.elements,p=1/(i-t),g=1/(r-l),_=1/(f-u),y=(i+t)*p,E=(r+l)*g;let M,T;if(h===fa)M=(f+u)*_,T=-2*_;else if(h===Xu)M=u*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-E,m[2]=0,m[6]=0,m[10]=T,m[14]=-M,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const _s=new ot,Mi=new ln,vE=new ot(0,0,0),SE=new ot(1,1,1),Ga=new ot,gu=new ot,ei=new ot,av=new ln,rv=new Yo;class pa{constructor(t=0,i=0,r=0,l=pa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],_=l[2],y=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(xe(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return av.makeRotationFromQuaternion(t),this.setFromRotationMatrix(av,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return rv.setFromEuler(this),this.setFromQuaternion(rv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pa.DEFAULT_ORDER="XYZ";class S0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yE=0;const sv=new ot,vs=new Yo,aa=new ln,_u=new ot,Bo=new ot,xE=new ot,EE=new Yo,ov=new ot(1,0,0),lv=new ot(0,1,0),uv=new ot(0,0,1),cv={type:"added"},ME={type:"removed"},Ss={type:"childadded",child:null},Ad={type:"childremoved",child:null};class ii extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ii.DEFAULT_UP.clone();const t=new ot,i=new pa,r=new Yo,l=new ot(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new ue}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=ii.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new S0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return vs.setFromAxisAngle(t,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,i){return vs.setFromAxisAngle(t,i),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(ov,t)}rotateY(t){return this.rotateOnAxis(lv,t)}rotateZ(t){return this.rotateOnAxis(uv,t)}translateOnAxis(t,i){return sv.copy(t).applyQuaternion(this.quaternion),this.position.add(sv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ov,t)}translateY(t){return this.translateOnAxis(lv,t)}translateZ(t){return this.translateOnAxis(uv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?_u.copy(t):_u.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(Bo,_u,this.up):aa.lookAt(_u,Bo,this.up),this.quaternion.setFromRotationMatrix(aa),l&&(aa.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(aa),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cv),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ME),Ad.child=t,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),aa.multiply(t.parent.matrixWorld)),t.applyMatrix4(aa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cv),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,xE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,EE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?{min:h.boundingBox.min.toArray(),max:h.boundingBox.max.toArray()}:void 0,boundingSphere:h.boundingSphere?{radius:h.boundingSphere.radius,center:h.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),y=f(t.skeletons),E=f(t.animations),M=f(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),E.length>0&&(r.animations=E),M.length>0&&(r.nodes=M)}return r.object=l,r;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ii.DEFAULT_UP=new ot(0,1,0);ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new ot,ra=new ot,Rd=new ot,sa=new ot,ys=new ot,xs=new ot,fv=new ot,Cd=new ot,wd=new ot,Dd=new ot,Ud=new en,Ld=new en,Nd=new en;class bi{constructor(t=new ot,i=new ot,r=new ot){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ti.subVectors(t,i),l.cross(Ti);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Ti.subVectors(l,i),ra.subVectors(r,i),Rd.subVectors(t,i);const f=Ti.dot(Ti),h=Ti.dot(ra),m=Ti.dot(Rd),p=ra.dot(ra),g=ra.dot(Rd),_=f*p-h*h;if(_===0)return u.set(0,0,0),null;const y=1/_,E=(p*m-h*g)*y,M=(f*g-h*m)*y;return u.set(1-E-M,M,E)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(t,i,r,l,u,f,h,m){return this.getBarycoord(t,i,r,l,sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,sa.x),m.addScaledVector(f,sa.y),m.addScaledVector(h,sa.z),m)}static getInterpolatedAttribute(t,i,r,l,u,f){return Ud.setScalar(0),Ld.setScalar(0),Nd.setScalar(0),Ud.fromBufferAttribute(t,i),Ld.fromBufferAttribute(t,r),Nd.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Ud,u.x),f.addScaledVector(Ld,u.y),f.addScaledVector(Nd,u.z),f}static isFrontFacing(t,i,r,l){return Ti.subVectors(r,i),ra.subVectors(t,i),Ti.cross(ra).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),Ti.cross(ra).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return bi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return bi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let f,h;ys.subVectors(l,r),xs.subVectors(u,r),Cd.subVectors(t,r);const m=ys.dot(Cd),p=xs.dot(Cd);if(m<=0&&p<=0)return i.copy(r);wd.subVectors(t,l);const g=ys.dot(wd),_=xs.dot(wd);if(g>=0&&_<=g)return i.copy(l);const y=m*_-g*p;if(y<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(ys,f);Dd.subVectors(t,u);const E=ys.dot(Dd),M=xs.dot(Dd);if(M>=0&&E<=M)return i.copy(u);const T=E*p-m*M;if(T<=0&&p>=0&&M<=0)return h=p/(p-M),i.copy(r).addScaledVector(xs,h);const x=g*M-E*_;if(x<=0&&_-g>=0&&E-M>=0)return fv.subVectors(u,l),h=(_-g)/(_-g+(E-M)),i.copy(l).addScaledVector(fv,h);const S=1/(x+T+y);return f=T*S,h=y*S,i.copy(r).addScaledVector(ys,f).addScaledVector(xs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},vu={h:0,s:0,l:0};function Od(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Fe{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=r,Re.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Re.workingColorSpace){if(t=rE(t,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=Od(f,u,t+1/3),this.g=Od(f,u,t),this.b=Od(f,u,t-1/3)}return Re.toWorkingColorSpace(this,l),this}setStyle(t,i=pi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=pi){const r=y0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=da(t.r),this.g=da(t.g),this.b=da(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return Re.fromWorkingColorSpace(Cn.copy(this),t),Math.round(xe(Cn.r*255,0,255))*65536+Math.round(xe(Cn.g*255,0,255))*256+Math.round(xe(Cn.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,f=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=g<=.5?_/(f+h):_/(2-f-h),f){case r:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-r)/_+2;break;case u:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Re.workingColorSpace){return Re.fromWorkingColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=pi){Re.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,r=Cn.g,l=Cn.b;return t!==pi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Va),this.setHSL(Va.h+t,Va.s+i,Va.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Va),t.getHSL(vu);const r=_d(Va.h,vu.h,i),l=_d(Va.s,vu.s,i),u=_d(Va.l,vu.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Fe;Fe.NAMES=y0;let TE=0;class ju extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=Rs,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Kd,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Q_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(r.blending=this.blending),this.side!==Ya&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Zd&&(r.blendSrc=this.blendSrc),this.blendDst!==Kd&&(r.blendDst=this.blendDst),this.blendEquation!==Er&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Q_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const h in u){const m=u[h];delete m.metadata,f.push(m)}return f}if(i){const u=l(t.textures),f=l(t.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Kh extends ju{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pa,this.combine=s0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const on=new ot,Su=new Ge;let bE=0;class Bi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=J_,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Su.fromBufferAttribute(this,i),Su.applyMatrix3(t),this.setXY(i,Su.x,Su.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(t),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(t),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(t),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.transformDirection(t),this.setXYZ(i,on.x,on.y,on.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Oo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Oo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Oo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Oo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Oo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==J_&&(t.usage=this.usage),t}}class x0 extends Bi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class E0 extends Bi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Rr extends Bi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let AE=0;const di=new ln,Pd=new ii,Es=new ot,ni=new jo,Fo=new jo,gn=new ot;class Lr extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_0(t)?E0:x0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ue().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,r){return di.makeTranslation(t,i,r),this.applyMatrix4(di),this}scale(t,i,r){return di.makeScale(t,i,r),this.applyMatrix4(di),this}lookAt(t){return Pd.lookAt(t),Pd.updateMatrix(),this.applyMatrix4(Pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Rr(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ni.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(t){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const h=i[u];Fo.setFromBufferAttribute(h),this.morphTargetsRelative?(gn.addVectors(ni.min,Fo.min),ni.expandByPoint(gn),gn.addVectors(ni.max,Fo.max),ni.expandByPoint(gn)):(ni.expandByPoint(Fo.min),ni.expandByPoint(Fo.max))}ni.getCenter(r);let l=0;for(let u=0,f=t.count;u<f;u++)gn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let u=0,f=i.length;u<f;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)gn.fromBufferAttribute(h,p),m&&(Es.fromBufferAttribute(t,p),gn.add(Es)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let Z=0;Z<r.count;Z++)h[Z]=new ot,m[Z]=new ot;const p=new ot,g=new ot,_=new ot,y=new Ge,E=new Ge,M=new Ge,T=new ot,x=new ot;function S(Z,D,C){p.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,D),_.fromBufferAttribute(r,C),y.fromBufferAttribute(u,Z),E.fromBufferAttribute(u,D),M.fromBufferAttribute(u,C),g.sub(p),_.sub(p),E.sub(y),M.sub(y);const G=1/(E.x*M.y-M.x*E.y);isFinite(G)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(_,-E.y).multiplyScalar(G),x.copy(_).multiplyScalar(E.x).addScaledVector(g,-M.x).multiplyScalar(G),h[Z].add(T),h[D].add(T),h[C].add(T),m[Z].add(x),m[D].add(x),m[C].add(x))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let Z=0,D=B.length;Z<D;++Z){const C=B[Z],G=C.start,lt=C.count;for(let at=G,ht=G+lt;at<ht;at+=3)S(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const N=new ot,w=new ot,X=new ot,I=new ot;function P(Z){X.fromBufferAttribute(l,Z),I.copy(X);const D=h[Z];N.copy(D),N.sub(X.multiplyScalar(X.dot(D))).normalize(),w.crossVectors(I,D);const G=w.dot(m[Z])<0?-1:1;f.setXYZW(Z,N.x,N.y,N.z,G)}for(let Z=0,D=B.length;Z<D;++Z){const C=B[Z],G=C.start,lt=C.count;for(let at=G,ht=G+lt;at<ht;at+=3)P(t.getX(at+0)),P(t.getX(at+1)),P(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Bi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,E=r.count;y<E;y++)r.setXYZ(y,0,0,0);const l=new ot,u=new ot,f=new ot,h=new ot,m=new ot,p=new ot,g=new ot,_=new ot;if(t)for(let y=0,E=t.count;y<E;y+=3){const M=t.getX(y+0),T=t.getX(y+1),x=t.getX(y+2);l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,x),g.subVectors(f,u),_.subVectors(l,u),g.cross(_),h.fromBufferAttribute(r,M),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,x),h.add(g),m.add(g),p.add(g),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,E=i.count;y<E;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),g.subVectors(f,u),_.subVectors(l,u),g.cross(_),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)gn.fromBufferAttribute(t,i),gn.normalize(),t.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,_=h.normalized,y=new p.constructor(m.length*g);let E=0,M=0;for(let T=0,x=m.length;T<x;T++){h.isInterleavedBufferAttribute?E=m[T]*h.data.stride+h.offset:E=m[T]*g;for(let S=0;S<g;S++)y[M++]=p[E++]}return new Bi(y,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Lr,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let g=0,_=p.length;g<_;g++){const y=p[g],E=t(y,r);m.push(E)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,y=p.length;_<y;_++){const E=p[_];g.push(E.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],_=u[p];for(let y=0,E=_.length;y<E;y++)g.push(_[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dv=new ln,gr=new _E,yu=new Zh,hv=new ot,xu=new ot,Eu=new ot,Mu=new ot,zd=new ot,Tu=new ot,pv=new ot,bu=new ot;class zi extends ii{constructor(t=new Lr,i=new Kh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){Tu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=h[m],_=u[m];g!==0&&(zd.fromBufferAttribute(_,t),f?Tu.addScaledVector(zd,g):Tu.addScaledVector(zd.sub(i),g))}i.add(Tu)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yu.copy(r.boundingSphere),yu.applyMatrix4(u),gr.copy(t.ray).recast(t.near),!(yu.containsPoint(gr.origin)===!1&&(gr.intersectSphere(yu,hv)===null||gr.origin.distanceToSquared(hv)>(t.far-t.near)**2))&&(dv.copy(u).invert(),gr.copy(t.ray).applyMatrix4(dv),!(r.boundingBox!==null&&gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,gr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,f=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,y=u.groups,E=u.drawRange;if(h!==null)if(Array.isArray(f))for(let M=0,T=y.length;M<T;M++){const x=y[M],S=f[x.materialIndex],B=Math.max(x.start,E.start),N=Math.min(h.count,Math.min(x.start+x.count,E.start+E.count));for(let w=B,X=N;w<X;w+=3){const I=h.getX(w),P=h.getX(w+1),Z=h.getX(w+2);l=Au(this,S,t,r,p,g,_,I,P,Z),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const M=Math.max(0,E.start),T=Math.min(h.count,E.start+E.count);for(let x=M,S=T;x<S;x+=3){const B=h.getX(x),N=h.getX(x+1),w=h.getX(x+2);l=Au(this,f,t,r,p,g,_,B,N,w),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let M=0,T=y.length;M<T;M++){const x=y[M],S=f[x.materialIndex],B=Math.max(x.start,E.start),N=Math.min(m.count,Math.min(x.start+x.count,E.start+E.count));for(let w=B,X=N;w<X;w+=3){const I=w,P=w+1,Z=w+2;l=Au(this,S,t,r,p,g,_,I,P,Z),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const M=Math.max(0,E.start),T=Math.min(m.count,E.start+E.count);for(let x=M,S=T;x<S;x+=3){const B=x,N=x+1,w=x+2;l=Au(this,f,t,r,p,g,_,B,N,w),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function RE(s,t,i,r,l,u,f,h){let m;if(t.side===Xn?m=r.intersectTriangle(f,u,l,!0,h):m=r.intersectTriangle(l,u,f,t.side===Ya,h),m===null)return null;bu.copy(h),bu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(bu);return p<i.near||p>i.far?null:{distance:p,point:bu.clone(),object:s}}function Au(s,t,i,r,l,u,f,h,m,p){s.getVertexPosition(h,xu),s.getVertexPosition(m,Eu),s.getVertexPosition(p,Mu);const g=RE(s,t,i,r,xu,Eu,Mu,pv);if(g){const _=new ot;bi.getBarycoord(pv,xu,Eu,Mu,_),l&&(g.uv=bi.getInterpolatedAttribute(l,h,m,p,_,new Ge)),u&&(g.uv1=bi.getInterpolatedAttribute(u,h,m,p,_,new Ge)),f&&(g.normal=bi.getInterpolatedAttribute(f,h,m,p,_,new ot),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new ot,materialIndex:0};bi.getNormal(xu,Eu,Mu,y.normal),g.face=y,g.barycoord=_}return g}class zs extends Lr{constructor(t=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const h=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],g=[],_=[];let y=0,E=0;M("z","y","x",-1,-1,r,i,t,f,u,0),M("z","y","x",1,-1,r,i,-t,f,u,1),M("x","z","y",1,1,t,r,i,l,f,2),M("x","z","y",1,-1,t,r,-i,l,f,3),M("x","y","z",1,-1,t,i,r,l,u,4),M("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Rr(p,3)),this.setAttribute("normal",new Rr(g,3)),this.setAttribute("uv",new Rr(_,2));function M(T,x,S,B,N,w,X,I,P,Z,D){const C=w/P,G=X/Z,lt=w/2,at=X/2,ht=I/2,_t=P+1,O=Z+1;let K=0,q=0;const yt=new ot;for(let Tt=0;Tt<O;Tt++){const L=Tt*G-at;for(let $=0;$<_t;$++){const St=$*C-lt;yt[T]=St*B,yt[x]=L*N,yt[S]=ht,p.push(yt.x,yt.y,yt.z),yt[T]=0,yt[x]=0,yt[S]=I>0?1:-1,g.push(yt.x,yt.y,yt.z),_.push($/P),_.push(1-Tt/Z),K+=1}}for(let Tt=0;Tt<Z;Tt++)for(let L=0;L<P;L++){const $=y+L+_t*Tt,St=y+L+_t*(Tt+1),Y=y+(L+1)+_t*(Tt+1),ft=y+(L+1)+_t*Tt;m.push($,St,ft),m.push(St,Y,ft),q+=6}h.addGroup(E,q,D),E+=q,y+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ns(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(s){const t={};for(let i=0;i<s.length;i++){const r=Ns(s[i]);for(const l in r)t[l]=r[l]}return t}function CE(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function M0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const wE={clone:Ns,merge:Nn};var DE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ja extends ju{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DE,this.fragmentShader=UE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=CE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class T0 extends ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=fa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ka=new ot,mv=new Ge,gv=new Ge;class mi extends T0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Oh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oh*2*Math.atan(Math.tan(gd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ka.x,ka.y).multiplyScalar(-t/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ka.x,ka.y).multiplyScalar(-t/ka.z)}getViewSize(t,i){return this.getViewBounds(t,mv,gv),i.subVectors(gv,mv)}setViewOffset(t,i,r,l,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(gd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ms=-90,Ts=1;class LE extends ii{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(Ms,Ts,t,i);l.layers=this.layers,this.add(l);const u=new mi(Ms,Ts,t,i);u.layers=this.layers,this.add(u);const f=new mi(Ms,Ts,t,i);f.layers=this.layers,this.add(f);const h=new mi(Ms,Ts,t,i);h.layers=this.layers,this.add(h);const m=new mi(Ms,Ts,t,i);m.layers=this.layers,this.add(m);const p=new mi(Ms,Ts,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,h,m]=i;for(const p of i)this.remove(p);if(t===fa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Xu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,h,m,p,g]=this.children,_=t.getRenderTarget(),y=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(_,y,E),t.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class b0 extends qn{constructor(t=[],i=Ds,r,l,u,f,h,m,p,g){super(t,i,r,l,u,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class NE extends Dr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new b0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Pi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new zs(5,5,5),u=new ja({name:"CubemapFromEquirect",uniforms:Ns(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:qa});u.uniforms.tEquirect.value=i;const f=new zi(l,u),h=i.minFilter;return i.minFilter===br&&(i.minFilter=Pi),new LE(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(u)}}class Ru extends ii{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OE={type:"move"};class Bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ru,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ru,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ru,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const x=i.getJointPose(T,r),S=this._getHandJoint(p,T);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=g.position.distanceTo(_.position),E=.02,M=.005;p.inputState.pinching&&y>E+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=E-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(OE)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Ru;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class PE extends ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pa,this.environmentIntensity=1,this.environmentRotation=new pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Fd=new ot,zE=new ot,BE=new ue;class yr{constructor(t=new ot(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Fd.subVectors(r,i).cross(zE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Fd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||BE.getNormalMatrix(t),l=this.coplanarPoint(Fd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Zh,Cu=new ot;class A0{constructor(t=new yr,i=new yr,r=new yr,l=new yr,u=new yr,f=new yr){this.planes=[t,i,r,l,u,f]}set(t,i,r,l,u,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=fa){const r=this.planes,l=t.elements,u=l[0],f=l[1],h=l[2],m=l[3],p=l[4],g=l[5],_=l[6],y=l[7],E=l[8],M=l[9],T=l[10],x=l[11],S=l[12],B=l[13],N=l[14],w=l[15];if(r[0].setComponents(m-u,y-p,x-E,w-S).normalize(),r[1].setComponents(m+u,y+p,x+E,w+S).normalize(),r[2].setComponents(m+f,y+g,x+M,w+B).normalize(),r[3].setComponents(m-f,y-g,x-M,w-B).normalize(),r[4].setComponents(m-h,y-_,x-T,w-N).normalize(),i===fa)r[5].setComponents(m+h,y+_,x+T,w+N).normalize();else if(i===Xu)r[5].setComponents(h,_,T,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Cu.x=l.normal.x>0?t.max.x:t.min.x,Cu.y=l.normal.y>0?t.max.y:t.min.y,Cu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Cu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class R0 extends qn{constructor(t,i,r=wr,l,u,f,h=Ri,m=Ri,p,g=ko){if(g!==ko&&g!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,f,h,m,g,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Zu extends Lr{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,_=t/h,y=i/m,E=[],M=[],T=[],x=[];for(let S=0;S<g;S++){const B=S*y-f;for(let N=0;N<p;N++){const w=N*_-u;M.push(w,-B,0),T.push(0,0,1),x.push(N/h),x.push(1-S/m)}}for(let S=0;S<m;S++)for(let B=0;B<h;B++){const N=B+p*S,w=B+p*(S+1),X=B+1+p*(S+1),I=B+1+p*S;E.push(N,w,I),E.push(w,X,I)}this.setIndex(E),this.setAttribute("position",new Rr(M,3)),this.setAttribute("normal",new Rr(T,3)),this.setAttribute("uv",new Rr(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zu(t.width,t.height,t.widthSegments,t.heightSegments)}}class FE extends ju{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class IE extends ju{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class HE extends T0{constructor(t=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,f=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class GE extends mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function _v(s,t,i,r){const l=VE(r);switch(i){case f0:return s*t;case h0:return s*t/l.components*l.byteLength;case qh:return s*t/l.components*l.byteLength;case p0:return s*t*2/l.components*l.byteLength;case Wh:return s*t*2/l.components*l.byteLength;case d0:return s*t*3/l.components*l.byteLength;case Ai:return s*t*4/l.components*l.byteLength;case Yh:return s*t*4/l.components*l.byteLength;case Nu:case Ou:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Pu:case zu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case uh:case fh:return Math.max(s,16)*Math.max(t,8)/4;case lh:case ch:return Math.max(s,8)*Math.max(t,8)/2;case dh:case hh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ph:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case mh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case _h:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case vh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case yh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case xh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Mh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Th:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case bh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ah:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Rh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ch:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Bu:case wh:case Dh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case m0:case Uh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Lh:case Nh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function VE(s){switch(s){case ha:case l0:return{byteLength:1,components:1};case Go:case u0:case qo:return{byteLength:2,components:1};case kh:case Xh:return{byteLength:2,components:4};case wr:case Vh:case ca:return{byteLength:4,components:1};case c0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function C0(){let s=null,t=!1,i=null,r=null;function l(u,f){i(u,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function kE(s){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,_=p.byteLength,y=s.createBuffer();s.bindBuffer(m,y),s.bufferData(m,p,g),h.onUploadCallback();let E;if(p instanceof Float32Array)E=s.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=s.SHORT;else if(p instanceof Uint32Array)E=s.UNSIGNED_INT;else if(p instanceof Int32Array)E=s.INT;else if(p instanceof Int8Array)E=s.BYTE;else if(p instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const g=m.array,_=m.updateRanges;if(s.bindBuffer(p,h),_.length===0)s.bufferSubData(p,0,g);else{_.sort((E,M)=>E.start-M.start);let y=0;for(let E=1;E<_.length;E++){const M=_[y],T=_[E];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++y,_[y]=T)}_.length=y+1;for(let E=0,M=_.length;E<M;E++){const T=_[E];s.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(s.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:f}}var XE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,WE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$E=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_M=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yM="gl_FragColor = linearToOutputTexel( gl_FragColor );",xM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$M=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_T=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ST=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ET=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,AT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,UT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,KT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,JT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ib=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ab=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ob=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,db=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Eb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:XE,alphahash_pars_fragment:qE,alphamap_fragment:WE,alphamap_pars_fragment:YE,alphatest_fragment:jE,alphatest_pars_fragment:ZE,aomap_fragment:KE,aomap_pars_fragment:QE,batching_pars_vertex:JE,batching_vertex:$E,begin_vertex:tM,beginnormal_vertex:eM,bsdfs:nM,iridescence_fragment:iM,bumpmap_pars_fragment:aM,clipping_planes_fragment:rM,clipping_planes_pars_fragment:sM,clipping_planes_pars_vertex:oM,clipping_planes_vertex:lM,color_fragment:uM,color_pars_fragment:cM,color_pars_vertex:fM,color_vertex:dM,common:hM,cube_uv_reflection_fragment:pM,defaultnormal_vertex:mM,displacementmap_pars_vertex:gM,displacementmap_vertex:_M,emissivemap_fragment:vM,emissivemap_pars_fragment:SM,colorspace_fragment:yM,colorspace_pars_fragment:xM,envmap_fragment:EM,envmap_common_pars_fragment:MM,envmap_pars_fragment:TM,envmap_pars_vertex:bM,envmap_physical_pars_fragment:zM,envmap_vertex:AM,fog_vertex:RM,fog_pars_vertex:CM,fog_fragment:wM,fog_pars_fragment:DM,gradientmap_pars_fragment:UM,lightmap_pars_fragment:LM,lights_lambert_fragment:NM,lights_lambert_pars_fragment:OM,lights_pars_begin:PM,lights_toon_fragment:BM,lights_toon_pars_fragment:FM,lights_phong_fragment:IM,lights_phong_pars_fragment:HM,lights_physical_fragment:GM,lights_physical_pars_fragment:VM,lights_fragment_begin:kM,lights_fragment_maps:XM,lights_fragment_end:qM,logdepthbuf_fragment:WM,logdepthbuf_pars_fragment:YM,logdepthbuf_pars_vertex:jM,logdepthbuf_vertex:ZM,map_fragment:KM,map_pars_fragment:QM,map_particle_fragment:JM,map_particle_pars_fragment:$M,metalnessmap_fragment:tT,metalnessmap_pars_fragment:eT,morphinstance_vertex:nT,morphcolor_vertex:iT,morphnormal_vertex:aT,morphtarget_pars_vertex:rT,morphtarget_vertex:sT,normal_fragment_begin:oT,normal_fragment_maps:lT,normal_pars_fragment:uT,normal_pars_vertex:cT,normal_vertex:fT,normalmap_pars_fragment:dT,clearcoat_normal_fragment_begin:hT,clearcoat_normal_fragment_maps:pT,clearcoat_pars_fragment:mT,iridescence_pars_fragment:gT,opaque_fragment:_T,packing:vT,premultiplied_alpha_fragment:ST,project_vertex:yT,dithering_fragment:xT,dithering_pars_fragment:ET,roughnessmap_fragment:MT,roughnessmap_pars_fragment:TT,shadowmap_pars_fragment:bT,shadowmap_pars_vertex:AT,shadowmap_vertex:RT,shadowmask_pars_fragment:CT,skinbase_vertex:wT,skinning_pars_vertex:DT,skinning_vertex:UT,skinnormal_vertex:LT,specularmap_fragment:NT,specularmap_pars_fragment:OT,tonemapping_fragment:PT,tonemapping_pars_fragment:zT,transmission_fragment:BT,transmission_pars_fragment:FT,uv_pars_fragment:IT,uv_pars_vertex:HT,uv_vertex:GT,worldpos_vertex:VT,background_vert:kT,background_frag:XT,backgroundCube_vert:qT,backgroundCube_frag:WT,cube_vert:YT,cube_frag:jT,depth_vert:ZT,depth_frag:KT,distanceRGBA_vert:QT,distanceRGBA_frag:JT,equirect_vert:$T,equirect_frag:tb,linedashed_vert:eb,linedashed_frag:nb,meshbasic_vert:ib,meshbasic_frag:ab,meshlambert_vert:rb,meshlambert_frag:sb,meshmatcap_vert:ob,meshmatcap_frag:lb,meshnormal_vert:ub,meshnormal_frag:cb,meshphong_vert:fb,meshphong_frag:db,meshphysical_vert:hb,meshphysical_frag:pb,meshtoon_vert:mb,meshtoon_frag:gb,points_vert:_b,points_frag:vb,shadow_vert:Sb,shadow_frag:yb,sprite_vert:xb,sprite_frag:Eb},Lt={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Oi={basic:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Nn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Nn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Nn([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Nn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Nn([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Nn([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Nn([Lt.common,Lt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Nn([Lt.lights,Lt.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Oi.physical={uniforms:Nn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const wu={r:0,b:0,g:0},vr=new pa,Mb=new ln;function Tb(s,t,i,r,l,u,f){const h=new Fe(0);let m=u===!0?0:1,p,g,_=null,y=0,E=null;function M(N){let w=N.isScene===!0?N.background:null;return w&&w.isTexture&&(w=(N.backgroundBlurriness>0?i:t).get(w)),w}function T(N){let w=!1;const X=M(N);X===null?S(h,m):X&&X.isColor&&(S(X,1),w=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,f):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(N,w){const X=M(w);X&&(X.isCubeTexture||X.mapping===Yu)?(g===void 0&&(g=new zi(new zs(1,1,1),new ja({name:"BackgroundCubeMaterial",uniforms:Ns(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,P,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),vr.copy(w.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),g.material.uniforms.envMap.value=X,g.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Mb.makeRotationFromEuler(vr)),g.material.toneMapped=Re.getTransfer(X.colorSpace)!==Be,(_!==X||y!==X.version||E!==s.toneMapping)&&(g.material.needsUpdate=!0,_=X,y=X.version,E=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):X&&X.isTexture&&(p===void 0&&(p=new zi(new Zu(2,2),new ja({name:"BackgroundMaterial",uniforms:Ns(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=X,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Re.getTransfer(X.colorSpace)!==Be,X.matrixAutoUpdate===!0&&X.updateMatrix(),p.material.uniforms.uvTransform.value.copy(X.matrix),(_!==X||y!==X.version||E!==s.toneMapping)&&(p.material.needsUpdate=!0,_=X,y=X.version,E=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function S(N,w){N.getRGB(wu,M0(s)),r.buffers.color.setClear(wu.r,wu.g,wu.b,w,f)}function B(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,w=1){h.set(N),m=w,S(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,S(h,m)},render:T,addToRenderList:x,dispose:B}}function bb(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=y(null);let u=l,f=!1;function h(C,G,lt,at,ht){let _t=!1;const O=_(at,lt,G);u!==O&&(u=O,p(u.object)),_t=E(C,at,lt,ht),_t&&M(C,at,lt,ht),ht!==null&&t.update(ht,s.ELEMENT_ARRAY_BUFFER),(_t||f)&&(f=!1,w(C,G,lt,at),ht!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function _(C,G,lt){const at=lt.wireframe===!0;let ht=r[C.id];ht===void 0&&(ht={},r[C.id]=ht);let _t=ht[G.id];_t===void 0&&(_t={},ht[G.id]=_t);let O=_t[at];return O===void 0&&(O=y(m()),_t[at]=O),O}function y(C){const G=[],lt=[],at=[];for(let ht=0;ht<i;ht++)G[ht]=0,lt[ht]=0,at[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:lt,attributeDivisors:at,object:C,attributes:{},index:null}}function E(C,G,lt,at){const ht=u.attributes,_t=G.attributes;let O=0;const K=lt.getAttributes();for(const q in K)if(K[q].location>=0){const Tt=ht[q];let L=_t[q];if(L===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),Tt===void 0||Tt.attribute!==L||L&&Tt.data!==L.data)return!0;O++}return u.attributesNum!==O||u.index!==at}function M(C,G,lt,at){const ht={},_t=G.attributes;let O=0;const K=lt.getAttributes();for(const q in K)if(K[q].location>=0){let Tt=_t[q];Tt===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(Tt=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(Tt=C.instanceColor));const L={};L.attribute=Tt,Tt&&Tt.data&&(L.data=Tt.data),ht[q]=L,O++}u.attributes=ht,u.attributesNum=O,u.index=at}function T(){const C=u.newAttributes;for(let G=0,lt=C.length;G<lt;G++)C[G]=0}function x(C){S(C,0)}function S(C,G){const lt=u.newAttributes,at=u.enabledAttributes,ht=u.attributeDivisors;lt[C]=1,at[C]===0&&(s.enableVertexAttribArray(C),at[C]=1),ht[C]!==G&&(s.vertexAttribDivisor(C,G),ht[C]=G)}function B(){const C=u.newAttributes,G=u.enabledAttributes;for(let lt=0,at=G.length;lt<at;lt++)G[lt]!==C[lt]&&(s.disableVertexAttribArray(lt),G[lt]=0)}function N(C,G,lt,at,ht,_t,O){O===!0?s.vertexAttribIPointer(C,G,lt,ht,_t):s.vertexAttribPointer(C,G,lt,at,ht,_t)}function w(C,G,lt,at){T();const ht=at.attributes,_t=lt.getAttributes(),O=G.defaultAttributeValues;for(const K in _t){const q=_t[K];if(q.location>=0){let yt=ht[K];if(yt===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor)),yt!==void 0){const Tt=yt.normalized,L=yt.itemSize,$=t.get(yt);if($===void 0)continue;const St=$.buffer,Y=$.type,ft=$.bytesPerElement,Mt=Y===s.INT||Y===s.UNSIGNED_INT||yt.gpuType===Vh;if(yt.isInterleavedBufferAttribute){const xt=yt.data,zt=xt.stride,Yt=yt.offset;if(xt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<q.locationSize;Zt++)S(q.location+Zt,xt.meshPerAttribute);C.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Zt=0;Zt<q.locationSize;Zt++)x(q.location+Zt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let Zt=0;Zt<q.locationSize;Zt++)N(q.location+Zt,L/q.locationSize,Y,Tt,zt*ft,(Yt+L/q.locationSize*Zt)*ft,Mt)}else{if(yt.isInstancedBufferAttribute){for(let xt=0;xt<q.locationSize;xt++)S(q.location+xt,yt.meshPerAttribute);C.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let xt=0;xt<q.locationSize;xt++)x(q.location+xt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let xt=0;xt<q.locationSize;xt++)N(q.location+xt,L/q.locationSize,Y,Tt,L*ft,L/q.locationSize*xt*ft,Mt)}}else if(O!==void 0){const Tt=O[K];if(Tt!==void 0)switch(Tt.length){case 2:s.vertexAttrib2fv(q.location,Tt);break;case 3:s.vertexAttrib3fv(q.location,Tt);break;case 4:s.vertexAttrib4fv(q.location,Tt);break;default:s.vertexAttrib1fv(q.location,Tt)}}}}B()}function X(){Z();for(const C in r){const G=r[C];for(const lt in G){const at=G[lt];for(const ht in at)g(at[ht].object),delete at[ht];delete G[lt]}delete r[C]}}function I(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const lt in G){const at=G[lt];for(const ht in at)g(at[ht].object),delete at[ht];delete G[lt]}delete r[C.id]}function P(C){for(const G in r){const lt=r[G];if(lt[C.id]===void 0)continue;const at=lt[C.id];for(const ht in at)g(at[ht].object),delete at[ht];delete lt[C.id]}}function Z(){D(),f=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:D,dispose:X,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:T,enableAttribute:x,disableUnusedAttributes:B}}function Ab(s,t,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,_){_!==0&&(s.drawArraysInstanced(r,p,g,_),i.update(g,r,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let E=0;for(let M=0;M<_;M++)E+=g[M];i.update(E,r,1)}function m(p,g,_,y){if(_===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let M=0;M<p.length;M++)f(p[M],g[M],y[M]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,g,0,y,0,_);let M=0;for(let T=0;T<_;T++)M+=g[T]*y[T];i.update(M,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Rb(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(P){return!(P!==Ai&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const Z=P===qo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ha&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ca&&!Z)}function m(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),E=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),B=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),X=M>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:y,maxTextures:E,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:B,maxVaryings:N,maxFragmentUniforms:w,vertexTextures:X,maxSamples:I}}function Cb(s){const t=this;let i=null,r=0,l=!1,u=!1;const f=new yr,h=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const E=_.length!==0||y||r!==0||l;return l=y,r=_.length,E},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,y){i=g(_,y,0)},this.setState=function(_,y,E){const M=_.clippingPlanes,T=_.clipIntersection,x=_.clipShadows,S=s.get(_);if(!l||M===null||M.length===0||u&&!x)u?g(null):p();else{const B=u?0:r,N=B*4;let w=S.clippingState||null;m.value=w,w=g(M,y,N,E);for(let X=0;X!==N;++X)w[X]=i[X];S.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,y,E,M){const T=_!==null?_.length:0;let x=null;if(T!==0){if(x=m.value,M!==!0||x===null){const S=E+T*4,B=y.matrixWorldInverse;h.getNormalMatrix(B),(x===null||x.length<S)&&(x=new Float32Array(S));for(let N=0,w=E;N!==T;++N,w+=4)f.copy(_[N]).applyMatrix4(B,h),f.normal.toArray(x,w),x[w+3]=f.constant}m.value=x,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,x}}function wb(s){let t=new WeakMap;function i(f,h){return h===ah?f.mapping=Ds:h===rh&&(f.mapping=Us),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===ah||h===rh)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new NE(m.height);return p.fromEquirectangularTexture(s,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const As=4,vv=[.125,.215,.35,.446,.526,.582],Mr=20,Id=new HE,Sv=new Fe;let Hd=null,Gd=0,Vd=0,kd=!1;const xr=(1+Math.sqrt(5))/2,bs=1/xr,yv=[new ot(-xr,bs,0),new ot(xr,bs,0),new ot(-bs,0,xr),new ot(bs,0,xr),new ot(0,xr,-bs),new ot(0,xr,bs),new ot(-1,1,-1),new ot(1,1,-1),new ot(-1,1,1),new ot(1,1,1)],Db=new ot;class xv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:f=256,position:h=Db}=u;Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Vd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Hd,Gd,Vd),this._renderer.xr.enabled=kd,t.scissorTest=!1,Du(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ds||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Vd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:qo,format:Ai,colorSpace:Ls,depthBuffer:!1},l=Ev(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ev(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ub(u)),this._blurMaterial=Lb(u,t,i)}return l}_compileMaterial(t){const i=new zi(this._lodPlanes[0],t);this._renderer.compile(i,Id)}_sceneToCubeUV(t,i,r,l,u){const m=new mi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,E=_.toneMapping;_.getClearColor(Sv),_.toneMapping=Wa,_.autoClear=!1;const M=new Kh({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),T=new zi(new zs,M);let x=!1;const S=t.background;S?S.isColor&&(M.color.copy(S),t.background=null,x=!0):(M.color.copy(Sv),x=!0);for(let B=0;B<6;B++){const N=B%3;N===0?(m.up.set(0,p[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[B],u.y,u.z)):N===1?(m.up.set(0,0,p[B]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[B],u.z)):(m.up.set(0,p[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[B]));const w=this._cubeSize;Du(l,N*w,B>2?w:0,w,w),_.setRenderTarget(l),x&&_.render(T,m),_.render(t,m)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=E,_.autoClear=y,t.background=S}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ds||t.mapping===Us;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mv());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new zi(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;Du(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Id)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=yv[(l-u-1)%yv.length];this._blur(t,u-1,u,f,h)}i.autoClear=r}_blur(t,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",u),this._halfBlur(f,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new zi(this._lodPlanes[l],p),y=p.uniforms,E=this._sizeLods[r]-1,M=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Mr-1),T=u/M,x=isFinite(u)?1+Math.floor(g*T):Mr;x>Mr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Mr}`);const S=[];let B=0;for(let P=0;P<Mr;++P){const Z=P/T,D=Math.exp(-Z*Z/2);S.push(D),P===0?B+=D:P<x&&(B+=2*D)}for(let P=0;P<S.length;P++)S[P]=S[P]/B;y.envMap.value=t.texture,y.samples.value=x,y.weights.value=S,y.latitudinal.value=f==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:N}=this;y.dTheta.value=M,y.mipInt.value=N-r;const w=this._sizeLods[l],X=3*w*(l>N-As?l-N+As:0),I=4*(this._cubeSize-w);Du(i,X,I,3*w,2*w),m.setRenderTarget(i),m.render(_,Id)}}function Ub(s){const t=[],i=[],r=[];let l=s;const u=s-As+1+vv.length;for(let f=0;f<u;f++){const h=Math.pow(2,l);i.push(h);let m=1/h;f>s-As?m=vv[f-s+As-1]:f===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,_=1+p,y=[g,g,_,g,_,_,g,g,_,_,g,_],E=6,M=6,T=3,x=2,S=1,B=new Float32Array(T*M*E),N=new Float32Array(x*M*E),w=new Float32Array(S*M*E);for(let I=0;I<E;I++){const P=I%3*2/3-1,Z=I>2?0:-1,D=[P,Z,0,P+2/3,Z,0,P+2/3,Z+1,0,P,Z,0,P+2/3,Z+1,0,P,Z+1,0];B.set(D,T*M*I),N.set(y,x*M*I);const C=[I,I,I,I,I,I];w.set(C,S*M*I)}const X=new Lr;X.setAttribute("position",new Bi(B,T)),X.setAttribute("uv",new Bi(N,x)),X.setAttribute("faceIndex",new Bi(w,S)),t.push(X),l>As&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function Ev(s,t,i){const r=new Dr(s,t,i);return r.texture.mapping=Yu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Du(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function Lb(s,t,i){const r=new Float32Array(Mr),l=new ot(0,1,0);return new ja({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function Mv(){return new ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function Tv(){return new ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function Qh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nb(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===ah||m===rh,g=m===Ds||m===Us;if(p||g){let _=t.get(h);const y=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new xv(s)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const E=h.image;return p&&E&&E.height>0||g&&E&&l(E)?(i===null&&(i=new xv(s)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Ob(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Fu("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function Pb(s,t,i,r){const l={},u=new WeakMap;function f(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const M in y.attributes)t.remove(y.attributes[M]);y.removeEventListener("dispose",f),delete l[y.id];const E=u.get(y);E&&(t.remove(E),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(_,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function m(_){const y=_.attributes;for(const E in y)t.update(y[E],s.ARRAY_BUFFER)}function p(_){const y=[],E=_.index,M=_.attributes.position;let T=0;if(E!==null){const B=E.array;T=E.version;for(let N=0,w=B.length;N<w;N+=3){const X=B[N+0],I=B[N+1],P=B[N+2];y.push(X,I,I,P,P,X)}}else if(M!==void 0){const B=M.array;T=M.version;for(let N=0,w=B.length/3-1;N<w;N+=3){const X=N+0,I=N+1,P=N+2;y.push(X,I,I,P,P,X)}}else return;const x=new(_0(y)?E0:x0)(y,1);x.version=T;const S=u.get(_);S&&t.remove(S),u.set(_,x)}function g(_){const y=u.get(_);if(y){const E=_.index;E!==null&&y.version<E.version&&p(_)}else p(_);return u.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function zb(s,t,i){let r;function l(y){r=y}let u,f;function h(y){u=y.type,f=y.bytesPerElement}function m(y,E){s.drawElements(r,E,u,y*f),i.update(E,r,1)}function p(y,E,M){M!==0&&(s.drawElementsInstanced(r,E,u,y*f,M),i.update(E,r,M))}function g(y,E,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,u,y,0,M);let x=0;for(let S=0;S<M;S++)x+=E[S];i.update(x,r,1)}function _(y,E,M,T){if(M===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<y.length;S++)p(y[S]/f,E[S],T[S]);else{x.multiDrawElementsInstancedWEBGL(r,E,0,u,y,0,T,0,M);let S=0;for(let B=0;B<M;B++)S+=E[B]*T[B];i.update(S,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function Bb(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(u/3);break;case s.LINES:i.lines+=h*(u/2);break;case s.LINE_STRIP:i.lines+=h*(u-1);break;case s.LINE_LOOP:i.lines+=h*u;break;case s.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Fb(s,t,i){const r=new WeakMap,l=new en;function u(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let y=r.get(h);if(y===void 0||y.count!==_){let C=function(){Z.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var E=C;y!==void 0&&y.texture.dispose();const M=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],B=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let w=0;M===!0&&(w=1),T===!0&&(w=2),x===!0&&(w=3);let X=h.attributes.position.count*w,I=1;X>t.maxTextureSize&&(I=Math.ceil(X/t.maxTextureSize),X=t.maxTextureSize);const P=new Float32Array(X*I*4*_),Z=new v0(P,X,I,_);Z.type=ca,Z.needsUpdate=!0;const D=w*4;for(let G=0;G<_;G++){const lt=S[G],at=B[G],ht=N[G],_t=X*I*4*G;for(let O=0;O<lt.count;O++){const K=O*D;M===!0&&(l.fromBufferAttribute(lt,O),P[_t+K+0]=l.x,P[_t+K+1]=l.y,P[_t+K+2]=l.z,P[_t+K+3]=0),T===!0&&(l.fromBufferAttribute(at,O),P[_t+K+4]=l.x,P[_t+K+5]=l.y,P[_t+K+6]=l.z,P[_t+K+7]=0),x===!0&&(l.fromBufferAttribute(ht,O),P[_t+K+8]=l.x,P[_t+K+9]=l.y,P[_t+K+10]=l.z,P[_t+K+11]=ht.itemSize===4?l.w:1)}}y={count:_,texture:Z,size:new Ge(X,I)},r.set(h,y),h.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let M=0;for(let x=0;x<p.length;x++)M+=p[x];const T=h.morphTargetsRelative?1:1-M;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:u}}function Ib(s,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return _}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:f}}const w0=new qn,bv=new R0(1,1),D0=new v0,U0=new mE,L0=new b0,Av=[],Rv=[],Cv=new Float32Array(16),wv=new Float32Array(9),Dv=new Float32Array(4);function Bs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=Av[l];if(u===void 0&&(u=new Float32Array(l),Av[l]=u),t!==0){r.toArray(u,0);for(let f=1,h=0;f!==t;++f)h+=i,s[f].toArray(u,h)}return u}function dn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function hn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Ku(s,t){let i=Rv[t];i===void 0&&(i=new Int32Array(t),Rv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function Hb(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function Gb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2fv(this.addr,t),hn(i,t)}}function Vb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(dn(i,t))return;s.uniform3fv(this.addr,t),hn(i,t)}}function kb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4fv(this.addr,t),hn(i,t)}}function Xb(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(dn(i,r))return;Dv.set(r),s.uniformMatrix2fv(this.addr,!1,Dv),hn(i,r)}}function qb(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(dn(i,r))return;wv.set(r),s.uniformMatrix3fv(this.addr,!1,wv),hn(i,r)}}function Wb(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(dn(i,r))return;Cv.set(r),s.uniformMatrix4fv(this.addr,!1,Cv),hn(i,r)}}function Yb(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function jb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2iv(this.addr,t),hn(i,t)}}function Zb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;s.uniform3iv(this.addr,t),hn(i,t)}}function Kb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4iv(this.addr,t),hn(i,t)}}function Qb(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function Jb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2uiv(this.addr,t),hn(i,t)}}function $b(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;s.uniform3uiv(this.addr,t),hn(i,t)}}function tA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4uiv(this.addr,t),hn(i,t)}}function eA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(bv.compareFunction=g0,u=bv):u=w0,i.setTexture2D(t||u,l)}function nA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||U0,l)}function iA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||L0,l)}function aA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||D0,l)}function rA(s){switch(s){case 5126:return Hb;case 35664:return Gb;case 35665:return Vb;case 35666:return kb;case 35674:return Xb;case 35675:return qb;case 35676:return Wb;case 5124:case 35670:return Yb;case 35667:case 35671:return jb;case 35668:case 35672:return Zb;case 35669:case 35673:return Kb;case 5125:return Qb;case 36294:return Jb;case 36295:return $b;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return eA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return aA}}function sA(s,t){s.uniform1fv(this.addr,t)}function oA(s,t){const i=Bs(t,this.size,2);s.uniform2fv(this.addr,i)}function lA(s,t){const i=Bs(t,this.size,3);s.uniform3fv(this.addr,i)}function uA(s,t){const i=Bs(t,this.size,4);s.uniform4fv(this.addr,i)}function cA(s,t){const i=Bs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function fA(s,t){const i=Bs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function dA(s,t){const i=Bs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function hA(s,t){s.uniform1iv(this.addr,t)}function pA(s,t){s.uniform2iv(this.addr,t)}function mA(s,t){s.uniform3iv(this.addr,t)}function gA(s,t){s.uniform4iv(this.addr,t)}function _A(s,t){s.uniform1uiv(this.addr,t)}function vA(s,t){s.uniform2uiv(this.addr,t)}function SA(s,t){s.uniform3uiv(this.addr,t)}function yA(s,t){s.uniform4uiv(this.addr,t)}function xA(s,t,i){const r=this.cache,l=t.length,u=Ku(i,l);dn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||w0,u[f])}function EA(s,t,i){const r=this.cache,l=t.length,u=Ku(i,l);dn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||U0,u[f])}function MA(s,t,i){const r=this.cache,l=t.length,u=Ku(i,l);dn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||L0,u[f])}function TA(s,t,i){const r=this.cache,l=t.length,u=Ku(i,l);dn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||D0,u[f])}function bA(s){switch(s){case 5126:return sA;case 35664:return oA;case 35665:return lA;case 35666:return uA;case 35674:return cA;case 35675:return fA;case 35676:return dA;case 5124:case 35670:return hA;case 35667:case 35671:return pA;case 35668:case 35672:return mA;case 35669:case 35673:return gA;case 5125:return _A;case 36294:return vA;case 36295:return SA;case 36296:return yA;case 35678:case 36198:case 36298:case 36306:case 35682:return xA;case 35679:case 36299:case 36307:return EA;case 35680:case 36300:case 36308:case 36293:return MA;case 36289:case 36303:case 36311:case 36292:return TA}}class AA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=rA(i.type)}}class RA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=bA(i.type)}}class CA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Xd=/(\w+)(\])?(\[|\.)?/g;function Uv(s,t){s.seq.push(t),s.map[t.id]=t}function wA(s,t,i){const r=s.name,l=r.length;for(Xd.lastIndex=0;;){const u=Xd.exec(r),f=Xd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){Uv(i,p===void 0?new AA(h,s,t):new RA(h,s,t));break}else{let _=i.map[h];_===void 0&&(_=new CA(h),Uv(i,_)),i=_}}}class Iu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),f=t.getUniformLocation(i,u.name);wA(u,f,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,f=i.length;u!==f;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function Lv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const DA=37297;let UA=0;function LA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=l;f<u;f++){const h=f+1;r.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const Nv=new ue;function NA(s){Re._getMatrix(Nv,Re.workingColorSpace,s);const t=`mat3( ${Nv.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(s)){case ku:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ov(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+LA(s.getShaderSource(t),f)}else return l}function OA(s,t){const i=NA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function PA(s,t){let i;switch(t){case Hx:i="Linear";break;case Gx:i="Reinhard";break;case Vx:i="Cineon";break;case kx:i="ACESFilmic";break;case qx:i="AgX";break;case Wx:i="Neutral";break;case Xx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uu=new ot;function zA(){Re.getLuminanceCoefficients(Uu);const s=Uu.x.toFixed(4),t=Uu.y.toFixed(4),i=Uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function FA(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function IA(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),f=u.name;let h=1;u.type===s.FLOAT_MAT2&&(h=2),u.type===s.FLOAT_MAT3&&(h=3),u.type===s.FLOAT_MAT4&&(h=4),i[f]={type:u.type,location:s.getAttribLocation(t,f),locationSize:h}}return i}function Ho(s){return s!==""}function Pv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const HA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(s){return s.replace(HA,VA)}const GA=new Map;function VA(s,t){let i=ce[t];if(i===void 0){const r=GA.get(t);if(r!==void 0)i=ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Ph(i)}const kA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bv(s){return s.replace(kA,XA)}function XA(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Fv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qA(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===r0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Sx?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===oa&&(t="SHADOWMAP_TYPE_VSM"),t}function WA(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ds:case Us:t="ENVMAP_TYPE_CUBE";break;case Yu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function YA(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Us:t="ENVMAP_MODE_REFRACTION";break}return t}function jA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case s0:t="ENVMAP_BLENDING_MULTIPLY";break;case Fx:t="ENVMAP_BLENDING_MIX";break;case Ix:t="ENVMAP_BLENDING_ADD";break}return t}function ZA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function KA(s,t,i,r){const l=s.getContext(),u=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=qA(i),p=WA(i),g=YA(i),_=jA(i),y=ZA(i),E=BA(i),M=FA(u),T=l.createProgram();let x,S,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Ho).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Ho).join(`
`),S.length>0&&(S+=`
`)):(x=[Fv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),S=[Fv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wa?"#define TONE_MAPPING":"",i.toneMapping!==Wa?ce.tonemapping_pars_fragment:"",i.toneMapping!==Wa?PA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,OA("linearToOutputTexel",i.outputColorSpace),zA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),f=Ph(f),f=Pv(f,i),f=zv(f,i),h=Ph(h),h=Pv(h,i),h=zv(h,i),f=Bv(f),h=Bv(h),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,x=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",i.glslVersion===$_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===$_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=B+x+f,w=B+S+h,X=Lv(l,l.VERTEX_SHADER,N),I=Lv(l,l.FRAGMENT_SHADER,w);l.attachShader(T,X),l.attachShader(T,I),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function P(G){if(s.debug.checkShaderErrors){const lt=l.getProgramInfoLog(T).trim(),at=l.getShaderInfoLog(X).trim(),ht=l.getShaderInfoLog(I).trim();let _t=!0,O=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(_t=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,X,I);else{const K=Ov(l,X,"vertex"),q=Ov(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+lt+`
`+K+`
`+q)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(at===""||ht==="")&&(O=!1);O&&(G.diagnostics={runnable:_t,programLog:lt,vertexShader:{log:at,prefix:x},fragmentShader:{log:ht,prefix:S}})}l.deleteShader(X),l.deleteShader(I),Z=new Iu(l,T),D=IA(l,T)}let Z;this.getUniforms=function(){return Z===void 0&&P(this),Z};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(T,DA)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=UA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=X,this.fragmentShader=I,this}let QA=0;class JA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new $A(t),i.set(t,r)),r}}class $A{constructor(t){this.id=QA++,this.code=t,this.usedTimes=0}}function t1(s,t,i,r,l,u,f){const h=new S0,m=new JA,p=new Set,g=[],_=l.logarithmicDepthBuffer,y=l.vertexTextures;let E=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return p.add(D),D===0?"uv":`uv${D}`}function x(D,C,G,lt,at){const ht=lt.fog,_t=at.geometry,O=D.isMeshStandardMaterial?lt.environment:null,K=(D.isMeshStandardMaterial?i:t).get(D.envMap||O),q=K&&K.mapping===Yu?K.image.height:null,yt=M[D.type];D.precision!==null&&(E=l.getMaxPrecision(D.precision),E!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",E,"instead."));const Tt=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,L=Tt!==void 0?Tt.length:0;let $=0;_t.morphAttributes.position!==void 0&&($=1),_t.morphAttributes.normal!==void 0&&($=2),_t.morphAttributes.color!==void 0&&($=3);let St,Y,ft,Mt;if(yt){const Me=Oi[yt];St=Me.vertexShader,Y=Me.fragmentShader}else St=D.vertexShader,Y=D.fragmentShader,m.update(D),ft=m.getVertexShaderID(D),Mt=m.getFragmentShaderID(D);const xt=s.getRenderTarget(),zt=s.state.buffers.depth.getReversed(),Yt=at.isInstancedMesh===!0,Zt=at.isBatchedMesh===!0,Ve=!!D.map,Ie=!!D.matcap,fe=!!K,F=!!D.aoMap,Tn=!!D.lightMap,de=!!D.bumpMap,me=!!D.normalMap,kt=!!D.displacementMap,we=!!D.emissiveMap,Vt=!!D.metalnessMap,U=!!D.roughnessMap,A=D.anisotropy>0,et=D.clearcoat>0,dt=D.dispersion>0,Et=D.iridescence>0,mt=D.sheen>0,Ht=D.transmission>0,Ct=A&&!!D.anisotropyMap,Kt=et&&!!D.clearcoatMap,Jt=et&&!!D.clearcoatNormalMap,At=et&&!!D.clearcoatRoughnessMap,Bt=Et&&!!D.iridescenceMap,jt=Et&&!!D.iridescenceThicknessMap,Gt=mt&&!!D.sheenColorMap,Ot=mt&&!!D.sheenRoughnessMap,te=!!D.specularMap,se=!!D.specularColorMap,Le=!!D.specularIntensityMap,k=Ht&&!!D.transmissionMap,wt=Ht&&!!D.thicknessMap,ut=!!D.gradientMap,vt=!!D.alphaMap,Rt=D.alphaTest>0,Dt=!!D.alphaHash,ne=!!D.extensions;let Ye=Wa;D.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(Ye=s.toneMapping);const un={shaderID:yt,shaderType:D.type,shaderName:D.name,vertexShader:St,fragmentShader:Y,defines:D.defines,customVertexShaderID:ft,customFragmentShaderID:Mt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:E,batching:Zt,batchingColor:Zt&&at._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&at.instanceColor!==null,instancingMorph:Yt&&at.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:xt===null?s.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Ls,alphaToCoverage:!!D.alphaToCoverage,map:Ve,matcap:Ie,envMap:fe,envMapMode:fe&&K.mapping,envMapCubeUVHeight:q,aoMap:F,lightMap:Tn,bumpMap:de,normalMap:me,displacementMap:y&&kt,emissiveMap:we,normalMapObjectSpace:me&&D.normalMapType===Qx,normalMapTangentSpace:me&&D.normalMapType===Kx,metalnessMap:Vt,roughnessMap:U,anisotropy:A,anisotropyMap:Ct,clearcoat:et,clearcoatMap:Kt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:At,dispersion:dt,iridescence:Et,iridescenceMap:Bt,iridescenceThicknessMap:jt,sheen:mt,sheenColorMap:Gt,sheenRoughnessMap:Ot,specularMap:te,specularColorMap:se,specularIntensityMap:Le,transmission:Ht,transmissionMap:k,thicknessMap:wt,gradientMap:ut,opaque:D.transparent===!1&&D.blending===Rs&&D.alphaToCoverage===!1,alphaMap:vt,alphaTest:Rt,alphaHash:Dt,combine:D.combine,mapUv:Ve&&T(D.map.channel),aoMapUv:F&&T(D.aoMap.channel),lightMapUv:Tn&&T(D.lightMap.channel),bumpMapUv:de&&T(D.bumpMap.channel),normalMapUv:me&&T(D.normalMap.channel),displacementMapUv:kt&&T(D.displacementMap.channel),emissiveMapUv:we&&T(D.emissiveMap.channel),metalnessMapUv:Vt&&T(D.metalnessMap.channel),roughnessMapUv:U&&T(D.roughnessMap.channel),anisotropyMapUv:Ct&&T(D.anisotropyMap.channel),clearcoatMapUv:Kt&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&T(D.sheenRoughnessMap.channel),specularMapUv:te&&T(D.specularMap.channel),specularColorMapUv:se&&T(D.specularColorMap.channel),specularIntensityMapUv:Le&&T(D.specularIntensityMap.channel),transmissionMapUv:k&&T(D.transmissionMap.channel),thicknessMapUv:wt&&T(D.thicknessMap.channel),alphaMapUv:vt&&T(D.alphaMap.channel),vertexTangents:!!_t.attributes.tangent&&(me||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!_t.attributes.uv&&(Ve||vt),fog:!!ht,useFog:D.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:zt,skinning:at.isSkinnedMesh===!0,morphTargets:_t.morphAttributes.position!==void 0,morphNormals:_t.morphAttributes.normal!==void 0,morphColors:_t.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:$,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Ve&&D.map.isVideoTexture===!0&&Re.getTransfer(D.map.colorSpace)===Be,decodeVideoTextureEmissive:we&&D.emissiveMap.isVideoTexture===!0&&Re.getTransfer(D.emissiveMap.colorSpace)===Be,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ua,flipSided:D.side===Xn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ne&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&D.extensions.multiDraw===!0||Zt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return un.vertexUv1s=p.has(1),un.vertexUv2s=p.has(2),un.vertexUv3s=p.has(3),p.clear(),un}function S(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)C.push(G),C.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(B(C,D),N(C,D),C.push(s.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function B(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function N(D,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),D.push(h.mask)}function w(D){const C=M[D.type];let G;if(C){const lt=Oi[C];G=wE.clone(lt.uniforms)}else G=D.uniforms;return G}function X(D,C){let G;for(let lt=0,at=g.length;lt<at;lt++){const ht=g[lt];if(ht.cacheKey===C){G=ht,++G.usedTimes;break}}return G===void 0&&(G=new KA(s,C,D,u),g.push(G)),G}function I(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function P(D){m.remove(D)}function Z(){m.dispose()}return{getParameters:x,getProgramCacheKey:S,getUniforms:w,acquireProgram:X,releaseProgram:I,releaseShaderCache:P,programs:g,dispose:Z}}function e1(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function n1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Iv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Hv(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function f(_,y,E,M,T,x){let S=s[t];return S===void 0?(S={id:_.id,object:_,geometry:y,material:E,groupOrder:M,renderOrder:_.renderOrder,z:T,group:x},s[t]=S):(S.id=_.id,S.object=_,S.geometry=y,S.material=E,S.groupOrder=M,S.renderOrder=_.renderOrder,S.z=T,S.group=x),t++,S}function h(_,y,E,M,T,x){const S=f(_,y,E,M,T,x);E.transmission>0?r.push(S):E.transparent===!0?l.push(S):i.push(S)}function m(_,y,E,M,T,x){const S=f(_,y,E,M,T,x);E.transmission>0?r.unshift(S):E.transparent===!0?l.unshift(S):i.unshift(S)}function p(_,y){i.length>1&&i.sort(_||n1),r.length>1&&r.sort(y||Iv),l.length>1&&l.sort(y||Iv)}function g(){for(let _=t,y=s.length;_<y;_++){const E=s[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:g,sort:p}}function i1(){let s=new WeakMap;function t(r,l){const u=s.get(r);let f;return u===void 0?(f=new Hv,s.set(r,[f])):l>=u.length?(f=new Hv,u.push(f)):f=u[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function a1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ot,color:new Fe};break;case"SpotLight":i={position:new ot,direction:new ot,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ot,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ot,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":i={color:new Fe,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return s[t.id]=i,i}}}function r1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let s1=0;function o1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function l1(s){const t=new a1,i=r1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ot);const l=new ot,u=new ln,f=new ln;function h(p){let g=0,_=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let E=0,M=0,T=0,x=0,S=0,B=0,N=0,w=0,X=0,I=0,P=0;p.sort(o1);for(let D=0,C=p.length;D<C;D++){const G=p[D],lt=G.color,at=G.intensity,ht=G.distance,_t=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=lt.r*at,_+=lt.g*at,y+=lt.b*at;else if(G.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(G.sh.coefficients[O],at);P++}else if(G.isDirectionalLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const K=G.shadow,q=i.get(G);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.directionalShadow[E]=q,r.directionalShadowMap[E]=_t,r.directionalShadowMatrix[E]=G.shadow.matrix,B++}r.directional[E]=O,E++}else if(G.isSpotLight){const O=t.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(lt).multiplyScalar(at),O.distance=ht,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,r.spot[T]=O;const K=G.shadow;if(G.map&&(r.spotLightMap[X]=G.map,X++,K.updateMatrices(G),G.castShadow&&I++),r.spotLightMatrix[T]=K.matrix,G.castShadow){const q=i.get(G);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.spotShadow[T]=q,r.spotShadowMap[T]=_t,w++}T++}else if(G.isRectAreaLight){const O=t.get(G);O.color.copy(lt).multiplyScalar(at),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),r.rectArea[x]=O,x++}else if(G.isPointLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const K=G.shadow,q=i.get(G);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,r.pointShadow[M]=q,r.pointShadowMap[M]=_t,r.pointShadowMatrix[M]=G.shadow.matrix,N++}r.point[M]=O,M++}else if(G.isHemisphereLight){const O=t.get(G);O.skyColor.copy(G.color).multiplyScalar(at),O.groundColor.copy(G.groundColor).multiplyScalar(at),r.hemi[S]=O,S++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=y;const Z=r.hash;(Z.directionalLength!==E||Z.pointLength!==M||Z.spotLength!==T||Z.rectAreaLength!==x||Z.hemiLength!==S||Z.numDirectionalShadows!==B||Z.numPointShadows!==N||Z.numSpotShadows!==w||Z.numSpotMaps!==X||Z.numLightProbes!==P)&&(r.directional.length=E,r.spot.length=T,r.rectArea.length=x,r.point.length=M,r.hemi.length=S,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=w+X-I,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=P,Z.directionalLength=E,Z.pointLength=M,Z.spotLength=T,Z.rectAreaLength=x,Z.hemiLength=S,Z.numDirectionalShadows=B,Z.numPointShadows=N,Z.numSpotShadows=w,Z.numSpotMaps=X,Z.numLightProbes=P,r.version=s1++)}function m(p,g){let _=0,y=0,E=0,M=0,T=0;const x=g.matrixWorldInverse;for(let S=0,B=p.length;S<B;S++){const N=p[S];if(N.isDirectionalLight){const w=r.directional[_];w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(x),_++}else if(N.isSpotLight){const w=r.spot[E];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(x),E++}else if(N.isRectAreaLight){const w=r.rectArea[M];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(x),f.identity(),u.copy(N.matrixWorld),u.premultiply(x),f.extractRotation(u),w.halfWidth.set(N.width*.5,0,0),w.halfHeight.set(0,N.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),M++}else if(N.isPointLight){const w=r.point[y];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(x),y++}else if(N.isHemisphereLight){const w=r.hemi[T];w.direction.setFromMatrixPosition(N.matrixWorld),w.direction.transformDirection(x),T++}}}return{setup:h,setupView:m,state:r}}function Gv(s){const t=new l1(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function f(g){r.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:f}}function u1(s){let t=new WeakMap;function i(l,u=0){const f=t.get(l);let h;return f===void 0?(h=new Gv(s),t.set(l,[h])):u>=f.length?(h=new Gv(s),f.push(h)):h=f[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const c1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function d1(s,t,i){let r=new A0;const l=new Ge,u=new Ge,f=new en,h=new FE({depthPacking:Zx}),m=new IE,p={},g=i.maxTextureSize,_={[Ya]:Xn,[Xn]:Ya,[ua]:ua},y=new ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:c1,fragmentShader:f1}),E=y.clone();E.defines.HORIZONTAL_PASS=1;const M=new Lr;M.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new zi(M,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=r0;let S=this.type;this.render=function(I,P,Z){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const D=s.getRenderTarget(),C=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),lt=s.state;lt.setBlending(qa),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const at=S!==oa&&this.type===oa,ht=S===oa&&this.type!==oa;for(let _t=0,O=I.length;_t<O;_t++){const K=I[_t],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const yt=q.getFrameExtents();if(l.multiply(yt),u.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/yt.x),l.x=u.x*yt.x,q.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/yt.y),l.y=u.y*yt.y,q.mapSize.y=u.y)),q.map===null||at===!0||ht===!0){const L=this.type!==oa?{minFilter:Ri,magFilter:Ri}:{};q.map!==null&&q.map.dispose(),q.map=new Dr(l.x,l.y,L),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const Tt=q.getViewportCount();for(let L=0;L<Tt;L++){const $=q.getViewport(L);f.set(u.x*$.x,u.y*$.y,u.x*$.z,u.y*$.w),lt.viewport(f),q.updateMatrices(K,L),r=q.getFrustum(),w(P,Z,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===oa&&B(q,Z),q.needsUpdate=!1}S=this.type,x.needsUpdate=!1,s.setRenderTarget(D,C,G)};function B(I,P){const Z=t.update(T);y.defines.VSM_SAMPLES!==I.blurSamples&&(y.defines.VSM_SAMPLES=I.blurSamples,E.defines.VSM_SAMPLES=I.blurSamples,y.needsUpdate=!0,E.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Dr(l.x,l.y)),y.uniforms.shadow_pass.value=I.map.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(P,null,Z,y,T,null),E.uniforms.shadow_pass.value=I.mapPass.texture,E.uniforms.resolution.value=I.mapSize,E.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(P,null,Z,E,T,null)}function N(I,P,Z,D){let C=null;const G=Z.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)C=G;else if(C=Z.isPointLight===!0?m:h,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const lt=C.uuid,at=P.uuid;let ht=p[lt];ht===void 0&&(ht={},p[lt]=ht);let _t=ht[at];_t===void 0&&(_t=C.clone(),ht[at]=_t,P.addEventListener("dispose",X)),C=_t}if(C.visible=P.visible,C.wireframe=P.wireframe,D===oa?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:_[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,Z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const lt=s.properties.get(C);lt.light=Z}return C}function w(I,P,Z,D,C){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===oa)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,I.matrixWorld);const at=t.update(I),ht=I.material;if(Array.isArray(ht)){const _t=at.groups;for(let O=0,K=_t.length;O<K;O++){const q=_t[O],yt=ht[q.materialIndex];if(yt&&yt.visible){const Tt=N(I,yt,D,C);I.onBeforeShadow(s,I,P,Z,at,Tt,q),s.renderBufferDirect(Z,null,at,Tt,I,q),I.onAfterShadow(s,I,P,Z,at,Tt,q)}}}else if(ht.visible){const _t=N(I,ht,D,C);I.onBeforeShadow(s,I,P,Z,at,_t,null),s.renderBufferDirect(Z,null,at,_t,I,null),I.onAfterShadow(s,I,P,Z,at,_t,null)}}const lt=I.children;for(let at=0,ht=lt.length;at<ht;at++)w(lt[at],P,Z,D,C)}function X(I){I.target.removeEventListener("dispose",X);for(const Z in p){const D=p[Z],C=I.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const h1={[Qd]:Jd,[$d]:nh,[th]:ih,[ws]:eh,[Jd]:Qd,[nh]:$d,[ih]:th,[eh]:ws};function p1(s,t){function i(){let k=!1;const wt=new en;let ut=null;const vt=new en(0,0,0,0);return{setMask:function(Rt){ut!==Rt&&!k&&(s.colorMask(Rt,Rt,Rt,Rt),ut=Rt)},setLocked:function(Rt){k=Rt},setClear:function(Rt,Dt,ne,Ye,un){un===!0&&(Rt*=Ye,Dt*=Ye,ne*=Ye),wt.set(Rt,Dt,ne,Ye),vt.equals(wt)===!1&&(s.clearColor(Rt,Dt,ne,Ye),vt.copy(wt))},reset:function(){k=!1,ut=null,vt.set(-1,0,0,0)}}}function r(){let k=!1,wt=!1,ut=null,vt=null,Rt=null;return{setReversed:function(Dt){if(wt!==Dt){const ne=t.get("EXT_clip_control");Dt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),wt=Dt;const Ye=Rt;Rt=null,this.setClear(Ye)}},getReversed:function(){return wt},setTest:function(Dt){Dt?xt(s.DEPTH_TEST):zt(s.DEPTH_TEST)},setMask:function(Dt){ut!==Dt&&!k&&(s.depthMask(Dt),ut=Dt)},setFunc:function(Dt){if(wt&&(Dt=h1[Dt]),vt!==Dt){switch(Dt){case Qd:s.depthFunc(s.NEVER);break;case Jd:s.depthFunc(s.ALWAYS);break;case $d:s.depthFunc(s.LESS);break;case ws:s.depthFunc(s.LEQUAL);break;case th:s.depthFunc(s.EQUAL);break;case eh:s.depthFunc(s.GEQUAL);break;case nh:s.depthFunc(s.GREATER);break;case ih:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}vt=Dt}},setLocked:function(Dt){k=Dt},setClear:function(Dt){Rt!==Dt&&(wt&&(Dt=1-Dt),s.clearDepth(Dt),Rt=Dt)},reset:function(){k=!1,ut=null,vt=null,Rt=null,wt=!1}}}function l(){let k=!1,wt=null,ut=null,vt=null,Rt=null,Dt=null,ne=null,Ye=null,un=null;return{setTest:function(Me){k||(Me?xt(s.STENCIL_TEST):zt(s.STENCIL_TEST))},setMask:function(Me){wt!==Me&&!k&&(s.stencilMask(Me),wt=Me)},setFunc:function(Me,_n,gi){(ut!==Me||vt!==_n||Rt!==gi)&&(s.stencilFunc(Me,_n,gi),ut=Me,vt=_n,Rt=gi)},setOp:function(Me,_n,gi){(Dt!==Me||ne!==_n||Ye!==gi)&&(s.stencilOp(Me,_n,gi),Dt=Me,ne=_n,Ye=gi)},setLocked:function(Me){k=Me},setClear:function(Me){un!==Me&&(s.clearStencil(Me),un=Me)},reset:function(){k=!1,wt=null,ut=null,vt=null,Rt=null,Dt=null,ne=null,Ye=null,un=null}}}const u=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},_={},y=new WeakMap,E=[],M=null,T=!1,x=null,S=null,B=null,N=null,w=null,X=null,I=null,P=new Fe(0,0,0),Z=0,D=!1,C=null,G=null,lt=null,at=null,ht=null;const _t=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,K=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),O=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),O=K>=2);let yt=null,Tt={};const L=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),St=new en().fromArray(L),Y=new en().fromArray($);function ft(k,wt,ut,vt){const Rt=new Uint8Array(4),Dt=s.createTexture();s.bindTexture(k,Dt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ne=0;ne<ut;ne++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(wt,0,s.RGBA,1,1,vt,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(wt+ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return Dt}const Mt={};Mt[s.TEXTURE_2D]=ft(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=ft(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=ft(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=ft(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),xt(s.DEPTH_TEST),f.setFunc(ws),de(!1),me(Y_),xt(s.CULL_FACE),F(qa);function xt(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function zt(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function Yt(k,wt){return _[k]!==wt?(s.bindFramebuffer(k,wt),_[k]=wt,k===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=wt),k===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=wt),!0):!1}function Zt(k,wt){let ut=E,vt=!1;if(k){ut=y.get(wt),ut===void 0&&(ut=[],y.set(wt,ut));const Rt=k.textures;if(ut.length!==Rt.length||ut[0]!==s.COLOR_ATTACHMENT0){for(let Dt=0,ne=Rt.length;Dt<ne;Dt++)ut[Dt]=s.COLOR_ATTACHMENT0+Dt;ut.length=Rt.length,vt=!0}}else ut[0]!==s.BACK&&(ut[0]=s.BACK,vt=!0);vt&&s.drawBuffers(ut)}function Ve(k){return M!==k?(s.useProgram(k),M=k,!0):!1}const Ie={[Er]:s.FUNC_ADD,[xx]:s.FUNC_SUBTRACT,[Ex]:s.FUNC_REVERSE_SUBTRACT};Ie[Mx]=s.MIN,Ie[Tx]=s.MAX;const fe={[bx]:s.ZERO,[Ax]:s.ONE,[Rx]:s.SRC_COLOR,[Zd]:s.SRC_ALPHA,[Nx]:s.SRC_ALPHA_SATURATE,[Ux]:s.DST_COLOR,[wx]:s.DST_ALPHA,[Cx]:s.ONE_MINUS_SRC_COLOR,[Kd]:s.ONE_MINUS_SRC_ALPHA,[Lx]:s.ONE_MINUS_DST_COLOR,[Dx]:s.ONE_MINUS_DST_ALPHA,[Ox]:s.CONSTANT_COLOR,[Px]:s.ONE_MINUS_CONSTANT_COLOR,[zx]:s.CONSTANT_ALPHA,[Bx]:s.ONE_MINUS_CONSTANT_ALPHA};function F(k,wt,ut,vt,Rt,Dt,ne,Ye,un,Me){if(k===qa){T===!0&&(zt(s.BLEND),T=!1);return}if(T===!1&&(xt(s.BLEND),T=!0),k!==yx){if(k!==x||Me!==D){if((S!==Er||w!==Er)&&(s.blendEquation(s.FUNC_ADD),S=Er,w=Er),Me)switch(k){case Rs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case j_:s.blendFunc(s.ONE,s.ONE);break;case Z_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case K_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case j_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Z_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case K_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}B=null,N=null,X=null,I=null,P.set(0,0,0),Z=0,x=k,D=Me}return}Rt=Rt||wt,Dt=Dt||ut,ne=ne||vt,(wt!==S||Rt!==w)&&(s.blendEquationSeparate(Ie[wt],Ie[Rt]),S=wt,w=Rt),(ut!==B||vt!==N||Dt!==X||ne!==I)&&(s.blendFuncSeparate(fe[ut],fe[vt],fe[Dt],fe[ne]),B=ut,N=vt,X=Dt,I=ne),(Ye.equals(P)===!1||un!==Z)&&(s.blendColor(Ye.r,Ye.g,Ye.b,un),P.copy(Ye),Z=un),x=k,D=!1}function Tn(k,wt){k.side===ua?zt(s.CULL_FACE):xt(s.CULL_FACE);let ut=k.side===Xn;wt&&(ut=!ut),de(ut),k.blending===Rs&&k.transparent===!1?F(qa):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),u.setMask(k.colorWrite);const vt=k.stencilWrite;h.setTest(vt),vt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),we(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?xt(s.SAMPLE_ALPHA_TO_COVERAGE):zt(s.SAMPLE_ALPHA_TO_COVERAGE)}function de(k){C!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),C=k)}function me(k){k!==_x?(xt(s.CULL_FACE),k!==G&&(k===Y_?s.cullFace(s.BACK):k===vx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):zt(s.CULL_FACE),G=k}function kt(k){k!==lt&&(O&&s.lineWidth(k),lt=k)}function we(k,wt,ut){k?(xt(s.POLYGON_OFFSET_FILL),(at!==wt||ht!==ut)&&(s.polygonOffset(wt,ut),at=wt,ht=ut)):zt(s.POLYGON_OFFSET_FILL)}function Vt(k){k?xt(s.SCISSOR_TEST):zt(s.SCISSOR_TEST)}function U(k){k===void 0&&(k=s.TEXTURE0+_t-1),yt!==k&&(s.activeTexture(k),yt=k)}function A(k,wt,ut){ut===void 0&&(yt===null?ut=s.TEXTURE0+_t-1:ut=yt);let vt=Tt[ut];vt===void 0&&(vt={type:void 0,texture:void 0},Tt[ut]=vt),(vt.type!==k||vt.texture!==wt)&&(yt!==ut&&(s.activeTexture(ut),yt=ut),s.bindTexture(k,wt||Mt[k]),vt.type=k,vt.texture=wt)}function et(){const k=Tt[yt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function dt(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Kt(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Jt(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(k){St.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function Ot(k){Y.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Y.copy(k))}function te(k,wt){let ut=p.get(wt);ut===void 0&&(ut=new WeakMap,p.set(wt,ut));let vt=ut.get(k);vt===void 0&&(vt=s.getUniformBlockIndex(wt,k.name),ut.set(k,vt))}function se(k,wt){const vt=p.get(wt).get(k);m.get(wt)!==vt&&(s.uniformBlockBinding(wt,vt,k.__bindingPointIndex),m.set(wt,vt))}function Le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},yt=null,Tt={},_={},y=new WeakMap,E=[],M=null,T=!1,x=null,S=null,B=null,N=null,w=null,X=null,I=null,P=new Fe(0,0,0),Z=0,D=!1,C=null,G=null,lt=null,at=null,ht=null,St.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:xt,disable:zt,bindFramebuffer:Yt,drawBuffers:Zt,useProgram:Ve,setBlending:F,setMaterial:Tn,setFlipSided:de,setCullFace:me,setLineWidth:kt,setPolygonOffset:we,setScissorTest:Vt,activeTexture:U,bindTexture:A,unbindTexture:et,compressedTexImage2D:dt,compressedTexImage3D:Et,texImage2D:Bt,texImage3D:jt,updateUBOMapping:te,uniformBlockBinding:se,texStorage2D:Jt,texStorage3D:At,texSubImage2D:mt,texSubImage3D:Ht,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Kt,scissor:Gt,viewport:Ot,reset:Le}}function m1(s,t,i,r,l,u,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ge,g=new WeakMap;let _;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,A){return E?new OffscreenCanvas(U,A):qu("canvas")}function T(U,A,et){let dt=1;const Et=Vt(U);if((Et.width>et||Et.height>et)&&(dt=et/Math.max(Et.width,Et.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const mt=Math.floor(dt*Et.width),Ht=Math.floor(dt*Et.height);_===void 0&&(_=M(mt,Ht));const Ct=A?M(mt,Ht):_;return Ct.width=mt,Ct.height=Ht,Ct.getContext("2d").drawImage(U,0,0,mt,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+mt+"x"+Ht+")."),Ct}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),U;return U}function x(U){return U.generateMipmaps}function S(U){s.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(U,A,et,dt,Et=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let mt=A;if(A===s.RED&&(et===s.FLOAT&&(mt=s.R32F),et===s.HALF_FLOAT&&(mt=s.R16F),et===s.UNSIGNED_BYTE&&(mt=s.R8)),A===s.RED_INTEGER&&(et===s.UNSIGNED_BYTE&&(mt=s.R8UI),et===s.UNSIGNED_SHORT&&(mt=s.R16UI),et===s.UNSIGNED_INT&&(mt=s.R32UI),et===s.BYTE&&(mt=s.R8I),et===s.SHORT&&(mt=s.R16I),et===s.INT&&(mt=s.R32I)),A===s.RG&&(et===s.FLOAT&&(mt=s.RG32F),et===s.HALF_FLOAT&&(mt=s.RG16F),et===s.UNSIGNED_BYTE&&(mt=s.RG8)),A===s.RG_INTEGER&&(et===s.UNSIGNED_BYTE&&(mt=s.RG8UI),et===s.UNSIGNED_SHORT&&(mt=s.RG16UI),et===s.UNSIGNED_INT&&(mt=s.RG32UI),et===s.BYTE&&(mt=s.RG8I),et===s.SHORT&&(mt=s.RG16I),et===s.INT&&(mt=s.RG32I)),A===s.RGB_INTEGER&&(et===s.UNSIGNED_BYTE&&(mt=s.RGB8UI),et===s.UNSIGNED_SHORT&&(mt=s.RGB16UI),et===s.UNSIGNED_INT&&(mt=s.RGB32UI),et===s.BYTE&&(mt=s.RGB8I),et===s.SHORT&&(mt=s.RGB16I),et===s.INT&&(mt=s.RGB32I)),A===s.RGBA_INTEGER&&(et===s.UNSIGNED_BYTE&&(mt=s.RGBA8UI),et===s.UNSIGNED_SHORT&&(mt=s.RGBA16UI),et===s.UNSIGNED_INT&&(mt=s.RGBA32UI),et===s.BYTE&&(mt=s.RGBA8I),et===s.SHORT&&(mt=s.RGBA16I),et===s.INT&&(mt=s.RGBA32I)),A===s.RGB&&et===s.UNSIGNED_INT_5_9_9_9_REV&&(mt=s.RGB9_E5),A===s.RGBA){const Ht=Et?ku:Re.getTransfer(dt);et===s.FLOAT&&(mt=s.RGBA32F),et===s.HALF_FLOAT&&(mt=s.RGBA16F),et===s.UNSIGNED_BYTE&&(mt=Ht===Be?s.SRGB8_ALPHA8:s.RGBA8),et===s.UNSIGNED_SHORT_4_4_4_4&&(mt=s.RGBA4),et===s.UNSIGNED_SHORT_5_5_5_1&&(mt=s.RGB5_A1)}return(mt===s.R16F||mt===s.R32F||mt===s.RG16F||mt===s.RG32F||mt===s.RGBA16F||mt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function w(U,A){let et;return U?A===null||A===wr||A===Vo?et=s.DEPTH24_STENCIL8:A===ca?et=s.DEPTH32F_STENCIL8:A===Go&&(et=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===wr||A===Vo?et=s.DEPTH_COMPONENT24:A===ca?et=s.DEPTH_COMPONENT32F:A===Go&&(et=s.DEPTH_COMPONENT16),et}function X(U,A){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ri&&U.minFilter!==Pi?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function I(U){const A=U.target;A.removeEventListener("dispose",I),Z(A),A.isVideoTexture&&g.delete(A)}function P(U){const A=U.target;A.removeEventListener("dispose",P),C(A)}function Z(U){const A=r.get(U);if(A.__webglInit===void 0)return;const et=U.source,dt=y.get(et);if(dt){const Et=dt[A.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&D(U),Object.keys(dt).length===0&&y.delete(et)}r.remove(U)}function D(U){const A=r.get(U);s.deleteTexture(A.__webglTexture);const et=U.source,dt=y.get(et);delete dt[A.__cacheKey],f.memory.textures--}function C(U){const A=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(A.__webglFramebuffer[dt]))for(let Et=0;Et<A.__webglFramebuffer[dt].length;Et++)s.deleteFramebuffer(A.__webglFramebuffer[dt][Et]);else s.deleteFramebuffer(A.__webglFramebuffer[dt]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[dt])}else{if(Array.isArray(A.__webglFramebuffer))for(let dt=0;dt<A.__webglFramebuffer.length;dt++)s.deleteFramebuffer(A.__webglFramebuffer[dt]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let dt=0;dt<A.__webglColorRenderbuffer.length;dt++)A.__webglColorRenderbuffer[dt]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[dt]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const et=U.textures;for(let dt=0,Et=et.length;dt<Et;dt++){const mt=r.get(et[dt]);mt.__webglTexture&&(s.deleteTexture(mt.__webglTexture),f.memory.textures--),r.remove(et[dt])}r.remove(U)}let G=0;function lt(){G=0}function at(){const U=G;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),G+=1,U}function ht(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function _t(U,A){const et=r.get(U);if(U.isVideoTexture&&kt(U),U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){const dt=U.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(et,U,A);return}}i.bindTexture(s.TEXTURE_2D,et.__webglTexture,s.TEXTURE0+A)}function O(U,A){const et=r.get(U);if(U.version>0&&et.__version!==U.version){Y(et,U,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,et.__webglTexture,s.TEXTURE0+A)}function K(U,A){const et=r.get(U);if(U.version>0&&et.__version!==U.version){Y(et,U,A);return}i.bindTexture(s.TEXTURE_3D,et.__webglTexture,s.TEXTURE0+A)}function q(U,A){const et=r.get(U);if(U.version>0&&et.__version!==U.version){ft(et,U,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture,s.TEXTURE0+A)}const yt={[sh]:s.REPEAT,[Tr]:s.CLAMP_TO_EDGE,[oh]:s.MIRRORED_REPEAT},Tt={[Ri]:s.NEAREST,[Yx]:s.NEAREST_MIPMAP_NEAREST,[cu]:s.NEAREST_MIPMAP_LINEAR,[Pi]:s.LINEAR,[md]:s.LINEAR_MIPMAP_NEAREST,[br]:s.LINEAR_MIPMAP_LINEAR},L={[Jx]:s.NEVER,[aE]:s.ALWAYS,[$x]:s.LESS,[g0]:s.LEQUAL,[tE]:s.EQUAL,[iE]:s.GEQUAL,[eE]:s.GREATER,[nE]:s.NOTEQUAL};function $(U,A){if(A.type===ca&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Pi||A.magFilter===md||A.magFilter===cu||A.magFilter===br||A.minFilter===Pi||A.minFilter===md||A.minFilter===cu||A.minFilter===br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,yt[A.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,yt[A.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,yt[A.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,Tt[A.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,Tt[A.minFilter]),A.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,L[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ri||A.minFilter!==cu&&A.minFilter!==br||A.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");s.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function St(U,A){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",I));const dt=A.source;let Et=y.get(dt);Et===void 0&&(Et={},y.set(dt,Et));const mt=ht(A);if(mt!==U.__cacheKey){Et[mt]===void 0&&(Et[mt]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,et=!0),Et[mt].usedTimes++;const Ht=Et[U.__cacheKey];Ht!==void 0&&(Et[U.__cacheKey].usedTimes--,Ht.usedTimes===0&&D(A)),U.__cacheKey=mt,U.__webglTexture=Et[mt].texture}return et}function Y(U,A,et){let dt=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(dt=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(dt=s.TEXTURE_3D);const Et=St(U,A),mt=A.source;i.bindTexture(dt,U.__webglTexture,s.TEXTURE0+et);const Ht=r.get(mt);if(mt.version!==Ht.__version||Et===!0){i.activeTexture(s.TEXTURE0+et);const Ct=Re.getPrimaries(Re.workingColorSpace),Kt=A.colorSpace===Xa?null:Re.getPrimaries(A.colorSpace),Jt=A.colorSpace===Xa||Ct===Kt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let At=T(A.image,!1,l.maxTextureSize);At=we(A,At);const Bt=u.convert(A.format,A.colorSpace),jt=u.convert(A.type);let Gt=N(A.internalFormat,Bt,jt,A.colorSpace,A.isVideoTexture);$(dt,A);let Ot;const te=A.mipmaps,se=A.isVideoTexture!==!0,Le=Ht.__version===void 0||Et===!0,k=mt.dataReady,wt=X(A,At);if(A.isDepthTexture)Gt=w(A.format===Xo,A.type),Le&&(se?i.texStorage2D(s.TEXTURE_2D,1,Gt,At.width,At.height):i.texImage2D(s.TEXTURE_2D,0,Gt,At.width,At.height,0,Bt,jt,null));else if(A.isDataTexture)if(te.length>0){se&&Le&&i.texStorage2D(s.TEXTURE_2D,wt,Gt,te[0].width,te[0].height);for(let ut=0,vt=te.length;ut<vt;ut++)Ot=te[ut],se?k&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Ot.width,Ot.height,Bt,jt,Ot.data):i.texImage2D(s.TEXTURE_2D,ut,Gt,Ot.width,Ot.height,0,Bt,jt,Ot.data);A.generateMipmaps=!1}else se?(Le&&i.texStorage2D(s.TEXTURE_2D,wt,Gt,At.width,At.height),k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,At.width,At.height,Bt,jt,At.data)):i.texImage2D(s.TEXTURE_2D,0,Gt,At.width,At.height,0,Bt,jt,At.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){se&&Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Gt,te[0].width,te[0].height,At.depth);for(let ut=0,vt=te.length;ut<vt;ut++)if(Ot=te[ut],A.format!==Ai)if(Bt!==null)if(se){if(k)if(A.layerUpdates.size>0){const Rt=_v(Ot.width,Ot.height,A.format,A.type);for(const Dt of A.layerUpdates){const ne=Ot.data.subarray(Dt*Rt/Ot.data.BYTES_PER_ELEMENT,(Dt+1)*Rt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,Dt,Ot.width,Ot.height,1,Bt,ne)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Ot.width,Ot.height,At.depth,Bt,Ot.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,Gt,Ot.width,Ot.height,At.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?k&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Ot.width,Ot.height,At.depth,Bt,jt,Ot.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ut,Gt,Ot.width,Ot.height,At.depth,0,Bt,jt,Ot.data)}else{se&&Le&&i.texStorage2D(s.TEXTURE_2D,wt,Gt,te[0].width,te[0].height);for(let ut=0,vt=te.length;ut<vt;ut++)Ot=te[ut],A.format!==Ai?Bt!==null?se?k&&i.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,Ot.width,Ot.height,Bt,Ot.data):i.compressedTexImage2D(s.TEXTURE_2D,ut,Gt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?k&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Ot.width,Ot.height,Bt,jt,Ot.data):i.texImage2D(s.TEXTURE_2D,ut,Gt,Ot.width,Ot.height,0,Bt,jt,Ot.data)}else if(A.isDataArrayTexture)if(se){if(Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Gt,At.width,At.height,At.depth),k)if(A.layerUpdates.size>0){const ut=_v(At.width,At.height,A.format,A.type);for(const vt of A.layerUpdates){const Rt=At.data.subarray(vt*ut/At.data.BYTES_PER_ELEMENT,(vt+1)*ut/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,vt,At.width,At.height,1,Bt,jt,Rt)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Bt,jt,At.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Gt,At.width,At.height,At.depth,0,Bt,jt,At.data);else if(A.isData3DTexture)se?(Le&&i.texStorage3D(s.TEXTURE_3D,wt,Gt,At.width,At.height,At.depth),k&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Bt,jt,At.data)):i.texImage3D(s.TEXTURE_3D,0,Gt,At.width,At.height,At.depth,0,Bt,jt,At.data);else if(A.isFramebufferTexture){if(Le)if(se)i.texStorage2D(s.TEXTURE_2D,wt,Gt,At.width,At.height);else{let ut=At.width,vt=At.height;for(let Rt=0;Rt<wt;Rt++)i.texImage2D(s.TEXTURE_2D,Rt,Gt,ut,vt,0,Bt,jt,null),ut>>=1,vt>>=1}}else if(te.length>0){if(se&&Le){const ut=Vt(te[0]);i.texStorage2D(s.TEXTURE_2D,wt,Gt,ut.width,ut.height)}for(let ut=0,vt=te.length;ut<vt;ut++)Ot=te[ut],se?k&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Bt,jt,Ot):i.texImage2D(s.TEXTURE_2D,ut,Gt,Bt,jt,Ot);A.generateMipmaps=!1}else if(se){if(Le){const ut=Vt(At);i.texStorage2D(s.TEXTURE_2D,wt,Gt,ut.width,ut.height)}k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Bt,jt,At)}else i.texImage2D(s.TEXTURE_2D,0,Gt,Bt,jt,At);x(A)&&S(dt),Ht.__version=mt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ft(U,A,et){if(A.image.length!==6)return;const dt=St(U,A),Et=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+et);const mt=r.get(Et);if(Et.version!==mt.__version||dt===!0){i.activeTexture(s.TEXTURE0+et);const Ht=Re.getPrimaries(Re.workingColorSpace),Ct=A.colorSpace===Xa?null:Re.getPrimaries(A.colorSpace),Kt=A.colorSpace===Xa||Ht===Ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const Jt=A.isCompressedTexture||A.image[0].isCompressedTexture,At=A.image[0]&&A.image[0].isDataTexture,Bt=[];for(let vt=0;vt<6;vt++)!Jt&&!At?Bt[vt]=T(A.image[vt],!0,l.maxCubemapSize):Bt[vt]=At?A.image[vt].image:A.image[vt],Bt[vt]=we(A,Bt[vt]);const jt=Bt[0],Gt=u.convert(A.format,A.colorSpace),Ot=u.convert(A.type),te=N(A.internalFormat,Gt,Ot,A.colorSpace),se=A.isVideoTexture!==!0,Le=mt.__version===void 0||dt===!0,k=Et.dataReady;let wt=X(A,jt);$(s.TEXTURE_CUBE_MAP,A);let ut;if(Jt){se&&Le&&i.texStorage2D(s.TEXTURE_CUBE_MAP,wt,te,jt.width,jt.height);for(let vt=0;vt<6;vt++){ut=Bt[vt].mipmaps;for(let Rt=0;Rt<ut.length;Rt++){const Dt=ut[Rt];A.format!==Ai?Gt!==null?se?k&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,0,0,Dt.width,Dt.height,Gt,Dt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,te,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,0,0,Dt.width,Dt.height,Gt,Ot,Dt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,te,Dt.width,Dt.height,0,Gt,Ot,Dt.data)}}}else{if(ut=A.mipmaps,se&&Le){ut.length>0&&wt++;const vt=Vt(Bt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,wt,te,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(At){se?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Bt[vt].width,Bt[vt].height,Gt,Ot,Bt[vt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,te,Bt[vt].width,Bt[vt].height,0,Gt,Ot,Bt[vt].data);for(let Rt=0;Rt<ut.length;Rt++){const ne=ut[Rt].image[vt].image;se?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,0,0,ne.width,ne.height,Gt,Ot,ne.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,te,ne.width,ne.height,0,Gt,Ot,ne.data)}}else{se?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Gt,Ot,Bt[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,te,Gt,Ot,Bt[vt]);for(let Rt=0;Rt<ut.length;Rt++){const Dt=ut[Rt];se?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,0,0,Gt,Ot,Dt.image[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,te,Gt,Ot,Dt.image[vt])}}}x(A)&&S(s.TEXTURE_CUBE_MAP),mt.__version=Et.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function Mt(U,A,et,dt,Et,mt){const Ht=u.convert(et.format,et.colorSpace),Ct=u.convert(et.type),Kt=N(et.internalFormat,Ht,Ct,et.colorSpace),Jt=r.get(A),At=r.get(et);if(At.__renderTarget=A,!Jt.__hasExternalTextures){const Bt=Math.max(1,A.width>>mt),jt=Math.max(1,A.height>>mt);Et===s.TEXTURE_3D||Et===s.TEXTURE_2D_ARRAY?i.texImage3D(Et,mt,Kt,Bt,jt,A.depth,0,Ht,Ct,null):i.texImage2D(Et,mt,Kt,Bt,jt,0,Ht,Ct,null)}i.bindFramebuffer(s.FRAMEBUFFER,U),me(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,Et,At.__webglTexture,0,de(A)):(Et===s.TEXTURE_2D||Et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,dt,Et,At.__webglTexture,mt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(U,A,et){if(s.bindRenderbuffer(s.RENDERBUFFER,U),A.depthBuffer){const dt=A.depthTexture,Et=dt&&dt.isDepthTexture?dt.type:null,mt=w(A.stencilBuffer,Et),Ht=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=de(A);me(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,mt,A.width,A.height):et?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,mt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,mt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ht,s.RENDERBUFFER,U)}else{const dt=A.textures;for(let Et=0;Et<dt.length;Et++){const mt=dt[Et],Ht=u.convert(mt.format,mt.colorSpace),Ct=u.convert(mt.type),Kt=N(mt.internalFormat,Ht,Ct,mt.colorSpace),Jt=de(A);et&&me(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,Kt,A.width,A.height):me(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,Kt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Kt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=r.get(A.depthTexture);dt.__renderTarget=A,(!dt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),_t(A.depthTexture,0);const Et=dt.__webglTexture,mt=de(A);if(A.depthTexture.format===ko)me(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0);else if(A.depthTexture.format===Xo)me(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Yt(U){const A=r.get(U),et=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),dt){const Et=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,dt.removeEventListener("dispose",Et)};dt.addEventListener("dispose",Et),A.__depthDisposeCallback=Et}A.__boundDepthTexture=dt}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const dt=U.texture.mipmaps;dt&&dt.length>0?zt(A.__webglFramebuffer[0],U):zt(A.__webglFramebuffer,U)}else if(et){A.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[dt]),A.__webglDepthbuffer[dt]===void 0)A.__webglDepthbuffer[dt]=s.createRenderbuffer(),xt(A.__webglDepthbuffer[dt],U,!1);else{const Et=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=A.__webglDepthbuffer[dt];s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,mt)}}else{const dt=U.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),xt(A.__webglDepthbuffer,U,!1);else{const Et=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,mt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(U,A,et){const dt=r.get(U);A!==void 0&&Mt(dt.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),et!==void 0&&Yt(U)}function Ve(U){const A=U.texture,et=r.get(U),dt=r.get(A);U.addEventListener("dispose",P);const Et=U.textures,mt=U.isWebGLCubeRenderTarget===!0,Ht=Et.length>1;if(Ht||(dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture()),dt.__version=A.version,f.memory.textures++),mt){et.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(A.mipmaps&&A.mipmaps.length>0){et.__webglFramebuffer[Ct]=[];for(let Kt=0;Kt<A.mipmaps.length;Kt++)et.__webglFramebuffer[Ct][Kt]=s.createFramebuffer()}else et.__webglFramebuffer[Ct]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){et.__webglFramebuffer=[];for(let Ct=0;Ct<A.mipmaps.length;Ct++)et.__webglFramebuffer[Ct]=s.createFramebuffer()}else et.__webglFramebuffer=s.createFramebuffer();if(Ht)for(let Ct=0,Kt=Et.length;Ct<Kt;Ct++){const Jt=r.get(Et[Ct]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),f.memory.textures++)}if(U.samples>0&&me(U)===!1){et.__webglMultisampledFramebuffer=s.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Ct=0;Ct<Et.length;Ct++){const Kt=Et[Ct];et.__webglColorRenderbuffer[Ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,et.__webglColorRenderbuffer[Ct]);const Jt=u.convert(Kt.format,Kt.colorSpace),At=u.convert(Kt.type),Bt=N(Kt.internalFormat,Jt,At,Kt.colorSpace,U.isXRRenderTarget===!0),jt=de(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,Bt,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,et.__webglColorRenderbuffer[Ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=s.createRenderbuffer(),xt(et.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(mt){i.bindTexture(s.TEXTURE_CUBE_MAP,dt.__webglTexture),$(s.TEXTURE_CUBE_MAP,A);for(let Ct=0;Ct<6;Ct++)if(A.mipmaps&&A.mipmaps.length>0)for(let Kt=0;Kt<A.mipmaps.length;Kt++)Mt(et.__webglFramebuffer[Ct][Kt],U,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Kt);else Mt(et.__webglFramebuffer[Ct],U,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);x(A)&&S(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let Ct=0,Kt=Et.length;Ct<Kt;Ct++){const Jt=Et[Ct],At=r.get(Jt);i.bindTexture(s.TEXTURE_2D,At.__webglTexture),$(s.TEXTURE_2D,Jt),Mt(et.__webglFramebuffer,U,Jt,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,0),x(Jt)&&S(s.TEXTURE_2D)}i.unbindTexture()}else{let Ct=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ct,dt.__webglTexture),$(Ct,A),A.mipmaps&&A.mipmaps.length>0)for(let Kt=0;Kt<A.mipmaps.length;Kt++)Mt(et.__webglFramebuffer[Kt],U,A,s.COLOR_ATTACHMENT0,Ct,Kt);else Mt(et.__webglFramebuffer,U,A,s.COLOR_ATTACHMENT0,Ct,0);x(A)&&S(Ct),i.unbindTexture()}U.depthBuffer&&Yt(U)}function Ie(U){const A=U.textures;for(let et=0,dt=A.length;et<dt;et++){const Et=A[et];if(x(Et)){const mt=B(U),Ht=r.get(Et).__webglTexture;i.bindTexture(mt,Ht),S(mt),i.unbindTexture()}}}const fe=[],F=[];function Tn(U){if(U.samples>0){if(me(U)===!1){const A=U.textures,et=U.width,dt=U.height;let Et=s.COLOR_BUFFER_BIT;const mt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ht=r.get(U),Ct=A.length>1;if(Ct)for(let Jt=0;Jt<A.length;Jt++)i.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Jt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Jt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer);const Kt=U.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Jt=0;Jt<A.length;Jt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Et|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Et|=s.STENCIL_BUFFER_BIT)),Ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ht.__webglColorRenderbuffer[Jt]);const At=r.get(A[Jt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,At,0)}s.blitFramebuffer(0,0,et,dt,0,0,et,dt,Et,s.NEAREST),m===!0&&(fe.length=0,F.length=0,fe.push(s.COLOR_ATTACHMENT0+Jt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(fe.push(mt),F.push(mt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ct)for(let Jt=0;Jt<A.length;Jt++){i.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Jt,s.RENDERBUFFER,Ht.__webglColorRenderbuffer[Jt]);const At=r.get(A[Jt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Jt,s.TEXTURE_2D,At,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const A=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function de(U){return Math.min(l.maxSamples,U.samples)}function me(U){const A=r.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function kt(U){const A=f.render.frame;g.get(U)!==A&&(g.set(U,A),U.update())}function we(U,A){const et=U.colorSpace,dt=U.format,Et=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==Ls&&et!==Xa&&(Re.getTransfer(et)===Be?(dt!==Ai||Et!==ha)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),A}function Vt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=lt,this.setTexture2D=_t,this.setTexture2DArray=O,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=Zt,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=me}function g1(s,t){function i(r,l=Xa){let u;const f=Re.getTransfer(l);if(r===ha)return s.UNSIGNED_BYTE;if(r===kh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Xh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===c0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===l0)return s.BYTE;if(r===u0)return s.SHORT;if(r===Go)return s.UNSIGNED_SHORT;if(r===Vh)return s.INT;if(r===wr)return s.UNSIGNED_INT;if(r===ca)return s.FLOAT;if(r===qo)return s.HALF_FLOAT;if(r===f0)return s.ALPHA;if(r===d0)return s.RGB;if(r===Ai)return s.RGBA;if(r===ko)return s.DEPTH_COMPONENT;if(r===Xo)return s.DEPTH_STENCIL;if(r===h0)return s.RED;if(r===qh)return s.RED_INTEGER;if(r===p0)return s.RG;if(r===Wh)return s.RG_INTEGER;if(r===Yh)return s.RGBA_INTEGER;if(r===Nu||r===Ou||r===Pu||r===zu)if(f===Be)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Nu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ou)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Nu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ou)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lh||r===uh||r===ch||r===fh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===lh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===uh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ch)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dh||r===hh||r===ph)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===dh||r===hh)return f===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===ph)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===mh||r===gh||r===_h||r===vh||r===Sh||r===yh||r===xh||r===Eh||r===Mh||r===Th||r===bh||r===Ah||r===Rh||r===Ch)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===mh)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gh)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_h)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vh)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Sh)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yh)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xh)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Eh)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mh)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Th)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bh)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ah)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rh)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ch)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bu||r===wh||r===Dh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Bu)return f===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===m0||r===Uh||r===Lh||r===Nh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Bu)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Uh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Lh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const _1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class S1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new qn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ja({vertexShader:_1,fragmentShader:v1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new zi(new Zu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y1 extends Ps{constructor(t,i){super();const r=this;let l=null,u=1,f=null,h="local-floor",m=1,p=null,g=null,_=null,y=null,E=null,M=null;const T=new S1,x=i.getContextAttributes();let S=null,B=null;const N=[],w=[],X=new Ge;let I=null;const P=new mi;P.viewport=new en;const Z=new mi;Z.viewport=new en;const D=[P,Z],C=new GE;let G=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ft=N[Y];return ft===void 0&&(ft=new Bd,N[Y]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Y){let ft=N[Y];return ft===void 0&&(ft=new Bd,N[Y]=ft),ft.getGripSpace()},this.getHand=function(Y){let ft=N[Y];return ft===void 0&&(ft=new Bd,N[Y]=ft),ft.getHandSpace()};function at(Y){const ft=w.indexOf(Y.inputSource);if(ft===-1)return;const Mt=N[ft];Mt!==void 0&&(Mt.update(Y.inputSource,Y.frame,p||f),Mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ht(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",ht),l.removeEventListener("inputsourceschange",_t);for(let Y=0;Y<N.length;Y++){const ft=w[Y];ft!==null&&(w[Y]=null,N[Y].disconnect(ft))}G=null,lt=null,T.reset(),t.setRenderTarget(S),E=null,y=null,_=null,l=null,B=null,St.stop(),r.isPresenting=!1,t.setPixelRatio(I),t.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){h=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return y!==null?y:E},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(S=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",ht),l.addEventListener("inputsourceschange",_t),x.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(X),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,xt=null,zt=null;x.depth&&(zt=x.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=x.stencil?Xo:ko,xt=x.stencil?Vo:wr);const Yt={colorFormat:i.RGBA8,depthFormat:zt,scaleFactor:u};_=new XRWebGLBinding(l,i),y=_.createProjectionLayer(Yt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),B=new Dr(y.textureWidth,y.textureHeight,{format:Ai,type:ha,depthTexture:new R0(y.textureWidth,y.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Mt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),B=new Dr(E.framebufferWidth,E.framebufferHeight,{format:Ai,type:ha,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),St.setContext(l),St.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function _t(Y){for(let ft=0;ft<Y.removed.length;ft++){const Mt=Y.removed[ft],xt=w.indexOf(Mt);xt>=0&&(w[xt]=null,N[xt].disconnect(Mt))}for(let ft=0;ft<Y.added.length;ft++){const Mt=Y.added[ft];let xt=w.indexOf(Mt);if(xt===-1){for(let Yt=0;Yt<N.length;Yt++)if(Yt>=w.length){w.push(Mt),xt=Yt;break}else if(w[Yt]===null){w[Yt]=Mt,xt=Yt;break}if(xt===-1)break}const zt=N[xt];zt&&zt.connect(Mt)}}const O=new ot,K=new ot;function q(Y,ft,Mt){O.setFromMatrixPosition(ft.matrixWorld),K.setFromMatrixPosition(Mt.matrixWorld);const xt=O.distanceTo(K),zt=ft.projectionMatrix.elements,Yt=Mt.projectionMatrix.elements,Zt=zt[14]/(zt[10]-1),Ve=zt[14]/(zt[10]+1),Ie=(zt[9]+1)/zt[5],fe=(zt[9]-1)/zt[5],F=(zt[8]-1)/zt[0],Tn=(Yt[8]+1)/Yt[0],de=Zt*F,me=Zt*Tn,kt=xt/(-F+Tn),we=kt*-F;if(ft.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(we),Y.translateZ(kt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),zt[10]===-1)Y.projectionMatrix.copy(ft.projectionMatrix),Y.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Vt=Zt+kt,U=Ve+kt,A=de-we,et=me+(xt-we),dt=Ie*Ve/U*Vt,Et=fe*Ve/U*Vt;Y.projectionMatrix.makePerspective(A,et,dt,Et,Vt,U),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function yt(Y,ft){ft===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ft.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let ft=Y.near,Mt=Y.far;T.texture!==null&&(T.depthNear>0&&(ft=T.depthNear),T.depthFar>0&&(Mt=T.depthFar)),C.near=Z.near=P.near=ft,C.far=Z.far=P.far=Mt,(G!==C.near||lt!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,lt=C.far),P.layers.mask=Y.layers.mask|2,Z.layers.mask=Y.layers.mask|4,C.layers.mask=P.layers.mask|Z.layers.mask;const xt=Y.parent,zt=C.cameras;yt(C,xt);for(let Yt=0;Yt<zt.length;Yt++)yt(zt[Yt],xt);zt.length===2?q(C,P,Z):C.projectionMatrix.copy(P.projectionMatrix),Tt(Y,C,xt)};function Tt(Y,ft,Mt){Mt===null?Y.matrix.copy(ft.matrixWorld):(Y.matrix.copy(Mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ft.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ft.projectionMatrix),Y.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Oh*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&E===null))return m},this.setFoveation=function(Y){m=Y,y!==null&&(y.fixedFoveation=Y),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=Y)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let L=null;function $(Y,ft){if(g=ft.getViewerPose(p||f),M=ft,g!==null){const Mt=g.views;E!==null&&(t.setRenderTargetFramebuffer(B,E.framebuffer),t.setRenderTarget(B));let xt=!1;Mt.length!==C.cameras.length&&(C.cameras.length=0,xt=!0);for(let Zt=0;Zt<Mt.length;Zt++){const Ve=Mt[Zt];let Ie=null;if(E!==null)Ie=E.getViewport(Ve);else{const F=_.getViewSubImage(y,Ve);Ie=F.viewport,Zt===0&&(t.setRenderTargetTextures(B,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(B))}let fe=D[Zt];fe===void 0&&(fe=new mi,fe.layers.enable(Zt),fe.viewport=new en,D[Zt]=fe),fe.matrix.fromArray(Ve.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Ve.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Zt===0&&(C.matrix.copy(fe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xt===!0&&C.cameras.push(fe)}const zt=l.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Zt=_.getDepthInformation(Mt[0]);Zt&&Zt.isValid&&Zt.texture&&T.init(t,Zt,l.renderState)}}for(let Mt=0;Mt<N.length;Mt++){const xt=w[Mt],zt=N[Mt];xt!==null&&zt!==void 0&&zt.update(xt,ft,p||f)}L&&L(Y,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),M=null}const St=new C0;St.setAnimationLoop($),this.setAnimationLoop=function(Y){L=Y},this.dispose=function(){}}}const Sr=new pa,x1=new ln;function E1(s,t){function i(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function r(x,S){S.color.getRGB(x.fogColor.value,M0(s)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function l(x,S,B,N,w){S.isMeshBasicMaterial||S.isMeshLambertMaterial?u(x,S):S.isMeshToonMaterial?(u(x,S),_(x,S)):S.isMeshPhongMaterial?(u(x,S),g(x,S)):S.isMeshStandardMaterial?(u(x,S),y(x,S),S.isMeshPhysicalMaterial&&E(x,S,w)):S.isMeshMatcapMaterial?(u(x,S),M(x,S)):S.isMeshDepthMaterial?u(x,S):S.isMeshDistanceMaterial?(u(x,S),T(x,S)):S.isMeshNormalMaterial?u(x,S):S.isLineBasicMaterial?(f(x,S),S.isLineDashedMaterial&&h(x,S)):S.isPointsMaterial?m(x,S,B,N):S.isSpriteMaterial?p(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,i(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,i(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===Xn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,i(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===Xn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,i(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,i(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const B=t.get(S),N=B.envMap,w=B.envMapRotation;N&&(x.envMap.value=N,Sr.copy(w),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),x.envMapRotation.value.setFromMatrix4(x1.makeRotationFromEuler(Sr)),x.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,x.aoMapTransform))}function f(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,i(S.map,x.mapTransform))}function h(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function m(x,S,B,N){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*B,x.scale.value=N*.5,S.map&&(x.map.value=S.map,i(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function p(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,i(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function g(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function _(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function y(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function E(x,S,B){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Xn&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=B.texture,x.transmissionSamplerSize.value.set(B.width,B.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,S){S.matcap&&(x.matcap.value=S.matcap)}function T(x,S){const B=t.get(S).light;x.referencePosition.value.setFromMatrixPosition(B.matrixWorld),x.nearDistance.value=B.shadow.camera.near,x.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function M1(s,t,i,r){let l={},u={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,N){const w=N.program;r.uniformBlockBinding(B,w)}function p(B,N){let w=l[B.id];w===void 0&&(M(B),w=g(B),l[B.id]=w,B.addEventListener("dispose",x));const X=N.program;r.updateUBOMapping(B,X);const I=t.render.frame;u[B.id]!==I&&(y(B),u[B.id]=I)}function g(B){const N=_();B.__bindingPointIndex=N;const w=s.createBuffer(),X=B.__size,I=B.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,X,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,w),w}function _(){for(let B=0;B<h;B++)if(f.indexOf(B)===-1)return f.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(B){const N=l[B.id],w=B.uniforms,X=B.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let I=0,P=w.length;I<P;I++){const Z=Array.isArray(w[I])?w[I]:[w[I]];for(let D=0,C=Z.length;D<C;D++){const G=Z[D];if(E(G,I,D,X)===!0){const lt=G.__offset,at=Array.isArray(G.value)?G.value:[G.value];let ht=0;for(let _t=0;_t<at.length;_t++){const O=at[_t],K=T(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,lt+ht,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,ht),ht+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,lt,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(B,N,w,X){const I=B.value,P=N+"_"+w;if(X[P]===void 0)return typeof I=="number"||typeof I=="boolean"?X[P]=I:X[P]=I.clone(),!0;{const Z=X[P];if(typeof I=="number"||typeof I=="boolean"){if(Z!==I)return X[P]=I,!0}else if(Z.equals(I)===!1)return Z.copy(I),!0}return!1}function M(B){const N=B.uniforms;let w=0;const X=16;for(let P=0,Z=N.length;P<Z;P++){const D=Array.isArray(N[P])?N[P]:[N[P]];for(let C=0,G=D.length;C<G;C++){const lt=D[C],at=Array.isArray(lt.value)?lt.value:[lt.value];for(let ht=0,_t=at.length;ht<_t;ht++){const O=at[ht],K=T(O),q=w%X,yt=q%K.boundary,Tt=q+yt;w+=yt,Tt!==0&&X-Tt<K.storage&&(w+=X-Tt),lt.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=w,w+=K.storage}}}const I=w%X;return I>0&&(w+=X-I),B.__size=w,B.__cache={},this}function T(B){const N={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(N.boundary=4,N.storage=4):B.isVector2?(N.boundary=8,N.storage=8):B.isVector3||B.isColor?(N.boundary=16,N.storage=12):B.isVector4?(N.boundary=16,N.storage=16):B.isMatrix3?(N.boundary=48,N.storage=48):B.isMatrix4?(N.boundary=64,N.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),N}function x(B){const N=B.target;N.removeEventListener("dispose",x);const w=f.indexOf(N.__bindingPointIndex);f.splice(w,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function S(){for(const B in l)s.deleteBuffer(l[B]);f=[],l={},u={}}return{bind:m,update:p,dispose:S}}class T1{constructor(t={}){const{canvas:i=sE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=f;const M=new Uint32Array(4),T=new Int32Array(4);let x=null,S=null;const B=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let X=!1;this._outputColorSpace=pi;let I=0,P=0,Z=null,D=-1,C=null;const G=new en,lt=new en;let at=null;const ht=new Fe(0);let _t=0,O=i.width,K=i.height,q=1,yt=null,Tt=null;const L=new en(0,0,O,K),$=new en(0,0,O,K);let St=!1;const Y=new A0;let ft=!1,Mt=!1;const xt=new ln,zt=new ln,Yt=new ot,Zt=new en,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function fe(){return Z===null?q:1}let F=r;function Tn(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gh}`),i.addEventListener("webglcontextlost",vt,!1),i.addEventListener("webglcontextrestored",Rt,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),F===null){const W="webgl2";if(F=Tn(W,R),F===null)throw Tn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let de,me,kt,we,Vt,U,A,et,dt,Et,mt,Ht,Ct,Kt,Jt,At,Bt,jt,Gt,Ot,te,se,Le,k;function wt(){de=new Ob(F),de.init(),se=new g1(F,de),me=new Rb(F,de,t,se),kt=new p1(F,de),me.reverseDepthBuffer&&y&&kt.buffers.depth.setReversed(!0),we=new Bb(F),Vt=new e1,U=new m1(F,de,kt,Vt,me,se,we),A=new wb(w),et=new Nb(w),dt=new kE(F),Le=new bb(F,dt),Et=new Pb(F,dt,we,Le),mt=new Ib(F,Et,dt,we),Gt=new Fb(F,me,U),At=new Cb(Vt),Ht=new t1(w,A,et,de,me,Le,At),Ct=new E1(w,Vt),Kt=new i1,Jt=new u1(de),jt=new Tb(w,A,et,kt,mt,E,m),Bt=new d1(w,mt,me),k=new M1(F,we,me,kt),Ot=new Ab(F,de,we),te=new zb(F,de,we),we.programs=Ht.programs,w.capabilities=me,w.extensions=de,w.properties=Vt,w.renderLists=Kt,w.shadowMap=Bt,w.state=kt,w.info=we}wt();const ut=new y1(w,F);this.xr=ut,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=de.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=de.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(O,K,!1))},this.getSize=function(R){return R.set(O,K)},this.setSize=function(R,W,nt=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,K=W,i.width=Math.floor(R*q),i.height=Math.floor(W*q),nt===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(O*q,K*q).floor()},this.setDrawingBufferSize=function(R,W,nt){O=R,K=W,q=nt,i.width=Math.floor(R*nt),i.height=Math.floor(W*nt),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(L)},this.setViewport=function(R,W,nt,it){R.isVector4?L.set(R.x,R.y,R.z,R.w):L.set(R,W,nt,it),kt.viewport(G.copy(L).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy($)},this.setScissor=function(R,W,nt,it){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,W,nt,it),kt.scissor(lt.copy($).multiplyScalar(q).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(R){kt.setScissorTest(St=R)},this.setOpaqueSort=function(R){yt=R},this.setTransparentSort=function(R){Tt=R},this.getClearColor=function(R){return R.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,nt=!0){let it=0;if(R){let V=!1;if(Z!==null){const bt=Z.texture.format;V=bt===Yh||bt===Wh||bt===qh}if(V){const bt=Z.texture.type,Ut=bt===ha||bt===wr||bt===Go||bt===Vo||bt===kh||bt===Xh,Nt=jt.getClearColor(),Pt=jt.getClearAlpha(),ie=Nt.r,$t=Nt.g,Xt=Nt.b;Ut?(M[0]=ie,M[1]=$t,M[2]=Xt,M[3]=Pt,F.clearBufferuiv(F.COLOR,0,M)):(T[0]=ie,T[1]=$t,T[2]=Xt,T[3]=Pt,F.clearBufferiv(F.COLOR,0,T))}else it|=F.COLOR_BUFFER_BIT}W&&(it|=F.DEPTH_BUFFER_BIT),nt&&(it|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",vt,!1),i.removeEventListener("webglcontextrestored",Rt,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),jt.dispose(),Kt.dispose(),Jt.dispose(),Vt.dispose(),A.dispose(),et.dispose(),mt.dispose(),Le.dispose(),k.dispose(),Ht.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Is),ut.removeEventListener("sessionend",Hs),wi.stop()};function vt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const R=we.autoReset,W=Bt.enabled,nt=Bt.autoUpdate,it=Bt.needsUpdate,V=Bt.type;wt(),we.autoReset=R,Bt.enabled=W,Bt.autoUpdate=nt,Bt.needsUpdate=it,Bt.type=V}function Dt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ne(R){const W=R.target;W.removeEventListener("dispose",ne),Ye(W)}function Ye(R){un(R),Vt.remove(R)}function un(R){const W=Vt.get(R).programs;W!==void 0&&(W.forEach(function(nt){Ht.releaseProgram(nt)}),R.isShaderMaterial&&Ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,nt,it,V,bt){W===null&&(W=Ve);const Ut=V.isMesh&&V.matrixWorld.determinant()<0,Nt=Vs(R,W,nt,it,V);kt.setMaterial(it,Ut);let Pt=nt.index,ie=1;if(it.wireframe===!0){if(Pt=Et.getWireframeAttribute(nt),Pt===void 0)return;ie=2}const $t=nt.drawRange,Xt=nt.attributes.position;let ve=$t.start*ie,Se=($t.start+$t.count)*ie;bt!==null&&(ve=Math.max(ve,bt.start*ie),Se=Math.min(Se,(bt.start+bt.count)*ie)),Pt!==null?(ve=Math.max(ve,0),Se=Math.min(Se,Pt.count)):Xt!=null&&(ve=Math.max(ve,0),Se=Math.min(Se,Xt.count));const ke=Se-ve;if(ke<0||ke===1/0)return;Le.setup(V,it,Nt,nt,Pt);let Te,ae=Ot;if(Pt!==null&&(Te=dt.get(Pt),ae=te,ae.setIndex(Te)),V.isMesh)it.wireframe===!0?(kt.setLineWidth(it.wireframeLinewidth*fe()),ae.setMode(F.LINES)):ae.setMode(F.TRIANGLES);else if(V.isLine){let Wt=it.linewidth;Wt===void 0&&(Wt=1),kt.setLineWidth(Wt*fe()),V.isLineSegments?ae.setMode(F.LINES):V.isLineLoop?ae.setMode(F.LINE_LOOP):ae.setMode(F.LINE_STRIP)}else V.isPoints?ae.setMode(F.POINTS):V.isSprite&&ae.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Fu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))ae.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Wt=V._multiDrawStarts,cn=V._multiDrawCounts,Ee=V._multiDrawCount,On=Pt?dt.get(Pt).bytesPerElement:1,vi=Vt.get(it).currentProgram.getUniforms();for(let Dn=0;Dn<Ee;Dn++)vi.setValue(F,"_gl_DrawID",Dn),ae.render(Wt[Dn]/On,cn[Dn])}else if(V.isInstancedMesh)ae.renderInstances(ve,ke,V.count);else if(nt.isInstancedBufferGeometry){const Wt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,cn=Math.min(nt.instanceCount,Wt);ae.renderInstances(ve,ke,cn)}else ae.render(ve,ke)};function Me(R,W,nt){R.transparent===!0&&R.side===ua&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,Ze(R,W,nt),R.side=Ya,R.needsUpdate=!0,Ze(R,W,nt),R.side=ua):Ze(R,W,nt)}this.compile=function(R,W,nt=null){nt===null&&(nt=R),S=Jt.get(nt),S.init(W),N.push(S),nt.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),R!==nt&&R.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),S.setupLights();const it=new Set;return R.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const bt=V.material;if(bt)if(Array.isArray(bt))for(let Ut=0;Ut<bt.length;Ut++){const Nt=bt[Ut];Me(Nt,nt,V),it.add(Nt)}else Me(bt,nt,V),it.add(bt)}),S=N.pop(),it},this.compileAsync=function(R,W,nt=null){const it=this.compile(R,W,nt);return new Promise(V=>{function bt(){if(it.forEach(function(Ut){Vt.get(Ut).currentProgram.isReady()&&it.delete(Ut)}),it.size===0){V(R);return}setTimeout(bt,10)}de.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let _n=null;function gi(R){_n&&_n(R)}function Is(){wi.stop()}function Hs(){wi.start()}const wi=new C0;wi.setAnimationLoop(gi),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(R){_n=R,ut.setAnimationLoop(R),R===null?wi.stop():wi.start()},ut.addEventListener("sessionstart",Is),ut.addEventListener("sessionend",Hs),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(W),W=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,W,Z),S=Jt.get(R,N.length),S.init(W),N.push(S),zt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Y.setFromProjectionMatrix(zt),Mt=this.localClippingEnabled,ft=At.init(this.clippingPlanes,Mt),x=Kt.get(R,B.length),x.init(),B.push(x),ut.enabled===!0&&ut.isPresenting===!0){const bt=w.xr.getDepthSensingMesh();bt!==null&&Za(bt,W,-1/0,w.sortObjects)}Za(R,W,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(yt,Tt),Ie=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Ie&&jt.addToRenderList(x,R),this.info.render.frame++,ft===!0&&At.beginShadows();const nt=S.state.shadowsArray;Bt.render(nt,R,W),ft===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=x.opaque,V=x.transmissive;if(S.setupLights(),W.isArrayCamera){const bt=W.cameras;if(V.length>0)for(let Ut=0,Nt=bt.length;Ut<Nt;Ut++){const Pt=bt[Ut];Gs(it,V,R,Pt)}Ie&&jt.render(R);for(let Ut=0,Nt=bt.length;Ut<Nt;Ut++){const Pt=bt[Ut];Nr(x,R,Pt,Pt.viewport)}}else V.length>0&&Gs(it,V,R,W),Ie&&jt.render(R),Nr(x,R,W);Z!==null&&P===0&&(U.updateMultisampleRenderTarget(Z),U.updateRenderTargetMipmap(Z)),R.isScene===!0&&R.onAfterRender(w,R,W),Le.resetDefaultState(),D=-1,C=null,N.pop(),N.length>0?(S=N[N.length-1],ft===!0&&At.setGlobalState(w.clippingPlanes,S.state.camera)):S=null,B.pop(),B.length>0?x=B[B.length-1]:x=null};function Za(R,W,nt,it){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)nt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Y.intersectsSprite(R)){it&&Zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(zt);const Ut=mt.update(R),Nt=R.material;Nt.visible&&x.push(R,Ut,Nt,nt,Zt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Y.intersectsObject(R))){const Ut=mt.update(R),Nt=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Zt.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Zt.copy(Ut.boundingSphere.center)),Zt.applyMatrix4(R.matrixWorld).applyMatrix4(zt)),Array.isArray(Nt)){const Pt=Ut.groups;for(let ie=0,$t=Pt.length;ie<$t;ie++){const Xt=Pt[ie],ve=Nt[Xt.materialIndex];ve&&ve.visible&&x.push(R,Ut,ve,nt,Zt.z,Xt)}}else Nt.visible&&x.push(R,Ut,Nt,nt,Zt.z,null)}}const bt=R.children;for(let Ut=0,Nt=bt.length;Ut<Nt;Ut++)Za(bt[Ut],W,nt,it)}function Nr(R,W,nt,it){const V=R.opaque,bt=R.transmissive,Ut=R.transparent;S.setupLightsView(nt),ft===!0&&At.setGlobalState(w.clippingPlanes,nt),it&&kt.viewport(G.copy(it)),V.length>0&&Ka(V,W,nt),bt.length>0&&Ka(bt,W,nt),Ut.length>0&&Ka(Ut,W,nt),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Gs(R,W,nt,it){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[it.id]===void 0&&(S.state.transmissionRenderTarget[it.id]=new Dr(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float")?qo:ha,minFilter:br,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const bt=S.state.transmissionRenderTarget[it.id],Ut=it.viewport||G;bt.setSize(Ut.z*w.transmissionResolutionScale,Ut.w*w.transmissionResolutionScale);const Nt=w.getRenderTarget();w.setRenderTarget(bt),w.getClearColor(ht),_t=w.getClearAlpha(),_t<1&&w.setClearColor(16777215,.5),w.clear(),Ie&&jt.render(nt);const Pt=w.toneMapping;w.toneMapping=Wa;const ie=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),S.setupLightsView(it),ft===!0&&At.setGlobalState(w.clippingPlanes,it),Ka(R,nt,it),U.updateMultisampleRenderTarget(bt),U.updateRenderTargetMipmap(bt),de.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Xt=0,ve=W.length;Xt<ve;Xt++){const Se=W[Xt],ke=Se.object,Te=Se.geometry,ae=Se.material,Wt=Se.group;if(ae.side===ua&&ke.layers.test(it.layers)){const cn=ae.side;ae.side=Xn,ae.needsUpdate=!0,_i(ke,nt,it,Te,ae,Wt),ae.side=cn,ae.needsUpdate=!0,$t=!0}}$t===!0&&(U.updateMultisampleRenderTarget(bt),U.updateRenderTargetMipmap(bt))}w.setRenderTarget(Nt),w.setClearColor(ht,_t),ie!==void 0&&(it.viewport=ie),w.toneMapping=Pt}function Ka(R,W,nt){const it=W.isScene===!0?W.overrideMaterial:null;for(let V=0,bt=R.length;V<bt;V++){const Ut=R[V],Nt=Ut.object,Pt=Ut.geometry,ie=Ut.group;let $t=Ut.material;$t.allowOverride===!0&&it!==null&&($t=it),Nt.layers.test(nt.layers)&&_i(Nt,W,nt,Pt,$t,ie)}}function _i(R,W,nt,it,V,bt){R.onBeforeRender(w,W,nt,it,V,bt),R.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(w,W,nt,it,R,bt),V.transparent===!0&&V.side===ua&&V.forceSinglePass===!1?(V.side=Xn,V.needsUpdate=!0,w.renderBufferDirect(nt,W,it,V,R,bt),V.side=Ya,V.needsUpdate=!0,w.renderBufferDirect(nt,W,it,V,R,bt),V.side=ua):w.renderBufferDirect(nt,W,it,V,R,bt),R.onAfterRender(w,W,nt,it,V,bt)}function Ze(R,W,nt){W.isScene!==!0&&(W=Ve);const it=Vt.get(R),V=S.state.lights,bt=S.state.shadowsArray,Ut=V.state.version,Nt=Ht.getParameters(R,V.state,bt,W,nt),Pt=Ht.getProgramCacheKey(Nt);let ie=it.programs;it.environment=R.isMeshStandardMaterial?W.environment:null,it.fog=W.fog,it.envMap=(R.isMeshStandardMaterial?et:A).get(R.envMap||it.environment),it.envMapRotation=it.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,ie===void 0&&(R.addEventListener("dispose",ne),ie=new Map,it.programs=ie);let $t=ie.get(Pt);if($t!==void 0){if(it.currentProgram===$t&&it.lightsStateVersion===Ut)return Fi(R,Nt),$t}else Nt.uniforms=Ht.getUniforms(R),R.onBeforeCompile(Nt,w),$t=Ht.acquireProgram(Nt,Pt),ie.set(Pt,$t),it.uniforms=Nt.uniforms;const Xt=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xt.clippingPlanes=At.uniform),Fi(R,Nt),it.needsLights=ic(R),it.lightsStateVersion=Ut,it.needsLights&&(Xt.ambientLightColor.value=V.state.ambient,Xt.lightProbe.value=V.state.probe,Xt.directionalLights.value=V.state.directional,Xt.directionalLightShadows.value=V.state.directionalShadow,Xt.spotLights.value=V.state.spot,Xt.spotLightShadows.value=V.state.spotShadow,Xt.rectAreaLights.value=V.state.rectArea,Xt.ltc_1.value=V.state.rectAreaLTC1,Xt.ltc_2.value=V.state.rectAreaLTC2,Xt.pointLights.value=V.state.point,Xt.pointLightShadows.value=V.state.pointShadow,Xt.hemisphereLights.value=V.state.hemi,Xt.directionalShadowMap.value=V.state.directionalShadowMap,Xt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Xt.spotShadowMap.value=V.state.spotShadowMap,Xt.spotLightMatrix.value=V.state.spotLightMatrix,Xt.spotLightMap.value=V.state.spotLightMap,Xt.pointShadowMap.value=V.state.pointShadowMap,Xt.pointShadowMatrix.value=V.state.pointShadowMatrix),it.currentProgram=$t,it.uniformsList=null,$t}function vn(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Iu.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Fi(R,W){const nt=Vt.get(R);nt.outputColorSpace=W.outputColorSpace,nt.batching=W.batching,nt.batchingColor=W.batchingColor,nt.instancing=W.instancing,nt.instancingColor=W.instancingColor,nt.instancingMorph=W.instancingMorph,nt.skinning=W.skinning,nt.morphTargets=W.morphTargets,nt.morphNormals=W.morphNormals,nt.morphColors=W.morphColors,nt.morphTargetsCount=W.morphTargetsCount,nt.numClippingPlanes=W.numClippingPlanes,nt.numIntersection=W.numClipIntersection,nt.vertexAlphas=W.vertexAlphas,nt.vertexTangents=W.vertexTangents,nt.toneMapping=W.toneMapping}function Vs(R,W,nt,it,V){W.isScene!==!0&&(W=Ve),U.resetTextureUnits();const bt=W.fog,Ut=it.isMeshStandardMaterial?W.environment:null,Nt=Z===null?w.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ls,Pt=(it.isMeshStandardMaterial?et:A).get(it.envMap||Ut),ie=it.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,$t=!!nt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Xt=!!nt.morphAttributes.position,ve=!!nt.morphAttributes.normal,Se=!!nt.morphAttributes.color;let ke=Wa;it.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ke=w.toneMapping);const Te=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,ae=Te!==void 0?Te.length:0,Wt=Vt.get(it),cn=S.state.lights;if(ft===!0&&(Mt===!0||R!==C)){const Ke=R===C&&it.id===D;At.setState(it,R,Ke)}let Ee=!1;it.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==cn.state.version||Wt.outputColorSpace!==Nt||V.isBatchedMesh&&Wt.batching===!1||!V.isBatchedMesh&&Wt.batching===!0||V.isBatchedMesh&&Wt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Wt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Wt.instancing===!1||!V.isInstancedMesh&&Wt.instancing===!0||V.isSkinnedMesh&&Wt.skinning===!1||!V.isSkinnedMesh&&Wt.skinning===!0||V.isInstancedMesh&&Wt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Wt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Wt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Wt.instancingMorph===!1&&V.morphTexture!==null||Wt.envMap!==Pt||it.fog===!0&&Wt.fog!==bt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==At.numPlanes||Wt.numIntersection!==At.numIntersection)||Wt.vertexAlphas!==ie||Wt.vertexTangents!==$t||Wt.morphTargets!==Xt||Wt.morphNormals!==ve||Wt.morphColors!==Se||Wt.toneMapping!==ke||Wt.morphTargetsCount!==ae)&&(Ee=!0):(Ee=!0,Wt.__version=it.version);let On=Wt.currentProgram;Ee===!0&&(On=Ze(it,W,V));let vi=!1,Dn=!1,pn=!1;const Ne=On.getUniforms(),Un=Wt.uniforms;if(kt.useProgram(On.program)&&(vi=!0,Dn=!0,pn=!0),it.id!==D&&(D=it.id,Dn=!0),vi||C!==R){kt.buffers.depth.getReversed()?(xt.copy(R.projectionMatrix),lE(xt),uE(xt),Ne.setValue(F,"projectionMatrix",xt)):Ne.setValue(F,"projectionMatrix",R.projectionMatrix),Ne.setValue(F,"viewMatrix",R.matrixWorldInverse);const Sn=Ne.map.cameraPosition;Sn!==void 0&&Sn.setValue(F,Yt.setFromMatrixPosition(R.matrixWorld)),me.logarithmicDepthBuffer&&Ne.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ne.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Dn=!0,pn=!0)}if(V.isSkinnedMesh){Ne.setOptional(F,V,"bindMatrix"),Ne.setOptional(F,V,"bindMatrixInverse");const Ke=V.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Ne.setValue(F,"boneTexture",Ke.boneTexture,U))}V.isBatchedMesh&&(Ne.setOptional(F,V,"batchingTexture"),Ne.setValue(F,"batchingTexture",V._matricesTexture,U),Ne.setOptional(F,V,"batchingIdTexture"),Ne.setValue(F,"batchingIdTexture",V._indirectTexture,U),Ne.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&Ne.setValue(F,"batchingColorTexture",V._colorsTexture,U));const bn=nt.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&Gt.update(V,nt,On),(Dn||Wt.receiveShadow!==V.receiveShadow)&&(Wt.receiveShadow=V.receiveShadow,Ne.setValue(F,"receiveShadow",V.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(Un.envMap.value=Pt,Un.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&W.environment!==null&&(Un.envMapIntensity.value=W.environmentIntensity),Dn&&(Ne.setValue(F,"toneMappingExposure",w.toneMappingExposure),Wt.needsLights&&nc(Un,pn),bt&&it.fog===!0&&Ct.refreshFogUniforms(Un,bt),Ct.refreshMaterialUniforms(Un,it,q,K,S.state.transmissionRenderTarget[R.id]),Iu.upload(F,vn(Wt),Un,U)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Iu.upload(F,vn(Wt),Un,U),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ne.setValue(F,"center",V.center),Ne.setValue(F,"modelViewMatrix",V.modelViewMatrix),Ne.setValue(F,"normalMatrix",V.normalMatrix),Ne.setValue(F,"modelMatrix",V.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Ke=it.uniformsGroups;for(let Sn=0,Or=Ke.length;Sn<Or;Sn++){const Pn=Ke[Sn];k.update(Pn,On),k.bind(Pn,On)}}return On}function nc(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function ic(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(R,W,nt){const it=Vt.get(R);it.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),Vt.get(R.texture).__webglTexture=W,Vt.get(R.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:nt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const nt=Vt.get(R);nt.__webglFramebuffer=W,nt.__useDefaultFramebuffer=W===void 0};const tl=F.createFramebuffer();this.setRenderTarget=function(R,W=0,nt=0){Z=R,I=W,P=nt;let it=!0,V=null,bt=!1,Ut=!1;if(R){const Pt=Vt.get(R);if(Pt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(F.FRAMEBUFFER,null),it=!1;else if(Pt.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(Pt.__hasExternalTextures)U.rebindTextures(R,Vt.get(R.texture).__webglTexture,Vt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xt=R.depthTexture;if(Pt.__boundDepthTexture!==Xt){if(Xt!==null&&Vt.has(Xt)&&(R.width!==Xt.image.width||R.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const ie=R.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Ut=!0);const $t=Vt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($t[W])?V=$t[W][nt]:V=$t[W],bt=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?V=Vt.get(R).__webglMultisampledFramebuffer:Array.isArray($t)?V=$t[nt]:V=$t,G.copy(R.viewport),lt.copy(R.scissor),at=R.scissorTest}else G.copy(L).multiplyScalar(q).floor(),lt.copy($).multiplyScalar(q).floor(),at=St;if(nt!==0&&(V=tl),kt.bindFramebuffer(F.FRAMEBUFFER,V)&&it&&kt.drawBuffers(R,V),kt.viewport(G),kt.scissor(lt),kt.setScissorTest(at),bt){const Pt=Vt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pt.__webglTexture,nt)}else if(Ut){const Pt=Vt.get(R.texture),ie=W;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.__webglTexture,nt,ie)}else if(R!==null&&nt!==0){const Pt=Vt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pt.__webglTexture,nt)}D=-1},this.readRenderTargetPixels=function(R,W,nt,it,V,bt,Ut){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){kt.bindFramebuffer(F.FRAMEBUFFER,Nt);try{const Pt=R.texture,ie=Pt.format,$t=Pt.type;if(!me.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-it&&nt>=0&&nt<=R.height-V&&F.readPixels(W,nt,it,V,se.convert(ie),se.convert($t),bt)}finally{const Pt=Z!==null?Vt.get(Z).__webglFramebuffer:null;kt.bindFramebuffer(F.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(R,W,nt,it,V,bt,Ut){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if(W>=0&&W<=R.width-it&&nt>=0&&nt<=R.height-V){kt.bindFramebuffer(F.FRAMEBUFFER,Nt);const Pt=R.texture,ie=Pt.format,$t=Pt.type;if(!me.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Xt),F.bufferData(F.PIXEL_PACK_BUFFER,bt.byteLength,F.STREAM_READ),F.readPixels(W,nt,it,V,se.convert(ie),se.convert($t),0);const ve=Z!==null?Vt.get(Z).__webglFramebuffer:null;kt.bindFramebuffer(F.FRAMEBUFFER,ve);const Se=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await oE(F,Se,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Xt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,bt),F.deleteBuffer(Xt),F.deleteSync(Se),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,nt=0){const it=Math.pow(2,-nt),V=Math.floor(R.image.width*it),bt=Math.floor(R.image.height*it),Ut=W!==null?W.x:0,Nt=W!==null?W.y:0;U.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,nt,0,0,Ut,Nt,V,bt),kt.unbindTexture()};const Qa=F.createFramebuffer(),ks=F.createFramebuffer();this.copyTextureToTexture=function(R,W,nt=null,it=null,V=0,bt=null){bt===null&&(V!==0?(Fu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=V,V=0):bt=0);let Ut,Nt,Pt,ie,$t,Xt,ve,Se,ke;const Te=R.isCompressedTexture?R.mipmaps[bt]:R.image;if(nt!==null)Ut=nt.max.x-nt.min.x,Nt=nt.max.y-nt.min.y,Pt=nt.isBox3?nt.max.z-nt.min.z:1,ie=nt.min.x,$t=nt.min.y,Xt=nt.isBox3?nt.min.z:0;else{const bn=Math.pow(2,-V);Ut=Math.floor(Te.width*bn),Nt=Math.floor(Te.height*bn),R.isDataArrayTexture?Pt=Te.depth:R.isData3DTexture?Pt=Math.floor(Te.depth*bn):Pt=1,ie=0,$t=0,Xt=0}it!==null?(ve=it.x,Se=it.y,ke=it.z):(ve=0,Se=0,ke=0);const ae=se.convert(W.format),Wt=se.convert(W.type);let cn;W.isData3DTexture?(U.setTexture3D(W,0),cn=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),cn=F.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),cn=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Ee=F.getParameter(F.UNPACK_ROW_LENGTH),On=F.getParameter(F.UNPACK_IMAGE_HEIGHT),vi=F.getParameter(F.UNPACK_SKIP_PIXELS),Dn=F.getParameter(F.UNPACK_SKIP_ROWS),pn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Te.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Te.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ie),F.pixelStorei(F.UNPACK_SKIP_ROWS,$t),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xt);const Ne=R.isDataArrayTexture||R.isData3DTexture,Un=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const bn=Vt.get(R),Ke=Vt.get(W),Sn=Vt.get(bn.__renderTarget),Or=Vt.get(Ke.__renderTarget);kt.bindFramebuffer(F.READ_FRAMEBUFFER,Sn.__webglFramebuffer),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let Pn=0;Pn<Pt;Pn++)Ne&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.get(R).__webglTexture,V,Xt+Pn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.get(W).__webglTexture,bt,ke+Pn)),F.blitFramebuffer(ie,$t,Ut,Nt,ve,Se,Ut,Nt,F.DEPTH_BUFFER_BIT,F.NEAREST);kt.bindFramebuffer(F.READ_FRAMEBUFFER,null),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||R.isRenderTargetTexture||Vt.has(R)){const bn=Vt.get(R),Ke=Vt.get(W);kt.bindFramebuffer(F.READ_FRAMEBUFFER,Qa),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,ks);for(let Sn=0;Sn<Pt;Sn++)Ne?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,bn.__webglTexture,V,Xt+Sn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,bn.__webglTexture,V),Un?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ke.__webglTexture,bt,ke+Sn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ke.__webglTexture,bt),V!==0?F.blitFramebuffer(ie,$t,Ut,Nt,ve,Se,Ut,Nt,F.COLOR_BUFFER_BIT,F.NEAREST):Un?F.copyTexSubImage3D(cn,bt,ve,Se,ke+Sn,ie,$t,Ut,Nt):F.copyTexSubImage2D(cn,bt,ve,Se,ie,$t,Ut,Nt);kt.bindFramebuffer(F.READ_FRAMEBUFFER,null),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Un?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(cn,bt,ve,Se,ke,Ut,Nt,Pt,ae,Wt,Te.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(cn,bt,ve,Se,ke,Ut,Nt,Pt,ae,Te.data):F.texSubImage3D(cn,bt,ve,Se,ke,Ut,Nt,Pt,ae,Wt,Te):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,bt,ve,Se,Ut,Nt,ae,Wt,Te.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,bt,ve,Se,Te.width,Te.height,ae,Te.data):F.texSubImage2D(F.TEXTURE_2D,bt,ve,Se,Ut,Nt,ae,Wt,Te);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ee),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,On),F.pixelStorei(F.UNPACK_SKIP_PIXELS,vi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Dn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,pn),bt===0&&W.generateMipmaps&&F.generateMipmap(cn),kt.unbindTexture()},this.copyTextureToTexture3D=function(R,W,nt=null,it=null,V=0){return Fu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,nt,it,V)},this.initRenderTarget=function(R){Vt.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),kt.unbindTexture()},this.resetState=function(){I=0,P=0,Z=null,kt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}function N0(s,t){return function(){return s.apply(t,arguments)}}const{toString:b1}=Object.prototype,{getPrototypeOf:Jh}=Object,{iterator:Qu,toStringTag:O0}=Symbol,Ju=(s=>t=>{const i=b1.call(t);return s[i]||(s[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),Ci=s=>(s=s.toLowerCase(),t=>Ju(t)===s),$u=s=>t=>typeof t===s,{isArray:Fs}=Array,Os=$u("undefined");function Zo(s){return s!==null&&!Os(s)&&s.constructor!==null&&!Os(s.constructor)&&Wn(s.constructor.isBuffer)&&s.constructor.isBuffer(s)}const P0=Ci("ArrayBuffer");function A1(s){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(s):t=s&&s.buffer&&P0(s.buffer),t}const R1=$u("string"),Wn=$u("function"),z0=$u("number"),Ko=s=>s!==null&&typeof s=="object",C1=s=>s===!0||s===!1,Hu=s=>{if(Ju(s)!=="object")return!1;const t=Jh(s);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(O0 in s)&&!(Qu in s)},w1=s=>{if(!Ko(s)||Zo(s))return!1;try{return Object.keys(s).length===0&&Object.getPrototypeOf(s)===Object.prototype}catch{return!1}},D1=Ci("Date"),U1=Ci("File"),L1=s=>!!(s&&typeof s.uri<"u"),N1=s=>s&&typeof s.getParts<"u",O1=Ci("Blob"),P1=Ci("FileList"),z1=s=>Ko(s)&&Wn(s.pipe);function B1(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Vv=B1(),kv=typeof Vv.FormData<"u"?Vv.FormData:void 0,F1=s=>{let t;return s&&(kv&&s instanceof kv||Wn(s.append)&&((t=Ju(s))==="formdata"||t==="object"&&Wn(s.toString)&&s.toString()==="[object FormData]"))},I1=Ci("URLSearchParams"),[H1,G1,V1,k1]=["ReadableStream","Request","Response","Headers"].map(Ci),X1=s=>s.trim?s.trim():s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Qo(s,t,{allOwnKeys:i=!1}={}){if(s===null||typeof s>"u")return;let r,l;if(typeof s!="object"&&(s=[s]),Fs(s))for(r=0,l=s.length;r<l;r++)t.call(null,s[r],r,s);else{if(Zo(s))return;const u=i?Object.getOwnPropertyNames(s):Object.keys(s),f=u.length;let h;for(r=0;r<f;r++)h=u[r],t.call(null,s[h],h,s)}}function B0(s,t){if(Zo(s))return null;t=t.toLowerCase();const i=Object.keys(s);let r=i.length,l;for(;r-- >0;)if(l=i[r],t===l.toLowerCase())return l;return null}const Ar=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,F0=s=>!Os(s)&&s!==Ar;function zh(){const{caseless:s,skipUndefined:t}=F0(this)&&this||{},i={},r=(l,u)=>{if(u==="__proto__"||u==="constructor"||u==="prototype")return;const f=s&&B0(i,u)||u;Hu(i[f])&&Hu(l)?i[f]=zh(i[f],l):Hu(l)?i[f]=zh({},l):Fs(l)?i[f]=l.slice():(!t||!Os(l))&&(i[f]=l)};for(let l=0,u=arguments.length;l<u;l++)arguments[l]&&Qo(arguments[l],r);return i}const q1=(s,t,i,{allOwnKeys:r}={})=>(Qo(t,(l,u)=>{i&&Wn(l)?Object.defineProperty(s,u,{value:N0(l,i),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(s,u,{value:l,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),s),W1=s=>(s.charCodeAt(0)===65279&&(s=s.slice(1)),s),Y1=(s,t,i,r)=>{s.prototype=Object.create(t.prototype,r),Object.defineProperty(s.prototype,"constructor",{value:s,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(s,"super",{value:t.prototype}),i&&Object.assign(s.prototype,i)},j1=(s,t,i,r)=>{let l,u,f;const h={};if(t=t||{},s==null)return t;do{for(l=Object.getOwnPropertyNames(s),u=l.length;u-- >0;)f=l[u],(!r||r(f,s,t))&&!h[f]&&(t[f]=s[f],h[f]=!0);s=i!==!1&&Jh(s)}while(s&&(!i||i(s,t))&&s!==Object.prototype);return t},Z1=(s,t,i)=>{s=String(s),(i===void 0||i>s.length)&&(i=s.length),i-=t.length;const r=s.indexOf(t,i);return r!==-1&&r===i},K1=s=>{if(!s)return null;if(Fs(s))return s;let t=s.length;if(!z0(t))return null;const i=new Array(t);for(;t-- >0;)i[t]=s[t];return i},Q1=(s=>t=>s&&t instanceof s)(typeof Uint8Array<"u"&&Jh(Uint8Array)),J1=(s,t)=>{const r=(s&&s[Qu]).call(s);let l;for(;(l=r.next())&&!l.done;){const u=l.value;t.call(s,u[0],u[1])}},$1=(s,t)=>{let i;const r=[];for(;(i=s.exec(t))!==null;)r.push(i);return r},tR=Ci("HTMLFormElement"),eR=s=>s.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,r,l){return r.toUpperCase()+l}),Xv=(({hasOwnProperty:s})=>(t,i)=>s.call(t,i))(Object.prototype),nR=Ci("RegExp"),I0=(s,t)=>{const i=Object.getOwnPropertyDescriptors(s),r={};Qo(i,(l,u)=>{let f;(f=t(l,u,s))!==!1&&(r[u]=f||l)}),Object.defineProperties(s,r)},iR=s=>{I0(s,(t,i)=>{if(Wn(s)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const r=s[i];if(Wn(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},aR=(s,t)=>{const i={},r=l=>{l.forEach(u=>{i[u]=!0})};return Fs(s)?r(s):r(String(s).split(t)),i},rR=()=>{},sR=(s,t)=>s!=null&&Number.isFinite(s=+s)?s:t;function oR(s){return!!(s&&Wn(s.append)&&s[O0]==="FormData"&&s[Qu])}const lR=s=>{const t=new Array(10),i=(r,l)=>{if(Ko(r)){if(t.indexOf(r)>=0)return;if(Zo(r))return r;if(!("toJSON"in r)){t[l]=r;const u=Fs(r)?[]:{};return Qo(r,(f,h)=>{const m=i(f,l+1);!Os(m)&&(u[h]=m)}),t[l]=void 0,u}}return r};return i(s,0)},uR=Ci("AsyncFunction"),cR=s=>s&&(Ko(s)||Wn(s))&&Wn(s.then)&&Wn(s.catch),H0=((s,t)=>s?setImmediate:t?((i,r)=>(Ar.addEventListener("message",({source:l,data:u})=>{l===Ar&&u===i&&r.length&&r.shift()()},!1),l=>{r.push(l),Ar.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",Wn(Ar.postMessage)),fR=typeof queueMicrotask<"u"?queueMicrotask.bind(Ar):typeof process<"u"&&process.nextTick||H0,dR=s=>s!=null&&Wn(s[Qu]),rt={isArray:Fs,isArrayBuffer:P0,isBuffer:Zo,isFormData:F1,isArrayBufferView:A1,isString:R1,isNumber:z0,isBoolean:C1,isObject:Ko,isPlainObject:Hu,isEmptyObject:w1,isReadableStream:H1,isRequest:G1,isResponse:V1,isHeaders:k1,isUndefined:Os,isDate:D1,isFile:U1,isReactNativeBlob:L1,isReactNative:N1,isBlob:O1,isRegExp:nR,isFunction:Wn,isStream:z1,isURLSearchParams:I1,isTypedArray:Q1,isFileList:P1,forEach:Qo,merge:zh,extend:q1,trim:X1,stripBOM:W1,inherits:Y1,toFlatObject:j1,kindOf:Ju,kindOfTest:Ci,endsWith:Z1,toArray:K1,forEachEntry:J1,matchAll:$1,isHTMLForm:tR,hasOwnProperty:Xv,hasOwnProp:Xv,reduceDescriptors:I0,freezeMethods:iR,toObjectSet:aR,toCamelCase:eR,noop:rR,toFiniteNumber:sR,findKey:B0,global:Ar,isContextDefined:F0,isSpecCompliantForm:oR,toJSONObject:lR,isAsyncFn:uR,isThenable:cR,setImmediate:H0,asap:fR,isIterable:dR};let ee=class G0 extends Error{static from(t,i,r,l,u,f){const h=new G0(t.message,i||t.code,r,l,u);return h.cause=t,h.name=t.name,t.status!=null&&h.status==null&&(h.status=t.status),f&&Object.assign(h,f),h}constructor(t,i,r,l,u){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,i&&(this.code=i),r&&(this.config=r),l&&(this.request=l),u&&(this.response=u,this.status=u.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:rt.toJSONObject(this.config),code:this.code,status:this.status}}};ee.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ee.ERR_BAD_OPTION="ERR_BAD_OPTION";ee.ECONNABORTED="ECONNABORTED";ee.ETIMEDOUT="ETIMEDOUT";ee.ERR_NETWORK="ERR_NETWORK";ee.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ee.ERR_DEPRECATED="ERR_DEPRECATED";ee.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ee.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ee.ERR_CANCELED="ERR_CANCELED";ee.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ee.ERR_INVALID_URL="ERR_INVALID_URL";const hR=null;function Bh(s){return rt.isPlainObject(s)||rt.isArray(s)}function V0(s){return rt.endsWith(s,"[]")?s.slice(0,-2):s}function qd(s,t,i){return s?s.concat(t).map(function(l,u){return l=V0(l),!i&&u?"["+l+"]":l}).join(i?".":""):t}function pR(s){return rt.isArray(s)&&!s.some(Bh)}const mR=rt.toFlatObject(rt,{},null,function(t){return/^is[A-Z]/.test(t)});function tc(s,t,i){if(!rt.isObject(s))throw new TypeError("target must be an object");t=t||new FormData,i=rt.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(T,x){return!rt.isUndefined(x[T])});const r=i.metaTokens,l=i.visitor||g,u=i.dots,f=i.indexes,m=(i.Blob||typeof Blob<"u"&&Blob)&&rt.isSpecCompliantForm(t);if(!rt.isFunction(l))throw new TypeError("visitor must be a function");function p(M){if(M===null)return"";if(rt.isDate(M))return M.toISOString();if(rt.isBoolean(M))return M.toString();if(!m&&rt.isBlob(M))throw new ee("Blob is not supported. Use a Buffer instead.");return rt.isArrayBuffer(M)||rt.isTypedArray(M)?m&&typeof Blob=="function"?new Blob([M]):Buffer.from(M):M}function g(M,T,x){let S=M;if(rt.isReactNative(t)&&rt.isReactNativeBlob(M))return t.append(qd(x,T,u),p(M)),!1;if(M&&!x&&typeof M=="object"){if(rt.endsWith(T,"{}"))T=r?T:T.slice(0,-2),M=JSON.stringify(M);else if(rt.isArray(M)&&pR(M)||(rt.isFileList(M)||rt.endsWith(T,"[]"))&&(S=rt.toArray(M)))return T=V0(T),S.forEach(function(N,w){!(rt.isUndefined(N)||N===null)&&t.append(f===!0?qd([T],w,u):f===null?T:T+"[]",p(N))}),!1}return Bh(M)?!0:(t.append(qd(x,T,u),p(M)),!1)}const _=[],y=Object.assign(mR,{defaultVisitor:g,convertValue:p,isVisitable:Bh});function E(M,T){if(!rt.isUndefined(M)){if(_.indexOf(M)!==-1)throw Error("Circular reference detected in "+T.join("."));_.push(M),rt.forEach(M,function(S,B){(!(rt.isUndefined(S)||S===null)&&l.call(t,S,rt.isString(B)?B.trim():B,T,y))===!0&&E(S,T?T.concat(B):[B])}),_.pop()}}if(!rt.isObject(s))throw new TypeError("data must be an object");return E(s),t}function qv(s){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function $h(s,t){this._pairs=[],s&&tc(s,this,t)}const k0=$h.prototype;k0.append=function(t,i){this._pairs.push([t,i])};k0.toString=function(t){const i=t?function(r){return t.call(this,r,qv)}:qv;return this._pairs.map(function(l){return i(l[0])+"="+i(l[1])},"").join("&")};function gR(s){return encodeURIComponent(s).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function X0(s,t,i){if(!t)return s;const r=i&&i.encode||gR,l=rt.isFunction(i)?{serialize:i}:i,u=l&&l.serialize;let f;if(u?f=u(t,l):f=rt.isURLSearchParams(t)?t.toString():new $h(t,l).toString(r),f){const h=s.indexOf("#");h!==-1&&(s=s.slice(0,h)),s+=(s.indexOf("?")===-1?"?":"&")+f}return s}class Wv{constructor(){this.handlers=[]}use(t,i,r){return this.handlers.push({fulfilled:t,rejected:i,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){rt.forEach(this.handlers,function(r){r!==null&&t(r)})}}const tp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},_R=typeof URLSearchParams<"u"?URLSearchParams:$h,vR=typeof FormData<"u"?FormData:null,SR=typeof Blob<"u"?Blob:null,yR={isBrowser:!0,classes:{URLSearchParams:_R,FormData:vR,Blob:SR},protocols:["http","https","file","blob","url","data"]},ep=typeof window<"u"&&typeof document<"u",Fh=typeof navigator=="object"&&navigator||void 0,xR=ep&&(!Fh||["ReactNative","NativeScript","NS"].indexOf(Fh.product)<0),ER=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",MR=ep&&window.location.href||"http://localhost",TR=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ep,hasStandardBrowserEnv:xR,hasStandardBrowserWebWorkerEnv:ER,navigator:Fh,origin:MR},Symbol.toStringTag,{value:"Module"})),wn={...TR,...yR};function bR(s,t){return tc(s,new wn.classes.URLSearchParams,{visitor:function(i,r,l,u){return wn.isNode&&rt.isBuffer(i)?(this.append(r,i.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)},...t})}function AR(s){return rt.matchAll(/\w+|\[(\w*)]/g,s).map(t=>t[0]==="[]"?"":t[1]||t[0])}function RR(s){const t={},i=Object.keys(s);let r;const l=i.length;let u;for(r=0;r<l;r++)u=i[r],t[u]=s[u];return t}function q0(s){function t(i,r,l,u){let f=i[u++];if(f==="__proto__")return!0;const h=Number.isFinite(+f),m=u>=i.length;return f=!f&&rt.isArray(l)?l.length:f,m?(rt.hasOwnProp(l,f)?l[f]=[l[f],r]:l[f]=r,!h):((!l[f]||!rt.isObject(l[f]))&&(l[f]=[]),t(i,r,l[f],u)&&rt.isArray(l[f])&&(l[f]=RR(l[f])),!h)}if(rt.isFormData(s)&&rt.isFunction(s.entries)){const i={};return rt.forEachEntry(s,(r,l)=>{t(AR(r),l,i,0)}),i}return null}function CR(s,t,i){if(rt.isString(s))try{return(t||JSON.parse)(s),rt.trim(s)}catch(r){if(r.name!=="SyntaxError")throw r}return(i||JSON.stringify)(s)}const Jo={transitional:tp,adapter:["xhr","http","fetch"],transformRequest:[function(t,i){const r=i.getContentType()||"",l=r.indexOf("application/json")>-1,u=rt.isObject(t);if(u&&rt.isHTMLForm(t)&&(t=new FormData(t)),rt.isFormData(t))return l?JSON.stringify(q0(t)):t;if(rt.isArrayBuffer(t)||rt.isBuffer(t)||rt.isStream(t)||rt.isFile(t)||rt.isBlob(t)||rt.isReadableStream(t))return t;if(rt.isArrayBufferView(t))return t.buffer;if(rt.isURLSearchParams(t))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let h;if(u){if(r.indexOf("application/x-www-form-urlencoded")>-1)return bR(t,this.formSerializer).toString();if((h=rt.isFileList(t))||r.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return tc(h?{"files[]":t}:t,m&&new m,this.formSerializer)}}return u||l?(i.setContentType("application/json",!1),CR(t)):t}],transformResponse:[function(t){const i=this.transitional||Jo.transitional,r=i&&i.forcedJSONParsing,l=this.responseType==="json";if(rt.isResponse(t)||rt.isReadableStream(t))return t;if(t&&rt.isString(t)&&(r&&!this.responseType||l)){const f=!(i&&i.silentJSONParsing)&&l;try{return JSON.parse(t,this.parseReviver)}catch(h){if(f)throw h.name==="SyntaxError"?ee.from(h,ee.ERR_BAD_RESPONSE,this,null,this.response):h}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:wn.classes.FormData,Blob:wn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};rt.forEach(["delete","get","head","post","put","patch"],s=>{Jo.headers[s]={}});const wR=rt.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),DR=s=>{const t={};let i,r,l;return s&&s.split(`
`).forEach(function(f){l=f.indexOf(":"),i=f.substring(0,l).trim().toLowerCase(),r=f.substring(l+1).trim(),!(!i||t[i]&&wR[i])&&(i==="set-cookie"?t[i]?t[i].push(r):t[i]=[r]:t[i]=t[i]?t[i]+", "+r:r)}),t},Yv=Symbol("internals");function Io(s){return s&&String(s).trim().toLowerCase()}function Gu(s){return s===!1||s==null?s:rt.isArray(s)?s.map(Gu):String(s)}function UR(s){const t=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=i.exec(s);)t[r[1]]=r[2];return t}const LR=s=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());function Wd(s,t,i,r,l){if(rt.isFunction(r))return r.call(this,t,i);if(l&&(t=i),!!rt.isString(t)){if(rt.isString(r))return t.indexOf(r)!==-1;if(rt.isRegExp(r))return r.test(t)}}function NR(s){return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,i,r)=>i.toUpperCase()+r)}function OR(s,t){const i=rt.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(s,r+i,{value:function(l,u,f){return this[r].call(this,t,l,u,f)},configurable:!0})})}let Yn=class{constructor(t){t&&this.set(t)}set(t,i,r){const l=this;function u(h,m,p){const g=Io(m);if(!g)throw new Error("header name must be a non-empty string");const _=rt.findKey(l,g);(!_||l[_]===void 0||p===!0||p===void 0&&l[_]!==!1)&&(l[_||m]=Gu(h))}const f=(h,m)=>rt.forEach(h,(p,g)=>u(p,g,m));if(rt.isPlainObject(t)||t instanceof this.constructor)f(t,i);else if(rt.isString(t)&&(t=t.trim())&&!LR(t))f(DR(t),i);else if(rt.isObject(t)&&rt.isIterable(t)){let h={},m,p;for(const g of t){if(!rt.isArray(g))throw TypeError("Object iterator must return a key-value pair");h[p=g[0]]=(m=h[p])?rt.isArray(m)?[...m,g[1]]:[m,g[1]]:g[1]}f(h,i)}else t!=null&&u(i,t,r);return this}get(t,i){if(t=Io(t),t){const r=rt.findKey(this,t);if(r){const l=this[r];if(!i)return l;if(i===!0)return UR(l);if(rt.isFunction(i))return i.call(this,l,r);if(rt.isRegExp(i))return i.exec(l);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,i){if(t=Io(t),t){const r=rt.findKey(this,t);return!!(r&&this[r]!==void 0&&(!i||Wd(this,this[r],r,i)))}return!1}delete(t,i){const r=this;let l=!1;function u(f){if(f=Io(f),f){const h=rt.findKey(r,f);h&&(!i||Wd(r,r[h],h,i))&&(delete r[h],l=!0)}}return rt.isArray(t)?t.forEach(u):u(t),l}clear(t){const i=Object.keys(this);let r=i.length,l=!1;for(;r--;){const u=i[r];(!t||Wd(this,this[u],u,t,!0))&&(delete this[u],l=!0)}return l}normalize(t){const i=this,r={};return rt.forEach(this,(l,u)=>{const f=rt.findKey(r,u);if(f){i[f]=Gu(l),delete i[u];return}const h=t?NR(u):String(u).trim();h!==u&&delete i[u],i[h]=Gu(l),r[h]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const i=Object.create(null);return rt.forEach(this,(r,l)=>{r!=null&&r!==!1&&(i[l]=t&&rt.isArray(r)?r.join(", "):r)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,i])=>t+": "+i).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...i){const r=new this(t);return i.forEach(l=>r.set(l)),r}static accessor(t){const r=(this[Yv]=this[Yv]={accessors:{}}).accessors,l=this.prototype;function u(f){const h=Io(f);r[h]||(OR(l,f),r[h]=!0)}return rt.isArray(t)?t.forEach(u):u(t),this}};Yn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);rt.reduceDescriptors(Yn.prototype,({value:s},t)=>{let i=t[0].toUpperCase()+t.slice(1);return{get:()=>s,set(r){this[i]=r}}});rt.freezeMethods(Yn);function Yd(s,t){const i=this||Jo,r=t||i,l=Yn.from(r.headers);let u=r.data;return rt.forEach(s,function(h){u=h.call(i,u,l.normalize(),t?t.status:void 0)}),l.normalize(),u}function W0(s){return!!(s&&s.__CANCEL__)}let $o=class extends ee{constructor(t,i,r){super(t??"canceled",ee.ERR_CANCELED,i,r),this.name="CanceledError",this.__CANCEL__=!0}};function Y0(s,t,i){const r=i.config.validateStatus;!i.status||!r||r(i.status)?s(i):t(new ee("Request failed with status code "+i.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function PR(s){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(s);return t&&t[1]||""}function zR(s,t){s=s||10;const i=new Array(s),r=new Array(s);let l=0,u=0,f;return t=t!==void 0?t:1e3,function(m){const p=Date.now(),g=r[u];f||(f=p),i[l]=m,r[l]=p;let _=u,y=0;for(;_!==l;)y+=i[_++],_=_%s;if(l=(l+1)%s,l===u&&(u=(u+1)%s),p-f<t)return;const E=g&&p-g;return E?Math.round(y*1e3/E):void 0}}function BR(s,t){let i=0,r=1e3/t,l,u;const f=(p,g=Date.now())=>{i=g,l=null,u&&(clearTimeout(u),u=null),s(...p)};return[(...p)=>{const g=Date.now(),_=g-i;_>=r?f(p,g):(l=p,u||(u=setTimeout(()=>{u=null,f(l)},r-_)))},()=>l&&f(l)]}const Wu=(s,t,i=3)=>{let r=0;const l=zR(50,250);return BR(u=>{const f=u.loaded,h=u.lengthComputable?u.total:void 0,m=f-r,p=l(m),g=f<=h;r=f;const _={loaded:f,total:h,progress:h?f/h:void 0,bytes:m,rate:p||void 0,estimated:p&&h&&g?(h-f)/p:void 0,event:u,lengthComputable:h!=null,[t?"download":"upload"]:!0};s(_)},i)},jv=(s,t)=>{const i=s!=null;return[r=>t[0]({lengthComputable:i,total:s,loaded:r}),t[1]]},Zv=s=>(...t)=>rt.asap(()=>s(...t)),FR=wn.hasStandardBrowserEnv?((s,t)=>i=>(i=new URL(i,wn.origin),s.protocol===i.protocol&&s.host===i.host&&(t||s.port===i.port)))(new URL(wn.origin),wn.navigator&&/(msie|trident)/i.test(wn.navigator.userAgent)):()=>!0,IR=wn.hasStandardBrowserEnv?{write(s,t,i,r,l,u,f){if(typeof document>"u")return;const h=[`${s}=${encodeURIComponent(t)}`];rt.isNumber(i)&&h.push(`expires=${new Date(i).toUTCString()}`),rt.isString(r)&&h.push(`path=${r}`),rt.isString(l)&&h.push(`domain=${l}`),u===!0&&h.push("secure"),rt.isString(f)&&h.push(`SameSite=${f}`),document.cookie=h.join("; ")},read(s){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+s+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(s){this.write(s,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function HR(s){return typeof s!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)}function GR(s,t){return t?s.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):s}function j0(s,t,i){let r=!HR(t);return s&&(r||i==!1)?GR(s,t):t}const Kv=s=>s instanceof Yn?{...s}:s;function Ur(s,t){t=t||{};const i={};function r(p,g,_,y){return rt.isPlainObject(p)&&rt.isPlainObject(g)?rt.merge.call({caseless:y},p,g):rt.isPlainObject(g)?rt.merge({},g):rt.isArray(g)?g.slice():g}function l(p,g,_,y){if(rt.isUndefined(g)){if(!rt.isUndefined(p))return r(void 0,p,_,y)}else return r(p,g,_,y)}function u(p,g){if(!rt.isUndefined(g))return r(void 0,g)}function f(p,g){if(rt.isUndefined(g)){if(!rt.isUndefined(p))return r(void 0,p)}else return r(void 0,g)}function h(p,g,_){if(_ in t)return r(p,g);if(_ in s)return r(void 0,p)}const m={url:u,method:u,data:u,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:h,headers:(p,g,_)=>l(Kv(p),Kv(g),_,!0)};return rt.forEach(Object.keys({...s,...t}),function(g){if(g==="__proto__"||g==="constructor"||g==="prototype")return;const _=rt.hasOwnProp(m,g)?m[g]:l,y=_(s[g],t[g],g);rt.isUndefined(y)&&_!==h||(i[g]=y)}),i}const Z0=s=>{const t=Ur({},s);let{data:i,withXSRFToken:r,xsrfHeaderName:l,xsrfCookieName:u,headers:f,auth:h}=t;if(t.headers=f=Yn.from(f),t.url=X0(j0(t.baseURL,t.url,t.allowAbsoluteUrls),s.params,s.paramsSerializer),h&&f.set("Authorization","Basic "+btoa((h.username||"")+":"+(h.password?unescape(encodeURIComponent(h.password)):""))),rt.isFormData(i)){if(wn.hasStandardBrowserEnv||wn.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if(rt.isFunction(i.getHeaders)){const m=i.getHeaders(),p=["content-type","content-length"];Object.entries(m).forEach(([g,_])=>{p.includes(g.toLowerCase())&&f.set(g,_)})}}if(wn.hasStandardBrowserEnv&&(r&&rt.isFunction(r)&&(r=r(t)),r||r!==!1&&FR(t.url))){const m=l&&u&&IR.read(u);m&&f.set(l,m)}return t},VR=typeof XMLHttpRequest<"u",kR=VR&&function(s){return new Promise(function(i,r){const l=Z0(s);let u=l.data;const f=Yn.from(l.headers).normalize();let{responseType:h,onUploadProgress:m,onDownloadProgress:p}=l,g,_,y,E,M;function T(){E&&E(),M&&M(),l.cancelToken&&l.cancelToken.unsubscribe(g),l.signal&&l.signal.removeEventListener("abort",g)}let x=new XMLHttpRequest;x.open(l.method.toUpperCase(),l.url,!0),x.timeout=l.timeout;function S(){if(!x)return;const N=Yn.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),X={data:!h||h==="text"||h==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:N,config:s,request:x};Y0(function(P){i(P),T()},function(P){r(P),T()},X),x=null}"onloadend"in x?x.onloadend=S:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(S)},x.onabort=function(){x&&(r(new ee("Request aborted",ee.ECONNABORTED,s,x)),x=null)},x.onerror=function(w){const X=w&&w.message?w.message:"Network Error",I=new ee(X,ee.ERR_NETWORK,s,x);I.event=w||null,r(I),x=null},x.ontimeout=function(){let w=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded";const X=l.transitional||tp;l.timeoutErrorMessage&&(w=l.timeoutErrorMessage),r(new ee(w,X.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,s,x)),x=null},u===void 0&&f.setContentType(null),"setRequestHeader"in x&&rt.forEach(f.toJSON(),function(w,X){x.setRequestHeader(X,w)}),rt.isUndefined(l.withCredentials)||(x.withCredentials=!!l.withCredentials),h&&h!=="json"&&(x.responseType=l.responseType),p&&([y,M]=Wu(p,!0),x.addEventListener("progress",y)),m&&x.upload&&([_,E]=Wu(m),x.upload.addEventListener("progress",_),x.upload.addEventListener("loadend",E)),(l.cancelToken||l.signal)&&(g=N=>{x&&(r(!N||N.type?new $o(null,s,x):N),x.abort(),x=null)},l.cancelToken&&l.cancelToken.subscribe(g),l.signal&&(l.signal.aborted?g():l.signal.addEventListener("abort",g)));const B=PR(l.url);if(B&&wn.protocols.indexOf(B)===-1){r(new ee("Unsupported protocol "+B+":",ee.ERR_BAD_REQUEST,s));return}x.send(u||null)})},XR=(s,t)=>{const{length:i}=s=s?s.filter(Boolean):[];if(t||i){let r=new AbortController,l;const u=function(p){if(!l){l=!0,h();const g=p instanceof Error?p:this.reason;r.abort(g instanceof ee?g:new $o(g instanceof Error?g.message:g))}};let f=t&&setTimeout(()=>{f=null,u(new ee(`timeout of ${t}ms exceeded`,ee.ETIMEDOUT))},t);const h=()=>{s&&(f&&clearTimeout(f),f=null,s.forEach(p=>{p.unsubscribe?p.unsubscribe(u):p.removeEventListener("abort",u)}),s=null)};s.forEach(p=>p.addEventListener("abort",u));const{signal:m}=r;return m.unsubscribe=()=>rt.asap(h),m}},qR=function*(s,t){let i=s.byteLength;if(i<t){yield s;return}let r=0,l;for(;r<i;)l=r+t,yield s.slice(r,l),r=l},WR=async function*(s,t){for await(const i of YR(s))yield*qR(i,t)},YR=async function*(s){if(s[Symbol.asyncIterator]){yield*s;return}const t=s.getReader();try{for(;;){const{done:i,value:r}=await t.read();if(i)break;yield r}}finally{await t.cancel()}},Qv=(s,t,i,r)=>{const l=WR(s,t);let u=0,f,h=m=>{f||(f=!0,r&&r(m))};return new ReadableStream({async pull(m){try{const{done:p,value:g}=await l.next();if(p){h(),m.close();return}let _=g.byteLength;if(i){let y=u+=_;i(y)}m.enqueue(new Uint8Array(g))}catch(p){throw h(p),p}},cancel(m){return h(m),l.return()}},{highWaterMark:2})},Jv=64*1024,{isFunction:Lu}=rt,jR=(({Request:s,Response:t})=>({Request:s,Response:t}))(rt.global),{ReadableStream:$v,TextEncoder:t0}=rt.global,e0=(s,...t)=>{try{return!!s(...t)}catch{return!1}},ZR=s=>{s=rt.merge.call({skipUndefined:!0},jR,s);const{fetch:t,Request:i,Response:r}=s,l=t?Lu(t):typeof fetch=="function",u=Lu(i),f=Lu(r);if(!l)return!1;const h=l&&Lu($v),m=l&&(typeof t0=="function"?(M=>T=>M.encode(T))(new t0):async M=>new Uint8Array(await new i(M).arrayBuffer())),p=u&&h&&e0(()=>{let M=!1;const T=new i(wn.origin,{body:new $v,method:"POST",get duplex(){return M=!0,"half"}}).headers.has("Content-Type");return M&&!T}),g=f&&h&&e0(()=>rt.isReadableStream(new r("").body)),_={stream:g&&(M=>M.body)};l&&["text","arrayBuffer","blob","formData","stream"].forEach(M=>{!_[M]&&(_[M]=(T,x)=>{let S=T&&T[M];if(S)return S.call(T);throw new ee(`Response type '${M}' is not supported`,ee.ERR_NOT_SUPPORT,x)})});const y=async M=>{if(M==null)return 0;if(rt.isBlob(M))return M.size;if(rt.isSpecCompliantForm(M))return(await new i(wn.origin,{method:"POST",body:M}).arrayBuffer()).byteLength;if(rt.isArrayBufferView(M)||rt.isArrayBuffer(M))return M.byteLength;if(rt.isURLSearchParams(M)&&(M=M+""),rt.isString(M))return(await m(M)).byteLength},E=async(M,T)=>{const x=rt.toFiniteNumber(M.getContentLength());return x??y(T)};return async M=>{let{url:T,method:x,data:S,signal:B,cancelToken:N,timeout:w,onDownloadProgress:X,onUploadProgress:I,responseType:P,headers:Z,withCredentials:D="same-origin",fetchOptions:C}=Z0(M),G=t||fetch;P=P?(P+"").toLowerCase():"text";let lt=XR([B,N&&N.toAbortSignal()],w),at=null;const ht=lt&&lt.unsubscribe&&(()=>{lt.unsubscribe()});let _t;try{if(I&&p&&x!=="get"&&x!=="head"&&(_t=await E(Z,S))!==0){let L=new i(T,{method:"POST",body:S,duplex:"half"}),$;if(rt.isFormData(S)&&($=L.headers.get("content-type"))&&Z.setContentType($),L.body){const[St,Y]=jv(_t,Wu(Zv(I)));S=Qv(L.body,Jv,St,Y)}}rt.isString(D)||(D=D?"include":"omit");const O=u&&"credentials"in i.prototype,K={...C,signal:lt,method:x.toUpperCase(),headers:Z.normalize().toJSON(),body:S,duplex:"half",credentials:O?D:void 0};at=u&&new i(T,K);let q=await(u?G(at,C):G(T,K));const yt=g&&(P==="stream"||P==="response");if(g&&(X||yt&&ht)){const L={};["status","statusText","headers"].forEach(ft=>{L[ft]=q[ft]});const $=rt.toFiniteNumber(q.headers.get("content-length")),[St,Y]=X&&jv($,Wu(Zv(X),!0))||[];q=new r(Qv(q.body,Jv,St,()=>{Y&&Y(),ht&&ht()}),L)}P=P||"text";let Tt=await _[rt.findKey(_,P)||"text"](q,M);return!yt&&ht&&ht(),await new Promise((L,$)=>{Y0(L,$,{data:Tt,headers:Yn.from(q.headers),status:q.status,statusText:q.statusText,config:M,request:at})})}catch(O){throw ht&&ht(),O&&O.name==="TypeError"&&/Load failed|fetch/i.test(O.message)?Object.assign(new ee("Network Error",ee.ERR_NETWORK,M,at,O&&O.response),{cause:O.cause||O}):ee.from(O,O&&O.code,M,at,O&&O.response)}}},KR=new Map,K0=s=>{let t=s&&s.env||{};const{fetch:i,Request:r,Response:l}=t,u=[r,l,i];let f=u.length,h=f,m,p,g=KR;for(;h--;)m=u[h],p=g.get(m),p===void 0&&g.set(m,p=h?new Map:ZR(t)),g=p;return p};K0();const np={http:hR,xhr:kR,fetch:{get:K0}};rt.forEach(np,(s,t)=>{if(s){try{Object.defineProperty(s,"name",{value:t})}catch{}Object.defineProperty(s,"adapterName",{value:t})}});const n0=s=>`- ${s}`,QR=s=>rt.isFunction(s)||s===null||s===!1;function JR(s,t){s=rt.isArray(s)?s:[s];const{length:i}=s;let r,l;const u={};for(let f=0;f<i;f++){r=s[f];let h;if(l=r,!QR(r)&&(l=np[(h=String(r)).toLowerCase()],l===void 0))throw new ee(`Unknown adapter '${h}'`);if(l&&(rt.isFunction(l)||(l=l.get(t))))break;u[h||"#"+f]=l}if(!l){const f=Object.entries(u).map(([m,p])=>`adapter ${m} `+(p===!1?"is not supported by the environment":"is not available in the build"));let h=i?f.length>1?`since :
`+f.map(n0).join(`
`):" "+n0(f[0]):"as no adapter specified";throw new ee("There is no suitable adapter to dispatch the request "+h,"ERR_NOT_SUPPORT")}return l}const Q0={getAdapter:JR,adapters:np};function jd(s){if(s.cancelToken&&s.cancelToken.throwIfRequested(),s.signal&&s.signal.aborted)throw new $o(null,s)}function i0(s){return jd(s),s.headers=Yn.from(s.headers),s.data=Yd.call(s,s.transformRequest),["post","put","patch"].indexOf(s.method)!==-1&&s.headers.setContentType("application/x-www-form-urlencoded",!1),Q0.getAdapter(s.adapter||Jo.adapter,s)(s).then(function(r){return jd(s),r.data=Yd.call(s,s.transformResponse,r),r.headers=Yn.from(r.headers),r},function(r){return W0(r)||(jd(s),r&&r.response&&(r.response.data=Yd.call(s,s.transformResponse,r.response),r.response.headers=Yn.from(r.response.headers))),Promise.reject(r)})}const J0="1.13.6",ec={};["object","boolean","number","function","string","symbol"].forEach((s,t)=>{ec[s]=function(r){return typeof r===s||"a"+(t<1?"n ":" ")+s}});const a0={};ec.transitional=function(t,i,r){function l(u,f){return"[Axios v"+J0+"] Transitional option '"+u+"'"+f+(r?". "+r:"")}return(u,f,h)=>{if(t===!1)throw new ee(l(f," has been removed"+(i?" in "+i:"")),ee.ERR_DEPRECATED);return i&&!a0[f]&&(a0[f]=!0,console.warn(l(f," has been deprecated since v"+i+" and will be removed in the near future"))),t?t(u,f,h):!0}};ec.spelling=function(t){return(i,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function $R(s,t,i){if(typeof s!="object")throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(s);let l=r.length;for(;l-- >0;){const u=r[l],f=t[u];if(f){const h=s[u],m=h===void 0||f(h,u,s);if(m!==!0)throw new ee("option "+u+" must be "+m,ee.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new ee("Unknown option "+u,ee.ERR_BAD_OPTION)}}const Vu={assertOptions:$R,validators:ec},hi=Vu.validators;let Cr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Wv,response:new Wv}}async request(t,i){try{return await this._request(t,i)}catch(r){if(r instanceof Error){let l={};Error.captureStackTrace?Error.captureStackTrace(l):l=new Error;const u=l.stack?l.stack.replace(/^.+\n/,""):"";try{r.stack?u&&!String(r.stack).endsWith(u.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+u):r.stack=u}catch{}}throw r}}_request(t,i){typeof t=="string"?(i=i||{},i.url=t):i=t||{},i=Ur(this.defaults,i);const{transitional:r,paramsSerializer:l,headers:u}=i;r!==void 0&&Vu.assertOptions(r,{silentJSONParsing:hi.transitional(hi.boolean),forcedJSONParsing:hi.transitional(hi.boolean),clarifyTimeoutError:hi.transitional(hi.boolean),legacyInterceptorReqResOrdering:hi.transitional(hi.boolean)},!1),l!=null&&(rt.isFunction(l)?i.paramsSerializer={serialize:l}:Vu.assertOptions(l,{encode:hi.function,serialize:hi.function},!0)),i.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?i.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:i.allowAbsoluteUrls=!0),Vu.assertOptions(i,{baseUrl:hi.spelling("baseURL"),withXsrfToken:hi.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let f=u&&rt.merge(u.common,u[i.method]);u&&rt.forEach(["delete","get","head","post","put","patch","common"],M=>{delete u[M]}),i.headers=Yn.concat(f,u);const h=[];let m=!0;this.interceptors.request.forEach(function(T){if(typeof T.runWhen=="function"&&T.runWhen(i)===!1)return;m=m&&T.synchronous;const x=i.transitional||tp;x&&x.legacyInterceptorReqResOrdering?h.unshift(T.fulfilled,T.rejected):h.push(T.fulfilled,T.rejected)});const p=[];this.interceptors.response.forEach(function(T){p.push(T.fulfilled,T.rejected)});let g,_=0,y;if(!m){const M=[i0.bind(this),void 0];for(M.unshift(...h),M.push(...p),y=M.length,g=Promise.resolve(i);_<y;)g=g.then(M[_++],M[_++]);return g}y=h.length;let E=i;for(;_<y;){const M=h[_++],T=h[_++];try{E=M(E)}catch(x){T.call(this,x);break}}try{g=i0.call(this,E)}catch(M){return Promise.reject(M)}for(_=0,y=p.length;_<y;)g=g.then(p[_++],p[_++]);return g}getUri(t){t=Ur(this.defaults,t);const i=j0(t.baseURL,t.url,t.allowAbsoluteUrls);return X0(i,t.params,t.paramsSerializer)}};rt.forEach(["delete","get","head","options"],function(t){Cr.prototype[t]=function(i,r){return this.request(Ur(r||{},{method:t,url:i,data:(r||{}).data}))}});rt.forEach(["post","put","patch"],function(t){function i(r){return function(u,f,h){return this.request(Ur(h||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:u,data:f}))}}Cr.prototype[t]=i(),Cr.prototype[t+"Form"]=i(!0)});let tC=class $0{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(u){i=u});const r=this;this.promise.then(l=>{if(!r._listeners)return;let u=r._listeners.length;for(;u-- >0;)r._listeners[u](l);r._listeners=null}),this.promise.then=l=>{let u;const f=new Promise(h=>{r.subscribe(h),u=h}).then(l);return f.cancel=function(){r.unsubscribe(u)},f},t(function(u,f,h){r.reason||(r.reason=new $o(u,f,h),i(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const i=this._listeners.indexOf(t);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const t=new AbortController,i=r=>{t.abort(r)};return this.subscribe(i),t.signal.unsubscribe=()=>this.unsubscribe(i),t.signal}static source(){let t;return{token:new $0(function(l){t=l}),cancel:t}}};function eC(s){return function(i){return s.apply(null,i)}}function nC(s){return rt.isObject(s)&&s.isAxiosError===!0}const Ih={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ih).forEach(([s,t])=>{Ih[t]=s});function tS(s){const t=new Cr(s),i=N0(Cr.prototype.request,t);return rt.extend(i,Cr.prototype,t,{allOwnKeys:!0}),rt.extend(i,t,null,{allOwnKeys:!0}),i.create=function(l){return tS(Ur(s,l))},i}const We=tS(Jo);We.Axios=Cr;We.CanceledError=$o;We.CancelToken=tC;We.isCancel=W0;We.VERSION=J0;We.toFormData=tc;We.AxiosError=ee;We.Cancel=We.CanceledError;We.all=function(t){return Promise.all(t)};We.spread=eC;We.isAxiosError=nC;We.mergeConfig=Ur;We.AxiosHeaders=Yn;We.formToJSON=s=>q0(rt.isHTMLForm(s)?new FormData(s):s);We.getAdapter=Q0.getAdapter;We.HttpStatusCode=Ih;We.default=We;const{Axios:pC,AxiosError:mC,CanceledError:gC,isCancel:_C,CancelToken:vC,VERSION:SC,all:yC,Cancel:xC,isAxiosError:EC,spread:MC,toFormData:TC,AxiosHeaders:bC,HttpStatusCode:AC,formToJSON:RC,getAdapter:CC,mergeConfig:wC}=We;var eS={authUrl:"https://api.multiset.ai/v1/m2m/token",queryUrl:"https://api.multiset.ai/v1/vps/map/query-form",mapDetailsUrl:"https://api.multiset.ai/v1/vps/map/",mapSetDetailsUrl:"https://api.multiset.ai/v1/vps/map-set/",fileDownloadUrl:"https://api.multiset.ai/v1/file"},iC=class{constructor(s){this.config=s,this.accessToken=null,this.config=s,this.endpoints={...eS,...s.endpoints}}get token(){return this.accessToken}async authorize(){var s,t,i,r,l;try{const u=await We.post(this.endpoints.authUrl,{},{auth:{username:this.config.clientId,password:this.config.clientSecret}}),f=(i=(s=u.data)==null?void 0:s.token)!=null?i:(t=u.data)==null?void 0:t.access_token;if(!f)throw new Error("Authorization succeeded but no token was returned.");return this.accessToken=f,(l=(r=this.config).onAuthorize)==null||l.call(r,f),f}catch(u){throw this.handleError(u),u}}handleError(s){var t,i,r,l;if(We.isAxiosError(s)){const u=s;(i=(t=this.config).onError)==null||i.call(t,u)}else(l=(r=this.config).onError)==null||l.call(r,s)}async localizeWithFrame(s,t){var i,r,l,u,f,h,m;if(!this.accessToken)throw new Error("Access token is missing. Call authorize() first.");(r=(i=this.config).onFrameCaptured)==null||r.call(i,s),(u=(l=this.config).onCameraIntrinsics)==null||u.call(l,t);const p=await this.queryLocalization(s,t);return(f=p==null?void 0:p.localizeData)!=null&&f.poseFound&&((m=(h=this.config).onPoseResult)==null||m.call(h,p.localizeData)),p}async queryLocalization(s,t){var i;const r=new FormData;r.append("isRightHanded","true"),r.append("width",`${s.width}`),r.append("height",`${s.height}`),r.append("px",`${t.px}`),r.append("py",`${t.py}`),r.append("fx",`${t.fx}`),r.append("fy",`${t.fy}`),r.append("queryImage",s.blob),this.config.mapType==="map"?r.append("mapCode",this.config.code):r.append("mapSetCode",this.config.code);try{const u=(await We.post(this.endpoints.queryUrl,r,{headers:{Authorization:`Bearer ${this.accessToken}`}})).data;if(!u.poseFound)return null;const f={localizeData:u};if((i=u.mapIds)!=null&&i.length){const h=await this.fetchMapDetails(u.mapIds[0]);h&&(f.mapDetails=h)}return f}catch(l){return this.handleError(l),null}}async fetchMapDetails(s){try{return(await We.get(`${this.endpoints.mapDetailsUrl}${s}`,{headers:{Authorization:`Bearer ${this.accessToken}`}})).data}catch(t){return this.handleError(t),null}}async fetchMapSetDetails(s){try{return(await We.get(`${this.endpoints.mapSetDetailsUrl}${s}`,{headers:{Authorization:`Bearer ${this.accessToken}`}})).data}catch(t){return this.handleError(t),null}}};class aC{static createButton(t,i={}){const r=document.createElement("button");function l(){if(i.domOverlay===void 0){const y=document.createElement("div");y.style.display="none",document.body.appendChild(y);const E=document.createElementNS("http://www.w3.org/2000/svg","svg");E.setAttribute("width",38),E.setAttribute("height",38),E.style.position="absolute",E.style.right="20px",E.style.top="20px",E.addEventListener("click",function(){p.end()}),y.appendChild(E);const M=document.createElementNS("http://www.w3.org/2000/svg","path");M.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),M.setAttribute("stroke","#fff"),M.setAttribute("stroke-width",2),E.appendChild(M),i.optionalFeatures===void 0&&(i.optionalFeatures=[]),i.optionalFeatures.push("dom-overlay"),i.domOverlay={root:y}}let p=null;async function g(y){y.addEventListener("end",_),t.xr.setReferenceSpaceType("local"),await t.xr.setSession(y),r.textContent="STOP AR",i.domOverlay.root.style.display="",p=y}function _(){p.removeEventListener("end",_),r.textContent="START AR",i.domOverlay.root.style.display="none",p=null}r.style.display="",r.style.cursor="pointer",r.style.left="calc(50% - 50px)",r.style.width="100px",r.textContent="START AR",r.onmouseenter=function(){r.style.opacity="1.0"},r.onmouseleave=function(){r.style.opacity="0.5"},r.onclick=function(){p===null?navigator.xr.requestSession("immersive-ar",i).then(g):(p.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",i).then(g).catch(y=>{console.warn(y)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",i).then(g).catch(y=>{console.warn(y)})}function u(){r.style.display="",r.style.cursor="auto",r.style.left="calc(50% - 75px)",r.style.width="150px",r.onmouseenter=null,r.onmouseleave=null,r.onclick=null}function f(){u(),r.textContent="AR NOT SUPPORTED"}function h(p){u(),console.warn("Exception when trying to call xr.isSessionSupported",p),r.textContent="AR NOT ALLOWED"}function m(p){p.style.position="absolute",p.style.bottom="20px",p.style.padding="12px 6px",p.style.border="1px solid #fff",p.style.borderRadius="4px",p.style.background="rgba(0,0,0,0.1)",p.style.color="#fff",p.style.font="normal 13px sans-serif",p.style.textAlign="center",p.style.opacity="0.5",p.style.outline="none",p.style.zIndex="999"}if("xr"in navigator)return r.id="ARButton",r.style.display="none",m(r),navigator.xr.isSessionSupported("immersive-ar").then(function(p){p?l():f()}).catch(h),r;{const p=document.createElement("a");return window.isSecureContext===!1?(p.href=document.location.href.replace(/^http:/,"https:"),p.innerHTML="WEBXR NEEDS HTTPS"):(p.href="https://immersiveweb.dev/",p.innerHTML="WEBXR NOT AVAILABLE"),p.style.left="calc(50% - 90px)",p.style.width="180px",p.style.textDecoration="none",m(p),p}}}var rC=class{constructor(s){this.options=s,this.renderer=null,this.camera=null,this.scene=null,this.animationLoop=null,this.arButton=null,this.resizeHandler=null,this.isSessionActive=!1}async initialize(s){var t,i,r,l;if(this.renderer)return this.arButton;if(!window.isSecureContext)throw new Error("WebXR requires a secure context (HTTPS).");const u=(t=this.options.canvas)!=null?t:document.createElement("canvas"),f=new T1({canvas:u,antialias:!0,alpha:!0});f.setSize(window.innerWidth,window.innerHeight),f.setPixelRatio(window.devicePixelRatio),f.xr.enabled=!0,f.xr.addEventListener("sessionstart",()=>{var M,T;this.isSessionActive=!0,(T=(M=this.options).onSessionStart)==null||T.call(M)}),f.xr.addEventListener("sessionend",()=>{var M,T;this.isSessionActive=!1,(T=(M=this.options).onSessionEnd)==null||T.call(M)});const h=new mi(45,window.innerWidth/window.innerHeight,.2,1e4),m=new PE,p=()=>{f.render(m,h)};f.setAnimationLoop(p);const g=()=>{h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",g);const _=(i=this.options.overlayRoot)!=null?i:document.body,y=aC.createButton(f,{requiredFeatures:["camera-access","dom-overlay"],domOverlay:{root:_}}),E=s&&s instanceof HTMLElement?s:this.options.buttonContainer&&this.options.buttonContainer instanceof HTMLElement?this.options.buttonContainer:_;return E.contains(y)||E.appendChild(y),this.renderer=f,this.camera=h,this.scene=m,this.animationLoop=p,this.arButton=y,this.resizeHandler=g,(l=(r=this.options).onARButtonCreated)==null||l.call(r,y),y}getScene(){if(!this.scene)throw new Error("Scene: WebXR controller has not been initialized.");return this.scene}getCamera(){if(!this.camera)throw new Error("Camera: WebXR controller has not been initialized.");return this.camera}getRenderer(){if(!this.renderer)throw new Error("Renderer: WebXR controller has not been initialized.");return this.renderer}hasActiveSession(){var s;return this.isSessionActive&&((s=this.renderer)==null?void 0:s.xr.isPresenting)===!0}async captureFrame(){var s,t;const i=this.renderer,r=this.camera;if(!i||!r)throw new Error("WebXR: WebXR controller has not been initialized.");const l=(t=(s=i.xr).getSession)==null?void 0:t.call(s);if(!l)throw new Error("WebXR Session: No active WebXR session. Start AR before capturing.");const u=i.xr.getReferenceSpace();if(!u)throw new Error("WebXR Reference Space: Unable to acquire XR reference space.");const f=i.getContext();return new Promise((h,m)=>{l.requestAnimationFrame(async(p,g)=>{var _,y,E,M;try{const T=g.getViewerPose(u);if(!T){h(null);return}for(const x of T.views){const S=x.camera;if(!S)continue;const B=f,N=XRWebGLBinding,w=new N(l,B),X=(y=(_=w.getCameraImage)==null?void 0:_.call(w,S))!=null?y:null;if(!X)continue;const I=S.width,P=S.height;if(!I||!P)continue;const Z=await lC(i,X,I,P),D=sC(x.projectionMatrix,{width:I,height:P,x:0,y:0});if(Z&&D){const C=await this.options.client.localizeWithFrame(Z,D);h(C);return}}h(null)}catch(T){m(T)}finally{f.bindFramebuffer(f.FRAMEBUFFER,(M=(E=l.renderState.baseLayer)==null?void 0:E.framebuffer)!=null?M:null)}})})}dispose(){var s;this.resizeHandler&&window.removeEventListener("resize",this.resizeHandler),this.renderer&&(this.renderer.dispose(),this.renderer=null),this.animationLoop=null,this.camera=null,this.scene=null,(s=this.arButton)!=null&&s.parentElement&&this.arButton.parentElement.removeChild(this.arButton),this.arButton=null}};function sC(s,t){const i=s,r=(1-i[8])*t.width/2+t.x,l=(1-i[9])*t.height/2+t.y,u=t.width/2*i[0],f=t.height/2*i[5];return{fx:u,fy:f,px:r,py:l,width:t.width,height:t.height}}async function oC(s,t,i,r=.8){const l=document.createElement("canvas"),u=l.getContext("2d");l.width=t,l.height=i;const f=new ImageData(new Uint8ClampedArray(s),t,i);return u==null||u.putImageData(f,0,0),new Promise(h=>{l.toBlob(m=>h(m??new Blob),"image/jpeg",r)})}async function lC(s,t,i,r){const l=s.getContext();if(!l)return null;const u=l.createFramebuffer();if(!u)return null;l.bindFramebuffer(l.FRAMEBUFFER,u),l.framebufferTexture2D(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,t,0);const f=new Uint8Array(i*r*4);l.readPixels(0,0,i,r,l.RGBA,l.UNSIGNED_BYTE,f),l.bindFramebuffer(l.FRAMEBUFFER,null),l.deleteFramebuffer(u);const h=new Uint8ClampedArray(f.length);for(let p=0;p<r;p+=1){const g=p*i*4,_=(r-p-1)*i*4;h.set(f.subarray(g,g+i*4),_)}const m=await oC(h.buffer,i,r,.7);return m.size?{blob:m,width:i,height:r}:null}const uC={clientId:"969cfc38-b769-46ce-b8ba-2da9a65cc9d6",clientSecret:"07a20ad93977945ae4133d131f006fd8a6528cf53660f3e7c7929336871fda10",code:"MAP_837GA66GRXPB",mapType:"map"};function cC(){const[s,t]=kn.useState(!1),[i,r]=kn.useState(!1),[l,u]=kn.useState(!1),f=kn.useRef(null),h=kn.useRef(null),m=kn.useRef(null),p=kn.useRef(null),g=kn.useRef(null),_=kn.useRef(null),y=kn.useCallback(T=>{const S=`[${new Date().toISOString()}] ${T}`;m.current&&(m.current.textContent+=`
${S}`)},[]);kn.useEffect(()=>(p.current=new iC({...uC,endpoints:eS,onAuthorize:()=>y("Authorized"),onFrameCaptured:T=>y(`Frame captured ${T.width}x${T.height}`),onCameraIntrinsics:T=>y(`Intrinsics fx=${T.fx} fy=${T.fy}`),onPoseResult:T=>y(`Pose result: ${JSON.stringify(T)}`),onError:T=>y(`Error: ${T instanceof Error?T.message:String(T)}`)}),()=>{var T;(T=g.current)==null||T.dispose(),g.current=null}),[y]),kn.useEffect(()=>{if(!(!f.current||!p.current))return g.current=new rC({client:p.current,canvas:f.current,overlayRoot:document.body,buttonContainer:h.current??void 0,onARButtonCreated:T=>{y("AR button ready. Tap to start session.")},onSessionStart:()=>{y("AR session started"),r(!0)},onSessionEnd:()=>{y("AR session ended"),r(!1)}}),()=>{var T;(T=g.current)==null||T.dispose(),g.current=null}},[y]);const E=async()=>{try{if(!p.current||!g.current)return;await p.current.authorize();const T=h.current;if(!T)throw new Error("AR button container is not available");if(await g.current.initialize(T),!_.current){const x=g.current.getScene();g.current.getRenderer(),g.current.getCamera(),_.current=new zi(new zs(.1,.1,.1),new Kh({color:16711799})),_.current.position.set(0,0,-.4),x.add(_.current)}t(!0)}catch(T){y(`Authorization failed: ${T instanceof Error?T.message:String(T)}`)}},M=async()=>{u(!0);try{if(!g.current)return;const T=await g.current.captureFrame();y(`Capture result: ${T?JSON.stringify(T.localizeData):"No pose"}`)}catch(T){y(`Capture failed: ${T instanceof Error?T.message:String(T)}`)}finally{u(!1)}};return kn.useEffect(()=>{y("Demo ready. Click Authorize to begin.")},[y]),la.jsxs("div",{id:"app",children:[la.jsx("h1",{children:"Multiset SDK React Demo"}),!s&&la.jsx("button",{id:"authorize",onClick:E,children:"Authorize"}),la.jsx("div",{id:"ar-button-container",ref:h,style:{display:s?"block":"none"}}),i&&la.jsx("button",{id:"capture",onClick:M,disabled:l,children:l?"Localizing...":"Capture"}),la.jsx("pre",{id:"log",ref:m,style:{height:"400px",overflow:"auto"}}),la.jsx("canvas",{id:"xr-canvas",ref:f})]})}gx.createRoot(document.getElementById("root")).render(la.jsx(kn.StrictMode,{children:la.jsx(cC,{})}));
