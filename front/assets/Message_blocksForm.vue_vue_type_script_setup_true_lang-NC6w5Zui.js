var e=Object.defineProperty,a=(a,t,s)=>((a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s)(a,"symbol"!=typeof t?t+"":t,s);import{d as t,X as s,h as l,j as i,Y as o,k as n,r,S as d,o as c,n as m,z as u,q as _,v as g,O as p,Z as b,A as f,x as v,c as k,E as h,M as x,L as y,G as w,U as j}from"./index-D0wN_fuZ.js";import{_ as U}from"./RForm.vue_vue_type_script_setup_true_lang-HqTuq9xx.js";import{R as q,C as V}from"./RestBase-6hwWqa7t.js";import{r as R,m as M,R as C}from"./index-CFoXpmaN.js";import{d as I}from"./debounceValidator-Cl5zTG4a.js";import{d as A}from"./index-brT4NzTB.js";import{_ as E}from"./RButton.vue_vue_type_style_index_0_lang-DWca47Ax.js";import{_ as L}from"./REditor.vue_vue_type_style_index_0_lang-B9q55COs.js";import{a as T}from"./index-DEby8QZG.js";const F={create:{name:{required:R,isUnique:I((function(e,a){const{id:t,name:s}={...a.state},l=t?"update":"create";return!s||B.validate({name:s,id:t,_scenario:l,_specific:!0})}),void 0,500)},color:{required:R},message_text:{maxLength:M(65535)},block_image:{}},update:{name:{required:R,isUnique:I((function(e,a){const{id:t,name:s}={...a.state},l=t?"update":"create";return!s||B.validate({name:s,id:t,_scenario:l,_specific:!0})}),void 0,500)},color:{required:R},message_text:{maxLength:M(65535)},block_image:{}}},S=await q("message_blocks","settings/message_blocks"),N=class extends S{constructor(e=null){super(),a(this,"id"),a(this,"name"),a(this,"color"),a(this,"message_text"),a(this,"block_image"),a(this,"created_at"),a(this,"updated_at"),null!=e&&(this.id=e.id||void 0,this.name=e.name||null,this.color=e.color||null,this.message_text=e.message_text||null,this.block_image=e.block_image||null,this.created_at=e.created_at?A(e.created_at):null,this.updated_at=e.updated_at?A(e.updated_at):null)}set_blocks(e=null){null!=e&&(this.id=e.id,this.name=e.name,this.color=e.color,this.message_text=e.message_text,this.block_image=e.block_image,this.created_at=A(e.created_at),this.updated_at=A(e.updated_at))}get_id(){return this.id}class_name(){return"Message_blocks"}};a(N,"validations",F),a(N,"feedbacks",{create:{name:{isUnique:"This name has been taken"},id:{isUnique:"This id has been taken"}},update:{name:{isUnique:"This name has been taken"},id:{isUnique:"This id has been taken"}}}),a(N,"columns",[{title:"Name",dataIndex:"name",align:"center",key:"name",sorter:(e,a)=>+(e.name>a.name)-+(e.name<a.name)},{title:"Color",dataIndex:"color",align:"center",key:"color",sorter:(e,a)=>+(e.name>a.name)-+(e.name<a.name)},{title:"Mensaje de Texto",dataIndex:"message_text",align:"center",key:"message_text",sorter:(e,a)=>+(e.message_text>a.message_text)-+(e.message_text<a.message_text)},{title:"Image",dataIndex:"block_image",align:"center",key:"block_image",sorter:(e,a)=>+(e.block_image>a.block_image)-+(e.block_image<a.block_image)},{title:"Acciones",key:"_action",fixed:"right",width:"5%",scopedSlots:{customRender:"_action"}}]),a(N,"visible_columns",N.show_columns(["name","color","block_image","_action"],!0));let B=N;const D={class:"r-container-form"},O={class:"mt-10 sm:mt-0"},z={class:"shadow overflow-hidden sm:rounded-md"},K={class:"px-4 py-5 bg-white dark:bg-slate-800 sm:p-6"},G={class:"grid grid-cols-4 gap-4"},H={class:"grid-input"},P={class:"grid-input"},X={class:"col-span-4"},Y={class:"col-span-4"},Z={class:"grid grid-col-1"},$=["src"],J={key:1,class:"flex items-center justify-center"},Q=[v("div",{class:"i-heroicons:plus-circle insert-field-icon mr-2"},null,-1),v("div",{class:"ant-upload-text"},"Subir Imagen",-1)],W={class:"px-4 py-3 bg-gray-50 dark:bg-slate-700 dark:bg-opacity-70 text-right sm:px-6"},ee={class:"r-footer-form"},ae={class:"flex"},te={key:0,class:"flex-none items-center"},se=[v("label",{for:"andNew",class:"font-bold text-gray-700 dark:text-slate-200 !cursor-pointer"},[y("Insertar y nuevo "),v("span",{id:"andNew-description",class:"ml-1 text-muted"},"Se insertara un elemento y reiniciara el formuario")],-1)],le={class:"r-footer-button-form"},ie=t({__name:"Message_blocksForm",props:s({modal:l.bool.def(!1),action:l.string.def("create"),loading_text:l.string.def(""),showLoading:l.bool.def(!0)},{modelValue:{},modelModifiers:{}}),emits:s(["closeModal","reload"],["update:modelValue"]),setup(e,{emit:a}){const t=i(),s=e,l=a,q="create"==s.action?"Crear":"Actualizar",R=o(e,"modelValue"),M=n(new B(R.value)),I=r(),A=r(!1),{loading:F,toggleEnabled:S,onResult:N,enabled:ie,onError:oe}=B.useStaticSave(M,{defaultEnabled:!1}),ne=r(!1),re=()=>{s.modal?l("closeModal"):t.push({name:"message_blocks_list"})},de=e=>!1;oe((e=>{d("error","Error en accion","Error en accion del elemento")})),N((e=>{var a;d("success","Accion  "+q,"Accion ejecutada correctamente"),A.value?(null==(a=I.value)||a.clear(),ie.value=!1,Object.assign(M,new B(R.value)),s.modal&&l("reload")):s.modal?l("closeModal",!0):t.push({name:"message_blocks_list"})}));const ce=e=>{let a=new FileReader;a.onload=function(e){document.getElementById("avatar").setAttribute("src",e.target.result)},"update"===s.action&&(a.readAsDataURL(e.file),M.block_image=e.file,M.isFormData=!0),"create"===s.action&&(a.readAsDataURL(e.file),M.block_image=e.file,M.isFormData=!0)};async function me(){var e;await(null==(e=I.value)?void 0:e.validate())&&S()}return r("mysite"),r("Http://"),r(".com"),r([]),r([]),c((()=>{})),(a,t)=>{const l=T,i=V;return m(),u(j,null,[e.showLoading?(m(),_(b,{key:0,"h-full":!0,class:"",loading:ne.value,description:s.loading_text},{default:g((()=>[p(a.$slots,"loading_icon")])),_:3},8,["loading","description"])):f("",!0),v("div",D,[v("div",O,[v("div",z,[k(U,{ref_key:"blocksForm",ref:I,state:h(M),validations:h(B).validations[e.action],feedbacks:h(B).feedbacks[e.action],loading:!0},{default:g((()=>[v("div",K,[v("div",G,[v("div",H,[k(h(C),{type:"text",requiredMark:!0,modelValue:h(M).name,"onUpdate:modelValue":t[0]||(t[0]=e=>h(M).name=e),path:"name",label:"Name",onKeyup:x(me,["enter"])},null,8,["modelValue"])]),v("div",P,[k(h(C),{type:"text",requiredMark:!0,modelValue:h(M).color,"onUpdate:modelValue":t[1]||(t[1]=e=>h(M).color=e),path:"color",label:"Color fuente",onKeyup:x(me,["enter"])},null,8,["modelValue"])]),v("div",X,[k(L,{modelValue:h(M).message_text,"onUpdate:modelValue":t[2]||(t[2]=e=>h(M).message_text=e),path:"message_text",label:"Texto de mensaje"},null,8,["modelValue"])]),v("div",Y,[v("div",Z,[k(l,{name:"image",listType:"picture-card",style:{display:"inline-table"},showUploadList:!1,beforeUpload:de,onChange:ce},{default:g((()=>[h(M).block_image?(m(),u("img",{key:0,id:"avatar",class:"h-full w-full",src:h(M).block_image,alt:"Image"},null,8,$)):(m(),u("div",J,Q))])),_:1})])])])]),v("div",W,[v("div",ee,[v("div",ae,["create"===e.action?(m(),u("div",te,[k(i,{checked:A.value,"onUpdate:checked":t[3]||(t[3]=e=>A.value=e),"aria-describedby":"offers-description",id:"andNew"},null,8,["checked"])])):f("",!0),"create"===e.action?(m(),u("div",{key:1,onClick:t[4]||(t[4]=e=>A.value.value!=A.value.value),class:"flex text-sm absolute mx-[2rem] my-[4px]"},se)):f("",!0)]),v("div",le,[k(E,{class:"ml-5",shadow:"",color:"primary",loading:h(F),onClick:me},{default:g((()=>[y(w(h(q))+" Bloques de mensajes ",1)])),_:1},8,["loading"]),k(E,{class:"ml-5",shadow:"",color:"primary",onClick:re},{default:g((()=>[y(" Cancelar ")])),_:1})])])])])),_:1},8,["state","validations","feedbacks"])])])])],64)}}});export{B as M,ie as _};