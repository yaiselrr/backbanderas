import{E as e,d as l,h as a,N as n,bJ as u,a as r,l as t,n as o,z as i,c as s,v,y as d,x as c,G as m,A as f,ay as p,r as E,w as h,b as g,am as b,av as y,al as $,k as R,i as C,o as L}from"./index-D0wN_fuZ.js";import"./index-CFoXpmaN.js";import{l as N,d as S}from"./index-brT4NzTB.js";import{u as V}from"./index-BtQlog3F.js";const w={required:"Este campo es requerido",integer:"Este campo debe ser un número",sameAsPassword:"Las contraseñas no coinciden",passwordOneUpper:"La contraseña debe tener al menos una mayúscula",passwordOneLower:"La contraseña debe tener al menos una minúscula",oneUpper:"Este campo es debe tener al menos una mayúscula",oneLower:"Este campo debe tener al menos una minúscula"},O=(l,a)=>{return a=e(a),"maxLength"==l?(r=a.max,"Este campo no puede tener más de ".concat(r," caracteres")):"minLength"==l?(u=a.min,"Este campo no puede tener menos de ".concat(u," caracteres")):"email"==l?"El correo electrónico no es válido":"minValue"==l?(n=a.min,"El valor mínimo es ".concat(n)):w[l]?w[l]:"Ingrese un valor válido para este campo";var n,u,r};var x=(e=>(e.VUE_OBJECT="vue_object",e.NESTED="nested",e.FEEDBACKS="feedbacks",e.VALIDATEKEY="validateKey",e.CLEARKEY="clearKey",e))(x||{}),_=(e=>(e.SUCCESS="success",e.WARNING="warning",e.ERROR="error",e.NONE="none",e))(_||{});const k={class:"relative pb-5 mt-0.5 overflow-hidden input-animation"},A={class:"ml-1 color-inherit"},K=l({__name:"ValidationMessage",props:{state:a.oneOf(["success","warning","error","none"]).def("none"),hint:a.string},setup(l){const a=l,{state:E,hint:h}=n(a),g=u(E,100),b=u(h,100),y=r((()=>({"text-red-500":g.value==_.ERROR,"text-yellow-500":g.value==_.WARNING,"text-green-500":g.value==_.SUCCESS,"text-blue-500":g.value==_.NONE}))),$=r((()=>{switch(g.value){case _.ERROR:return t("div",{class:"i-heroicons:exclamation-circle m-0.5 w-1em h-1em color-inherit"});case _.SUCCESS:return t("div",{class:"i-heroicons:information-circle m-0.5 w-1em h-1em color-inherit"});case _.WARNING:return t("div",{class:"i-heroicons:exclamation-circle m-0.5 w-1em h-1em color-inherit"});case _.NONE:return t("div",{class:"i-heroicons:information-circle m-0.5 w-1em h-1em color-inherit"})}}));return(l,a)=>(o(),i("div",k,[s(p,{"enter-active-class":"animate__animated animate__fadeInDown","leave-active-class":"animate__animated animate__fadeOutUp"},{default:v((()=>[e(b)?(o(),i("span",{key:0,class:d([e(y),"absolute flex items-start top-0"])},[s(e($),{class:"color-inherit"}),c("small",A,m(e(b)),1)],2)):f("",!0)])),_:1})]))}});function U(l=!1,a=!1){const n=E(),u=E(l),r=()=>{u.value=!0},t=()=>{u.value=!1};return h(n,(()=>{var l,u,o,i;if(n.value)if(null==(l=n.value)?void 0:l.addEventListener)null==(u=n.value)||u.addEventListener("focus",r),null==(o=n.value)||o.addEventListener("blur",t);else if(e(a)){if(n.value.$refs){const e=null==(i=n.value)?void 0:i.$el;if(e){const l=null==e?void 0:e.children.item(0);if(l){const e=l.children[0];e.addEventListener("focus",r),e.addEventListener("blur",t)}}}}else n.value.$el.addEventListener("focus",r),n.value.$el.addEventListener("blur",t)})),h(u,((e,l)=>{var a,u;e?null==(a=n.value)||a.focus():null==(u=n.value)||u.blur()})),g((()=>{var l,u,o;n.value&&(n.value.removeEventListener?(n.value.removeEventListener("focus",r),n.value.removeEventListener("blur",t)):e(a)?(null==(l=n.value.$refs)?void 0:l.inputNumberRef)&&(null==(u=n.value.$refs)||u.inputNumberRef.inputRef.removeEventListener("focus",r),null==(o=n.value.$refs)||o.inputNumberRef.inputRef.removeEventListener("blur",t)):(n.value.$el.removeEventListener("focus",r),n.value.$el.removeEventListener("blur",t)))})),{ref:n,focused:u,focus:function(){var e;null==(e=n.value)||e.focus()},blur:function(){var e;null==(e=n.value)||e.blur()},onBlur:e=>b(N(u),e),onFocus:e=>b(u,e)}}function I(e,l,a){return r((()=>({"!border-gray-600":e.value==_.NONE&&!l.value,"!ring-primary-500 !border-primary-500":e.value==_.NONE&&l.value||e.value==_.SUCCESS&&!a.value&&l.value,"border-gray-300":e.value==_.NONE&&!l.value,"!ring-red-400 !border-red-400":e.value==_.ERROR,"!ring-green-400 border-green-400":e.value==_.SUCCESS&&a.value,"!ring-yellow-300 border-yellow-300":e.value==_.WARNING})))}function B(l){const a=E(!1),u=E("new-password"),t=E(),o=y(),i=null==o?void 0:o.emit,s=null==o?void 0:o.props,{asyncRules:v,loading:d,modelValue:c}=n(s),{type:m}=n(s),{focused:f,handleChange:p,clear:g,inputRef:b}=function(l="text"){const a=y();if(!(null==a?void 0:a.emit))throw new Error("Use Input hook can only be used inside a component instance");const{props:n,emit:u}=a,t=r((()=>"number"==e(l))),{focused:o,ref:i,focus:s,blur:v}=U(!1,t);return{handleChange:function(a){var n;"date"==e(l)?u("update:modelValue",S(new Date(a))):"number"==e(l)?(null==a?void 0:a.target)?u("update:modelValue",Number(a.target.value)):u("update:modelValue",a?Number(a):0):"editor"==e(l)?u("update:modelValue",a):u("update:modelValue",null==(n=a.target)?void 0:n.value)},clear:function(){u("update:modelValue",null)},focused:o,inputRef:i,focus:s,blur:v}}(m),C=r((()=>{var e,a,n;let u=!0;for(let r=0;r<(null==(a=null==(e=l.value)?void 0:e.$silentErrors)?void 0:a.length)&&u;r++){const e=null==(n=null==l?void 0:l.value)?void 0:n.$silentErrors[r];(null==v?void 0:v.value.includes(e.$validator))||(u=!1)}return u})),{typing:L}=function(e){const[l,a]=$(!1),n=E();return h(e,(()=>{l.value=!0,n.value&&clearTimeout(n.value);const e=setTimeout(a,500);n.value=e})),{typing:l}}(c),N=r((()=>{var e;return null==(e=l.value)?void 0:e.$pending})),V=r((()=>{var e;return null==(e=l.value.value)?void 0:e.$error})),w=r((()=>{var e;return null==(e=l.value.value)?void 0:e.$invalid})),O=R({pending:N,hasError:V,isInvalid:w}),x=r((()=>d.value||N.value&&a.value&&C.value&&!L.value));return{inputRef:b,isBlur:a,autofillKey:u,formContainer:t,emit:i,props:s,handleChange:p,shake:function(){var e;null==(e=t.value)||e.classList.add("animated","vshake"),setTimeout((()=>{var e;null==(e=t.value)||e.classList.remove("animated","vshake")}),500)},emitEmpty:()=>{var e;null==i||i("update:modelValue",""),null==(e=b.value)||e.focus(),null==i||i("after-clear")},clear:g,focused:f,isLoading:x,syncValidationsValid:C,typing:L,status:O}}function T(l){return l?function(){const l=y(),a=null==l?void 0:l.props,{path:u,loading:t,feedbacks:o,asyncRules:i,successStatus:s,modelValue:v}=n(a),d=V({value:null==l?void 0:l.props.validations},R({value:v}),{$lazy:!0}),{inputRef:c,isBlur:m,autofillKey:f,formContainer:p,emit:E,handleChange:h,shake:g,emitEmpty:b,clear:$,focused:C,isLoading:N,syncValidationsValid:S,typing:w,status:x}=B(d),k=r((()=>{var l,a,n;return S.value&&w.value||!e(m)||N.value?"none":(null==(l=d.value)?void 0:l.$error)?_.ERROR:!(null==(a=d.value)?void 0:a.$invalid)&&(null==(n=d.value)?void 0:n.$dirty)?_.SUCCESS:_.NONE})),A=r((()=>{var l,a,n,u;if((null==(l=d.value)?void 0:l.$pending)||!e(m))return"";for(const e of null==(a=d.value)?void 0:a.$errors){const l=null==e?void 0:e.$validator;return null!=(u=null==(n=o.value)?void 0:n[l])?u:O(l,null==e?void 0:e.$params)}return""}));L((()=>{var e,l;(null==(e=i.value)?void 0:e.length)&&u.value&&(null==(l=d.value.value)||l.$touch())}));const K=I(k,C,s);return{feedbacks:o,formContainer:p,inputRef:c,isBlur:m,autofillKey:f,validateStatus:k,getText:A,handleChange:h,shake:g,emitEmpty:b,clear:$,blurInput:()=>{var e;m.value=!0,null==(e=d.value.value)||e.$touch(),null==E||E("onblur")},validate:()=>{var e,l,a,n;return m.value=!0,null==(e=d.value.value)||e.$touch(),!(null==(l=d.value.value)?void 0:l.$invalid)&&!(null==(a=d.value.value)?void 0:a.$pending)||((null==(n=d.value.value)?void 0:n.$pending)||g(),!1)},focused:C,stateClasses:K,vobject:d,isLoading:N,syncValidationsValid:S,status:x}}():function(){const l=C(x.VUE_OBJECT),a=C(x.FEEDBACKS),u=C(x.VALIDATEKEY),t=C(x.CLEARKEY),o=r((()=>l&&w.value?e(l):null)),i=r((()=>{if(!o.value)return null;if(w.value.includes(".")){const e=w.value.split("."),l=E({...o.value});for(let a=0;a<e.length;a++){const n=e[a];l.value=l.value[n]}return l.value}return e(o)[w.value]})),{isBlur:s,autofillKey:v,formContainer:d,emit:c,props:m,handleChange:f,shake:p,emitEmpty:g,clear:b,focused:y,inputRef:$,isLoading:R,syncValidationsValid:N,typing:S,status:V}=B(i),{path:w,asyncRules:k,loading:A,successStatus:K}=n(m),U=r((()=>l?e(a):null)),T=r((()=>{if(!l)return"none";const a=e(i);return N.value&&S.value||!e(s)||R.value?"none":(null==a?void 0:a.$error)?_.ERROR:!(null==a?void 0:a.$invalid)&&(null==a?void 0:a.$dirty)?_.SUCCESS:_.NONE})),j=r((()=>{if(!l)return null;const a=e(i),n=e(U);if((null==a?void 0:a.$pending)||!e(s))return"";for(const e of null==a?void 0:a.$errors){const l=null==e?void 0:e.$validator;if(n)if(w.value.includes(".")){const e=w.value.split(".");let a=n;for(let l=0;l<e.length;l++)a=a[e[l]];if(a[l])return a[l]}else if(n[w.value]&&n[w.value][l])return n[w.value][l];return O(l,e.$params)}return""})),D=()=>{var e,l,a,n;return!(w.value&&(s.value=!0,null==(e=i.value)||e.$touch(),(null==(l=i.value)?void 0:l.$invalid)||(null==(a=i.value)?void 0:a.$pending))&&((null==(n=i.value)?void 0:n.$pending)||p(),1))};t&&h(t,(e=>{1==e&&b()})),u&&h(u,(e=>{1==e&&D()})),L((()=>{var e;(null==k?void 0:k.value.length)&&w.value&&(null==(e=i.value)||e.$touch())}));const G=I(T,y,K);return{feedbacks:a,formContainer:d,inputRef:$,isBlur:s,autofillKey:v,validateStatus:T,getText:j,handleChange:f,shake:p,emitEmpty:g,clear:b,blurInput:()=>{var e;w.value&&(s.value=!0,null==(e=i.value)||e.$touch(),null==c||c("onblur"))},validate:D,focused:y,stateClasses:G,vobject:i,isLoading:R,syncValidationsValid:N,status:V}}()}export{K as _,U as a,T as u};
