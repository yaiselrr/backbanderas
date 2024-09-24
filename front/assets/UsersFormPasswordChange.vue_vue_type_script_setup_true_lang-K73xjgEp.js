import{d as a,X as e,h as s,j as o,Y as l,k as r,r as d,a as t,S as i,n,z as c,q as u,v as m,O as p,E as f,Z as g,A as v,x as _,c as w,M as b,L as y,G as h,U as k}from"./index-D0wN_fuZ.js";import{_ as x}from"./RForm.vue_vue_type_script_setup_true_lang-HqTuq9xx.js";import{U as j}from"./users.model-13Myq0P6.js";import{_ as C}from"./RButton.vue_vue_type_style_index_0_lang-DWca47Ax.js";import{R as V}from"./index-CFoXpmaN.js";import{R as M}from"./roles.model-CLThzeQD.js";const E={class:"r-container-form"},R={class:"mt-10 sm:mt-0"},U={class:"shadow overflow-hidden sm:rounded-md"},q={class:"px-4 py-5 bg-white dark:bg-slate-800 sm:p-6"},A={class:"grid grid-cols-2 gap-4"},F={class:"grid-input"},L={class:"grid-input"},S={class:"px-4 py-3 bg-gray-50 dark:bg-slate-700 dark:bg-opacity-70 text-right sm:px-6"},G={class:"r-footer-form"},K={class:"r-footer-button-form"},O="Cambiar contraseña de usuario",z=a({__name:"UsersFormPasswordChange",props:e({modal:s.bool.def(!1),action:s.string.def("create"),loading_text:s.string.def(""),showLoading:s.bool.def(!0)},{modelValue:{},modelModifiers:{}}),emits:e(["closeModal","reload"],["update:modelValue"]),setup(a,{emit:e}){const s=o(),z=a,B=e,P=l(a,"modelValue"),X=r(new j(P.value)),Y=d(),Z=d(!1),{loading:$,result:D}=M.useGetMany(),{loading:H,toggleEnabled:I,onResult:J,enabled:N,onError:Q}=j.useStaticSave(X,{defaultEnabled:!1}),T=t((()=>$.value)),W=()=>{z.modal?B("closeModal"):s.push({name:"users_list"})};async function aa(){var a;await(null==(a=Y.value)?void 0:a.validate())&&I()}return Q((a=>{i("error","Error en acción","Error en acción del elemento")})),J((a=>{var e;i("success","Acción  "+O,"Acción ejecutada correctamente"),Z.value?(null==(e=Y.value)||e.clear(),N.value=!1,Object.assign(X,new j(P.value)),z.modal&&B("reload")):z.modal?B("closeModal",!0):s.push({name:"users_list"})})),(e,s)=>(n(),c(k,null,[a.showLoading?(n(),u(g,{key:0,"h-full":!0,class:"",loading:f(T),description:z.loading_text},{default:m((()=>[p(e.$slots,"loading_icon")])),_:3},8,["loading","description"])):v("",!0),_("div",E,[_("div",R,[_("div",U,[w(x,{ref_key:"usersForm",ref:Y,state:f(X),validations:f(j).validations[a.action],feedbacks:f(j).feedbacks[a.action],loading:!0},{default:m((()=>[_("div",q,[_("div",A,[_("div",F,[w(f(V),{type:"password",requiredMark:!0,modelValue:f(X).password,"onUpdate:modelValue":s[0]||(s[0]=a=>f(X).password=a),path:"password",label:"Contraseña",onKeyup:b(aa,["enter"])},null,8,["modelValue"])]),_("div",L,[w(f(V),{type:"password",requiredMark:!0,modelValue:f(X).confirm_password,"onUpdate:modelValue":s[1]||(s[1]=a=>f(X).confirm_password=a),path:"confirm_password",label:"Confirmar Contraseña",onKeyup:b(aa,["enter"])},null,8,["modelValue"])])])]),_("div",S,[_("div",G,[_("div",K,[w(C,{class:"ml-5",shadow:"",color:"primary",loading:f(H),onClick:aa},{default:m((()=>[y(h(O))])),_:1},8,["loading"]),w(C,{class:"ml-5",shadow:"",color:"primary",onClick:W},{default:m((()=>[y(" Cancelar ")])),_:1})])])])])),_:1},8,["state","validations","feedbacks"])])])])],64))}});export{z as _};
