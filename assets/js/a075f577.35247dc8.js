/*! For license information please see a075f577.35247dc8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[816145],{603905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,f=p(e,["components","mdxType","originalType","parentName"]),l=u(r),y=o,d=l["".concat(i,".").concat(y)]||l[y]||s[y]||a;return r?n.createElement(d,c(c({ref:t},f),{},{components:r})):n.createElement(d,c({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[l]="string"==typeof e?e:o,c[1]=p;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},576:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>c,metadata:()=>i,toc:()=>f});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={id:"core-app-api.appcontext",title:"AppContext",description:"API reference for AppContext"},p=void 0,i={unversionedId:"reference/core-app-api.appcontext",id:"reference/core-app-api.appcontext",title:"AppContext",description:"API reference for AppContext",source:"@site/../docs/reference/core-app-api.appcontext.md",sourceDirName:"reference",slug:"/reference/core-app-api.appcontext",permalink:"/docs/reference/core-app-api.appcontext",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.appcontext.md",tags:[],version:"current",frontMatter:{id:"core-app-api.appcontext",title:"AppContext",description:"API reference for AppContext"}},u={},f=[],l={toc:f};function s(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/core-app-api"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/core-app-api"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/core-app-api.appcontext"}),(0,n.kt)("inlineCode",{parentName:"a"},"AppContext"))),(0,n.kt)("p",null,"The central context providing runtime app specific state that plugin views want to consume."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"type AppContext = {\n    getPlugins(): BackstagePlugin[];\n    getSystemIcon(key: string): IconComponent | undefined;\n    getSystemIcons(): Record<string, IconComponent>;\n    getComponents(): AppComponents;\n};\n")),(0,n.kt)("b",null,"References:")," [BackstagePlugin](/docs/reference/core-plugin-api.backstageplugin), [IconComponent](/docs/reference/core-plugin-api.iconcomponent), [AppComponents](/docs/reference/core-app-api.appcomponents)")}s.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var c,p,i=o(e),u=1;u<arguments.length;u++){for(var f in c=Object(arguments[u]))r.call(c,f)&&(i[f]=c[f]);if(t){p=t(c);for(var l=0;l<p.length;l++)n.call(c,p[l])&&(i[p[l]]=c[p[l]])}}return i}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var c=60109,p=60110,i=60112;var u=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),a=l("react.portal"),l("react.fragment"),l("react.strict_mode"),l("react.profiler"),c=l("react.provider"),p=l("react.context"),i=l("react.forward_ref"),l("react.suspense"),u=l("react.memo"),f=l("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}function g(){}function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var h=v.prototype=new g;h.constructor=v,n(h,b.prototype),h.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},c=null,p=null;if(null!=t)for(n in void 0!==t.ref&&(p=t.ref),void 0!==t.key&&(c=""+t.key),t)j.call(t,n)&&!k.hasOwnProperty(n)&&(a[n]=t[n]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var u=Array(i),f=0;f<i;f++)u[f]=arguments[f+2];a.children=u}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return{$$typeof:o,type:e,key:c,ref:p,props:a,_owner:O.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,c){var p=typeof e;"undefined"!==p&&"boolean"!==p||(e=null);var i=!1;if(null===e)i=!0;else switch(p){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case a:i=!0}}if(i)return c=c(i=e),e=""===n?"."+C(i,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),S(c,t,r,"",(function(e){return e}))):null!=c&&(x(c)&&(c=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+e)),t.push(c)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=n+C(p=e[u],u);i+=S(p,t,r,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(p=e.next()).done;)i+=S(p=p.value,t,r,f=n+C(p,u++),c);else if("object"===p)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function _(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function A(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function I(){var e=E.current;if(null===e)throw Error(y(321));return e}},827378:(e,t,r)=>{r(541535)}}]);