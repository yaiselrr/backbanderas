var e=Object.defineProperty,t=(t,a,o)=>((t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o)(t,"symbol"!=typeof a?a+"":a,o);import{d as a,r as o,w as n,_ as r,e as l,c as i,f as c,P as s,g as d,m as u,a5 as p,aD as h,aJ as v,a2 as m,a8 as b,a1 as f,$ as g,u as y,aZ as k,i as C,a as x,aH as S,b as O,o as w,aT as D,at as F,p as I,al as M,E as A,am as E,bz as B,bA as P,bB as j}from"./index-D0wN_fuZ.js";import{i as R}from"./createContext-Cl9SgfpP.js";import{u as T,F as N}from"./FormItemContext-CfbnWjAK.js";const _=a({compatConfig:{MODE:3},name:"Checkbox",inheritAttrs:!1,props:R({prefixCls:String,name:String,id:String,type:String,defaultChecked:{type:[Boolean,Number],default:void 0},checked:{type:[Boolean,Number],default:void 0},disabled:Boolean,tabindex:{type:[Number,String]},readonly:Boolean,autofocus:Boolean,value:s.any,required:Boolean},{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),emits:["click","change"],setup(e,t){let{attrs:a,emit:s,expose:d}=t;const u=o(void 0===e.checked?e.defaultChecked:e.checked),p=o();n((()=>e.checked),(()=>{u.value=e.checked})),d({focus(){var e;null===(e=p.value)||void 0===e||e.focus()},blur(){var e;null===(e=p.value)||void 0===e||e.blur()}});const h=o(),v=t=>{if(e.disabled)return;void 0===e.checked&&(u.value=t.target.checked),t.shiftKey=h.value;const a={target:r(r({},e),{checked:t.target.checked}),stopPropagation(){t.stopPropagation()},preventDefault(){t.preventDefault()},nativeEvent:t};void 0!==e.checked&&(p.value.checked=!!e.checked),s("change",a),h.value=!1},m=e=>{s("click",e),h.value=e.shiftKey};return()=>{const{prefixCls:t,name:o,id:n,type:s,disabled:d,readonly:h,tabindex:b,autofocus:f,value:g,required:y}=e,k=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a}(e,["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value","required"]),{class:C,onFocus:x,onBlur:S,onKeydown:O,onKeypress:w,onKeyup:D}=a,F=r(r({},k),a),I=Object.keys(F).reduce(((e,t)=>((t.startsWith("data-")||t.startsWith("aria-")||"role"===t)&&(e[t]=F[t]),e)),{}),M=l(t,C,{["".concat(t,"-checked")]:u.value,["".concat(t,"-disabled")]:d}),A=r(r({name:o,id:n,type:s,readonly:h,disabled:d,tabindex:b,class:"".concat(t,"-input"),checked:!!u.value,autofocus:f,value:g},I),{onChange:v,onClick:m,onFocus:x,onBlur:S,onKeydown:O,onKeypress:w,onKeyup:D,required:y});return i("span",{class:M},[i("input",c({ref:p},A),null),i("span",{class:"".concat(t,"-inner")},null)])}}}),G=new v("antCheckboxEffect",{"0%":{transform:"scale(1)",opacity:.5},"100%":{transform:"scale(1.6)",opacity:0}}),z=e=>{const{checkboxCls:t}=e,a="".concat(t,"-wrapper");return[{["".concat(t,"-group")]:r(r({},p(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,["> ".concat(e.antCls,"-row")]:{flex:1}}),[a]:r(r({},p(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},["& + ".concat(a)]:{marginInlineStart:0},["&".concat(a,"-in-form-item")]:{'input[type="checkbox"]':{width:14,height:14}}}),[t]:r(r({},p(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",alignSelf:"center",["".concat(t,"-input")]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,["&:focus-visible + ".concat(t,"-inner")]:r({},h(e))},["".concat(t,"-inner")]:{boxSizing:"border-box",position:"relative",top:0,insetInlineStart:0,display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorBorder),borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:"all ".concat(e.motionDurationSlow),"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"21.5%",display:"table",width:e.checkboxSize/14*5,height:e.checkboxSize/14*8,border:"".concat(e.lineWidthBold,"px solid ").concat(e.colorWhite),borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:"all ".concat(e.motionDurationFast," ").concat(e.motionEaseInBack,", opacity ").concat(e.motionDurationFast)}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[t]:{"&-indeterminate":{["".concat(t,"-inner")]:{"&:after":{top:"50%",insetInlineStart:"50%",width:e.fontSizeLG/2,height:e.fontSizeLG/2,backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{["".concat(a,":hover ").concat(t,":after")]:{visibility:"visible"},["\n        ".concat(a,":not(").concat(a,"-disabled),\n        ").concat(t,":not(").concat(t,"-disabled)\n      ")]:{["&:hover ".concat(t,"-inner")]:{borderColor:e.colorPrimary}},["".concat(a,":not(").concat(a,"-disabled)")]:{["&:hover ".concat(t,"-checked:not(").concat(t,"-disabled) ").concat(t,"-inner")]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},["&:hover ".concat(t,"-checked:not(").concat(t,"-disabled):after")]:{borderColor:e.colorPrimaryHover}}},{["".concat(t,"-checked")]:{["".concat(t,"-inner")]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:"all ".concat(e.motionDurationMid," ").concat(e.motionEaseOutBack," ").concat(e.motionDurationFast)}},"&:after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderRadius:e.borderRadiusSM,visibility:"hidden",border:"".concat(e.lineWidthBold,"px solid ").concat(e.colorPrimary),animationName:G,animationDuration:e.motionDurationSlow,animationTimingFunction:"ease-in-out",animationFillMode:"backwards",content:'""',transition:"all ".concat(e.motionDurationSlow)}},["\n        ".concat(a,"-checked:not(").concat(a,"-disabled),\n        ").concat(t,"-checked:not(").concat(t,"-disabled)\n      ")]:{["&:hover ".concat(t,"-inner")]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},["&:hover ".concat(t,":after")]:{borderColor:e.colorPrimaryHover}}},{["".concat(a,"-disabled")]:{cursor:"not-allowed"},["".concat(t,"-disabled")]:{["&, ".concat(t,"-input")]:{cursor:"not-allowed",pointerEvents:"none"},["".concat(t,"-inner")]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},["&".concat(t,"-indeterminate ").concat(t,"-inner::after")]:{background:e.colorTextDisabled}}}]};function U(e,t){const a=u(t,{checkboxCls:".".concat(e),checkboxSize:t.controlInteractiveSize});return[z(a)]}const V=d("Checkbox",((e,t)=>{let{prefixCls:a}=t;return[U(a,e)]})),q=Symbol("CheckboxGroupContext");var K=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a};const H=a({compatConfig:{MODE:3},name:"ACheckbox",inheritAttrs:!1,__ANT_CHECKBOX:!0,props:r(r({},{prefixCls:String,defaultChecked:m(),checked:m(),disabled:m(),isGroup:m(),value:s.any,name:String,id:String,indeterminate:m(),type:g("checkbox"),autofocus:m(),onChange:f(),"onUpdate:checked":f(),onClick:f(),skipGroup:m(!1)}),{indeterminate:m(!1)}),setup(e,t){let{emit:a,attrs:n,slots:s,expose:d}=t;const u=T(),p=N.useInject(),{prefixCls:h,direction:v,disabled:m}=y("checkbox",e),b=k(),[f,g]=V(h),I=C(q,void 0),M=Symbol("checkboxUniId"),A=x((()=>(null==I?void 0:I.disabled.value)||m.value));S((()=>{!e.skipGroup&&I&&I.registerValue(M,e.value)})),O((()=>{I&&I.cancelValue(M)})),w((()=>{D(!(void 0===e.checked&&!I&&void 0!==e.value))}));const E=e=>{const t=e.target.checked;a("update:checked",t),a("change",e),u.onFieldChange()},B=o();return d({focus:()=>{var e;null===(e=B.value)||void 0===e||e.focus()},blur:()=>{var e;null===(e=B.value)||void 0===e||e.blur()}}),()=>{var t;const o=F(null===(t=s.default)||void 0===t?void 0:t.call(s)),{indeterminate:d,skipGroup:m,id:y=u.id.value}=e,k=K(e,["indeterminate","skipGroup","id"]),{onMouseenter:C,onMouseleave:x,onInput:S,class:O,style:w}=n,D=K(n,["onMouseenter","onMouseleave","onInput","class","style"]),M=r(r(r(r({},k),{id:y,prefixCls:h.value}),D),{disabled:A.value});I&&!m?(M.onChange=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];a("change",...n),I.toggleOption({label:o,value:e.value})},M.name=I.name.value,M.checked=I.mergedValue.value.includes(e.value),M.disabled=A.value||b.value,M.indeterminate=d):M.onChange=E;const P=l({["".concat(h.value,"-wrapper")]:!0,["".concat(h.value,"-rtl")]:"rtl"===v.value,["".concat(h.value,"-wrapper-checked")]:M.checked,["".concat(h.value,"-wrapper-disabled")]:M.disabled,["".concat(h.value,"-wrapper-in-form-item")]:p.isFormItemInput},O,g.value),j=l({["".concat(h.value,"-indeterminate")]:d},g.value);return f(i("label",{class:P,style:w,onMouseenter:C,onMouseleave:x},[i(_,c(c({"aria-checked":d?"mixed":void 0},M),{},{class:j,ref:B}),null),o.length?i("span",null,[o]):null]))}}}),W=a({compatConfig:{MODE:3},name:"ACheckboxGroup",inheritAttrs:!1,props:r(r({},{name:String,prefixCls:String,options:b([]),disabled:Boolean,id:String}),{defaultValue:b(),value:b(),onChange:f(),"onUpdate:value":f()}),setup(e,t){let{slots:a,attrs:r,emit:l,expose:s}=t;const d=T(),{prefixCls:u,direction:p}=y("checkbox",e),h=x((()=>"".concat(u.value,"-group"))),[v,m]=V(h),b=o((void 0===e.value?e.defaultValue:e.value)||[]);n((()=>e.value),(()=>{b.value=e.value||[]}));const f=x((()=>e.options.map((e=>"string"==typeof e||"number"==typeof e?{label:e,value:e}:e)))),g=o(Symbol()),k=o(new Map),C=o(new Map);n(g,(()=>{const e=new Map;for(const t of k.value.values())e.set(t,!0);C.value=e}));return I(q,{cancelValue:e=>{k.value.delete(e),g.value=Symbol()},registerValue:(e,t)=>{k.value.set(e,t),g.value=Symbol()},toggleOption:t=>{const a=b.value.indexOf(t.value),o=[...b.value];-1===a?o.push(t.value):o.splice(a,1),void 0===e.value&&(b.value=o);const n=o.filter((e=>C.value.has(e))).sort(((e,t)=>f.value.findIndex((t=>t.value===e))-f.value.findIndex((e=>e.value===t))));l("update:value",n),l("change",n),d.onFieldChange()},mergedValue:b,name:x((()=>e.name)),disabled:x((()=>e.disabled))}),s({mergedValue:b}),()=>{var t;const{id:o=d.id.value}=e;let n=null;return f.value&&f.value.length>0&&(n=f.value.map((t=>{var o;return i(H,{prefixCls:u.value,key:t.value.toString(),disabled:"disabled"in t?t.disabled:e.disabled,indeterminate:t.indeterminate,value:t.value,checked:-1!==b.value.indexOf(t.value),onChange:t.onChange,class:"".concat(h.value,"-item")},{default:()=>[void 0!==a.label?null===(o=a.label)||void 0===o?void 0:o.call(a,t):t.label]})}))),v(i("div",c(c({},r),{},{class:[h.value,{["".concat(h.value,"-rtl")]:"rtl"===p.value},r.class,m.value],id:o}),[n||(null===(t=a.default)||void 0===t?void 0:t.call(a))]))}}});function J(e,t,a={}){const{defaultEnabled:n=!0,defaultValue:r=null,debounceMs:l=0}=a,i=o(!1),c=o(null),s=o(r),[d,u]=M(A(n)),p=o([]),h=o([]);function v(){i.value=!0,B((()=>{e(t).then((e=>{i.value=!1,s.value=e.data,h.value.forEach((t=>t(e)))})).catch((e=>{i.value=!1,p.value.map((t=>t(e)))}))}),l)()}A(d)&&v();return E(d,v),{loading:i,error:c,result:s,onError:function(e){p.value.push(e)},onResult:function(e){h.value.push(e)},refetch:()=>A(d)&&v(),enabled:d,toggleEnabled:u}}var X,L;async function Y(e,a,o){const n=j;let r={"Content-type":X.JSON};class l{constructor(){t(this,"isFormData"),t(this,"changedAttributes"),t(this,"modelName"),t(this,"url"),this.isFormData=!1,this.changedAttributes={},this.modelName=e,this.url=a}getId(){return null}cleanNull(e){const t=Object.keys(e),a=[];Object.values(e).forEach(((e,o)=>{null==e&&a.push(t[o])})),a.forEach((t=>{delete e[t]}))}params(e=!1){let t=Object.assign({},e?this:this.getId()?this.changedAttributes:this);return t=this.clean(t),this.isFormData?this.formData():t}formData(){let e=Object.assign({},{...this});e=this.clean(e),delete e.isFormData;const t=P(e);return this.get_id()&&t.append("_method","PATCH"),t}clean(e,t=!0){return t&&this.cleanNull(e),delete e.changedAttributes,delete e.url,delete e.modelName,delete e.isFormData,e}static transformRequest(e,t){return t["Content-type"]=e.isFormData?X.FORM_DATA:X.JSON,e.params?e.isFormData?e.params():JSON.stringify(e.params()):e}static useGetMany(e,t,o){return J(n,{url:a,method:"get",params:e,headers:r,...o},t)}static useGet(e,t,o,l){return J(n,{url:a+"/"+e,method:"get",params:t,headers:r,...l},o)}static useUpdate(e,t,o,l){return J(n,{url:a+"/"+e,method:"patch",data:t,headers:r,...l},o)}static useDeleteMany(e,t,o){return J(n,{url:a,method:"delete",data:e,headers:r,...o},t)}static useDeleteById(e,t,o){return J(n,{url:a+"/delete_by_id",method:"delete",data:e,headers:r,...o},t)}static useCustomFetch(e,t,o,l,i){return J(n,{url:a,method:e,params:t,data:o,headers:r,...i},l)}useCreate(e,t){return J(n,{url:a,method:"post",data:this.params(),headers:r,...t},e)}useUpdate(e,t){const o=a+"/"+this.getId();return J(n,{url:o,method:"patch",data:this.params(),headers:r,...t},e)}useSave(e,t){return r=this.isFormData?{"Content-type":X.FORM_DATA}:r,this.getId()?this.useUpdate(e,t):this.useCreate(e,t)}static useDelete(e,t,o){return J(n,{url:a+"/"+e,method:"delete",params:{},headers:r,...o},t)}static useValidate(e,t,o){return J(n,{url:a+"/validate",method:"post",data:e,headers:r,...o},t)}static useStaticCreate(e,t,o){return J(n,{url:a,method:"post",data:e,transformRequest:this.transformRequest,headers:r,...o},{...t})}static useStaticUpdate(e,t,o){const l=a+"/"+(null==e?void 0:e.id);return J(n,{url:l,method:"patch",data:e,transformRequest:this.transformRequest,headers:r,...o},t)}static useStaticSave(e,t,a){return r=(null==e?void 0:e.isFormData)?{"Content-type":X.FORM_DATA}:r,(null==e?void 0:e.id)?this.useStaticUpdate(e,t,a):this.useStaticCreate(e,t,a)}static validate(e,t){const o=a+"/validate";return n.post(o,e,t)}static show_columns(e,t=!0){if(e.includes("*"))return this.columns;const a=e?e.map((e=>this.columns.find((t=>t.key===e)))):this.columns;return e?t?a:this.columns.filter((t=>-1===e.indexOf(t.key))):this.columns}}return t(l,"columns"),l}H.Group=W,H.install=function(e){return e.component(H.name,H),e.component(W.name,W),e},(L=X||(X={})).JSON="application/json;charset=UTF-8",L.FORM_URLENCODED="application/x-www-form-urlencoded;charset=UTF-8",L.FORM_DATA="multipart/form-data;charset=UTF-8";export{H as C,Y as R,_ as V,U as g};
