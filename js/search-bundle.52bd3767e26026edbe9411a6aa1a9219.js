(()=>{var v="https://bebildere-den.reisko.ch",y="Leider nichts gefunden";var d={"asia shop":"asial\xE4den",asiashop:"asial\xE4den",banoi:"ban\xF4i",bittermelone:"bittergurke",bombai:"bombay",broccoli:"brokkoli",burma:"myanmar",coconut:"kokosnuss",currygericht:"curry","curry paste":"currypaste",enokipilze:"enoki",entensalat:"larb ped","fak thong":"fak tong",faschiertes:"hackfleisch",fingerwurz:"krachai",fischsauce:"fischso\xDFe",fishsauce:"fischso\xDFe",fisolen:"bohnen",fondue:"hotpot","fried rice":"khao pad",gambas:"garnelen",gaprau:"kra pao","ga prau":"kra pao",geang:"gaeng",g\u00E4ng:"gaeng",gem\u00FCsecurry:"curry",grapau:"kra pao","gra pau":"kra pao",gung:"goong",gochuyang:"gochujang","hot pot":"hotpot",huad:"lao pot","hang lay":"hang lea","hung lay":"hang lea",kai:"khai",kanom:"khanom",karlrsruhe:"karlsruhe","ka prao":"kra pao","konjak nudeln":"shirataki",krapao:"kra pao",krapau:"kra pao",krapow:"kra pao",laab:"larb",ladna:"rad na","la lot":"l\xE1 l\u1ED1t",laphet:"lahpet",larp:"larb",masaman:"massaman",massamann:"massaman",mexico:"mexikanisch","mii ":"mee",muu:"moo","moo krob":"moo grob",namtok:"nam tok",normai:"nor mai",n\u00FCa:"nuea",nuae:"nuea",obergin:"aubergin",orlam:"or lam",padthai:"pad thai","pak choy":"pak choi",pakchoy:"pak choi",pakchoi:"pak choi",palabog:"palabok",panang:"panaeng",pan\u00E4ng:"panaeng",paneng:"panaeng","papaya salat":"som tam","peking ente":"pekingente",phet:"phed",pla:"plaa","plaa muk":"plaa muek","plaa m\xFCk":"plaa muek",radna:"rad na","rat na":"rad na",ratna:"rad na",reisnudeln:"nudeln",rheinwok:"rhein wok","rice cake":"tteokbokki",schabu:"shabu",shakshouka:"shakshuka",szechuan:"sichuan",somtam:"som tam",sojasprosse:"mungbohnensprosse",soya:"soja",squid:"tintenfisch",teesalat:"lahpet","thai park":"thaiwiese",thaipark:"thaiwiese",thalee:"talee","tom kah":"tom kha",woonsen:"woon sen","yam nuea sap":"larb nuea",yamwoon:"yam woon",yum:"yam"};var _={die:{url:"/dies-und-das/",display:"Dies und das"},get:{url:"/getranke/",display:"Getr\xE4nke"},ins:{url:"/insirationen/",display:"Inspirationen"},mit:{url:"/mittagspause/",display:"Mittagspause"},aus:{url:"/ausprobiert/",display:"Ausprobiert"},rei:{url:"/reisen/",display:"Reisen"},res:{url:"/restaurants/",display:"Restaurants"},rez:{url:"/rezepte/",display:"Rezepte"},ute:{url:"/utensilien/",display:"Utensilien"},zut:{url:"/zutaten/",display:"Zutaten"}};var q=`<img
    src="/svg/sprites/meta-sprite.svg#author"
    alt="Jens"
    title="Jens"
    class="meta__icon icon-author"
    width="18"
    height="18"
/>`,J=`<img
    src="/svg/sprites/meta-sprite.svg#category"
    alt="Kategorie"
    title="Kategorie"
    class="meta__icon icon-category"
    width="18"
    height="18"
/>`,K=`<img
    src="/svg/sprites/meta-sprite.svg#date"
    alt="Datum"
    title="Datum"
    class="meta__icon icon-date"
    width="18"
    height="18"
/>`,F={author:q,category:J,time:K},u=F;function G(e,a){let t={url:"",display:""};return a.hasOwnProperty(e)&&(t=a[e]),t}var b=G;function N(e){var a="";if(e){let t=b(e.toLowerCase(),_);t.url!==""&&t.display!==""&&(a=`<div class="meta__item-categories meta__item">${u.category}<span class="meta__text"><a class="meta__link" href="${t.url}" rel="category" title="Kategorie ${t.display}">${t.display}</a>
                    </span></div>`)}return a}var x=N;function Q(e,a,t,r){var n=r&&r.toLowerCase()==="ins"&&(e.indexOf("blogs")>-1||e.indexOf("videos")>-1||e.indexOf("gruppen"))?"image__flat js-lazy-img":"js-lazy-img";return`<figure class="list__thumbnail">
    <a href="${e}" tabindex="-1"><img src="/img/lazy-loading.png" data-src="${a}" alt="${t}" title="${t}" class="${n}" /></a>
    </figure>`}var w=Q;function V(){var e=`<div class="list__meta meta"><div class="meta__item-author meta__item">${u.author}<span class="meta__text"><a class="meta__link" href="/info/ueber-mich/">Jens</a></span></div>`;return e}var $=V;var X="01.01.0001";function Z(e){let t=e!==X?e:"05.01.2021";return`<div class="meta__item-datetime meta__item">${u.time}<time class="meta__text" datetime="">${t}</time></div>`}var I=Z;function W(e,a,t,r,n){return`<header class="list__header">    
    <h2 class="list__title post__title ">
    <a href="${a}">${e}</a>
    </h2>
    ${t}
    ${r}
    ${n}
    </header>`}var z=W;function Y(e){var a="";return e&&(a=`<div class="content list__excerpt post__content clearfix">${e}</div>`),a}var L=Y;function ee(e,a){return`<div class="list__content">
    ${e}${a}
    </div>`}var S=ee;var ae=function(e,a){let t="";return e&&a&&(t=`<div class="list__item post">
        ${e}${a}
        </div>`),t},A=ae;var te=function(e){e.hasAttribute("data-src")&&e.hasAttribute("data-src")!==""&&(e.src=e.dataset.src,e.removeAttribute("data-src"))},m=te;var re=function(e){var a=e.querySelector("img"),t=e.querySelectorAll("source");t.forEach(r=>{r.srcset=r.dataset.srcset,r.removeAttribute("data-srcset")}),m(a)},T=re;var se=function(){for(var e=document.querySelectorAll(".js-lazy-img"),a=0;a<e.length;a++){var t=e[a];m(t)}if(window.IntersectionObserver){var r=function(s,h){s.forEach(c=>{c.isIntersecting&&(T(c.target),h.unobserve(c.target))})},n=new IntersectionObserver(r,{rootMargin:"0px 0px 420px 0px"});document.querySelectorAll(".js-lazy-modern-img").forEach(s=>{n.observe(s)});var o=new IntersectionObserver(r,{rootMargin:"0px 0px 220px 0px"});document.querySelectorAll(".js-summary-lazy-modern-img").forEach(s=>{o.observe(s)})}},g=se;var f,i,p,l=null,E=[],ne=v,ie=20;function j(e){var a=p.value,t=0;if(e.length>0){l.innerHTML="";let r="";e.forEach(n=>{var o=n.ref;if((a==="alle"||o.indexOf("/"+a+"/")>-1)&&t++<=ie){var s=E[n.ref];let h=w(o,ne+s.image,s.title,s.category),c=$(),C=I(s.date),H=x(s.category),O=z(s.title,o,c,C,H),R=L(s.summary),D=S(O,R);r+=A(h,D)}}),l.innerHTML=r,g!==void 0&&g()}t===0&&(l.innerHTML='<p class="search__no-results">'+y+"</p>")}function M(e){var a=e?e.toLowerCase():"",t=new RegExp(Object.keys(d).join("|"),"gi");a=a.replace(t,function(n){return d[n]});var r=a.length<5?"*":"~0.2";return a=a+r,a}function oe(){var e=window.location.search;if(e&&URLSearchParams!==void 0){var a=new URLSearchParams(e),t="",r="";if(a.has("q")&&(t=a.get("q"),i.value=t),a.has("s")&&(r=a.get("s"),p.value=r),t){var n=f.search(M(t));j(n)}}}function le(){oe(),i.onkeyup=function(){var e=i.value;if(p.value==="id")e!==""&&typeof!isNaN(e)&&e.length===4?document.location.href="/suchen/id/?e="+parseInt(e,10):l.innerHTML="Bitte vierstellige ID eingeben (z.B. 0333)";else if(e!==""&&e.length>=3){var a=f.search(M(e));j(a)}else l.innerHTML=""},i.focus(),i.placeholder=""}function ue(){return!!window.navigator.userAgent.match(/iPad|iPhone/i)}function ce(e){ue()&&e.classList.add("has-focus")}function me(){i=document.getElementById("search-input"),p=document.getElementById("search-sections"),l=document.getElementById("search-results"),i&&ce(i),fetch("/index.json",{method:"get"}).then(e=>e.json()).then(e=>{f=lunr(function(){this.ref("u"),this.field("t",{boost:20}),this.field("s",{boost:10}),this.field("ts"),e.forEach(function(a){this.add(a),E[a.u]={title:a.t,summary:a.s,date:a.d,tags:a.t,category:a.c,image:a.i}},this)}),le()}).catch(e=>{l.innerHTML=`<p>${e}</p>`})}window.addEventListener("load",function(){me()});})();
