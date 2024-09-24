!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(r){d=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),c=new G(n||[]);return i(a,"_invoke",{value:S(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var p="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function w(){}function b(){}function _(){}var x={};d(x,u,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(V([])));k&&k!==o&&a.call(k,u)&&(x=k);var E=_.prototype=w.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function O(e,r){function n(o,i,c,u){var l=h(e[o],e,i);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==t(d)&&a.call(d,"__await")?r.resolve(d.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(d).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}})}function S(t,e,n){var o=p;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=N(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=h(t,e,n);if("normal"===l.type){if(o=n.done?m:y,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function N(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,N(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=h(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function V(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return b.prototype=_,i(E,"constructor",{value:_,configurable:!0}),i(_,"constructor",{value:b,configurable:!0}),b.displayName=d(_,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,d(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},n.awrap=function(t){return{__await:t}},j(O.prototype),d(O.prototype,l,(function(){return this})),n.AsyncIterator=O,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new O(f(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(E),d(E,s,"Generator"),d(E,u,(function(){return this})),d(E,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=V,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(F),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),F(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:V(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},n}function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}System.register(["./index-legacy-BnT4rcVz.js","./RForm.vue_vue_type_script_setup_true_lang-legacy-CQJ14iDy.js","./product_order.model-legacy-xI53eiJc.js","./RButton.vue_vue_type_style_index_0_lang-legacy-CorltFxv.js","./RSelect.vue_vue_type_script_setup_true_lang-legacy-BlCL2tu-.js","./orders.model-legacy-Dnsvwa-p.js","./RestBase-legacy-CyaXmJsG.js"],(function(t,n){"use strict";var o,a,i,c,u,l,s,d,f,h,p,y,v,m,g,w,b,_,x,L,k,E,j,O,S,N,P,F,G,V,M;return{setters:[function(t){o=t.d,a=t.X,i=t.h,c=t.j,u=t.Y,l=t.k,s=t.r,d=t.a,f=t.S,h=t.n,p=t.z,y=t.q,v=t.v,m=t.O,g=t.E,w=t.Z,b=t.A,_=t.x,x=t.c,L=t.M,k=t.T,E=t.L,j=t.G,O=t.U,S=t.H},function(t){N=t._},function(t){P=t.P},function(t){F=t._},function(t){G=t._},function(t){V=t.O},function(t){M=t.C}],execute:function(){var n={class:"r-container-form"},C={class:"mt-10 sm:mt-0"},T={class:"shadow overflow-hidden sm:rounded-md"},q={class:"px-4 py-5 bg-white dark:bg-slate-800 sm:p-6"},A={class:"grid grid-cols-4 gap-4"},I={class:"grid-input"},R={class:"grid-input"},U={class:"px-4 py-3 bg-gray-50 dark:bg-slate-700 dark:bg-opacity-70 text-right sm:px-6"},z={class:"r-footer-form"},Y={class:"flex"},B={key:0,class:"flex-none items-center"},K=[_("label",{for:"andNew",class:"font-bold text-gray-700 dark:text-slate-200 !cursor-pointer"},[E("Insertar y nuevo "),_("span",{id:"andNew-description",class:"ml-1 text-muted"},"Se insertara un elemento y reiniciara el formuario")],-1)],H={class:"r-footer-button-form"};t("_",o({__name:"Product_orderForm",props:a({modal:i.bool.def(!1),action:i.string.def("create"),loading_text:i.string.def(""),showLoading:i.bool.def(!0)},{modelValue:{},modelModifiers:{}}),emits:a(["closeModal","reload"],["update:modelValue"]),setup:function(t,o){var a=o.emit,i=c(),Q=t,X=a,Z="create"==Q.action?"Crear":"Actualizar",$=u(t,"modelValue"),D=l(new P($.value)),J=s(),W=s(!1),tt=V.useGetMany(),et=tt.loading,rt=tt.result,nt=P.useStaticSave(D,{defaultEnabled:!1}),ot=nt.loading,at=nt.toggleEnabled,it=nt.onResult,ct=nt.enabled,ut=nt.onError,lt=d((function(){return et.value})),st=function(){Q.modal?X("closeModal"):i.push({name:"product_order_list"})};function dt(){return ft.apply(this,arguments)}function ft(){var t;return t=e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(r=J.value)||void 0===r?void 0:r.validate();case 2:t.sent&&at();case 4:case"end":return t.stop()}}),t)})),ft=function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))},ft.apply(this,arguments)}return ut((function(t){f("error","Error en accion","Error en accion del elemento")})),it((function(t){var e;(f("success","Accion  "+Z,"Accion ejecutada correctamente"),W.value)?(null===(e=J.value)||void 0===e||e.clear(),ct.value=!1,Object.assign(D,new P($.value)),Q.modal&&X("reload")):Q.modal?X("closeModal",!0):i.push({name:"format_product_order_list"})})),function(e,r){var o=S("RInput"),a=M;return h(),p(O,null,[t.showLoading?(h(),y(w,{key:0,"h-full":!0,class:"",loading:g(lt),description:Q.loading_text},{default:v((function(){return[m(e.$slots,"loading_icon")]})),_:3},8,["loading","description"])):b("",!0),_("div",n,[_("div",C,[_("div",T,[x(N,{ref:"format_product_orderForm",state:g(D),validations:g(P).validations[t.action],feedbacks:g(P).feedbacks[t.action],loading:!0},{default:v((function(){var e;return[_("div",q,[_("div",A,[_("div",I,[x(o,{onlyNumbers:!0,type:"number",requiredMark:!0,modelValue:g(D).quantity,"onUpdate:modelValue":r[0]||(r[0]=function(t){return g(D).quantity=t}),path:"quantity",label:"Quantity",onKeyup:L(dt,["enter"])},null,8,["modelValue"])]),_("div",R,[x(G,{modelValue:g(D).order_id,"onUpdate:modelValue":r[1]||(r[1]=function(t){return g(D).order_id=t}),"id-key":"id","required-mark":!0,ref:"selectId","loading-data":g(et),loading:g(et),"text-key":"code",allowClear:!0,showFilter:"",items:null===(e=g(rt))||void 0===e?void 0:e.data,label:"Orders",onKeyup:L(dt,["enter"])},null,8,["modelValue","loading-data","loading","items"])])])]),_("div",U,[_("div",z,[_("div",Y,["create"===t.action?(h(),p("div",B,[x(a,{checked:g(W),"onUpdate:checked":r[2]||(r[2]=function(t){return k(W)?W.value=t:null}),"aria-describedby":"offers-description",id:"andNew"},null,8,["checked"])])):b("",!0),"create"===t.action?(h(),p("div",{key:1,onClick:r[3]||(r[3]=function(t){return g(W).value!=g(W).value}),class:"flex text-sm absolute mx-[2rem] my-[4px]"},K)):b("",!0)]),_("div",H,[x(F,{class:"ml-5",shadow:"",color:"primary",loading:g(ot),onClick:dt},{default:v((function(){return[E(j(g(Z))+" Ordenes Productos ",1)]})),_:1},8,["loading"]),x(F,{class:"ml-5",shadow:"",color:"primary",onClick:st},{default:v((function(){return[E(" Cancelar ")]})),_:1})])])])]})),_:1},8,["state","validations","feedbacks"])])])])],64)}}}))}}}))}();
