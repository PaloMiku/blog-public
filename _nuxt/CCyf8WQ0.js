import{d as f,l as e,n as m,p as h,C as c,q as s,V as v,j as n,Z as y,Q as b,B as r,a2 as x,_ as g}from"./Vzir-G6h.js";const B={class:"alert-title"},V=f({__name:"Alert",props:{type:{default:"tip"},icon:{},color:{},title:{},text:{}},setup(i){const t=i,a={tip:{icon:"ph:notepad-bold",color:"#3a7",title:"提醒"},info:{icon:"ph-info-bold",color:"var(--c-text-1)",title:"信息"},question:{icon:"ph:question-bold",color:"#3af",title:"问题"},warning:{icon:"ph:warning-bold",color:"#f80",title:"警告"},error:{icon:"ph:x-circle-bold",color:"#f33",title:"错误"}},o=e(()=>a[t.type]||a.tip),p=e(()=>t.icon||o.value.icon),d=e(()=>t.color||o.value.color),u=e(()=>t.title||o.value.title);return(l,q)=>{const _=y;return h(),m("div",{class:"alert card",style:x({"--c-primary":n(d)})},[c("div",B,[v(_,{name:n(p)},null,8,["name"]),s(l.$slots,"title",{},()=>[b(r(n(u)),1)],!0)]),s(l.$slots,"default",{},()=>[c("p",null,r(l.text),1)],!0)],4)}}}),N=Object.assign(g(V,[["__scopeId","data-v-c693aa49"]]),{__name:"Alert"});export{N as default};
