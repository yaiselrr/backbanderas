!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(r){d=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof b?t:b,i=Object.create(o.prototype),c=new N(n||[]);return a(i,"_invoke",{value:S(e,r,c)}),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var p="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function b(){}function _(){}function w(){}var x={};d(x,u,(function(){return this}));var k=Object.getPrototypeOf,j=k&&k(k(R([])));j&&j!==o&&i.call(j,u)&&(x=j);var E=w.prototype=b.prototype=Object.create(x);function O(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function L(t,r){function n(o,a,c,u){var l=h(t[o],t,a);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==e(d)&&i.call(d,"__await")?r.resolve(d.__await).then((function(e){n("next",e,c,u)}),(function(e){n("throw",e,c,u)})):r.resolve(d).then((function(e){s.value=e,c(s)}),(function(e){return n("throw",e,c,u)}))}u(l.arg)}var o;a(this,"_invoke",{value:function(e,t){function i(){return new r((function(r,o){n(e,t,r,o)}))}return o=o?o.then(i,i):i()}})}function S(e,t,n){var o=p;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=h(e,t,n);if("normal"===l.type){if(o=n.done?m:v,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function P(e,t){var n=t.method,o=e.iterator[n];if(o===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,P(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,g;var a=i.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,g):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function R(t){if(t||""===t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(i.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}throw new TypeError(e(t)+" is not iterable")}return _.prototype=w,a(E,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:_,configurable:!0}),_.displayName=d(w,s,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,d(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},n.awrap=function(e){return{__await:e}},O(L.prototype),d(L.prototype,l,(function(){return this})),n.AsyncIterator=L,n.async=function(e,t,r,o,i){void 0===i&&(i=Promise);var a=new L(f(e,t,r,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},O(E),d(E,s,"Generator"),d(E,u,(function(){return this})),d(E,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=R,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(T),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,o){return c.type="throw",c.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:R(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),g}},n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function o(t,r,n){return r=a(r),function(t,r){if(r&&("object"==e(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(t,i()?Reflect.construct(r,n||[],a(t).constructor):r.apply(t,n))}function i(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(i=function(){return!!e})()}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function l(e,t,r){return(t=s(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}function d(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function f(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){d(i,n,o,a,c,"next",e)}function c(e){d(i,n,o,a,c,"throw",e)}a(void 0)}))}}System.register(["./index-legacy-BnT4rcVz.js","./RForm.vue_vue_type_script_setup_true_lang-legacy-CQJ14iDy.js","./RestBase-legacy-CyaXmJsG.js","./index-legacy-DjC9o_w0.js","./index-legacy-C5nl4eCF.js","./RButton.vue_vue_type_style_index_0_lang-legacy-CorltFxv.js","./RSelect.vue_vue_type_script_setup_true_lang-legacy-BlCL2tu-.js","./users.model-legacy-D-2__hwd.js"],(function(e,i){"use strict";var a,u,s,d,h,p,v,y,m,g,b,_,w,x,k,j,E,O,L,S,P,C,T,N,R,q,U,G,F,V,A,I,M,B,z;return{setters:[function(e){a=e.d,u=e.X,s=e.h,d=e.j,h=e.Y,p=e.k,v=e.r,y=e.a,m=e.S,g=e.n,b=e.z,_=e.q,w=e.v,x=e.O,k=e.E,j=e.Z,E=e.A,O=e.x,L=e.c,S=e.M,P=e.T,C=e.L,T=e.G,N=e.U},function(e){R=e._},function(e){q=e.R,U=e.C},function(e){G=e.r,F=e.i,V=e.R},function(e){A=e.d},function(e){I=e._},function(e){M=e._},function(e){B=e.U}],execute:(z=f(t().mark((function i(){var z,Y,K,D,X,Z,$,H,J,Q,W,ee,te,re,ne,oe,ie,ae,ce;return t().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return Y=[{title:"Code",dataIndex:"code",align:"center",key:"code",sorter:function(e,t){return+(e.code>t.code)-+(e.code<t.code)}},{title:"Users",dataIndex:"users.name",align:"center",key:"users.name",customRender:function(e){var t;return null===(t=e.record.users)||void 0===t?void 0:t.name},sorter:function(e,t){return e.users&&t.users?(e.users.name>t.users.name)-(e.users.name<t.users.name):0}},{title:"Acciones",key:"_action",fixed:"right",scopedSlots:{customRender:"_action"}}],K={create:{code:{required:G},user_id:{required:G,integer:F}},update:{code:{required:G},user_id:{required:G,integer:F}}},D={create:{code:{isUnique:"This code has been taken"},id:{isUnique:"This id has been taken"}},update:{code:{isUnique:"This code has been taken"},id:{isUnique:"This id has been taken"}}},i.next=7,q("client","manage/client");case 7:X=i.sent,Z=function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return r(this,t),l(e=o(this,t),"code",void 0),l(e,"user_id",void 0),l(e,"created_at",void 0),l(e,"updated_at",void 0),null!=n&&(e.code=n.code||void 0,e.user_id=n.user_id||null,e.created_at=n.created_at?A(n.created_at):null,e.updated_at=n.updated_at?A(n.updated_at):null),e}return c(t,e),i=t,a=[{key:"set_attributes",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!=e&&(this.code=e.code,this.user_id=e.user_id,this.created_at=A(e.created_at),this.updated_at=A(e.updated_at))}},{key:"get_id",value:function(){return this.code}},{key:"class_name",value:function(){return"Client"}}],a&&n(i.prototype,a),u&&n(i,u),Object.defineProperty(i,"prototype",{writable:!1}),i;var i,a,u}(X),z=Z,l(Z,"validations",K),l(Z,"feedbacks",D),l(Z,"columns",Y),l(Z,"visible_columns",z.show_columns(["*"],!0)),e("C",Z),$={class:"r-container-form"},H={class:"mt-10 sm:mt-0"},J={class:"shadow overflow-hidden sm:rounded-md"},Q={class:"px-4 py-5 bg-white dark:bg-slate-800 sm:p-6"},W={class:"grid grid-cols-4 gap-4"},ee={class:"grid-input"},te={class:"grid-input"},re={class:"px-4 py-3 bg-gray-50 dark:bg-slate-700 dark:bg-opacity-70 text-right sm:px-6"},ne={class:"r-footer-form"},oe={class:"flex"},ie={key:0,class:"flex-none items-center"},ae=[O("label",{for:"andNew",class:"font-bold text-gray-700 dark:text-slate-200 !cursor-pointer"},[C("Insertar y nuevo "),O("span",{id:"andNew-description",class:"ml-1 text-muted"},"Se insertara un elemento y reiniciara el formuario")],-1)],ce={class:"r-footer-button-form"},e("_",a({__name:"ClientForm",props:u({modal:s.bool.def(!1),action:s.string.def("create"),loading_text:s.string.def(""),showLoading:s.bool.def(!0)},{modelValue:{},modelModifiers:{}}),emits:u(["closeModal","reload"],["update:modelValue"]),setup:function(e,r){var n=r.emit,o=d(),i=e,a=n,c="create"==i.action?"Crear":"Actualizar",u=h(e,"modelValue"),l=p(new Z(u.value)),s=v(),q=v(!1),G=B.useGetMany(),F=G.loading,A=G.result,z=Z.useStaticSave(l,{defaultEnabled:!1}),Y=z.loading,K=z.toggleEnabled,D=z.onResult,X=z.enabled,ue=z.onError,le=y((function(){return F.value})),se=function(){i.modal?a("closeModal"):o.push({name:"client_list"})};function de(){return fe.apply(this,arguments)}function fe(){return(fe=f(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(r=s.value)||void 0===r?void 0:r.validate();case 2:e.sent&&K();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return ue((function(e){m("error","Error en accion","Error en accion del elemento")})),D((function(e){var t;m("success","Accion  "+c,"Accion ejecutada correctamente"),q.value?(null===(t=s.value)||void 0===t||t.clear(),X.value=!1,Object.assign(l,new Z(u.value)),i.modal&&a("reload")):i.modal?a("closeModal",!0):o.push({name:"client_list"})})),function(t,r){var n=U;return g(),b(N,null,[e.showLoading?(g(),_(j,{key:0,"h-full":!0,class:"",loading:k(le),description:i.loading_text},{default:w((function(){return[x(t.$slots,"loading_icon")]})),_:3},8,["loading","description"])):E("",!0),O("div",$,[O("div",H,[O("div",J,[L(R,{ref_key:"clientForm",ref:s,state:k(l),validations:k(Z).validations[e.action],feedbacks:k(Z).feedbacks[e.action],loading:!0},{default:w((function(){var t;return[O("div",Q,[O("div",W,[O("div",ee,[L(k(V),{type:"text",requiredMark:!0,modelValue:k(l).code,"onUpdate:modelValue":r[0]||(r[0]=function(e){return k(l).code=e}),path:"code",label:"Código",onKeyup:S(de,["enter"])},null,8,["modelValue"])]),O("div",te,[L(M,{modelValue:k(l).user_id,"onUpdate:modelValue":r[1]||(r[1]=function(e){return k(l).user_id=e}),"id-key":"id","required-mark":!0,ref:"selectId","loading-data":k(F),loading:k(F),"text-key":"name",allowClear:!0,showFilter:"",items:null===(t=k(A))||void 0===t?void 0:t.data,path:"user_id",label:"Usuario",onKeyup:S(de,["enter"])},null,8,["modelValue","loading-data","loading","items"])])])]),O("div",re,[O("div",ne,[O("div",oe,["create"===e.action?(g(),b("div",ie,[L(n,{checked:k(q),"onUpdate:checked":r[2]||(r[2]=function(e){return P(q)?q.value=e:null}),"aria-describedby":"offers-description",id:"andNew"},null,8,["checked"])])):E("",!0),"create"===e.action?(g(),b("div",{key:1,onClick:r[3]||(r[3]=function(e){return k(q).value!=k(q).value}),class:"flex text-sm absolute mx-[2rem] my-[4px]"},ae)):E("",!0)]),O("div",ce,[L(I,{class:"ml-5",shadow:"",color:"primary",loading:k(Y),onClick:de},{default:w((function(){return[C(T(k(c))+" Cliente ",1)]})),_:1},8,["loading"]),L(I,{class:"ml-5",shadow:"",color:"primary",onClick:se},{default:w((function(){return[C(" Cancelar ")]})),_:1})])])])]})),_:1},8,["state","validations","feedbacks"])])])])],64)}}}));case 30:case"end":return i.stop()}}),i)}))),function(){return z.apply(this,arguments)})}}))}();
