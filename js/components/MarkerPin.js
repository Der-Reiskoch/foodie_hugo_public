import{c as p,S as d,i as f,f as c,s as h,a as g,e as l,o as k,d as m,F as u,g as y,h as _,p as v,k as b,l as N,n as q,q as x}from"./index.js";import{I as $}from"./Icon.js";function w(a){g(a,"svelte-1cyyqdu",':host{display:block;--khao-marker-pin-icon-color:var(--khao-sys-static-color-black);--khao-marker-pin-icon-bgcolor:var(--khao-sys-static-color-white)}.pin.svelte-1cyyqdu{width:32px;height:32px;border-radius:50% 50% 50% 0;position:relative;transform:rotate(-45deg);left:50%;top:50%}.pin.svelte-1cyyqdu::before{content:"";width:26px;height:26px;margin:3px 0 0 3px;position:absolute;background:var(--khao-marker-pin-icon-bgcolor);color:var(--khao-marker-pin-icon-color);border-radius:50%}.icon.svelte-1cyyqdu{position:absolute;top:0.3rem;left:0.4rem;transform:rotate(45deg);text-align:center}')}function F(a){let e,r,o,n;return o=new $({props:{iconName:a[1],sizeFactor:"5"}}),{c(){e=l("div"),r=l("span"),k(o.$$.fragment),m(r,"class","icon svelte-1cyyqdu"),u(e,"background-color",a[0]),m(e,"class","pin svelte-1cyyqdu")},m(t,s){y(t,e,s),_(e,r),v(o,r,null),n=!0},p(t,[s]){const i={};s&2&&(i.iconName=t[1]),o.$set(i),(!n||s&1)&&u(e,"background-color",t[0])},i(t){n||(b(o.$$.fragment,t),n=!0)},o(t){N(o.$$.fragment,t),n=!1},d(t){t&&q(e),x(o)}}}function I(a,e,r){let{color:o}=e,{iconName:n}=e;return a.$$set=t=>{"color"in t&&r(0,o=t.color),"iconName"in t&&r(1,n=t.iconName)},[o,n]}class S extends d{constructor(e){super(),f(this,e,I,F,h,{color:0,iconName:1},w)}get color(){return this.$$.ctx[0]}set color(e){this.$$set({color:e}),c()}get iconName(){return this.$$.ctx[1]}set iconName(e){this.$$set({iconName:e}),c()}}customElements.define("khao-map-marker-pin",p(S,{color:{},iconName:{}},[],[],!0));
