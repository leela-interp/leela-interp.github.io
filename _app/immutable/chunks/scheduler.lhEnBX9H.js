var B=Object.defineProperty;var O=(t,e,n)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(O(t,typeof e!="symbol"?e+"":e,n),n);function G(){}function R(t,e){for(const n in e)t[n]=e[n];return t}function z(t){return t()}function lt(){return Object.create(null)}function F(t){t.forEach(z)}function ct(t){return typeof t=="function"}function rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function st(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function ot(t){return Object.keys(t).length===0}function I(t,...e){if(t==null){for(const i of e)i(void 0);return G}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ut(t,e,n){t.$$.on_destroy.push(I(e,n))}function at(t,e,n,i){if(t){const l=L(t,e,n,i);return t[0](l)}}function L(t,e,n,i){return t[1]&&i?R(n.ctx.slice(),t[1](i(e))):n.ctx}function ft(t,e,n,i){if(t[2]&&i){const l=t[2](i(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const s=[],c=Math.max(e.dirty.length,l.length);for(let o=0;o<c;o+=1)s[o]=e.dirty[o]|l[o];return s}return e.dirty|l}return e.dirty}function _t(t,e,n,i,l,s){if(l){const c=L(e,n,i,s);t.p(c,l)}}function dt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ht(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}let y=!1;function mt(){y=!0}function pt(){y=!1}function U(t,e,n,i){for(;t<e;){const l=t+(e-t>>1);n(l)<=i?t=l+1:e=l}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&r.push(a)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let l=0;for(let r=0;r<e.length;r++){const u=e[r].claim_order,a=(l>0&&e[n[l]].claim_order<=u?l+1:U(1,l,q=>e[n[q]].claim_order,u))-1;i[r]=n[a]+1;const w=a+1;n[w]=r,l=Math.max(w,l)}const s=[],c=[];let o=e.length-1;for(let r=n[l]+1;r!=0;r=i[r-1]){for(s.push(e[r-1]);o>=r;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);s.reverse(),c.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<c.length;r++){for(;u<s.length&&c[r].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(c[r],a)}}function J(t,e){if(y){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function K(t,e,n){t.insertBefore(e,n||null)}function Q(t,e,n){y&&!n?J(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function M(t){return document.createElement(t)}function S(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function gt(){return v(" ")}function bt(){return v("")}function xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function V(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Et(t,e){for(const n in e)V(t,n,e[n])}function Tt(t){return t.dataset.svelteH}function vt(t){return Array.from(t.childNodes)}function j(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,i,l=!1){j(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,l||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,l?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function C(t,e,n,i){return P(t,l=>l.nodeName===e,l=>{const s=[];for(let c=0;c<l.attributes.length;c++){const o=l.attributes[c];n[o.name]||s.push(o.name)}s.forEach(c=>l.removeAttribute(c))},()=>i(e))}function Nt(t,e,n){return C(t,e,n,M)}function wt(t,e,n){return C(t,e,n,S)}function X(t,e){return P(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>v(e),!0)}function At(t){return X(t," ")}function A(t,e,n){for(let i=n;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===e)return i}return-1}function kt(t,e){const n=A(t,"HTML_TAG_START",0),i=A(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new g(e);j(t);const l=t.splice(n,i-n+1);E(l[0]),E(l[l.length-1]);const s=l.slice(1,l.length-1);if(s.length===0)return new g(e);for(const c of s)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new g(e,s)}function Ht(t,e){e=""+e,t.data!==e&&(t.data=e)}function Lt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function Mt(t,e,n){t.classList.toggle(e,!!n)}function Y(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function St(t,e){const n=[];let i=0;for(const l of e.childNodes)if(l.nodeType===8){const s=l.textContent.trim();s===`HEAD_${t}_END`?(i-=1,n.push(l)):s===`HEAD_${t}_START`&&(i+=1,n.push(l))}else i>0&&n.push(l);return n}class Z{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=S(n.nodeName):this.e=M(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)K(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class g extends Z{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)Q(this.t,this.n[i],n)}}function jt(t,e){return new t(e)}let p;function b(t){p=t}function N(){if(!p)throw new Error("Function called outside component initialization");return p}function Pt(t){N().$$.on_mount.push(t)}function Ct(t){N().$$.after_update.push(t)}function Dt(){const t=N();return(e,n,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[e];if(l){const s=Y(e,n,{cancelable:i});return l.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}const h=[],k=[];let d=[];const H=[],D=Promise.resolve();let T=!1;function $(){T||(T=!0,D.then(et))}function qt(){return $(),D}function tt(t){d.push(t)}const x=new Set;let _=0;function et(){if(_!==0)return;const t=p;do{try{for(;_<h.length;){const e=h[_];_++,b(e),nt(e.$$)}}catch(e){throw h.length=0,_=0,e}for(b(null),h.length=0,_=0;k.length;)k.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];x.has(n)||(x.add(n),n())}d.length=0}while(h.length);for(;H.length;)H.pop()();T=!1,x.clear(),b(t)}function nt(t){if(t.fragment!==null){t.update(),F(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(tt)}}function Bt(t){const e=[],n=[];d.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),d=e}export{Mt as $,F as A,lt as B,et as C,ct as D,ot as E,tt as F,Bt as G,p as H,b as I,z as J,h as K,$ as L,mt as M,pt as N,R as O,ht as P,xt as Q,Dt as R,S,g as T,wt as U,kt as V,Et as W,yt as X,st as Y,St as Z,Tt as _,gt as a,vt as b,Nt as c,X as d,M as e,E as f,At as g,J as h,Q as i,Ht as j,ut as k,at as l,dt as m,G as n,ft as o,bt as p,Ct as q,Pt as r,rt as s,v as t,_t as u,V as v,Lt as w,k as x,jt as y,qt as z};
