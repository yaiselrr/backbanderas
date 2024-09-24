import{av as e,r as t,bG as r,w as n,T as a,k as s,b as l,a as o,E as i,bH as u,bI as c,i as $,p as v,ad as d}from"./index-D0wN_fuZ.js";function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(((r,n)=>(t.includes(n)||(r[n]=i(e[n])),r)),{})}function g(e){return"function"==typeof e}function m(e,t,r){let n=e;const a=t.split(".");for(let s=0;s<a.length;s++){if(!n[a[s]])return r;n=n[a[s]]}return n}function b(e,t,r){return o((()=>e.some((e=>m(t,e,{[r]:!1})[r]))))}function O(e,t,r){return o((()=>e.reduce(((e,n)=>{const a=m(t,n,{[r]:!1})[r]||[];return e.concat(a)}),[])))}function E(e,t,r,n){return e.call(n,i(t),i(r),n)}function j(e){return void 0!==e.$valid?!e.$valid:!e}function w(e,r,a,s,l,i,u,c,$,v,d){const p=t(!1),h=e.$params||{},y=t(null);let m,b;e.$async?({$invalid:m,$unwatch:b}=function(e,r,a,s,l,o,i){let{$lazy:u,$rewardEarly:c}=l,$=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],v=arguments.length>8?arguments[8]:void 0,d=arguments.length>9?arguments[9]:void 0,p=arguments.length>10?arguments[10]:void 0;const h=t(!!s.value),y=t(0);a.value=!1;const f=n([r,s].concat($,p),(()=>{if(u&&!s.value||c&&!d.value&&!a.value)return;let t;try{t=E(e,r,v,i)}catch(n){t=Promise.reject(n)}y.value++,a.value=!!y.value,h.value=!1,Promise.resolve(t).then((e=>{y.value--,a.value=!!y.value,o.value=e,h.value=j(e)})).catch((e=>{y.value--,a.value=!!y.value,o.value=e,h.value=!0}))}),{immediate:!0,deep:"object"==typeof r});return{$invalid:h,$unwatch:f}}(e.$validator,r,p,a,s,y,l,e.$watchTargets,$,v,d)):({$invalid:m,$unwatch:b}=function(e,t,r,n,a,s,l,i){let{$lazy:u,$rewardEarly:c}=n;return{$unwatch:()=>({}),$invalid:o((()=>{if(u&&!r.value||c&&!i.value)return!1;let n=!0;try{const r=E(e,t,l,s);a.value=r,n=j(r)}catch(o){a.value=o}return n}))}}(e.$validator,r,a,s,y,l,$,v));const O=e.$message;return{$message:g(O)?o((()=>O(f({$pending:p,$invalid:m,$params:f(h),$model:r,$response:y,$validator:i,$propertyPath:c,$property:u})))):O||"",$params:h,$pending:p,$invalid:m,$response:y,$unwatch:b}}const R="__root";function C(e){let{validations:r,state:l,key:u,parentKey:c,childResults:$,resultsCache:v,globalConfig:p={},instance:y,externalResults:f}=e;const m=c?"".concat(c,".").concat(u):u,{rules:E,nestedValidators:j,config:P,validationGroups:_}=function(){const e=i(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),t=Object.keys(e),r={},n={},a={};let s=null;return t.forEach((t=>{const l=e[t];switch(!0){case g(l.$validator):r[t]=l;break;case g(l):r[t]={$validator:l};break;case"$validationGroups"===t:s=l;break;case t.startsWith("$"):a[t]=l;break;default:n[t]=l}})),{rules:r,nestedValidators:n,config:a,validationGroups:s}}(r),k=h(h({},p),P),L=u?o((()=>{const e=i(l);return e?i(e[u]):void 0})):l,x=h({},i(f)||{}),I=o((()=>{const e=i(f);return u?e?i(e[u]):void 0:e})),D=function(e,r,n,a,l,u,c,$,v){const d=Object.keys(e),p=a.get(l,e),h=t(!1),y=t(!1),f=t(0);if(p){if(!p.$partial)return p;p.$unwatch(),h.value=p.$dirty.value}const g={$dirty:h,$path:l,$touch:()=>{h.value||(h.value=!0)},$reset:()=>{h.value&&(h.value=!1)},$commit:()=>{}};return d.length?(d.forEach((t=>{g[t]=w(e[t],r,g.$dirty,u,c,t,n,l,v,y,f)})),g.$externalResults=o((()=>$.value?[].concat($.value).map(((e,t)=>({$propertyPath:l,$property:n,$validator:"$externalResults",$uid:"".concat(l,"-externalResult-").concat(t),$message:e,$params:{},$response:null,$pending:!1}))):[])),g.$invalid=o((()=>{const e=d.some((e=>i(g[e].$invalid)));return y.value=e,!!g.$externalResults.value.length||e})),g.$pending=o((()=>d.some((e=>i(g[e].$pending))))),g.$error=o((()=>!!g.$dirty.value&&(g.$pending.value||g.$invalid.value))),g.$silentErrors=o((()=>d.filter((e=>i(g[e].$invalid))).map((e=>{const t=g[e];return s({$propertyPath:l,$property:n,$validator:e,$uid:"".concat(l,"-").concat(e),$message:t.$message,$params:t.$params,$response:t.$response,$pending:t.$pending})})).concat(g.$externalResults.value))),g.$errors=o((()=>g.$dirty.value?g.$silentErrors.value:[])),g.$unwatch=()=>d.forEach((e=>{g[e].$unwatch()})),g.$commit=()=>{y.value=!0,f.value=Date.now()},a.set(l,e,g),g):(p&&a.set(l,e,g),g)}(E,L,u,v,m,k,y,I,l),T=function(e,t,r,n,a,s,l){const o=Object.keys(e);return o.length?o.reduce(((o,i)=>(o[i]=C({validations:e[i],state:t,key:i,parentKey:r,resultsCache:n,globalConfig:a,instance:s,externalResults:l}),o)),{}):{}}(j,L,m,v,k,y,I),V={};_&&Object.entries(_).forEach((e=>{let[t,r]=e;V[t]={$invalid:b(r,T,"$invalid"),$error:b(r,T,"$error"),$pending:b(r,T,"$pending"),$errors:O(r,T,"$errors"),$silentErrors:O(r,T,"$silentErrors")}}));const{$dirty:A,$errors:N,$invalid:G,$anyDirty:S,$error:F,$pending:z,$touch:K,$reset:H,$silentErrors:M,$commit:W}=function(e,t,r){const n=o((()=>[t,r].filter((e=>e)).reduce(((e,t)=>e.concat(Object.values(i(t)))),[]))),a=o({get:()=>e.$dirty.value||!!n.value.length&&n.value.every((e=>e.$dirty)),set(t){e.$dirty.value=t}}),s=o((()=>{const t=i(e.$silentErrors)||[],r=n.value.filter((e=>(i(e).$silentErrors||[]).length)).reduce(((e,t)=>e.concat(...t.$silentErrors)),[]);return t.concat(r)})),l=o((()=>{const t=i(e.$errors)||[],r=n.value.filter((e=>(i(e).$errors||[]).length)).reduce(((e,t)=>e.concat(...t.$errors)),[]);return t.concat(r)})),u=o((()=>n.value.some((e=>e.$invalid))||i(e.$invalid)||!1)),c=o((()=>n.value.some((e=>i(e.$pending)))||i(e.$pending)||!1)),$=o((()=>n.value.some((e=>e.$dirty))||n.value.some((e=>e.$anyDirty))||a.value)),v=o((()=>!!a.value&&(c.value||u.value))),d=()=>{e.$touch(),n.value.forEach((e=>{e.$touch()}))};return n.value.length&&n.value.every((e=>e.$dirty))&&d(),{$dirty:a,$errors:l,$invalid:u,$anyDirty:$,$error:v,$pending:c,$touch:d,$reset:()=>{e.$reset(),n.value.forEach((e=>{e.$reset()}))},$silentErrors:s,$commit:()=>{e.$commit(),n.value.forEach((e=>{e.$commit()}))}}}(D,T,$),q=u?o({get:()=>i(L),set:e=>{A.value=!0;const t=i(l),r=i(f);r&&(r[u]=x[u]),a(t[u])?t[u].value=e:t[u]=e}}):null;return u&&k.$autoDirty&&n(L,(()=>{A.value||K();const e=i(f);e&&(e[u]=x[u])}),{flush:"sync"}),s(h(h(h({},D),{},{$model:q,$dirty:A,$error:F,$errors:N,$invalid:G,$anyDirty:S,$pending:z,$touch:K,$reset:H,$path:m||R,$silentErrors:M,$validate:async function(){return K(),k.$rewardEarly&&(W(),await d()),await d(),new Promise((e=>{if(!z.value)return e(!G.value);const t=n(z,(()=>{e(!G.value),t()}))}))},$commit:W},$&&{$getResultsForChild:function(e){return($.value||{})[e]},$clearExternalResults:function(){a(f)?f.value=x:0===Object.keys(x).length?Object.keys(f).forEach((e=>{delete f[e]})):Object.assign(f,x)},$validationGroups:V}),T))}class P{constructor(){this.storage=new Map}set(e,t,r){this.storage.set(e,{rules:t,result:r})}checkRulesValidity(e,t,r){const n=Object.keys(r),a=Object.keys(t);if(a.length!==n.length)return!1;return!!a.every((e=>n.includes(e)))&&a.every((e=>!t[e].$params||Object.keys(t[e].$params).every((n=>i(r[e].$params[n])===i(t[e].$params[n])))))}get(e,t){const r=this.storage.get(e);if(!r)return;const{rules:n,result:a}=r,s=this.checkRulesValidity(e,t,n),l=a.$unwatch?a.$unwatch:()=>({});return s?a:{$dirty:a.$dirty,$partial:!0,$unwatch:l}}}const _={COLLECT_ALL:!0,COLLECT_NONE:!1},k=Symbol("vuelidate#injectChildResults"),L=Symbol("vuelidate#removeChildResults");function x(e){return new Proxy(e,{get:(e,t)=>"object"==typeof e[t]?x(e[t]):o((()=>e[t]))})}let I=0;function D(d,p){var y;let f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};1===arguments.length&&(f=d,d=void 0,p=void 0);let{$registerAs:m,$scope:b=_.COLLECT_ALL,$stopPropagation:O,$externalResults:E,currentVueInstance:j}=f;const w=j||(null===(y=e())||void 0===y?void 0:y.proxy),R=w?w.$options:{};m||(I+=1,m="_vuelidate_".concat(I));const D=t({}),T=new P,{childResults:V,sendValidationResultsToParent:A,removeValidationResultsFromParent:N}=w?function(e){let{$scope:r,instance:n}=e;const a={},s=t([]),l=o((()=>s.value.reduce(((e,t)=>(e[t]=i(a[t]),e)),{})));n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],(function(e,t){let{$registerAs:n,$scope:l,$stopPropagation:o}=t;o||r===_.COLLECT_NONE||l===_.COLLECT_NONE||r!==_.COLLECT_ALL&&r!==l||(a[n]=e,s.value.push(n))})),n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],(function(e){s.value=s.value.filter((t=>t!==e)),delete a[e]}));const u=$(k,[]);v(k,n.__vuelidateInjectInstances);const c=$(L,[]);return v(L,n.__vuelidateRemoveInstances),{childResults:l,sendValidationResultsToParent:u,removeValidationResultsFromParent:c}}({$scope:b,instance:w}):{childResults:t({})};if(!d&&R.validations){const e=R.validations;p=t({}),r((()=>{p.value=w,n((()=>g(e)?e.call(p.value,new x(p.value)):e),(e=>{D.value=C({validations:e,state:p,childResults:V,resultsCache:T,globalConfig:f,instance:w,externalResults:E||w.vuelidateExternalResults})}),{immediate:!0})})),f=R.validationsConfig||f}else{const e=a(d)||(u(G=d)||c(G))?d:s(d||{});n(e,(e=>{D.value=C({validations:e,state:p,childResults:V,resultsCache:T,globalConfig:f,instance:null!=w?w:{},externalResults:E})}),{immediate:!0})}var G;return w&&(A.forEach((e=>e(D,{$registerAs:m,$scope:b,$stopPropagation:O}))),l((()=>N.forEach((e=>e(m)))))),o((()=>h(h({},i(D.value)),V.value)))}export{D as u};
