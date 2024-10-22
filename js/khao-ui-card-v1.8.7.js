import{c as N,S as L,i as x,f,s as C,a as D,r as F,e as g,b,d as v,j as _,k as m,u,v as y,w as I,x as S,y as j,z as q,o as p,t as A,m as B,A as E,B as T,C as G,D as H}from"./svelte-chunk-D2PBfAEv.js";import{I as J}from"./khao-ui-icon-v1.8.7.js";const K="surface-dark",M="elevated";function O(c){D(c,"svelte-s0cam0",":host{--khao-card-width:600px;--khao-card-min-height:100px;--khao-card-top-space:var(--khao-sys-size-regular-4);--khao-card-trailing-space:var(--khao-sys-size-regular-6);--khao-card-container-shape:var(--khao-sys-shape-corner-small);--khao-card-elevation-level:1;--khao-card-elevation-level-shadow:none;--khao-card-outline:none;--khao-card-title-size:var(--khao-sys-size-typography-9);--khao-card-title-space:var(--khao-sys-size-regular-2);--khao-card-icon-size:var(--khao-sys-size-regular-7);--khao-card-icon-space:var(--khao-sys-size-regular-2)}.card.svelte-s0cam0{box-sizing:border-box;display:block;padding:var(--khao-card-top-space) var(--khao-card-trailing-space);margin:0 auto 0 auto;width:100%;max-width:var(--khao-card-width);min-height:var(--khao-card-min-height);line-height:1.5rem;font-family:inherit;border-radius:var(--khao-card-container-shape);box-shadow:var(--khao-card-elevation-level-shadow);z-index:var(--khao-card-elevation-level);outline:var(--khao-card-outline);background-color:var(--khao-card-container-color);color:var(--khao-card-text-color)}.title.svelte-s0cam0{font-size:var(--khao-card-title-size);font-weight:800;margin-bottom:var(--khao-card-title-space)}.content.svelte-s0cam0{line-height:var(--khao-card-icon-size)}.icon-wrapper.svelte-s0cam0{float:left;margin-right:var(--khao-card-icon-space);width:var(--khao-card-icon-size);height:var(--khao-card-icon-size)}.card-surface.svelte-s0cam0{--khao-card-container-color:var(--khao-sys-color-surface);--khao-card-text-color:var(--khao-sys-color-on-surface)}.card-surface-dark.svelte-s0cam0{--khao-card-container-color:var(--khao-sys-color-surface-variantd30);--khao-card-text-color:var(--khao-sys-color-on-surface-variantd30)}.card-primary.svelte-s0cam0{--khao-card-container-color:var(--khao-sys-color-primary);--khao-card-text-color:var(--khao-sys-color-on-primary)}.card-secondary.svelte-s0cam0{--khao-card-container-color:var(--khao-sys-color-secondary);--khao-card-text-color:var(--khao-sys-color-on-secondary)}.card-tertiary.svelte-s0cam0{--khao-card-container-color:var(--khao-sys-color-tertiary);--khao-card-text-color:var(--khao-sys-color-on-tertiary)}.card-success.svelte-s0cam0{--khao-card-container-color:var(--khao-sys-static-color-green);--khao-card-text-color:var(--khao-sys-static-color-on-green)}.card-error.svelte-s0cam0{--khao-card-container-color:var(--khao-sys-static-color-red);--khao-card-text-color:var(--khao-sys-static-color-on-red)}.card-type-elevated.svelte-s0cam0{--khao-card-elevation-level:var(--khao-sys-elevation-level1-distance);--khao-card-elevation-level-shadow:var(--khao-sys-elevation-level1-shadow);--khao-card-outline:none}.card-type-filled.svelte-s0cam0{--khao-card-elevation-level:none;--khao-card-elevation-level-shadow:none;--khao-card-outline:none}.card-type-outlined.svelte-s0cam0{--khao-card-elevation-level:none;--khao-card-elevation-level-shadow:none;--khao-card-outline:1px solid var(--khao-sys-color-neutral30)}")}function w(c){let a,o;return{c(){a=g("div"),o=A(c[2]),v(a,"class","title svelte-s0cam0")},m(s,l){_(s,a,l),m(a,o)},p(s,l){l&4&&B(o,s[2])},d(s){s&&p(a)}}}function z(c){let a,o,s;return o=new J({props:{iconName:c[3],sizeFactor:"7"}}),{c(){a=g("div"),E(o.$$.fragment),v(a,"class","icon-wrapper svelte-s0cam0")},m(l,d){_(l,a,d),T(o,a,null),s=!0},p(l,d){const n={};d&8&&(n.iconName=l[3]),o.$set(n)},i(l){s||(u(o.$$.fragment,l),s=!0)},o(l){y(o.$$.fragment,l),s=!1},d(l){l&&p(a),G(o)}}}function P(c){let a,o,s,l,d,n,i=c[2]!==""&&w(c),r=c[3]!==""&&z(c);const k=c[6].default,e=F(k,c,c[5],null);return{c(){a=g("div"),i&&i.c(),o=b(),s=g("div"),r&&r.c(),l=b(),e&&e.c(),v(s,"class","content svelte-s0cam0"),v(a,"class",d="card card-"+c[0]+" card-type-"+c[1]+" svelte-s0cam0"),v(a,"aria-label",c[4])},m(t,h){_(t,a,h),i&&i.m(a,null),m(a,o),m(a,s),r&&r.m(s,null),m(s,l),e&&e.m(s,null),n=!0},p(t,[h]){t[2]!==""?i?i.p(t,h):(i=w(t),i.c(),i.m(a,o)):i&&(i.d(1),i=null),t[3]!==""?r?(r.p(t,h),h&8&&u(r,1)):(r=z(t),r.c(),u(r,1),r.m(s,l)):r&&(H(),y(r,1,1,()=>{r=null}),I()),e&&e.p&&(!n||h&32)&&S(e,k,t,t[5],n?q(k,t[5],h,null):j(t[5]),null),(!n||h&3&&d!==(d="card card-"+t[0]+" card-type-"+t[1]+" svelte-s0cam0"))&&v(a,"class",d),(!n||h&16)&&v(a,"aria-label",t[4])},i(t){n||(u(r),u(e,t),n=!0)},o(t){y(r),y(e,t),n=!1},d(t){t&&p(a),i&&i.d(),r&&r.d(),e&&e.d(t)}}}function Q(c,a,o){let{$$slots:s={},$$scope:l}=a,{filling:d=K}=a,{type:n=M}=a,{title:i=""}=a,{iconName:r=""}=a,{ariaLabel:k=""}=a;return c.$$set=e=>{"filling"in e&&o(0,d=e.filling),"type"in e&&o(1,n=e.type),"title"in e&&o(2,i=e.title),"iconName"in e&&o(3,r=e.iconName),"ariaLabel"in e&&o(4,k=e.ariaLabel),"$$scope"in e&&o(5,l=e.$$scope)},[d,n,i,r,k,l,s]}class R extends L{constructor(a){super(),x(this,a,Q,P,C,{filling:0,type:1,title:2,iconName:3,ariaLabel:4},O)}get filling(){return this.$$.ctx[0]}set filling(a){this.$$set({filling:a}),f()}get type(){return this.$$.ctx[1]}set type(a){this.$$set({type:a}),f()}get title(){return this.$$.ctx[2]}set title(a){this.$$set({title:a}),f()}get iconName(){return this.$$.ctx[3]}set iconName(a){this.$$set({iconName:a}),f()}get ariaLabel(){return this.$$.ctx[4]}set ariaLabel(a){this.$$set({ariaLabel:a}),f()}}customElements.define("khao-card",N(R,{filling:{},type:{},title:{},iconName:{},ariaLabel:{}},["default"],[],!0));
