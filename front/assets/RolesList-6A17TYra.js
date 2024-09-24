import{R as e}from"./roles.model-CLThzeQD.js";import{_ as l,a as s,b as o,c as t}from"./ConfirmModal.vue_vue_type_script_setup_true_lang-CMNdRJV8.js";import{d as a,r as i,a as n,Q as r,k as d,S as c,n as u,z as m,c as p,v,x as _,y as f,E as x,G as h,T as j,L as g,R as y,U as w,V as C,W as R,H as b}from"./index-D0wN_fuZ.js";import{_ as E}from"./RolesForm.vue_vue_type_script_setup_true_lang-CSGUIHx6.js";import{M as k}from"./index-BZUQu6cJ.js";import{_ as M,B as S}from"./index-DK-IiT8x.js";import{I as A}from"./index-_uS1yxUQ.js";import{_ as B,M as D}from"./index-BQa5vSjM.js";import{_ as V,a as L}from"./dropdown-DdxiuV_U.js";import"./RestBase-6hwWqa7t.js";import"./createContext-Cl9SgfpP.js";import"./FormItemContext-CfbnWjAK.js";import"./index-CFoXpmaN.js";import"./index-brT4NzTB.js";import"./debounceValidator-Cl5zTG4a.js";import"./colors-Bmc914HC.js";import"./supportsPassive-pertglWR.js";import"./index-C2qDfXmS.js";import"./useMergedState-BcJwUeRJ.js";import"./KeyCode-BFt-2P2l.js";import"./styleChecker-CGBUfLOL.js";import"./index-BstQ-YzR.js";import"./index-DtiMcqIf.js";import"./debounce-Cg7NfA5c.js";import"./collapseMotion-BM3-mHdV.js";import"./LeftOutlined-BPCL5cU7.js";import"./isMobile-VPrdNIIw.js";import"./useMemo-CnyBa7eu.js";import"./DownOutlined-DYgTl6g-.js";import"./index-ChnaMK_j.js";import"./index-D-OtIBMI.js";import"./RForm.vue_vue_type_script_setup_true_lang-HqTuq9xx.js";import"./index-BtQlog3F.js";import"./RButton.vue_vue_type_style_index_0_lang-DWca47Ax.js";import"./RSelect.vue_vue_type_script_setup_true_lang-C-HhWqQ_.js";import"./ClearButton-D4yBJSZU.js";import"./useValidation-Dimmn3XB.js";import"./usePopupContainer-BObfUw_y.js";import"./REditor.vue_vue_type_style_index_0_lang-B9q55COs.js";import"./EyeOutlined-DOQragHS.js";import"./shallowequal-UQLE3OsX.js";const O=_("div",{class:"r-close-icon hoverable-close"},null,-1),F={class:"flex"},I=_("div",{class:"r-loading-default"},null,-1),q={class:"r-breadcumbs"},z=_("div",{class:"flex justify-center items-center"},[_("div",{class:"i-heroicons:home w-1em h-1em mr-1"}),_("p",null,"Inicio")],-1),K=_("div",null,[_("h1",{class:"mt-5"},"Roles")],-1),P={class:"r-container-list"},U={class:"relative card w-full float-right"},G={class:""},T={class:"components-input-demo-presuffix mt-3 flex"},X=_("span",{class:"i-heroicons:trash-16-solid text-md mr-1 mb-1"},null,-1),H=_("span",{class:"i-heroicons:plus-16-solid text-lg mr-1 mb-1"},null,-1),N={class:"w-50% mr-20"},Q={class:"float-right align-middle"},W={class:"justify-start w-20%"},Y=_("div",{class:"i-mdi:search w-1em h-1em text-2xl"},null,-1),Z={class:"flex justify-end w-20%"},$=_("div",{class:"flex"},[_("div",{class:"i-mdi:export-variant w-1em h-1em text-xl mr-1"}),g(" Exportar ")],-1),J=_("span",{class:"flex"},[_("div",{class:"i-mdi:file-csv-outline w-1em h-1em text-gray-900 mr-2 text-xl"}),g(" CSV ")],-1),ee=_("span",{class:"flex"},[_("div",{class:"i-mdi:microsoft-excel w-1em h-1em text-green-700 mr-2 text-xl"}),g(" EXCEL ")],-1),le=_("span",{class:"flex"},[_("div",{class:"i-mdi:file-pdf-box w-1em h-1em text-red-500 mr-2 text-xl"}),g(" PDF ")],-1),se={class:"flex justify-center align-center"},oe={class:"text-xl flex justify-center align-center"},te=["onClick"],ae=_("div",{class:"i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer mt-1"},null,-1),ie=_("div",{class:"i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer"},null,-1),ne=a({__name:"RolesList",setup(a){const ne=i(),re=i([]),de=i(null),ce=i(null),ue=e.visible_columns,me=n((()=>re.value.filter((e=>r(e,ne.value,ue))))),{loading:pe,result:ve,onError:_e,onResult:fe,refetch:xe}=e.useGetMany({relations:"all"}),he=d([]),{onError:je,onResult:ge,toggleEnabled:ye,loading:we,enabled:Ce}=e.useDeleteById(he,{defaultEnabled:!1});fe((e=>{re.value=e.data.data})),_e((e=>{c("error","Error de peticion","Error de peticion del elemento")}));const Re=i(!1),be=(e=!1)=>{Re.value=!Re.value,e&&(k.destroyAll(),xe())},Ee=()=>{ce.value=null,be()},ke=(e=!1)=>{ce.value=null,be(e)};ge((()=>{var e;xe(),null==(e=null==de?void 0:de.value)||e.clearSelection(),c("success","Acción Exitosa","Se han eliminado los elementos correctamente"),Ce.value=!1,k.destroyAll()}));const Me=()=>{k.confirm({title:p(o,{text:"¿Desea eliminar el/los elementos seleccionados?",iconClass:"i-heroicons:trash w-1em h-1em text-4xl color-red-500",textClass:"ml-5 text-xl",loading:we,onOk:()=>{var e;Object.assign(he,null==(e=null==de?void 0:de.value)?void 0:e.selectedRowKeys),ye()}}),icon:null,footer:null})},Se=()=>{C("RolesList",ue,me.value)},Ae=()=>{R("RolesList",ue,me.value)};return(o,a)=>{var i,n;const r=k,d=b("router-link"),C=M,R=S,re=A,ve=B,_e=D,fe=V,he=L,je=t;return u(),m(w,null,[p(r,{open:x(Re),"onUpdate:open":a[1]||(a[1]=e=>j(Re)?Re.value=e:null),footer:null,"destroy-on-close":!0,onCancel:a[2]||(a[2]=e=>ce.value=null),"wrap-class-name":"modal-form",width:"55%"},{closeIcon:v((()=>[O])),title:v((()=>[_("div",F,[_("div",{class:f([x(ce)?"i-heroicons:pencil-square":"i-heroicons:plus-20-solid","w-1em h-1em p-3.5 mr-2"])},null,2),_("h1",null,h(x(ce)?"Actualizar Roles":"Crear Roles"),1)])])),default:v((()=>[p(E,{modal:!0,modelValue:x(ce),"onUpdate:modelValue":a[0]||(a[0]=e=>j(ce)?ce.value=e:null),action:x(ce)?"update":"create",onCloseModal:ke,onReload:x(xe),"show-loading":!0},{loading_icon:v((()=>[I])),_:1},8,["modelValue","action","onReload"])])),_:1},8,["open"]),_("div",q,[p(R,{class:"h-full"},{default:v((()=>[p(C,null,{default:v((()=>[p(d,{to:{name:"index"}},{default:v((()=>[z])),_:1})])),_:1}),p(C,null,{default:v((()=>[g("Security")])),_:1}),p(C,null,{default:v((()=>[g("Roles")])),_:1})])),_:1}),K]),_("div",P,[_("div",U,[_("div",G,[_("div",T,[p(x(y),{shadow:"",ref:"btnDelete",class:"btn-delete",disabled:0===(null==(i=x(de))?void 0:i.selectedRowKeys.length),onClick:Me},{default:v((()=>[X,g(" Eliminar ")])),_:1},8,["disabled"]),p(x(y),{class:"mr-3",shadow:"",onClick:Ee},{default:v((()=>[H,g(" Crear Roles ")])),_:1}),_("div",N,[_("span",Q,"Elementos seleccionados "+h(null==(n=x(de))?void 0:n.selectedRowKeys.length)+"/"+h(x(me).length),1)]),_("div",W,[p(re,{value:x(ne),"onUpdate:value":a[3]||(a[3]=e=>j(ne)?ne.value=e:null),class:"col-1",placeholder:"Buscar elemento","allow-clear":!0},{prefix:v((()=>[Y])),_:1},8,["value"])]),_("div",Z,[p(fe,{class:"flex"},{overlay:v((()=>[p(_e,null,{default:v((()=>[p(ve,{key:"1",onClick:Se},{default:v((()=>[J])),_:1}),p(ve,{key:"2",onClick:Ae},{default:v((()=>[ee])),_:1}),p(ve,{key:"3"},{default:v((()=>[le])),_:1})])),_:1})])),default:v((()=>[$])),_:1})])])]),p(s,{ref_key:"rolesTbl",ref:de,columns:x(ue),data:x(me),loading_icon:x(pe),has_selection:!0,on_select:e=>{},onChangePagination:a[4]||(a[4]=e=>{x(xe)()}),id_element:"id",class:"mt-5"},{loading_icon:v((()=>[p(l)])),_action:v((({_:l,record:s})=>[_("div",se,[_("div",oe,[p(he,null,{title:v((()=>[g("Actualizar elemento")])),default:v((()=>[_("div",{class:"i-heroicons:pencil-square w-1em h-1em text-blue-600 cursor-pointer",onClick:e=>(e=>{ce.value=e,be()})(s)},null,8,te)])),_:2},1024),p(je,{title:"Desea eliminar este elemento?","ok-text":"Si","cancel-text":"No",onConfirm:l=>(l=>{pe.value=!0;const{onResult:s,onError:o}=e.useDelete(l.id);s((()=>{c("success","Acción Exitosa","Se ha eliminado el elmento correctamente"),pe.value=!1,xe()})),o((()=>{c("error","Acción Fallida","Ocurrio un error en la eliminación del elemento, puede estar asociado a otros elementos"),pe.value=!1}))})(s)},{icon:v((()=>[ae])),default:v((()=>[p(he,null,{title:v((()=>[g("Eliminar elemento")])),default:v((()=>[ie])),_:1})])),_:2},1032,["onConfirm"])])])])),_:1},8,["columns","data","loading_icon"])])])],64)}}});export{ne as default};