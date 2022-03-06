const CACHE_VERSION=1,BASE_CACHE_FILES=["/index.json","/manifest.json","/favicon.ico","/img/avatar3.jpg","img/logo.svg","img/lazy-loading.png","/suchen/index.html"],OFFLINE_CACHE_FILES=["https://der-reiskoch.github.io/foodie_hugo_media/media/_misc/teller_leer.jpg","/offline/index.html"],NOT_FOUND_CACHE_FILES=["https://der-reiskoch.github.io/foodie_hugo_media/media/_misc/teller_leer.jpg","/nicht-gefunden/index.html"],OFFLINE_PAGE="/offline/index.html",NOT_FOUND_PAGE="/nicht-gefunden/index.html",CACHE_VERSIONS={assets:"assets-v"+CACHE_VERSION,content:"content-v"+CACHE_VERSION,offline:"offline-v"+CACHE_VERSION,notFound:"404-v"+CACHE_VERSION},MAX_TTL={'/':1800,html:1800,json:86400,js:86400,css:86400},CACHE_BLACKLIST=[e=>e.indexOf("localhost")!==-1],SUPPORTED_METHODS=["GET"];function isBlacklisted(e){return CACHE_BLACKLIST.length>0&&!CACHE_BLACKLIST.filter(t=>typeof t=="function"&&!t(e)).length}function getFileExtension(t){let e=t.split(".").reverse()[0].split("?")[0];return e.endsWith("/")?"/":e}function getTTL(e){if(typeof e=="string"){let t=getFileExtension(e);return typeof MAX_TTL[t]=="number"?MAX_TTL[t]:null}else return null}function installServiceWorker(){return Promise.all([caches.open(CACHE_VERSIONS.assets).then(e=>e.addAll(BASE_CACHE_FILES)),caches.open(CACHE_VERSIONS.offline).then(e=>e.addAll(OFFLINE_CACHE_FILES)),caches.open(CACHE_VERSIONS.notFound).then(e=>e.addAll(NOT_FOUND_CACHE_FILES))]).then(()=>self.skipWaiting())}function cleanupLegacyCache(){let e=Object.keys(CACHE_VERSIONS).map(e=>CACHE_VERSIONS[e]);return new Promise((t,n)=>{caches.keys().then(t=>legacyKeys=t.filter(t=>!~e.indexOf(t))).then(e=>{e.length?Promise.all(e.map(e=>caches.delete(e))).then(()=>{t()}).catch(e=>{n(e)}):t()}).catch(()=>{n()})})}function precacheUrl(e){isBlacklisted(e)||caches.open(CACHE_VERSIONS.content).then(t=>{t.match(e).then(t=>t?null:fetch(e)).then(n=>n?t.put(e,n.clone()):null)})}self.addEventListener("install",e=>{e.waitUntil(Promise.all([installServiceWorker(),self.skipWaiting()]))}),self.addEventListener("activate",e=>{e.waitUntil(Promise.all([cleanupLegacyCache(),self.clients.claim(),self.skipWaiting()]).catch(t=>{e.skipWaiting()}))}),self.addEventListener("fetch",e=>{e.respondWith(caches.open(CACHE_VERSIONS.content).then(t=>t.match(e.request).then(n=>{if(n){let o=n.headers.entries(),s=null;for(let e of o)e[0]==="date"&&(s=new Date(e[1]));if(s){let i=parseInt(((new Date).getTime()-s.getTime())/1e3),o=getTTL(e.request.url);return o&&i>o?new Promise(s=>fetch(e.request.clone()).then(o=>{o?(t.put(e.request,o.clone()),s(o)):s(n)}).catch(()=>{s(n)})).catch(e=>n):n}else return n}else return null}).then(n=>n||fetch(e.request.clone()).then(n=>n.status<400?(~SUPPORTED_METHODS.indexOf(e.request.method)&&!isBlacklisted(e.request.url)&&t.put(e.request,n.clone()),n):caches.open(CACHE_VERSIONS.notFound).then(e=>e.match(NOT_FOUND_PAGE))).then(e=>{if(e)return e}).catch(()=>caches.open(CACHE_VERSIONS.offline).then(e=>e.match(OFFLINE_PAGE)))).catch(e=>{throw console.error("  Error in fetch handler:",e),e})))}),self.addEventListener("message",e=>{if(typeof e.data=="object"&&typeof e.data.action=="string")switch(e.data.action){case"cache":precacheUrl(e.data.url);break;default:console.log("Unknown action: "+e.data.action);break}})