/*! For license information please see 56c7a0fc.f83a64f3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[490386],{30622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(824246),i=n(511151);const o={id:"provider",title:"GitLab Authentication Provider",sidebar_label:"GitLab",description:"Adding GitLab OAuth as an authentication provider in Backstage"},a=void 0,s={id:"auth/gitlab/provider",title:"GitLab Authentication Provider",description:"Adding GitLab OAuth as an authentication provider in Backstage",source:"@site/../docs/auth/gitlab/provider.md",sourceDirName:"auth/gitlab",slug:"/auth/gitlab/provider",permalink:"/docs/auth/gitlab/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/gitlab/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"GitLab Authentication Provider",sidebar_label:"GitLab",description:"Adding GitLab OAuth as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"GitHub",permalink:"/docs/auth/github/provider"},next:{title:"Google",permalink:"/docs/auth/google/provider"}},c={},l=[{value:"Create an OAuth App on GitLab",id:"create-an-oauth-app-on-gitlab",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Resolvers",id:"resolvers",level:3},{value:"Backend Installation",id:"backend-installation",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The Backstage ",(0,r.jsx)(t.code,{children:"core-plugin-api"})," package comes with a GitLab authentication\nprovider that can authenticate users using GitLab OAuth."]}),"\n",(0,r.jsx)(t.h2,{id:"create-an-oauth-app-on-gitlab",children:"Create an OAuth App on GitLab"}),"\n",(0,r.jsxs)(t.p,{children:["To support GitLab authentication, you must create an Application from the\n",(0,r.jsx)(t.a,{href:"https://gitlab.com/-/profile/applications",children:"GitLab settings"}),". The ",(0,r.jsx)(t.code,{children:"Redirect URI"}),"\nshould point to your Backstage backend auth handler."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Set Application Name to ",(0,r.jsx)(t.code,{children:"backstage-dev"})," or something along those lines."]}),"\n",(0,r.jsxs)(t.li,{children:["The Authorization Callback URL should match the redirect URI set in Backstage.\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Set this to ",(0,r.jsx)(t.code,{children:"http://localhost:7007/api/auth/gitlab/handler/frame"})," for local development."]}),"\n",(0,r.jsxs)(t.li,{children:["Set this to ",(0,r.jsx)(t.code,{children:"http://{APP_FQDN}:{APP_BACKEND_PORT}/api/auth/gitlab/handler/frame"})," for non-local deployments."]}),"\n",(0,r.jsxs)(t.li,{children:["Select the following scopes from the list:\n",(0,r.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,r.jsx)(t.code,{children:"read_user"})," Grants read-only access to the authenticated user's profile through the /user API endpoint, which includes username, public email, and full name. Also grants access to read-only API endpoints under /users."]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,r.jsx)(t.code,{children:"read_repository"})," Grants read-only access to repositories on private projects using Git-over-HTTP (not using the API)."]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,r.jsx)(t.code,{children:"write_repository"})," Grants read-write access to repositories on private projects using Git-over-HTTP (not using the API)."]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,r.jsx)(t.code,{children:"openid"})," Grants permission to authenticate with GitLab using OpenID Connect. Also gives read-only access to the user's profile and group memberships."]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,r.jsx)(t.code,{children:"profile"})," Grants read-only access to the user's profile data using OpenID Connect."]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,r.jsx)(t.code,{children:"email"})," Grants read-only access to the user's primary email address using OpenID Connect."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(t.p,{children:["The provider configuration can then be added to your ",(0,r.jsx)(t.code,{children:"app-config.yaml"})," under the\nroot ",(0,r.jsx)(t.code,{children:"auth"})," configuration:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"auth:\n  environment: development\n  providers:\n    gitlab:\n      development:\n        clientId: ${AUTH_GITLAB_CLIENT_ID}\n        clientSecret: ${AUTH_GITLAB_CLIENT_SECRET}\n        ## uncomment if using self-hosted GitLab\n        # audience: https://gitlab.company.com\n        ## uncomment if using a custom redirect URI\n        # callbackUrl: https://${BASE_URL}/api/auth/gitlab/handler/frame\n        signIn:\n          resolvers:\n            # typically you would pick one of these\n            - resolver: emailMatchingUserEntityProfileEmail\n            - resolver: emailLocalPartMatchingUserEntityName\n            - resolver: usernameMatchingUserEntityName\n"})}),"\n",(0,r.jsx)(t.p,{children:"The GitLab provider is a structure with three configuration keys:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"clientId"}),": The Application ID that you generated on GitLab, e.g.\n",(0,r.jsx)(t.code,{children:"4928c033ab3d592845c044a653bc20583baf84f2e67b954c6fdb32a532ab76c9"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"clientSecret"}),": The Application secret"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"audience"})," (optional): The base URL for the self-hosted GitLab instance, e.g.\n",(0,r.jsx)(t.code,{children:"https://gitlab.company.com"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"callbackUrl"})," (optional): The URL matching the Redirect URI registered when creating your GitLab OAuth App, e.g.\n",(0,r.jsx)(t.code,{children:"https://$backstage.acme.corp/api/auth/gitlab/handler/frame"}),"\nNote: Due to a peculiarity with GitLab OAuth, ensure there is no trailing ",(0,r.jsx)(t.code,{children:"/"})," after 'frame' in the URL."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"resolvers",children:"Resolvers"}),"\n",(0,r.jsx)(t.p,{children:"This provider includes several resolvers out of the box that you can use:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"emailMatchingUserEntityProfileEmail"}),": Matches the email address from the auth provider with the User entity that has a matching ",(0,r.jsx)(t.code,{children:"spec.profile.email"}),". If no match is found it will throw a ",(0,r.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"emailLocalPartMatchingUserEntityName"}),": Matches the ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Email_address#Local-part",children:"local part"})," of the email address from the auth provider with the User entity that has a matching ",(0,r.jsx)(t.code,{children:"name"}),". If no match is found it will throw a ",(0,r.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"usernameMatchingUserEntityName"}),": Matches the username from the auth provider with the User entity that has a matching ",(0,r.jsx)(t.code,{children:"name"}),". If no match is found it will throw a ",(0,r.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"Note",type:"note",children:(0,r.jsxs)(t.p,{children:["The resolvers will be tried in order, but will only be skipped if they throw a ",(0,r.jsx)(t.code,{children:"NotFoundError"}),"."]})}),"\n",(0,r.jsxs)(t.p,{children:["If these resolvers do not fit your needs you can build a custom resolver, this is covered in the ",(0,r.jsx)(t.a,{href:"/docs/auth/identity-resolver#building-custom-resolvers",children:"Building Custom Resolvers"})," section of the Sign-in Identities and Resolvers documentation."]}),"\n",(0,r.jsx)(t.h2,{id:"backend-installation",children:"Backend Installation"}),"\n",(0,r.jsx)(t.p,{children:"To add the provider to the backend we will first need to install the package by running this command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="from your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-auth-backend-module-gitlab-provider\n"})}),"\n",(0,r.jsx)(t.p,{children:"Then we will need to add this line:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="in packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-auth-backend'));\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-auth-backend-module-gitlab-provider'));\n/* highlight-add-end */\n"})}),"\n",(0,r.jsx)(t.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,r.jsxs)(t.p,{children:["To add the provider to the frontend, add the ",(0,r.jsx)(t.code,{children:"gitlabAuthApi"})," reference and\n",(0,r.jsx)(t.code,{children:"SignInPage"})," component as shown in\n",(0,r.jsx)(t.a,{href:"/docs/auth/#sign-in-configuration",children:"Adding the provider to the sign-in page"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},371426:(e,t,n)=>{var r=n(827378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:u,props:o,_owner:s.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}function g(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var x=v.prototype=new g;x.constructor=v,m(x,b.prototype),x.isPureReactComponent=!0;var j=Array.isArray,k=Object.prototype.hasOwnProperty,_={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,i)&&!w.hasOwnProperty(i)&&(o[i]=t[i]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps)void 0===o[i]&&(o[i]=c[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:_.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var S=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return a=a(c=e),e=""===o?"."+R(c,0):o,j(a)?(i="",null!=e&&(i=e.replace(S,"$&/")+"/"),I(a,t,i,"",(function(e){return e}))):null!=a&&(A(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(S,"$&/")+"/")+e)),t.push(a)),1;if(c=0,o=""===o?".":o+":",j(e))for(var l=0;l<e.length;l++){var u=o+R(s=e[l],l);c+=I(s,t,i,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=I(s=s.value,t,i,u=o+R(s,l++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function L(e,t,n){if(null==e)return e;var r=[],i=0;return I(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function C(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},P={transition:null},G={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:P,ReactCurrentOwner:_};function N(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:L,forEach:function(e,t,n){L(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return L(e,(function(){t++})),t},toArray:function(e){return L(e,(function(e){return e}))||[]},only:function(e){if(!A(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=i,t.Profiler=a,t.PureComponent=v,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,t.act=N,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=_.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)k.call(t,l)&&!w.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=A,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=P.transition;P.transition={};try{e()}finally{P.transition=t}},t.unstable_act=N,t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return T.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var r=n(667294);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);