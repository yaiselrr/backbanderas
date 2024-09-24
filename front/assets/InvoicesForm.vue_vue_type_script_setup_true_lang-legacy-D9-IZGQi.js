!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",u=l.asyncIterator||"@@asyncIterator",d=l.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(r){s=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof _?t:_,a=Object.create(o.prototype),l=new S(n||[]);return i(a,"_invoke",{value:P(e,r,l)}),a}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var y="suspendedStart",v="suspendedYield",h="executing",m="completed",b={};function _(){}function g(){}function w(){}var x={};s(x,c,(function(){return this}));var k=Object.getPrototypeOf,O=k&&k(k(U([])));O&&O!==o&&a.call(O,c)&&(x=O);var j=w.prototype=_.prototype=Object.create(x);function V(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function E(t,r){function n(o,i,l,c){var u=p(t[o],t,i);if("throw"!==u.type){var d=u.arg,s=d.value;return s&&"object"==e(s)&&a.call(s,"__await")?r.resolve(s.__await).then((function(e){n("next",e,l,c)}),(function(e){n("throw",e,l,c)})):r.resolve(s).then((function(e){d.value=e,l(d)}),(function(e){return n("throw",e,l,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(e,t){function a(){return new r((function(r,o){n(e,t,r,o)}))}return o=o?o.then(a,a):a()}})}function P(e,t,n){var o=y;return function(a,i){if(o===h)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var l=n.delegate;if(l){var c=q(l,n);if(c){if(c===b)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var u=p(e,t,n);if("normal"===u.type){if(o=n.done?m:v,u.arg===b)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function q(e,t){var n=t.method,o=e.iterator[n];if(o===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,q(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var a=p(o,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,b;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,b):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,b)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function U(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(a.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw new TypeError(e(t)+" is not iterable")}return g.prototype=w,i(j,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:g,configurable:!0}),g.displayName=s(w,d,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s(e,d,"GeneratorFunction")),e.prototype=Object.create(j),e},n.awrap=function(e){return{__await:e}},V(E.prototype),s(E.prototype,u,(function(){return this})),n.AsyncIterator=E,n.async=function(e,t,r,o,a){void 0===a&&(a=Promise);var i=new E(f(e,t,r,o),a);return n.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},V(j),s(j,d,"Generator"),s(j,c,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=U,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(I),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,o){return l.type="throw",l.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),I(r),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:U(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),b}},n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,f(n.key),n)}}function o(t,r,n){return r=i(r),function(t,r){if(r&&("object"==e(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(t,a()?Reflect.construct(r,n||[],i(t).constructor):r.apply(t,n))}function a(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(a=function(){return!!e})()}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return(t=f(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}function p(e,t,r,n,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}function y(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){p(a,n,o,i,l,"next",e)}function l(e){p(a,n,o,i,l,"throw",e)}i(void 0)}))}}System.register(["./index-legacy-BnT4rcVz.js","./RForm.vue_vue_type_script_setup_true_lang-legacy-CQJ14iDy.js","./RestBase-legacy-CyaXmJsG.js","./index-legacy-DjC9o_w0.js","./debounceValidator-legacy-CNcUd-ub.js","./index-legacy-C5nl4eCF.js","./RButton.vue_vue_type_style_index_0_lang-legacy-CorltFxv.js","./RDatePicker.vue_vue_type_style_index_0_lang-legacy-DSa8Vh5m.js","./RSelect.vue_vue_type_script_setup_true_lang-legacy-BlCL2tu-.js","./REditor.vue_vue_type_style_index_0_lang-legacy-BY4lRfIP.js","./orders.model-legacy-Dnsvwa-p.js"],(function(e,a){"use strict";var i,c,u,f,p,v,h,m,b,_,g,w,x,k,O,j,V,E,P,q,L,I,S,U,N,T,C,M,R,K,F,G,A,D,Y,B,z,X,Z,$;return{setters:[function(e){i=e.d,c=e.X,u=e.h,f=e.j,p=e.Y,v=e.k,h=e.r,m=e.a,b=e.S,_=e.n,g=e.z,w=e.q,x=e.v,k=e.O,O=e.E,j=e.Z,V=e.A,E=e.x,P=e.c,q=e.M,L=e.T,I=e.L,S=e.G,U=e.U},function(e){N=e._},function(e){T=e.R,C=e.C},function(e){M=e.r,R=e.i,K=e.d,F=e.m,G=e.R},function(e){A=e.d},function(e){D=e.d},function(e){Y=e._},function(e){B=e._},function(e){z=e._},function(e){X=e._},function(e){Z=e.O}],execute:($=y(t().mark((function a(){var $,H,J,Q,W,ee,te,re,ne,oe,ae,ie,le,ce,ue,de,se,fe,pe,ye,ve,he,me,be,_e,ge,we,xe,ke,Oe,je,Ve,Ee;return t().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return H=[{title:"Code",dataIndex:"code",align:"center",key:"code",sorter:function(e,t){return+(e.code>t.code)-+(e.code<t.code)}},{title:"Year",dataIndex:"year",align:"center",key:"year",sorter:function(e,t){return e.year-t.year}},{title:"Phone",dataIndex:"phone",align:"center",key:"phone",sorter:function(e,t){return+(e.phone>t.phone)-+(e.phone<t.phone)}},{title:"Address",dataIndex:"address",align:"center",key:"address",sorter:function(e,t){return+(e.address>t.address)-+(e.address<t.address)}},{title:"Subtotal",dataIndex:"subtotal",align:"center",key:"subtotal"},{title:"Total",dataIndex:"total",align:"center",key:"total"},{title:"Pay_way",dataIndex:"pay_way",align:"center",key:"pay_way",sorter:function(e,t){return+(e.pay_way>t.pay_way)-+(e.pay_way<t.pay_way)}},{title:"Observations",dataIndex:"observations",align:"center",key:"observations",sorter:function(e,t){return+(e.observations>t.observations)-+(e.observations<t.observations)}},{title:"Invoice_date",dataIndex:"invoice_date",align:"center",key:"invoice_date",sorter:function(e,t){return e.invoice_date-t.invoice_date}},{title:"Order",dataIndex:"order.code",align:"center",key:"order.code",customRender:function(e){var t;return null===(t=e.record.order)||void 0===t?void 0:t.code},sorter:function(e,t){return e.order&&t.order?(e.order.code>t.order.code)-(e.order.code<t.order.code):0}},{title:"Prefix",dataIndex:"prefix",align:"center",key:"prefix",sorter:function(e,t){return+(e.prefix>t.prefix)-+(e.prefix<t.prefix)}},{title:"Discount",dataIndex:"discount",align:"center",key:"discount"},{title:"Cancelled_at",dataIndex:"cancelled_at",align:"center",key:"cancelled_at",sorter:function(e,t){return e.cancelled_at-t.cancelled_at}},{title:"Cancelled_by",dataIndex:"cancelled_by",align:"center",key:"cancelled_by",sorter:function(e,t){return e.cancelled_by-t.cancelled_by}},{title:"Acciones",key:"_action",fixed:"right",scopedSlots:{customRender:"_action"}}],J={code:{required:M,isUnique:A((function(e,t){var r=d({},t.state),n=r.id,o=r.code,a=n?"update":"create";return!o||re.validate({code:o,id:n,_scenario:a,_specific:!0})}),void 0,500)},year:{required:M,integer:R},phone:{},address:{},subtotal:{required:M,decimal:K},total:{required:M,decimal:K},pay_way:{required:M},observations:{maxLength:F(65535)},invoice_date:{required:M},order_id:{required:M,integer:R},prefix:{required:M},discount:{required:M,decimal:K},cancelled_at:{},cancelled_by:{integer:R}},Q={code:{required:M,isUnique:A((function(e,t){var r=d({},t.state),n=r.id,o=r.code,a=n?"update":"create";return!o||re.validate({code:o,id:n,_scenario:a,_specific:!0})}),void 0,500)},year:{required:M,integer:R},phone:{},address:{},subtotal:{required:M,decimal:K},total:{required:M,decimal:K},pay_way:{required:M},observations:{maxLength:F(65535)},invoice_date:{required:M},order_id:{required:M,integer:R},prefix:{required:M},discount:{required:M,decimal:K},cancelled_at:{},cancelled_by:{integer:R}},W={create:J,update:Q},ee={create:{code:{isUnique:"This code has been taken"},id:{isUnique:"This id has been taken"}},update:{code:{isUnique:"This code has been taken"},id:{isUnique:"This id has been taken"}}},a.next=7,T("invoices","manage/invoices");case 7:te=a.sent,re=function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return r(this,t),s(e=o(this,t),"id",void 0),s(e,"code",void 0),s(e,"year",void 0),s(e,"phone",void 0),s(e,"address",void 0),s(e,"subtotal",void 0),s(e,"total",void 0),s(e,"pay_way",void 0),s(e,"observations",void 0),s(e,"invoice_date",void 0),s(e,"order_id",void 0),s(e,"prefix",void 0),s(e,"discount",void 0),s(e,"cancelled_at",void 0),s(e,"cancelled_by",void 0),s(e,"created_at",void 0),s(e,"updated_at",void 0),null!=n&&(e.id=n.id||void 0,e.code=n.code||null,e.year=n.year||null,e.phone=n.phone||null,e.address=n.address||null,e.subtotal=n.subtotal||null,e.total=n.total||null,e.pay_way=n.pay_way||null,e.observations=n.observations||null,e.invoice_date=n.invoice_date?D(n.invoice_date):null,e.order_id=n.order_id||null,e.prefix=n.prefix||null,e.discount=n.discount||null,e.cancelled_at=n.cancelled_at?D(n.cancelled_at):null,e.cancelled_by=n.cancelled_by||null,e.created_at=n.created_at?D(n.created_at):null,e.updated_at=n.updated_at?D(n.updated_at):null),e}return l(t,e),a=t,i=[{key:"set_attributes",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!=e&&(this.id=e.id,this.code=e.code,this.year=e.year,this.phone=e.phone,this.address=e.address,this.subtotal=e.subtotal,this.total=e.total,this.pay_way=e.pay_way,this.observations=e.observations,this.invoice_date=D(e.invoice_date),this.order_id=e.order_id,this.prefix=e.prefix,this.discount=e.discount,this.cancelled_at=D(e.cancelled_at),this.cancelled_by=e.cancelled_by,this.created_at=D(e.created_at),this.updated_at=D(e.updated_at))}},{key:"get_id",value:function(){return this.id}},{key:"class_name",value:function(){return"Invoices"}}],i&&n(a.prototype,i),c&&n(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a;var a,i,c}(te),$=re,s(re,"validations",W),s(re,"feedbacks",ee),s(re,"columns",H),s(re,"visible_columns",$.show_columns(["*"],!0)),e("I",re),ne={class:"r-container-form"},oe={class:"mt-10 sm:mt-0"},ae={class:"shadow overflow-hidden sm:rounded-md"},ie={class:"px-4 py-5 bg-white dark:bg-slate-800 sm:p-6"},le={class:"grid grid-cols-4 gap-4"},ce={class:"grid-input"},ue={class:"grid-input"},de={class:"grid-input"},se={class:"grid-input"},fe={class:"grid-input"},pe={class:"grid-input"},ye={class:"grid-input"},ve={class:"col-span-4"},he={class:"grid-input"},me={class:"grid-input"},be={class:"grid-input"},_e={class:"grid-input"},ge={class:"grid-input"},we={class:"grid-input"},xe={class:"px-4 py-3 bg-gray-50 dark:bg-slate-700 dark:bg-opacity-70 text-right sm:px-6"},ke={class:"r-footer-form"},Oe={class:"flex"},je={key:0,class:"flex-none items-center"},Ve=[E("label",{for:"andNew",class:"font-bold text-gray-700 dark:text-slate-200 !cursor-pointer"},[I("Insertar y nuevo "),E("span",{id:"andNew-description",class:"ml-1 text-muted"},"Se insertara un elemento y reiniciara el formuario")],-1)],Ee={class:"r-footer-button-form"},e("_",i({__name:"InvoicesForm",props:c({modal:u.bool.def(!1),action:u.string.def("create"),loading_text:u.string.def(""),showLoading:u.bool.def(!0)},{modelValue:{},modelModifiers:{}}),emits:c(["closeModal","reload"],["update:modelValue"]),setup:function(e,r){var n=r.emit,o=f(),a=e,i=n,l="create"==a.action?"Crear":"Actualizar",c=p(e,"modelValue"),u=v(new re(c.value)),d=h(),s=h(!1),T=Z.useGetMany(),M=T.loading,R=T.result,K=re.useStaticSave(u,{defaultEnabled:!1}),F=K.loading,A=K.toggleEnabled,D=K.onResult,$=K.enabled,H=K.onError,J=m((function(){return M.value})),Q=function(){a.modal?i("closeModal"):o.push({name:"invoices_list"})};function W(){return ee.apply(this,arguments)}function ee(){return(ee=y(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(r=d.value)||void 0===r?void 0:r.validate();case 2:e.sent&&A();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return H((function(e){b("error","Error en accion","Error en accion del elemento")})),D((function(e){var t;b("success","Accion  "+l,"Accion ejecutada correctamente"),s.value?(null===(t=d.value)||void 0===t||t.clear(),$.value=!1,Object.assign(u,new re(c.value)),a.modal&&i("reload")):a.modal?i("closeModal",!0):o.push({name:"invoices_list"})})),function(t,r){var n=C;return _(),g(U,null,[e.showLoading?(_(),w(j,{key:0,"h-full":!0,class:"",loading:O(J),description:a.loading_text},{default:x((function(){return[k(t.$slots,"loading_icon")]})),_:3},8,["loading","description"])):V("",!0),E("div",ne,[E("div",oe,[E("div",ae,[P(N,{ref_key:"invoicesForm",ref:d,state:O(u),validations:O(re).validations[e.action],feedbacks:O(re).feedbacks[e.action],loading:!0},{default:x((function(){var t;return[E("div",ie,[E("div",le,[E("div",ce,[P(O(G),{type:"text",requiredMark:!0,modelValue:O(u).code,"onUpdate:modelValue":r[0]||(r[0]=function(e){return O(u).code=e}),path:"code",label:"Code",onKeyup:q(W,["enter"])},null,8,["modelValue"])]),E("div",ue,[P(O(G),{onlyNumbers:!0,type:"number",requiredMark:!0,modelValue:O(u).year,"onUpdate:modelValue":r[1]||(r[1]=function(e){return O(u).year=e}),path:"year",label:"Year",onKeyup:q(W,["enter"])},null,8,["modelValue"])]),E("div",de,[P(O(G),{type:"text",modelValue:O(u).phone,"onUpdate:modelValue":r[2]||(r[2]=function(e){return O(u).phone=e}),path:"phone",label:"Phone",onKeyup:q(W,["enter"])},null,8,["modelValue"])]),E("div",se,[P(O(G),{type:"text",modelValue:O(u).address,"onUpdate:modelValue":r[3]||(r[3]=function(e){return O(u).address=e}),path:"address",label:"Address",onKeyup:q(W,["enter"])},null,8,["modelValue"])]),E("div",fe,[P(O(G),{onlyNumbers:!0,type:"number",requiredMark:!0,modelValue:O(u).subtotal,"onUpdate:modelValue":r[4]||(r[4]=function(e){return O(u).subtotal=e}),path:"subtotal",label:"Subtotal",onKeyup:q(W,["enter"])},null,8,["modelValue"])]),E("div",pe,[P(O(G),{onlyNumbers:!0,type:"number",requiredMark:!0,modelValue:O(u).total,"onUpdate:modelValue":r[5]||(r[5]=function(e){return O(u).total=e}),path:"total",label:"Total",onKeyup:q(W,["enter"])},null,8,["modelValue"])]),E("div",ye,[P(O(G),{type:"text",requiredMark:!0,modelValue:O(u).pay_way,"onUpdate:modelValue":r[6]||(r[6]=function(e){return O(u).pay_way=e}),path:"pay_way",label:"Pay_way",onKeyup:q(W,["enter"])},null,8,["modelValue"])]),E("div",ve,[P(X,{modelValue:O(u).observations,"onUpdate:modelValue":r[7]||(r[7]=function(e){return O(u).observations=e}),path:"observations",label:"Observations"},null,8,["modelValue"])]),E("div",he,[P(B,{requiredMark:!0,modelValue:O(u).invoice_date,"onUpdate:modelValue":r[8]||(r[8]=function(e){return O(u).invoice_date=e}),path:"invoice_date",label:"Invoice_date",allowClear:!0},null,8,["modelValue"])]),E("div",me,[P(z,{modelValue:O(u).order_id,"onUpdate:modelValue":r[9]||(r[9]=function(e){return O(u).order_id=e}),"id-key":"id","required-mark":!0,ref:"selectId","loading-data":O(M),loading:O(M),"text-key":"code",allowClear:!0,showFilter:"",items:null===(t=O(R))||void 0===t?void 0:t.data,label:"Orders",onKeyup:q(W,["enter"])},null,8,["modelValue","loading-data","loading","items"])]),E("div",be,[P(O(G),{type:"text",requiredMark:!0,modelValue:O(u).prefix,"onUpdate:modelValue":r[10]||(r[10]=function(e){return O(u).prefix=e}),path:"prefix",label:"Prefix",onKeyup:q(W,["enter"])},null,8,["modelValue"])]),E("div",_e,[P(O(G),{onlyNumbers:!0,type:"number",requiredMark:!0,modelValue:O(u).discount,"onUpdate:modelValue":r[11]||(r[11]=function(e){return O(u).discount=e}),path:"discount",label:"Discount",onKeyup:q(W,["enter"])},null,8,["modelValue"])]),E("div",ge,[P(B,{modelValue:O(u).cancelled_at,"onUpdate:modelValue":r[12]||(r[12]=function(e){return O(u).cancelled_at=e}),path:"cancelled_at",label:"Cancelled_at",allowClear:!0},null,8,["modelValue"])]),E("div",we,[P(O(G),{onlyNumbers:!0,type:"number",modelValue:O(u).cancelled_by,"onUpdate:modelValue":r[13]||(r[13]=function(e){return O(u).cancelled_by=e}),path:"cancelled_by",label:"Cancelled_by",onKeyup:q(W,["enter"])},null,8,["modelValue"])])])]),E("div",xe,[E("div",ke,[E("div",Oe,["create"===e.action?(_(),g("div",je,[P(n,{checked:O(s),"onUpdate:checked":r[14]||(r[14]=function(e){return L(s)?s.value=e:null}),"aria-describedby":"offers-description",id:"andNew"},null,8,["checked"])])):V("",!0),"create"===e.action?(_(),g("div",{key:1,onClick:r[15]||(r[15]=function(e){return O(s).value!=O(s).value}),class:"flex text-sm absolute mx-[2rem] my-[4px]"},Ve)):V("",!0)]),E("div",Ee,[P(Y,{class:"ml-5",shadow:"",color:"primary",loading:O(F),onClick:W},{default:x((function(){return[I(S(O(l))+" Invoices ",1)]})),_:1},8,["loading"]),P(Y,{class:"ml-5",shadow:"",color:"primary",onClick:Q},{default:x((function(){return[I(" Cancelar ")]})),_:1})])])])]})),_:1},8,["state","validations","feedbacks"])])])])],64)}}}));case 42:case"end":return a.stop()}}),a)}))),function(){return $.apply(this,arguments)})}}))}();