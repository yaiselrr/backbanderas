System.register(["./index-legacy-BnT4rcVz.js","./createContext-legacy-DI7CWFS2.js"],(function(t,e){"use strict";var i,n,o,f,s,r,u,c,h,a;return{setters:[function(t){i=t.d,n=t.k,o=t.o,f=t.a_,s=t.ar,r=t.w,u=t.aX,c=t._,h=t.av},function(t){a=t.g}],execute:function(){t("R",i({compatConfig:{MODE:3},name:"ResizeObserver",props:{disabled:Boolean,onResize:Function},emits:["resize"],setup:function(t,e){var i=e.slots,l=n({width:0,height:0,offsetHeight:0,offsetWidth:0}),d=null,g=null,v=function(){g&&(g.disconnect(),g=null)},w=function(e){var i=t.onResize,n=e[0].target,o=n.getBoundingClientRect(),f=o.width,s=o.height,r=n.offsetWidth,u=n.offsetHeight,h=Math.floor(f),a=Math.floor(s);if(l.width!==h||l.height!==a||l.offsetWidth!==r||l.offsetHeight!==u){var d={width:h,height:a,offsetWidth:r,offsetHeight:u};c(l,d),i&&Promise.resolve().then((function(){i(c(c({},d),{offsetWidth:r,offsetHeight:u}),n)}))}},b=h(),m=function(){if(t.disabled)v();else{var e=u(b);e!==d&&(v(),d=e),!g&&e&&(g=new a(w)).observe(e)}};return o((function(){m()})),f((function(){m()})),s((function(){v()})),r((function(){return t.disabled}),(function(){m()}),{flush:"post"}),function(){var t;return null===(t=i.default)||void 0===t?void 0:t.call(i)[0]}}}))}}}));