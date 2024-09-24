import{P as e,_ as l}from"./Products_attributeForm.vue_vue_type_script_setup_true_lang-VIjgJSHx.js";import{_ as t,a as s,b as o,c as a}from"./ConfirmModal.vue_vue_type_script_setup_true_lang-CMNdRJV8.js";import{d as i,r,a as n,Q as u,k as c,S as d,n as m,z as p,c as _,v,x as f,y as x,E as h,G as j,T as g,L as b,R as y,U as w,V as C,W as E,H as k}from"./index-D0wN_fuZ.js";import{M as P}from"./index-BZUQu6cJ.js";import{_ as R,B as M}from"./index-DK-IiT8x.js";import{I as A}from"./index-_uS1yxUQ.js";import{_ as S,M as V}from"./index-BQa5vSjM.js";import{_ as B,a as D}from"./dropdown-DdxiuV_U.js";import"./RForm.vue_vue_type_script_setup_true_lang-HqTuq9xx.js";import"./index-BtQlog3F.js";import"./RestBase-6hwWqa7t.js";import"./createContext-Cl9SgfpP.js";import"./FormItemContext-CfbnWjAK.js";import"./index-CFoXpmaN.js";import"./RButton.vue_vue_type_style_index_0_lang-DWca47Ax.js";import"./RSelect.vue_vue_type_script_setup_true_lang-C-HhWqQ_.js";import"./ClearButton-D4yBJSZU.js";import"./useValidation-Dimmn3XB.js";import"./index-brT4NzTB.js";import"./index-D-OtIBMI.js";import"./usePopupContainer-BObfUw_y.js";import"./products.model-Dn3jzT27.js";import"./debounceValidator-Cl5zTG4a.js";import"./colors-Bmc914HC.js";import"./supportsPassive-pertglWR.js";import"./index-C2qDfXmS.js";import"./useMergedState-BcJwUeRJ.js";import"./KeyCode-BFt-2P2l.js";import"./styleChecker-CGBUfLOL.js";import"./index-BstQ-YzR.js";import"./index-DtiMcqIf.js";import"./debounce-Cg7NfA5c.js";import"./collapseMotion-BM3-mHdV.js";import"./LeftOutlined-BPCL5cU7.js";import"./isMobile-VPrdNIIw.js";import"./useMemo-CnyBa7eu.js";import"./DownOutlined-DYgTl6g-.js";import"./index-ChnaMK_j.js";import"./EyeOutlined-DOQragHS.js";import"./shallowequal-UQLE3OsX.js";const L=f("div",{class:"r-close-icon hoverable-close"},null,-1),O={class:"flex"},F=f("div",{class:"r-loading-default"},null,-1),I={class:"r-breadcumbs"},q=f("div",{class:"flex justify-center items-center"},[f("div",{class:"i-heroicons:home w-1em h-1em mr-1"}),f("p",null,"Inicio")],-1),z=f("div",null,[f("h1",{class:"mt-5"},"Products_attribute")],-1),K={class:"r-container-list"},U={class:"relative card w-full float-right"},G={class:""},T={class:"components-input-demo-presuffix mt-3 flex"},X=f("span",{class:"i-heroicons:trash-16-solid text-md mr-1 mb-1"},null,-1),H=f("span",{class:"i-heroicons:plus-16-solid text-lg mr-1 mb-1"},null,-1),N={class:"w-50% mr-20"},Q={class:"float-right align-middle"},W={class:"justify-start w-20%"},Y=f("div",{class:"i-mdi:search w-1em h-1em text-2xl"},null,-1),Z={class:"flex justify-end w-20%"},$=f("div",{class:"flex"},[f("div",{class:"i-mdi:export-variant w-1em h-1em text-xl mr-1"}),b(" Exportar ")],-1),J=f("span",{class:"flex"},[f("div",{class:"i-mdi:file-csv-outline w-1em h-1em text-gray-900 mr-2 text-xl"}),b(" CSV ")],-1),ee=f("span",{class:"flex"},[f("div",{class:"i-mdi:microsoft-excel w-1em h-1em text-green-700 mr-2 text-xl"}),b(" EXCEL ")],-1),le=f("span",{class:"flex"},[f("div",{class:"i-mdi:file-pdf-box w-1em h-1em text-red-500 mr-2 text-xl"}),b(" PDF ")],-1),te={class:"flex justify-center align-center"},se={class:"text-xl flex justify-center align-center"},oe=["onClick"],ae=f("div",{class:"i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer mt-1"},null,-1),ie=f("div",{class:"i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer"},null,-1),re=i({__name:"Products_attributeList",setup(i){const re=r(),ne=r([]),ue=r(null),ce=r(null),de=e.visible_columns,me=n((()=>ne.value.filter((e=>u(e,re.value,de))))),{loading:pe,result:_e,onError:ve,onResult:fe,refetch:xe}=e.useGetMany({relations:"all"}),he=c([]),{onError:je,onResult:ge,toggleEnabled:be,loading:ye,enabled:we}=e.useDeleteById(he,{defaultEnabled:!1});fe((e=>{ne.value=e.data.data})),ve((e=>{d("error","Error de peticion","Error de peticion del elemento")}));const Ce=r(!1),Ee=(e=!1)=>{Ce.value=!Ce.value,e&&(P.destroyAll(),xe())},ke=()=>{ce.value=null,Ee()},Pe=(e=!1)=>{ce.value=null,Ee(e)};ge((()=>{var e;xe(),null==(e=null==ue?void 0:ue.value)||e.clearSelection(),d("success","Acción Exitosa","Se han eliminado los elementos correctamente"),we.value=!1,P.destroyAll()}));const Re=()=>{P.confirm({title:_(o,{text:"¿Desea eliminar el/los elementos seleccionados?",iconClass:"i-heroicons:trash w-1em h-1em text-4xl color-red-500",textClass:"ml-5 text-xl",loading:ye,onOk:()=>{var e;Object.assign(he,null==(e=null==ue?void 0:ue.value)?void 0:e.selectedRowKeys),be()}}),icon:null,footer:null})},Me=()=>{C("Products_attributeList",de,me.value)},Ae=()=>{E("Products_attributeList",de,me.value)};return(o,i)=>{var r,n;const u=P,c=k("router-link"),C=R,E=M,ne=A,_e=S,ve=V,fe=B,he=D,je=a;return m(),p(w,null,[_(u,{open:h(Ce),"onUpdate:open":i[1]||(i[1]=e=>g(Ce)?Ce.value=e:null),footer:null,"destroy-on-close":!0,onCancel:i[2]||(i[2]=e=>ce.value=null),"wrap-class-name":"modal-form",width:"55%"},{closeIcon:v((()=>[L])),title:v((()=>[f("div",O,[f("div",{class:x([h(ce)?"i-heroicons:pencil-square":"i-heroicons:plus-20-solid","w-1em h-1em p-3.5 mr-2"])},null,2),f("h1",null,j(h(ce)?"Actualizar Products_attribute":"Crear Products_attribute"),1)])])),default:v((()=>[_(l,{modal:!0,modelValue:h(ce),"onUpdate:modelValue":i[0]||(i[0]=e=>g(ce)?ce.value=e:null),action:h(ce)?"update":"create",onCloseModal:Pe,onReload:h(xe),"show-loading":!0},{loading_icon:v((()=>[F])),_:1},8,["modelValue","action","onReload"])])),_:1},8,["open"]),f("div",I,[_(E,{class:"h-full"},{default:v((()=>[_(C,null,{default:v((()=>[_(c,{to:{name:"index"}},{default:v((()=>[q])),_:1})])),_:1}),_(C,null,{default:v((()=>[b("Manage")])),_:1}),_(C,null,{default:v((()=>[b("Products_attribute")])),_:1})])),_:1}),z]),f("div",K,[f("div",U,[f("div",G,[f("div",T,[_(h(y),{shadow:"",ref:"btnDelete",class:"btn-delete",disabled:0===(null==(r=h(ue))?void 0:r.selectedRowKeys.length),onClick:Re},{default:v((()=>[X,b(" Eliminar ")])),_:1},8,["disabled"]),_(h(y),{class:"mr-3",shadow:"",onClick:ke},{default:v((()=>[H,b(" Crear Products_attribute ")])),_:1}),f("div",N,[f("span",Q,"Elementos seleccionados "+j(null==(n=h(ue))?void 0:n.selectedRowKeys.length)+"/"+j(h(me).length),1)]),f("div",W,[_(ne,{value:h(re),"onUpdate:value":i[3]||(i[3]=e=>g(re)?re.value=e:null),class:"col-1",placeholder:"Buscar elemento","allow-clear":!0},{prefix:v((()=>[Y])),_:1},8,["value"])]),f("div",Z,[_(fe,{class:"flex"},{overlay:v((()=>[_(ve,null,{default:v((()=>[_(_e,{key:"1",onClick:Me},{default:v((()=>[J])),_:1}),_(_e,{key:"2",onClick:Ae},{default:v((()=>[ee])),_:1}),_(_e,{key:"3"},{default:v((()=>[le])),_:1})])),_:1})])),default:v((()=>[$])),_:1})])])]),_(s,{ref_key:"products_attributeTbl",ref:ue,columns:h(de),data:h(me),loading_icon:h(pe),has_selection:!0,on_select:e=>{},onChangePagination:i[4]||(i[4]=e=>{h(xe)()}),id_element:"id",class:"mt-5"},{loading_icon:v((()=>[_(t)])),_action:v((({_:l,record:t})=>[f("div",te,[f("div",se,[_(he,null,{title:v((()=>[b("Actualizar elemento")])),default:v((()=>[f("div",{class:"i-heroicons:pencil-square w-1em h-1em text-blue-600 cursor-pointer",onClick:e=>(e=>{ce.value=e,Ee()})(t)},null,8,oe)])),_:2},1024),_(je,{title:"Desea eliminar este elemento?","ok-text":"Si","cancel-text":"No",onConfirm:l=>(l=>{pe.value=!0;const{onResult:t,onError:s}=e.useDelete(l.id);t((()=>{d("success","Acción Exitosa","Se ha eliminado el elmento correctamente"),pe.value=!1,xe()})),s((()=>{d("error","Acción Fallida","Ocurrio un error en la eliminación del elemento, puede estar asociado a otros elementos"),pe.value=!1}))})(t)},{icon:v((()=>[ae])),default:v((()=>[_(he,null,{title:v((()=>[b("Eliminar elemento")])),default:v((()=>[ie])),_:1})])),_:2},1032,["onConfirm"])])])])),_:1},8,["columns","data","loading_icon"])])])],64)}}});export{re as default};