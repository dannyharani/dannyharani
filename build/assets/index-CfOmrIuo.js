var ee=Object.defineProperty;var te=(t,e,n)=>e in t?ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var k=(t,e,n)=>(te(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function o(){}function W(t){return t()}function V(){return Object.create(null)}function B(t){t.forEach(W)}function X(t){return typeof t=="function"}function P(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ne(t){return Object.keys(t).length===0}function d(t,e){t.appendChild(e)}function z(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function se(t){return document.createTextNode(t)}function C(){return se(" ")}function u(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function re(t){return Array.from(t.childNodes)}let K;function E(t){K=t}const w=[],J=[];let b=[];const Q=[],ie=Promise.resolve();let F=!1;function ae(){F||(F=!0,ie.then(Y))}function G(t){b.push(t)}const D=new Set;let y=0;function Y(){if(y!==0)return;const t=K;do{try{for(;y<w.length;){const e=w[y];y++,E(e),oe(e.$$)}}catch(e){throw w.length=0,y=0,e}for(E(null),w.length=0,y=0;J.length;)J.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];D.has(n)||(D.add(n),n())}b.length=0}while(w.length);for(;Q.length;)Q.pop()();F=!1,D.clear(),E(t)}function oe(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}function ce(t){const e=[],n=[];b.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),b=e}const q=new Set;let le;function O(t,e){t&&t.i&&(q.delete(t),t.i(e))}function S(t,e,n,s){if(t&&t.o){if(q.has(t))return;q.add(t),le.c.push(()=>{q.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function A(t){t&&t.c()}function T(t,e,n){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),G(()=>{const i=t.$$.on_mount.map(W).filter(X);t.$$.on_destroy?t.$$.on_destroy.push(...i):B(i),t.$$.on_mount=[]}),r.forEach(G)}function j(t,e){const n=t.$$;n.fragment!==null&&(ce(n.after_update),B(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function de(t,e){t.$$.dirty[0]===-1&&(w.push(t),ae(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(t,e,n,s,r,i,h=null,N=[-1]){const p=K;E(t);const a=t.$$={fragment:null,ctx:[],props:i,update:o,not_equal:r,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:V(),dirty:N,skip_bound:!1,root:e.target||p.$$.root};h&&h(a.root);let v=!1;if(a.ctx=n?n(t,e.props||{},(c,L,...g)=>{const m=g.length?g[0]:L;return a.ctx&&r(a.ctx[c],a.ctx[c]=m)&&(!a.skip_bound&&a.bound[c]&&a.bound[c](m),v&&de(t,c)),L}):[],a.update(),v=!0,B(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){const c=re(e.target);a.fragment&&a.fragment.l(c),c.forEach(x)}else a.fragment&&a.fragment.c();e.intro&&O(t.$$.fragment),T(t,e.target,e.anchor),Y()}E(p)}class M{constructor(){k(this,"$$");k(this,"$$set")}$destroy(){j(this,1),this.$destroy=o}$on(e,n){if(!X(n))return o;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!ne(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const fe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fe);const ue="/assets/temp_weather-nOPetcso.png",he="/assets/temp_roadblock-CK05_s2a.png";function pe(t){let e;return{c(){e=f("main"),e.innerHTML=`<div class="banner svelte-hcphf"><div><h2 class="svelte-hcphf">Today</h2></div> <div class="date svelte-hcphf"><h3>Tue</h3> <p>September 10, 2024</p></div> <div class="weather svelte-hcphf"><img class="weather_image svelte-hcphf" src="${ue}" alt=""/> <div class="temperature svelte-hcphf"><h2 class="svelte-hcphf">13</h2> <h2 class="svelte-hcphf">°C</h2></div></div> <div class="heartrate svelte-hcphf"><img class="roadblock svelte-hcphf" src="${he}" alt=""/> <h3>Under Construction</h3> <p>brainstorming</p></div></div>`,u(e,"class","svelte-hcphf")},m(n,s){z(n,e,s)},p:o,i:o,o,d(n){n&&x(e)}}}class me extends M{constructor(e){super(),H(this,e,null,pe,P,{})}}const ve="/assets/temp horse-gwT3F8Pv.png";function ge(t){let e;return{c(){e=f("main"),e.innerHTML=`<div class="arrow-left arrow svelte-17mfy5i"><div class="svelte-17mfy5i">&lt;</div></div> <div class="wrapper svelte-17mfy5i"><div class="image_container svelte-17mfy5i"><img src="${ve}" alt="" class="image svelte-17mfy5i"/></div> <div class="content svelte-17mfy5i"><div><h2>Chess Bot</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p></div></div></div> <div class="arrow-right arrow svelte-17mfy5i"><div class="svelte-17mfy5i">&gt;</div></div>`,u(e,"class","svelte-17mfy5i")},m(n,s){z(n,e,s)},p:o,i:o,o,d(n){n&&x(e)}}}class _e extends M{constructor(e){super(),H(this,e,null,ge,P,{})}}function $e(t){let e;return{c(){e=f("main"),e.innerHTML='<div class="svelte-5jdfm7"><h2>Idea</h2> <p>3D Game viewed in 2D. The player will control the perspective to view different planes</p></div>',u(e,"class","svelte-5jdfm7")},m(n,s){z(n,e,s)},p:o,i:o,o,d(n){n&&x(e)}}}class ye extends M{constructor(e){super(),H(this,e,null,$e,P,{})}}function we(t){let e;return{c(){e=f("main"),e.innerHTML='<div class="main svelte-1jfq2rh"><div class="progress_bar svelte-1jfq2rh"><h1>1/5</h1></div> <div class="center svelte-1jfq2rh"><div class="progress_description"><h2>Chiptune Maker</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p></div></div></div>',u(e,"class","svelte-1jfq2rh")},m(n,s){z(n,e,s)},p:o,i:o,o,d(n){n&&x(e)}}}class be extends M{constructor(e){super(),H(this,e,null,we,P,{})}}function xe(t){let e,n,s,r,i,h,N,p,a,v,c,L,g,m,U,_,R,$,I;return c=new ye({}),m=new be({}),_=new _e({}),$=new me({}),{c(){e=f("main"),n=f("div"),s=f("div"),s.innerHTML="<p>Harani Danny</p>",r=C(),i=f("div"),h=f("div"),h.innerHTML='<h1>Hey,<br/>Here is my<br/>Portfolio💡</h1> <div class="socials svelte-wazuab"><button>LinkedIn</button> <button>Github</button></div>',N=C(),p=f("div"),a=f("div"),v=f("div"),A(c.$$.fragment),L=C(),g=f("div"),A(m.$$.fragment),U=C(),A(_.$$.fragment),R=C(),A($.$$.fragment),u(s,"class","logo svelte-wazuab"),u(h,"class","intro svelte-wazuab"),u(v,"class","idea_container"),u(g,"class","progress_container svelte-wazuab"),u(a,"class","update_containers svelte-wazuab"),u(p,"class","project_containers svelte-wazuab"),u(i,"class","rows svelte-wazuab"),u(n,"class","main_content svelte-wazuab"),u(e,"class","svelte-wazuab")},m(l,Z){z(l,e,Z),d(e,n),d(n,s),d(n,r),d(n,i),d(i,h),d(i,N),d(i,p),d(p,a),d(a,v),T(c,v,null),d(a,L),d(a,g),T(m,g,null),d(p,U),T(_,p,null),d(e,R),T($,e,null),I=!0},p:o,i(l){I||(O(c.$$.fragment,l),O(m.$$.fragment,l),O(_.$$.fragment,l),O($.$$.fragment,l),I=!0)},o(l){S(c.$$.fragment,l),S(m.$$.fragment,l),S(_.$$.fragment,l),S($.$$.fragment,l),I=!1},d(l){l&&x(e),j(c),j(m),j(_),j($)}}}function Le(t){return alert("This website is not complete yet, the content is simply placeholder"),[]}class Ce extends M{constructor(e){super(),H(this,e,Le,xe,P,{})}}new Ce({target:document.getElementById("app")});
