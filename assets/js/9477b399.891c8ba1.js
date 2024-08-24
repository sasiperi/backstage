/*! For license information please see 9477b399.891c8ba1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[499396],{961183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(824246),u=r(511151);const o={id:"plugin-kubernetes-backend.kubernetesbuilder.setdefaultclusterrefreshinterval",title:"KubernetesBuilder.setDefaultClusterRefreshInterval()",description:"API reference for KubernetesBuilder.setDefaultClusterRefreshInterval()"},s=void 0,c={id:"reference/plugin-kubernetes-backend.kubernetesbuilder.setdefaultclusterrefreshinterval",title:"KubernetesBuilder.setDefaultClusterRefreshInterval()",description:"API reference for KubernetesBuilder.setDefaultClusterRefreshInterval()",source:"@site/../docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setdefaultclusterrefreshinterval.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-backend.kubernetesbuilder.setdefaultclusterrefreshinterval",permalink:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setdefaultclusterrefreshinterval",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setdefaultclusterrefreshinterval.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-backend.kubernetesbuilder.setdefaultclusterrefreshinterval",title:"KubernetesBuilder.setDefaultClusterRefreshInterval()",description:"API reference for KubernetesBuilder.setDefaultClusterRefreshInterval()"}},a={},l=[{value:"Parameters",id:"parameters",level:2}];function i(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,u.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-backend",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-kubernetes-backend"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder",children:(0,n.jsx)(t.code,{children:"KubernetesBuilder"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setdefaultclusterrefreshinterval",children:(0,n.jsx)(t.code,{children:"setDefaultClusterRefreshInterval"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"setDefaultClusterRefreshInterval(refreshInterval: Duration): this;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"refreshInterval"}),(0,n.jsx)(t.td,{children:"Duration"}),(0,n.jsx)(t.td,{})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"this"})]})}function f(e={}){const{wrapper:t}={...(0,u.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},371426:(e,t,r)=>{var n=r(827378),u=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,i=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(i=t.ref),t)s.call(t,n)&&!a.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:u,type:e,key:l,ref:i,props:o,_owner:c.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,b={};function v(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||h}function m(){}function _(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=v.prototype;var k=_.prototype=new m;k.constructor=_,y(k,v.prototype),k.isPureReactComponent=!0;var j=Array.isArray,x=Object.prototype.hasOwnProperty,g={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var u,o={},s=null,c=null;if(null!=t)for(u in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(s=""+t.key),t)x.call(t,u)&&!S.hasOwnProperty(u)&&(o[u]=t[u]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var l=Array(a),i=0;i<a;i++)l[i]=arguments[i+2];o.children=l}if(e&&e.defaultProps)for(u in a=e.defaultProps)void 0===o[u]&&(o[u]=a[u]);return{$$typeof:r,type:e,key:s,ref:c,props:o,_owner:g.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(e,t,u,o,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case n:a=!0}}if(a)return s=s(a=e),e=""===o?"."+w(a,0):o,j(s)?(u="",null!=e&&(u=e.replace(E,"$&/")+"/"),I(s,t,u,"",(function(e){return e}))):null!=s&&(C(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,u+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),t.push(s)),1;if(a=0,o=""===o?".":o+":",j(e))for(var l=0;l<e.length;l++){var i=o+w(c=e[l],l);a+=I(c,t,u,i,s)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),l=0;!(c=e.next()).done;)a+=I(c=c.value,t,u,i=o+w(c,l++),s);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function $(e,t,r){if(null==e)return e;var n=[],u=0;return I(e,n,"","",(function(e){return t.call(r,e,u++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},D={transition:null},T={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:D,ReactCurrentOwner:g};function A(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=u,t.Profiler=s,t.PureComponent=_,t.StrictMode=o,t.Suspense=i,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.act=A,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=y({},e.props),o=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=g.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)x.call(t,l)&&!S.hasOwnProperty(l)&&(u[l]=void 0===t[l]&&void 0!==a?a[l]:t[l])}var l=arguments.length-2;if(1===l)u.children=n;else if(1<l){a=Array(l);for(var i=0;i<l;i++)a[i]=arguments[i+2];u.children=a}return{$$typeof:r,type:e.type,key:o,ref:s,props:u,_owner:c}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=R,t.createFactory=function(e){var t=R.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=A,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,r){return O.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,r){return O.current.useReducer(e,t,r)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return O.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>s});var n=r(667294);const u={},o=n.createContext(u);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(u):e.components||u:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);