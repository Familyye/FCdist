import{d as m,u as p,bw as x,a as d,b6 as g,f as t,W as v,bf as C,b0 as o,a_ as b,v as _,B as k,bd as h,n as F,Z as T,bg as I,ai as c,I as S,bT as L,T as E,bv as M,m as B,F as D}from"./index.ba7b76b6.js";import{F as H}from"./FolderTree.e43fa167.js";import"./index.75dece05.js";import"./api.819f16ad.js";const R=e=>{const r=m();return t(o,{w:"$full",display:"flex",flexDirection:"column",get children(){return[t(b,{get for(){return e.name},display:"flex",alignItems:"center",get children(){return r(`metas.${e.name}`)}}),t(I,{w:"$full",get direction(){return e.type==="bool"?"row":{"@initial":"column","@md":"row"}},gap:"$2",get children(){return[c(()=>c(()=>e.type==="string",!0)()?t(S,{get id(){return e.name},get value(){return e.value},onInput:a=>e.onChange(a.currentTarget.value)}):c(()=>e.type==="bool",!0)()?t(L,{get id(){return e.name},get checked(){return e.value},onChange:a=>e.onChange(a.currentTarget.checked)}):t(E,{get id(){return e.name},get value(){return e.value},onChange:a=>e.onChange(a.currentTarget.value)})),t(o,{w:"fit-content",display:"flex",get children(){return t(M,{css:{whiteSpace:"nowrap"},get id(){return`${e.name}_sub`},onChange:a=>e.onSub(a.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return e.sub},get children(){return r("metas.apply_sub")}})}})]}}),t(B,{get when(){return e.help},get children(){return t(D,{get children(){return r(`metas.${e.name}_help`)}})}})]}})},W=()=>{const e=m(),{params:r,back:a}=p(),{id:u}=r,[l,s]=x({id:0,path:"",password:"",p_sub:!1,write:!1,w_sub:!1,hide:"",h_sub:!1,readme:"",r_sub:!1}),[f,w]=d(()=>g.get(`/admin/meta/get?id=${u}`));u&&(async()=>{const n=await w();h(n,s)})();const[y,$]=d(()=>g.post(`/admin/meta/${u?"update":"create"}`,l));return t(T,{get loading(){return f()},get children(){return t(v,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(C,{get children(){return e(`global.${u?"edit":"add"}`)}}),t(o,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[t(b,{for:"path",display:"flex",alignItems:"center",get children(){return e("metas.path")}}),t(H,{id:"path",get value(){return l.path},onChange:n=>s("path",n)})]}}),t(_,{each:[{name:"password",type:"string"},{name:"write",type:"bool"},{name:"hide",type:"text",help:!0},{name:"readme",type:"text",help:!0}],children:n=>t(R,{get name(){return n.name},get type(){return n.type},get value(){return l[n.name]},onChange:i=>s(n.name,i),get sub(){return l[`${n.name[0]}_sub`]},onSub:i=>s(`${n.name[0]}_sub`,i),get help(){return n.help}})}),t(k,{get loading(){return y()},onClick:async()=>{const n=await $();h(n,()=>{F.success(e("global.save_success")),a()})},get children(){return e(`global.${u?"save":"add"}`)}})]}})}})};export{W as default};
