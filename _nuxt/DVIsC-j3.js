import{a as O,b as f,r as D,s as B,t as M,g as z,o as E,c as H,w as R,e as P,f as S,i as V,j as p}from"./Vzir-G6h.js";const j=e=>e==="defer"||e===!1;function K(...e){var g;const n=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(n);let[t,o,a={}]=e;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof o!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const s=O(),w=o,C=()=>f.value,b=()=>s.isHydrating?s.payload.data[t]:s.static.data[t];a.server??(a.server=!0),a.default??(a.default=C),a.getCachedData??(a.getCachedData=b),a.lazy??(a.lazy=!1),a.immediate??(a.immediate=!0),a.deep??(a.deep=f.deep),a.dedupe??(a.dedupe="cancel");const d=a.getCachedData(t,s),h=d!=null;if(!s._asyncData[t]||!a.immediate){(g=s.payload._errors)[t]??(g[t]=f.errorValue);const c=a.deep?D:B;s._asyncData[t]={data:c(h?d:a.default()),pending:D(!h),error:M(s.payload._errors,t),status:D("idle"),_default:a.default}}const r={...s._asyncData[t]};delete r._default,r.refresh=r.execute=(c={})=>{if(s._asyncDataPromises[t]){if(j(c.dedupe??a.dedupe))return s._asyncDataPromises[t];s._asyncDataPromises[t].cancelled=!0}if(c._initial||s.isHydrating&&c._initial!==!1){const l=c._initial?d:a.getCachedData(t,s);if(l!=null)return Promise.resolve(l)}r.pending.value=!0,r.status.value="pending";const u=new Promise((l,i)=>{try{l(w(s))}catch(y){i(y)}}).then(async l=>{if(u.cancelled)return s._asyncDataPromises[t];let i=l;a.transform&&(i=await a.transform(l)),a.pick&&(i=T(i,a.pick)),s.payload.data[t]=i,r.data.value=i,r.error.value=f.errorValue,r.status.value="success"}).catch(l=>{if(u.cancelled)return s._asyncDataPromises[t];r.error.value=V(l),r.data.value=p(a.default()),r.status.value="error"}).finally(()=>{u.cancelled||(r.pending.value=!1,delete s._asyncDataPromises[t])});return s._asyncDataPromises[t]=u,s._asyncDataPromises[t]},r.clear=()=>N(s,t);const _=()=>r.refresh({_initial:!0}),m=a.server!==!1&&s.payload.serverRendered;{const c=z();if(c&&m&&a.immediate&&!c.sp&&(c.sp=[]),c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const i=c._nuxtOnBeforeMountCbs;E(()=>{i.forEach(y=>{y()}),i.splice(0,i.length)}),H(()=>i.splice(0,i.length))}m&&s.isHydrating&&(r.error.value||d!=null)?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):c&&(s.payload.serverRendered&&s.isHydrating||a.lazy)&&a.immediate?c._nuxtOnBeforeMountCbs.push(_):a.immediate&&_();const u=S();if(a.watch){const i=R(a.watch,()=>r.refresh());u&&P(i)}const l=s.hook("app:data:refresh",async i=>{(!i||i.includes(t))&&await r.refresh()});u&&P(l)}const v=Promise.resolve(s._asyncDataPromises[t]).then(()=>r);return Object.assign(v,r),v}function I(...e){const n=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(n);const[t,o,a={}]=e;return K(t,o,{...a,lazy:!0},null)}function N(e,n){n in e.payload.data&&(e.payload.data[n]=void 0),n in e.payload._errors&&(e.payload._errors[n]=f.errorValue),e._asyncData[n]&&(e._asyncData[n].data.value=p(e._asyncData[n]._default()),e._asyncData[n].error.value=f.errorValue,e._asyncData[n].pending.value=!1,e._asyncData[n].status.value="idle"),n in e._asyncDataPromises&&(e._asyncDataPromises[n]&&(e._asyncDataPromises[n].cancelled=!0),e._asyncDataPromises[n]=void 0)}function T(e,n){const t={};for(const o of n)t[o]=e[o];return t}export{I as a,K as u};
