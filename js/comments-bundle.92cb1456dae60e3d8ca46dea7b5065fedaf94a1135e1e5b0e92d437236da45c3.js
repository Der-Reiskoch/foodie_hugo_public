(()=>{var u="%s Kommentare warten auf Freigabe",w="Ein Kommentar wartet auf Freigabe";var i={read:{method:"GET",interval:6e4},write:{method:"POST"}};var y=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),m=y;var B=(e,t,o)=>{let r=new Object;m(t,"sectionId")&&(r.sid=t.sectionId),m(t,"pageId")&&(r.pid=t.pageId);let s=!0;for(let n in r)m(r,n)&&(e+=(s?"?":"&")+n+"="+r[n]),s=!1;if(m(r,"sid")&&m(r,"pid")){let n=new XMLHttpRequest;n.open(i.read.method,e),n.onload=()=>{o(n.responseText)},n.send()}else window.logger.error("no sectionId or pageId")},C=B;var A=(e,t,o)=>{let r=new FormData;for(let n in t)r.append(n,t[n]);let s=new XMLHttpRequest;s.open(i.write.method,e),s.onload=()=>{o(s.responseText)},s.send(r)},D=A;var P=function(){let e=["content"];caches.keys().then(t=>Promise.all(t.map(o=>{if(!e.includes(o))return caches.delete(o)})))},c=P;var E=e=>{let t="";return e&&(t=e.replace(/(?:\r\n|\r|\n)/g,"<br>")),t},v=E;var L=e=>{let t=null;return e&&(t=document.createElement("div"),t.className="row",t.innerHTML=e),t},f=L;var F=(e,t,o)=>{let r="";return e&&o&&(r=`<div class="meta"><div class="name">${t?`<a href="${t}" target="_blank" rel="noopener">${e}</a>`:e}</div><div class="time">${o}</div></div>`),r},h=F;var $=(e,t,o,r,s)=>{let n="";if(e&&o){let d="";s&&(s.toLowerCase()==="author"&&(d="from-author"),s.toLowerCase()==="to-be-approved"&&(d="to-be-approved"));let b=h(e,t,r);n=`<div class="msg ${d}">${o}</div>`+b}return n},p=$;var k=e=>new Date(Date.now()).toLocaleDateString(e,{year:"numeric",month:"2-digit",day:"2-digit"}),T=k;var M=(e,t,o)=>{if(e>0&&t&&o){let r=e===1?t:o.replace("%s",`${e}`),s=T("de-DE");return p("Der Reiskoch","https://www.der-reiskoch.de",r,s,"to-be-approved")}else return""},I=M;var a=null,j=e=>{let t=document.getElementById("js-comments-output");t.innerHTML="";let o=null;try{o=JSON.parse(e)}catch(r){console.error(r)}if(o){let r=o.comments,s=o.numberOfToBeApprovedComments;if(s>0){let n=I(s,w,u);t.appendChild(f(n))}r&&r.forEach(n=>{let d=p(n.name,n.website,v(n.message),n.date,n.type);t.appendChild(f(d))})}},l=()=>{c();let e=new FormData(a);if(e){let t=e.get("sid"),o=e.get("pid");if(t&&o){let r={sectionId:t,pageId:o};C(a.action,r,s=>{j(s)})}}},N=()=>{let e=new FormData(a),t={sid:e.get("sid"),pid:e.get("pid"),name:e.get("name"),email:e.get("email"),website:e.get("website"),msg:e.get("message")};return D(a.action,t,o=>{o&&o.trim()==="OK"?(a.reset(),c(),l()):console.error(o)}),!1};window.addEventListener("load",()=>{a=document.getElementById("js-comments-form");let e=new FormData(a);e.get("sid")&&e.get("pid")&&(l(),setInterval(()=>{l()},i.read.interval)),a&&(a.onsubmit=function(){return N()})});})();
