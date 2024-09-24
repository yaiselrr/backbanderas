import{B as e}from"./business_sectors.model-DJ1xQQ_r.js";import{_ as s,a as l,b as t,c as o}from"./ConfirmModal.vue_vue_type_script_setup_true_lang-CMNdRJV8.js";import{d as a,r as i,a as n,Q as r,k as c,S as u,n as d,z as m,c as p,v as _,x as v,y as f,E as x,G as h,T as j,L as g,R as y,U as w,V as b,W as C,H as E}from"./index-D0wN_fuZ.js";import{_ as k}from"./Business_sectorsForm.vue_vue_type_script_setup_true_lang-O_4YCm54.js";import{M as B}from"./index-BZUQu6cJ.js";import{_ as R,B as M}from"./index-DK-IiT8x.js";import{I as A}from"./index-_uS1yxUQ.js";import{_ as D,M as S}from"./index-BQa5vSjM.js";import{_ as V,a as L}from"./dropdown-DdxiuV_U.js";import"./index-D-OtIBMI.js";import"./RestBase-6hwWqa7t.js";import"./createContext-Cl9SgfpP.js";import"./FormItemContext-CfbnWjAK.js";import"./index-CFoXpmaN.js";import"./index-brT4NzTB.js";import"./debounceValidator-Cl5zTG4a.js";import"./colors-Bmc914HC.js";import"./supportsPassive-pertglWR.js";import"./index-C2qDfXmS.js";import"./useMergedState-BcJwUeRJ.js";import"./KeyCode-BFt-2P2l.js";import"./styleChecker-CGBUfLOL.js";import"./index-BstQ-YzR.js";import"./index-DtiMcqIf.js";import"./debounce-Cg7NfA5c.js";import"./collapseMotion-BM3-mHdV.js";import"./LeftOutlined-BPCL5cU7.js";import"./isMobile-VPrdNIIw.js";import"./useMemo-CnyBa7eu.js";import"./DownOutlined-DYgTl6g-.js";import"./index-ChnaMK_j.js";import"./RForm.vue_vue_type_script_setup_true_lang-HqTuq9xx.js";import"./index-BtQlog3F.js";import"./RButton.vue_vue_type_style_index_0_lang-DWca47Ax.js";import"./REditor.vue_vue_type_style_index_0_lang-B9q55COs.js";import"./useValidation-Dimmn3XB.js";import"./EyeOutlined-DOQragHS.js";import"./shallowequal-UQLE3OsX.js";const O=v("div",{class:"r-close-icon hoverable-close"},null,-1),F={class:"flex"},I=v("div",{class:"r-loading-default"},null,-1),q={class:"r-breadcumbs"},K=v("div",{class:"flex justify-center items-center"},[v("div",{class:"i-heroicons:home w-1em h-1em mr-1"}),v("p",null,"Inicio")],-1),U=v("div",null,[v("h1",{class:"mt-5"},"Business_sectors")],-1),z={class:"r-container-list"},P={class:"relative card w-full float-right"},G={class:""},T={class:"components-input-demo-presuffix mt-3 flex"},X=v("span",{class:"i-heroicons:trash-16-solid text-md mr-1 mb-1"},null,-1),H=v("span",{class:"i-heroicons:plus-16-solid text-lg mr-1 mb-1"},null,-1),N={class:"w-50% mr-20"},Q={class:"float-right align-middle"},W={class:"justify-start w-20%"},Y=v("div",{class:"i-mdi:search w-1em h-1em text-2xl"},null,-1),Z={class:"flex justify-end w-20%"},$=v("div",{class:"flex"},[v("div",{class:"i-mdi:export-variant w-1em h-1em text-xl mr-1"}),g(" Exportar ")],-1),J=v("span",{class:"flex"},[v("div",{class:"i-mdi:file-csv-outline w-1em h-1em text-gray-900 mr-2 text-xl"}),g(" CSV ")],-1),ee=v("span",{class:"flex"},[v("div",{class:"i-mdi:microsoft-excel w-1em h-1em text-green-700 mr-2 text-xl"}),g(" EXCEL ")],-1),se=v("span",{class:"flex"},[v("div",{class:"i-mdi:file-pdf-box w-1em h-1em text-red-500 mr-2 text-xl"}),g(" PDF ")],-1),le={class:"flex justify-center align-center"},te={class:"text-xl flex justify-center align-center"},oe=["onClick"],ae=v("div",{class:"i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer mt-1"},null,-1),ie=v("div",{class:"i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer"},null,-1),ne=a({__name:"Business_sectorsList",setup(a){const ne=i(),re=i([]),ce=i(null),ue=i(null),de=e.visible_columns,me=n((()=>re.value.filter((e=>r(e,ne.value,de))))),{loading:pe,result:_e,onError:ve,onResult:fe,refetch:xe}=e.useGetMany({relations:"all"}),he=c([]),{onError:je,onResult:ge,toggleEnabled:ye,loading:we,enabled:be}=e.useDeleteById(he,{defaultEnabled:!1});fe((e=>{re.value=e.data.data})),ve((e=>{u("error","Error de peticion","Error de peticion del elemento")}));const Ce=i(!1),Ee=(e=!1)=>{Ce.value=!Ce.value,e&&(B.destroyAll(),xe())},ke=()=>{ue.value=null,Ee()},Be=(e=!1)=>{ue.value=null,Ee(e)};ge((()=>{var e;xe(),null==(e=null==ce?void 0:ce.value)||e.clearSelection(),u("success","Acción Exitosa","Se han eliminado los elementos correctamente"),be.value=!1,B.destroyAll()}));const Re=()=>{B.confirm({title:p(t,{text:"¿Desea eliminar el/los elementos seleccionados?",iconClass:"i-heroicons:trash w-1em h-1em text-4xl color-red-500",textClass:"ml-5 text-xl",loading:we,onOk:()=>{var e;Object.assign(he,null==(e=null==ce?void 0:ce.value)?void 0:e.selectedRowKeys),ye()}}),icon:null,footer:null})},Me=()=>{b("Business_sectorsList",de,me.value)},Ae=()=>{C("Business_sectorsList",de,me.value)};return(t,a)=>{var i,n;const r=B,c=E("router-link"),b=R,C=M,re=A,_e=D,ve=S,fe=V,he=L,je=o;return d(),m(w,null,[p(r,{open:x(Ce),"onUpdate:open":a[1]||(a[1]=e=>j(Ce)?Ce.value=e:null),footer:null,"destroy-on-close":!0,onCancel:a[2]||(a[2]=e=>ue.value=null),"wrap-class-name":"modal-form",width:"55%"},{closeIcon:_((()=>[O])),title:_((()=>[v("div",F,[v("div",{class:f([x(ue)?"i-heroicons:pencil-square":"i-heroicons:plus-20-solid","w-1em h-1em p-3.5 mr-2"])},null,2),v("h1",null,h(x(ue)?"Actualizar Business_sectors":"Crear Business_sectors"),1)])])),default:_((()=>[p(k,{modal:!0,modelValue:x(ue),"onUpdate:modelValue":a[0]||(a[0]=e=>j(ue)?ue.value=e:null),action:x(ue)?"update":"create",onCloseModal:Be,onReload:x(xe),"show-loading":!0},{loading_icon:_((()=>[I])),_:1},8,["modelValue","action","onReload"])])),_:1},8,["open"]),v("div",q,[p(C,{class:"h-full"},{default:_((()=>[p(b,null,{default:_((()=>[p(c,{to:{name:"index"}},{default:_((()=>[K])),_:1})])),_:1}),p(b,null,{default:_((()=>[g("Manage")])),_:1}),p(b,null,{default:_((()=>[g("Business_sectors")])),_:1})])),_:1}),U]),v("div",z,[v("div",P,[v("div",G,[v("div",T,[p(x(y),{shadow:"",ref:"btnDelete",class:"btn-delete",disabled:0===(null==(i=x(ce))?void 0:i.selectedRowKeys.length),onClick:Re},{default:_((()=>[X,g(" Eliminar ")])),_:1},8,["disabled"]),p(x(y),{class:"mr-3",shadow:"",onClick:ke},{default:_((()=>[H,g(" Crear Business_sectors ")])),_:1}),v("div",N,[v("span",Q,"Elementos seleccionados "+h(null==(n=x(ce))?void 0:n.selectedRowKeys.length)+"/"+h(x(me).length),1)]),v("div",W,[p(re,{value:x(ne),"onUpdate:value":a[3]||(a[3]=e=>j(ne)?ne.value=e:null),class:"col-1",placeholder:"Buscar elemento","allow-clear":!0},{prefix:_((()=>[Y])),_:1},8,["value"])]),v("div",Z,[p(fe,{class:"flex"},{overlay:_((()=>[p(ve,null,{default:_((()=>[p(_e,{key:"1",onClick:Me},{default:_((()=>[J])),_:1}),p(_e,{key:"2",onClick:Ae},{default:_((()=>[ee])),_:1}),p(_e,{key:"3"},{default:_((()=>[se])),_:1})])),_:1})])),default:_((()=>[$])),_:1})])])]),p(l,{ref_key:"business_sectorsTbl",ref:ce,columns:x(de),data:x(me),loading_icon:x(pe),has_selection:!0,on_select:e=>{},onChangePagination:a[4]||(a[4]=e=>{x(xe)()}),id_element:"id",class:"mt-5"},{loading_icon:_((()=>[p(s)])),_action:_((({_:s,record:l})=>[v("div",le,[v("div",te,[p(he,null,{title:_((()=>[g("Actualizar elemento")])),default:_((()=>[v("div",{class:"i-heroicons:pencil-square w-1em h-1em text-blue-600 cursor-pointer",onClick:e=>(e=>{ue.value=e,Ee()})(l)},null,8,oe)])),_:2},1024),p(je,{title:"Desea eliminar este elemento?","ok-text":"Si","cancel-text":"No",onConfirm:s=>(s=>{pe.value=!0;const{onResult:l,onError:t}=e.useDelete(s.id);l((()=>{u("success","Acción Exitosa","Se ha eliminado el elmento correctamente"),pe.value=!1,xe()})),t((()=>{u("error","Acción Fallida","Ocurrio un error en la eliminación del elemento, puede estar asociado a otros elementos"),pe.value=!1}))})(l)},{icon:_((()=>[ae])),default:_((()=>[p(he,null,{title:_((()=>[g("Eliminar elemento")])),default:_((()=>[ie])),_:1})])),_:2},1032,["onConfirm"])])])])),_:1},8,["columns","data","loading_icon"])])])],64)}}});export{ne as default};
