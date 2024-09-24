var e=Object.defineProperty,a=(a,t,i)=>((a,t,i)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i)(a,"symbol"!=typeof t?t+"":t,i);import{d as t,X as i,h as d,j as o,Y as n,k as l,r as s,a as r,S as u,o as c,n as p,z as _,q as m,v,O as y,E as h,Z as b,A as g,x as f,c as k,M as q,L as x,G as V,U as w}from"./index-D0wN_fuZ.js";import{_ as C}from"./RForm.vue_vue_type_script_setup_true_lang-HqTuq9xx.js";import{R as j,C as U}from"./RestBase-6hwWqa7t.js";import{r as I,i as R,m as M,R as E}from"./index-CFoXpmaN.js";import{d as F}from"./debounceValidator-Cl5zTG4a.js";import{d as T}from"./index-brT4NzTB.js";import{_ as S}from"./RButton.vue_vue_type_style_index_0_lang-DWca47Ax.js";import{_ as A}from"./REditor.vue_vue_type_style_index_0_lang-B9q55COs.js";import{_ as K}from"./RSelect.vue_vue_type_script_setup_true_lang-C-HhWqQ_.js";import{T as z}from"./types.model-BWjGDeTh.js";const L=[{title:"Código",dataIndex:"code",align:"center",key:"code",sorter:(e,a)=>+(e.code>a.code)-+(e.code<a.code)},{title:"Tipo",dataIndex:"type.name",align:"center",key:"type.name",customRender(e){var a;return null==(a=e.record.type)?void 0:a.name},sorter:(e,a)=>e.type&&a.type?(e.type.name>a.type.name)-(e.type.name<a.type.name):0},{title:"Valor de Cupón",dataIndex:"coupon_value",align:"center",key:"coupon_value",sorter:(e,a)=>+(e.coupon_value>a.coupon_value)-+(e.coupon_value<a.coupon_value)},{title:"Cantidad disponible",dataIndex:"available_quantity",align:"center",key:"available_quantity",sorter:(e,a)=>+(e.available_quantity>a.available_quantity)-+(e.available_quantity<a.available_quantity)},{title:"Fecha Inicio",dataIndex:"start_date",align:"center",key:"start_date",sorter:(e,a)=>+(e.start_date>a.start_date)-+(e.start_date<a.start_date)},{title:"Fecha Fin",dataIndex:"end_date",align:"center",key:"end_date",sorter:(e,a)=>+(e.end_date>a.end_date)-+(e.end_date<a.end_date)},{title:"Condiciones",dataIndex:"conditions",align:"center",key:"conditions",sorter:(e,a)=>+(e.conditions>a.conditions)-+(e.conditions<a.conditions)},{title:"Acciones",key:"_action",fixed:"right",width:"5%",scopedSlots:{customRender:"_action"}}],N={create:{code:{required:I,isUnique:F((function(e,a){const{id:t,code:i}={...a.state},d=t?"update":"create";return!i||G.validate({code:i,id:t,_scenario:d,_specific:!0})}),void 0,500)},type_id:{required:I,integer:R},coupon_value:{required:I},available_quantity:{required:I},conditions:{},start_date:{},end_date:{}},update:{code:{required:I,isUnique:F((function(e,a){const{id:t,code:i}={...a.state},d=t?"update":"create";return!i||G.validate({code:i,id:t,_scenario:d,_specific:!0})}),void 0,500)},type_id:{required:I,integer:R},coupon_value:{required:I,maxLength:M(65535)},available_quantity:{required:I},conditions:{},start_date:{},end_date:{}}},O=await j("coupons","sale/coupons"),B=class extends O{constructor(e=null){super(),a(this,"id"),a(this,"code"),a(this,"type_id"),a(this,"coupon_value"),a(this,"available_quantity"),a(this,"start_date"),a(this,"end_date"),a(this,"conditions"),a(this,"created_at"),a(this,"updated_at"),null!=e&&(this.id=e.id||void 0,this.code=e.code||null,this.type_id=e.type_id||null,this.coupon_value=e.coupon_value||null,this.available_quantity=e.available_quantity||null,this.conditions=e.conditions||null,this.start_date=e.start_date?T(e.start_date):null,this.end_date=e.end_date?T(e.end_date):null,this.created_at=e.created_at?T(e.created_at):null,this.updated_at=e.updated_at?T(e.updated_at):null)}set_attributes(e=null){null!=e&&(this.id=e.id,this.code=e.code,this.type_id=e.type_id,this.coupon_value=e.coupon_value,this.available_quantity=e.available_quantity,this.conditions=e.conditions,this.start_date=T(e.start_date),this.end_date=T(e.end_date),this.created_at=T(e.created_at),this.updated_at=T(e.updated_at))}get_id(){return this.id}class_name(){return"Coupons"}};a(B,"validations",N),a(B,"feedbacks",{create:{code:{isUnique:"This code has been taken"},id:{isUnique:"This id has been taken"}},update:{code:{isUnique:"This code has been taken"},id:{isUnique:"This id has been taken"}}}),a(B,"columns",L),a(B,"visible_columns",B.show_columns(["*"],!0));let G=B;const D={class:"r-container-form"},P={class:"mt-10 sm:mt-0"},X={class:"shadow overflow-hidden sm:rounded-md"},Y={class:"px-4 py-5 bg-white dark:bg-slate-800 sm:p-6"},Z={class:"grid grid-cols-4 gap-4"},$={class:"grid-input"},H={class:"grid-input"},J={class:"grid-input"},Q={class:"px-4 py-5 bg-white dark:bg-slate-800 sm:p-6"},W={class:"grid grid-cols-4 gap-4"},ee={class:"grid-input"},ae={class:"col-span-4"},te={class:"px-4 py-3 bg-gray-50 dark:bg-slate-700 dark:bg-opacity-70 text-right sm:px-6"},ie={class:"r-footer-form"},de={class:"flex"},oe={key:0,class:"flex-none items-center"},ne=[f("label",{for:"andNew",class:"font-bold text-gray-700 dark:text-slate-200 !cursor-pointer"},[x("Insertar y nuevo "),f("span",{id:"andNew-description",class:"ml-1 text-muted"},"Se insertara un elemento y reiniciara el formuario")],-1)],le={class:"r-footer-button-form"},se=t({__name:"CouponsForm",props:i({modal:d.bool.def(!1),action:d.string.def("create"),loading_text:d.string.def(""),showLoading:d.bool.def(!0)},{modelValue:{},modelModifiers:{}}),emits:i(["closeModal","reload"],["update:modelValue"]),setup(e,{emit:a}){const t=o(),i=e,d=a,j="create"==i.action?"Crear":"Actualizar",I=n(e,"modelValue"),R=l(new G(I.value)),M=s(),F=s(!1),{loading:T,result:L}=z.useGetMany(),{loading:N,toggleEnabled:O,onResult:B,enabled:se,onError:re}=G.useStaticSave(R,{defaultEnabled:!1}),ue=r((()=>T.value)),ce=()=>{i.modal?d("closeModal"):t.push({name:"coupons_list"})};async function pe(){var e;await(null==(e=M.value)?void 0:e.validate())&&O()}return re((e=>{u("error","Error en accion","Error en accion del elemento")})),B((e=>{var a;u("success","Accion  "+j,"Accion ejecutada correctamente"),F.value?(null==(a=M.value)||a.clear(),se.value=!1,Object.assign(R,new G(I.value)),i.modal&&d("reload")):i.modal?d("closeModal",!0):t.push({name:"coupons_list"})})),c((()=>{})),(a,t)=>{const d=U;return p(),_(w,null,[e.showLoading?(p(),m(b,{key:0,"h-full":!0,class:"",loading:h(ue),description:i.loading_text},{default:v((()=>[y(a.$slots,"loading_icon")])),_:3},8,["loading","description"])):g("",!0),f("div",D,[f("div",P,[f("div",X,[k(C,{ref_key:"couponsForm",ref:M,state:h(R),validations:h(G).validations[e.action],feedbacks:h(G).feedbacks[e.action],loading:!0},{default:v((()=>{var a;return[f("div",Y,[f("div",Z,[f("div",$,[k(h(E),{type:"text",requiredMark:!0,modelValue:h(R).code,"onUpdate:modelValue":t[0]||(t[0]=e=>h(R).code=e),path:"code",label:"Código",onKeyup:q(pe,["enter"])},null,8,["modelValue"])]),f("div",H,[k(K,{modelValue:h(R).type_id,"onUpdate:modelValue":t[1]||(t[1]=e=>h(R).type_id=e),"id-key":"id","required-mark":!0,ref:"selectId","loading-data":h(T),loading:h(T),"text-key":"name",allowClear:!0,showFilter:"",items:null==(a=h(L))?void 0:a.data,path:"type_id",label:"Tipo",onKeyup:q(pe,["enter"])},null,8,["modelValue","loading-data","loading","items"])]),f("div",J,[k(h(E),{type:"number",requiredMark:!0,modelValue:h(R).coupon_value,"onUpdate:modelValue":t[2]||(t[2]=e=>h(R).coupon_value=e),path:"size",label:"Valor de cupón",onKeyup:q(pe,["enter"])},null,8,["modelValue"])])])]),f("div",Q,[f("div",W,[f("div",ee,[k(h(E),{type:"number",requiredMark:!0,modelValue:h(R).available_quantity,"onUpdate:modelValue":t[3]||(t[3]=e=>h(R).available_quantity=e),path:"available_quantity",label:"Cantidad Disponible",onKeyup:q(pe,["enter"])},null,8,["modelValue"])])]),f("div",ae,[k(A,{modelValue:h(R).conditions,"onUpdate:modelValue":t[4]||(t[4]=e=>h(R).conditions=e),path:"conditions",label:"Condiciones",onKeyup:q(pe,["enter"])},null,8,["modelValue"])])]),f("div",te,[f("div",ie,[f("div",de,["create"===e.action?(p(),_("div",oe,[k(d,{checked:F.value,"onUpdate:checked":t[5]||(t[5]=e=>F.value=e),"aria-describedby":"offers-description",id:"andNew"},null,8,["checked"])])):g("",!0),"create"===e.action?(p(),_("div",{key:1,onClick:t[6]||(t[6]=e=>F.value.value!=F.value.value),class:"flex text-sm absolute mx-[2rem] my-[4px]"},ne)):g("",!0)]),f("div",le,[k(S,{class:"ml-5",shadow:"",color:"primary",loading:h(N),onClick:pe},{default:v((()=>[x(V(h(j))+" Cupones ",1)])),_:1},8,["loading"]),k(S,{class:"ml-5",shadow:"",color:"primary",onClick:ce},{default:v((()=>[x(" Cancelar ")])),_:1})])])])]})),_:1},8,["state","validations","feedbacks"])])])])],64)}}});export{G as C,se as _};