(()=>{function d(){fetch("/index.json",{method:"get"}).then(o=>o.json()).then(o=>{var t=o.length-1,a=Math.floor(Math.random()*t)+1;if(a<=t){var e=o[a];e&&(window.location.href=e.u)}}).catch(o=>{})}var n=d;n();})();
