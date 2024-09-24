import{a as e,d as r,h as a,N as s,n as l,z as o,x as t,O as d,E as i,G as n,A as c,y as b}from"./index-D0wN_fuZ.js";import{u}from"./useCollapsable-DtNZUznb.js";import{C as p,c as y}from"./types-DSoMB_y9.js";const g=["id"],f={class:"flex flex-row pt-2 pb-4"},v={class:"flex items-center justify-center pl-5"},m={class:"flex flex-col px-6 pt-1"},x={key:0,style:{color:"inherit"},class:"font-semibold text-md"},k={key:1},h={key:2,class:""},w=[t("div",{style:{"font-size":"1.1em"},class:"i-heroicons:x-mark text-gray-500 hoverable-close","w:hover":"text-gray-800","w:dark":"text-gray-300"},null,-1)],R=r({__name:"RAlert",props:{color:a.oneOf(y).def(p.PRIMARY),title:a.string,description:a.string,shadow:a.bool,gradient:a.bool.def(!0),closable:a.bool,defaultOpen:a.bool.def(!0)},setup(r,{expose:a}){const y=r,{title:R,closable:S,description:A,gradient:C,shadow:O,color:N}=s(y),{isPrimary:j,isSecondary:D,isDanger:E,isSuccess:P,isWarn:G}=function(r){return{isPrimary:e((()=>r.value==p.PRIMARY)),isSecondary:e((()=>r.value==p.SECONDARY)),isDanger:e((()=>r.value==p.DANGER)),isSuccess:e((()=>r.value==p.SUCCESS)),isWarn:e((()=>r.value==p.WARNING))}}(N),{toggle:I,el:W,id:Y,isOpen:_}=u(y.defaultOpen);a({toggle:I});const z=function(r,a,s,l,o,t,d,i){return e((()=>[{"border-t dark:border-t-slate-600":r.value&&a.value},{"border-primary-800 dark:bg-primary-400 bg-primary-100 text-primary-900":s.value},{"bg-white shadow-md":r.value},{"border-t-gray-100 border-r border-r-gray-100 dark:border-t-slate-700 dark:border-r-slate-600":r.value&&!l.value},{"border-secondary-800 dark:bg-secondary-400 bg-secondary-100 text-secondary-900":o.value},{"border-pink-600 dark:bg-pink-400 bg-pink-100 text-pink-900":t.value},{"border-teal-400 dark:bg-teal-400 bg-teal-100 text-teal-900":d.value},{"border-yellow-300 dark:bg-amber-400 bg-amber-50 text-amber-900":i.value},{"border-none rounded-lg":l.value}]))}(O,_,j,C,D,E,P,G);return(e,r)=>(l(),o("div",{id:i(Y),ref_key:"el",ref:W,class:b([i(z),"flex flex-col overflow-hidden transition-all duration-200 border-l-2 dark:bg-opacity-10 dark:text-white rounded-r-xl"])},[t("div",f,[t("div",v,[d(e.$slots,"icon")]),t("div",m,[i(R)?(l(),o("h2",x,n(i(R)),1)):c("",!0),i(A)?(l(),o("p",k,n(i(A)),1)):(l(),o("div",h,[d(e.$slots,"default")]))]),i(S)?(l(),o("div",{key:0,class:"ml-auto mr-2",onClick:r[0]||(r[0]=(...e)=>i(I)&&i(I)(...e))},w)):c("",!0)])],10,g))}});export{R as default};
