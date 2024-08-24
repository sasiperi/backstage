/*! For license information please see 1f8d1f1e.6def1b8a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[490293],{733327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(824246),o=n(511151);const a={id:"koyeb",title:"Deploying with Koyeb",sidebar_label:"Koyeb",description:"How to deploy Backstage to Koyeb"},u=void 0,i={id:"deployment/koyeb",title:"Deploying with Koyeb",description:"How to deploy Backstage to Koyeb",source:"@site/../docs/deployment/koyeb.md",sourceDirName:"deployment",slug:"/deployment/koyeb",permalink:"/docs/deployment/koyeb",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/deployment/koyeb.md",tags:[],version:"current",frontMatter:{id:"koyeb",title:"Deploying with Koyeb",sidebar_label:"Koyeb",description:"How to deploy Backstage to Koyeb"},sidebar:"docs",previous:{title:"Heroku",permalink:"/docs/deployment/heroku"},next:{title:"AWS Fargate via Flightcontrol",permalink:"/docs/deployment/flightcontrol"}},c={},s=[{value:"Configuring the CLI",id:"configuring-the-cli",level:2},{value:"Push and deploy Backstage to Koyeb",id:"push-and-deploy-backstage-to-koyeb",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["This guide explains how to deploy Backstage to ",(0,r.jsx)(t.a,{href:"https://www.koyeb.com/",children:"Koyeb"}),", a serverless platform that provides the fastest way to deploy applications globally. Koyeb supports git-driven and container-based deployments."]}),"\n",(0,r.jsxs)(t.p,{children:["Before you begin, make sure you have a ",(0,r.jsx)(t.a,{href:"https://app.koyeb.com/",children:"Koyeb account"})," to follow this guide."]}),"\n",(0,r.jsx)(t.h2,{id:"configuring-the-cli",children:"Configuring the CLI"}),"\n",(0,r.jsxs)(t.p,{children:["First, install the\n",(0,r.jsx)(t.a,{href:"https://www.koyeb.com/docs/quickstart/koyeb-cli",children:"Koyeb CLI"})," and follow the instructions in the ",(0,r.jsx)(t.a,{href:"https://www.koyeb.com/docs/quickstart/koyeb-cli",children:"quickstart guide"})," to login."]}),"\n",(0,r.jsxs)(t.p,{children:["Then, configure your ",(0,r.jsx)(t.code,{children:"app-config.yaml"})," with your ",(0,r.jsx)(t.code,{children:"baseUrl"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"app:\n  # Should be the same as backend.baseUrl when using the `app-backend` plugin\n  baseUrl: https://<your-app>.koyeb.app\n\nbackend:\n  baseUrl: https://<your-app>.koyeb.app\n  listen:\n    # The $PORT environment variable is a feature of Koyeb\n    # https://www.koyeb.com/docs/apps/services\n    port: ${PORT}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"push-and-deploy-backstage-to-koyeb",children:"Push and deploy Backstage to Koyeb"}),"\n",(0,r.jsxs)(t.p,{children:["Push your Backstage application with its ",(0,r.jsx)(t.a,{href:"/docs/deployment/docker",children:"Dockerfile"})," to Koyeb using the following command:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"koyeb app init example-backstage \\\n  --git github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME> \\\n  --git-branch main \\\n  --ports 8000:http \\\n  --routes /:8000 \\\n  --env PORT=8000\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Your application will be built and deployed to Koyeb. Once the build has finished, you will be able to access your application running on Koyeb by clicking the URL ending with ",(0,r.jsx)(t.code,{children:".koyeb.app"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Congratulations! Now you should have Backstage up and running! \ud83c\udf89"})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,a={},s=null,l=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:l,props:a,_owner:i.current}}t.Fragment=a,t.jsx=s,t.jsxs=s},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,b={};function m(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}function k(){}function g(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=m.prototype;var _=g.prototype=new k;_.constructor=g,h(_,m.prototype),_.isPureReactComponent=!0;var v=Array.isArray,w=Object.prototype.hasOwnProperty,x={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,a={},u=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)w.call(t,o)&&!j.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:n,type:e,key:u,ref:i,props:a,_owner:x.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,o,a,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return u=u(c=e),e=""===a?"."+C(c,0):a,v(u)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),O(u,t,o,"",(function(e){return e}))):null!=u&&(R(u)&&(u=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(E,"$&/")+"/")+e)),t.push(u)),1;if(c=0,a=""===a?".":a+":",v(e))for(var s=0;s<e.length;s++){var l=a+C(i=e[s],s);c+=O(i,t,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(i=e.next()).done;)c+=O(i=i.value,t,o,l=a+C(i,s++),u);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,t,n){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},I={transition:null},K={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:I,ReactCurrentOwner:x};function U(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:$,forEach:function(e,t,n){$(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=u,t.PureComponent=g,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,t.act=U,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),a=e.key,u=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,i=x.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)w.call(t,s)&&!j.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){c=Array(s);for(var l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:n,type:e.type,key:a,ref:u,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=U,t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return T.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>u});var r=n(667294);const o={},a=r.createContext(o);function u(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);