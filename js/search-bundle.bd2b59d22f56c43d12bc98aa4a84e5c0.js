(()=>{var Fe=Object.create;var ae=Object.defineProperty;var je=Object.getOwnPropertyDescriptor;var De=Object.getOwnPropertyNames;var Ae=Object.getPrototypeOf,$e=Object.prototype.hasOwnProperty;var ze=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Me=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of De(e))!$e.call(t,n)&&n!==r&&ae(t,n,{get:()=>e[n],enumerable:!(i=je(e,n))||i.enumerable});return t};var Be=(t,e,r)=>(r=t!=null?Fe(Ae(t)):{},Me(e||!t||!t.__esModule?ae(r,"default",{value:t,enumerable:!0}):r,t));var Qe=ze((Se,we)=>{(function(){var t=function(e){var r=new t.Builder;return r.pipeline.add(t.trimmer,t.stopWordFilter,t.stemmer),r.searchPipeline.add(t.stemmer),e.call(r,r),r.build()};t.version="2.3.9";t.utils={},t.utils.warn=function(e){return function(r){e.console&&console.warn&&console.warn(r)}}(this),t.utils.asString=function(e){return e==null?"":e.toString()},t.utils.clone=function(e){if(e==null)return e;for(var r=Object.create(null),i=Object.keys(e),n=0;n<i.length;n++){var s=i[n],a=e[s];if(Array.isArray(a)){r[s]=a.slice();continue}if(typeof a=="string"||typeof a=="number"||typeof a=="boolean"){r[s]=a;continue}throw new TypeError("clone is not deep and does not support nested objects")}return r},t.FieldRef=function(e,r,i){this.docRef=e,this.fieldName=r,this._stringValue=i},t.FieldRef.joiner="/",t.FieldRef.fromString=function(e){var r=e.indexOf(t.FieldRef.joiner);if(r===-1)throw"malformed field ref string";var i=e.slice(0,r),n=e.slice(r+1);return new t.FieldRef(n,i,e)},t.FieldRef.prototype.toString=function(){return this._stringValue==null&&(this._stringValue=this.fieldName+t.FieldRef.joiner+this.docRef),this._stringValue};t.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length;for(var r=0;r<this.length;r++)this.elements[e[r]]=!0}else this.length=0},t.Set.complete={intersect:function(e){return e},union:function(){return this},contains:function(){return!0}},t.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},t.Set.prototype.contains=function(e){return!!this.elements[e]},t.Set.prototype.intersect=function(e){var r,i,n,s=[];if(e===t.Set.complete)return this;if(e===t.Set.empty)return e;this.length<e.length?(r=this,i=e):(r=e,i=this),n=Object.keys(r.elements);for(var a=0;a<n.length;a++){var o=n[a];o in i.elements&&s.push(o)}return new t.Set(s)},t.Set.prototype.union=function(e){return e===t.Set.complete?t.Set.complete:e===t.Set.empty?this:new t.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},t.idf=function(e,r){var i=0;for(var n in e)n!="_index"&&(i+=Object.keys(e[n]).length);var s=(r-i+.5)/(i+.5);return Math.log(1+Math.abs(s))},t.Token=function(e,r){this.str=e||"",this.metadata=r||{}},t.Token.prototype.toString=function(){return this.str},t.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},t.Token.prototype.clone=function(e){return e=e||function(r){return r},new t.Token(e(this.str,this.metadata),this.metadata)};t.tokenizer=function(e,r){if(e==null||e==null)return[];if(Array.isArray(e))return e.map(function(m){return new t.Token(t.utils.asString(m).toLowerCase(),t.utils.clone(r))});for(var i=e.toString().toLowerCase(),n=i.length,s=[],a=0,o=0;a<=n;a++){var c=i.charAt(a),u=a-o;if(c.match(t.tokenizer.separator)||a==n){if(u>0){var d=t.utils.clone(r)||{};d.position=[o,u],d.index=s.length,s.push(new t.Token(i.slice(o,a),d))}o=a+1}}return s},t.tokenizer.separator=/[\s\-]+/;t.Pipeline=function(){this._stack=[]},t.Pipeline.registeredFunctions=Object.create(null),t.Pipeline.registerFunction=function(e,r){r in this.registeredFunctions&&t.utils.warn("Overwriting existing registered function: "+r),e.label=r,t.Pipeline.registeredFunctions[e.label]=e},t.Pipeline.warnIfFunctionNotRegistered=function(e){var r=e.label&&e.label in this.registeredFunctions;r||t.utils.warn(`Function is not registered with pipeline. This may cause problems when serialising the index.
`,e)},t.Pipeline.load=function(e){var r=new t.Pipeline;return e.forEach(function(i){var n=t.Pipeline.registeredFunctions[i];if(n)r.add(n);else throw new Error("Cannot load unregistered function: "+i)}),r},t.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach(function(r){t.Pipeline.warnIfFunctionNotRegistered(r),this._stack.push(r)},this)},t.Pipeline.prototype.after=function(e,r){t.Pipeline.warnIfFunctionNotRegistered(r);var i=this._stack.indexOf(e);if(i==-1)throw new Error("Cannot find existingFn");i=i+1,this._stack.splice(i,0,r)},t.Pipeline.prototype.before=function(e,r){t.Pipeline.warnIfFunctionNotRegistered(r);var i=this._stack.indexOf(e);if(i==-1)throw new Error("Cannot find existingFn");this._stack.splice(i,0,r)},t.Pipeline.prototype.remove=function(e){var r=this._stack.indexOf(e);r!=-1&&this._stack.splice(r,1)},t.Pipeline.prototype.run=function(e){for(var r=this._stack.length,i=0;i<r;i++){for(var n=this._stack[i],s=[],a=0;a<e.length;a++){var o=n(e[a],a,e);if(!(o==null||o===""))if(Array.isArray(o))for(var c=0;c<o.length;c++)s.push(o[c]);else s.push(o)}e=s}return e},t.Pipeline.prototype.runString=function(e,r){var i=new t.Token(e,r);return this.run([i]).map(function(n){return n.toString()})},t.Pipeline.prototype.reset=function(){this._stack=[]},t.Pipeline.prototype.toJSON=function(){return this._stack.map(function(e){return t.Pipeline.warnIfFunctionNotRegistered(e),e.label})};t.Vector=function(e){this._magnitude=0,this.elements=e||[]},t.Vector.prototype.positionForIndex=function(e){if(this.elements.length==0)return 0;for(var r=0,i=this.elements.length/2,n=i-r,s=Math.floor(n/2),a=this.elements[s*2];n>1&&(a<e&&(r=s),a>e&&(i=s),a!=e);)n=i-r,s=r+Math.floor(n/2),a=this.elements[s*2];if(a==e||a>e)return s*2;if(a<e)return(s+1)*2},t.Vector.prototype.insert=function(e,r){this.upsert(e,r,function(){throw"duplicate index"})},t.Vector.prototype.upsert=function(e,r,i){this._magnitude=0;var n=this.positionForIndex(e);this.elements[n]==e?this.elements[n+1]=i(this.elements[n+1],r):this.elements.splice(n,0,e,r)},t.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,r=this.elements.length,i=1;i<r;i+=2){var n=this.elements[i];e+=n*n}return this._magnitude=Math.sqrt(e)},t.Vector.prototype.dot=function(e){for(var r=0,i=this.elements,n=e.elements,s=i.length,a=n.length,o=0,c=0,u=0,d=0;u<s&&d<a;)o=i[u],c=n[d],o<c?u+=2:o>c?d+=2:o==c&&(r+=i[u+1]*n[d+1],u+=2,d+=2);return r},t.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},t.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),r=1,i=0;r<this.elements.length;r+=2,i++)e[i]=this.elements[r];return e},t.Vector.prototype.toJSON=function(){return this.elements};t.stemmer=function(){var e={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},r={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},i="[^aeiou]",n="[aeiouy]",s=i+"[^aeiouy]*",a=n+"[aeiou]*",o="^("+s+")?"+a+s,c="^("+s+")?"+a+s+"("+a+")?$",u="^("+s+")?"+a+s+a+s,d="^("+s+")?"+n,m=new RegExp(o),g=new RegExp(u),L=new RegExp(c),v=new RegExp(d),b=/^(.+?)(ss|i)es$/,f=/^(.+?)([^s])s$/,p=/^(.+?)eed$/,w=/^(.+?)(ed|ing)$/,S=/.$/,I=/(at|bl|iz)$/,C=new RegExp("([^aeiouylsz])\\1$"),N=new RegExp("^"+s+n+"[^aeiouwxy]$"),$=/^(.+?[^aeiou])y$/,V=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,H=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,z=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,q=/^(.+?)(s|t)(ion)$/,T=/^(.+?)e$/,U=/ll$/,W=new RegExp("^"+s+n+"[^aeiouwxy]$"),M=function(l){var y,E,Q,h,x,P,j;if(l.length<3)return l;if(Q=l.substr(0,1),Q=="y"&&(l=Q.toUpperCase()+l.substr(1)),h=b,x=f,h.test(l)?l=l.replace(h,"$1$2"):x.test(l)&&(l=l.replace(x,"$1$2")),h=p,x=w,h.test(l)){var k=h.exec(l);h=m,h.test(k[1])&&(h=S,l=l.replace(h,""))}else if(x.test(l)){var k=x.exec(l);y=k[1],x=v,x.test(y)&&(l=y,x=I,P=C,j=N,x.test(l)?l=l+"e":P.test(l)?(h=S,l=l.replace(h,"")):j.test(l)&&(l=l+"e"))}if(h=$,h.test(l)){var k=h.exec(l);y=k[1],l=y+"i"}if(h=V,h.test(l)){var k=h.exec(l);y=k[1],E=k[2],h=m,h.test(y)&&(l=y+e[E])}if(h=H,h.test(l)){var k=h.exec(l);y=k[1],E=k[2],h=m,h.test(y)&&(l=y+r[E])}if(h=z,x=q,h.test(l)){var k=h.exec(l);y=k[1],h=g,h.test(y)&&(l=y)}else if(x.test(l)){var k=x.exec(l);y=k[1]+k[2],x=g,x.test(y)&&(l=y)}if(h=T,h.test(l)){var k=h.exec(l);y=k[1],h=g,x=L,P=W,(h.test(y)||x.test(y)&&!P.test(y))&&(l=y)}return h=U,x=g,h.test(l)&&x.test(l)&&(h=S,l=l.replace(h,"")),Q=="y"&&(l=Q.toLowerCase()+l.substr(1)),l};return function(F){return F.update(M)}}(),t.Pipeline.registerFunction(t.stemmer,"stemmer");t.generateStopWordFilter=function(e){var r=e.reduce(function(i,n){return i[n]=n,i},{});return function(i){if(i&&r[i.toString()]!==i.toString())return i}},t.stopWordFilter=t.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),t.Pipeline.registerFunction(t.stopWordFilter,"stopWordFilter");t.trimmer=function(e){return e.update(function(r){return r.replace(/^\W+/,"").replace(/\W+$/,"")})},t.Pipeline.registerFunction(t.trimmer,"trimmer");t.TokenSet=function(){this.final=!1,this.edges={},this.id=t.TokenSet._nextId,t.TokenSet._nextId+=1},t.TokenSet._nextId=1,t.TokenSet.fromArray=function(e){for(var r=new t.TokenSet.Builder,i=0,n=e.length;i<n;i++)r.insert(e[i]);return r.finish(),r.root},t.TokenSet.fromClause=function(e){return"editDistance"in e?t.TokenSet.fromFuzzyString(e.term,e.editDistance):t.TokenSet.fromString(e.term)},t.TokenSet.fromFuzzyString=function(e,r){for(var i=new t.TokenSet,n=[{node:i,editsRemaining:r,str:e}];n.length;){var s=n.pop();if(s.str.length>0){var a=s.str.charAt(0),o;a in s.node.edges?o=s.node.edges[a]:(o=new t.TokenSet,s.node.edges[a]=o),s.str.length==1&&(o.final=!0),n.push({node:o,editsRemaining:s.editsRemaining,str:s.str.slice(1)})}if(s.editsRemaining!=0){if("*"in s.node.edges)var c=s.node.edges["*"];else{var c=new t.TokenSet;s.node.edges["*"]=c}if(s.str.length==0&&(c.final=!0),n.push({node:c,editsRemaining:s.editsRemaining-1,str:s.str}),s.str.length>1&&n.push({node:s.node,editsRemaining:s.editsRemaining-1,str:s.str.slice(1)}),s.str.length==1&&(s.node.final=!0),s.str.length>=1){if("*"in s.node.edges)var u=s.node.edges["*"];else{var u=new t.TokenSet;s.node.edges["*"]=u}s.str.length==1&&(u.final=!0),n.push({node:u,editsRemaining:s.editsRemaining-1,str:s.str.slice(1)})}if(s.str.length>1){var d=s.str.charAt(0),m=s.str.charAt(1),g;m in s.node.edges?g=s.node.edges[m]:(g=new t.TokenSet,s.node.edges[m]=g),s.str.length==1&&(g.final=!0),n.push({node:g,editsRemaining:s.editsRemaining-1,str:d+s.str.slice(2)})}}}return i},t.TokenSet.fromString=function(e){for(var r=new t.TokenSet,i=r,n=0,s=e.length;n<s;n++){var a=e[n],o=n==s-1;if(a=="*")r.edges[a]=r,r.final=o;else{var c=new t.TokenSet;c.final=o,r.edges[a]=c,r=c}}return i},t.TokenSet.prototype.toArray=function(){for(var e=[],r=[{prefix:"",node:this}];r.length;){var i=r.pop(),n=Object.keys(i.node.edges),s=n.length;i.node.final&&(i.prefix.charAt(0),e.push(i.prefix));for(var a=0;a<s;a++){var o=n[a];r.push({prefix:i.prefix.concat(o),node:i.node.edges[o]})}}return e},t.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",r=Object.keys(this.edges).sort(),i=r.length,n=0;n<i;n++){var s=r[n],a=this.edges[s];e=e+s+a.id}return e},t.TokenSet.prototype.intersect=function(e){for(var r=new t.TokenSet,i=void 0,n=[{qNode:e,output:r,node:this}];n.length;){i=n.pop();for(var s=Object.keys(i.qNode.edges),a=s.length,o=Object.keys(i.node.edges),c=o.length,u=0;u<a;u++)for(var d=s[u],m=0;m<c;m++){var g=o[m];if(g==d||d=="*"){var L=i.node.edges[g],v=i.qNode.edges[d],b=L.final&&v.final,f=void 0;g in i.output.edges?(f=i.output.edges[g],f.final=f.final||b):(f=new t.TokenSet,f.final=b,i.output.edges[g]=f),n.push({qNode:v,output:f,node:L})}}}return r},t.TokenSet.Builder=function(){this.previousWord="",this.root=new t.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},t.TokenSet.Builder.prototype.insert=function(e){var r,i=0;if(e<this.previousWord)throw new Error("Out of order word insertion");for(var n=0;n<e.length&&n<this.previousWord.length&&e[n]==this.previousWord[n];n++)i++;this.minimize(i),this.uncheckedNodes.length==0?r=this.root:r=this.uncheckedNodes[this.uncheckedNodes.length-1].child;for(var n=i;n<e.length;n++){var s=new t.TokenSet,a=e[n];r.edges[a]=s,this.uncheckedNodes.push({parent:r,char:a,child:s}),r=s}r.final=!0,this.previousWord=e},t.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},t.TokenSet.Builder.prototype.minimize=function(e){for(var r=this.uncheckedNodes.length-1;r>=e;r--){var i=this.uncheckedNodes[r],n=i.child.toString();n in this.minimizedNodes?i.parent.edges[i.char]=this.minimizedNodes[n]:(i.child._str=n,this.minimizedNodes[n]=i.child),this.uncheckedNodes.pop()}};t.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},t.Index.prototype.search=function(e){return this.query(function(r){var i=new t.QueryParser(e,r);i.parse()})},t.Index.prototype.query=function(e){for(var r=new t.Query(this.fields),i=Object.create(null),n=Object.create(null),s=Object.create(null),a=Object.create(null),o=Object.create(null),c=0;c<this.fields.length;c++)n[this.fields[c]]=new t.Vector;e.call(r,r);for(var c=0;c<r.clauses.length;c++){var u=r.clauses[c],d=null,m=t.Set.empty;u.usePipeline?d=this.pipeline.runString(u.term,{fields:u.fields}):d=[u.term];for(var g=0;g<d.length;g++){var L=d[g];u.term=L;var v=t.TokenSet.fromClause(u),b=this.tokenSet.intersect(v).toArray();if(b.length===0&&u.presence===t.Query.presence.REQUIRED){for(var f=0;f<u.fields.length;f++){var p=u.fields[f];a[p]=t.Set.empty}break}for(var w=0;w<b.length;w++)for(var S=b[w],I=this.invertedIndex[S],C=I._index,f=0;f<u.fields.length;f++){var p=u.fields[f],N=I[p],$=Object.keys(N),V=S+"/"+p,H=new t.Set($);if(u.presence==t.Query.presence.REQUIRED&&(m=m.union(H),a[p]===void 0&&(a[p]=t.Set.complete)),u.presence==t.Query.presence.PROHIBITED){o[p]===void 0&&(o[p]=t.Set.empty),o[p]=o[p].union(H);continue}if(n[p].upsert(C,u.boost,function(Re,Ce){return Re+Ce}),!s[V]){for(var z=0;z<$.length;z++){var q=$[z],T=new t.FieldRef(q,p),U=N[q],W;(W=i[T])===void 0?i[T]=new t.MatchData(S,p,U):W.add(S,p,U)}s[V]=!0}}}if(u.presence===t.Query.presence.REQUIRED)for(var f=0;f<u.fields.length;f++){var p=u.fields[f];a[p]=a[p].intersect(m)}}for(var M=t.Set.complete,F=t.Set.empty,c=0;c<this.fields.length;c++){var p=this.fields[c];a[p]&&(M=M.intersect(a[p])),o[p]&&(F=F.union(o[p]))}var l=Object.keys(i),y=[],E=Object.create(null);if(r.isNegated()){l=Object.keys(this.fieldVectors);for(var c=0;c<l.length;c++){var T=l[c],Q=t.FieldRef.fromString(T);i[T]=new t.MatchData}}for(var c=0;c<l.length;c++){var Q=t.FieldRef.fromString(l[c]),h=Q.docRef;if(M.contains(h)&&!F.contains(h)){var x=this.fieldVectors[Q],P=n[Q.fieldName].similarity(x),j;if((j=E[h])!==void 0)j.score+=P,j.matchData.combine(i[Q]);else{var k={ref:h,score:P,matchData:i[Q]};E[h]=k,y.push(k)}}}return y.sort(function(Pe,Oe){return Oe.score-Pe.score})},t.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map(function(i){return[i,this.invertedIndex[i]]},this),r=Object.keys(this.fieldVectors).map(function(i){return[i,this.fieldVectors[i].toJSON()]},this);return{version:t.version,fields:this.fields,fieldVectors:r,invertedIndex:e,pipeline:this.pipeline.toJSON()}},t.Index.load=function(e){var r={},i={},n=e.fieldVectors,s=Object.create(null),a=e.invertedIndex,o=new t.TokenSet.Builder,c=t.Pipeline.load(e.pipeline);e.version!=t.version&&t.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+t.version+"' does not match serialized index '"+e.version+"'");for(var u=0;u<n.length;u++){var d=n[u],m=d[0],g=d[1];i[m]=new t.Vector(g)}for(var u=0;u<a.length;u++){var d=a[u],L=d[0],v=d[1];o.insert(L),s[L]=v}return o.finish(),r.fields=e.fields,r.fieldVectors=i,r.invertedIndex=s,r.tokenSet=o.root,r.pipeline=c,new t.Index(r)};t.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=t.tokenizer,this.pipeline=new t.Pipeline,this.searchPipeline=new t.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},t.Builder.prototype.ref=function(e){this._ref=e},t.Builder.prototype.field=function(e,r){if(/\//.test(e))throw new RangeError("Field '"+e+"' contains illegal character '/'");this._fields[e]=r||{}},t.Builder.prototype.b=function(e){e<0?this._b=0:e>1?this._b=1:this._b=e},t.Builder.prototype.k1=function(e){this._k1=e},t.Builder.prototype.add=function(e,r){var i=e[this._ref],n=Object.keys(this._fields);this._documents[i]=r||{},this.documentCount+=1;for(var s=0;s<n.length;s++){var a=n[s],o=this._fields[a].extractor,c=o?o(e):e[a],u=this.tokenizer(c,{fields:[a]}),d=this.pipeline.run(u),m=new t.FieldRef(i,a),g=Object.create(null);this.fieldTermFrequencies[m]=g,this.fieldLengths[m]=0,this.fieldLengths[m]+=d.length;for(var L=0;L<d.length;L++){var v=d[L];if(g[v]==null&&(g[v]=0),g[v]+=1,this.invertedIndex[v]==null){var b=Object.create(null);b._index=this.termIndex,this.termIndex+=1;for(var f=0;f<n.length;f++)b[n[f]]=Object.create(null);this.invertedIndex[v]=b}this.invertedIndex[v][a][i]==null&&(this.invertedIndex[v][a][i]=Object.create(null));for(var p=0;p<this.metadataWhitelist.length;p++){var w=this.metadataWhitelist[p],S=v.metadata[w];this.invertedIndex[v][a][i][w]==null&&(this.invertedIndex[v][a][i][w]=[]),this.invertedIndex[v][a][i][w].push(S)}}}},t.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),r=e.length,i={},n={},s=0;s<r;s++){var a=t.FieldRef.fromString(e[s]),o=a.fieldName;n[o]||(n[o]=0),n[o]+=1,i[o]||(i[o]=0),i[o]+=this.fieldLengths[a]}for(var c=Object.keys(this._fields),s=0;s<c.length;s++){var u=c[s];i[u]=i[u]/n[u]}this.averageFieldLength=i},t.Builder.prototype.createFieldVectors=function(){for(var e={},r=Object.keys(this.fieldTermFrequencies),i=r.length,n=Object.create(null),s=0;s<i;s++){for(var a=t.FieldRef.fromString(r[s]),o=a.fieldName,c=this.fieldLengths[a],u=new t.Vector,d=this.fieldTermFrequencies[a],m=Object.keys(d),g=m.length,L=this._fields[o].boost||1,v=this._documents[a.docRef].boost||1,b=0;b<g;b++){var f=m[b],p=d[f],w=this.invertedIndex[f]._index,S,I,C;n[f]===void 0?(S=t.idf(this.invertedIndex[f],this.documentCount),n[f]=S):S=n[f],I=S*((this._k1+1)*p)/(this._k1*(1-this._b+this._b*(c/this.averageFieldLength[o]))+p),I*=L,I*=v,C=Math.round(I*1e3)/1e3,u.insert(w,C)}e[a]=u}this.fieldVectors=e},t.Builder.prototype.createTokenSet=function(){this.tokenSet=t.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},t.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new t.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},t.Builder.prototype.use=function(e){var r=Array.prototype.slice.call(arguments,1);r.unshift(this),e.apply(this,r)},t.MatchData=function(e,r,i){for(var n=Object.create(null),s=Object.keys(i||{}),a=0;a<s.length;a++){var o=s[a];n[o]=i[o].slice()}this.metadata=Object.create(null),e!==void 0&&(this.metadata[e]=Object.create(null),this.metadata[e][r]=n)},t.MatchData.prototype.combine=function(e){for(var r=Object.keys(e.metadata),i=0;i<r.length;i++){var n=r[i],s=Object.keys(e.metadata[n]);this.metadata[n]==null&&(this.metadata[n]=Object.create(null));for(var a=0;a<s.length;a++){var o=s[a],c=Object.keys(e.metadata[n][o]);this.metadata[n][o]==null&&(this.metadata[n][o]=Object.create(null));for(var u=0;u<c.length;u++){var d=c[u];this.metadata[n][o][d]==null?this.metadata[n][o][d]=e.metadata[n][o][d]:this.metadata[n][o][d]=this.metadata[n][o][d].concat(e.metadata[n][o][d])}}}},t.MatchData.prototype.add=function(e,r,i){if(!(e in this.metadata)){this.metadata[e]=Object.create(null),this.metadata[e][r]=i;return}if(!(r in this.metadata[e])){this.metadata[e][r]=i;return}for(var n=Object.keys(i),s=0;s<n.length;s++){var a=n[s];a in this.metadata[e][r]?this.metadata[e][r][a]=this.metadata[e][r][a].concat(i[a]):this.metadata[e][r][a]=i[a]}},t.Query=function(e){this.clauses=[],this.allFields=e},t.Query.wildcard=new String("*"),t.Query.wildcard.NONE=0,t.Query.wildcard.LEADING=1,t.Query.wildcard.TRAILING=2,t.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},t.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=t.Query.wildcard.NONE),e.wildcard&t.Query.wildcard.LEADING&&e.term.charAt(0)!=t.Query.wildcard&&(e.term="*"+e.term),e.wildcard&t.Query.wildcard.TRAILING&&e.term.slice(-1)!=t.Query.wildcard&&(e.term=""+e.term+"*"),"presence"in e||(e.presence=t.Query.presence.OPTIONAL),this.clauses.push(e),this},t.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=t.Query.presence.PROHIBITED)return!1;return!0},t.Query.prototype.term=function(e,r){if(Array.isArray(e))return e.forEach(function(n){this.term(n,t.utils.clone(r))},this),this;var i=r||{};return i.term=e.toString(),this.clause(i),this},t.QueryParseError=function(e,r,i){this.name="QueryParseError",this.message=e,this.start=r,this.end=i},t.QueryParseError.prototype=new Error,t.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},t.QueryLexer.prototype.run=function(){for(var e=t.QueryLexer.lexText;e;)e=e(this)},t.QueryLexer.prototype.sliceString=function(){for(var e=[],r=this.start,i=this.pos,n=0;n<this.escapeCharPositions.length;n++)i=this.escapeCharPositions[n],e.push(this.str.slice(r,i)),r=i+1;return e.push(this.str.slice(r,this.pos)),this.escapeCharPositions.length=0,e.join("")},t.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},t.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},t.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return t.QueryLexer.EOS;var e=this.str.charAt(this.pos);return this.pos+=1,e},t.QueryLexer.prototype.width=function(){return this.pos-this.start},t.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},t.QueryLexer.prototype.backup=function(){this.pos-=1},t.QueryLexer.prototype.acceptDigitRun=function(){var e,r;do e=this.next(),r=e.charCodeAt(0);while(r>47&&r<58);e!=t.QueryLexer.EOS&&this.backup()},t.QueryLexer.prototype.more=function(){return this.pos<this.length},t.QueryLexer.EOS="EOS",t.QueryLexer.FIELD="FIELD",t.QueryLexer.TERM="TERM",t.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",t.QueryLexer.BOOST="BOOST",t.QueryLexer.PRESENCE="PRESENCE",t.QueryLexer.lexField=function(e){return e.backup(),e.emit(t.QueryLexer.FIELD),e.ignore(),t.QueryLexer.lexText},t.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(t.QueryLexer.TERM)),e.ignore(),e.more())return t.QueryLexer.lexText},t.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(t.QueryLexer.EDIT_DISTANCE),t.QueryLexer.lexText},t.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(t.QueryLexer.BOOST),t.QueryLexer.lexText},t.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(t.QueryLexer.TERM)},t.QueryLexer.termSeparator=t.tokenizer.separator,t.QueryLexer.lexText=function(e){for(;;){var r=e.next();if(r==t.QueryLexer.EOS)return t.QueryLexer.lexEOS;if(r.charCodeAt(0)==92){e.escapeCharacter();continue}if(r==":")return t.QueryLexer.lexField;if(r=="~")return e.backup(),e.width()>0&&e.emit(t.QueryLexer.TERM),t.QueryLexer.lexEditDistance;if(r=="^")return e.backup(),e.width()>0&&e.emit(t.QueryLexer.TERM),t.QueryLexer.lexBoost;if(r=="+"&&e.width()===1||r=="-"&&e.width()===1)return e.emit(t.QueryLexer.PRESENCE),t.QueryLexer.lexText;if(r.match(t.QueryLexer.termSeparator))return t.QueryLexer.lexTerm}},t.QueryParser=function(e,r){this.lexer=new t.QueryLexer(e),this.query=r,this.currentClause={},this.lexemeIdx=0},t.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var e=t.QueryParser.parseClause;e;)e=e(this);return this.query},t.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},t.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},t.QueryParser.prototype.nextClause=function(){var e=this.currentClause;this.query.clause(e),this.currentClause={}},t.QueryParser.parseClause=function(e){var r=e.peekLexeme();if(r!=null)switch(r.type){case t.QueryLexer.PRESENCE:return t.QueryParser.parsePresence;case t.QueryLexer.FIELD:return t.QueryParser.parseField;case t.QueryLexer.TERM:return t.QueryParser.parseTerm;default:var i="expected either a field or a term, found "+r.type;throw r.str.length>=1&&(i+=" with value '"+r.str+"'"),new t.QueryParseError(i,r.start,r.end)}},t.QueryParser.parsePresence=function(e){var r=e.consumeLexeme();if(r!=null){switch(r.str){case"-":e.currentClause.presence=t.Query.presence.PROHIBITED;break;case"+":e.currentClause.presence=t.Query.presence.REQUIRED;break;default:var i="unrecognised presence operator'"+r.str+"'";throw new t.QueryParseError(i,r.start,r.end)}var n=e.peekLexeme();if(n==null){var i="expecting term or field, found nothing";throw new t.QueryParseError(i,r.start,r.end)}switch(n.type){case t.QueryLexer.FIELD:return t.QueryParser.parseField;case t.QueryLexer.TERM:return t.QueryParser.parseTerm;default:var i="expecting term or field, found '"+n.type+"'";throw new t.QueryParseError(i,n.start,n.end)}}},t.QueryParser.parseField=function(e){var r=e.consumeLexeme();if(r!=null){if(e.query.allFields.indexOf(r.str)==-1){var i=e.query.allFields.map(function(a){return"'"+a+"'"}).join(", "),n="unrecognised field '"+r.str+"', possible fields: "+i;throw new t.QueryParseError(n,r.start,r.end)}e.currentClause.fields=[r.str];var s=e.peekLexeme();if(s==null){var n="expecting term, found nothing";throw new t.QueryParseError(n,r.start,r.end)}switch(s.type){case t.QueryLexer.TERM:return t.QueryParser.parseTerm;default:var n="expecting term, found '"+s.type+"'";throw new t.QueryParseError(n,s.start,s.end)}}},t.QueryParser.parseTerm=function(e){var r=e.consumeLexeme();if(r!=null){e.currentClause.term=r.str.toLowerCase(),r.str.indexOf("*")!=-1&&(e.currentClause.usePipeline=!1);var i=e.peekLexeme();if(i==null){e.nextClause();return}switch(i.type){case t.QueryLexer.TERM:return e.nextClause(),t.QueryParser.parseTerm;case t.QueryLexer.FIELD:return e.nextClause(),t.QueryParser.parseField;case t.QueryLexer.EDIT_DISTANCE:return t.QueryParser.parseEditDistance;case t.QueryLexer.BOOST:return t.QueryParser.parseBoost;case t.QueryLexer.PRESENCE:return e.nextClause(),t.QueryParser.parsePresence;default:var n="Unexpected lexeme type '"+i.type+"'";throw new t.QueryParseError(n,i.start,i.end)}}},t.QueryParser.parseEditDistance=function(e){var r=e.consumeLexeme();if(r!=null){var i=parseInt(r.str,10);if(isNaN(i)){var n="edit distance must be numeric";throw new t.QueryParseError(n,r.start,r.end)}e.currentClause.editDistance=i;var s=e.peekLexeme();if(s==null){e.nextClause();return}switch(s.type){case t.QueryLexer.TERM:return e.nextClause(),t.QueryParser.parseTerm;case t.QueryLexer.FIELD:return e.nextClause(),t.QueryParser.parseField;case t.QueryLexer.EDIT_DISTANCE:return t.QueryParser.parseEditDistance;case t.QueryLexer.BOOST:return t.QueryParser.parseBoost;case t.QueryLexer.PRESENCE:return e.nextClause(),t.QueryParser.parsePresence;default:var n="Unexpected lexeme type '"+s.type+"'";throw new t.QueryParseError(n,s.start,s.end)}}},t.QueryParser.parseBoost=function(e){var r=e.consumeLexeme();if(r!=null){var i=parseInt(r.str,10);if(isNaN(i)){var n="boost must be numeric";throw new t.QueryParseError(n,r.start,r.end)}e.currentClause.boost=i;var s=e.peekLexeme();if(s==null){e.nextClause();return}switch(s.type){case t.QueryLexer.TERM:return e.nextClause(),t.QueryParser.parseTerm;case t.QueryLexer.FIELD:return e.nextClause(),t.QueryParser.parseField;case t.QueryLexer.EDIT_DISTANCE:return t.QueryParser.parseEditDistance;case t.QueryLexer.BOOST:return t.QueryParser.parseBoost;case t.QueryLexer.PRESENCE:return e.nextClause(),t.QueryParser.parsePresence;default:var n="Unexpected lexeme type '"+s.type+"'";throw new t.QueryParseError(n,s.start,s.end)}}},function(e,r){typeof define=="function"&&define.amd?define(r):typeof Se=="object"?we.exports=r():e.lunr=r()}(this,function(){return t})})()});var oe="https://bilder.der-reiskoch.de",ue="Leider nichts gefunden!",le="/index.json",ce="Wonach suchst du?",he="Bitte vierstellige ID eingeben (z.B. 0333)",de="Bitte gib ein Suchwort mit mindestens drei Buchstaben ein",fe="alle";var pe={"asia shop":"asial\xE4den",asiashop:"asial\xE4den",banoi:"ban\xF4i",bittermelone:"bittergurke",bombai:"bombay",broccoli:"brokkoli",burma:"myanmar",coconut:"kokosnuss","curry paste":"currypaste",currygericht:"curry","dad daew":"daet diau","dad deaw":"daet diau",enokipilze:"enoki",entensalat:"larb ped","fak thong":"fak tong",fakthong:"fak tong",faktong:"fak tong",faschiertes:"hackfleisch",fingerwurz:"krachai",fischsauce:"fischso\xDFe",fishsauce:"fischso\xDFe",fisolen:"bohnen",fondue:"hotpot","fried rice":"khao pad","ga prao":"ga prau",gambas:"garnelen",g\u00E4ng:"gaeng",gaprau:"ga prau",geang:"gaeng","gaeng jued":"gaeng djued",gem\u00FCsecurry:"curry",gew\u00FCrzst\u00E4nder:"gew\xFCrzkarussel",gochuyang:"gochujang",goong:"gung","gra pau":"ga prau",grapau:"ga prau","hang lay":"hang lea","hot pot":"hotpot",huad:"lao pot","hung lay":"hang lea",jaew:"djau",jeaw:"djau","ka prao":"ga prau","kai jiao":"khai djiau",kai:"khai",kanom:"khanom","khanom jeeb":"khanom jeeb",karlrsruhe:"karlsruhe","kee mao":"khi mao",keemao:"khi mao","kiwi-sch\xE4ler":"streifensch\xE4ler",kiwisch\u00E4ler:"streifensch\xE4ler","konjak nudeln":"shirataki","kra pao":"ga prau","kra pau":"ga prau",krapao:"ga prau",krapau:"ga prau",krapow:"ga prau","la lot":"l\xE1 l\u1ED1t",laab:"laap",ladna:"rad na",laphet:"lahpet",larb:"laap",larp:"laap",masaman:"massaman",massamann:"massaman",mexico:"mexikanisch","mhu krob":"mhu grob","mii ":"mee",moo:"mhu",muh:"mhu",muu:"mhu","nam jim":"nam djim",namtok:"nam tok",normai:"nor mai",n\u00FCa:"nuea",nuae:"nuea",obergin:"aubergin",orlam:"or lam",padthai:"pad thai","pak choy":"pak choi",pakchoi:"pak choi",pakchoy:"pak choi",palabog:"palabok",panang:"panaeng",pan\u00E4ng:"panaeng",paneng:"panaeng","papaya salat":"som tam","peking ente":"pekingente",phet:"phed",pla:"plaa","plaa muk":"plaa muek","plaa m\xFCk":"plaa muek",radna:"rad na","rat na":"rad na",ratna:"rad na",reisnudeln:"nudeln",rheinwok:"rhein wok","rice cake":"tteokbokki",sauce:"so\xDFe",schabu:"shabu",shakshouka:"shakshuka",sojasprosse:"mungbohnensprosse","see ew":"si ju",somtam:"som tam",soya:"soja",squid:"tintenfisch",szechuan:"sichuan","tao jiew":"tao djiau",taojiew:"tao djiau","seua rong":"suea rong",teesalat:"lahpet","thai park":"thaiwiese",thaibasilikum:"thai-basilikum",thaichili:"thai-chili",thaipark:"thaiwiese",thalee:"talee","tom kah":"tom kha",toon:"dtun",woon:"wun",woonsen:"wun sen","yam nuea sap":"laap nuea",yum:"yam"};var He=(t,e)=>{let r=t?t.toLowerCase():"",i=new RegExp(Object.keys(e).join("|"),"gi");return r=r.replace(i,n=>e[n]),r},ge=He;var qe=t=>{let e=t?t.toLowerCase():"",r=e.length<5?"*":"~0.2";return e=e+r,e},me=qe;var Ue=()=>{let t=new Date,e=t.getDate(),r=t.getMonth()+1;return`${t.getFullYear()}-${r}-${e}`},ye=Ue;var We=()=>!!window.navigator.userAgent.match(/iPad|iPhone/i),ve=We;var Je=t=>typeof t=="string"&&t.length===4&&!Number.isNaN(Number(t)),G=Je;var Ge=(t,e)=>{let r="";return t&&e&&(r=`<div class="list__item post search_result__item">
        ${t}${e}
        </div>`),r},X=Ge;var Xe=`<img
    src="/svg/sprites/meta-sprite.svg#author"
    alt="Jens"
    title="Jens"
    class="meta__icon icon-author"
    width="16"
    height="16"
/>`,Ye=`<img
    src="/svg/sprites/meta-sprite.svg#category"
    alt="Kategorie"
    title="Kategorie"
    class="meta__icon icon-category"
    width="15"
    height="16"
/>`,Ze=`<img
    src="/svg/sprites/meta-sprite.svg#date"
    alt="Datum"
    title="Datum"
    class="meta__icon icon-date"
    width="16"
    height="16"
/>`,Ke={author:Xe,category:Ye,time:Ze},D=Ke;var et=()=>`<div class="list__meta meta meta__text"><div class="meta__item-author meta__item">${D.author}<a class="meta__link" href="/info/ueber-mich/">Jens</a></div>&nbsp;`,Y=et;var xe={die:{url:"/dies-und-das/",display:"Dies und das"},get:{url:"/getranke/",display:"Getr\xE4nke"},ins:{url:"/insirationen/",display:"Inspirationen"},inx:{url:"/index/index-fuer-thailaendische-gerichte/",display:"Thai Index"},mit:{url:"/mittagspause/",display:"Mittagspause"},aus:{url:"/ausprobiert/",display:"Ausprobiert"},rei:{url:"/reisen/",display:"Reisen"},res:{url:"/restaurants/",display:"Restaurants"},rez:{url:"/rezepte/",display:"Rezepte"},ute:{url:"/utensilien/",display:"Utensilien"},zut:{url:"/zutaten/",display:"Zutaten"}};var rt=(t,e)=>{let r={url:"",display:""};return Object.prototype.hasOwnProperty.call(e,t)&&(r=e[t]),r},ke=rt;var it=t=>{let e="";if(t){let r=ke(t.toLowerCase(),xe);r.url!==""&&r.display!==""&&(e=`<div class="meta__item-categories meta__item meta__text">${D.category}<a class="meta__link" href="${r.url}" rel="category" title="Kategorie ${r.display}">${r.display}</a>
                    </div>`)}return e},Z=it;var nt=(t,e,r)=>`<div class="list__content">
    ${t}${e}${r}
    </div>`,K=nt;var st="01.01.0001",at=t=>{let r=t!==st?t:"05.01.2021";return`<div class="meta__item-datetime meta__item meta__text">${D.time}<time datetime="">${r}</time></div>`},ee=at;var ot=(t,e,r,i,n)=>`<header class="list__header">    
    <h2 class="list__title post__title ">
    <a href="${e}">${t}</a>
    </h2>
    ${r}
    ${i}
    ${n}
    </header>`,te=ot;var ut=(t,e=!1)=>{let r="";return t&&(r=`<div class="centered-flex-col ${e?"search__no-results":""}">${t}</div>`),r},A=ut;var lt=t=>{let e="";return t&&(e=`<div class="content list__excerpt post__content clearfix">${t}</div>`),e},re=lt;var ct=t=>{let e="";if(t){let r=t.split(" "),i="";r.forEach(n=>{let s=`/tags/${ht(n)}/`;i+=`<div class="tags__item">
            <a class="tags__link btn" href="${s}" rel="tag"><span itemprop="keywords">${ft(n)}</span></a>
             </div>`}),e=`<div class="list__tags"><div class="post__tags tags"><div class="tags__list">
                    ${i}
                  </div></div></div>`}return e},ht=t=>t.replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u"),dt=t=>t.charAt(0).toUpperCase()+t.slice(1),ft=t=>{let e="";return t&&(t==="work-and-wok"?e="Work 'n' Wok":(t=t.replace(/-/g," "),t.split(" ").forEach(i=>{e+=dt(i)+" "}),e.trim())),e},ie=ct;var pt=(t,e,r,i)=>{let n=i&&i.toLowerCase()==="ins"&&(t.indexOf("blogs")>-1||t.indexOf("videos")>-1||t.indexOf("gruppen"))?"image__flat js-lazy-img":"js-lazy-img";return`<figure class="list__thumbnail">
    <a href="${t}" tabindex="-1"><img src="/img/lazy-loading.png" data-src="${e}" alt="${r}" title="${r}" class="${n}" /></a>
    </figure>`},ne=pt;var gt=(t,e)=>{let r="";if(t){let i=t.image?e+t.image:"/img/not-found.png",n=ne(t.url,i,t.title,t.category),s=Y(),a=ee(t.date),o=Z(t.category),c=te(t.title,t.url,s,a,o),u=re(t.summary),d=ie(t.tags),m=K(c,u,d);r=X(n,m)}return r},be=gt;var mt=t=>{t.hasAttribute("data-src")&&t.dataset.src!==""&&(t.src=t.dataset.src,t.removeAttribute("data-src"))},J=mt;var yt=t=>{t.classList.remove("js-lazy-modern-img");let e=t.querySelector("img");t.querySelectorAll("source").forEach(i=>{i.srcset=i.dataset.srcset,i.removeAttribute("data-srcset")}),J(e)},Le=yt;var vt=()=>{let t=document.querySelectorAll(".js-lazy-img");for(let e=0;e<t.length;e++){let r=t[e];J(r)}if(window.IntersectionObserver){let e=(n,s)=>{n.forEach(a=>{a.isIntersecting&&(Le(a.target),s.unobserve(a.target))})},r=new IntersectionObserver(e,{rootMargin:"0px 0px 420px 0px"});document.querySelectorAll(".js-lazy-modern-img").forEach(n=>{r.observe(n)});let i=new IntersectionObserver(e,{rootMargin:"0px 0px 220px 0px"});document.querySelectorAll(".js-summary-lazy-modern-img").forEach(n=>{i.observe(n)})}},se=vt;var Ie=Be(Qe()),Te,_,B,R,Ee=[],xt=oe,kt=20,bt="/media/",Lt=t=>{let e=B.value,r=0;if(t.length>0){R.innerHTML="";let i="";t.forEach(n=>{let s=n.ref;if((e===fe||s.indexOf("/"+e+"/")>-1)&&r++<=kt){let a=Ee[n.ref];i+=be(a,xt+bt)}}),R.innerHTML=i,se!==void 0&&se()}r===0&&(R.innerHTML=A(ue,!0))},St=()=>{let t=window.location.search;if(t&&URLSearchParams!==void 0){let e=new URLSearchParams(t);if(e.has("q")){let r=e.get("q");_.value=r}if(e.has("s")){let r=e.get("s");B.value=r}}},wt=()=>{_.disabled=!1,_.focus(),_.placeholder=ce,_.classList.add("js-ready-to-search"),_.onkeyup=()=>{let t=_.value;_e(t)},St(),_.value!==""&&_e(_.value)},_e=t=>{if(G(t)&&(B.value="id"),B.value==="id")t!==""&&G(t)?window.location.href="/suchen/id/?e="+parseInt(t,10):R.innerHTML=A(he);else if(t!==""&&t.length>=3){let e=me(ge(t,pe)),r=Te.search(e);Lt(r)}else R.innerHTML=A(de,!0)},Qt=t=>{ve()&&t.classList.add("has-focus")},_t=()=>{_=document.getElementById("search-input"),B=document.getElementById("search-sections"),R=document.getElementById("search-results"),_&&Qt(_),fetch(`${le}?d=${ye()}`,{method:"get"}).then(t=>t.json()).then(t=>{Te=(0,Ie.default)(function(){this.ref("u"),this.field("t",{boost:20}),this.field("s",{boost:10}),this.field("ts"),t.forEach(e=>{this.add(e),Ee[e.u]={url:e.u,title:e.t,summary:e.s,date:e.d,tags:e.ts,category:e.c,image:e.i}},this)}),wt()}).catch(t=>{R.innerHTML=A(t,!0)})};window.addEventListener("load",()=>{_t()});})();
/*! Bundled license information:

lunr/lunr.js:
  (**
   * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.3.9
   * Copyright (C) 2020 Oliver Nightingale
   * @license MIT
   *)
  (*!
   * lunr.utils
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Set
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.tokenizer
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Pipeline
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Vector
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.stemmer
   * Copyright (C) 2020 Oliver Nightingale
   * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
   *)
  (*!
   * lunr.stopWordFilter
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.trimmer
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.TokenSet
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Index
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Builder
   * Copyright (C) 2020 Oliver Nightingale
   *)
*/
