"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[660],{660:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var r=t(433),a=t(861),s=t(439),c=t(757),i=t.n(c),l=t(414),o=t(689),u="CarItem_img__6EGKY",d="CarItem_link__Y-LRU",m="CarItem_item__EKxTS",h="CarItem_container__Ntwde",f="CarItem_cardHead__X7+3Q",_="CarItem_btn__Q74D8",v=t(184),x=function(e){var n=e.car,t=n.model,r=n.year,a=n.rentalPrice,s=n.rentalCompany,c=n.img,i=n.type,l=n.description,x=n.engineSize,p=n.fuelConsumption,j=n.id,w=n.mileage,g=n.make,C=(0,o.TH)(),y=C.pathname.includes("/catalog")?"":"catalog/";return(0,v.jsxs)("div",{className:h,children:[(0,v.jsxs)("div",{className:d,to:"".concat(y).concat(j),state:{from:C},children:[(0,v.jsx)("img",{className:u,src:c,width:"274",height:"268",alt:l}),(0,v.jsxs)("ul",{className:f,children:[(0,v.jsxs)("li",{children:[t," ",r]}),(0,v.jsx)("li",{children:a})]}),(0,v.jsxs)("ul",{className:m,children:[(0,v.jsx)("li",{children:s}),(0,v.jsx)("li",{children:i}),(0,v.jsx)("li",{children:x}),(0,v.jsx)("li",{children:p}),(0,v.jsx)("li",{children:w}),(0,v.jsx)("li",{children:g})]})]}),(0,v.jsx)("button",{className:_,children:"Learn More"})]})},p="CarsList_item__UxzUF",j=function(e){var n=e.cars;return(0,v.jsx)("li",{className:p,children:n.map((function(e){return(0,v.jsx)(x,{car:e},e.id)}))})},w=t(791),g=t(243);g.Z.defaults.baseURL="https://649ade98bf7c145d0239a19c.mockapi.io";var C=function(){var e=(0,a.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.Z.get("/Advert");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),y="Catalog_name__LlyDX",k="Catalog_list__SGi9+",b=t(164),N="Modal_overlay__r63M6",S="Modal_modal__DJDMv",Z=document.querySelector("#modal-root");function E(e){var n=e.onClose,t=e.children;(0,w.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&(n(),document.body.style.overflow="visible")};return document.body.style.overflow="hidden",(0,b.createPortal)((0,v.jsx)("div",{className:N,onClick:function(e){e.currentTarget===e.target&&(n(),document.body.style.overflow="visible")},children:(0,v.jsx)("div",{className:S,children:t})}),Z)}var L=function(){var e=(0,w.useState)([]),n=(0,s.Z)(e,2),t=n[0],c=n[1],o=(0,w.useState)(!1),u=(0,s.Z)(o,2),d=u[0],m=u[1],h=(0,w.useState)(null),f=(0,s.Z)(h,2),_=f[0],x=f[1],p=(0,w.useState)(!1),g=(0,s.Z)(p,2),b=g[0],N=g[1];(0,w.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,C();case 4:n=e.sent,c((0,r.Z)(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),x(e.t0.message);case 11:return e.prev=11,m(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h1",{className:y,children:"Catalog rental cars"}),(0,v.jsx)("ul",{className:k,children:(0,v.jsx)(j,{cars:t})}),b&&(0,v.jsx)(E,{onClose:function(){N((function(e){return!e}))}}),d&&(0,v.jsx)(l.a,{}),_&&(0,v.jsx)("h1",{children:"Something went wrong..."})]})}}}]);
//# sourceMappingURL=660.8daabb58.chunk.js.map