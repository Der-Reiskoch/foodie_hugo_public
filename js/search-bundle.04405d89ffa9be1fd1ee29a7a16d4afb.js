(()=>{var _e="https://bilder.koch-reis.de",Me="Leider nichts gefunden!",be="/index.json",we="Wonach suchst du?";var Ie="Bitte gib ein Suchwort mit mindestens drei Buchstaben ein";var Ee={"asia shop":"asial\xE4den",asiashop:"asial\xE4den",banoi:"ban\xF4i",bittermelone:"bittergurke",bombai:"bombay",broccoli:"brokkoli",burma:"myanmar",coconut:"kokosnuss","curry paste":"currypaste",currygericht:"curry","dad daew":"daet diau","dad deaw":"daet diau",enokipilze:"enoki",entensalat:"larb ped","fak thong":"fak tong",fakthong:"fak tong",faktong:"fak tong",faschiertes:"hackfleisch",fingerwurz:"krachai",fischsauce:"fischso\xDFe",fishsauce:"fischso\xDFe",fisolen:"bohnen",fondue:"hotpot","fried rice":"khao pad","ga prao":"ga prau",gambas:"garnelen",g\u00E4ng:"gaeng",gaprau:"ga prau",geang:"gaeng","gaeng daeng":"gaeng phed","gaeng jued":"gaeng djued",gef\u00FChlte:"gef\xFCllte",gem\u00FCsecurry:"curry",gew\u00FCrzst\u00E4nder:"gew\xFCrzkarussel",gochuyang:"gochujang",goong:"gung","gra pau":"ga prau",grapau:"ga prau","hang lay":"hang lea","hot pot":"hotpot",huad:"lao pot","hung lay":"hang lea",jaew:"djau",jeaw:"djau","jim jum":"djim djum",kambodschanisch:"khmer",kata:"kratha","ka prao":"ga prau","kai jiao":"khai djiau",kai:"khai",kanom:"khanom","khanom jeeb":"khanom jeeb",karlrsruhe:"karlsruhe","kee mao":"khi mao",keemao:"khi mao","kiwi-sch\xE4ler":"streifensch\xE4ler",kiwisch\u00E4ler:"streifensch\xE4ler","konjak nudeln":"shirataki","kra pao":"ga prau","kra pau":"ga prau",krapao:"ga prau",krapau:"ga prau",krapow:"ga prau","la lot":"l\xE1 l\u1ED1t",laab:"laap",ladna:"rad na",laphet:"lahpet",larb:"laap",larp:"laap",masaman:"massaman",massamann:"massaman",mexico:"mexikanisch","mhu krob":"mhu grob",mee:"mie",mii:"mie",moo:"mhu",muh:"mhu",muu:"mhu","nam jim":"nam djim",namtok:"nam tok",normai:"nor mai",n\u00FCa:"nuea",nuae:"nuea",obergin:"aubergin",orlam:"or lam",padthai:"pad thai","pak choy":"pak choi",pakchoi:"pak choi",pakchoy:"pak choi",palabog:"palabok",panang:"panaeng",pan\u00E4ng:"panaeng",paneng:"panaeng","papaya salat":"som tam","peking ente":"pekingente",phet:"phed",pla:"plaa","plaa muk":"plaa muek","plaa m\xFCk":"plaa muek",radna:"rad na","rat na":"rad na",ratna:"rad na",rheinwok:"rhein wok","rice cake":"tteokbokki",sauce:"so\xDFe",schabu:"shabu",shakshouka:"shakshuka",sojasprosse:"mungbohnensprosse","see ew":"si ju",somtam:"som tam",soya:"soja",squid:"tintenfisch",szechuan:"sichuan","tao jiew":"tao djiau",taojiew:"tao djiau","seua rong":"suea rong",teesalat:"lahpet","thai park":"thaiwiese",thaibasilikum:"thai-basilikum",thaichili:"thai-chili",thaipark:"thaiwiese",thalee:"talee","tom kah":"tom kha",toon:"dtun",woon:"wun",woonsen:"wun sen","yam nuea sap":"laap nuea",yum:"yam"};var Ye=(t,e)=>{let s=t?t.toLowerCase():"",r=new RegExp(Object.keys(e).join("|"),"gi");return s=s.replace(r,n=>e[n]),s},Se=Ye;var Ve=()=>{let t=new Date,e=t.getDate(),s=t.getMonth()+1;return`${t.getFullYear()}-${s}-${e}`},Le=Ve;var Je=(t,e)=>{let s="";return t&&e&&(s=`<div class="list__item post search_result__item">
        ${t}${e}
        </div>`),s},G=Je;var Xe=()=>'<khao-content-with-icon iconName="meta-author" iconSizeFactor="5" iconOpacity="50%"><khao-link priority="secondary" href="/info/ueber-mich/">Jens</khao-link></khao-content-with-icon>',Y=Xe;var Ae={die:{url:"/dies-und-das/",display:"Dies und das"},get:{url:"/getranke/",display:"Getr\xE4nke"},ins:{url:"/insirationen/",display:"Inspirationen"},mit:{url:"/mittagspause/",display:"Mittagspause"},aus:{url:"/ausprobiert/",display:"Ausprobiert"},rei:{url:"/reisen/",display:"Reisen"},res:{url:"/restaurants/",display:"Restaurants"},rez:{url:"/rezepte/",display:"Rezepte"},ute:{url:"/utensilien/",display:"Utensilien"},zut:{url:"/zutaten/",display:"Zutaten"}};var qe=(t,e)=>{let s={url:"",display:""};return Object.prototype.hasOwnProperty.call(e,t)&&(s=e[t]),s},Re=qe;var et=t=>{let e="";if(t){let s=Re(t.toLowerCase(),Ae);s.url!==""&&s.display!==""&&(e=`<khao-content-with-icon iconName="meta-category" iconSizeFactor="5" iconOpacity="50%"><khao-link href="${s.url}" rel="category" title="Kategorie ${s.display}" priority="secondary">${s.display}</khao-link>
                    </khao-content-with-icon>`)}return e},V=et;var tt=(t,e,s)=>`<div class="list__content">
    ${t}${e}${s}
    </div>`,J=tt;var st="01.01.0001",rt=t=>`<khao-content-with-icon
        iconName="meta-date"
        iconSizeFactor="5"
        iconOpacity="50%"
    ><time datetime="">${t!==st?t:"05.01.2021"}</time></khao-content-with-icon>`,X=rt;var nt=(t,e,s,r,n)=>`<header class="list__header">    
    <h2 class="list__title post__title ">
    <a href="${e}">${t}</a>
    </h2>
    <div class="list__meta meta">
        ${s}
        ${r}
        ${n}
    </div>
    </header>`,Z=nt;var at=(t,e=!1)=>{let s="";return t&&(s=`<div class="centered-flex-col ${e?"search__no-results":""}">${t}</div>`),s},O=at;var it=t=>{let e="";return t&&(e=`<div class="content list__excerpt post__content clearfix">${t}</div>`),e},q=it;var ot=t=>{let e="";if(t){let s=t.split(" "),r="";s.forEach(n=>{let a=`/tags/${ct(n)}/`;r+=`<div class="tags__item">
            <a class="tags__link btn" href="${a}" rel="tag"><span itemprop="keywords">${ht(n)}</span></a>
             </div>`}),e=`<div class="list__tags"><div class="post__tags tags"><div class="tags__list">
                    ${r}
                  </div></div></div>`}return e},ct=t=>t.replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u"),lt=t=>t.charAt(0).toUpperCase()+t.slice(1),ht=t=>{let e="";return t&&(t==="work-and-wok"?e="Work 'n' Wok":(t=t.replace(/-/g," "),t.split(" ").forEach(r=>{e+=lt(r)+" "}),e.trim())),e},ee=ot;var ut=(t,e,s,r)=>{let n=r&&r.toLowerCase()==="ins"&&(t.indexOf("blogs")>-1||t.indexOf("videos")>-1||t.indexOf("gruppen"))?"image__flat js-lazy-img":"js-lazy-img";return`<figure class="list__thumbnail">
    <a href="${t}" tabindex="-1"><img src="/img/lazy-loading.png" data-src="${e}" alt="${s}" title="${s}" class="${n}" /></a>
    </figure>`},te=ut;var dt=(t,e)=>{let s="";if(t){let r=t.image?e+t.image:"/img/not-found.png",n=te(t.url,r,t.title,t.category),a=Y(),i=X(t.date),o=V(t.category),c=Z(t.title,t.url,a,i,o),l=q(t.summary),h=ee(t.tags),d=J(c,l,h);s=G(n,d)}return s},$e=dt;var gt=t=>{t.hasAttribute("data-src")&&t.dataset.src!==""&&(t.src=t.dataset.src,t.removeAttribute("data-src"))},H=gt;var ft=t=>{t.classList.remove("js-lazy-modern-img");let e=t.querySelector("img");t.querySelectorAll("source").forEach(r=>{r.dataset.srcset&&(r.srcset=r.dataset.srcset,r.removeAttribute("data-srcset"))}),H(e)},ve=ft;var pt=()=>{let t=document.querySelectorAll(".js-lazy-img");for(let e=0;e<t.length;e++){let s=t[e];H(s)}if(window.IntersectionObserver){let e=(n,a)=>{n.forEach(i=>{i.isIntersecting&&(ve(i.target),a.unobserve(i.target))})},s=new IntersectionObserver(e,{rootMargin:"0px 0px 420px 0px"});document.querySelectorAll(".js-lazy-modern-img").forEach(n=>{s.observe(n)});let r=new IntersectionObserver(e,{rootMargin:"0px 0px 220px 0px"});document.querySelectorAll(".js-summary-lazy-modern-img").forEach(n=>{r.observe(n)})}},se=pt;function I(t){return Array.isArray?Array.isArray(t):He(t)==="[object Array]"}var mt=1/0;function yt(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-mt?"-0":e}function kt(t){return t==null?"":yt(t)}function M(t){return typeof t=="string"}function ze(t){return typeof t=="number"}function xt(t){return t===!0||t===!1||_t(t)&&He(t)=="[object Boolean]"}function De(t){return typeof t=="object"}function _t(t){return De(t)&&t!==null}function y(t){return t!=null}function re(t){return!t.trim().length}function He(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}var Mt="Incorrect 'index' type",bt=t=>`Invalid value for key ${t}`,wt=t=>`Pattern length exceeds max of ${t}.`,It=t=>`Missing ${t} property in key`,Et=t=>`Property 'weight' in key '${t}' must be a positive integer`,Te=Object.prototype.hasOwnProperty,ne=class{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(r=>{let n=Fe(r);this._keys.push(n),this._keyMap[n.id]=n,s+=n.weight}),this._keys.forEach(r=>{r.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}};function Fe(t){let e=null,s=null,r=null,n=1,a=null;if(M(t)||I(t))r=t,e=je(t),s=ae(t);else{if(!Te.call(t,"name"))throw new Error(It("name"));let i=t.name;if(r=i,Te.call(t,"weight")&&(n=t.weight,n<=0))throw new Error(Et(i));e=je(i),s=ae(i),a=t.getFn}return{path:e,id:s,weight:n,src:r,getFn:a}}function je(t){return I(t)?t:t.split(".")}function ae(t){return I(t)?t.join("."):t}function St(t,e){let s=[],r=!1,n=(a,i,o)=>{if(y(a))if(!i[o])s.push(a);else{let c=i[o],l=a[c];if(!y(l))return;if(o===i.length-1&&(M(l)||ze(l)||xt(l)))s.push(kt(l));else if(I(l)){r=!0;for(let h=0,d=l.length;h<d;h+=1)n(l[h],i,o+1)}else i.length&&n(l,i,o+1)}};return n(t,M(e)?e.split("."):e,0),r?s:s[0]}var Lt={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},At={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Rt={location:0,threshold:.6,distance:100},$t={useExtendedSearch:!1,getFn:St,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},u={...At,...Lt,...Rt,...$t},vt=/[^ ]+/g;function Tt(t=1,e=3){let s=new Map,r=Math.pow(10,e);return{get(n){let a=n.match(vt).length;if(s.has(a))return s.get(a);let i=1/Math.pow(a,.5*t),o=parseFloat(Math.round(i*r)/r);return s.set(a,o),o},clear(){s.clear()}}}var N=class{constructor({getFn:e=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){this.norm=Tt(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,r)=>{this._keysMap[s.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,M(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){let s=this.size();M(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,r=this.size();s<r;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!y(e)||re(e))return;let r={v:e,i:s,n:this.norm.get(e)};this.records.push(r)}_addObject(e,s){let r={i:s,$:{}};this.keys.forEach((n,a)=>{let i=n.getFn?n.getFn(e):this.getFn(e,n.path);if(y(i)){if(I(i)){let o=[],c=[{nestedArrIndex:-1,value:i}];for(;c.length;){let{nestedArrIndex:l,value:h}=c.pop();if(y(h))if(M(h)&&!re(h)){let d={v:h,i:l,n:this.norm.get(h)};o.push(d)}else I(h)&&h.forEach((d,g)=>{c.push({nestedArrIndex:g,value:d})})}r.$[a]=o}else if(M(i)&&!re(i)){let o={v:i,n:this.norm.get(i)};r.$[a]=o}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}};function Pe(t,e,{getFn:s=u.getFn,fieldNormWeight:r=u.fieldNormWeight}={}){let n=new N({getFn:s,fieldNormWeight:r});return n.setKeys(t.map(Fe)),n.setSources(e),n.create(),n}function jt(t,{getFn:e=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){let{keys:r,records:n}=t,a=new N({getFn:e,fieldNormWeight:s});return a.setKeys(r),a.setIndexRecords(n),a}function F(t,{errors:e=0,currentLocation:s=0,expectedLocation:r=0,distance:n=u.distance,ignoreLocation:a=u.ignoreLocation}={}){let i=e/t.length;if(a)return i;let o=Math.abs(r-s);return n?i+o/n:o?1:i}function Ct(t=[],e=u.minMatchCharLength){let s=[],r=-1,n=-1,a=0;for(let i=t.length;a<i;a+=1){let o=t[a];o&&r===-1?r=a:!o&&r!==-1&&(n=a-1,n-r+1>=e&&s.push([r,n]),r=-1)}return t[a-1]&&a-r>=e&&s.push([r,a-1]),s}var $=32;function Ot(t,e,s,{location:r=u.location,distance:n=u.distance,threshold:a=u.threshold,findAllMatches:i=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,includeMatches:c=u.includeMatches,ignoreLocation:l=u.ignoreLocation}={}){if(e.length>$)throw new Error(wt($));let h=e.length,d=t.length,g=Math.max(0,Math.min(r,d)),f=a,p=g,k=o>1||c,A=k?Array(d):[],w;for(;(w=t.indexOf(e,p))>-1;){let x=F(e,{currentLocation:w,expectedLocation:g,distance:n,ignoreLocation:l});if(f=Math.min(x,f),p=w+h,k){let S=0;for(;S<h;)A[w+S]=1,S+=1}}p=-1;let v=[],R=1,z=h+d,Ke=1<<h-1;for(let x=0;x<h;x+=1){let S=0,L=z;for(;S<L;)F(e,{errors:x,currentLocation:g+L,expectedLocation:g,distance:n,ignoreLocation:l})<=f?S=L:z=L,L=Math.floor((z-S)/2+S);z=L;let ke=Math.max(1,g-L+1),Q=i?d:Math.min(g+L,d)+h,T=Array(Q+2);T[Q+1]=(1<<x)-1;for(let _=Q;_>=ke;_-=1){let D=_-1,xe=s[t.charAt(D)];if(k&&(A[D]=+!!xe),T[_]=(T[_+1]<<1|1)&xe,x&&(T[_]|=(v[_+1]|v[_])<<1|1|v[_+1]),T[_]&Ke&&(R=F(e,{errors:x,currentLocation:D,expectedLocation:g,distance:n,ignoreLocation:l}),R<=f)){if(f=R,p=D,p<=g)break;ke=Math.max(1,2*g-p)}}if(F(e,{errors:x+1,currentLocation:g,expectedLocation:g,distance:n,ignoreLocation:l})>f)break;v=T}let K={isMatch:p>=0,score:Math.max(.001,R)};if(k){let x=Ct(A,o);x.length?c&&(K.indices=x):K.isMatch=!1}return K}function Nt(t){let e={};for(let s=0,r=t.length;s<r;s+=1){let n=t.charAt(s);e[n]=(e[n]||0)|1<<r-s-1}return e}var P=class{constructor(e,{location:s=u.location,threshold:r=u.threshold,distance:n=u.distance,includeMatches:a=u.includeMatches,findAllMatches:i=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:c=u.isCaseSensitive,ignoreLocation:l=u.ignoreLocation}={}){if(this.options={location:s,threshold:r,distance:n,includeMatches:a,findAllMatches:i,minMatchCharLength:o,isCaseSensitive:c,ignoreLocation:l},this.pattern=c?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;let h=(g,f)=>{this.chunks.push({pattern:g,alphabet:Nt(g),startIndex:f})},d=this.pattern.length;if(d>$){let g=0,f=d%$,p=d-f;for(;g<p;)h(this.pattern.substr(g,$),g),g+=$;if(f){let k=d-$;h(this.pattern.substr(k),k)}}else h(this.pattern,0)}searchIn(e){let{isCaseSensitive:s,includeMatches:r}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let p={isMatch:!0,score:0};return r&&(p.indices=[[0,e.length-1]]),p}let{location:n,distance:a,threshold:i,findAllMatches:o,minMatchCharLength:c,ignoreLocation:l}=this.options,h=[],d=0,g=!1;this.chunks.forEach(({pattern:p,alphabet:k,startIndex:A})=>{let{isMatch:w,score:v,indices:R}=Ot(e,p,k,{location:n+A,distance:a,threshold:i,findAllMatches:o,minMatchCharLength:c,includeMatches:r,ignoreLocation:l});w&&(g=!0),d+=v,w&&R&&(h=[...h,...R])});let f={isMatch:g,score:g?d/this.chunks.length:1};return g&&r&&(f.indices=h),f}},b=class{constructor(e){this.pattern=e}static isMultiMatch(e){return Ce(e,this.multiRegex)}static isSingleMatch(e){return Ce(e,this.singleRegex)}search(){}};function Ce(t,e){let s=t.match(e);return s?s[1]:null}var ie=class extends b{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){let s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}},oe=class extends b{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){let r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}},ce=class extends b{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){let s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}},le=class extends b{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){let s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}},he=class extends b{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){let s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}},ue=class extends b{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){let s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}},U=class extends b{constructor(e,{location:s=u.location,threshold:r=u.threshold,distance:n=u.distance,includeMatches:a=u.includeMatches,findAllMatches:i=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:c=u.isCaseSensitive,ignoreLocation:l=u.ignoreLocation}={}){super(e),this._bitapSearch=new P(e,{location:s,threshold:r,distance:n,includeMatches:a,findAllMatches:i,minMatchCharLength:o,isCaseSensitive:c,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}},B=class extends b{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,r,n=[],a=this.pattern.length;for(;(r=e.indexOf(this.pattern,s))>-1;)s=r+a,n.push([r,s-1]);let i=!!n.length;return{isMatch:i,score:i?0:1,indices:n}}},de=[ie,B,ce,le,ue,he,oe,U],Oe=de.length,zt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Dt="|";function Ht(t,e={}){return t.split(Dt).map(s=>{let r=s.trim().split(zt).filter(a=>a&&!!a.trim()),n=[];for(let a=0,i=r.length;a<i;a+=1){let o=r[a],c=!1,l=-1;for(;!c&&++l<Oe;){let h=de[l],d=h.isMultiMatch(o);d&&(n.push(new h(d,e)),c=!0)}if(!c)for(l=-1;++l<Oe;){let h=de[l],d=h.isSingleMatch(o);if(d){n.push(new h(d,e));break}}}return n})}var Ft=new Set([U.type,B.type]),ge=class{constructor(e,{isCaseSensitive:s=u.isCaseSensitive,includeMatches:r=u.includeMatches,minMatchCharLength:n=u.minMatchCharLength,ignoreLocation:a=u.ignoreLocation,findAllMatches:i=u.findAllMatches,location:o=u.location,threshold:c=u.threshold,distance:l=u.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:r,minMatchCharLength:n,findAllMatches:i,ignoreLocation:a,location:o,threshold:c,distance:l},this.pattern=s?e:e.toLowerCase(),this.query=Ht(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){let s=this.query;if(!s)return{isMatch:!1,score:1};let{includeMatches:r,isCaseSensitive:n}=this.options;e=n?e:e.toLowerCase();let a=0,i=[],o=0;for(let c=0,l=s.length;c<l;c+=1){let h=s[c];i.length=0,a=0;for(let d=0,g=h.length;d<g;d+=1){let f=h[d],{isMatch:p,indices:k,score:A}=f.search(e);if(p){if(a+=1,o+=A,r){let w=f.constructor.type;Ft.has(w)?i=[...i,...k]:i.push(k)}}else{o=0,a=0,i.length=0;break}}if(a){let d={isMatch:!0,score:o/a};return r&&(d.indices=i),d}}return{isMatch:!1,score:1}}},fe=[];function Pt(...t){fe.push(...t)}function pe(t,e){for(let s=0,r=fe.length;s<r;s+=1){let n=fe[s];if(n.condition(t,e))return new n(t,e)}return new P(t,e)}var W={AND:"$and",OR:"$or"},me={PATH:"$path",PATTERN:"$val"},ye=t=>!!(t[W.AND]||t[W.OR]),Ut=t=>!!t[me.PATH],Bt=t=>!I(t)&&De(t)&&!ye(t),Ne=t=>({[W.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Ue(t,e,{auto:s=!0}={}){let r=n=>{let a=Object.keys(n),i=Ut(n);if(!i&&a.length>1&&!ye(n))return r(Ne(n));if(Bt(n)){let c=i?n[me.PATH]:a[0],l=i?n[me.PATTERN]:n[c];if(!M(l))throw new Error(bt(c));let h={keyId:ae(c),pattern:l};return s&&(h.searcher=pe(l,e)),h}let o={children:[],operator:a[0]};return a.forEach(c=>{let l=n[c];I(l)&&l.forEach(h=>{o.children.push(r(h))})}),o};return ye(t)||(t=Ne(t)),r(t)}function Wt(t,{ignoreFieldNorm:e=u.ignoreFieldNorm}){t.forEach(s=>{let r=1;s.matches.forEach(({key:n,norm:a,score:i})=>{let o=n?n.weight:null;r*=Math.pow(i===0&&o?Number.EPSILON:i,(o||1)*(e?1:a))}),s.score=r})}function Kt(t,e){let s=t.matches;e.matches=[],y(s)&&s.forEach(r=>{if(!y(r.indices)||!r.indices.length)return;let{indices:n,value:a}=r,i={indices:n,value:a};r.key&&(i.key=r.key.src),r.idx>-1&&(i.refIndex=r.idx),e.matches.push(i)})}function Qt(t,e){e.score=t.score}function Gt(t,e,{includeMatches:s=u.includeMatches,includeScore:r=u.includeScore}={}){let n=[];return s&&n.push(Kt),r&&n.push(Qt),t.map(a=>{let{idx:i}=a,o={item:e[i],refIndex:i};return n.length&&n.forEach(c=>{c(a,o)}),o})}var E=class{constructor(e,s={},r){this.options={...u,...s},this.options.useExtendedSearch,this._keyStore=new ne(this.options.keys),this.setCollection(e,r)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof N))throw new Error(Mt);this._myIndex=s||Pe(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){y(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){let s=[];for(let r=0,n=this._docs.length;r<n;r+=1){let a=this._docs[r];e(a,r)&&(this.removeAt(r),r-=1,n-=1,s.push(a))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){let{includeMatches:r,includeScore:n,shouldSort:a,sortFn:i,ignoreFieldNorm:o}=this.options,c=M(e)?M(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Wt(c,{ignoreFieldNorm:o}),a&&c.sort(i),ze(s)&&s>-1&&(c=c.slice(0,s)),Gt(c,this._docs,{includeMatches:r,includeScore:n})}_searchStringList(e){let s=pe(e,this.options),{records:r}=this._myIndex,n=[];return r.forEach(({v:a,i,n:o})=>{if(!y(a))return;let{isMatch:c,score:l,indices:h}=s.searchIn(a);c&&n.push({item:a,idx:i,matches:[{score:l,value:a,norm:o,indices:h}]})}),n}_searchLogical(e){let s=Ue(e,this.options),r=(o,c,l)=>{if(!o.children){let{keyId:d,searcher:g}=o,f=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(c,d),searcher:g});return f&&f.length?[{idx:l,item:c,matches:f}]:[]}let h=[];for(let d=0,g=o.children.length;d<g;d+=1){let f=o.children[d],p=r(f,c,l);if(p.length)h.push(...p);else if(o.operator===W.AND)return[]}return h},n=this._myIndex.records,a={},i=[];return n.forEach(({$:o,i:c})=>{if(y(o)){let l=r(s,o,c);l.length&&(a[c]||(a[c]={idx:c,item:o,matches:[]},i.push(a[c])),l.forEach(({matches:h})=>{a[c].matches.push(...h)}))}}),i}_searchObjectList(e){let s=pe(e,this.options),{keys:r,records:n}=this._myIndex,a=[];return n.forEach(({$:i,i:o})=>{if(!y(i))return;let c=[];r.forEach((l,h)=>{c.push(...this._findMatches({key:l,value:i[h],searcher:s}))}),c.length&&a.push({idx:o,item:i,matches:c})}),a}_findMatches({key:e,value:s,searcher:r}){if(!y(s))return[];let n=[];if(I(s))s.forEach(({v:a,i,n:o})=>{if(!y(a))return;let{isMatch:c,score:l,indices:h}=r.searchIn(a);c&&n.push({score:l,key:e,value:a,idx:i,norm:o,indices:h})});else{let{v:a,n:i}=s,{isMatch:o,score:c,indices:l}=r.searchIn(a);o&&n.push({score:c,key:e,value:a,norm:i,indices:l})}return n}};E.version="7.0.0";E.createIndex=Pe;E.parseIndex=jt;E.config=u;E.parseQuery=Ue;Pt(ge);var We=[],m,j,Yt=_e,Vt=25,Jt="/media/",Xt=t=>{let e=0;if(t.length>0){j.innerHTML="";let s="";t.forEach(r=>{e++<=Vt&&(s+=$e(r,Yt+Jt))}),j.innerHTML=s,se!==void 0&&se()}e===0&&(j.innerHTML=O(Me,!0))},Zt=()=>{let t=window.location.search;if(t&&URLSearchParams!==void 0){let e=new URLSearchParams(t);if(e.has("q")){let s=e.get("q");m.value=s}}},qt=()=>{m.disabled=!1,m.focus(),m.placeholder=we,m.classList.add("js-ready-to-search"),m.onkeyup=()=>{let t=m.value;Be(t)},Zt(),m.value!==""&&Be(m.value)},Be=t=>{if(t!==""&&t.length>=3){let e=Se(t,Ee).toLowerCase(),n=new E(We,{keys:[{name:"title",weight:3},"summary","tags"],threshold:.2,ignoreLocation:!0,shouldSort:!0}).search(e).map(a=>a.item);Xt(n)}else j.innerHTML=O(Ie,!0)},es=t=>{t.parentElement.classList.add("has-focus")},ts=t=>{t.parentElement.classList.remove("has-focus")},ss=()=>{m=document.getElementById("search-input"),j=document.getElementById("search-results"),m&&(m.focus(),m.addEventListener("focus",()=>{es(m)}),m.addEventListener("blur",()=>{ts(m)})),fetch(`${be}?d=${Le()}`,{method:"get"}).then(t=>t.json()).then(t=>{t.forEach(e=>{let s={url:e.u,title:e.t,summary:e.s,date:e.d,tags:e.ts,category:e.c,image:e.i};We.push(s)}),qt()}).catch(t=>{j.innerHTML=O(t,!0)})};window.addEventListener("load",()=>{ss()});})();
