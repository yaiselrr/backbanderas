!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n,r){return(n=function(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,n||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,c,u=[],a=!0,l=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=o.call(n)).done)&&(u.push(r.value),u.length!==t);a=!0);}catch(e){l=!0,i=e}finally{try{if(!a&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw i}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-BnT4rcVz.js"],(function(e,r){"use strict";var i,o,c,u,a,l;return{setters:[function(e){i=e.c,o=e.I,c=e.a6,u=e.a,a=e._,l=e.b4}],execute:function(){e({i:function(e,t){if(!Array.isArray(e)&&void 0!==t)return p(e,t);return b(e)},u:function(){var e=n(c(),2)[1];return u((function(){var n=d(e.value),r=new Map,i=-1,o={};return{matchHandlers:{},dispatch:function(e){return o=e,r.forEach((function(e){return e(o)})),r.size>=1},subscribe:function(e){return r.size||this.register(),i+=1,r.set(i,e),e(o),i},unsubscribe:function(e){r.delete(e),r.size||this.unregister()},unregister:function(){var e=this;Object.keys(n).forEach((function(t){var r=n[t],i=e.matchHandlers[r];null==i||i.mql.removeListener(null==i?void 0:i.listener)})),r.clear()},register:function(){var e=this;Object.keys(n).forEach((function(r){var i=n[r],c=function(n){var i=n.matches;e.dispatch(a(a({},o),t({},r,i)))},u=window.matchMedia(i);u.addListener(c),e.matchHandlers[i]={mql:u,listener:c},c(u)}))},responsiveMap:n}}))}});var r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=e("C",(function(e,t){var n=s({},e,t.attrs);return i(o,s({},n,{icon:r}),null)}));m.displayName="CheckOutlined",m.inheritAttrs=!1;e("r",["xxxl","xxl","xl","lg","md","sm","xs"]);var d=function(e){return{xs:"(max-width: ".concat(e.screenXSMax,"px)"),sm:"(min-width: ".concat(e.screenSM,"px)"),md:"(min-width: ".concat(e.screenMD,"px)"),lg:"(min-width: ".concat(e.screenLG,"px)"),xl:"(min-width: ".concat(e.screenXL,"px)"),xxl:"(min-width: ".concat(e.screenXXL,"px)"),xxxl:"{min-width: ".concat(e.screenXXXL,"px}")}};var y,v=e("c",(function(){return l()&&window.document.documentElement})),b=function(e){if(l()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some((function(e){return e in n.style}))}return!1},p=function(e,t){if(!b(e))return!1;var n=document.createElement("div"),r=n.style[e];return n.style[e]=t,n.style[e]!==r};e("d",(function(){if(!v())return!1;if(void 0!==y)return y;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),y=1===e.scrollHeight,document.body.removeChild(e),y}))}}}))}();