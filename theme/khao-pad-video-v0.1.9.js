import{v as j,B as G,P as H,J as g,$ as J,g as R,D as f,w as b,H as A,X as v,O as m,W as S,K as $,i as x,S as z,C as V,N as D,R as I,A as W,c as E,o as B,E as X,e as K,L,k as Y,f as Z}from"./svelte-chunk-vhzq62JZ.js";import{K as _}from"./khao-ui-image-v2.0.0.js";import{u as q}from"./khao-ui-icon-v2.0.0.js";function M(a){R(a,"svelte-ne2o5l",`:host{--khao-video-consent-color:var(--khao-sys-color-neutral80);--khao-video-consent-background:var(--khao-sys-static-color-black);--khao-video-consent-font-size:var(--khao-sys-size-typography-2);--khao-video-caption-line-height:var(--khao-sys-size-typography-3);--khao-video-caption-color:var(--khao-sys-color-neutral30);--khao-video-caption-font-size:var(--khao-sys-size-typography-2);--khao-video-caption-line-height:var(--khao-sys-size-typography-3);--khao-video-caption-font-style:italic;--khao-video-caption-spacing:var(--khao-sys-size-regular-1)}.video-wrapper.svelte-ne2o5l{max-width:var(--khao-video-width);max-height:var(--khao-video-height)}.preview-wrapper.svelte-ne2o5l{position:relative;display:block;background-color:var(--khao-sys-static-color-black)}.preview-wrapper.svelte-ne2o5l:focus-visible{outline:var(--khao-sys-size-regular-1) solid var(--khao-sys-color-tertiary);outline-offset:var(--khao-sys-size-regular-5);border-radius:var(--khao-sys-shape-corner-medium)}.preview-icon.svelte-ne2o5l{position:absolute;color:var(--khao-sys-static-color-white);top:50%;left:50%;opacity:0.9;margin:calc(var(--khao-sys-size-regular-10) * -1) 0 0
      calc(var(--khao-sys-size-regular-10) * -1);width:var(--khao-sys-size-regular-18);height:var(--khao-sys-size-regular-18)}.consent-text.svelte-ne2o5l{position:absolute;bottom:0;left:0;padding:var(--khao-sys-size-regular-4);background:var(--khao-video-consent-background);color:var(--khao-video-consent-color);font-size:var(--khao-video-consent-font-size);line-height:var(--khao-video-caption-line-height);text-align:center}.video-wrapper.svelte-ne2o5l{display:block;margin:0 auto}.video-frame.svelte-ne2o5l{margin:0;width:100%;height:auto;aspect-ratio:4/3}.caption.svelte-ne2o5l{padding-top:var(--khao-video-caption-spacing);text-align:center;font-size:var(--khao-video-caption-font-size);line-height:var(--khao-video-caption-line-height);font-style:var(--khao-video-caption-font-style);color:var(--khao-video-caption-color)}`)}function N(a){let t,e,c,n,u,p,s,i,r,l,k,w;return e=new _({props:{src:a[5],title:a[2],width:a[6],height:a[7],webp:"true",lazyLoading:"true"}}),i=new q({props:{iconName:"youtube",sizeFactor:"20"}}),{c(){t=f("a"),E(e.$$.fragment),c=b(),n=f("div"),u=A(a[4]),p=b(),s=f("div"),E(i.$$.fragment),v(n,"class","consent-text svelte-ne2o5l"),v(s,"class","preview-icon svelte-ne2o5l"),v(t,"class","preview-wrapper svelte-ne2o5l"),v(t,"href",r=a[0]==="youtube"?`https://youtu.be/${a[1]}`:""),v(t,"target","_blank")},m(h,d){S(h,t,d),B(e,t,null),$(t,c),$(t,n),$(n,u),$(t,p),$(t,s),B(i,s,null),l=!0,k||(w=X(t,"click",a[12]),k=!0)},p(h,d){const y={};d&32&&(y.src=h[5]),d&4&&(y.title=h[2]),d&64&&(y.width=h[6]),d&128&&(y.height=h[7]),e.$set(y),(!l||d&16)&&D(u,h[4]),(!l||d&3&&r!==(r=h[0]==="youtube"?`https://youtu.be/${h[1]}`:""))&&v(t,"href",r)},i(h){l||(x(e.$$.fragment,h),x(i.$$.fragment,h),l=!0)},o(h){z(e.$$.fragment,h),z(i.$$.fragment,h),l=!1},d(h){h&&I(t),K(e),K(i),k=!1,w()}}}function P(a){let t,e;return{c(){t=f("iframe"),v(t,"class","video-frame svelte-ne2o5l"),m(t,"max-width",a[6]+"px"),v(t,"title",a[2]),L(t.src,e=a[11])||v(t,"src",e),v(t,"frameborder","0"),v(t,"allow",`accelerometer; autoplay; 
encrypted-media; gyroscope; picture-in-picture`),t.allowFullscreen=!0},m(c,n){S(c,t,n)},p(c,n){n&64&&m(t,"max-width",c[6]+"px"),n&4&&v(t,"title",c[2]),n&2048&&!L(t.src,e=c[11])&&v(t,"src",e)},d(c){c&&I(t)}}}function Q(a){let t,e,c,n,u,p,s=a[8]&&N(a),i=a[9]&&P(a);return{c(){t=f("div"),s&&s.c(),e=b(),i&&i.c(),c=b(),n=f("div"),u=A(a[3]),v(n,"class","caption svelte-ne2o5l"),v(t,"class","video-wrapper svelte-ne2o5l"),m(t,"--khao-video-width",a[6]+"px"),m(t,"--khao-video-height",a[7]+"px")},m(r,l){S(r,t,l),s&&s.m(t,null),$(t,e),i&&i.m(t,null),$(t,c),$(t,n),$(n,u),a[16](n),p=!0},p(r,[l]){r[8]?s?(s.p(r,l),l&256&&x(s,1)):(s=N(r),s.c(),x(s,1),s.m(t,e)):s&&(Y(),z(s,1,1,()=>{s=null}),V()),r[9]?i?i.p(r,l):(i=P(r),i.c(),i.m(t,c)):i&&(i.d(1),i=null),(!p||l&8)&&D(u,r[3]),(!p||l&64)&&m(t,"--khao-video-width",r[6]+"px"),(!p||l&128)&&m(t,"--khao-video-height",r[7]+"px")},i(r){p||(x(s),p=!0)},o(r){z(s),p=!1},d(r){r&&I(t),s&&s.d(),i&&i.d(),a[16](null)}}}function U(a,t,e){let c=!1,n=!1,u;W(()=>{w==="true"?e(8,c=!0):e(9,n=!0)});let{type:p="youtube"}=t,{videoId:s=""}=t,{autoplay:i="false"}=t,{start:r=""}=t,{title:l=""}=t,{caption:k=""}=t,{awaitsConsent:w="false"}=t,{consentText:h=""}=t,{previewSrc:d=""}=t,{width:y="600"}=t,{height:T="450"}=t,C=p==="youtube"?`https://www.youtube-nocookie.com/embed/${s}?modestbranding=1`:"";p==="youtube"&&i==="true"&&(C+="&autoplay=1"),p==="youtube"&&r!==""&&(C+=`&start=${r}`);function F(o){o.stopPropagation(),o.preventDefault(),e(8,c=!1),e(9,n=!0)}function O(o){Z[o?"unshift":"push"](()=>{u=o,e(10,u)})}return a.$$set=o=>{"type"in o&&e(0,p=o.type),"videoId"in o&&e(1,s=o.videoId),"autoplay"in o&&e(13,i=o.autoplay),"start"in o&&e(14,r=o.start),"title"in o&&e(2,l=o.title),"caption"in o&&e(3,k=o.caption),"awaitsConsent"in o&&e(15,w=o.awaitsConsent),"consentText"in o&&e(4,h=o.consentText),"previewSrc"in o&&e(5,d=o.previewSrc),"width"in o&&e(6,y=o.width),"height"in o&&e(7,T=o.height)},[p,s,l,k,h,d,y,T,c,n,u,C,F,i,r,w,O]}class tt extends G{constructor(t){super(),H(this,t,U,Q,J,{type:0,videoId:1,autoplay:13,start:14,title:2,caption:3,awaitsConsent:15,consentText:4,previewSrc:5,width:6,height:7},M)}get type(){return this.$$.ctx[0]}set type(t){this.$$set({type:t}),g()}get videoId(){return this.$$.ctx[1]}set videoId(t){this.$$set({videoId:t}),g()}get autoplay(){return this.$$.ctx[13]}set autoplay(t){this.$$set({autoplay:t}),g()}get start(){return this.$$.ctx[14]}set start(t){this.$$set({start:t}),g()}get title(){return this.$$.ctx[2]}set title(t){this.$$set({title:t}),g()}get caption(){return this.$$.ctx[3]}set caption(t){this.$$set({caption:t}),g()}get awaitsConsent(){return this.$$.ctx[15]}set awaitsConsent(t){this.$$set({awaitsConsent:t}),g()}get consentText(){return this.$$.ctx[4]}set consentText(t){this.$$set({consentText:t}),g()}get previewSrc(){return this.$$.ctx[5]}set previewSrc(t){this.$$set({previewSrc:t}),g()}get width(){return this.$$.ctx[6]}set width(t){this.$$set({width:t}),g()}get height(){return this.$$.ctx[7]}set height(t){this.$$set({height:t}),g()}}customElements.define("khao-video",j(tt,{type:{},videoId:{},autoplay:{},start:{},title:{},caption:{},awaitsConsent:{},consentText:{},previewSrc:{},width:{},height:{}},[],[],!0));
