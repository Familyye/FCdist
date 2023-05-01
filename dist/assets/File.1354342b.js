import{f as e,af as y,ai as d,a8 as O,o,V as l,bf as I,aP as P,aj as h,by as T,bK as $,d as b,w as _,bL as k,ae as x,a6 as L,B as m,aa as S,x as A,ab as D,bM as f,m as g,a2 as w,bN as j,C as V,bO as R,J as a,K as i,bI as C,bP as M,e as z,aQ as F,R as B,U as W,ac as H}from"./index.9cf5fe42.js";import{a as v,b as U}from"./useUtil.b9ac3289.js";import{g as X,O as u}from"./icon.5a5c4711.js";import{m as K}from"./index.e3f939d4.js";import{T as G}from"./Layout.bbb89bd6.js";const J=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(y,{boxSize:"$20",get fallback(){return e(d,{get color(){return O()},boxSize:"$20",get as(){return X(o.obj)}})},get src(){return o.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(I,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(P,{color:"$neutral10",size:"sm",get children(){return[h(()=>T(o.obj.size))," \xB7 ",h(()=>$(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),E=()=>{const r=b(),n=_(()=>k(o.obj.name)),{currentObjLink:s}=v();return e(g,{get when(){return n().length},get children(){return e(x,{get children(){return[e(L,{as:m,colorScheme:"success",get rightIcon(){return e(d,{as:K})},get children(){return r("home.preview.open_with")}}),e(S,{get children(){return e(A,{get each(){return n()},children:t=>e(D,{as:"a",target:"_blank",get href(){return f(t.value,{raw_url:o.raw_url,name:o.obj.name,d_url:s(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=b(),{copyCurrentRawLink:s}=U();return e(J,{get children(){return[e(w,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>s(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(E,{})}})]}})},N=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),Q=r=>{const{currentObjLink:n}=v(),s=_(()=>f(r.scheme,{raw_url:o.raw_url,name:o.obj.name,d_url:n(!0)}));return e(R,{w:"$full",h:"70vh",get children(){return[e(j.iframe,{w:"$full",h:"$full",get src(){return s()}}),e(d,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:G,onClick:()=>{window.open(s(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return V()},p:"$1",boxSize:"$7"})]}})},q=r=>()=>e(Q,{scheme:r}),Y=[{name:"Aliyun Video Previewer",type:u.VIDEO,provider:/^Aliyundrive(Open)?$/,component:a(()=>i(()=>import("./aliyun_video.c929fbec.js"),["assets/aliyun_video.c929fbec.js","assets/index.9cf5fe42.js","assets/index.15d8d646.css","assets/useUtil.b9ac3289.js","assets/api.69a42d7e.js","assets/icon.5a5c4711.js","assets/index.8de755ab.js","assets/index.e3f939d4.js","assets/Layout.bbb89bd6.js","assets/Markdown.825322e6.js","assets/index.12e5e707.js","assets/FolderTree.16e323cc.js","assets/video_box.2fb5f7f3.js"]))},{name:"Markdown",type:u.TEXT,component:a(()=>i(()=>import("./markdown.7019eb5b.js"),["assets/markdown.7019eb5b.js","assets/index.9cf5fe42.js","assets/index.15d8d646.css","assets/useUtil.b9ac3289.js","assets/api.69a42d7e.js","assets/Markdown.825322e6.js"]))},{name:"Markdown with word wrap",type:u.TEXT,component:a(()=>i(()=>import("./markdown_with_word_wrap.b29e658b.js"),["assets/markdown_with_word_wrap.b29e658b.js","assets/index.9cf5fe42.js","assets/index.15d8d646.css","assets/useUtil.b9ac3289.js","assets/api.69a42d7e.js","assets/Markdown.825322e6.js"]))},{name:"Text Editor",type:u.TEXT,component:a(()=>i(()=>import("./text-editor.bf1528bf.js"),["assets/text-editor.bf1528bf.js","assets/index.9cf5fe42.js","assets/index.15d8d646.css","assets/useUtil.b9ac3289.js","assets/api.69a42d7e.js"]))},{name:"HTML render",exts:["html"],component:a(()=>i(()=>import("./html.cca85f06.js"),["assets/html.cca85f06.js","assets/index.9cf5fe42.js","assets/index.15d8d646.css","assets/useUtil.b9ac3289.js","assets/api.69a42d7e.js"]))},{name:"Image",type:u.IMAGE,component:a(()=>i(()=>import("./image.bd6a163b.js"),["assets/image.bd6a163b.js","assets/index.9cf5fe42.js","assets/index.15d8d646.css","assets/ImageWithError.984fa9df.js"]))},{name:"Video",type:u.VIDEO,component:a(()=>i(()=>import("./video.ee304a0c.js"),["assets/video.ee304a0c.js","assets/index.9cf5fe42.js","assets/index.15d8d646.css","assets/useUtil.b9ac3289.js","assets/api.69a42d7e.js","assets/icon.5a5c4711.js","assets/index.8de755ab.js","assets/index.e3f939d4.js","assets/Layout.bbb89bd6.js","assets/Markdown.825322e6.js","assets/index.12e5e707.js","assets/FolderTree.16e323cc.js","assets/video_box.2fb5f7f3.js"]))},{name:"Audio",type:u.AUDIO,component:a(()=>i(()=>import("./audio.00a5efc2.js"),["assets/audio.00a5efc2.js","assets/audio.e5b5af14.css","assets/index.9cf5fe42.js","assets/index.15d8d646.css","assets/useUtil.b9ac3289.js","assets/api.69a42d7e.js","assets/icon.5a5c4711.js","assets/index.8de755ab.js","assets/index.e3f939d4.js","assets/Layout.bbb89bd6.js","assets/Markdown.825322e6.js","assets/index.12e5e707.js","assets/FolderTree.16e323cc.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:a(()=>i(()=>import("./ipa.fd9c354a.js"),["assets/ipa.fd9c354a.js","assets/index.9cf5fe42.js","assets/index.15d8d646.css","assets/useUtil.b9ac3289.js","assets/api.69a42d7e.js","assets/icon.5a5c4711.js","assets/index.8de755ab.js","assets/index.e3f939d4.js","assets/Layout.bbb89bd6.js","assets/Markdown.825322e6.js","assets/index.12e5e707.js","assets/FolderTree.16e323cc.js"]))},{name:"Plist",exts:["plist"],component:a(()=>i(()=>import("./plist.2c86e37a.js"),["assets/plist.2c86e37a.js","assets/index.9cf5fe42.js","assets/index.15d8d646.css","assets/useUtil.b9ac3289.js","assets/api.69a42d7e.js","assets/icon.5a5c4711.js","assets/index.8de755ab.js","assets/index.e3f939d4.js","assets/Layout.bbb89bd6.js","assets/Markdown.825322e6.js","assets/index.12e5e707.js","assets/FolderTree.16e323cc.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:a(()=>i(()=>import("./aliyun_office.1951ca06.js"),["assets/aliyun_office.1951ca06.js","assets/index.9cf5fe42.js","assets/index.15d8d646.css"]))}],Z=r=>{const n=[];return Y.forEach(t=>{var c;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((c=t.exts)==null?void 0:c.includes(C(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),M(r.name).forEach(t=>{n.push({name:t.key,component:q(t.value)})}),n.push({name:"Download",component:a(()=>i(()=>Promise.resolve().then(()=>N),void 0))}),n},ee=()=>{const r=_(()=>Z({...o.obj,provider:o.provider})),[n,s]=z(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(w,{w:"$full",spacing:"$2",get children(){return[e(F,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{s(r().find(c=>c.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(E,{})]}}),e(B,{get fallback(){return e(W,{})},get children(){return e(H,{get component(){return n().component}})}})]}})}})},ie=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{J as F,ie as a};
