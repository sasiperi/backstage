/*! For license information please see fab25c7e.7cd134f0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[918945],{690611:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>u,metadata:()=>s,toc:()=>i});var n=t(824246),o=t(511151);const u={id:"plugin-kubernetes-react.kubernetesdrawerprops.open",title:"KubernetesDrawerProps.open",description:"API reference for KubernetesDrawerProps.open"},c=void 0,s={id:"reference/plugin-kubernetes-react.kubernetesdrawerprops.open",title:"KubernetesDrawerProps.open",description:"API reference for KubernetesDrawerProps.open",source:"@site/../docs/reference/plugin-kubernetes-react.kubernetesdrawerprops.open.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-react.kubernetesdrawerprops.open",permalink:"/docs/reference/plugin-kubernetes-react.kubernetesdrawerprops.open",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-react.kubernetesdrawerprops.open.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-react.kubernetesdrawerprops.open",title:"KubernetesDrawerProps.open",description:"API reference for KubernetesDrawerProps.open"}},a={},i=[];function f(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-kubernetes-react"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesdrawerprops",children:(0,n.jsx)(r.code,{children:"KubernetesDrawerProps"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesdrawerprops.open",children:(0,n.jsx)(r.code,{children:"open"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"open?: boolean;\n"})})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,u={},i=null,f=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(f=r.ref),r)c.call(r,n)&&!a.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:f,props:u,_owner:s.current}}r.Fragment=u,r.jsx=i,r.jsxs=i},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,h={};function m(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function _(){}function k(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=m.prototype;var v=k.prototype=new _;v.constructor=k,b(v,m.prototype),v.isPureReactComponent=!0;var w=Array.isArray,g=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,n){var o,u={},c=null,s=null;if(null!=r)for(o in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(c=""+r.key),r)g.call(r,o)&&!j.hasOwnProperty(o)&&(u[o]=r[o]);var a=arguments.length-2;if(1===a)u.children=n;else if(1<a){for(var i=Array(a),f=0;f<a;f++)i[f]=arguments[f+2];u.children=i}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===u[o]&&(u[o]=a[o]);return{$$typeof:t,type:e,key:c,ref:s,props:u,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var P=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,o,u,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case t:case n:a=!0}}if(a)return c=c(a=e),e=""===u?"."+R(a,0):u,w(c)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),C(c,r,o,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+e)),r.push(c)),1;if(a=0,u=""===u?".":u+":",w(e))for(var i=0;i<e.length;i++){var f=u+R(s=e[i],i);a+=C(s,r,o,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),i=0;!(s=e.next()).done;)a+=C(s=s.value,r,o,f=u+R(s,i++),c);else if("object"===s)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function $(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},I={transition:null},T={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};function A(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=m,r.Fragment=o,r.Profiler=c,r.PureComponent=k,r.StrictMode=u,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.act=A,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=b({},e.props),u=e.key,c=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,s=S.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(i in r)g.call(r,i)&&!j.hasOwnProperty(i)&&(o[i]=void 0===r[i]&&void 0!==a?a[i]:r[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){a=Array(i);for(var f=0;f<i;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:t,type:e.type,key:u,ref:c,props:o,_owner:s}},r.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=A,r.useCallback=function(e,r){return D.current.useCallback(e,r)},r.useContext=function(e){return D.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return D.current.useDeferredValue(e)},r.useEffect=function(e,r){return D.current.useEffect(e,r)},r.useId=function(){return D.current.useId()},r.useImperativeHandle=function(e,r,t){return D.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return D.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return D.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return D.current.useMemo(e,r)},r.useReducer=function(e,r,t){return D.current.useReducer(e,r,t)},r.useRef=function(e){return D.current.useRef(e)},r.useState=function(e){return D.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return D.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return D.current.useTransition()},r.version="18.3.1"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>c});var n=t(667294);const o={},u=n.createContext(o);function c(e){const r=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(u.Provider,{value:r},e.children)}}}]);