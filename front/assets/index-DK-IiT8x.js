import{d as r,u as e,aC as o,c as a,f as t,P as n,au as l,aP as c,g as s,m as i,_ as p,a5 as u,aQ as m,at as d,aT as b,aS as f}from"./index-D0wN_fuZ.js";import{D as g}from"./dropdown-DdxiuV_U.js";import{D as y}from"./DownOutlined-DYgTl6g-.js";import{M as S}from"./index-BQa5vSjM.js";const v=r({compatConfig:{MODE:3},name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:{prefixCls:String,href:String,separator:n.any,dropdownProps:l(),overlay:n.any,onClick:c()},slots:Object,setup(r,n){let{slots:l,attrs:c,emit:s}=n;const{prefixCls:i}=e("breadcrumb",r),p=r=>{s("click",r)};return()=>{var e;const n=null!==(e=o(l,r,"separator"))&&void 0!==e?e:"/",s=o(l,r),{class:u,style:m}=c,d=function(r,e){var o={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&e.indexOf(a)<0&&(o[a]=r[a]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(a=Object.getOwnPropertySymbols(r);t<a.length;t++)e.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(r,a[t])&&(o[a[t]]=r[a[t]])}return o}(c,["class","style"]);let b;return b=void 0!==r.href?a("a",t({class:"".concat(i.value,"-link"),onClick:p},d),[s]):a("span",t({class:"".concat(i.value,"-link"),onClick:p},d),[s]),b=((e,n)=>{const c=o(l,r,"overlay");return c?a(g,t(t({},r.dropdownProps),{},{overlay:c,placement:"bottom"}),{default:()=>[a("span",{class:"".concat(n,"-overlay-link")},[e,a(y,null,null)])]}):e})(b,i.value),null!=s?a("li",{class:u,style:m},[b,n&&a("span",{class:"".concat(i.value,"-separator")},[n])]):null}}}),h=r=>{const{componentCls:e,iconCls:o}=r;return{[e]:p(p({},u(r)),{color:r.breadcrumbBaseColor,fontSize:r.breadcrumbFontSize,[o]:{fontSize:r.breadcrumbIconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:p({color:r.breadcrumbLinkColor,transition:"color ".concat(r.motionDurationMid),padding:"0 ".concat(r.paddingXXS,"px"),borderRadius:r.borderRadiusSM,height:r.lineHeight*r.fontSize,display:"inline-block",marginInline:-r.marginXXS,"&:hover":{color:r.breadcrumbLinkColorHover,backgroundColor:r.colorBgTextHover}},m(r)),"li:last-child":{color:r.breadcrumbLastItemColor,["& > ".concat(e,"-separator")]:{display:"none"}},["".concat(e,"-separator")]:{marginInline:r.breadcrumbSeparatorMargin,color:r.breadcrumbSeparatorColor},["".concat(e,"-link")]:{["\n          > ".concat(o," + span,\n          > ").concat(o," + a\n        ")]:{marginInlineStart:r.marginXXS}},["".concat(e,"-overlay-link")]:{borderRadius:r.borderRadiusSM,height:r.lineHeight*r.fontSize,display:"inline-block",padding:"0 ".concat(r.paddingXXS,"px"),marginInline:-r.marginXXS,["> ".concat(o)]:{marginInlineStart:r.marginXXS,fontSize:r.fontSizeIcon},"&:hover":{color:r.breadcrumbLinkColorHover,backgroundColor:r.colorBgTextHover,a:{color:r.breadcrumbLinkColorHover}},a:{"&:hover":{backgroundColor:"transparent"}}},["&".concat(r.componentCls,"-rtl")]:{direction:"rtl"}})}},C=s("Breadcrumb",(r=>{const e=i(r,{breadcrumbBaseColor:r.colorTextDescription,breadcrumbFontSize:r.fontSize,breadcrumbIconFontSize:r.fontSize,breadcrumbLinkColor:r.colorTextDescription,breadcrumbLinkColorHover:r.colorText,breadcrumbLastItemColor:r.colorText,breadcrumbSeparatorMargin:r.marginXS,breadcrumbSeparatorColor:r.colorTextDescription});return[h(e)]}));function O(r){const{route:e,params:o,routes:t,paths:n}=r,l=t.indexOf(e)===t.length-1,c=function(r,e){if(!r.breadcrumbName)return null;const o=Object.keys(e).join("|");return r.breadcrumbName.replace(new RegExp(":(".concat(o,")"),"g"),((r,o)=>e[o]||r))}(e,o);return l?a("span",null,[c]):a("a",{href:"#/".concat(n.join("/"))},[c])}const x=r({compatConfig:{MODE:3},name:"ABreadcrumb",inheritAttrs:!1,props:{prefixCls:String,routes:{type:Array},params:n.any,separator:n.any,itemRender:{type:Function}},slots:Object,setup(r,n){let{slots:l,attrs:c}=n;const{prefixCls:s,direction:i}=e("breadcrumb",r),[p,u]=C(s),m=(r,e)=>(r=(r||"").replace(/^\//,""),Object.keys(e).forEach((o=>{r=r.replace(":".concat(o),e[o])})),r),g=(r,e,o)=>{const a=[...r],t=m(e||"",o);return t&&a.push(t),a};return()=>{var e;let n;const{routes:y,params:h={}}=r,C=d(o(l,r)),x=null!==(e=o(l,r,"separator"))&&void 0!==e?e:"/",k=r.itemRender||l.itemRender||O;y&&y.length>0?n=(r=>{let{routes:e=[],params:o={},separator:n,itemRender:l=O}=r;const c=[];return e.map((r=>{const s=m(r.path,o);s&&c.push(s);const i=[...c];let p=null;r.children&&r.children.length&&(p=a(S,{items:r.children.map((r=>({key:r.path||r.breadcrumbName,label:l({route:r,params:o,routes:e,paths:g(i,r.path,o)})})))},null));const u={separator:n};return p&&(u.overlay=p),a(v,t(t({},u),{},{key:s||r.breadcrumbName}),{default:()=>[l({route:r,params:o,routes:e,paths:i})]})}))})({routes:y,params:h,separator:x,itemRender:k}):C.length&&(n=C.map(((r,e)=>(b("object"==typeof r.type&&(r.type.__ANT_BREADCRUMB_ITEM||r.type.__ANT_BREADCRUMB_SEPARATOR)),f(r,{separator:x,key:e})))));const R={[s.value]:!0,["".concat(s.value,"-rtl")]:"rtl"===i.value,["".concat(c.class)]:!!c.class,[u.value]:!0};return p(a("nav",t(t({},c),{},{class:R}),[a("ol",null,[n])]))}}});const k=r({compatConfig:{MODE:3},name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:{prefixCls:String},setup(r,o){let{slots:n,attrs:l}=o;const{prefixCls:c}=e("breadcrumb",r);return()=>{var r;const{separator:e,class:o}=l,s=function(r,e){var o={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&e.indexOf(a)<0&&(o[a]=r[a]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(a=Object.getOwnPropertySymbols(r);t<a.length;t++)e.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(r,a[t])&&(o[a[t]]=r[a[t]])}return o}(l,["separator","class"]),i=d(null===(r=n.default)||void 0===r?void 0:r.call(n));return a("span",t({class:["".concat(c.value,"-separator"),o]},s),[i.length>0?i:"/"])}}});x.Item=v,x.Separator=k,x.install=function(r){return r.component(x.name,x),r.component(v.name,v),r.component(k.name,k),r};export{x as B,v as _};