/*! For license information please see b06880c5.5b2311bb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[350966],{72746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(824246),o=r(511151);const a={id:"provider",title:"Cloudflare Access Provider",sidebar_label:"Cloudflare Access",description:"Adding Cloudflare Access as an authentication provider in Backstage"},i=void 0,s={id:"auth/cloudflare/provider",title:"Cloudflare Access Provider",description:"Adding Cloudflare Access as an authentication provider in Backstage",source:"@site/../docs/auth/cloudflare/provider.md",sourceDirName:"auth/cloudflare",slug:"/auth/cloudflare/provider",permalink:"/docs/auth/cloudflare/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/cloudflare/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"Cloudflare Access Provider",sidebar_label:"Cloudflare Access",description:"Adding Cloudflare Access as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"Bitbucket Server",permalink:"/docs/auth/bitbucketServer/provider"},next:{title:"GitHub",permalink:"/docs/auth/github/provider"}},c={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Resolvers",id:"resolvers",level:3},{value:"Backend Installation",id:"backend-installation",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Similar to GCP IAP Proxy Provider or AWS ALB provider, developers can offload authentication\nsupport to Cloudflare Access."}),"\n",(0,n.jsx)(t.p,{children:"This tutorial shows how to use authentication on Cloudflare Access sitting in\nfront of Backstage."}),"\n",(0,n.jsx)(t.p,{children:"It is assumed a Cloudflare tunnel is already serving traffic in front of a\nBackstage instance configured to serve the frontend app from the backend and is\nalready gated using Cloudflare Access."}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["Let's start by adding the following ",(0,n.jsx)(t.code,{children:"auth"})," configuration in your\n",(0,n.jsx)(t.code,{children:"app-config.yaml"})," or ",(0,n.jsx)(t.code,{children:"app-config.production.yaml"})," or similar:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"auth:\n  providers:\n    cfaccess:\n      # You can find the team name in the Cloudflare Zero Trust dashboard.\n      teamName: <Team Name>\n      # This service tokens section is optional -- you only need it if you have\n      # some Cloudflare Service Tokens that you want to be able to log in to your\n      # Backstage instance.\n      serviceTokens:\n        - token: '1uh2fh19efvfh129f1f919u21f2f19jf2.access'\n          subject: 'bot-user@your-company.com'\n      # You can customize the header name that contains the jwt token, by default\n      # cf-access-jwt-assertion is used\n      jwtHeaderName: <my-header>\n      # You can customize the authorization cookie name, by default\n      # CF_Authorization is used\n      authorizationCookieName: <MY_CAUTHORIZATION_COOKIE_NAME>\n      # This picks what sign in resolver(s) you want to use.\n      signIn:\n        resolvers:\n          - resolver: emailMatchingUserEntityProfileEmail\n          - resolver: emailLocalPartMatchingUserEntityName\n"})}),"\n",(0,n.jsx)(t.p,{children:"This config section must be in place for the provider to load at all."}),"\n",(0,n.jsx)(t.h3,{id:"resolvers",children:"Resolvers"}),"\n",(0,n.jsx)(t.p,{children:"This provider includes several resolvers out of the box that you can use:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"emailMatchingUserEntityProfileEmail"}),": Matches the email address from the auth provider with the User entity that has a matching ",(0,n.jsx)(t.code,{children:"spec.profile.email"}),". If no match is found it will throw a ",(0,n.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"emailLocalPartMatchingUserEntityName"}),": Matches the ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Email_address#Local-part",children:"local part"})," of the email address from the auth provider with the User entity that has a matching ",(0,n.jsx)(t.code,{children:"name"}),". If no match is found it will throw a ",(0,n.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"Note",type:"note",children:(0,n.jsxs)(t.p,{children:["The resolvers will be tried in order, but will only be skipped if they throw a ",(0,n.jsx)(t.code,{children:"NotFoundError"}),"."]})}),"\n",(0,n.jsxs)(t.p,{children:["If these resolvers do not fit your needs you can build a custom resolver, this is covered in the ",(0,n.jsx)(t.a,{href:"/docs/auth/identity-resolver#building-custom-resolvers",children:"Building Custom Resolvers"})," section of the Sign-in Identities and Resolvers documentation."]}),"\n",(0,n.jsx)(t.h2,{id:"backend-installation",children:"Backend Installation"}),"\n",(0,n.jsx)(t.p,{children:"To add the provider to the backend we will first need to install the package by running this command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:'title="from your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-auth-backend-module-cloudflare-access-provider\n"})}),"\n",(0,n.jsx)(t.p,{children:"Then we will need to add this line:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="in packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-auth-backend'));\n/* highlight-add-start */\nbackend.add(\n  import('@backstage/plugin-auth-backend-module-cloudflare-access-provider'),\n);\n/* highlight-add-end */\n"})}),"\n",(0,n.jsx)(t.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/docs/auth/#sign-in-with-proxy-providers",children:"Sign-In with Proxy Providers"})," for pointers on how to set up the sign-in page, and to also make it work smoothly for local development. You'll use ",(0,n.jsx)(t.code,{children:"cfaccess"})," as the provider name."]}),"\n",(0,n.jsxs)(t.p,{children:["If you ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/auth/identity-resolver#building-custom-resolvers",children:"provide a custom sign in resolver"}),", you can skip the ",(0,n.jsx)(t.code,{children:"signIn"})," block entirely."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,a={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:a,_owner:s.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||p}function g(){}function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||p}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var k=b.prototype=new g;k.constructor=b,y(k,v.prototype),k.isPureReactComponent=!0;var _=Array.isArray,j=Object.prototype.hasOwnProperty,x={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,o)&&!w.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:r,type:e,key:i,ref:s,props:a,_owner:x.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return i=i(c=e),e=""===a?"."+R(c,0):a,_(i)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),P(i,t,o,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+e)),t.push(i)),1;if(c=0,a=""===a?".":a+":",_(e))for(var u=0;u<e.length;u++){var l=a+R(s=e[u],u);c+=P(s,t,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)c+=P(s=s.value,t,o,l=a+R(s,u++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function A(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},T={transition:null},$={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:T,ReactCurrentOwner:x};function N(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:A,forEach:function(e,t,r){A(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=i,t.PureComponent=b,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.act=N,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=x.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)j.call(t,u)&&!w.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:r,type:e.type,key:a,ref:i,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=N,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,r){return O.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,r){return O.current.useReducer(e,t,r)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return O.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>i});var n=r(667294);const o={},a=n.createContext(o);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);