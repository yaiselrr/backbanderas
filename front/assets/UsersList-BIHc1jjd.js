import{U as e}from"./users.model-13Myq0P6.js";import{_ as l,a as s,b as o,c as a}from"./ConfirmModal.vue_vue_type_script_setup_true_lang-CMNdRJV8.js";import{d as t,r as i,D as r,a as n,Q as d,k as u,S as c,n as m,z as p,c as v,v as _,x as f,y as x,E as h,G as j,T as g,L as w,R as y,q as C,A as b,U as k,V as E,W as R}from"./index-D0wN_fuZ.js";import{_ as U}from"./UsersForm.vue_vue_type_script_setup_true_lang-jouj7GCH.js";import{_ as A}from"./UsersFormPasswordChange.vue_vue_type_script_setup_true_lang-K73xjgEp.js";import{B as M}from"./breadcrump-BYoyPtf_.js";import{M as V}from"./index-BZUQu6cJ.js";import{I as S}from"./index-_uS1yxUQ.js";import{_ as D,M as B}from"./index-BQa5vSjM.js";import{_ as P,a as q}from"./dropdown-DdxiuV_U.js";import"./RestBase-6hwWqa7t.js";import"./createContext-Cl9SgfpP.js";import"./FormItemContext-CfbnWjAK.js";import"./index-CFoXpmaN.js";import"./index-brT4NzTB.js";import"./debounceValidator-Cl5zTG4a.js";import"./colors-Bmc914HC.js";import"./supportsPassive-pertglWR.js";import"./index-C2qDfXmS.js";import"./useMergedState-BcJwUeRJ.js";import"./KeyCode-BFt-2P2l.js";import"./styleChecker-CGBUfLOL.js";import"./index-BstQ-YzR.js";import"./index-DtiMcqIf.js";import"./debounce-Cg7NfA5c.js";import"./collapseMotion-BM3-mHdV.js";import"./LeftOutlined-BPCL5cU7.js";import"./isMobile-VPrdNIIw.js";import"./useMemo-CnyBa7eu.js";import"./DownOutlined-DYgTl6g-.js";import"./index-ChnaMK_j.js";import"./index-D-OtIBMI.js";import"./RForm.vue_vue_type_script_setup_true_lang-HqTuq9xx.js";import"./index-BtQlog3F.js";import"./RButton.vue_vue_type_style_index_0_lang-DWca47Ax.js";import"./RSelect.vue_vue_type_script_setup_true_lang-C-HhWqQ_.js";import"./ClearButton-D4yBJSZU.js";import"./useValidation-Dimmn3XB.js";import"./usePopupContainer-BObfUw_y.js";import"./REditor.vue_vue_type_style_index_0_lang-B9q55COs.js";import"./roles.model-CLThzeQD.js";import"./index-DK-IiT8x.js";import"./EyeOutlined-DOQragHS.js";import"./shallowequal-UQLE3OsX.js";const F=f("div",{class:"r-close-icon hoverable-close"},null,-1),L={class:"flex"},O={key:0},I={key:1},K=f("div",{class:"r-loading-default"},null,-1),z=f("div",{class:"r-close-icon hoverable-close"},null,-1),G={class:"flex"},T=f("h1",null,"Cambiar Contraseña",-1),X=f("div",{class:"r-loading-default"},null,-1),N={class:"r-breadcumbs"},Q=f("div",null,[f("h1",{class:"mt-5"},"Usuarios")],-1),W={class:"r-container-list"},Y={class:"relative card w-full float-right"},Z={class:""},$={class:"components-input-demo-presuffix mt-3 flex"},H=f("span",{class:"i-heroicons:trash-16-solid text-md mr-1 mb-1"},null,-1),J=f("span",{class:"i-heroicons:plus-16-solid text-lg mr-1 mb-1"},null,-1),ee={class:"w-50% mr-20"},le={class:"float-right align-middle"},se={class:"justify-start w-20%"},oe=f("div",{class:"i-mdi:search w-1em h-1em text-2xl"},null,-1),ae={class:"flex justify-end w-20%"},te=f("div",{class:"flex"},[f("div",{class:"i-mdi:export-variant w-1em h-1em text-xl mr-1"}),w(" Exportar ")],-1),ie=f("span",{class:"flex"},[f("div",{class:"i-mdi:file-csv-outline w-1em h-1em text-gray-900 mr-2 text-xl"}),w(" CSV ")],-1),re=f("span",{class:"flex"},[f("div",{class:"i-mdi:microsoft-excel w-1em h-1em text-green-700 mr-2 text-xl"}),w(" EXCEL ")],-1),ne=f("span",{class:"flex"},[f("div",{class:"i-mdi:file-pdf-box w-1em h-1em text-red-500 mr-2 text-xl"}),w(" PDF ")],-1),de={class:"flex justify-center align-center"},ue={class:"text-xl flex justify-center align-center"},ce=["onClick"],me=f("div",{class:"i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer mt-1"},null,-1),pe=f("div",{class:"i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer"},null,-1),ve=["onClick"],_e=t({__name:"UsersList",setup(t){const _e=i(),fe=i([]),xe=i(null),he=i(null);i(null);const je=i(!1),ge=e.visible_columns,we=r(),ye=n((()=>fe.value.filter((e=>d(e,_e.value,ge))))),{loading:Ce,result:be,onError:ke,onResult:Ee,refetch:Re}=e.useGetMany({relations:"all"}),Ue=u([{title:"Seguridad",disabled:!1,href:"/guarantee"},{title:"Usuarios",disabled:!0}]),Ae=u([]),{onError:Me,onResult:Ve,toggleEnabled:Se,loading:De,enabled:Be}=e.useDeleteById(Ae,{defaultEnabled:!1});Ee((e=>{fe.value=e.data.data})),ke((e=>{c("error","Error de peticion","Error de peticion del elemento")}));const Pe=i(!1),qe=i(!1),Fe=(e=!1)=>{Pe.value=!Pe.value,e&&(V.destroyAll(),Re())},Le=(e=!1)=>{qe.value=!qe.value,e&&(V.destroyAll(),Re())},Oe=()=>{he.value=null,Fe()},Ie=(e=!1)=>{he.value=null,Fe(e)},Ke=(e=!1)=>{he.value=null,Le(e)};Ve((()=>{var e;Re(),null==(e=null==xe?void 0:xe.value)||e.clearSelection(),c("success","Acción Exitosa","Se han eliminado los elementos correctamente"),Be.value=!1,V.destroyAll()}));const ze=()=>{V.confirm({title:v(o,{text:"¿Desea eliminar el/los elementos seleccionados?",iconClass:"i-heroicons:trash w-1em h-1em text-4xl color-red-500",textClass:"ml-5 text-xl",loading:De,onOk:()=>{var e;Object.assign(Ae,null==(e=null==xe?void 0:xe.value)?void 0:e.selectedRowKeys),Se()}}),icon:null,footer:null})},Ge=()=>{E("UsersList",ge,ye.value)},Te=()=>{R("UsersList",ge,ye.value)};return(o,t)=>{var i,r,n;const d=V,u=S,E=D,R=B,fe=P,be=q,ke=a;return m(),p(k,null,[v(d,{open:h(Pe),"onUpdate:open":t[1]||(t[1]=e=>g(Pe)?Pe.value=e:null),footer:null,"destroy-on-close":!0,onCancel:t[2]||(t[2]=e=>he.value=null),"wrap-class-name":"modal-form",width:"55%"},{closeIcon:_((()=>[F])),title:_((()=>[f("div",L,[f("div",{class:x([h(he)?"i-heroicons:pencil-square":"i-heroicons:plus-20-solid","w-1em h-1em p-3.5 mr-2"])},null,2),h(je)?(m(),p("h1",O,"Cambiar Password")):(m(),p("h1",I,j(h(he)?"Actualizar Usuarios":"Crear Usuarios"),1))])])),default:_((()=>[v(U,{modal:!0,modelValue:h(he),"onUpdate:modelValue":t[0]||(t[0]=e=>g(he)?he.value=e:null),action:h(he)?"update":"create",onCloseModal:Ie,onReload:h(Re),"show-loading":!0,passwordChange:h(je)},{loading_icon:_((()=>[K])),_:1},8,["modelValue","action","onReload","passwordChange"])])),_:1},8,["open"]),v(d,{open:h(qe),"onUpdate:open":t[4]||(t[4]=e=>g(qe)?qe.value=e:null),footer:null,"destroy-on-close":!0,onCancel:t[5]||(t[5]=e=>he.value=null),"wrap-class-name":"modal-form",width:"55%"},{closeIcon:_((()=>[z])),title:_((()=>[f("div",G,[f("div",{class:x([h(he)?"i-heroicons:pencil-square":"i-heroicons:plus-20-solid","w-1em h-1em p-3.5 mr-2"])},null,2),T])])),default:_((()=>[v(A,{modal:!0,modelValue:h(he),"onUpdate:modelValue":t[3]||(t[3]=e=>g(he)?he.value=e:null),action:"password_change",onCloseModal:Ke,onReload:h(Re),"show-loading":!0},{loading_icon:_((()=>[X])),_:1},8,["modelValue","onReload"])])),_:1},8,["open"]),f("div",N,[v(M,{breadcrumb:h(Ue)},null,8,["breadcrumb"]),Q]),f("div",W,[f("div",Y,[f("div",Z,[f("div",$,[v(h(y),{shadow:"",ref:"btnDelete",class:"btn-delete",disabled:0===(null==(i=h(xe))?void 0:i.selectedRowKeys.length)||h(we).user.sub==(null==(r=h(xe))?void 0:r.selectedRowKeys[0]),onClick:ze},{default:_((()=>[H,w(" Eliminar ")])),_:1},8,["disabled"]),v(h(y),{class:"mr-3",shadow:"",onClick:Oe},{default:_((()=>[J,w(" Crear Usuarios ")])),_:1}),f("div",ee,[f("span",le,"Elementos seleccionados "+j(null==(n=h(xe))?void 0:n.selectedRowKeys.length)+"/"+j(h(ye).length),1)]),f("div",se,[v(u,{value:h(_e),"onUpdate:value":t[6]||(t[6]=e=>g(_e)?_e.value=e:null),class:"col-1",placeholder:"Buscar elemento","allow-clear":!0},{prefix:_((()=>[oe])),_:1},8,["value"])]),f("div",ae,[v(fe,{class:"flex"},{overlay:_((()=>[v(R,null,{default:_((()=>[v(E,{key:"1",onClick:Ge},{default:_((()=>[ie])),_:1}),v(E,{key:"2",onClick:Te},{default:_((()=>[re])),_:1}),v(E,{key:"3"},{default:_((()=>[ne])),_:1})])),_:1})])),default:_((()=>[te])),_:1})])])]),v(s,{ref_key:"usersTbl",ref:xe,columns:h(ge),data:h(ye),loading_icon:h(Ce),has_selection:!0,on_select:e=>{},onChangePagination:t[7]||(t[7]=e=>{h(Re)()}),id_element:"id",class:"mt-5"},{loading_icon:_((()=>[v(l)])),_action:_((({_:l,record:s})=>[f("div",de,[f("div",ue,[v(be,null,{title:_((()=>[w("Actualizar elemento")])),default:_((()=>[f("div",{class:"i-heroicons:pencil-square w-1em h-1em text-blue-600 cursor-pointer",onClick:e=>(e=>{he.value=e,Fe()})(s)},null,8,ce)])),_:2},1024),v(ke,{title:"Desea eliminar este elemento?","ok-text":"Si","cancel-text":"No",onConfirm:l=>(l=>{Ce.value=!0;const{onResult:s,onError:o}=e.useDelete(l.id);s((()=>{c("success","Acción Exitosa","Se ha eliminado el elemento correctamente"),Ce.value=!1,Re()})),o((()=>{c("error","Acción Fallida","Ocurrió un error en la eliminación del elemento, puede estar asociado a otros elementos"),Ce.value=!1}))})(s)},{icon:_((()=>[me])),default:_((()=>[s.id!=h(we).user.sub?(m(),C(be,{key:0},{title:_((()=>[w("Eliminar elemento")])),default:_((()=>[pe])),_:1})):b("",!0)])),_:2},1032,["onConfirm"]),v(be,null,{title:_((()=>[w("Cambiar contraseña")])),default:_((()=>[f("div",{class:"i-heroicons:key w-1em h-1em text-green-600 cursor-pointer",onClick:e=>(e=>{he.value=e,Le()})(s)},null,8,ve)])),_:2},1024)])])])),_:1},8,["columns","data","loading_icon"])])])],64)}}});export{_e as default};
