let e=!1;try{const t=Object.defineProperty({},"passive",{get(){e=!0}});window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}catch(t){}export{e as s};
