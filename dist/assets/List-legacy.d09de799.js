!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,o=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.ad9716dc.js","./Folder-legacy.8892427e.js","./Layout-legacy.13ee56e0.js","./useUtil-legacy.2b2c042b.js","./index-legacy.a95c509b.js","./icon-legacy.e13f943a.js","./index-legacy.57fc86dd.js","./api-legacy.6a12f15a.js","./Markdown-legacy.9b5169fe.js","./index-legacy.338cad07.js","./FolderTree-legacy.be73acea.js"],(function(n){"use strict";var t,r,i,o,a,c,l,u,s,g,f,d,h,m,b,y,p,j,w,x,v,A,$,S,k,z,C,M,E,I,O,F;return{setters:[function(e){t=e.f,r=e.a0,i=e.z,o=e.aE,a=e.aH,c=e.co,l=e.m,u=e.aF,s=e.bv,g=e.ah,f=e.a7,d=e.ag,h=e.bc,m=e.by,b=e.bK,y=e.d,p=e.e,j=e.K,w=e.cp,x=e.cq,v=e.cr,A=e.ap,$=e.v,S=e.o,k=e.W},function(e){z=e.b},function(e){C=e.a,M=e.M},function(e){E=e.c},function(e){I=e.n},function(e){O=e.g,F=e.O},function(){},function(){},function(){},function(){},function(){}],execute:function(){var P=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],H=function(e){if((0,E().isHide)(e.obj))return null;var n=C().setPathAs,y=z({id:1}).show;return t(M.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(r,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:i()}},as:I,get href(){return e.obj.name},onMouseEnter:function(){n(e.obj.name,e.obj.is_dir,!0)},onContextMenu:function(n){o((function(){a(!1),c(e.index,!0,!0)})),y(n,{props:e.obj})},get children(){return[t(r,{class:"name-box",spacing:"$1",get w(){return P[0].w},get children(){return[t(l,{get when(){return u()},get children(){return t(s,{"on:click":function(e){e.stopPropagation()},get checked(){return e.obj.selected},onChange:function(n){c(e.index,n.target.checked)}})}}),t(g,{class:"icon",boxSize:"$6",get color(){return f()},get as(){return O(e.obj)},mr:"$1","on:click":function(n){e.obj.type===F.IMAGE&&(n.stopPropagation(),n.preventDefault(),d.emit("gallery",e.obj.name))}}),t(h,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),t(h,{class:"size",get w(){return P[1].w},get textAlign(){return P[1].textAlign},get children(){return m(e.obj.size)}}),t(h,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return P[2].w},get textAlign(){return P[2].textAlign},get children(){return b(e.obj.modified)}})]}})}})};n("default",(function(){var n=y(),i=e(p(),2),c=i[0],g=i[1],f=e(p(!1),2),d=f[0],m=f[1];j((function(){c()&&w(c(),d())}));var b=function(e){return{fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:e.textAlign,cursor:"pointer",onClick:function(){e.name===c()?m(!d()):o((function(){g(e.name),m(!1)}))}}};return t(k,{class:"list",w:"$full",spacing:"$1",get children(){return[t(r,{class:"title",w:"$full",p:"$2",get children(){return[t(r,{get w(){return P[0].w},spacing:"$1",get children(){return[t(l,{get when(){return u()},get children(){return t(s,{get checked(){return x()},get indeterminate(){return v()},onChange:function(e){a(e.target.checked)}})}}),t(h,A((function(){return b(P[0])}),{get children(){return n("home.obj.".concat(P[0].name))}}))]}}),t(h,A({get w(){return P[1].w}},(function(){return b(P[1])}),{get children(){return n("home.obj.".concat(P[1].name))}})),t(h,A({get w(){return P[2].w}},(function(){return b(P[2])}),{display:{"@initial":"none","@md":"inline"},get children(){return n("home.obj.".concat(P[2].name))}}))]}}),t($,{get each(){return S.objs},children:function(e,n){return t(H,{obj:e,get index(){return n()}})}})]}})}))}}}))}();
