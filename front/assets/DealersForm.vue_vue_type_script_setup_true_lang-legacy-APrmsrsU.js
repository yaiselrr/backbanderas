!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var n,r={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(n){d=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof _?t:_,a=Object.create(o.prototype),c=new C(r||[]);return i(a,"_invoke",{value:V(e,n,c)}),a}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var y="suspendedStart",h="suspendedYield",m="executing",v="completed",g={};function _(){}function b(){}function w(){}var x={};d(x,u,(function(){return this}));var k=Object.getPrototypeOf,j=k&&k(k(q([])));j&&j!==o&&a.call(j,u)&&(x=j);var O=w.prototype=_.prototype=Object.create(x);function E(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function L(t,n){function r(o,i,c,u){var l=p(t[o],t,i);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==e(d)&&a.call(d,"__await")?n.resolve(d.__await).then((function(e){r("next",e,c,u)}),(function(e){r("throw",e,c,u)})):n.resolve(d).then((function(e){s.value=e,c(s)}),(function(e){return r("throw",e,c,u)}))}u(l.arg)}var o;i(this,"_invoke",{value:function(e,t){function a(){return new n((function(n,o){r(e,t,n,o)}))}return o=o?o.then(a,a):a()}})}function V(e,t,r){var o=y;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:n,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var u=P(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===y)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var l=p(e,t,r);if("normal"===l.type){if(o=r.done?v:h,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=v,r.method="throw",r.arg=l.arg)}}}function P(e,t){var r=t.method,o=e.iterator[r];if(o===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=n,P(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=p(o,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,g;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,g):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function U(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function q(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(a.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}throw new TypeError(e(t)+" is not iterable")}return b.prototype=w,i(O,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:b,configurable:!0}),b.displayName=d(w,s,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,d(e,s,"GeneratorFunction")),e.prototype=Object.create(O),e},r.awrap=function(e){return{__await:e}},E(L.prototype),d(L.prototype,l,(function(){return this})),r.AsyncIterator=L,r.async=function(e,t,n,o,a){void 0===a&&(a=Promise);var i=new L(f(e,t,n,o),a);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(O),d(O,s,"Generator"),d(O,u,(function(){return this})),d(O,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=q,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(U),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return c.type="throw",c.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),U(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;U(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:q(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),g}},r}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,f(r.key),r)}}function o(t,n,r){return n=i(n),function(t,n){if(n&&("object"==e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(t,a()?Reflect.construct(n,r||[],i(t).constructor):n.apply(t,r))}function a(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(a=function(){return!!e})()}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=f(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}function p(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){p(a,r,o,i,c,"next",e)}function c(e){p(a,r,o,i,c,"throw",e)}i(void 0)}))}}System.register(["./index-legacy-BnT4rcVz.js","./RForm.vue_vue_type_script_setup_true_lang-legacy-CQJ14iDy.js","./RestBase-legacy-CyaXmJsG.js","./index-legacy-DjC9o_w0.js","./debounceValidator-legacy-CNcUd-ub.js","./index-legacy-C5nl4eCF.js","./RButton.vue_vue_type_style_index_0_lang-legacy-CorltFxv.js","./RSelect.vue_vue_type_script_setup_true_lang-legacy-BlCL2tu-.js","./REditor.vue_vue_type_style_index_0_lang-legacy-BY4lRfIP.js","./users.model-legacy-D-2__hwd.js","./business_sectors.model-legacy-CVATNESK.js"],(function(e,a){"use strict";var i,u,l,f,p,h,m,v,g,_,b,w,x,k,j,O,E,L,V,P,S,U,C,q,I,T,R,N,F,G,D,A,K,M,B,z,Y,W;return{setters:[function(e){i=e.d,u=e.X,l=e.h,f=e.j,p=e.Y,h=e.k,m=e.r,v=e.a,g=e.S,_=e.n,b=e.z,w=e.q,x=e.v,k=e.O,j=e.E,O=e.Z,E=e.A,L=e.x,V=e.c,P=e.M,S=e.L,U=e.G,C=e.U},function(e){q=e._},function(e){I=e.R,T=e.C},function(e){R=e.r,N=e.m,F=e.i,G=e.R},function(e){D=e.d},function(e){A=e.d},function(e){K=e._},function(e){M=e._},function(e){B=e._},function(e){z=e.U},function(e){Y=e.B}],execute:(W=y(t().mark((function a(){var W,X,Z,$,H,J,Q,ee,te,ne,re,oe,ae,ie,ce,ue,le,se,de,fe,pe,ye,he,me,ve,ge,_e,be;return t().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return X=[{title:"Contacto",dataIndex:"contact",align:"center",key:"contact",sorter:function(e,t){return+(e.contact>t.contact)-+(e.contact<t.contact)}},{title:"Empresa",dataIndex:"company",align:"center",key:"company",sorter:function(e,t){return+(e.company>t.company)-+(e.company<t.company)}},{title:"CIF",dataIndex:"cif",align:"center",key:"cif",sorter:function(e,t){return+(e.cif>t.cif)-+(e.cif<t.cif)}},{title:"Correo de empresa",dataIndex:"company_email",align:"center",key:"company_email",sorter:function(e,t){return+(e.company_email>t.company_email)-+(e.company_email<t.company_email)}},{title:"Teléfono",dataIndex:"phone",align:"center",key:"phone",sorter:function(e,t){return+(e.phone>t.phone)-+(e.phone<t.phone)}},{title:"Página web",dataIndex:"web_page",align:"center",key:"web_page",sorter:function(e,t){return+(e.web_page>t.web_page)-+(e.web_page<t.web_page)}},{title:"Dirección",dataIndex:"address",align:"center",key:"address",sorter:function(e,t){return+(e.address>t.address)-+(e.address<t.address)}},{title:"Sector de negocios",dataIndex:"business_sector.name",align:"center",key:"business_sector.name",customRender:function(e){var t;return null===(t=e.record.business_sector)||void 0===t?void 0:t.name},sorter:function(e,t){return e.business_sector&&t.business_sector?(e.business_sector.name>t.business_sector.name)-(e.business_sector.name<t.business_sector.name):0}},{title:"Usuario",dataIndex:"user.name",align:"center",key:"user.name",customRender:function(e){var t;return null===(t=e.record.user)||void 0===t?void 0:t.name},sorter:function(e,t){return e.user&&t.user?(e.user.name>t.user.name)-(e.user.name<t.user.name):0}},{title:"Acciones",key:"_action",fixed:"right",width:"5%",scopedSlots:{customRender:"_action"}}],Z={contact:{required:R,isUnique:D((function(e,t){var n=s({},t.state),r=n.id,o=n.contact,a=r?"update":"create";return!o||ee.validate({contact:o,id:r,_scenario:a,_specific:!0})}),void 0,500)},company:{},cif:{},company_email:{},phone:{},web_page:{},address:{maxLength:N(65535)},business_sector_id:{required:R,integer:F},user_id:{required:R,integer:F}},$={contact:{required:R,isUnique:D((function(e,t){var n=s({},t.state),r=n.id,o=n.contact,a=r?"update":"create";return!o||ee.validate({contact:o,id:r,_scenario:a,_specific:!0})}),void 0,500)},company:{},cif:{},company_email:{},phone:{},web_page:{},address:{maxLength:N(65535)},business_sector_id:{required:R,integer:F},user_id:{required:R,integer:F}},H={create:Z,update:$},J={create:{contact:{isUnique:"This contact has been taken"},id:{isUnique:"This id has been taken"}},update:{contact:{isUnique:"This contact has been taken"},id:{isUnique:"This id has been taken"}}},a.next=7,I("dealers","security/dealers");case 7:Q=a.sent,ee=function(e){function t(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return n(this,t),d(e=o(this,t),"id",void 0),d(e,"contact",void 0),d(e,"company",void 0),d(e,"cif",void 0),d(e,"company_email",void 0),d(e,"phone",void 0),d(e,"web_page",void 0),d(e,"address",void 0),d(e,"business_sector_id",void 0),d(e,"user_id",void 0),d(e,"created_at",void 0),d(e,"updated_at",void 0),null!=r&&(e.id=r.id||void 0,e.contact=r.contact||null,e.company=r.company||null,e.cif=r.cif||null,e.company_email=r.company_email||null,e.phone=r.phone||null,e.web_page=r.web_page||null,e.address=r.address||null,e.business_sector_id=r.business_sector_id||null,e.user_id=r.user_id||null,e.created_at=r.created_at?A(r.created_at):null,e.updated_at=r.updated_at?A(r.updated_at):null),e}return c(t,e),a=t,i=[{key:"set_attributes",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!=e&&(this.id=e.id,this.contact=e.contact,this.company=e.company,this.cif=e.cif,this.company_email=e.company_email,this.phone=e.phone,this.web_page=e.web_page,this.address=e.address,this.business_sector_id=e.business_sector_id,this.user_id=e.user_id,this.created_at=A(e.created_at),this.updated_at=A(e.updated_at))}},{key:"get_id",value:function(){return this.id}},{key:"class_name",value:function(){return"Dealers"}}],i&&r(a.prototype,i),u&&r(a,u),Object.defineProperty(a,"prototype",{writable:!1}),a;var a,i,u}(Q),W=ee,d(ee,"validations",H),d(ee,"feedbacks",J),d(ee,"columns",X),d(ee,"visible_columns",W.show_columns(["*"],!0)),e("D",ee),te={class:"r-container-form"},ne={class:"mt-10 sm:mt-0"},re={class:"shadow overflow-hidden sm:rounded-md"},oe={class:"px-4 py-5 bg-white dark:bg-slate-800 sm:p-6"},ae={class:"grid grid-cols-4 gap-4"},ie={class:"grid-input"},ce={class:"grid-input"},ue={class:"grid-input"},le={class:"grid-input"},se={class:"grid-input"},de={class:"grid-input"},fe={class:"col-span-4"},pe={class:"grid-input"},ye={class:"grid-input"},he={class:"px-4 py-3 bg-gray-50 dark:bg-slate-700 dark:bg-opacity-70 text-right sm:px-6"},me={class:"r-footer-form"},ve={class:"flex"},ge={key:0,class:"flex-none items-center"},_e=[L("label",{for:"andNew",class:"font-bold text-gray-700 dark:text-slate-200 !cursor-pointer"},[S("Insertar y nuevo "),L("span",{id:"andNew-description",class:"ml-1 text-muted"},"Se insertara un elemento y reiniciara el formuario")],-1)],be={class:"r-footer-button-form"},e("_",i({__name:"DealersForm",props:u({modal:l.bool.def(!1),action:l.string.def("create"),loading_text:l.string.def(""),showLoading:l.bool.def(!0)},{modelValue:{},modelModifiers:{}}),emits:u(["closeModal","reload"],["update:modelValue"]),setup:function(e,n){var r=n.emit,o=f(),a=e,i=r,c="create"==a.action?"Crear":"Actualizar",u=p(e,"modelValue"),l=h(new ee(u.value)),s=m(),d=m(!1),I=ee.useStaticSave(l,{defaultEnabled:!1}),R=I.loading,N=I.toggleEnabled,F=I.onResult,D=I.enabled,A=I.onError,W=z.useGetMany(),X=W.loading,Z=W.result,$=Y.useGetMany(),H=$.loading,J=$.result,Q=v((function(){return X.value||H.value})),we=function(){a.modal?i("closeModal"):o.push({name:"dealers_list"})};function xe(){return ke.apply(this,arguments)}function ke(){return(ke=y(t().mark((function e(){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=s.value)||void 0===n?void 0:n.validate();case 2:e.sent&&N();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return A((function(e){g("error","Error en accion","Error en accion del elemento")})),F((function(e){var t;g("success","Accion  "+c,"Accion ejecutada correctamente"),d.value?(null===(t=s.value)||void 0===t||t.clear(),D.value=!1,Object.assign(l,new ee(u.value)),a.modal&&i("reload")):a.modal?i("closeModal",!0):o.push({name:"dealers_list"})})),function(t,n){var r=T;return _(),b(C,null,[e.showLoading?(_(),w(O,{key:0,"h-full":!0,class:"",loading:j(Q),description:a.loading_text},{default:x((function(){return[k(t.$slots,"loading_icon")]})),_:3},8,["loading","description"])):E("",!0),L("div",te,[L("div",ne,[L("div",re,[V(q,{ref_key:"dealersForm",ref:s,state:j(l),validations:j(ee).validations[e.action],feedbacks:j(ee).feedbacks[e.action],loading:!0},{default:x((function(){var t,o;return[L("div",oe,[L("div",ae,[L("div",ie,[V(j(G),{type:"text",requiredMark:!0,modelValue:j(l).contact,"onUpdate:modelValue":n[0]||(n[0]=function(e){return j(l).contact=e}),path:"contact",label:"Contact",onKeyup:P(xe,["enter"])},null,8,["modelValue"])]),L("div",ce,[V(j(G),{type:"text",modelValue:j(l).company,"onUpdate:modelValue":n[1]||(n[1]=function(e){return j(l).company=e}),path:"company",label:"Company",onKeyup:P(xe,["enter"])},null,8,["modelValue"])]),L("div",ue,[V(j(G),{type:"text",modelValue:j(l).cif,"onUpdate:modelValue":n[2]||(n[2]=function(e){return j(l).cif=e}),path:"cif",label:"Cif",onKeyup:P(xe,["enter"])},null,8,["modelValue"])]),L("div",le,[V(j(G),{type:"email",modelValue:j(l).company_email,"onUpdate:modelValue":n[3]||(n[3]=function(e){return j(l).company_email=e}),path:"company_email",label:"Company_email",onKeyup:P(xe,["enter"])},null,8,["modelValue"])]),L("div",se,[V(j(G),{type:"text",modelValue:j(l).phone,"onUpdate:modelValue":n[4]||(n[4]=function(e){return j(l).phone=e}),path:"phone",label:"Phone",onKeyup:P(xe,["enter"])},null,8,["modelValue"])]),L("div",de,[V(j(G),{type:"text",modelValue:j(l).web_page,"onUpdate:modelValue":n[5]||(n[5]=function(e){return j(l).web_page=e}),path:"web_page",label:"Web_page",onKeyup:P(xe,["enter"])},null,8,["modelValue"])]),L("div",fe,[V(B,{modelValue:j(l).address,"onUpdate:modelValue":n[6]||(n[6]=function(e){return j(l).address=e}),path:"address",label:"Address"},null,8,["modelValue"])]),L("div",pe,[V(M,{modelValue:j(l).business_sector_id,"onUpdate:modelValue":n[7]||(n[7]=function(e){return j(l).business_sector_id=e}),"id-key":"id","required-mark":!0,ref:"selectId","loading-data":j(H),loading:j(H),"text-key":"name",allowClear:!0,showFilter:"",items:null===(t=j(J))||void 0===t?void 0:t.data,path:"business_sector_id",label:"Sectores de negocios",onKeyup:P(xe,["enter"])},null,8,["modelValue","loading-data","loading","items"])]),L("div",ye,[V(M,{modelValue:j(l).user_id,"onUpdate:modelValue":n[8]||(n[8]=function(e){return j(l).user_id=e}),"id-key":"id","required-mark":!0,ref:"selectId","loading-data":j(X),loading:j(X),"text-key":"name",allowClear:!0,showFilter:"",items:null===(o=j(Z))||void 0===o?void 0:o.data,path:"user_id",label:"Usuarios",onKeyup:P(xe,["enter"])},null,8,["modelValue","loading-data","loading","items"])])])]),L("div",he,[L("div",me,[L("div",ve,["create"===e.action?(_(),b("div",ge,[V(r,{checked:d.value,"onUpdate:checked":n[9]||(n[9]=function(e){return d.value=e}),"aria-describedby":"offers-description",id:"andNew"},null,8,["checked"])])):E("",!0),"create"===e.action?(_(),b("div",{key:1,onClick:n[10]||(n[10]=function(e){return d.value.value!=d.value.value}),class:"flex text-sm absolute mx-[2rem] my-[4px]"},_e)):E("",!0)]),L("div",be,[V(K,{class:"ml-5",shadow:"",color:"primary",loading:j(R),onClick:xe},{default:x((function(){return[S(U(j(c))+" Dealers ",1)]})),_:1},8,["loading"]),V(K,{class:"ml-5",shadow:"",color:"primary",onClick:we},{default:x((function(){return[S(" Cancelar ")]})),_:1})])])])]})),_:1},8,["state","validations","feedbacks"])])])])],64)}}}));case 37:case"end":return a.stop()}}),a)}))),function(){return W.apply(this,arguments)})}}))}();