/*! For license information please see f5e942ac.7eb6a3ae.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[350361],{344591:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var t=n(824246),o=n(511151);const c={id:"plugin-search-backend-node.indexbuilder",title:"IndexBuilder",description:"API reference for IndexBuilder"},s=void 0,i={id:"reference/plugin-search-backend-node.indexbuilder",title:"IndexBuilder",description:"API reference for IndexBuilder",source:"@site/../docs/reference/plugin-search-backend-node.indexbuilder.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-node.indexbuilder",permalink:"/docs/reference/plugin-search-backend-node.indexbuilder",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-node.indexbuilder.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-node.indexbuilder",title:"IndexBuilder",description:"API reference for IndexBuilder"}},u={},a=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-search-backend-node"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node.indexbuilder",children:(0,t.jsx)(r.code,{children:"IndexBuilder"})})]}),"\n",(0,t.jsx)(r.p,{children:"Used for adding collators, decorators and compile them into tasks which are added to a scheduler returned to the caller."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class IndexBuilder \n"})}),"\n",(0,t.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Constructor"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node.indexbuilder._constructor_",children:"(constructor)(options)"})}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:["Constructs a new instance of the ",(0,t.jsx)(r.code,{children:"IndexBuilder"})," class"]})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Method"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node.indexbuilder.addcollator",children:"addCollator(options)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Makes the index builder aware of a collator that should be executed at the given refresh interval."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node.indexbuilder.adddecorator",children:"addDecorator(options)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Makes the index builder aware of a decorator. If no types are provided on the decorator, it will be applied to documents from all known collators, otherwise it will only be applied to documents of the given types."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node.indexbuilder.build",children:"build()"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Compiles collators and decorators into tasks, which are added to a scheduler returned to the caller."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node.indexbuilder.getdocumenttypes",children:"getDocumentTypes()"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Responsible for returning the registered document types."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node.indexbuilder.getsearchengine",children:"getSearchEngine()"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Responsible for returning the registered search engine."})]})]})]})]})}function d(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},371426:(e,r,n)=>{var t=n(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var t,c={},a=null,l=null;for(t in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,t)&&!u.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:o,type:e,key:a,ref:l,props:c,_owner:i.current}}r.Fragment=c,r.jsx=a,r.jsxs=a},541535:(e,r)=>{var n=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,x={};function b(e,r,n){this.props=e,this.context=r,this.refs=x,this.updater=n||p}function j(){}function m(e,r,n){this.props=e,this.context=r,this.refs=x,this.updater=n||p}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=b.prototype;var _=m.prototype=new j;_.constructor=m,y(_,b.prototype),_.isPureReactComponent=!0;var g=Array.isArray,v=Object.prototype.hasOwnProperty,k={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var o,c={},s=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(s=""+r.key),r)v.call(r,o)&&!S.hasOwnProperty(o)&&(c[o]=r[o]);var u=arguments.length-2;if(1===u)c.children=t;else if(1<u){for(var a=Array(u),l=0;l<u;l++)a[l]=arguments[l+2];c.children=a}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===c[o]&&(c[o]=u[o]);return{$$typeof:n,type:e,key:s,ref:i,props:c,_owner:k.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function I(e,r,o,c,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case t:u=!0}}if(u)return s=s(u=e),e=""===c?"."+R(u,0):c,g(s)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),I(s,r,o,"",(function(e){return e}))):null!=s&&(C(s)&&(s=function(e,r){return{$$typeof:n,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),r.push(s)),1;if(u=0,c=""===c?".":c+":",g(e))for(var a=0;a<e.length;a++){var l=c+R(i=e[a],a);u+=I(i,r,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(i=e.next()).done;)u+=I(i=i.value,r,o,l=c+R(i,a++),s);else if("object"===i)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return u}function $(e,r,n){if(null==e)return e;var t=[],o=0;return I(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},M={transition:null},D={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:M,ReactCurrentOwner:k};function B(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:$,forEach:function(e,r,n){$(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=b,r.Fragment=o,r.Profiler=s,r.PureComponent=m,r.StrictMode=c,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,r.act=B,r.cloneElement=function(e,r,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),c=e.key,s=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,i=k.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in r)v.call(r,a)&&!S.hasOwnProperty(a)&&(o[a]=void 0===r[a]&&void 0!==u?u[a]:r[a])}var a=arguments.length-2;if(1===a)o.children=t;else if(1<a){u=Array(a);for(var l=0;l<a;l++)u[l]=arguments[l+2];o.children=u}return{$$typeof:n,type:e.type,key:c,ref:s,props:o,_owner:i}},r.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=w,r.createFactory=function(e){var r=w.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=C,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=M.transition;M.transition={};try{e()}finally{M.transition=r}},r.unstable_act=B,r.useCallback=function(e,r){return P.current.useCallback(e,r)},r.useContext=function(e){return P.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return P.current.useDeferredValue(e)},r.useEffect=function(e,r){return P.current.useEffect(e,r)},r.useId=function(){return P.current.useId()},r.useImperativeHandle=function(e,r,n){return P.current.useImperativeHandle(e,r,n)},r.useInsertionEffect=function(e,r){return P.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return P.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return P.current.useMemo(e,r)},r.useReducer=function(e,r,n){return P.current.useReducer(e,r,n)},r.useRef=function(e){return P.current.useRef(e)},r.useState=function(e){return P.current.useState(e)},r.useSyncExternalStore=function(e,r,n){return P.current.useSyncExternalStore(e,r,n)},r.useTransition=function(){return P.current.useTransition()},r.version="18.3.1"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>s});var t=n(667294);const o={},c=t.createContext(o);function s(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);