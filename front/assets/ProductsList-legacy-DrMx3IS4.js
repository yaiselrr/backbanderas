System.register(["./products.model-legacy-DmDhP6c-.js","./ConfirmModal.vue_vue_type_script_setup_true_lang-legacy-Ca7huDOP.js","./index-legacy-BnT4rcVz.js","./ProductsForm.vue_vue_type_script_setup_true_lang-legacy-DUfAnRad.js","./breadcrump-legacy-8A_LxCUH.js","./index-legacy-nxao03Rl.js","./index-legacy-g1BirUfU.js","./index-legacy-0gGhEXTD.js","./dropdown-legacy-Ef-aP5fV.js","./RestBase-legacy-CyaXmJsG.js","./createContext-legacy-DI7CWFS2.js","./FormItemContext-legacy-DIDu-b8g.js","./index-legacy-DjC9o_w0.js","./index-legacy-C5nl4eCF.js","./debounceValidator-legacy-CNcUd-ub.js","./colors-legacy-C517ykp9.js","./supportsPassive-legacy-BJhmO5TL.js","./index-legacy-xM8aKfZE.js","./useMergedState-legacy-BhzTkMxu.js","./KeyCode-legacy-CtBVgl47.js","./styleChecker-legacy-gslcVGVx.js","./index-legacy-BcQgjaEy.js","./index-legacy-SE6QLez0.js","./debounce-legacy-CtZfg3gG.js","./collapseMotion-legacy-CAh_37Xw.js","./LeftOutlined-legacy-BzIaNX0f.js","./isMobile-legacy-BmmuYEUC.js","./useMemo-legacy-CRGZnKna.js","./DownOutlined-legacy-CCWm4Yig.js","./index-legacy-CltEfhW5.js","./index-legacy-D92hfgD0.js","./RForm.vue_vue_type_script_setup_true_lang-legacy-CQJ14iDy.js","./index-legacy-CLTyZtoE.js","./RButton.vue_vue_type_style_index_0_lang-legacy-CorltFxv.js","./RSelect.vue_vue_type_script_setup_true_lang-legacy-BlCL2tu-.js","./ClearButton-legacy-BkfdqdUX.js","./useValidation-legacy-BdDQzCcT.js","./usePopupContainer-legacy-B27Yz2o4.js","./categories.model-legacy-C813FM16.js","./CategoriesForm.vue_vue_type_script_setup_true_lang-legacy-hov2Ownt.js","./REditor.vue_vue_type_style_index_0_lang-legacy-BY4lRfIP.js","./index-legacy-DEb0wcU4.js","./useRefs-legacy-zGgp-h89.js","./EyeOutlined-legacy-42FX1Vmw.js","./index-legacy-Dpg12WLt.js","./PlusOutlined-legacy--5ABJuSZ.js","./index-legacy-BrGCmP0F.js","./shallowequal-legacy-bnCOzlms.js"],(function(e,l){"use strict";var n,t,u,a,o,s,i,c,r,d,f,m,v,g,y,_,x,p,j,h,b,w,C,E,P,R,k,S,A,M,O,B,D,L;return{setters:[function(e){n=e.P},function(e){t=e._,u=e.a,a=e.b,o=e.c},function(e){s=e.d,i=e.r,c=e.a,r=e.Q,d=e.j,f=e.k,m=e.S,v=e.n,g=e.z,y=e.c,_=e.v,x=e.x,p=e.y,j=e.E,h=e.G,b=e.T,w=e.L,C=e.R,E=e.U,P=e.V,R=e.W},function(e){k=e._},function(e){S=e.B},function(e){A=e.M},function(e){M=e.I},function(e){O=e._,B=e.M},function(e){D=e._,L=e.a},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=x("div",{class:"r-close-icon hoverable-close"},null,-1),V={class:"flex"},F=x("div",{class:"r-loading-default"},null,-1),K={class:"r-breadcumbs"},U=x("div",null,[x("h1",{class:"mt-5"},"Products")],-1),q={class:"r-container-list"},z={class:"relative card w-full float-right"},I={class:""},T={class:"components-input-demo-presuffix mt-3 flex"},G=x("span",{class:"i-heroicons:trash-16-solid text-md mr-1 mb-1"},null,-1),Q=x("span",{class:"i-heroicons:plus-16-solid text-lg mr-1 mb-1"},null,-1),X={class:"w-50% mr-20"},N={class:"float-right align-middle"},W={class:"justify-start w-20%"},Y=x("div",{class:"i-mdi:search w-1em h-1em text-2xl"},null,-1),Z={class:"flex justify-end w-20%"},$=x("div",{class:"flex"},[x("div",{class:"i-mdi:export-variant w-1em h-1em text-xl mr-1"}),w(" Exportar ")],-1),H=x("span",{class:"flex"},[x("div",{class:"i-mdi:file-csv-outline w-1em h-1em text-gray-900 mr-2 text-xl"}),w(" CSV ")],-1),J=x("span",{class:"flex"},[x("div",{class:"i-mdi:microsoft-excel w-1em h-1em text-green-700 mr-2 text-xl"}),w(" EXCEL ")],-1),ee=x("span",{class:"flex"},[x("div",{class:"i-mdi:file-pdf-box w-1em h-1em text-red-500 mr-2 text-xl"}),w(" PDF ")],-1),le={class:"flex justify-center align-center"},ne={class:"text-xl flex justify-center align-center"},te=["onClick"],ue=x("div",{class:"i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer mt-1"},null,-1),ae=x("div",{class:"i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer"},null,-1);e("default",s({__name:"ProductsList",setup:function(e){var s=i(),oe=i([]),se=i(null),ie=i(null),ce=n.visible_columns,re=c((function(){return oe.value.filter((function(e){return r(e,s.value,ce)}))})),de=d(),fe=n.useGetMany(),me=fe.loading,ve=(fe.result,fe.onError),ge=fe.onResult,ye=fe.refetch,_e=f([{title:"Administración",disabled:!1,href:"/guarantee"},{title:"Productos",disabled:!0}]),xe=f([]),pe=n.useDeleteById(xe,{defaultEnabled:!1}),je=(pe.onError,pe.onResult),he=pe.toggleEnabled,be=pe.loading,we=pe.enabled;ge((function(e){oe.value=e.data.data})),ve((function(e){m("error","Error de peticion","Error de peticion del elemento")}));var Ce=i(!1),Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Ce.value=!Ce.value,e&&(A.destroyAll(),ye())},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];ie.value=null,Ee(e)};je((function(){var e;ye(),null==se||null===(e=se.value)||void 0===e||e.clearSelection(),m("success","Acción Exitosa","Se han eliminado los elementos correctamente"),we.value=!1,A.destroyAll()}));var Re=function(){A.confirm({title:y(a,{text:"¿Desea eliminar el/los elementos seleccionados?",iconClass:"i-heroicons:trash w-1em h-1em text-4xl color-red-500",textClass:"ml-5 text-xl",loading:be,onOk:function(){var e;Object.assign(xe,null==se||null===(e=se.value)||void 0===e?void 0:e.selectedRowKeys),he()}}),icon:null,footer:null})},ke=function(){P("ProductsList",ce,re.value)},Se=function(){R("ProductsList",ce,re.value)};return function(e,a){var i,c,r=A,d=M,f=O,P=B,R=D,oe=L,fe=o;return v(),g(E,null,[y(r,{open:j(Ce),"onUpdate:open":a[1]||(a[1]=function(e){return b(Ce)?Ce.value=e:null}),footer:null,"destroy-on-close":!0,onCancel:a[2]||(a[2]=function(e){return ie.value=null}),"wrap-class-name":"modal-form",width:"55%"},{closeIcon:_((function(){return[l]})),title:_((function(){return[x("div",V,[x("div",{class:p([j(ie)?"i-heroicons:pencil-square":"i-heroicons:plus-20-solid","w-1em h-1em p-3.5 mr-2"])},null,2),x("h1",null,h(j(ie)?"Actualizar Products":"Crear Producto"),1)])]})),default:_((function(){return[y(k,{modal:!0,modelValue:j(ie),"onUpdate:modelValue":a[0]||(a[0]=function(e){return b(ie)?ie.value=e:null}),action:j(ie)?"update":"create",onCloseModal:Pe,onReload:j(ye),"show-loading":!0},{loading_icon:_((function(){return[F]})),_:1},8,["modelValue","action","onReload"])]})),_:1},8,["open"]),x("div",K,[y(S,{breadcrumb:j(_e)},null,8,["breadcrumb"]),U]),x("div",q,[x("div",z,[x("div",I,[x("div",T,[y(j(C),{shadow:"",ref:"btnDelete",class:"btn-delete",disabled:0===(null===(i=j(se))||void 0===i?void 0:i.selectedRowKeys.length),onClick:Re},{default:_((function(){return[G,w(" Eliminar ")]})),_:1},8,["disabled"]),y(j(C),{class:"mr-3",shadow:"",onClick:a[3]||(a[3]=function(e){return j(de).push({path:"/manage/products/create"})})},{default:_((function(){return[Q,w(" Crear Producto ")]})),_:1}),x("div",X,[x("span",N,"Elementos seleccionados "+h(null===(c=j(se))||void 0===c?void 0:c.selectedRowKeys.length)+"/"+h(j(re).length),1)]),x("div",W,[y(d,{value:j(s),"onUpdate:value":a[4]||(a[4]=function(e){return b(s)?s.value=e:null}),class:"col-1",placeholder:"Buscar elemento","allow-clear":!0},{prefix:_((function(){return[Y]})),_:1},8,["value"])]),x("div",Z,[y(R,{class:"flex"},{overlay:_((function(){return[y(P,null,{default:_((function(){return[y(f,{key:"1",onClick:ke},{default:_((function(){return[H]})),_:1}),y(f,{key:"2",onClick:Se},{default:_((function(){return[J]})),_:1}),y(f,{key:"3"},{default:_((function(){return[ee]})),_:1})]})),_:1})]})),default:_((function(){return[$]})),_:1})])])]),y(u,{ref_key:"productsTbl",ref:se,columns:j(ce),data:j(re),loading_icon:j(me),has_selection:!0,on_select:function(e){},onChangePagination:a[5]||(a[5]=function(e){j(ye)()}),id_element:"id",class:"mt-5"},{loading_icon:_((function(){return[y(t)]})),_action:_((function(e){e._;var l=e.record;return[x("div",le,[x("div",ne,[y(oe,null,{title:_((function(){return[w("Actualizar elemento")]})),default:_((function(){return[x("div",{class:"i-heroicons:pencil-square w-1em h-1em text-blue-600 cursor-pointer",onClick:function(e){return function(e){ie.value=e,Ee()}(l)}},null,8,te)]})),_:2},1024),y(fe,{title:"Desea eliminar este elemento?","ok-text":"Si","cancel-text":"No",onConfirm:function(e){return function(e){me.value=!0;var l=n.useDelete(e.id),t=l.onResult,u=l.onError;t((function(){m("success","Acción Exitosa","Se ha eliminado el elmento correctamente"),me.value=!1,ye()})),u((function(){m("error","Acción Fallida","Ocurrio un error en la eliminación del elemento, puede estar asociado a otros elementos"),me.value=!1}))}(l)}},{icon:_((function(){return[ue]})),default:_((function(){return[y(oe,null,{title:_((function(){return[w("Eliminar elemento")]})),default:_((function(){return[ae]})),_:1})]})),_:2},1032,["onConfirm"])])])]})),_:1},8,["columns","data","loading_icon"])])])],64)}}}))}}}));
