(()=>{var l="",F=(t,e,n)=>{t&&t.addEventListener("change",()=>{t.value!=e?l=t.value:l="",n()})},p=F;var s="",S=(t,e,n)=>{t&&t.addEventListener("change",()=>{t.value!=e?s=t.value:s="",n()})},u=S;var M=(t,e,n)=>{let i=document.createElement("option");i.value=e,i.label=n,t.appendChild(i)},f=M;var h=(t,e)=>{let n="";return t.includes(e)?t.split(e).forEach((o,v)=>{let y=v>0?e:"";n+=y+h(o,e)}):n=t.charAt(0).toUpperCase()+t.slice(1),n},a=h;var T=(t,e,n)=>{let i="";if(t)for(let o=0;o<t.options.length;o++)n?t.options[o].text===e&&(i=t.options[o].value):t.options[o].text.toLowerCase()===e.toLowerCase()&&(i=t.options[o].value);return i},g=T;var b=(t,e)=>{for(let n=0;n<t.options.length;n++){let i=t.options[n].value;e.includes(i)||t.remove(n)}},L=b;var c="-1",r,d,m,E=()=>{m.forEach(t=>{let e=t.getAttribute("data-month"),n=t.getAttribute("data-city");s&&l?e===s&&n===l?t.classList.remove("calendar-item--no-match"):t.classList.add("calendar-item--no-match"):s||l?e===s||n===l?t.classList.remove("calendar-item--no-match"):t.classList.add("calendar-item--no-match"):t.classList.remove("calendar-item--no-match")})},w=()=>{console.log("initCalendarFilter"),r=document.getElementById("js-select-month"),d=document.getElementById("js-select-city");let t=[],e=[];m=document.querySelectorAll(".calendar-item"),m.forEach(n=>{let i=n.getAttribute("data-month");t.includes(i)||t.push(i);let o=n.getAttribute("data-city");e.includes(o)||e.push(o)}),t.push(c),L(r,t),e.sort().forEach(n=>{let i=a(n," ");i=a(i,"-"),f(d,n,i)}),u(r,c,E),p(d,c,E)},C=()=>{if(window.location.hash){let t=window.location.hash.replace("#","");if(t){let e=g(r,t,!1);e&&(r.value=e,r.dispatchEvent(new Event("change")))}}};window.addEventListener("load",()=>{w(),C()});})();
