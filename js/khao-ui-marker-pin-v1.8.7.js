import{c as p,S as d,i as f,f as c,s as h,a as k,e as l,A as g,d as m,G as u,j as y,k as v,B as _,u as b,v as N,o as x,C as q}from"./svelte-chunk-D2PBfAEv.js";import{I as $}from"./khao-ui-icon-v1.8.7.js";function w(a){k(a,"svelte-1cyyqdu",':host{display:block;--khao-marker-pin-icon-color:var(--khao-sys-static-color-black);--khao-marker-pin-icon-bgcolor:var(--khao-sys-static-color-white)}.pin.svelte-1cyyqdu{width:32px;height:32px;border-radius:50% 50% 50% 0;position:relative;transform:rotate(-45deg);left:50%;top:50%}.pin.svelte-1cyyqdu::before{content:"";width:26px;height:26px;margin:3px 0 0 3px;position:absolute;background:var(--khao-marker-pin-icon-bgcolor);color:var(--khao-marker-pin-icon-color);border-radius:50%}.icon.svelte-1cyyqdu{position:absolute;top:0.3rem;left:0.4rem;transform:rotate(45deg);text-align:center}')}function C(a){let e,r,o,n;return o=new $({props:{iconName:a[1],sizeFactor:"5"}}),{c(){e=l("div"),r=l("span"),g(o.$$.fragment),m(r,"class","icon svelte-1cyyqdu"),u(e,"background-color",a[0]),m(e,"class","pin svelte-1cyyqdu")},m(t,s){y(t,e,s),v(e,r),_(o,r,null),n=!0},p(t,[s]){const i={};s&2&&(i.iconName=t[1]),o.$set(i),(!n||s&1)&&u(e,"background-color",t[0])},i(t){n||(b(o.$$.fragment,t),n=!0)},o(t){N(o.$$.fragment,t),n=!1},d(t){t&&x(e),q(o)}}}function I(a,e,r){let{color:o}=e,{iconName:n}=e;return a.$$set=t=>{"color"in t&&r(0,o=t.color),"iconName"in t&&r(1,n=t.iconName)},[o,n]}class S extends d{constructor(e){super(),f(this,e,I,C,h,{color:0,iconName:1},w)}get color(){return this.$$.ctx[0]}set color(e){this.$$set({color:e}),c()}get iconName(){return this.$$.ctx[1]}set iconName(e){this.$$set({iconName:e}),c()}}customElements.define("khao-map-marker-pin",p(S,{color:{},iconName:{}},[],[],!0));
