/*! For license information please see b4dd8ccb.a66b8c99.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[117705],{627229:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=r(824246),o=r(511151);const s={id:"v1.20.0",title:"v1.20.0",description:"Backstage Release v1.20.0"},a=void 0,i={id:"releases/v1.20.0",title:"v1.20.0",description:"Backstage Release v1.20.0",source:"@site/../docs/releases/v1.20.0.md",sourceDirName:"releases",slug:"/releases/v1.20.0",permalink:"/docs/releases/v1.20.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.20.0.md",tags:[],version:"current",frontMatter:{id:"v1.20.0",title:"v1.20.0",description:"Backstage Release v1.20.0"},sidebar:"releases",previous:{title:"v1.21.0",permalink:"/docs/releases/v1.21.0"},next:{title:"v1.19.0",permalink:"/docs/releases/v1.19.0"}},c={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Support for experimental type build has been removed",id:"support-for-experimental-type-build-has-been-removed",level:3},{value:"Experimental support for Vite \u26a1",id:"experimental-support-for-vite-",level:3},{value:"Scaffolder: <code>react-jsonschema-form@v5</code> + Design tweaks \ud83d\udc85",id:"scaffolder-react-jsonschema-formv5--design-tweaks-",level:3},{value:"Catalog Presentation API",id:"catalog-presentation-api",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["These are the release notes for the v1.20.0 release of ",(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,n.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,n.jsx)(t.h3,{id:"support-for-experimental-type-build-has-been-removed",children:"Support for experimental type build has been removed"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"--experimental-type-build"})," option is no longer supported by any commands in the Backstage CLI. Existing usage should be migrated to using ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/tooling/cli/build-system#subpath-exports",children:"subpath exports"})," instead."]}),"\n",(0,n.jsx)(t.h3,{id:"experimental-support-for-vite-",children:"Experimental support for Vite \u26a1"}),"\n",(0,n.jsxs)(t.p,{children:["Due to some concerns about performance in larger monorepo setups and hot-reloading times, we\u2019re looking to replace ",(0,n.jsx)(t.a,{href:"https://webpack.js.org/",children:"Webpack"})," with ",(0,n.jsx)(t.a,{href:"https://vitejs.dev/",children:"Vite"})," longer term, and in this release we\u2019re shipping experimental support for Vite behind an ",(0,n.jsx)(t.code,{children:"EXPERIMENTAL_VITE"})," environment variable flag when running ",(0,n.jsx)(t.code,{children:"yarn start"})," in the frontend."]}),"\n",(0,n.jsxs)(t.p,{children:["Please reach out by ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new/choose",children:"creating a GitHub issue"})," with any problems that you might be running into when using this experimental feature."]}),"\n",(0,n.jsxs)(t.h3,{id:"scaffolder-react-jsonschema-formv5--design-tweaks-",children:["Scaffolder: ",(0,n.jsx)(t.code,{children:"react-jsonschema-form@v5"})," + Design tweaks \ud83d\udc85"]}),"\n",(0,n.jsxs)(t.p,{children:["It\u2019s finally here. We\u2019ve shipped support for ",(0,n.jsx)(t.code,{children:"react-jsonschema-form@v5"})," which ",(0,n.jsx)(t.strong,{children:"should"})," be a completely non-breaking change for end users. We\u2019ve also tweaked some of the designs for some of the new Scaffolder Pages. You can read more in the ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/features/software-templates/migrating-to-rjsf-v5",children:"relevant migration docs"})]}),"\n",(0,n.jsx)(t.h3,{id:"catalog-presentation-api",children:"Catalog Presentation API"}),"\n",(0,n.jsxs)(t.p,{children:["The Catalog plugin now uses the ",(0,n.jsx)(t.code,{children:"EntityPresentationApi"})," to decide how entities are rendered in the UI. This includes fetching catalog data in the background in order to show entities using their ",(0,n.jsx)(t.code,{children:"metadata.title"}),". For more information, including how to customize the presentation, see ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17474",children:"the PR"}),", (documentation is in the works!)."]}),"\n",(0,n.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,n.jsx)(t.p,{children:"This release does not contain any security fixes."}),"\n",(0,n.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,n.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,n.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage's ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.20.0-changelog.md",children:"Changelog"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage ",(0,n.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,n.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Sign up for our ",(0,n.jsx)(t.a,{href:"https://info.backstage.spotify.com/newsletter_subscribe",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,s={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:s,_owner:i.current}}t.Fragment=s,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function y(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}function v(){}function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var x=b.prototype=new v;x.constructor=b,g(x,y.prototype),x.isPureReactComponent=!0;var k=Array.isArray,j=Object.prototype.hasOwnProperty,_={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var o,s={},a=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,o)&&!w.hasOwnProperty(o)&&(s[o]=t[o]);var c=arguments.length-2;if(1===c)s.children=n;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];s.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===s[o]&&(s[o]=c[o]);return{$$typeof:r,type:e,key:a,ref:i,props:s,_owner:_.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,s,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return a=a(c=e),e=""===s?"."+C(c,0):s,k(a)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),P(a,t,o,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(R,"$&/")+"/")+e)),t.push(a)),1;if(c=0,s=""===s?".":s+":",k(e))for(var u=0;u<e.length;u++){var l=s+C(i=e[u],u);c+=P(i,t,o,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)c+=P(i=i.value,t,o,l=s+C(i,u++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null},B={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:T,ReactCurrentOwner:_};function D(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=a,t.PureComponent=b,t.StrictMode=s,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.act=D,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),s=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=_.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)j.call(t,u)&&!w.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:r,type:e.type,key:s,ref:a,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=D,t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return I.current.useTransition()},t.version="18.3.1"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>a});var n=r(667294);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);