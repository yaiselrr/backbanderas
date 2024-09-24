var e=Object.defineProperty,a=(a,t,s)=>((a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s)(a,"symbol"!=typeof t?t+"":t,s);import{d as t,X as s,h as i,j as n,Y as o,k as l,r as d,a as r,S as c,n as u,z as m,q as p,v as _,O as h,E as y,Z as g,A as b,x as f,c as v,M as x,L as k,G as w,U as V}from"./index-D0wN_fuZ.js";import{_ as U}from"./RForm.vue_vue_type_script_setup_true_lang-HqTuq9xx.js";import{R as j,C as q}from"./RestBase-6hwWqa7t.js";import{r as C,m as I,i as R,R as E}from"./index-CFoXpmaN.js";import{d as K}from"./debounceValidator-Cl5zTG4a.js";import{d as M}from"./index-brT4NzTB.js";import{_ as S}from"./RButton.vue_vue_type_style_index_0_lang-DWca47Ax.js";import{_ as A}from"./RSelect.vue_vue_type_script_setup_true_lang-C-HhWqQ_.js";import{_ as F}from"./REditor.vue_vue_type_style_index_0_lang-B9q55COs.js";import{U as D}from"./users.model-13Myq0P6.js";import{B as L}from"./business_sectors.model-DJ1xQQ_r.js";const T=[{title:"Contacto",dataIndex:"contact",align:"center",key:"contact",sorter:(e,a)=>+(e.contact>a.contact)-+(e.contact<a.contact)},{title:"Empresa",dataIndex:"company",align:"center",key:"company",sorter:(e,a)=>+(e.company>a.company)-+(e.company<a.company)},{title:"CIF",dataIndex:"cif",align:"center",key:"cif",sorter:(e,a)=>+(e.cif>a.cif)-+(e.cif<a.cif)},{title:"Correo de empresa",dataIndex:"company_email",align:"center",key:"company_email",sorter:(e,a)=>+(e.company_email>a.company_email)-+(e.company_email<a.company_email)},{title:"Teléfono",dataIndex:"phone",align:"center",key:"phone",sorter:(e,a)=>+(e.phone>a.phone)-+(e.phone<a.phone)},{title:"Página web",dataIndex:"web_page",align:"center",key:"web_page",sorter:(e,a)=>+(e.web_page>a.web_page)-+(e.web_page<a.web_page)},{title:"Dirección",dataIndex:"address",align:"center",key:"address",sorter:(e,a)=>+(e.address>a.address)-+(e.address<a.address)},{title:"Sector de negocios",dataIndex:"business_sector.name",align:"center",key:"business_sector.name",customRender(e){var a;return null==(a=e.record.business_sector)?void 0:a.name},sorter:(e,a)=>e.business_sector&&a.business_sector?(e.business_sector.name>a.business_sector.name)-(e.business_sector.name<a.business_sector.name):0},{title:"Usuario",dataIndex:"user.name",align:"center",key:"user.name",customRender(e){var a;return null==(a=e.record.user)?void 0:a.name},sorter:(e,a)=>e.user&&a.user?(e.user.name>a.user.name)-(e.user.name<a.user.name):0},{title:"Acciones",key:"_action",fixed:"right",width:"5%",scopedSlots:{customRender:"_action"}}],z={create:{contact:{required:C,isUnique:K((function(e,a){const{id:t,contact:s}={...a.state},i=t?"update":"create";return!s||N.validate({contact:s,id:t,_scenario:i,_specific:!0})}),void 0,500)},company:{},cif:{},company_email:{},phone:{},web_page:{},address:{maxLength:I(65535)},business_sector_id:{required:C,integer:R},user_id:{required:C,integer:R}},update:{contact:{required:C,isUnique:K((function(e,a){const{id:t,contact:s}={...a.state},i=t?"update":"create";return!s||N.validate({contact:s,id:t,_scenario:i,_specific:!0})}),void 0,500)},company:{},cif:{},company_email:{},phone:{},web_page:{},address:{maxLength:I(65535)},business_sector_id:{required:C,integer:R},user_id:{required:C,integer:R}}},B=await j("dealers","security/dealers"),G=class extends B{constructor(e=null){super(),a(this,"id"),a(this,"contact"),a(this,"company"),a(this,"cif"),a(this,"company_email"),a(this,"phone"),a(this,"web_page"),a(this,"address"),a(this,"business_sector_id"),a(this,"user_id"),a(this,"created_at"),a(this,"updated_at"),null!=e&&(this.id=e.id||void 0,this.contact=e.contact||null,this.company=e.company||null,this.cif=e.cif||null,this.company_email=e.company_email||null,this.phone=e.phone||null,this.web_page=e.web_page||null,this.address=e.address||null,this.business_sector_id=e.business_sector_id||null,this.user_id=e.user_id||null,this.created_at=e.created_at?M(e.created_at):null,this.updated_at=e.updated_at?M(e.updated_at):null)}set_attributes(e=null){null!=e&&(this.id=e.id,this.contact=e.contact,this.company=e.company,this.cif=e.cif,this.company_email=e.company_email,this.phone=e.phone,this.web_page=e.web_page,this.address=e.address,this.business_sector_id=e.business_sector_id,this.user_id=e.user_id,this.created_at=M(e.created_at),this.updated_at=M(e.updated_at))}get_id(){return this.id}class_name(){return"Dealers"}};a(G,"validations",z),a(G,"feedbacks",{create:{contact:{isUnique:"This contact has been taken"},id:{isUnique:"This id has been taken"}},update:{contact:{isUnique:"This contact has been taken"},id:{isUnique:"This id has been taken"}}}),a(G,"columns",T),a(G,"visible_columns",G.show_columns(["*"],!0));let N=G;const O={class:"r-container-form"},P={class:"mt-10 sm:mt-0"},W={class:"shadow overflow-hidden sm:rounded-md"},X={class:"px-4 py-5 bg-white dark:bg-slate-800 sm:p-6"},Y={class:"grid grid-cols-4 gap-4"},Z={class:"grid-input"},$={class:"grid-input"},H={class:"grid-input"},J={class:"grid-input"},Q={class:"grid-input"},ee={class:"grid-input"},ae={class:"col-span-4"},te={class:"grid-input"},se={class:"grid-input"},ie={class:"px-4 py-3 bg-gray-50 dark:bg-slate-700 dark:bg-opacity-70 text-right sm:px-6"},ne={class:"r-footer-form"},oe={class:"flex"},le={key:0,class:"flex-none items-center"},de=[f("label",{for:"andNew",class:"font-bold text-gray-700 dark:text-slate-200 !cursor-pointer"},[k("Insertar y nuevo "),f("span",{id:"andNew-description",class:"ml-1 text-muted"},"Se insertara un elemento y reiniciara el formuario")],-1)],re={class:"r-footer-button-form"},ce=t({__name:"DealersForm",props:s({modal:i.bool.def(!1),action:i.string.def("create"),loading_text:i.string.def(""),showLoading:i.bool.def(!0)},{modelValue:{},modelModifiers:{}}),emits:s(["closeModal","reload"],["update:modelValue"]),setup(e,{emit:a}){const t=n(),s=e,i=a,j="create"==s.action?"Crear":"Actualizar",C=o(e,"modelValue"),I=l(new N(C.value)),R=d(),K=d(!1),{loading:M,toggleEnabled:T,onResult:z,enabled:B,onError:G}=N.useStaticSave(I,{defaultEnabled:!1}),{loading:ce,result:ue}=D.useGetMany(),{loading:me,result:pe}=L.useGetMany(),_e=r((()=>ce.value||me.value)),he=()=>{s.modal?i("closeModal"):t.push({name:"dealers_list"})};async function ye(){var e;await(null==(e=R.value)?void 0:e.validate())&&T()}return G((e=>{c("error","Error en accion","Error en accion del elemento")})),z((e=>{var a;c("success","Accion  "+j,"Accion ejecutada correctamente"),K.value?(null==(a=R.value)||a.clear(),B.value=!1,Object.assign(I,new N(C.value)),s.modal&&i("reload")):s.modal?i("closeModal",!0):t.push({name:"dealers_list"})})),(a,t)=>{const i=q;return u(),m(V,null,[e.showLoading?(u(),p(g,{key:0,"h-full":!0,class:"",loading:y(_e),description:s.loading_text},{default:_((()=>[h(a.$slots,"loading_icon")])),_:3},8,["loading","description"])):b("",!0),f("div",O,[f("div",P,[f("div",W,[v(U,{ref_key:"dealersForm",ref:R,state:y(I),validations:y(N).validations[e.action],feedbacks:y(N).feedbacks[e.action],loading:!0},{default:_((()=>{var a,s;return[f("div",X,[f("div",Y,[f("div",Z,[v(y(E),{type:"text",requiredMark:!0,modelValue:y(I).contact,"onUpdate:modelValue":t[0]||(t[0]=e=>y(I).contact=e),path:"contact",label:"Contact",onKeyup:x(ye,["enter"])},null,8,["modelValue"])]),f("div",$,[v(y(E),{type:"text",modelValue:y(I).company,"onUpdate:modelValue":t[1]||(t[1]=e=>y(I).company=e),path:"company",label:"Company",onKeyup:x(ye,["enter"])},null,8,["modelValue"])]),f("div",H,[v(y(E),{type:"text",modelValue:y(I).cif,"onUpdate:modelValue":t[2]||(t[2]=e=>y(I).cif=e),path:"cif",label:"Cif",onKeyup:x(ye,["enter"])},null,8,["modelValue"])]),f("div",J,[v(y(E),{type:"email",modelValue:y(I).company_email,"onUpdate:modelValue":t[3]||(t[3]=e=>y(I).company_email=e),path:"company_email",label:"Company_email",onKeyup:x(ye,["enter"])},null,8,["modelValue"])]),f("div",Q,[v(y(E),{type:"text",modelValue:y(I).phone,"onUpdate:modelValue":t[4]||(t[4]=e=>y(I).phone=e),path:"phone",label:"Phone",onKeyup:x(ye,["enter"])},null,8,["modelValue"])]),f("div",ee,[v(y(E),{type:"text",modelValue:y(I).web_page,"onUpdate:modelValue":t[5]||(t[5]=e=>y(I).web_page=e),path:"web_page",label:"Web_page",onKeyup:x(ye,["enter"])},null,8,["modelValue"])]),f("div",ae,[v(F,{modelValue:y(I).address,"onUpdate:modelValue":t[6]||(t[6]=e=>y(I).address=e),path:"address",label:"Address"},null,8,["modelValue"])]),f("div",te,[v(A,{modelValue:y(I).business_sector_id,"onUpdate:modelValue":t[7]||(t[7]=e=>y(I).business_sector_id=e),"id-key":"id","required-mark":!0,ref:"selectId","loading-data":y(me),loading:y(me),"text-key":"name",allowClear:!0,showFilter:"",items:null==(a=y(pe))?void 0:a.data,path:"business_sector_id",label:"Sectores de negocios",onKeyup:x(ye,["enter"])},null,8,["modelValue","loading-data","loading","items"])]),f("div",se,[v(A,{modelValue:y(I).user_id,"onUpdate:modelValue":t[8]||(t[8]=e=>y(I).user_id=e),"id-key":"id","required-mark":!0,ref:"selectId","loading-data":y(ce),loading:y(ce),"text-key":"name",allowClear:!0,showFilter:"",items:null==(s=y(ue))?void 0:s.data,path:"user_id",label:"Usuarios",onKeyup:x(ye,["enter"])},null,8,["modelValue","loading-data","loading","items"])])])]),f("div",ie,[f("div",ne,[f("div",oe,["create"===e.action?(u(),m("div",le,[v(i,{checked:K.value,"onUpdate:checked":t[9]||(t[9]=e=>K.value=e),"aria-describedby":"offers-description",id:"andNew"},null,8,["checked"])])):b("",!0),"create"===e.action?(u(),m("div",{key:1,onClick:t[10]||(t[10]=e=>K.value.value!=K.value.value),class:"flex text-sm absolute mx-[2rem] my-[4px]"},de)):b("",!0)]),f("div",re,[v(S,{class:"ml-5",shadow:"",color:"primary",loading:y(M),onClick:ye},{default:_((()=>[k(w(y(j))+" Dealers ",1)])),_:1},8,["loading"]),v(S,{class:"ml-5",shadow:"",color:"primary",onClick:he},{default:_((()=>[k(" Cancelar ")])),_:1})])])])]})),_:1},8,["state","validations","feedbacks"])])])])],64)}}});export{N as D,ce as _};
