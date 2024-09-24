!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},l=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(r){s=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:O(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=d;var p="suspendedStart",g="suspendedYield",v="executing",y="completed",m={};function b(){}function w(){}function x(){}var S={};s(S,l,(function(){return this}));var j=Object.getPrototypeOf,k=j&&j(j(G([])));k&&k!==o&&i.call(k,l)&&(S=k);var E=x.prototype=b.prototype=Object.create(S);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(e,r){function n(o,a,c,l){var u=h(e[o],e,a);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==t(s)&&i.call(s,"__await")?r.resolve(s.__await).then((function(t){n("next",t,c,l)}),(function(t){n("throw",t,c,l)})):r.resolve(s).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,l)}))}l(u.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function O(t,e,n){var o=p;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var l=z(c,n);if(l){if(l===m)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var u=h(t,e,n);if("normal"===u.type){if(o=n.done?y:g,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=y,n.method="throw",n.arg=u.arg)}}}function z(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,z(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=h(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function G(e){if(e||""===e){var n=e[l];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return w.prototype=x,a(E,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:w,configurable:!0}),w.displayName=s(x,f,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,f,"GeneratorFunction")),t.prototype=Object.create(E),t},n.awrap=function(t){return{__await:t}},L(_.prototype),s(_.prototype,u,(function(){return this})),n.AsyncIterator=_,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new _(d(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),s(E,f,"Generator"),s(E,l,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=G,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},n}function r(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],l=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function i(e,r,n){return(r=function(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==t(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}System.register(["./RDropdownItem-legacy-CZvrTFmj.js","./index-legacy-D92hfgD0.js","./index-legacy-BnT4rcVz.js","./usePopupContainer-legacy-B27Yz2o4.js","./index-legacy-C5nl4eCF.js","./RSelect.vue_vue_type_script_setup_true_lang-legacy-BlCL2tu-.js","./dropdown-legacy-Ef-aP5fV.js","./ClearButton-legacy-BkfdqdUX.js","./useValidation-legacy-BdDQzCcT.js","./index-legacy-DjC9o_w0.js","./index-legacy-CLTyZtoE.js","./colors-legacy-C517ykp9.js","./createContext-legacy-DI7CWFS2.js","./supportsPassive-legacy-BJhmO5TL.js","./index-legacy-xM8aKfZE.js"],(function(t,o){"use strict";var a,c,l,u,f,s,d,h,p,g,v,y,m,b,w,x,S,j,k,E,L,_,O,z,P,C,T,G,M,A,I,B,N,W,H,D,F,$,R,Y;return{setters:[function(t){a=t.default},null,function(t){c=t.g,l=t.m,u=t._,f=t.a5,s=t.aN,d=t.d,h=t.u,p=t.a,g=t.at,v=t.c,y=t.f,m=t.r,b=t.al,w=t.c3,x=t.am,S=t.c4,j=t.aq,k=t.ad,E=t.h,L=t.N,_=t.n,O=t.z,z=t.v,P=t.x,C=t.E,T=t.U,G=t.ae,M=t.q,A=t.ah,I=t.L,B=t.G,N=t.O,W=t.B},function(t){H=t.u},function(t){D=t.l,F=t.a,$=t.b},function(t){R=t.d},function(t){Y=t.D},null,null,null,null,null,null,null,null],execute:function(){var o=function(t){var e=t.componentCls,r=t.sizePaddingEdgeHorizontal,n=t.colorSplit,o=t.lineWidth;return i({},e,u(u({},f(t)),i(i(i(i(i(i(i(i(i(i({borderBlockStart:"".concat(o,"px solid ").concat(n),"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:"0 ".concat(t.dividerVerticalGutterMargin,"px"),verticalAlign:"middle",borderTop:0,borderInlineStart:"".concat(o,"px solid ").concat(n)},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:"".concat(t.dividerHorizontalGutterMargin,"px 0")}},"&-horizontal".concat(e,"-with-text"),{display:"flex",alignItems:"center",margin:"".concat(t.dividerHorizontalWithTextGutterMargin,"px 0"),color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 ".concat(n),"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"".concat(o,"px solid transparent"),borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}}),"&-horizontal".concat(e,"-with-text-left"),{"&::before":{width:"5%"},"&::after":{width:"95%"}}),"&-horizontal".concat(e,"-with-text-right"),{"&::before":{width:"95%"},"&::after":{width:"5%"}}),"".concat(e,"-inner-text"),{display:"inline-block",padding:"0 1em"}),"&-dashed",{background:"none",borderColor:n,borderStyle:"dashed",borderWidth:"".concat(o,"px 0 0")}),"&-horizontal".concat(e,"-with-text").concat(e,"-dashed"),{"&::before, &::after":{borderStyle:"dashed none none"}}),"&-vertical".concat(e,"-dashed"),{borderInlineStartWidth:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0}),"&-plain".concat(e,"-with-text"),{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize}),"&-horizontal".concat(e,"-with-text-left").concat(e,"-no-default-orientation-margin-left"),i({"&::before":{width:0},"&::after":{width:"100%"}},"".concat(e,"-inner-text"),{paddingInlineStart:r})),"&-horizontal".concat(e,"-with-text-right").concat(e,"-no-default-orientation-margin-right"),i({"&::before":{width:"100%"},"&::after":{width:0}},"".concat(e,"-inner-text"),{paddingInlineEnd:r}))))},V=c("Divider",(function(t){var e=l(t,{dividerVerticalGutterMargin:t.marginXS,dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG});return[o(e)]}),{sizePaddingEdgeHorizontal:0}),q=d({name:"ADivider",inheritAttrs:!1,compatConfig:{MODE:3},props:{prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"},plain:{type:Boolean,default:!1},orientationMargin:[String,Number]},setup:function(t,e){var r=e.slots,o=e.attrs,a=h("divider",t),c=a.prefixCls,l=a.direction,f=n(V(c),2),s=f[0],d=f[1],m=p((function(){return"left"===t.orientation&&null!=t.orientationMargin})),b=p((function(){return"right"===t.orientation&&null!=t.orientationMargin})),w=p((function(){var e=t.type,r=t.dashed,n=t.plain,o=c.value;return i(i(i(i(i(i(i(i({},o,!0),d.value,!!d.value),"".concat(o,"-").concat(e),!0),"".concat(o,"-dashed"),!!r),"".concat(o,"-plain"),!!n),"".concat(o,"-rtl"),"rtl"===l.value),"".concat(o,"-no-default-orientation-margin-left"),m.value),"".concat(o,"-no-default-orientation-margin-right"),b.value)})),x=p((function(){var e="number"==typeof t.orientationMargin?"".concat(t.orientationMargin,"px"):t.orientationMargin;return u(u({},m.value&&{marginLeft:e}),b.value&&{marginRight:e})})),S=p((function(){return t.orientation.length>0?"-"+t.orientation:t.orientation}));return function(){var t,e=g(null===(t=r.default)||void 0===t?void 0:t.call(r));return s(v("div",y(y({},o),{},{class:[w.value,e.length?"".concat(c.value,"-with-text ").concat(c.value,"-with-text").concat(S.value):"",o.class],role:"separator"}),[e.length?v("span",{class:"".concat(c.value,"-inner-text"),style:x.value},[e]):null]))}}}),U=s(q);function X(t){var o=t.loading,i=t.trigger,a=m(null),c=m(null),l=m(!1),u=n(b(!1),2),f=u[0],s=u[1],d=p((function(){return"hover"==(null==i?void 0:i.value)})),h=w(c).isOutside,g=w(a).isOutside,v=n(b(!1),2),y=v[0],E=v[1];return x(D(g),(function(){return E(!1)})),x(F($(D(h),F(D(g),y)),d),(function(){return s(!0)})),x(F(h,g,d),(function(){setTimeout((function(){h.value&&g.value&&s(!1)}),100)})),S(a,function(){var t,n=(t=e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(d.value){t.next=4;break}return t.next=3,j(50);case 3:!f.value||l.value||null!=o&&o.value||k((function(){return s(!1)}));case 4:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,l,"next",t)}function l(t){r(a,o,i,c,l,"throw",t)}c(void 0)}))});return function(t){return n.apply(this,arguments)}}()),{toggleOpen:function(){l.value=!0,s(),setTimeout((function(){l.value=!1}),100)},target:a,visible:f,toggle:s,triggerTarget:c}}var Z={class:"bg-white dark:border-white app-dropdown rounded-lg py-1.5 shadow-md min-w-50"};t("default",d({__name:"RDropdown",props:{items:E.arrayOf(E.shape({icon:E.any,text:E.string,cb:E.func,separator:E.bool})),trigger:E.oneOf(["hover","click","contextmenu"]).def("click"),getPopupContainer:E.func,placement:E.oneOf(R).def("bottom")},emits:["selected"],setup:function(t,e){var r=e.emit;var n=L(t),o=n.items,i=n.trigger,c=n.getPopupContainer,l=H(i,c),u=l.container,f=l.triggerMode,s=l.getPopupContainerFn,d=X({trigger:i}),h=d.toggleOpen,p=d.target,g=d.triggerTarget,y=d.visible;return function(e,n){return _(),O("div",{ref_key:"container",ref:u,class:"flex z-10 relative"},[v(C(Y),W({open:C(y),getPopupContainer:C(s)},e.$attrs,{placement:t.placement,trigger:C(f)}),{overlay:z((function(){return[P("div",{ref_key:"target",ref:p},[P("div",Z,[C(o)?(_(!0),O(T,{key:0},G(C(o),(function(t,e){return _(),O(T,{key:e},[t.separator?(_(),M(C(U),{key:0,class:"!mb-1 !mt-1.5"})):(_(),M(a,{key:1,onClick:function(e){return function(t){r("selected",t),t.cb()}(t)}},{icon:z((function(){return[(_(),M(A(t.icon),{class:"group-hover:text-white text-primary-600 dark:text-primary-500"}))]})),default:z((function(){return[I(" "+B(t.text),1)]})),_:2},1032,["onClick"]))],64)})),128)):N(e.$slots,"content",{key:1})])],512)]})),default:z((function(){return[P("div",{ref_key:"triggerTarget",ref:g,class:"dropdown-slot-container",onClickCapture:n[0]||(n[0]=function(){return C(h)&&C(h).apply(void 0,arguments)})},[N(e.$slots,"default")],544)]})),_:3},16,["open","getPopupContainer","placement","trigger"])],512)}}}))}}}))}();
