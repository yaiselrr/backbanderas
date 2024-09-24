import{d as e,X as a,h as s,j as l,Y as o,k as t,r,S as d,n as i,z as n,q as c,v as u,O as m,E as p,Z as v,A as _,x as f,c as g,M as b,T as y,L as x,G as k,U as h}from"./index-D0wN_fuZ.js";import{_ as w}from"./RForm.vue_vue_type_script_setup_true_lang-HqTuq9xx.js";import{R as j}from"./request_statuses.model-DtSxHQNi.js";import{_ as V}from"./RButton.vue_vue_type_style_index_0_lang-DWca47Ax.js";import{R}from"./index-CFoXpmaN.js";import{_ as q}from"./REditor.vue_vue_type_style_index_0_lang-B9q55COs.js";import{C as E}from"./RestBase-6hwWqa7t.js";const C={class:"r-container-form"},M={class:"mt-10 sm:mt-0"},A={class:"shadow overflow-hidden sm:rounded-md"},N={class:"px-4 py-5 bg-white dark:bg-slate-800 sm:p-6"},S={class:"grid grid-cols-4 gap-4"},U={class:"grid-input"},F={class:"col-span-4"},L={class:"px-4 py-3 bg-gray-50 dark:bg-slate-700 dark:bg-opacity-70 text-right sm:px-6"},z={class:"r-footer-form"},B={class:"flex"},I={key:0,class:"flex-none items-center"},O=[f("label",{for:"andNew",class:"font-bold text-gray-700 dark:text-slate-200 !cursor-pointer"},[x("Insertar y nuevo "),f("span",{id:"andNew-description",class:"ml-1 text-muted"},"Se insertará un elemento y reiniciará el formulario")],-1)],D={class:"r-footer-button-form"},G=e({__name:"Request_statusesForm",props:a({modal:s.bool.def(!1),action:s.string.def("create"),loading_text:s.string.def(""),showLoading:s.bool.def(!0)},{modelValue:{},modelModifiers:{}}),emits:a(["closeModal","reload"],["update:modelValue"]),setup(e,{emit:a}){const s=l(),G=e,K=a,T="create"==G.action?"Crear":"Actualizar",X=o(e,"modelValue"),Y=t(new j(X.value)),Z=r(),$=r(!1),{loading:H,toggleEnabled:J,onResult:P,enabled:Q,onError:W}=j.useStaticSave(Y,{defaultEnabled:!1}),ee=r(!1),ae=()=>{G.modal?K("closeModal"):s.push({name:"request_statuses_list"})};async function se(){var e;await(null==(e=Z.value)?void 0:e.validate())&&J()}return W((e=>{d("error","Error en accion","Error en accion del elemento")})),P((e=>{var a;d("success","Accion  "+T,"Accion ejecutada correctamente"),$.value?(null==(a=Z.value)||a.clear(),Q.value=!1,Object.assign(Y,new j(X.value)),G.modal&&K("reload")):G.modal?K("closeModal",!0):s.push({name:"request_statuses_list"})})),(a,s)=>{const l=E;return i(),n(h,null,[e.showLoading?(i(),c(v,{key:0,"h-full":!0,class:"",loading:p(ee),description:G.loading_text},{default:u((()=>[m(a.$slots,"loading_icon")])),_:3},8,["loading","description"])):_("",!0),f("div",C,[f("div",M,[f("div",A,[g(w,{ref_key:"request_statusesForm",ref:Z,state:p(Y),validations:p(j).validations[e.action],feedbacks:p(j).feedbacks[e.action],loading:!0},{default:u((()=>[f("div",N,[f("div",S,[f("div",U,[g(p(R),{type:"text",requiredMark:!0,modelValue:p(Y).name,"onUpdate:modelValue":s[0]||(s[0]=e=>p(Y).name=e),path:"name",label:"Nombre",onKeyup:b(se,["enter"])},null,8,["modelValue"])]),f("div",F,[g(q,{modelValue:p(Y).decription,"onUpdate:modelValue":s[1]||(s[1]=e=>p(Y).decription=e),path:"decription",label:"Descripción"},null,8,["modelValue"])])])]),f("div",L,[f("div",z,[f("div",B,["create"===e.action?(i(),n("div",I,[g(l,{checked:p($),"onUpdate:checked":s[2]||(s[2]=e=>y($)?$.value=e:null),"aria-describedby":"offers-description",id:"andNew"},null,8,["checked"])])):_("",!0),"create"===e.action?(i(),n("div",{key:1,onClick:s[3]||(s[3]=e=>p($).value!=p($).value),class:"flex text-sm absolute mx-[2rem] my-[4px]"},O)):_("",!0)]),f("div",D,[g(V,{class:"ml-5",shadow:"",color:"primary",loading:p(H),onClick:se},{default:u((()=>[x(k(p(T))+" estado de solicitud ",1)])),_:1},8,["loading"]),g(V,{class:"ml-5",shadow:"",color:"primary",onClick:ae},{default:u((()=>[x(" Cancelar ")])),_:1})])])])])),_:1},8,["state","validations","feedbacks"])])])])],64)}}});export{G as _};
