import{o as l,c as _,a as n,r as h,F as u,b as m,d as L,w as I,e as O,t as v,f as d,p as x,g,h as E,i as N,j as S}from"./vendor.d37c9a34.js";const j=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}};j();const P={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},A=n("g",{fill:"none"},[n("path",{d:"M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),q=[A];function B(t,o){return l(),_("svg",P,q)}var C={name:"heroicons-outline-external-link",render:B};var p=(t,o)=>{for(const[c,s]of o)t[c]=s;return t};const R={data(){return{open:!1,links:{to:[{to:"/",text:"Home"}],href:[{href:"https://github.com/Lyserith",text:"Github"}]}}}},H={class:"select-none sticky top-0 z-20"},M={class:"absolute w-full custom-header"},V={class:"max-w-7xl mx-auto px-4 flex justify-between lg:px-8"},F={class:"flex py-2 space-x-4 lg:space-x-8","aria-label":"Global navigation"},D=["href"],G={class:"mr-2"};function T(t,o,c,s,e,r){const i=h("router-link"),f=C;return l(),_("div",H,[n("header",M,[n("div",V,[n("nav",F,[(l(!0),_(u,null,m(e.links.to,a=>(l(),L(i,{key:a,to:a.to,class:"custom-button rounded-md py-2 px-3 inline-flex items-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"},{default:I(()=>[O(v(a.text),1)]),_:2},1032,["to"]))),128)),(l(!0),_(u,null,m(e.links.href,a=>(l(),_("a",{key:a,href:a.href,class:"custom-button rounded-md py-2 px-3 inline-flex items-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white",rel:"noopener"},[n("span",G,v(a.text),1),d(f,{class:"h-5 w-5"})],8,D))),128))])])])])}var W=p(R,[["render",T],["__scopeId","data-v-f0018da0"]]);const z={},y=t=>(x("data-v-9c3998dc"),t=t(),g(),t),K=y(()=>n("div",{class:"background"},null,-1)),Q=y(()=>n("div",{class:"doors"},[n("div",{class:"door"}),n("div",{class:"door other"})],-1));function Y(t,o){return l(),_(u,null,[K,Q],64)}var J=p(z,[["render",Y],["__scopeId","data-v-9c3998dc"]]);const U={},X={style:{overflow:"auto"},class:"custom-scroll"};function Z(t,o){const c=W,s=h("router-view"),e=J;return l(),_(u,null,[n("div",X,[d(c),d(s)]),d(e)],64)}var ee=p(U,[["render",Z]]);const te="modulepreload",w={},oe="/",se=function(o,c){return!c||c.length===0?o():Promise.all(c.map(s=>{if(s=`${oe}${s}`,s in w)return;w[s]=!0;const e=s.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":te,e||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),e)return new Promise((f,a)=>{i.addEventListener("load",f),i.addEventListener("error",a)})})).then(()=>o())};const ne={data(){return{}}},re=t=>(x("data-v-bca7e8e0"),t=t(),g(),t),ce={class:"prose-lg lg:text-xl text-white font-mono"},ie=re(()=>n("div",{style:{background:"linear-gradient(330deg, rgba(141,75,99,1) 0%, rgba(97,65,79,1) 50%, rgba(55,39,49,1) 100%)"}},[n("div",{class:"full-height flex flex-col justify-center py-40"},[n("div",{class:"mx-auto font-sans font-light text-6xl sm:text-7xl lg:text-8xl sm:mt-2 lg:mt-4"},"Lyserith"),n("div",{class:"mx-auto mt-6 text-2xl sm:text-3xl lg:text-4xl"},[n("i",null,"\u30EA\u30BB\u30EA\u30B9")])])],-1)),ae=[ie];function le(t,o,c,s,e,r){return l(),_("div",ce,ae)}var _e=p(ne,[["render",le],["__scopeId","data-v-bca7e8e0"]]);const ue=[{name:"index",path:"/",component:_e,props:!0},{name:"all",path:"/:all(.*)*",component:()=>se(()=>import("./[...all].8d32dcb6.js"),["assets/[...all].8d32dcb6.js","assets/vendor.d37c9a34.js"]),props:!0}],$=E({history:N(),routes:ue});function b(t){return!!Object.keys(t.query).length}$.beforeEach((t,o,c)=>{!b(t)&&b(o)?c({...t,query:o.query}):c()});const k=S(ee);k.use($);k.mount("#app");export{p as _};
