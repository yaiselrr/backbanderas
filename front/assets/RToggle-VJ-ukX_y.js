import{d as e,h as l,N as a,r as t,a as o,E as s,c0 as n,n as d,z as u,U as r,ae as i,y as p,L as v,G as c,O as g,x as m,an as b,M as f,F as y,C as x}from"./index-D0wN_fuZ.js";const h=["onKeyup"],k=["onClick"],V={key:0,class:"!font-bold"},w=x(e({__name:"RToggle",props:{options:{type:Array,default:[]},round:l.bool,icons:l.bool,idKey:l.string.def("id"),textKey:l.string.def("text"),modelValue:[String,Number],small:l.bool.def(!1)},emits:["update:modelValue"],setup(e,{emit:l}){const x=e,{options:w,idKey:K}=a(x),I=l,_=t(0);function C(e){_.value=e;const l=A.value?w.value[e]:w.value[e][s(K)];I("update:modelValue",l)}function z(){w.value[_.value+1]?C(_.value+1):C(0)}function F(){w.value[_.value-1]?C(_.value-1):C(w.value.length-1)}const N=o((()=>(100/w.value.length).toFixed(2))),$=o((()=>A.value?w.value.includes(x.modelValue)?1:0:w.value.some((e=>e[s(K)]==x.modelValue)))),j=o((()=>{const e=w.value.findIndex((e=>e===x.modelValue||!A.value&&e[s(K)]===x.modelValue));return 100*(-1===e?0:e)})),A=o((()=>w.value.length>0&&n(w.value[0])));return(l,a)=>(d(),u("div",{"w:dark":"!bg-slate-700 !border-slate-700 ",class:p(["app-toggle bg-light-700 border-solid border-width-3px border-light-700 flex relative transition-all ease-out duration-200 rounded-md !outline-none",{"app-toggle--round":e.round}]),tabindex:"0",onKeyup:[f(y(F,["prevent"]),["left"]),f(y(z,["prevent"]),["right"])]},[(d(!0),u(r,null,i(s(w),((a,t)=>(d(),u("label",{key:t,"w:dark":"!text-white",class:p(["app-toggle-value z-1 flex-center relative w-full text-center cursor-pointer select-none",{"!p-1":e.small,"app-toggle-value--selected":s(A)&&a===e.modelValue||!s(A)&&a[s(K)]===e.modelValue}]),onClick:e=>C(t)},[l.$slots.renderItem?g(l.$slots,"renderItem",{key:1,current:s(A)&&a===e.modelValue||!s(A)&&a[s(K)]===e.modelValue,option:a},void 0,!0):(d(),u("span",V,[s(A)?(d(),u(r,{key:0},[v(c(a),1)],64)):(d(),u(r,{key:1},[v(c(a[e.textKey]),1)],64))]))],10,k)))),128)),m("div",{"w:dark":"bg-slate-900/70 shadow-lg",class:"app-toggle-slider absolute bg-white dark:!bg-slate-900/90 left-0 bottom-0 top-0",style:b({width:s(N)+"%",transform:"translateX(".concat(s(j),"%)"),opacity:s($)})},null,4)],42,h))}}),[["__scopeId","data-v-3dc1d527"]]);export{w as default};