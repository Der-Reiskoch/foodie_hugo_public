import{v as O,B as q,P as B,J as d,$ as P,g as E,D as F,X as z,W as C,j as v,R as A,w as M,K as T,i as u,S as p,C as w,A as D,c as I,o as R,e as W,k as x,f as H}from"./svelte-chunk-vhzq62JZ.js";import{T as J}from"./khao-ui-button.js";import"./khao-ui-icon.js";const K=(r,t)=>{const n=o=>{o.forEach(s=>{s.isIntersecting&&t&&t()})},e={root:document,rootMargin:"0px 0px 100px 0px",threshold:1};new IntersectionObserver(n,e).observe(r)},k=["1"],N=(r,t,n)=>{const e=document.location.href;let o="1",s="2",i=`${e}${t}${s}`;if(e.includes(t)){const a=e.split(t);a.length===2&&(o=a[1].replace("/",""),s=`${parseInt(o,10)+1}`,i=e.replace(`/${o}`,`/${s}`))}k.indexOf(s)===-1?(fetch(i).then(a=>{if(!a.ok)throw new Error(`error loading next page ${i} , perhaps we have reached the end!`);return a.text()}).then(a=>{const g=document.querySelector(`${r}:last-of-type`);var $=document.createElement("template");$.innerHTML=a,$.content.querySelectorAll(r).forEach(c=>{var h;(h=g==null?void 0:g.parentElement)==null||h.appendChild(c)}),n!==void 0&&n(),history.pushState({},"",i)}).catch(a=>{console.log(a)}),k.push(s)):console.log("already added",s)};function Q(r){E(r,"svelte-wcxk2y",":host{--khao-spinner-color:var(--khao-sys-color-neutral30);--khao-spinner-size:var(--khao-sys-size-regular-10)}.spinner.svelte-wcxk2y{width:var(--khao-spinner-size);height:var(--khao-spinner-size);border:5px solid var(--khao-spinner-color);border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:svelte-wcxk2y-rotation 1s linear infinite}@keyframes svelte-wcxk2y-rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}")}function U(r){let t;return{c(){t=F("div"),z(t,"class","spinner svelte-wcxk2y")},m(n,e){C(n,t,e)},p:v,i:v,o:v,d(n){n&&A(t)}}}class X extends q{constructor(t){super(),B(this,t,null,U,P,{},Q)}}customElements.define("khao-spinner",O(X,{},[],[],!0));function V(r){E(r,"svelte-14hyps5",".infinite-scroll.svelte-14hyps5{display:flex;justify-content:space-around;width:100%;height:2rem}")}function S(r){let t,n;return t=new J({props:{label:r[0],onClick:r[4]}}),{c(){I(t.$$.fragment)},m(e,o){R(t,e,o),n=!0},p(e,o){const s={};o&1&&(s.label=e[0]),t.$set(s)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){W(t,e)}}}function L(r){let t,n;return t=new X({}),{c(){I(t.$$.fragment)},m(e,o){R(t,e,o),n=!0},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){W(t,e)}}}function Y(r){let t,n,e,o=r[1]&&S(r),s=r[2]&&L();return{c(){t=F("div"),o&&o.c(),n=M(),s&&s.c(),z(t,"class","infinite-scroll svelte-14hyps5")},m(i,a){C(i,t,a),o&&o.m(t,null),T(t,n),s&&s.m(t,null),r[9](t),e=!0},p(i,[a]){i[1]?o?(o.p(i,a),a&2&&u(o,1)):(o=S(i),o.c(),u(o,1),o.m(t,n)):o&&(x(),p(o,1,1,()=>{o=null}),w()),i[2]?s?a&4&&u(s,1):(s=L(),s.c(),u(s,1),s.m(t,null)):s&&(x(),p(s,1,1,()=>{s=null}),w())},i(i){e||(u(o),u(s),e=!0)},o(i){p(o),p(s),e=!1},d(i){i&&A(t),o&&o.d(),s&&s.d(),r[9](null)}}}function Z(r,t,n){let e=!1,o=!1,s=1;const i=new CustomEvent("khao-infinite-scroll-loaded-more",{bubbles:!0}),a=()=>{s<parseInt(f,10)&&n(1,e=!0)},g=()=>{N(h,m,$),n(1,e=!1),n(2,o=!0),s++},$=()=>{n(1,e=!1),n(2,o=!1),window.dispatchEvent(i)};let c;D(()=>{b==="true"&&n(1,e=!0),K(c,a)});let{querySelector:h}=t,{paginationSlug:m}=t,{buttonLabel:y}=t,{numberOfPages:f="1"}=t,{showButtonOnFirstLoad:b="true"}=t;function j(l){H[l?"unshift":"push"](()=>{c=l,n(3,c)})}return r.$$set=l=>{"querySelector"in l&&n(5,h=l.querySelector),"paginationSlug"in l&&n(6,m=l.paginationSlug),"buttonLabel"in l&&n(0,y=l.buttonLabel),"numberOfPages"in l&&n(7,f=l.numberOfPages),"showButtonOnFirstLoad"in l&&n(8,b=l.showButtonOnFirstLoad)},[y,e,o,c,g,h,m,f,b,j]}class G extends q{constructor(t){super(),B(this,t,Z,Y,P,{querySelector:5,paginationSlug:6,buttonLabel:0,numberOfPages:7,showButtonOnFirstLoad:8},V)}get querySelector(){return this.$$.ctx[5]}set querySelector(t){this.$$set({querySelector:t}),d()}get paginationSlug(){return this.$$.ctx[6]}set paginationSlug(t){this.$$set({paginationSlug:t}),d()}get buttonLabel(){return this.$$.ctx[0]}set buttonLabel(t){this.$$set({buttonLabel:t}),d()}get numberOfPages(){return this.$$.ctx[7]}set numberOfPages(t){this.$$set({numberOfPages:t}),d()}get showButtonOnFirstLoad(){return this.$$.ctx[8]}set showButtonOnFirstLoad(t){this.$$set({showButtonOnFirstLoad:t}),d()}}customElements.define("khao-infinite-scroll",O(G,{querySelector:{},paginationSlug:{},buttonLabel:{},numberOfPages:{},showButtonOnFirstLoad:{}},[],[],!0));
