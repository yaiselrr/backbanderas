import{R as e}from"./request_statuses.model-DtSxHQNi.js";import{_ as l,a as s,b as t,c as a}from"./ConfirmModal.vue_vue_type_script_setup_true_lang-CMNdRJV8.js";import{d as o,r as i,a as n,Q as r,k as d,S as u,n as c,z as m,c as p,v,x as _,y as x,E as f,G as h,T as j,L as g,R as y,U as w,V as C,W as b,H as R}from"./index-D0wN_fuZ.js";import{_ as E}from"./Request_statusesForm.vue_vue_type_script_setup_true_lang-otjspo6S.js";import{M as k}from"./index-BZUQu6cJ.js";import{_ as M,B as q}from"./index-DK-IiT8x.js";import{I as L}from"./index-_uS1yxUQ.js";import{_ as A,M as D}from"./index-BQa5vSjM.js";import{_ as S,a as V}from"./dropdown-DdxiuV_U.js";import"./RestBase-6hwWqa7t.js";import"./createContext-Cl9SgfpP.js";import"./FormItemContext-CfbnWjAK.js";import"./index-CFoXpmaN.js";import"./index-brT4NzTB.js";import"./debounceValidator-Cl5zTG4a.js";import"./colors-Bmc914HC.js";import"./supportsPassive-pertglWR.js";import"./index-C2qDfXmS.js";import"./useMergedState-BcJwUeRJ.js";import"./KeyCode-BFt-2P2l.js";import"./styleChecker-CGBUfLOL.js";import"./index-BstQ-YzR.js";import"./index-DtiMcqIf.js";import"./debounce-Cg7NfA5c.js";import"./collapseMotion-BM3-mHdV.js";import"./LeftOutlined-BPCL5cU7.js";import"./isMobile-VPrdNIIw.js";import"./useMemo-CnyBa7eu.js";import"./DownOutlined-DYgTl6g-.js";import"./index-ChnaMK_j.js";import"./index-D-OtIBMI.js";import"./RForm.vue_vue_type_script_setup_true_lang-HqTuq9xx.js";import"./index-BtQlog3F.js";import"./RButton.vue_vue_type_style_index_0_lang-DWca47Ax.js";import"./REditor.vue_vue_type_style_index_0_lang-B9q55COs.js";import"./useValidation-Dimmn3XB.js";import"./EyeOutlined-DOQragHS.js";import"./shallowequal-UQLE3OsX.js";const I=_("div",{class:"r-close-icon hoverable-close"},null,-1),O={class:"flex"},B=_("div",{class:"r-loading-default"},null,-1),F={class:"r-breadcumbs"},K=_("div",{class:"flex justify-center items-center"},[_("div",{class:"i-heroicons:home w-1em h-1em mr-1"}),_("p",null,"Inicio")],-1),T=_("div",null,[_("h1",{class:"mt-5"},"Estados de solicitud")],-1),U={class:"r-container-list"},z={class:"relative card w-full float-right"},H={class:""},P={class:"components-input-demo-presuffix mt-3 flex"},G=_("span",{class:"i-heroicons:trash-16-solid text-md mr-1 mb-1"},null,-1),X=_("span",{class:"i-heroicons:plus-16-solid text-lg mr-1 mb-1"},null,-1),N={class:"w-50% mr-20"},Q={class:"float-right align-middle"},W={class:"justify-start w-20%"},Y=_("div",{class:"i-mdi:search w-1em h-1em text-2xl"},null,-1),Z={class:"flex justify-end w-20%"},$=_("div",{class:"flex"},[_("div",{class:"i-mdi:export-variant w-1em h-1em text-xl mr-1"}),g(" Exportar ")],-1),J=_("span",{class:"flex"},[_("div",{class:"i-mdi:file-csv-outline w-1em h-1em text-gray-900 mr-2 text-xl"}),g(" CSV ")],-1),ee=_("span",{class:"flex"},[_("div",{class:"i-mdi:microsoft-excel w-1em h-1em text-green-700 mr-2 text-xl"}),g(" EXCEL ")],-1),le=_("span",{class:"flex"},[_("div",{class:"i-mdi:file-pdf-box w-1em h-1em text-red-500 mr-2 text-xl"}),g(" PDF ")],-1),se=["innerHTML"],te={class:"flex justify-center align-center"},ae={class:"text-xl flex justify-center align-center"},oe=["onClick"],ie=_("div",{class:"i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer mt-1"},null,-1),ne=_("div",{class:"i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer"},null,-1),re=o({__name:"Request_statusesList",setup(o){const re=i(),de=i([]),ue=i(null),ce=i(null),me=e.visible_columns,pe=n((()=>de.value.filter((e=>r(e,re.value,me))))),{loading:ve,result:_e,onError:xe,onResult:fe,refetch:he}=e.useGetMany({relations:"all"}),je=d([]),{onError:ge,onResult:ye,toggleEnabled:we,loading:Ce,enabled:be}=e.useDeleteById(je,{defaultEnabled:!1});fe((e=>{de.value=e.data.data})),xe((e=>{u("error","Error de peticion","Error de peticion del elemento")}));const Re=i(!1),Ee=(e=!1)=>{Re.value=!Re.value,e&&(k.destroyAll(),he())},ke=()=>{ce.value=null,Ee()},Me=(e=!1)=>{ce.value=null,Ee(e)};ye((()=>{var e;he(),null==(e=null==ue?void 0:ue.value)||e.clearSelection(),u("success","Acción Exitosa","Se han eliminado los elementos correctamente"),be.value=!1,k.destroyAll()}));const qe=()=>{k.confirm({title:p(t,{text:"¿Desea eliminar el/los elementos seleccionados?",iconClass:"i-heroicons:trash w-1em h-1em text-4xl color-red-500",textClass:"ml-5 text-xl",loading:Ce,onOk:()=>{var e;Object.assign(je,null==(e=null==ue?void 0:ue.value)?void 0:e.selectedRowKeys),we()}}),icon:null,footer:null})},Le=()=>{C("Request_statusesList",me,pe.value)},Ae=()=>{b("Request_statusesList",me,pe.value)};return(t,o)=>{var i,n;const r=k,d=R("router-link"),C=M,b=q,de=L,_e=A,xe=D,fe=S,je=V,ge=a;return c(),m(w,null,[p(r,{open:f(Re),"onUpdate:open":o[1]||(o[1]=e=>j(Re)?Re.value=e:null),footer:null,"destroy-on-close":!0,onCancel:o[2]||(o[2]=e=>ce.value=null),"wrap-class-name":"modal-form",width:"55%"},{closeIcon:v((()=>[I])),title:v((()=>[_("div",O,[_("div",{class:x([f(ce)?"i-heroicons:pencil-square":"i-heroicons:plus-20-solid","w-1em h-1em p-3.5 mr-2"])},null,2),_("h1",null,h(f(ce)?"Actualizar estado de solicitud":"Crear estado de solicitud"),1)])])),default:v((()=>[p(E,{modal:!0,modelValue:f(ce),"onUpdate:modelValue":o[0]||(o[0]=e=>j(ce)?ce.value=e:null),action:f(ce)?"update":"create",onCloseModal:Me,onReload:f(he),"show-loading":!0},{loading_icon:v((()=>[B])),_:1},8,["modelValue","action","onReload"])])),_:1},8,["open"]),_("div",F,[p(b,{class:"h-full"},{default:v((()=>[p(C,null,{default:v((()=>[p(d,{to:{name:"index"}},{default:v((()=>[K])),_:1})])),_:1}),p(C,null,{default:v((()=>[g("Masters")])),_:1}),p(C,null,{default:v((()=>[g("Request_statuses")])),_:1})])),_:1}),T]),_("div",U,[_("div",z,[_("div",H,[_("div",P,[p(f(y),{shadow:"",ref:"btnDelete",class:"btn-delete",disabled:0===(null==(i=f(ue))?void 0:i.selectedRowKeys.length),onClick:qe},{default:v((()=>[G,g(" Eliminar ")])),_:1},8,["disabled"]),p(f(y),{class:"mr-3",shadow:"",onClick:ke},{default:v((()=>[X,g(" Crear estado de solicitud ")])),_:1}),_("div",N,[_("span",Q,"Elementos seleccionados "+h(null==(n=f(ue))?void 0:n.selectedRowKeys.length)+"/"+h(f(pe).length),1)]),_("div",W,[p(de,{value:f(re),"onUpdate:value":o[3]||(o[3]=e=>j(re)?re.value=e:null),class:"col-1",placeholder:"Buscar elemento","allow-clear":!0},{prefix:v((()=>[Y])),_:1},8,["value"])]),_("div",Z,[p(fe,{class:"flex"},{overlay:v((()=>[p(xe,null,{default:v((()=>[p(_e,{key:"1",onClick:Le},{default:v((()=>[J])),_:1}),p(_e,{key:"2",onClick:Ae},{default:v((()=>[ee])),_:1}),p(_e,{key:"3"},{default:v((()=>[le])),_:1})])),_:1})])),default:v((()=>[$])),_:1})])])]),p(s,{ref_key:"request_statusesTbl",ref:ue,columns:f(me),data:f(pe),expanded:!0,loading_icon:f(ve),has_selection:!0,on_select:e=>{},onChangePagination:o[4]||(o[4]=e=>{f(he)()}),id_element:"id",class:"mt-5"},{loading_icon:v((()=>[p(l)])),expandedRowRender:v((({record:e})=>[_("div",{class:"ml-30",innerHTML:e.decription},null,8,se)])),_action:v((({_:l,record:s})=>[_("div",te,[_("div",ae,[p(je,null,{title:v((()=>[g("Actualizar elemento")])),default:v((()=>[_("div",{class:"i-heroicons:pencil-square w-1em h-1em text-blue-600 cursor-pointer",onClick:e=>(e=>{ce.value=e,Ee()})(s)},null,8,oe)])),_:2},1024),p(ge,{title:"Desea eliminar este elemento?","ok-text":"Si","cancel-text":"No",onConfirm:l=>(l=>{ve.value=!0;const{onResult:s,onError:t}=e.useDelete(l.id);s((()=>{u("success","Acción Exitosa","Se ha eliminado el elmento correctamente"),ve.value=!1,he()})),t((()=>{u("error","Acción Fallida","Ocurrio un error en la eliminación del elemento, puede estar asociado a otros elementos"),ve.value=!1}))})(s)},{icon:v((()=>[ie])),default:v((()=>[p(je,null,{title:v((()=>[g("Eliminar elemento")])),default:v((()=>[ne])),_:1})])),_:2},1032,["onConfirm"])])])])),_:1},8,["columns","data","loading_icon"])])])],64)}}});export{re as default};
