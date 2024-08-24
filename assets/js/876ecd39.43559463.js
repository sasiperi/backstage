/*! For license information please see 876ecd39.43559463.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[220734],{514446:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(824246),o=r(511151);const a={id:"plugin-catalog-backend.defaultcatalogcollator.type",title:"DefaultCatalogCollator.type",description:"API reference for DefaultCatalogCollator.type"},u=void 0,c={id:"reference/plugin-catalog-backend.defaultcatalogcollator.type",title:"DefaultCatalogCollator.type",description:"API reference for DefaultCatalogCollator.type",source:"@site/../docs/reference/plugin-catalog-backend.defaultcatalogcollator.type.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend.defaultcatalogcollator.type",permalink:"/docs/reference/plugin-catalog-backend.defaultcatalogcollator.type",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend.defaultcatalogcollator.type.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend.defaultcatalogcollator.type",title:"DefaultCatalogCollator.type",description:"API reference for DefaultCatalogCollator.type"}},l={},i=[];function s(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.defaultcatalogcollator",children:(0,n.jsx)(t.code,{children:"DefaultCatalogCollator"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.defaultcatalogcollator.type",children:(0,n.jsx)(t.code,{children:"type"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"readonly type: string;\n"})})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,a={},i=null,s=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(s=t.ref),t)u.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:c.current}}t.Fragment=a,t.jsx=i,t.jsxs=i},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function _(){}function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=m.prototype;var v=b.prototype=new _;v.constructor=b,g(v,m.prototype),v.isPureReactComponent=!0;var k=Array.isArray,C=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var o,a={},u=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)C.call(t,o)&&!j.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var i=Array(l),s=0;s<l;s++)i[s]=arguments[s+2];a.children=i}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:r,type:e,key:u,ref:c,props:a,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var w=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,a,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return u=u(l=e),e=""===a?"."+R(l,0):a,k(u)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),$(u,t,o,"",(function(e){return e}))):null!=u&&(E(u)&&(u=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||l&&l.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),t.push(u)),1;if(l=0,a=""===a?".":a+":",k(e))for(var i=0;i<e.length;i++){var s=a+R(c=e[i],i);l+=$(c,t,o,s,u)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),i=0;!(c=e.next()).done;)l+=$(c=c.value,t,o,s=a+R(c,i++),u);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},I={transition:null},T={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};function A(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=u,t.PureComponent=b,t.StrictMode=a,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.act=A,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),a=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(i in t)C.call(t,i)&&!j.hasOwnProperty(i)&&(o[i]=void 0===t[i]&&void 0!==l?l[i]:t[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){l=Array(i);for(var s=0;s<i;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:r,type:e.type,key:a,ref:u,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=A,t.useCallback=function(e,t){return D.current.useCallback(e,t)},t.useContext=function(e){return D.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return D.current.useDeferredValue(e)},t.useEffect=function(e,t){return D.current.useEffect(e,t)},t.useId=function(){return D.current.useId()},t.useImperativeHandle=function(e,t,r){return D.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return D.current.useMemo(e,t)},t.useReducer=function(e,t,r){return D.current.useReducer(e,t,r)},t.useRef=function(e){return D.current.useRef(e)},t.useState=function(e){return D.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return D.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return D.current.useTransition()},t.version="18.3.1"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>u});var n=r(667294);const o={},a=n.createContext(o);function u(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);