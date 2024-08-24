/*! For license information please see 5d2f311e.9e508099.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[877441],{389997:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(824246),a=r(511151);const o={id:"plugin-kubernetes-backend.awsiamstrategy.presentauthmetadata",title:"AwsIamStrategy.presentAuthMetadata()",description:"API reference for AwsIamStrategy.presentAuthMetadata()"},u=void 0,s={id:"reference/plugin-kubernetes-backend.awsiamstrategy.presentauthmetadata",title:"AwsIamStrategy.presentAuthMetadata()",description:"API reference for AwsIamStrategy.presentAuthMetadata()",source:"@site/../docs/reference/plugin-kubernetes-backend.awsiamstrategy.presentauthmetadata.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-backend.awsiamstrategy.presentauthmetadata",permalink:"/docs/reference/plugin-kubernetes-backend.awsiamstrategy.presentauthmetadata",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-backend.awsiamstrategy.presentauthmetadata.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-backend.awsiamstrategy.presentauthmetadata",title:"AwsIamStrategy.presentAuthMetadata()",description:"API reference for AwsIamStrategy.presentAuthMetadata()"}},c={},i=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-backend",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-kubernetes-backend"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-backend.awsiamstrategy",children:(0,n.jsx)(t.code,{children:"AwsIamStrategy"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-backend.awsiamstrategy.presentauthmetadata",children:(0,n.jsx)(t.code,{children:"presentAuthMetadata"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"presentAuthMetadata(_authMetadata: AuthMetadata): AuthMetadata;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_authMetadata"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-node.authmetadata",children:"AuthMetadata"})}),(0,n.jsx)(t.td,{})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-node.authmetadata",children:"AuthMetadata"})})]})}function f(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,t,r)=>{var n=r(827378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,o={},i=null,l=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:s.current}}t.Fragment=o,t.jsx=i,t.jsxs=i},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}function _(){}function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=b.prototype;var k=g.prototype=new _;k.constructor=g,y(k,b.prototype),k.isPureReactComponent=!0;var v=Array.isArray,j=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var a,o={},u=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(u=""+t.key),t)j.call(t,a)&&!S.hasOwnProperty(a)&&(o[a]=t[a]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var i=Array(c),l=0;l<c;l++)i[l]=arguments[l+2];o.children=i}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===o[a]&&(o[a]=c[a]);return{$$typeof:r,type:e,key:u,ref:s,props:o,_owner:x.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var A=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,a,o,u){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return u=u(c=e),e=""===o?"."+R(c,0):o,v(u)?(a="",null!=e&&(a=e.replace(A,"$&/")+"/"),C(u,t,a,"",(function(e){return e}))):null!=u&&(E(u)&&(u=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,a+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(A,"$&/")+"/")+e)),t.push(u)),1;if(c=0,o=""===o?".":o+":",v(e))for(var i=0;i<e.length;i++){var l=o+R(s=e[i],i);c+=C(s,t,a,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(s=e.next()).done;)c+=C(s=s.value,t,a,l=o+R(s,i++),u);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,t,r){if(null==e)return e;var n=[],a=0;return C(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},M={transition:null},O={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:M,ReactCurrentOwner:x};function T(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=a,t.Profiler=u,t.PureComponent=g,t.StrictMode=o,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.act=T,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=y({},e.props),o=e.key,u=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,s=x.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(i in t)j.call(t,i)&&!S.hasOwnProperty(i)&&(a[i]=void 0===t[i]&&void 0!==c?c[i]:t[i])}var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){c=Array(i);for(var l=0;l<i;l++)c[l]=arguments[l+2];a.children=c}return{$$typeof:r,type:e.type,key:o,ref:u,props:a,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},t.unstable_act=T,t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return I.current.useTransition()},t.version="18.3.1"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>u});var n=r(667294);const a={},o=n.createContext(a);function u(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:u(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);