(()=>{var S=(e,t,o)=>{let n={value:t,label:o};e.push(n)},v=S;var M=(e,t)=>{let o="";return e.includes(t)?e.split(t).forEach((i,r)=>{let l=r>0?t:"";o+=l+M(i,t)}):o=e.charAt(0).toUpperCase()+e.slice(1),o},p=M;var N=e=>{let t=e;return t=p(t," "),t=p(t,"-"),t=t.replace(" Am "," am "),t=t.replace(" Bei "," bei "),t=t.replace(" Ob Der "," ob der "),t.trim(),t},A=N;var T=(e,t,o)=>{let n="";for(let i=0;i<e.length;i++)o?e[i].label===t&&(n=e[i].value):e[i].label.toLowerCase()===t.toLowerCase()&&(n=e[i].value);return n},C=T;var B=(e,t)=>{let o=[];for(let n=0;n<e.length;n++){let i=e[n].value;t.includes(i)&&o.push(e[n])}return o},f=B;var s=[],H=(e,t)=>{let o=s.findIndex(n=>n.key===e);o!==-1?s[o].value=t:s.push({key:e,value:t})},k=e=>{s.reduce,s.splice(s.findIndex(t=>t.key===e),1)},u=(e,t,o,n)=>{t&&t.addEventListener("khao-select-field-change",i=>{let r=i.detail.value;r!=o?H(e,r):k(e),n()})};var a="-1",c,y,h,g,E=[],O=[],x=[],d,m=()=>{d.forEach(e=>{let t=e.getAttribute("data-month"),o=e.getAttribute("data-city"),n=e.getAttribute("data-country");e.classList.remove("calendar-item--no-match"),s.forEach(i=>{let r=!0;i.key==="month"&&t!==i.value&&(r=!1),i.key==="country"&&n!==i.value&&(r=!1),i.key==="city"&&o!==i.value&&(r=!1),r||e.classList.add("calendar-item--no-match")})}),j()},j=()=>{let e=document.querySelectorAll(".calendar-item--no-match"),t=d.length,o=e.length,n=t-o;g=document.getElementById("js-display-number-of-matches"),g&&(g.innerHTML=`${n}`)},w=()=>{let e=JSON.parse(document.getElementById("js-filter-month-values").textContent),t=JSON.parse(document.getElementById("js-filter-country-values").textContent),o=JSON.parse(document.getElementById("js-filter-city-values").textContent),n=[],i=[],r=[];d=document.querySelectorAll(".calendar-item"),d.forEach(l=>{let b=l.getAttribute("data-month");n.includes(b)||n.push(b);let F=l.getAttribute("data-country");r.includes(F)||r.push(F);let L=l.getAttribute("data-city");i.includes(L)||i.push(L)}),n.push(a),E=f(e,n),O=o,i.sort().forEach(l=>{v(O,l,A(l))}),r.push(a),x=f(t,r),c=document.getElementById("js-select-month"),c.setAttribute("options",JSON.stringify(E)),h=document.getElementById("js-select-country"),h.setAttribute("options",JSON.stringify(x)),y=document.getElementById("js-select-city"),y.setAttribute("options",JSON.stringify(O)),u("month",c,a,m),u("country",h,a,m),u("city",y,a,m)},V=()=>{if(window.location.hash){let e=window.location.hash.replace("#","");if(console.log("monthString",e),e){let t=C(E,e,!1);if(t){c=document.getElementById("js-select-month"),c.setAttribute("selectedValue",t);let o="khao-select-field-change",n=new CustomEvent(o,{detail:{value:t},bubbles:!0,composed:!0});c.dispatchEvent(n)}}}},I=()=>{w(),V(),m()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{I()}):I();})();
