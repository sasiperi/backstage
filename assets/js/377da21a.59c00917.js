/*! For license information please see 377da21a.59c00917.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[374572],{425061:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var n=r(824246),s=r(511151);const o={id:"test-utils",title:"@backstage/test-utils",description:"API Reference for @backstage/test-utils"},c=void 0,i={id:"reference/test-utils",title:"@backstage/test-utils",description:"API Reference for @backstage/test-utils",source:"@site/../docs/reference/test-utils.md",sourceDirName:"reference",slug:"/reference/test-utils",permalink:"/docs/reference/test-utils",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/test-utils.md",tags:[],version:"current",frontMatter:{id:"test-utils",title:"@backstage/test-utils",description:"API Reference for @backstage/test-utils"}},l={},a=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/test-utils",children:(0,n.jsx)(t.code,{children:"@backstage/test-utils"})})]}),"\n",(0,n.jsx)(t.p,{children:"Utilities to test Backstage plugins and apps."}),"\n",(0,n.jsx)(t.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Class"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.mockanalyticsapi",children:"MockAnalyticsApi"})}),(0,n.jsxs)(t.td,{children:["Mock implementation of ",(0,n.jsx)(t.a,{href:"/docs/reference/core-plugin-api.analyticsapi",children:"AnalyticsApi"})," with helpers to ensure that events are sent correctly. Use getEvents in tests to verify captured events."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.mockconfigapi",children:"MockConfigApi"})}),(0,n.jsxs)(t.td,{children:["MockConfigApi is a thin wrapper around ",(0,n.jsx)(t.a,{href:"/docs/reference/config.configreader",children:"ConfigReader"})," that can be used to mock configuration using a plain object."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.mockerrorapi",children:"MockErrorApi"})}),(0,n.jsxs)(t.td,{children:["Mock implementation of the ",(0,n.jsx)(t.a,{href:"/docs/reference/core-plugin-api.errorapi",children:"ErrorApi"})," to be used in tests. Includes withForError and getErrors methods for error testing."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.mockfetchapi",children:"MockFetchApi"})}),(0,n.jsxs)(t.td,{children:["A test helper implementation of ",(0,n.jsx)(t.a,{href:"/docs/reference/core-plugin-api.fetchapi",children:"FetchApi"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.mockpermissionapi",children:"MockPermissionApi"})}),(0,n.jsxs)(t.td,{children:["Mock implementation of ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-permission-react.permissionapi",children:"PermissionApi"}),". Supply a requestHandler function to override the mock result returned for a given request."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.mockstorageapi",children:"MockStorageApi"})}),(0,n.jsxs)(t.td,{children:["Mock implementation of the ",(0,n.jsx)(t.a,{href:"/docs/reference/core-plugin-api.storageapi",children:"StorageApi"})," to be used in tests"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.testapiregistry",children:"TestApiRegistry"})}),(0,n.jsxs)(t.td,{children:["The ",(0,n.jsx)(t.code,{children:"TestApiRegistry"})," is an ",(0,n.jsx)(t.a,{href:"/docs/reference/core-plugin-api.apiholder",children:"ApiHolder"})," implementation that is particularly well suited for development and test environments such as unit tests, storybooks, and isolated plugin development setups."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Function"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.createtestappwrapper",children:"createTestAppWrapper(options)"})}),(0,n.jsx)(t.td,{children:"Creates a Wrapper component that wraps a component inside a Backstage test app, providing a mocked theme and app context, along with mocked APIs."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.mockbreakpoint",children:"mockBreakpoint(options)"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsxs)(t.p,{children:["This is a mocking method suggested in the Jest docs, as it is not implemented in JSDOM yet. It can be used to mock values for the Material UI ",(0,n.jsx)(t.code,{children:"useMediaQuery"})," hook if it is used in a tested component."]}),(0,n.jsxs)(t.p,{children:["For issues checkout the documentation: ",(0,n.jsx)(t.a,{href:"https://jestjs.io/docs/manual-mocks%5C#mocking-methods-which-are-not-implemented-in-jsdom",children:"https://jestjs.io/docs/manual-mocks\\#mocking-methods-which-are-not-implemented-in-jsdom"})]}),(0,n.jsxs)(t.p,{children:["If there are any updates from Material UI React on testing ",(0,n.jsx)(t.code,{children:"useMediaQuery"})," this mock should be replaced ",(0,n.jsx)(t.a,{href:"https://mui.com/material-ui/react-use-media-query/%5C#testing",children:"https://mui.com/material-ui/react-use-media-query/\\#testing"})]})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.registermswtesthooks",children:"registerMswTestHooks(worker)"})}),(0,n.jsx)(t.td,{children:"Sets up handlers for request mocking"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.renderintestapp",children:"renderInTestApp(Component, options)"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.p,{children:"Renders a component inside a Backstage test app, providing a mocked theme and app context, along with mocked APIs."}),(0,n.jsxs)(t.p,{children:["The render executes async effects similar to ",(0,n.jsx)(t.code,{children:"renderWithEffects"}),". To avoid this behavior, use a regular ",(0,n.jsx)(t.code,{children:"render()"})," + ",(0,n.jsx)(t.code,{children:"wrapInTestApp()"})," instead."]})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.renderwitheffects",children:"renderWithEffects(nodes, options)"})}),(0,n.jsx)(t.td,{children:"Simplifies rendering of async components in by taking care of the wrapping inside act"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.setuprequestmockhandlers",children:"setupRequestMockHandlers(worker)"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.withlogcollector",children:"withLogCollector(callback)"})}),(0,n.jsx)(t.td,{children:"Asynchronous log collector with that collects all categories"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.withlogcollector_1",children:"withLogCollector(callback)"})}),(0,n.jsx)(t.td,{children:"Synchronous log collector with that collects all categories"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.withlogcollector_2",children:"withLogCollector(logsToCollect, callback)"})}),(0,n.jsx)(t.td,{children:"Asynchronous log collector with that only collects selected categories"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.withlogcollector_3",children:"withLogCollector(logsToCollect, callback)"})}),(0,n.jsx)(t.td,{children:"Synchronous log collector with that only collects selected categories"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.wrapintestapp",children:"wrapInTestApp(Component, options)"})}),(0,n.jsx)(t.td,{children:"Wraps a component inside a Backstage test app, providing a mocked theme and app context, along with mocked APIs."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Interface"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.mockfetchapioptions",children:"MockFetchApiOptions"})}),(0,n.jsxs)(t.td,{children:["The options given when constructing a ",(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.mockfetchapi",children:"MockFetchApi"}),"."]})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.testapiprovider",children:"TestApiProvider"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"TestApiProvider"})," is a Utility API context provider that is particularly well suited for development and test environments such as unit tests, storybooks, and isolated plugin development setups."]}),(0,n.jsx)(t.p,{children:"It lets you provide any number of API implementations, without necessarily having to fully implement each of the APIs."})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.textcontentmatcher",children:"textContentMatcher"})}),(0,n.jsxs)(t.td,{children:["Returns a ",(0,n.jsx)(t.code,{children:"@testing-library/react"})," valid MatcherFunction for supplied text"]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type Alias"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.asynclogcollector",children:"AsyncLogCollector"})}),(0,n.jsxs)(t.td,{children:["AsyncLogCollector type used in ",(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.withlogcollector",children:"withLogCollector()"})," callback function."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.collectedlogs",children:"CollectedLogs"})}),(0,n.jsx)(t.td,{children:"Map of severity level and corresponding log lines."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.errorwithcontext",children:"ErrorWithContext"})}),(0,n.jsx)(t.td,{children:"ErrorWithContext contains error and ErrorApiErrorContext"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.legacyrootoption",children:"LegacyRootOption"})}),(0,n.jsx)(t.td,{children:"Set legacy mode when using React 18/RTL 13+. Mock this option while we're working against React 17 or lower."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.logcollector",children:"LogCollector"})}),(0,n.jsxs)(t.td,{children:["Union type used in ",(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.withlogcollector_2",children:"withLogCollector()"})," callback function."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.logfuncs",children:"LogFuncs"})}),(0,n.jsxs)(t.td,{children:["Severity levels of ",(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.collectedlogs",children:"CollectedLogs"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.mockerrorapioptions",children:"MockErrorApiOptions"})}),(0,n.jsxs)(t.td,{children:["Constructor arguments for ",(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.mockerrorapi",children:"MockErrorApi"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.mockstoragebucket",children:"MockStorageBucket"})}),(0,n.jsxs)(t.td,{children:["Type for map holding data in ",(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.mockstorageapi",children:"MockStorageApi"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.synclogcollector",children:"SyncLogCollector"})}),(0,n.jsxs)(t.td,{children:["SyncLogCollector type used in ",(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.withlogcollector_1",children:"withLogCollector()"})," callback function."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.testapiproviderprops",children:"TestApiProviderProps"})}),(0,n.jsxs)(t.td,{children:["Properties for the ",(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.testapiprovider",children:"TestApiProvider"})," component."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.testappoptions",children:"TestAppOptions"})}),(0,n.jsx)(t.td,{children:"Options to customize the behavior of the test app wrapper."})]})]})]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},371426:(e,t,r)=>{var n=r(827378),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,o={},a=null,d=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,n)&&!l.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:a,ref:d,props:o,_owner:i.current}}t.Fragment=o,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,j={};function m(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||p}function y(){}function g(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||p}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var k=g.prototype=new y;k.constructor=g,x(k,m.prototype),k.isPureReactComponent=!0;var v=Array.isArray,b=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var s,o={},c=null,i=null;if(null!=t)for(s in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)b.call(t,s)&&!_.hasOwnProperty(s)&&(o[s]=t[s]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var a=Array(l),d=0;d<l;d++)a[d]=arguments[d+2];o.children=a}if(e&&e.defaultProps)for(s in l=e.defaultProps)void 0===o[s]&&(o[s]=l[s]);return{$$typeof:r,type:e,key:c,ref:i,props:o,_owner:w.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var S=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,s,o,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return c=c(l=e),e=""===o?"."+E(l,0):o,v(c)?(s="",null!=e&&(s=e.replace(S,"$&/")+"/"),R(c,t,s,"",(function(e){return e}))):null!=c&&(A(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,s+(!c.key||l&&l.key===c.key?"":(""+c.key).replace(S,"$&/")+"/")+e)),t.push(c)),1;if(l=0,o=""===o?".":o+":",v(e))for(var a=0;a<e.length;a++){var d=o+E(i=e[a],a);l+=R(i,t,s,d,c)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),a=0;!(i=e.next()).done;)l+=R(i=i.value,t,s,d=o+E(i,a++),c);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function T(e,t,r){if(null==e)return e;var n=[],s=0;return R(e,n,"","",(function(e){return t.call(r,e,s++)})),n}function M(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},I={transition:null},O={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:I,ReactCurrentOwner:w};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:T,forEach:function(e,t,r){T(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!A(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=s,t.Profiler=c,t.PureComponent=g,t.StrictMode=o,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.act=L,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=x({},e.props),o=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=w.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)b.call(t,a)&&!_.hasOwnProperty(a)&&(s[a]=void 0===t[a]&&void 0!==l?l[a]:t[a])}var a=arguments.length-2;if(1===a)s.children=n;else if(1<a){l=Array(a);for(var d=0;d<a;d++)l[d]=arguments[d+2];s.children=l}return{$$typeof:r,type:e.type,key:o,ref:c,props:s,_owner:i}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=A,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:M}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,r){return P.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,r){return P.current.useReducer(e,t,r)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return P.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return P.current.useTransition()},t.version="18.3.1"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>c});var n=r(667294);const s={},o=n.createContext(s);function c(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);