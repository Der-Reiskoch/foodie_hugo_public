import{c as x,S as N,i as B,f as k,s as G,a as S,e as j,t as I,b as q,d as s,j as w,k as d,l as E,m as R,r as m,u as v,v as A,o as C,w as D,x as F,y as H,p as J,z as K}from"./index.js";import{I as L}from"./Icon.js";function M(o){S(o,"svelte-jhzfyx",`.button.svelte-jhzfyx{appearance:none;background:transparent;border:none;cursor:pointer;flex-grow:0;flex-shrink:0;font:inherit;padding:0;user-select:none;&:focus {
    outline: none !important;
  }}:host{--khao-button-container-color:var(--khao-sys-color-container);--khao-button-label-text-color:var(--khao-sys-color-on-container);--khao-button-state-layer-color:var(--khao-sys-color-on-container);--khao-button-label-font-weight:var(
      --khao-sys-typescale-label-medium-weight-prominent
    );--khao-button-container-shape:var(--khao-sys-shape-corner-medium);--khao-button-leading-space:var(--khao-sys-size-regular-5);--khao-button-trailing-space:var(--khao-sys-size-regular-5);--khao-button-icon-color:var(--khao-sys-color-on-container);--khao-button-icon-leading-space:var(--khao-sys-size-regular-2);--khao-button-icon-size-compact:var(--khao-sys-size-regular-4);--khao-button-icon-size-medium:var(--khao-sys-size-regular-5);--khao-button-icon-size-large:var(--khao-sys-size-regular-6);--khao-button-height-compact:var(--khao-sys-size-regular-8);--khao-button-width-compact:120px;--khao-button-height-medium:var(--khao-sys-size-regular-10);--khao-button-width-medium:150px;--khao-button-height-large:var(--khao-sys-size-regular-12);--khao-button-width-large:180px;--khao-button-hover-state-layer-opacity:var(
      --khao-sys-state-hover-state-layer-opacity
    );--khao-button-focus-state-layer-opacity:var(
      --khao-sys-state-focus-state-layer-opacity
    );--khao-button-pressed-state-layer-opacity:var(
      --khao-sys-state-pressed-state-layer-opacity
    )}a.button.svelte-jhzfyx{text-decoration:none}.button.svelte-jhzfyx{display:inline-flex;color:var(--khao-button-label-text-color);background-color:var(--khao-button-container-color);align-items:center;justify-content:center;padding:0.2rem;border-radius:var(--khao-button-container-shape);font-weight:var(--khao-button-label-font-weight);cursor:pointer;padding-inline-start:var(--khao-button-leading-space);padding-inline-end:var(--khao-button-trailing-space);gap:var(--khao-button-icon-leading-space);transition:background-color 0.1s,
      color 0.2s;&:hover {
      background-color: color-mix(
        in srgb,
        var(--khao-button-container-color),
        var(--khao-button-state-layer-color)
          var(--khao-button-hover-state-layer-opacity)
      );
    };&:focus-visible {
      background-color: color-mix(
        in srgb,
        var(--khao-button-container-color),
        var(--khao-button-state-layer-color)
          var(--khao-button-focus-state-layer-opacity)
      );
    };&:active {
      background-color: color-mix(
        in srgb,
        var(--khao-button-container-color),
        var(--khao-button-state-layer-color)
          var(--khao-button-pressed-state-layer-opacity)
      );
    }}.button-size-compact.svelte-jhzfyx{min-width:var(--khao-button-width-compact);height:var(--khao-button-height-compact)}.button-size-medium.svelte-jhzfyx{min-width:var(--khao-button-width-medium);height:var(--khao-button-height-medium)}.button-size-large.svelte-jhzfyx{min-width:var(--khao-button-width-large);height:var(--khao-button-height-large)}.button-primary.svelte-jhzfyx{--khao-button-container-color:var(--khao-sys-color-primary);--khao-button-label-text-color:var(--khao-sys-color-on-primary);--khao-button-icon-color:var(--khao-sys-color-on-primary);--khao-button-state-layer-color:var(--khao-sys-color-on-primary)}.button-secondary.svelte-jhzfyx{--khao-button-container-color:var(--khao-sys-color-secondary);--khao-button-label-text-color:var(--khao-sys-color-on-secondary);--khao-button-icon-color:var(--khao-sys-color-on-secondary);--khao-button-state-layer-color:var(--khao-sys-color-on-secondary)}.button-tertiary.svelte-jhzfyx{--khao-button-container-color:var(--khao-sys-color-tertiary);--khao-button-label-text-color:var(--khao-sys-color-on-tertiary);--khao-button-icon-color:var(--khao-sys-color-on-tertiary);--khao-button-state-layer-color:var(--khao-sys-color-on-tertiary)}.icon.svelte-jhzfyx{stroke:var(--khao-button-icon-color);fill:var(--khao-button-icon-color)}.icon-size-compact.svelte-jhzfyx{height:var(--khao-button-icon-size-compact);width:var(--khao-button-icon-size-compact)}.icon-size-medium.svelte-jhzfyx{height:var(--khao-button-icon-size-medium);width:var(--khao-button-icon-size-medium)}.icon-size-large.svelte-jhzfyx{height:var(--khao-button-icon-size-large);width:var(--khao-button-icon-size-large)}`)}function z(o){let t,e,u,c;return e=new L({props:{iconName:o[9]}}),{c(){t=j("div"),D(e.$$.fragment),s(t,"class",u="icon icon-size-"+o[6]+" svelte-jhzfyx")},m(r,h){w(r,t,h),F(e,t,null),c=!0},p(r,h){const i={};h&512&&(i.iconName=r[9]),e.$set(i),(!c||h&64&&u!==(u="icon icon-size-"+r[6]+" svelte-jhzfyx"))&&s(t,"class",u)},i(r){c||(m(e.$$.fragment,r),c=!0)},o(r){v(e.$$.fragment,r),c=!1},d(r){r&&C(t),H(e)}}}function O(o){let t,e,u,c,r,h,i,y,f,n=o[9]!==""&&z(o);return{c(){t=j("a"),e=I(o[0]),u=q(),n&&n.c(),s(t,"class",c="button button-"+o[5]+" button-size-"+o[6]+" svelte-jhzfyx"),s(t,"title",o[1]),s(t,"href",o[2]),s(t,"target",o[4]),s(t,"rel",o[3]),s(t,"style",r=_(o[7],o[8])),s(t,"role",h=p(o[2],o[10]))},m(b,l){w(b,t,l),d(t,e),d(t,u),n&&n.m(t,null),i=!0,y||(f=E(t,"click",function(){J(o[10])&&o[10].apply(this,arguments)}),y=!0)},p(b,[l]){o=b,(!i||l&1)&&R(e,o[0]),o[9]!==""?n?(n.p(o,l),l&512&&m(n,1)):(n=z(o),n.c(),m(n,1),n.m(t,null)):n&&(K(),v(n,1,1,()=>{n=null}),A()),(!i||l&96&&c!==(c="button button-"+o[5]+" button-size-"+o[6]+" svelte-jhzfyx"))&&s(t,"class",c),(!i||l&2)&&s(t,"title",o[1]),(!i||l&4)&&s(t,"href",o[2]),(!i||l&16)&&s(t,"target",o[4]),(!i||l&8)&&s(t,"rel",o[3]),(!i||l&384&&r!==(r=_(o[7],o[8])))&&s(t,"style",r),(!i||l&1028&&h!==(h=p(o[2],o[10])))&&s(t,"role",h)},i(b){i||(m(n),i=!0)},o(b){v(n),i=!1},d(b){b&&C(t),n&&n.d(),y=!1,f()}}}function _(o,t){var e=o!==""&&t!==""?`--khao-button-container-color:${o}; --khao-button-label-text-color:${t}; --khao-button-icon-color: ${t}; --khao-button-state-layer-color: ${t}`:"";return e}function p(o,t){return o===null&&t!==null?"button":""}function P(o,t,e){let{label:u}=t,{title:c=u}=t,{href:r=null}=t,{rel:h=null}=t,{target:i=null}=t,{priority:y="primary"}=t,{size:f="medium"}=t,{customBGColor:n=""}=t,{customColor:b=""}=t,{iconName:l=""}=t,{onClick:g=null}=t;return o.$$set=a=>{"label"in a&&e(0,u=a.label),"title"in a&&e(1,c=a.title),"href"in a&&e(2,r=a.href),"rel"in a&&e(3,h=a.rel),"target"in a&&e(4,i=a.target),"priority"in a&&e(5,y=a.priority),"size"in a&&e(6,f=a.size),"customBGColor"in a&&e(7,n=a.customBGColor),"customColor"in a&&e(8,b=a.customColor),"iconName"in a&&e(9,l=a.iconName),"onClick"in a&&e(10,g=a.onClick)},[u,c,r,h,i,y,f,n,b,l,g]}class Q extends N{constructor(t){super(),B(this,t,P,O,G,{label:0,title:1,href:2,rel:3,target:4,priority:5,size:6,customBGColor:7,customColor:8,iconName:9,onClick:10},M)}get label(){return this.$$.ctx[0]}set label(t){this.$$set({label:t}),k()}get title(){return this.$$.ctx[1]}set title(t){this.$$set({title:t}),k()}get href(){return this.$$.ctx[2]}set href(t){this.$$set({href:t}),k()}get rel(){return this.$$.ctx[3]}set rel(t){this.$$set({rel:t}),k()}get target(){return this.$$.ctx[4]}set target(t){this.$$set({target:t}),k()}get priority(){return this.$$.ctx[5]}set priority(t){this.$$set({priority:t}),k()}get size(){return this.$$.ctx[6]}set size(t){this.$$set({size:t}),k()}get customBGColor(){return this.$$.ctx[7]}set customBGColor(t){this.$$set({customBGColor:t}),k()}get customColor(){return this.$$.ctx[8]}set customColor(t){this.$$set({customColor:t}),k()}get iconName(){return this.$$.ctx[9]}set iconName(t){this.$$set({iconName:t}),k()}get onClick(){return this.$$.ctx[10]}set onClick(t){this.$$set({onClick:t}),k()}}customElements.define("khao-button",x(Q,{label:{},title:{},href:{},rel:{},target:{},priority:{},size:{},customBGColor:{},customColor:{},iconName:{},onClick:{}},[],[],!0));export{Q as B};
