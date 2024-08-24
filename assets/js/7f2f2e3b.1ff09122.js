/*! For license information please see 7f2f2e3b.1ff09122.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[74689],{863175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(824246),r=n(511151);const i={id:"locations",sidebar_label:"Locations",title:"Amazon Web Services CodeCommit Locations",description:"Setting up an integration with Amazon Web Services CodeCommit"},a=void 0,s={id:"integrations/aws-codecommit/locations",title:"Amazon Web Services CodeCommit Locations",description:"Setting up an integration with Amazon Web Services CodeCommit",source:"@site/../docs/integrations/aws-codecommit/locations.md",sourceDirName:"integrations/aws-codecommit",slug:"/integrations/aws-codecommit/locations",permalink:"/docs/integrations/aws-codecommit/locations",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/aws-codecommit/locations.md",tags:[],version:"current",frontMatter:{id:"locations",sidebar_label:"Locations",title:"Amazon Web Services CodeCommit Locations",description:"Setting up an integration with Amazon Web Services CodeCommit"}},c={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Register an entity on AWS CodeCommit",id:"register-an-entity-on-aws-codecommit",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The AWS CodeCommit integration supports loading catalog entities from CodeCommit Repositories.\nEntities can be added to\n",(0,o.jsx)(t.a,{href:"/docs/features/software-catalog/configuration",children:"static catalog configuration"}),",\nor registered with the\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/catalog-import",children:"catalog-import"}),"\nplugin."]}),"\n",(0,o.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(t.p,{children:["To use this integration, add configuration to your ",(0,o.jsx)(t.code,{children:"app-config.yaml"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"integrations:\n  awsCodeCommit:\n    - region: eu-west-1\n"})}),"\n",(0,o.jsx)(t.p,{children:"This most basic example can only be used if you are running Backstage on an instance that has an IAM identity with the following policies:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Action": [\n                "codecommit:GetFile",\n                "codecommit:GetFolder"\n            ],\n            "Resource": "*",\n            "Effect": "Allow"\n        }\n    ]\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"If you are running Backstage outside AWS and want to use Access key authentication, you can use the following configuration:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"integrations:\n  awsCodeCommit:\n    - region: eu-west-1\n      accessKeyId: ${AWS_ACCESS_KEY_ID}\n      secretAccessKey: ${AWS_SECRET_ACCESS_KEY}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Then make sure the environment variables ",(0,o.jsx)(t.code,{children:"AWS_ACCESS_KEY_ID"})," and\n",(0,o.jsx)(t.code,{children:"AWS_SECRET_ACCESS_KEY"})," are set when you run Backstage."]}),"\n",(0,o.jsxs)(t.p,{children:["Users with multiple AWS accounts may want to use a role for CodeCommit that is\nin a different AWS account. Using the ",(0,o.jsx)(t.code,{children:"roleArn"})," parameter as seen below, you can\ninstruct the AWS CodeCommit reader to assume a role before accessing CodeCommit:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"integrations:\n  awsCodeCommit:\n    - region: eu-west-1\n      roleArn: 'arn:aws:iam::xxxxxxxxxxxx:role/example-role'\n      externalId: 'some-id' # optional\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Each entry is a structure with the following ",(0,o.jsx)(t.strong,{children:"required"})," elements:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"region"}),": The AWS region to connect to, to communicate with the CodeCommit services"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The configuration can also provide a ",(0,o.jsx)(t.code,{children:"host"})," property like the other integrations. If it is not provided, it will be determined from the provided region.\ni.e. When you provide ",(0,o.jsx)(t.code,{children:"eu-west-1"})," as the region, Backstage will use the host ",(0,o.jsx)(t.code,{children:"eu-west-1.console.aws.amazon.com"})," to check whether a provided url matches the integration."]}),"\n",(0,o.jsx)(t.h2,{id:"register-an-entity-on-aws-codecommit",children:"Register an entity on AWS CodeCommit"}),"\n",(0,o.jsx)(t.p,{children:"To register an entity that is stored in an AWS CodeCommit repository, you need to fetch the URL from the AWS Console:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Navigate to the Code Commit service in the AWS Console (",(0,o.jsx)(t.a,{href:"https://console.aws.amazon.com/codecommit/home",children:"https://console.aws.amazon.com/codecommit/home"}),")"]}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.em,{children:"Optional: Make sure you select the correct region if you don't use the default one (us-east-1)"})}),"\n",(0,o.jsx)(t.li,{children:"Select the repository where the entity file is stored"}),"\n",(0,o.jsxs)(t.li,{children:["Inside the repository navigate to the backstage entity file (",(0,o.jsx)(t.code,{children:"catalog-info.yaml"}),") and open the file"]}),"\n",(0,o.jsx)(t.li,{children:"Now you can copy-paste the URL from your browser inside Backstage"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The format would be something like:\n",(0,o.jsx)(t.code,{children:"https://{region}.console.aws.amazon.com/codesuite/codecommit/repositories/{reponame}/browse/refs/heads/{branch}/--/catalog-info.yaml"})]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var o=n(827378),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var o,i={},u=null,l=null;for(o in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,o)&&!c.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===i[o]&&(i[o]=t[o]);return{$$typeof:r,type:e,key:u,ref:l,props:i,_owner:s.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}function _(){}function x(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=g.prototype;var C=x.prototype=new _;C.constructor=x,h(C,g.prototype),C.isPureReactComponent=!0;var b=Array.isArray,v=Object.prototype.hasOwnProperty,w={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,o){var r,i={},a=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)v.call(t,r)&&!S.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(1===c)i.children=o;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===i[r]&&(i[r]=c[r]);return{$$typeof:n,type:e,key:a,ref:s,props:i,_owner:w.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case o:c=!0}}if(c)return a=a(c=e),e=""===i?"."+A(c,0):i,b(a)?(r="",null!=e&&(r=e.replace(E,"$&/")+"/"),R(a,t,r,"",(function(e){return e}))):null!=a&&(k(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),t.push(a)),1;if(c=0,i=""===i?".":i+":",b(e))for(var u=0;u<e.length;u++){var l=i+A(s=e[u],u);c+=R(s,t,r,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)c+=R(s=s.value,t,r,l=i+A(s,u++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,t,n){if(null==e)return e;var o=[],r=0;return R(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function W(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},I={transition:null},T={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:I,ReactCurrentOwner:w};function P(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:$,forEach:function(e,t,n){$(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=r,t.Profiler=a,t.PureComponent=x,t.StrictMode=i,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.act=P,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=h({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=w.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)v.call(t,u)&&!S.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=o;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];r.children=c}return{$$typeof:n,type:e.type,key:i,ref:a,props:r,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:W}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=P,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var o=n(667294);const r={},i=o.createContext(r);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);