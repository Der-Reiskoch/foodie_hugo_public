(()=>{var n="",i="2020";var f=function(){var a=i?parseInt(i,10):1970,t=n?new Date(n):new Date,o=t.getDate(),c=t.getMonth()+1,l=t.getFullYear(),s=document.querySelectorAll("input[type=checkbox]");for(let r=0;r<s.length;r++){let e=s[r];var d=parseInt(e.dataset.day,10);l===a?c===12&&d<=o&&(e.disabled=!1,d<o&&(e.checked=!0)):l>a&&(e.disabled=!1,e.checked=!0)}};window.addEventListener("load",function(a){setTimeout(function(){f()},500)});})();
