/*! For license information please see 149e8060.3b2ad13a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[502947],{291074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=n(824246),r=n(511151);const i={id:"extension-points",title:"Backend Plugin Extension Points",sidebar_label:"Extension Points",description:"Extension points of backend plugins"},s=void 0,a={id:"backend-system/architecture/extension-points",title:"Backend Plugin Extension Points",description:"Extension points of backend plugins",source:"@site/../docs/backend-system/architecture/05-extension-points.md",sourceDirName:"backend-system/architecture",slug:"/backend-system/architecture/extension-points",permalink:"/docs/backend-system/architecture/extension-points",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/architecture/05-extension-points.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"extension-points",title:"Backend Plugin Extension Points",sidebar_label:"Extension Points",description:"Extension points of backend plugins"},sidebar:"docs",previous:{title:"Plugins",permalink:"/docs/backend-system/architecture/plugins"},next:{title:"Modules",permalink:"/docs/backend-system/architecture/modules"}},c={},u=[{value:"Defining an Extension Point",id:"defining-an-extension-point",level:2},{value:"Registering an Extension Point",id:"registering-an-extension-point",level:2},{value:"Module Extension Points",id:"module-extension-points",level:2},{value:"Extension Point Design",id:"extension-point-design",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["While plugins are able to use static configuration for lightweight forms of customization, you can quickly hit a limit where you need something more powerful to allow users to extend your plugin. For this purpose, the backend system provides a mechanism for plugins to provide extension points, which can be used to expose deeper customizations for your plugin. Extension points are used by modules, which are installed in the backend adjacent to plugins. Modules are covered more in-depth in the ",(0,o.jsx)(t.a,{href:"/docs/backend-system/architecture/modules",children:"next section"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Extension points are quite similar to services, in that they both encapsulate an interface in a reference object. The key difference is that extension points are registered and provided by plugins themselves, and do not have any factory associated with them. Extension points for a given plugin are also only accessible to modules that extend that same plugin."}),"\n",(0,o.jsxs)(t.p,{children:["Plugin extension points should always be exported from a plugin node library package, for example ",(0,o.jsx)(t.code,{children:"@backstage/plugin-catalog-node"}),". This is to allow for modules to avoid a direct dependency on the plugin, and make it easier to evolve extension points over time. You can export as many different extension points as you want, just be mindful of the complexity of the API surface. It is however often better to export multiple extension points with few methods, rather than few extension points with many methods, as that tends to be easier to maintain."]}),"\n",(0,o.jsx)(t.h2,{id:"defining-an-extension-point",children:"Defining an Extension Point"}),"\n",(0,o.jsxs)(t.p,{children:["Extension points are created using the ",(0,o.jsx)(t.code,{children:"createExtensionPoint"})," method from ",(0,o.jsx)(t.code,{children:"@backstage/backend-plugin-api"}),". You need to provide the type, as well as an ID."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { createExtensionPoint } from '@backstage/backend-plugin-api';\n\nexport interface ScaffolderActionsExtensionPoint {\n  addAction(action: ScaffolderAction): void;\n}\n\nexport const scaffolderActionsExtensionPoint =\n  createExtensionPoint<ScaffolderActionsExtensionPoint>({\n    id: 'scaffolder.actions',\n  });\n"})}),"\n",(0,o.jsx)(t.h2,{id:"registering-an-extension-point",children:"Registering an Extension Point"}),"\n",(0,o.jsxs)(t.p,{children:["For modules to be able to use your extension point, an implementation of it must be registered by the plugin. This is done using the ",(0,o.jsx)(t.code,{children:"registerExtensionPoint"})," method in the ",(0,o.jsx)(t.code,{children:"register"})," callback of the plugin definition."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"export const scaffolderPlugin = createBackendPlugin(\n  {\n    pluginId: 'scaffolder',\n    register(env) {\n      const actions = new Map<string, TemplateAction<any>>();\n\n      env.registerExtensionPoint(\n        scaffolderActionsExtensionPoint,\n        {\n          addAction(action) {\n            if (actions.has(action.id)) {\n              throw new Error(`Scaffolder actions with ID '${action.id}' has already been installed`);\n            }\n            actions.set(action.id, action);\n          },\n        },\n      );\n\n      env.registerInit({\n        deps: { ... },\n        async init({ ... }) {\n          // Use the registered actions when setting up the scaffolder ...\n          const installedActions = Array.from(actions.values());\n        },\n      });\n    },\n  },\n);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Note that we create a closure that adds to a shared ",(0,o.jsx)(t.code,{children:"actions"})," structure when ",(0,o.jsx)(t.code,{children:"addAction"})," is called by users of your extension point. It is safe for us to then access our ",(0,o.jsx)(t.code,{children:"actions"})," in the ",(0,o.jsx)(t.code,{children:"init"})," method of our plugin, since all modules that extend our plugin will be completely initialized before our plugin gets initialized. That means that at the point where our ",(0,o.jsx)(t.code,{children:"init"})," method is called, all actions have been added and can be accessed."]}),"\n",(0,o.jsx)(t.h2,{id:"module-extension-points",children:"Module Extension Points"}),"\n",(0,o.jsx)(t.p,{children:"Just like plugins, modules can also provide their own extension points. The API for registering and using extension points is the same as for plugins. However, modules should typically only use extension points to allow for complex internal customizations by users of the plugin module. It is therefore preferred to export the extension point directly from the module package, rather than creating a separate node library for that purpose. Extension points exported by a module are used the same way as extension points exported by a plugin, you create your own separate module and declare a dependency on the extension point that you want to interact with."}),"\n",(0,o.jsx)(t.h2,{id:"extension-point-design",children:"Extension Point Design"}),"\n",(0,o.jsxs)(t.p,{children:["Designing the extension point interface requires careful consideration. It is a public API surface that your plugin will need to maintain over time. Keep in mind that the installation of modules is an intentional action by the user, meaning you can always design an extension point interface for additions only. For example, there is no need for the ",(0,o.jsx)(t.code,{children:"scaffolderActionsExtensionPoint"})," to support removal of actions, since the user can just uninstall the module that added the action."]}),"\n",(0,o.jsx)(t.p,{children:"Another pattern that can be used is a type of singleton pattern where the extension point is used to add or override some default behavior. For example, let's say the scaffolder wants to expose a way to customize the execution of template tasks. It wouldn't really make sense to allow multiple modules to each add their own task runners, so instead we use a setter to ensure that only one task runner is installed, throwing an error if any other module tries to install another task runner."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"interface ScaffolderTaskRunnerExtensionPoint {\n  setTaskRunner(taskRunner: SchedulerServiceTaskRunner): void;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If you want to make breaking changes to an extension point that already has some usage, we recommend that you instead deprecate the existing one and create a new one with a different name. You might want to use a completely new name, but you can also suffix the existing one with a version number, for example ",(0,o.jsx)(t.code,{children:"scaffolderActionsV2ExtensionPoint"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var o=n(827378),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var o,i={},u=null,l=null;for(o in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,o)&&!c.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===i[o]&&(i[o]=t[o]);return{$$typeof:r,type:e,key:u,ref:l,props:i,_owner:a.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function x(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function g(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=x.prototype;var v=b.prototype=new g;v.constructor=b,y(v,x.prototype),v.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,_={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,o){var r,i={},s=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)k.call(t,r)&&!E.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(1===c)i.children=o;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===i[r]&&(i[r]=c[r]);return{$$typeof:n,type:e,key:s,ref:a,props:i,_owner:_.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var S=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,i,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case o:c=!0}}if(c)return s=s(c=e),e=""===i?"."+R(c,0):i,w(s)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),C(s,t,r,"",(function(e){return e}))):null!=s&&(P(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(c=0,i=""===i?".":i+":",w(e))for(var u=0;u<e.length;u++){var l=i+R(a=e[u],u);c+=C(a,t,r,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(a=e.next()).done;)c+=C(a=a.value,t,r,l=i+R(a,u++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function I(e,t,n){if(null==e)return e;var o=[],r=0;return C(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},O={transition:null},T={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:O,ReactCurrentOwner:_};function D(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=r,t.Profiler=s,t.PureComponent=b,t.StrictMode=i,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.act=D,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=y({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=_.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)k.call(t,u)&&!E.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=o;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];r.children=c}return{$$typeof:n,type:e.type,key:i,ref:s,props:r,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=D,t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,n){return A.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,n){return A.current.useReducer(e,t,n)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return A.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return A.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(667294);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);