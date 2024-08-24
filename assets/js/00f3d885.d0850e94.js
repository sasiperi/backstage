/*! For license information please see 00f3d885.d0850e94.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[834876],{28685:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var t=r(824246),o=r(511151);const c={id:"backend-dynamic-feature-service.legacypluginenvironment",title:"LegacyPluginEnvironment",description:"API reference for LegacyPluginEnvironment"},i=void 0,a={id:"reference/backend-dynamic-feature-service.legacypluginenvironment",title:"LegacyPluginEnvironment",description:"API reference for LegacyPluginEnvironment",source:"@site/../docs/reference/backend-dynamic-feature-service.legacypluginenvironment.md",sourceDirName:"reference",slug:"/reference/backend-dynamic-feature-service.legacypluginenvironment",permalink:"/docs/reference/backend-dynamic-feature-service.legacypluginenvironment",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-dynamic-feature-service.legacypluginenvironment.md",tags:[],version:"current",frontMatter:{id:"backend-dynamic-feature-service.legacypluginenvironment",title:"LegacyPluginEnvironment",description:"API reference for LegacyPluginEnvironment"}},u={},s=[];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-dynamic-feature-service",children:(0,t.jsx)(n.code,{children:"@backstage/backend-dynamic-feature-service"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-dynamic-feature-service.legacypluginenvironment",children:(0,t.jsx)(n.code,{children:"LegacyPluginEnvironment"})})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,t.jsx)(n.p,{children:"Support for the legacy backend system will be removed in the future."}),"\n",(0,t.jsx)(n.p,{children:"When adding a legacy plugin installer entrypoint in your plugin, you should always take the opportunity to also implement support for the new backend system if not already done."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export type LegacyPluginEnvironment = {\n    logger: Logger;\n    cache: PluginCacheManager;\n    database: PluginDatabaseManager;\n    config: Config;\n    reader: UrlReaderService;\n    discovery: PluginEndpointDiscovery;\n    tokenManager: TokenManager;\n    permissions: PermissionEvaluator;\n    scheduler: SchedulerService;\n    identity: IdentityApi;\n    eventBroker: EventBroker;\n    events: EventsService;\n    pluginProvider: BackendPluginProvider;\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"References:"})," ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-common.plugincachemanager",children:"PluginCacheManager"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-common.plugindatabasemanager",children:"PluginDatabaseManager"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/config.config",children:"Config"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-common.pluginendpointdiscovery",children:"PluginEndpointDiscovery"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-common.tokenmanager",children:"TokenManager"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissionevaluator",children:"PermissionEvaluator"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.schedulerservice",children:"SchedulerService"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-node.identityapi",children:"IdentityApi"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-events-node.eventbroker",children:"EventBroker"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-events-node.eventsservice",children:"EventsService"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-dynamic-feature-service.backendpluginprovider",children:"BackendPluginProvider"})]})]})}function f(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},371426:(e,n,r)=>{var t=r(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,r){var t,c={},s=null,l=null;for(t in void 0!==r&&(s=""+r),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,t)&&!u.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:o,type:e,key:s,ref:l,props:c,_owner:a.current}}n.Fragment=c,n.jsx=s,n.jsxs=s},541535:(e,n)=>{var r=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function v(e,n,r){this.props=e,this.context=n,this.refs=h,this.updater=r||y}function g(){}function b(e,n,r){this.props=e,this.context=n,this.refs=h,this.updater=r||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var k=b.prototype=new g;k.constructor=b,m(k,v.prototype),k.isPureReactComponent=!0;var _=Array.isArray,j=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,n,t){var o,c={},i=null,a=null;if(null!=n)for(o in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(i=""+n.key),n)j.call(n,o)&&!S.hasOwnProperty(o)&&(c[o]=n[o]);var u=arguments.length-2;if(1===u)c.children=t;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];c.children=s}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===c[o]&&(c[o]=u[o]);return{$$typeof:r,type:e,key:i,ref:a,props:c,_owner:x.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var w=/\/+/g;function C(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function R(e,n,o,c,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case t:u=!0}}if(u)return i=i(u=e),e=""===c?"."+C(u,0):c,_(i)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),R(i,n,o,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,n){return{$$typeof:r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(w,"$&/")+"/")+e)),n.push(i)),1;if(u=0,c=""===c?".":c+":",_(e))for(var s=0;s<e.length;s++){var l=c+C(a=e[s],s);u+=R(a,n,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(a=e.next()).done;)u+=R(a=a.value,n,o,l=c+C(a,s++),i);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return u}function $(e,n,r){if(null==e)return e;var t=[],o=0;return R(e,t,"","",(function(e){return n.call(r,e,o++)})),t}function O(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},L={transition:null},M={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:L,ReactCurrentOwner:x};function T(){throw Error("act(...) is not supported in production builds of React.")}n.Children={map:$,forEach:function(e,n,r){$(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=v,n.Fragment=o,n.Profiler=i,n.PureComponent=b,n.StrictMode=c,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,n.act=T,n.cloneElement=function(e,n,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),c=e.key,i=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,a=x.current),void 0!==n.key&&(c=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)j.call(n,s)&&!S.hasOwnProperty(s)&&(o[s]=void 0===n[s]&&void 0!==u?u[s]:n[s])}var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){u=Array(s);for(var l=0;l<s;l++)u[l]=arguments[l+2];o.children=u}return{$$typeof:r,type:e.type,key:c,ref:i,props:o,_owner:a}},n.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=E,n.createFactory=function(e){var n=E.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:s,render:e}},n.isValidElement=P,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},n.memo=function(e,n){return{$$typeof:f,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=L.transition;L.transition={};try{e()}finally{L.transition=n}},n.unstable_act=T,n.useCallback=function(e,n){return I.current.useCallback(e,n)},n.useContext=function(e){return I.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return I.current.useDeferredValue(e)},n.useEffect=function(e,n){return I.current.useEffect(e,n)},n.useId=function(){return I.current.useId()},n.useImperativeHandle=function(e,n,r){return I.current.useImperativeHandle(e,n,r)},n.useInsertionEffect=function(e,n){return I.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return I.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return I.current.useMemo(e,n)},n.useReducer=function(e,n,r){return I.current.useReducer(e,n,r)},n.useRef=function(e){return I.current.useRef(e)},n.useState=function(e){return I.current.useState(e)},n.useSyncExternalStore=function(e,n,r){return I.current.useSyncExternalStore(e,n,r)},n.useTransition=function(){return I.current.useTransition()},n.version="18.3.1"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>i});var t=r(667294);const o={},c=t.createContext(o);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);