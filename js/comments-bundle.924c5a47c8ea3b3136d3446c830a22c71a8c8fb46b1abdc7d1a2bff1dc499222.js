(()=>{var f="%s Kommentare warten auf Freigabe",C="Ein Kommentar wartet auf Freigabe",O={url:"https://kommentiere-den.reisko.ch/v2.php",method:"GET",interval:6e4},b={url:"https://kommentiere-den.reisko.ch/",method:"POST"},t={read:O,write:b},c=function(e,n){var o,i,a,r=t.read.url,s=new Object;e.hasOwnProperty("sectionId")&&(s.sid=e.sectionId),e.hasOwnProperty("pageid")&&(s.pid=e.pageid),i=!0;for(a in s)s.hasOwnProperty(a)&&(r+=(i?"?":"&")+a+"="+s[a]),i=!1;s.hasOwnProperty("sid")&&s.hasOwnProperty("pid")?(o=new XMLHttpRequest,o.open(t.read.method,r),o.onload=n,o.send()):console.error("no sectionId or pageId")},r=c,d=function(e,n){var s,i=t.write.url,o=new FormData;for(let t in e)o.append(t,e[t]);s=new XMLHttpRequest,s.open(t.write.method,i),s.onload=n,s.send(o)},g=d,l=function(){var e=["content"];caches.keys().then(t=>Promise.all(t.map(t=>{if(!e.includes(t))return caches.delete(t)})))},s=l,u=function(e){var t="";return e&&(t=e.replace(/(?:\r\n|\r|\n)/g,"<br>")),t},h=u,m=function(e){let t="";return e&&(t=document.createElement("div"),t.className="row",t.innerHTML=e),t},a=m;function p(e,t,n){let s="";if(e&&n){var o=t?`<a href="${t}" target="_blank" rel="noopener">${e}</a>`:e;s=`<div class="meta"><div class="name">${o}</div><div class="time">${n}</div></div>`}return s}i=p;function v(e,t,n,s,o){let r="";if(e&&n){var c,a="";o&&(o.toLowerCase()==="author"&&(a="from-author"),o.toLowerCase()==="to-be-approved"&&(a="to-be-approved")),c=i(e,t,s),r=`<div class="msg ${a}">${n}</div>`+c}return r}var i,o=v,j=function(e){var t=new Date(Date.now()),n=t.toLocaleDateString(e,{year:"numeric",month:"2-digit",day:"2-digit"});return n},y=j,_=function(e,t,n){if(e>0&&t&&n){var s=e===1?t:n.replace("%s",e),i=y("de-DE");return o("Der Reiskoch","http://der.reisko.ch",s,i,"to-be-approved")}return""},w=_,e=null,x=function(e){let n=document.getElementById("cwrap");n.innerHTML="",t=null;try{t=JSON.parse(e)}catch(e){console.error(e)}if(t){var t,r,s=t.comments,i=t.numberOfToBeApprovedComments;i>0&&(r=w(i,C,f),n.appendChild(a(r))),s&&s.forEach(e=>{var e=o(e.name,e.website,h(e.message),e.date,e.type);n.appendChild(a(e))})}},n=function(){s();var t=new FormData(e);let n={sectionId:t.get("sid"),pageid:t.get("pid")};r(n,function(){x(this.response)})},E=function(){var t=new FormData(e);return g({sid:t.get("sid"),pid:t.get("pid"),name:t.get("name"),email:t.get("email"),website:t.get("website"),msg:t.get("message")},function(){this.response&&this.response.trim()==="OK"?(e.reset(),s(),n()):console.error(this.response)}),!1};window.addEventListener("load",function(){e=document.getElementById("js-comments-form"),formData=new FormData(e),formData.get("sid")&&formData.get("pid")&&(n(),setInterval(function(){n()},t.read.interval)),e&&(e.onsubmit=function(){return E(this)})})})()