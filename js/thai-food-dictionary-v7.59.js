(()=>{var c="-",n=null,t=null,l=null,p=null,r=null,E=null,d=null,L=null,g=null,w=()=>{let e=document.getElementsByClassName("js-thai-word-table"),y=document.getElementById("thai-word-output");for(let u=0;u<e.length;u++){let m=e[u].getElementsByTagName("tr");for(let s=0;s<m.length;s++){let b=m[s],f=function(a){return function(){let i=a.getElementsByTagName("td")[0],o=a.getElementsByTagName("td")[1];if(i.innerHTML&&o.innerHTML){let T=i.innerHTML;H(T);let k=o.innerHTML;M(k),y.scrollIntoView()}}};b.addEventListener("click",a=>{let i=a.target;if(i.tagName==="TD"){let o=i.parentElement;f(o)()}})}}},B=()=>{n=document.getElementById("js-output-transcription"),t=document.getElementById("js-output-thai"),l=document.getElementById("js-output-thai-speak")},I=()=>{p=document.getElementById("js-clear-both"),r=document.getElementById("js-copy-trans-to-clipboard"),E=document.getElementById("js-speak-thai"),d=document.getElementById("js-copy-thai-to-clipboard"),L=document.getElementById("js-search"),g=document.getElementById("js-clickthai"),p.addEventListener("click",()=>{h(),H(c),v(),M(c)}),E.addEventListener("click",()=>{l&&l.click()}),r.addEventListener("click",()=>{n&&window.copyToClipboard(n.value.trim(),r)}),d.addEventListener("click",()=>{t&&window.copyToClipboard(t.value.trim(),d)}),L.addEventListener("click",()=>{O()}),g.addEventListener("click",()=>{C()})},h=()=>{n&&(n.value="")},H=e=>{n&&(n.value.trim()===c&&h(),n.value=n.value+" "+e)},v=()=>{t&&(t.value=""),l&&(l.innerHTML="")},M=e=>{t&&(t.value===c&&v(),t.value=t.value+e),l&&(l.innerHTML=l.innerHTML+e)},O=()=>{if(t&&t.value){let e="https://www.google.com/search?q="+t.value;window.open(e,"_blank")}},C=()=>{if(t&&t.value){let e=`/__cl__/?___=${t.value.trim()}`;window.open(e,"_blank")}};addEventListener("DOMContentLoaded",()=>{w(),B(),I()});})();
