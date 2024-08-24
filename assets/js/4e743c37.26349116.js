/*! For license information please see 4e743c37.26349116.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[209113],{379706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var n=r(824246),o=r(511151);const s={id:"user-info",title:"User Info Service",sidebar_label:"User Info",description:"Documentation for the User Info service"},c=void 0,i={id:"backend-system/core-services/user-info",title:"User Info Service",description:"Documentation for the User Info service",source:"@site/../docs/backend-system/core-services/user-info.md",sourceDirName:"backend-system/core-services",slug:"/backend-system/core-services/user-info",permalink:"/docs/backend-system/core-services/user-info",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/core-services/user-info.md",tags:[],version:"current",frontMatter:{id:"user-info",title:"User Info Service",sidebar_label:"User Info",description:"Documentation for the User Info service"},sidebar:"docs",previous:{title:"Url Reader",permalink:"/docs/backend-system/core-services/url-reader"},next:{title:"Introduction",permalink:"/docs/frontend-system/"}},u={},a=[{value:"Using the Service",id:"using-the-service",level:2},{value:"Getting User Info",id:"getting-user-info",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This service lets you extract more information about a set of user credentials.\nSpecifically, it can be used to extract the ownership entity refs for a user\nprincipal."}),"\n",(0,n.jsxs)(t.p,{children:["See also the ",(0,n.jsx)(t.a,{href:"/docs/backend-system/core-services/auth",children:(0,n.jsx)(t.code,{children:"auth"})})," and ",(0,n.jsx)(t.a,{href:"/docs/backend-system/core-services/http-auth",children:(0,n.jsx)(t.code,{children:"httpAuth"})})," services for\ngeneral credentials handling."]}),"\n",(0,n.jsx)(t.h2,{id:"using-the-service",children:"Using the Service"}),"\n",(0,n.jsxs)(t.p,{children:["In the following code examples, the ",(0,n.jsx)(t.code,{children:"userInfo"}),", ",(0,n.jsx)(t.code,{children:"auth"}),", and ",(0,n.jsx)(t.code,{children:"httpAuth"})," variables are assumed\nto be dependency-injected instances of the ",(0,n.jsx)(t.code,{children:"coreServices.userInfo"})," and\n",(0,n.jsx)(t.code,{children:"coreServices.httpAuth"})," service, respectively. For a backend plugin, it might\nlook like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"export default createBackendPlugin({\n  pluginId: 'my-plugin',\n  register(env) {\n    env.registerInit({\n      deps: {\n        auth: coreServices.auth,\n        httpAuth: coreServices.httpAuth,\n        httpRouter: coreServices.httpRouter,\n        userInfo: coreServices.userInfo,\n      },\n      async init({ auth, httpAuth, httpRouter, userInfo }) {\n        // Your code goes here\n      },\n    });\n  },\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"getting-user-info",children:"Getting User Info"}),"\n",(0,n.jsx)(t.p,{children:"This example extracts some user credentials out of a request and fetches\nadditional information about that principal."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"router.get('/some-request', async (req, res) => {\n  const credentials = await httpAuth.credentials(req, { allow: ['user'] });\n  const info = await userInfo.getUserInfo(credentials);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"userInfo"})," service only deals with credentials that contain user principals,\nit won't accept requests for service principals. In our example code the initial\ncredentials extraction limits it to user credentials upfront. If you have an\nendpoint that allows both user and service credentials, you may want to wrap\nyour user info extraction in a principal type check:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"router.get('/some-request', async (req, res) => {\n  const credentials = await httpAuth.credentials(req);\n  if (auth.isPrincipal(credentials, 'user')) {\n    const info = await userInfo.getUserInfo(credentials);\n    // ...\n"})}),"\n",(0,n.jsx)(t.p,{children:"The user info contains data that was extracted during sign-in for the given\nuser."})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,s={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,n)&&!u.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:l,props:s,_owner:i.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}function b(){}function _(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var g=_.prototype=new b;g.constructor=_,y(g,v.prototype),g.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var o,s={},c=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)S.call(t,o)&&!j.hasOwnProperty(o)&&(s[o]=t[o]);var u=arguments.length-2;if(1===u)s.children=n;else if(1<u){for(var a=Array(u),l=0;l<u;l++)a[l]=arguments[l+2];s.children=a}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===s[o]&&(s[o]=u[o]);return{$$typeof:r,type:e,key:c,ref:i,props:s,_owner:k.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,s,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0}}if(u)return c=c(u=e),e=""===s?"."+R(u,0):s,x(c)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),C(c,t,o,"",(function(e){return e}))):null!=c&&(I(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(E,"$&/")+"/")+e)),t.push(c)),1;if(u=0,s=""===s?".":s+":",x(e))for(var a=0;a<e.length;a++){var l=s+R(i=e[a],a);u+=C(i,t,o,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(i=e.next()).done;)u+=C(i=i.value,t,o,l=s+R(i,a++),c);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function $(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function U(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},P={transition:null},A={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:P,ReactCurrentOwner:k};function T(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!I(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=c,t.PureComponent=_,t.StrictMode=s,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.act=T,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),s=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=k.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)S.call(t,a)&&!j.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==u?u[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){u=Array(a);for(var l=0;l<a;l++)u[l]=arguments[l+2];o.children=u}return{$$typeof:r,type:e.type,key:s,ref:c,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=I,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:U}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=P.transition;P.transition={};try{e()}finally{P.transition=t}},t.unstable_act=T,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,r){return O.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,r){return O.current.useReducer(e,t,r)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return O.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>c});var n=r(667294);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);