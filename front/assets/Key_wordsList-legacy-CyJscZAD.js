!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var n,r={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},u=l.iterator||"@@iterator",c=l.asyncIterator||"@@asyncIterator",s=l.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(n){d=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof _?t:_,i=Object.create(o.prototype),l=new M(r||[]);return a(i,"_invoke",{value:C(e,n,l)}),i}function v(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var p="suspendedStart",h="suspendedYield",m="executing",y="completed",g={};function _(){}function b(){}function x(){}var w={};d(w,u,(function(){return this}));var j=Object.getPrototypeOf,k=j&&j(j(T([])));k&&k!==o&&i.call(k,u)&&(w=k);var E=x.prototype=_.prototype=Object.create(w);function L(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function O(t,n){function r(o,a,l,u){var c=v(t[o],t,a);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==e(d)&&i.call(d,"__await")?n.resolve(d.__await).then((function(e){r("next",e,l,u)}),(function(e){r("throw",e,l,u)})):n.resolve(d).then((function(e){s.value=e,l(s)}),(function(e){return r("throw",e,l,u)}))}u(c.arg)}var o;a(this,"_invoke",{value:function(e,t){function i(){return new n((function(n,o){r(e,t,n,o)}))}return o=o?o.then(i,i):i()}})}function C(e,t,r){var o=p;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:n,done:!0}}for(r.method=i,r.arg=a;;){var l=r.delegate;if(l){var u=P(l,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var c=v(e,t,r);if("normal"===c.type){if(o=r.done?y:h,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=y,r.method="throw",r.arg=c.arg)}}}function P(e,t){var r=t.method,o=e.iterator[r];if(o===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=n,P(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=v(o,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,g;var a=i.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,g):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function T(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(i.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}throw new TypeError(e(t)+" is not iterable")}return b.prototype=x,a(E,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=d(x,s,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,d(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},r.awrap=function(e){return{__await:e}},L(O.prototype),d(O.prototype,c,(function(){return this})),r.AsyncIterator=O,r.async=function(e,t,n,o,i){void 0===i&&(i=Promise);var a=new O(f(e,t,n,o),i);return r.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},L(E),d(E,s,"Generator"),d(E,u,(function(){return this})),d(E,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=T,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(R),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return l.type="throw",l.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],l=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),R(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:T(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),g}},r}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,s(r.key),r)}}function o(t,n,r){return n=a(n),function(t,n){if(n&&("object"==e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(t,i()?Reflect.construct(n,r||[],a(t).constructor):n.apply(t,r))}function i(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(i=function(){return!!e})()}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function c(e,t,n){return(t=s(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}function d(e,t,n,r,o,i,a){try{var l=e[i](a),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){d(i,r,o,a,l,"next",e)}function l(e){d(i,r,o,a,l,"throw",e)}a(void 0)}))}}System.register(["./RestBase-legacy-CyaXmJsG.js","./index-legacy-DjC9o_w0.js","./index-legacy-C5nl4eCF.js","./ConfirmModal.vue_vue_type_script_setup_true_lang-legacy-Ca7huDOP.js","./index-legacy-BnT4rcVz.js","./RForm.vue_vue_type_script_setup_true_lang-legacy-CQJ14iDy.js","./RButton.vue_vue_type_style_index_0_lang-legacy-CorltFxv.js","./REditor.vue_vue_type_style_index_0_lang-legacy-BY4lRfIP.js","./index-legacy-nxao03Rl.js","./index-legacy-BrGCmP0F.js","./index-legacy-g1BirUfU.js","./index-legacy-0gGhEXTD.js","./dropdown-legacy-Ef-aP5fV.js","./createContext-legacy-DI7CWFS2.js","./FormItemContext-legacy-DIDu-b8g.js","./colors-legacy-C517ykp9.js","./supportsPassive-legacy-BJhmO5TL.js","./index-legacy-xM8aKfZE.js","./useMergedState-legacy-BhzTkMxu.js","./KeyCode-legacy-CtBVgl47.js","./styleChecker-legacy-gslcVGVx.js","./index-legacy-BcQgjaEy.js","./index-legacy-SE6QLez0.js","./debounce-legacy-CtZfg3gG.js","./collapseMotion-legacy-CAh_37Xw.js","./LeftOutlined-legacy-BzIaNX0f.js","./isMobile-legacy-BmmuYEUC.js","./useMemo-legacy-CRGZnKna.js","./DownOutlined-legacy-CCWm4Yig.js","./index-legacy-CltEfhW5.js","./index-legacy-D92hfgD0.js","./index-legacy-CLTyZtoE.js","./useValidation-legacy-BdDQzCcT.js","./EyeOutlined-legacy-42FX1Vmw.js","./shallowequal-legacy-bnCOzlms.js"],(function(e,i){"use strict";var a,u,s,d,v,p,h,m,y,g,_,b,x,w,j,k,E,L,O,C,P,S,R,M,T,q,A,N,V,F,G,I,U,D,K,B,z,Y,X,Z,$,H,Q,W,J,ee,te,ne,re,oe,ie,ae;return{setters:[function(e){a=e.R,u=e.C},function(e){s=e.r,d=e.m,v=e.i,p=e.R},function(e){h=e.d},function(e){m=e._,y=e.a,g=e.b,_=e.c},function(e){b=e.d,x=e.X,w=e.h,j=e.j,k=e.Y,E=e.k,L=e.r,O=e.a,C=e.S,P=e.n,S=e.z,R=e.q,M=e.v,T=e.O,q=e.E,A=e.Z,N=e.A,V=e.x,F=e.c,G=e.M,I=e.L,U=e.G,D=e.U,K=e.Q,B=e.y,z=e.R,Y=e.V,X=e.W,Z=e.H},function(e){$=e._},function(e){H=e._},function(e){Q=e._},function(e){W=e.M},function(e){J=e._,ee=e.B},function(e){te=e.I},function(e){ne=e._,re=e.M},function(e){oe=e._,ie=e.a},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:(ae=f(t().mark((function i(){var ae,le,ue,ce,se,de,fe,ve,pe,he,me,ye,ge,_e,be,xe,we,je,ke,Ee,Le,Oe,Ce,Pe,Se,Re,Me,Te,qe,Ae,Ne,Ve,Fe,Ge,Ie,Ue,De,Ke,Be,ze,Ye,Xe,Ze,$e,He,Qe,We,Je;return t().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return le=[{title:"Name",dataIndex:"name",align:"center",key:"name",sorter:function(e,t){return+(e.name>t.name)-+(e.name<t.name)}},{title:"Description",dataIndex:"description",align:"center",key:"description",sorter:function(e,t){return+(e.description>t.description)-+(e.description<t.description)}},{title:"Acciones",key:"_action",fixed:"right",scopedSlots:{customRender:"_action"}}],ue={name:{required:s},description:{required:s,maxLength:d(65535)}},ce={role_father_id:{integer:v},name:{required:s},description:{required:s,maxLength:d(65535)}},se={create:ue,update:ce},de={create:{name:{isUnique:"This name has been taken"},id:{isUnique:"This id has been taken"}},update:{name:{isUnique:"This name has been taken"},id:{isUnique:"This id has been taken"}}},i.next=7,a("key_words","manage/key_words");case 7:fe=i.sent,ve=function(e){function t(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return n(this,t),c(e=o(this,t),"id",void 0),c(e,"name",void 0),c(e,"description",void 0),c(e,"created_at",void 0),c(e,"updated_at",void 0),null!=r&&(e.id=r.id||void 0,e.name=r.name||null,e.description=r.description||null,e.created_at=r.created_at?h(r.created_at):null,e.updated_at=r.updated_at?h(r.updated_at):null),e}return l(t,e),i=t,a=[{key:"set_attributes",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!=e&&(this.id=e.id,this.name=e.name,this.description=e.description,this.created_at=h(e.created_at),this.updated_at=h(e.updated_at))}},{key:"get_id",value:function(){return this.id}},{key:"class_name",value:function(){return"Key_words"}}],a&&r(i.prototype,a),u&&r(i,u),Object.defineProperty(i,"prototype",{writable:!1}),i;var i,a,u}(fe),ae=ve,c(ve,"validations",se),c(ve,"feedbacks",de),c(ve,"columns",le),c(ve,"visible_columns",ae.show_columns(["*"],!0)),pe={class:"r-container-form"},he={class:"mt-10 sm:mt-0"},me={class:"shadow overflow-hidden sm:rounded-md"},ye={class:"px-4 py-5 bg-white dark:bg-slate-800 sm:p-6"},ge={class:"grid grid-cols-4 gap-4"},_e={class:"grid-input"},be={class:"col-span-4"},xe={class:"px-4 py-3 bg-gray-50 dark:bg-slate-700 dark:bg-opacity-70 text-right sm:px-6"},we={class:"r-footer-form"},je={class:"flex"},ke={key:0,class:"flex-none items-center"},Ee=[V("label",{for:"andNew",class:"font-bold text-gray-700 dark:text-slate-200 !cursor-pointer"},[I("Insertar y nuevo "),V("span",{id:"andNew-description",class:"ml-1 text-muted"},"Se insertara un elemento y reiniciara el formuario")],-1)],Le={class:"r-footer-button-form"},Oe=b({__name:"Key_wordsForm",props:x({modal:w.bool.def(!1),action:w.string.def("create"),loading_text:w.string.def(""),showLoading:w.bool.def(!0)},{modelValue:{},modelModifiers:{}}),emits:x(["closeModal","reload"],["update:modelValue"]),setup:function(e,n){var r=n.emit,o=j(),i=e,a=r,l="create"==i.action?"Crear":"Actualizar",c=k(e,"modelValue"),s=E(new ve(c.value)),d=L(),v=L(!1),h=ve.useGetMany(),m=h.loading,y=(h.result,ve.useStaticSave(s,{defaultEnabled:!1})),g=y.loading,_=y.toggleEnabled,b=y.onResult,x=y.enabled,w=y.onError,K=O((function(){return m.value})),B=function(){i.modal?a("closeModal"):o.push({name:"key_words_list"})};function z(){return Y.apply(this,arguments)}function Y(){return(Y=f(t().mark((function e(){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=d.value)||void 0===n?void 0:n.validate();case 2:e.sent&&_();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return w((function(e){C("error","Error en accion","Error en accion del elemento")})),b((function(e){var t;C("success","Accion  "+l,"Accion ejecutada correctamente"),v.value?(null===(t=d.value)||void 0===t||t.clear(),x.value=!1,Object.assign(s,new ve(c.value)),i.modal&&a("reload")):i.modal?a("closeModal",!0):o.push({name:"key_words_list"})})),function(t,n){var r=u;return P(),S(D,null,[e.showLoading?(P(),R(A,{key:0,"h-full":!0,class:"",loading:q(K),description:i.loading_text},{default:M((function(){return[T(t.$slots,"loading_icon")]})),_:3},8,["loading","description"])):N("",!0),V("div",pe,[V("div",he,[V("div",me,[F($,{ref_key:"key_wordsForm",ref:d,state:q(s),validations:q(ve).validations[e.action],feedbacks:q(ve).feedbacks[e.action],loading:!0},{default:M((function(){return[V("div",ye,[V("div",ge,[V("div",_e,[F(q(p),{type:"text",requiredMark:!0,modelValue:q(s).name,"onUpdate:modelValue":n[0]||(n[0]=function(e){return q(s).name=e}),path:"name",label:"Name",onKeyup:G(z,["enter"])},null,8,["modelValue"])]),V("div",be,[F(Q,{requiredMark:!0,modelValue:q(s).description,"onUpdate:modelValue":n[1]||(n[1]=function(e){return q(s).description=e}),path:"description",label:"Description"},null,8,["modelValue"])])])]),V("div",xe,[V("div",we,[V("div",je,["create"===e.action?(P(),S("div",ke,[F(r,{checked:v.value,"onUpdate:checked":n[2]||(n[2]=function(e){return v.value=e}),"aria-describedby":"offers-description",id:"andNew"},null,8,["checked"])])):N("",!0),"create"===e.action?(P(),S("div",{key:1,onClick:n[3]||(n[3]=function(e){return v.value.value!=v.value.value}),class:"flex text-sm absolute mx-[2rem] my-[4px]"},Ee)):N("",!0)]),V("div",Le,[F(H,{class:"ml-5",shadow:"",color:"primary",loading:q(g),onClick:z},{default:M((function(){return[I(U(q(l))+" Palabras claves ",1)]})),_:1},8,["loading"]),F(H,{class:"ml-5",shadow:"",color:"primary",onClick:B},{default:M((function(){return[I(" Cancelar ")]})),_:1})])])])]})),_:1},8,["state","validations","feedbacks"])])])])],64)}}}),Ce=V("div",{class:"r-close-icon hoverable-close"},null,-1),Pe={class:"flex"},Se=V("div",{class:"r-loading-default"},null,-1),Re={class:"r-breadcumbs"},Me=V("div",{class:"flex justify-center items-center"},[V("div",{class:"i-heroicons:home w-1em h-1em mr-1"}),V("p",null,"Inicio")],-1),Te=V("div",null,[V("h1",{class:"mt-5"},"Palabras claves")],-1),qe={class:"r-container-list"},Ae={class:"relative card w-full float-right"},Ne={class:""},Ve={class:"components-input-demo-presuffix mt-3 flex"},Fe=V("span",{class:"i-heroicons:trash-16-solid text-md mr-1 mb-1"},null,-1),Ge=V("span",{class:"i-heroicons:plus-16-solid text-lg mr-1 mb-1"},null,-1),Ie={class:"w-50% mr-20"},Ue={class:"float-right align-middle"},De={class:"justify-start w-20%"},Ke=V("div",{class:"i-mdi:search w-1em h-1em text-2xl"},null,-1),Be={class:"flex justify-end w-20%"},ze=V("div",{class:"flex"},[V("div",{class:"i-mdi:export-variant w-1em h-1em text-xl mr-1"}),I(" Exportar ")],-1),Ye=V("span",{class:"flex"},[V("div",{class:"i-mdi:file-csv-outline w-1em h-1em text-gray-900 mr-2 text-xl"}),I(" CSV ")],-1),Xe=V("span",{class:"flex"},[V("div",{class:"i-mdi:microsoft-excel w-1em h-1em text-green-700 mr-2 text-xl"}),I(" EXCEL ")],-1),Ze=V("span",{class:"flex"},[V("div",{class:"i-mdi:file-pdf-box w-1em h-1em text-red-500 mr-2 text-xl"}),I(" PDF ")],-1),$e={class:"flex justify-center align-center"},He={class:"text-xl flex justify-center align-center"},Qe=["onClick"],We=V("div",{class:"i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer mt-1"},null,-1),Je=V("div",{class:"i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer"},null,-1),e("default",b({__name:"Key_wordsList",setup:function(e){var t=L(),n=L([]),r=L(null),o=L(null),i=ve.visible_columns,a=O((function(){return n.value.filter((function(e){return K(e,t.value,i)}))})),l=ve.useGetMany(),u=l.loading,c=(l.result,l.onError),s=l.onResult,d=l.refetch,f=E([]),v=ve.useDeleteById(f,{defaultEnabled:!1}),p=(v.onError,v.onResult),h=v.toggleEnabled,b=v.loading,x=v.enabled;s((function(e){n.value=e.data.data})),c((function(e){C("error","Error de peticion","Error de peticion del elemento")}));var w=L(!1),j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];w.value=!w.value,e&&(W.destroyAll(),d())},k=function(){o.value=null,j()},R=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];o.value=null,j(e)};p((function(){var e;d(),null==r||null===(e=r.value)||void 0===e||e.clearSelection(),C("success","Acción Exitosa","Se han eliminado los elementos correctamente"),x.value=!1,W.destroyAll()}));var T=function(){W.confirm({title:F(g,{text:"¿Desea eliminar el/los elementos seleccionados?",iconClass:"i-heroicons:trash w-1em h-1em text-4xl color-red-500",textClass:"ml-5 text-xl",loading:b,onOk:function(){var e;Object.assign(f,null==r||null===(e=r.value)||void 0===e?void 0:e.selectedRowKeys),h()}}),icon:null,footer:null})},A=function(){Y("Key_wordsList",i,a.value)},N=function(){X("Key_wordsList",i,a.value)};return function(e,n){var l,c,s=W,f=Z("router-link"),v=J,p=ee,h=te,g=ne,b=re,x=oe,E=ie,L=_;return P(),S(D,null,[F(s,{open:w.value,"onUpdate:open":n[1]||(n[1]=function(e){return w.value=e}),footer:null,"destroy-on-close":!0,onCancel:n[2]||(n[2]=function(e){return o.value=null}),"wrap-class-name":"modal-form",width:"55%"},{closeIcon:M((function(){return[Ce]})),title:M((function(){return[V("div",Pe,[V("div",{class:B([o.value?"i-heroicons:pencil-square":"i-heroicons:plus-20-solid","w-1em h-1em p-3.5 mr-2"])},null,2),V("h1",null,U(o.value?"Actualizar Tipos":"Crear Tipos"),1)])]})),default:M((function(){return[F(Oe,{modal:!0,modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=function(e){return o.value=e}),action:o.value?"update":"create",onCloseModal:R,onReload:q(d),"show-loading":!0},{loading_icon:M((function(){return[Se]})),_:1},8,["modelValue","action","onReload"])]})),_:1},8,["open"]),V("div",Re,[F(p,{class:"h-full"},{default:M((function(){return[F(v,null,{default:M((function(){return[F(f,{to:{name:"index"}},{default:M((function(){return[Me]})),_:1})]})),_:1}),F(v,null,{default:M((function(){return[I("Administración")]})),_:1}),F(v,null,{default:M((function(){return[I("Palabras claves")]})),_:1})]})),_:1}),Te]),V("div",qe,[V("div",Ae,[V("div",Ne,[V("div",Ve,[F(q(z),{shadow:"",ref:"btnDelete",class:"btn-delete",disabled:0===(null===(l=r.value)||void 0===l?void 0:l.selectedRowKeys.length),onClick:T},{default:M((function(){return[Fe,I(" Eliminar ")]})),_:1},8,["disabled"]),F(q(z),{class:"mr-3",shadow:"",onClick:k},{default:M((function(){return[Ge,I(" Crear Palabras claves ")]})),_:1}),V("div",Ie,[V("span",Ue,"Elementos seleccionados "+U(null===(c=r.value)||void 0===c?void 0:c.selectedRowKeys.length)+"/"+U(q(a).length),1)]),V("div",De,[F(h,{value:t.value,"onUpdate:value":n[3]||(n[3]=function(e){return t.value=e}),class:"col-1",placeholder:"Buscar elemento","allow-clear":!0},{prefix:M((function(){return[Ke]})),_:1},8,["value"])]),V("div",Be,[F(x,{class:"flex"},{overlay:M((function(){return[F(b,null,{default:M((function(){return[F(g,{key:"1",onClick:A},{default:M((function(){return[Ye]})),_:1}),F(g,{key:"2",onClick:N},{default:M((function(){return[Xe]})),_:1}),F(g,{key:"3"},{default:M((function(){return[Ze]})),_:1})]})),_:1})]})),default:M((function(){return[ze]})),_:1})])])]),F(y,{ref_key:"key_wordsTbl",ref:r,columns:q(i),data:q(a),loading_icon:q(u),has_selection:!0,on_select:function(e){},onChangePagination:n[4]||(n[4]=function(e){q(d)()}),id_element:"id",class:"mt-5"},{loading_icon:M((function(){return[F(m)]})),_action:M((function(e){e._;var t=e.record;return[V("div",$e,[V("div",He,[F(E,null,{title:M((function(){return[I("Actualizar elemento")]})),default:M((function(){return[V("div",{class:"i-heroicons:pencil-square w-1em h-1em text-blue-600 cursor-pointer",onClick:function(e){return function(e){o.value=e,j()}(t)}},null,8,Qe)]})),_:2},1024),F(L,{title:"Desea eliminar este elemento?","ok-text":"Si","cancel-text":"No",onConfirm:function(e){return function(e){u.value=!0;var t=ve.useDelete(e.id),n=t.onResult,r=t.onError;n((function(){C("success","Acción Exitosa","Se ha eliminado el elmento correctamente"),u.value=!1,d()})),r((function(){C("error","Acción Fallida","Ocurrio un error en la eliminación del elemento, puede estar asociado a otros elementos"),u.value=!1}))}(t)}},{icon:M((function(){return[We]})),default:M((function(){return[F(E,null,{title:M((function(){return[I("Eliminar elemento")]})),default:M((function(){return[Je]})),_:1})]})),_:2},1032,["onConfirm"])])])]})),_:1},8,["columns","data","loading_icon"])])])],64)}}}));case 56:case"end":return i.stop()}}),i)}))),function(){return ae.apply(this,arguments)})}}))}();
