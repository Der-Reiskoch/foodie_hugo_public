import{v as u,B as d,P as h,J as s,$,g,D as l,c as k,X as m,O as p,W as y,K as f,o as v,i as b,S as x,R as N,e as q}from"./svelte-chunk-vhzq62JZ.js";import{u as w}from"./khao-ui-icon-v2.0.0.js";function S(a){g(a,"svelte-1cyyqdu",':host{display:block;--khao-marker-pin-icon-color:var(--khao-sys-static-color-black);--khao-marker-pin-icon-bgcolor:var(--khao-sys-static-color-white)}.pin.svelte-1cyyqdu{width:32px;height:32px;border-radius:50% 50% 50% 0;position:relative;transform:rotate(-45deg);left:50%;top:50%}.pin.svelte-1cyyqdu::before{content:"";width:26px;height:26px;margin:3px 0 0 3px;position:absolute;background:var(--khao-marker-pin-icon-bgcolor);color:var(--khao-marker-pin-icon-color);border-radius:50%}.icon.svelte-1cyyqdu{position:absolute;top:0.3rem;left:0.4rem;transform:rotate(45deg);text-align:center}')}function B(a){let o,c,e,r;return e=new w({props:{iconName:a[1],sizeFactor:"5"}}),{c(){o=l("div"),c=l("span"),k(e.$$.fragment),m(c,"class","icon svelte-1cyyqdu"),p(o,"background-color",a[0]),m(o,"class","pin svelte-1cyyqdu")},m(t,i){y(t,o,i),f(o,c),v(e,c,null),r=!0},p(t,[i]){const n={};i&2&&(n.iconName=t[1]),e.$set(n),(!r||i&1)&&p(o,"background-color",t[0])},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){x(e.$$.fragment,t),r=!1},d(t){t&&N(o),q(e)}}}function O(a,o,c){let{color:e}=o,{iconName:r}=o;return a.$$set=t=>{"color"in t&&c(0,e=t.color),"iconName"in t&&c(1,r=t.iconName)},[e,r]}class P extends d{constructor(o){super(),h(this,o,O,B,$,{color:0,iconName:1},S)}get color(){return this.$$.ctx[0]}set color(o){this.$$set({color:o}),s()}get iconName(){return this.$$.ctx[1]}set iconName(o){this.$$set({iconName:o}),s()}}customElements.define("khao-map-marker-pin",u(P,{color:{},iconName:{}},[],[],!0));
