(()=>{var v="%s Kommentare warten auf Freigabe",_="Ein Kommentar wartet auf Freigabe",j={url:"https://kommentiere-den.reisko.ch/v2.php",method:"GET",interval:6e4},b={url:"https://kommentiere-den.reisko.ch/",method:"POST"},e={read:j,write:b},r=function(t,n){var o,i,a,r=e.read.url,s=new Object;t.hasOwnProperty("sectionId")&&(s.sid=t.sectionId),t.hasOwnProperty("pageid")&&(s.pid=t.pageid),i=!0;for(a in s)s.hasOwnProperty(a)&&(r+=(i?"?":"&")+a+"="+s[a]),i=!1;s.hasOwnProperty("sid")&&s.hasOwnProperty("pid")?(o=new XMLHttpRequest,o.open(e.read.method,r),o.onload=n,o.send()):console.error("no sectionId or pageId")},c=r,d=function(t,n){var s,o,i=e.write.url;console.log("writeComment",t),o=new FormData;for(let e in t)o.append(e,t[e]);s=new XMLHttpRequest,s.open(e.write.method,i),s.onload=n,s.send(o)},f=d,l=function(){var e=["content"];caches.keys().then(t=>Promise.all(t.map(t=>{if(!e.includes(t))return caches.delete(t)})))},i=l,u=function(e){var t="";return e&&(t=e.replace(/(?:\r\n|\r|\n)/g,"<br>")),t},h=u;function m(e,t,n,s,o){var a,i="";return o&&(o.toLowerCase()==="author"&&(i="from-author"),o.toLowerCase()==="to-be-approved"&&(i="to-be-approved")),a=t?`<a href="${t}" target="_blank" rel="noopener">${e}</a>`:e,`<div class="msg ${i}">${n}</div><div class="meta"><div class="name">${a}</div><div class="time">${s}</div></div>`}var a=m,p=function(e,t,n){if(e>0){var s=e===1?t:n.replace("%s",e),o=new Date,i=o.toLocaleDateString("de-DE");return a("Der Reikoch","",s,i,"to-be-approved")}},g=p,o=null,s=null,n=null,y=function(e){let s=document.getElementById("cwrap");s.innerHTML="",t=null;try{t=JSON.parse(e)}catch(e){console.error(e)}if(t){var t,n,o=t.comments,i=t.numberOfToBeApprovedComments;i>0&&(n=document.createElement("div"),n.className="row",n.innerHTML=g(i,_,v),s.appendChild(n)),o&&o.forEach(e=>{var t=document.createElement("div");t.className="row",t.innerHTML=a(e.name,e.website,h(e.message),e.date,e.type),s.appendChild(t)})}},t={load:function(){i();let e={sectionId:o.value,pageid:s.value};c(e,function(){console.log(this.response),y(this.response)})},add:function(){return f({sid:o.value,pid:s.value,name:document.getElementById("cname").value,email:document.getElementById("cmail").value,website:document.getElementById("cwebsite").value,msg:document.getElementById("cmsg").value},function(){this.response&&this.response.trim()==="OK"?(i(),n.reset(),t.load()):console.error(this.response)}),!1}};window.addEventListener("load",function(){o=document.getElementById("sid"),s=document.getElementById("pid"),n=document.getElementById("js-comments-form"),o&&s&&(t.load(),setInterval(function(){t.load()},e.read.interval)),n&&(n.onsubmit=function(){return t.add(this)})})})()