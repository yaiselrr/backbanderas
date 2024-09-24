import{W as e,_ as l}from"./Wp1u_postsForm.vue_vue_type_script_setup_true_lang-ri5AjYYW.js";import{_ as s,a as t,b as o,c as a}from"./ConfirmModal.vue_vue_type_script_setup_true_lang-CMNdRJV8.js";import{d as i,r as n,a as r,Q as u,k as d,S as c,n as m,z as p,c as _,v,x,y as f,E as h,G as j,T as g,L as y,R as w,U as C,V as b,W as E,H as k}from"./index-D0wN_fuZ.js";import{M as R}from"./index-BZUQu6cJ.js";import{_ as W,B as M}from"./index-DK-IiT8x.js";import{I as A}from"./index-_uS1yxUQ.js";import{_ as D,M as B}from"./index-BQa5vSjM.js";import{_ as S,a as L}from"./dropdown-DdxiuV_U.js";import"./RForm.vue_vue_type_script_setup_true_lang-HqTuq9xx.js";import"./index-BtQlog3F.js";import"./RestBase-6hwWqa7t.js";import"./createContext-Cl9SgfpP.js";import"./FormItemContext-CfbnWjAK.js";import"./index-CFoXpmaN.js";import"./index-brT4NzTB.js";import"./RButton.vue_vue_type_style_index_0_lang-DWca47Ax.js";import"./RDatePicker.vue_vue_type_style_index_0_lang-C7kumIjJ.js";import"./ClearButton-D4yBJSZU.js";import"./useValidation-Dimmn3XB.js";import"./index-C2qDfXmS.js";import"./colors-Bmc914HC.js";import"./supportsPassive-pertglWR.js";import"./KeyCode-BFt-2P2l.js";import"./useMergedState-BcJwUeRJ.js";import"./useMemo-CnyBa7eu.js";import"./shallowequal-UQLE3OsX.js";import"./index-ChnaMK_j.js";import"./usePopupContainer-BObfUw_y.js";import"./REditor.vue_vue_type_style_index_0_lang-B9q55COs.js";import"./styleChecker-CGBUfLOL.js";import"./index-BstQ-YzR.js";import"./index-DtiMcqIf.js";import"./debounce-Cg7NfA5c.js";import"./collapseMotion-BM3-mHdV.js";import"./LeftOutlined-BPCL5cU7.js";import"./isMobile-VPrdNIIw.js";import"./DownOutlined-DYgTl6g-.js";import"./index-D-OtIBMI.js";import"./EyeOutlined-DOQragHS.js";const O=x("div",{class:"r-close-icon hoverable-close"},null,-1),V={class:"flex"},F=x("div",{class:"r-loading-default"},null,-1),I={class:"r-breadcumbs"},P=x("div",{class:"flex justify-center items-center"},[x("div",{class:"i-heroicons:home w-1em h-1em mr-1"}),x("p",null,"Inicio")],-1),q=x("div",null,[x("h1",{class:"mt-5"},"Wp1u_posts")],-1),K={class:"r-container-list"},U={class:"relative card w-full float-right"},z={class:""},G={class:"components-input-demo-presuffix mt-3 flex"},T=x("span",{class:"i-heroicons:trash-16-solid text-md mr-1 mb-1"},null,-1),X=x("span",{class:"i-heroicons:plus-16-solid text-lg mr-1 mb-1"},null,-1),H={class:"w-50% mr-20"},N={class:"float-right align-middle"},Q={class:"justify-start w-20%"},Y=x("div",{class:"i-mdi:search w-1em h-1em text-2xl"},null,-1),Z={class:"flex justify-end w-20%"},$=x("div",{class:"flex"},[x("div",{class:"i-mdi:export-variant w-1em h-1em text-xl mr-1"}),y(" Exportar ")],-1),J=x("span",{class:"flex"},[x("div",{class:"i-mdi:file-csv-outline w-1em h-1em text-gray-900 mr-2 text-xl"}),y(" CSV ")],-1),ee=x("span",{class:"flex"},[x("div",{class:"i-mdi:microsoft-excel w-1em h-1em text-green-700 mr-2 text-xl"}),y(" EXCEL ")],-1),le=x("span",{class:"flex"},[x("div",{class:"i-mdi:file-pdf-box w-1em h-1em text-red-500 mr-2 text-xl"}),y(" PDF ")],-1),se={class:"flex justify-center align-center"},te={class:"text-xl flex justify-center align-center"},oe=["onClick"],ae=x("div",{class:"i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer mt-1"},null,-1),ie=x("div",{class:"i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer"},null,-1),ne=i({__name:"Wp1u_postsList",setup(i){const ne=n(),re=n([]),ue=n(null),de=n(null),ce=e.visible_columns,me=r((()=>re.value.filter((e=>u(e,ne.value,ce))))),{loading:pe,result:_e,onError:ve,onResult:xe,refetch:fe}=e.useGetMany({relations:"all"}),he=d([]),{onError:je,onResult:ge,toggleEnabled:ye,loading:we,enabled:Ce}=e.useDeleteById(he,{defaultEnabled:!1});xe((e=>{re.value=e.data.data})),ve((e=>{c("error","Error de peticion","Error de peticion del elemento")}));const be=n(!1),Ee=(e=!1)=>{be.value=!be.value,e&&(R.destroyAll(),fe())},ke=()=>{de.value=null,Ee()},Re=(e=!1)=>{de.value=null,Ee(e)};ge((()=>{var e;fe(),null==(e=null==ue?void 0:ue.value)||e.clearSelection(),c("success","Acción Exitosa","Se han eliminado los elementos correctamente"),Ce.value=!1,R.destroyAll()}));const We=()=>{R.confirm({title:_(o,{text:"¿Desea eliminar el/los elementos seleccionados?",iconClass:"i-heroicons:trash w-1em h-1em text-4xl color-red-500",textClass:"ml-5 text-xl",loading:we,onOk:()=>{var e;Object.assign(he,null==(e=null==ue?void 0:ue.value)?void 0:e.selectedRowKeys),ye()}}),icon:null,footer:null})},Me=()=>{b("Wp1u_postsList",ce,me.value)},Ae=()=>{E("Wp1u_postsList",ce,me.value)};return(o,i)=>{var n,r;const u=R,d=k("router-link"),b=W,E=M,re=A,_e=D,ve=B,xe=S,he=L,je=a;return m(),p(C,null,[_(u,{open:h(be),"onUpdate:open":i[1]||(i[1]=e=>g(be)?be.value=e:null),footer:null,"destroy-on-close":!0,onCancel:i[2]||(i[2]=e=>de.value=null),"wrap-class-name":"modal-form",width:"55%"},{closeIcon:v((()=>[O])),title:v((()=>[x("div",V,[x("div",{class:f([h(de)?"i-heroicons:pencil-square":"i-heroicons:plus-20-solid","w-1em h-1em p-3.5 mr-2"])},null,2),x("h1",null,j(h(de)?"Actualizar Wp1u_posts":"Crear Wp1u_posts"),1)])])),default:v((()=>[_(l,{modal:!0,modelValue:h(de),"onUpdate:modelValue":i[0]||(i[0]=e=>g(de)?de.value=e:null),action:h(de)?"update":"create",onCloseModal:Re,onReload:h(fe),"show-loading":!0},{loading_icon:v((()=>[F])),_:1},8,["modelValue","action","onReload"])])),_:1},8,["open"]),x("div",I,[_(E,{class:"h-full"},{default:v((()=>[_(b,null,{default:v((()=>[_(d,{to:{name:"index"}},{default:v((()=>[P])),_:1})])),_:1}),_(b,null,{default:v((()=>[y("Wp")])),_:1}),_(b,null,{default:v((()=>[y("Wp1u_posts")])),_:1})])),_:1}),q]),x("div",K,[x("div",U,[x("div",z,[x("div",G,[_(h(w),{shadow:"",ref:"btnDelete",class:"btn-delete",disabled:0===(null==(n=h(ue))?void 0:n.selectedRowKeys.length),onClick:We},{default:v((()=>[T,y(" Eliminar ")])),_:1},8,["disabled"]),_(h(w),{class:"mr-3",shadow:"",onClick:ke},{default:v((()=>[X,y(" Crear Wp1u_posts ")])),_:1}),x("div",H,[x("span",N,"Elementos seleccionados "+j(null==(r=h(ue))?void 0:r.selectedRowKeys.length)+"/"+j(h(me).length),1)]),x("div",Q,[_(re,{value:h(ne),"onUpdate:value":i[3]||(i[3]=e=>g(ne)?ne.value=e:null),class:"col-1",placeholder:"Buscar elemento","allow-clear":!0},{prefix:v((()=>[Y])),_:1},8,["value"])]),x("div",Z,[_(xe,{class:"flex"},{overlay:v((()=>[_(ve,null,{default:v((()=>[_(_e,{key:"1",onClick:Me},{default:v((()=>[J])),_:1}),_(_e,{key:"2",onClick:Ae},{default:v((()=>[ee])),_:1}),_(_e,{key:"3"},{default:v((()=>[le])),_:1})])),_:1})])),default:v((()=>[$])),_:1})])])]),_(t,{ref_key:"wp1u_postsTbl",ref:ue,columns:h(ce),data:h(me),loading_icon:h(pe),has_selection:!0,on_select:e=>{},onChangePagination:i[4]||(i[4]=e=>{h(fe)()}),id_element:"id",class:"mt-5"},{loading_icon:v((()=>[_(s)])),_action:v((({_:l,record:s})=>[x("div",se,[x("div",te,[_(he,null,{title:v((()=>[y("Actualizar elemento")])),default:v((()=>[x("div",{class:"i-heroicons:pencil-square w-1em h-1em text-blue-600 cursor-pointer",onClick:e=>(e=>{de.value=e,Ee()})(s)},null,8,oe)])),_:2},1024),_(je,{title:"Desea eliminar este elemento?","ok-text":"Si","cancel-text":"No",onConfirm:l=>(l=>{pe.value=!0;const{onResult:s,onError:t}=e.useDelete(l.id);s((()=>{c("success","Acción Exitosa","Se ha eliminado el elmento correctamente"),pe.value=!1,fe()})),t((()=>{c("error","Acción Fallida","Ocurrio un error en la eliminación del elemento, puede estar asociado a otros elementos"),pe.value=!1}))})(s)},{icon:v((()=>[ae])),default:v((()=>[_(he,null,{title:v((()=>[y("Eliminar elemento")])),default:v((()=>[ie])),_:1})])),_:2},1032,["onConfirm"])])])])),_:1},8,["columns","data","loading_icon"])])])],64)}}});export{ne as default};