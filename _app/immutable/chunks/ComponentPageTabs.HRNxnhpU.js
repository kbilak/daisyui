import{s as $,e as f,a as y,c as m,b as k,d as L,h as d,i as u,j as x,k as g,n as w,y as j,m as M,H as A,t as E,x as H,f as V}from"./scheduler.z1v5p5l_.js";import{e as v}from"./each.-oqiv04n.js";import{S,i as B}from"./index.wUxZk5jp.js";import{p as N}from"./stores.RgpdnyKe.js";function b(r,e,o){const l=r.slice();return l[2]=e[o],l}function C(r){let e,o,l,c=r[2].icon+"",s,a=r[2].title+"",n,t,p;return{c(){e=f("a"),o=f("span"),l=new A(!1),s=y(),n=E(a),this.h()},l(i){e=m(i,"A",{href:!0,class:!0});var h=k(e);o=m(h,"SPAN",{class:!0});var _=k(o);l=H(_,!1),_.forEach(d),s=L(h),n=V(h,a),h.forEach(d),this.h()},h(){l.a=null,u(o,"class","hidden lg:inline"),u(e,"href",t=`/components/${r[0].url.pathname.split("/")[2]}/${r[2].slug}`),u(e,"class",p=`tab gap-3 ${r[0].url.pathname.split("/")[3]===r[2].slug.replace("/","")?"tab-active":""}`)},m(i,h){x(i,e,h),g(e,o),l.m(c,o),g(e,s),g(e,n)},p(i,h){h&1&&t!==(t=`/components/${i[0].url.pathname.split("/")[2]}/${i[2].slug}`)&&u(e,"href",t),h&1&&p!==(p=`tab gap-3 ${i[0].url.pathname.split("/")[3]===i[2].slug.replace("/","")?"tab-active":""}`)&&u(e,"class",p)},d(i){i&&d(e)}}}function P(r){let e,o,l,c=v(r[1]),s=[];for(let a=0;a<c.length;a+=1)s[a]=C(b(r,c,a));return{c(){e=f("nav");for(let a=0;a<s.length;a+=1)s[a].c();o=y(),l=f("span"),this.h()},l(a){e=m(a,"NAV",{class:!0});var n=k(e);for(let t=0;t<s.length;t+=1)s[t].l(n);o=L(n),l=m(n,"SPAN",{class:!0}),k(l).forEach(d),n.forEach(d),this.h()},h(){u(l,"class","tab"),u(e,"class","tabs not-prose tabs-lifted lg:tabs-lg my-10 flex-nowrap whitespace-nowrap")},m(a,n){x(a,e,n);for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null);g(e,o),g(e,l)},p(a,[n]){if(n&3){c=v(a[1]);let t;for(t=0;t<c.length;t+=1){const p=b(a,c,t);s[t]?s[t].p(p,n):(s[t]=C(p),s[t].c(),s[t].m(e,o))}for(;t<s.length;t+=1)s[t].d(1);s.length=c.length}},i:w,o:w,d(a){a&&d(e),j(s,a)}}}function T(r,e,o){let l;return M(r,N,s=>o(0,l=s)),[l,[{title:"Examples",slug:"",icon:'<svg class="text-base-content opacity-50" width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 13L4 25.4322L16 37" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 13L44 25.4322L32 37" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 4L21 44" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>'},{title:"Design spec",slug:"design/",icon:'<svg class="text-base-content opacity-50" width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 44L4 4V44H44Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 35H25L13 23V35Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>'},{title:"Accessibility",slug:"accessibility/",icon:'<svg class="text-base-content opacity-50" width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 10L20 20.254V29.9683L10.8571 44" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 10L28 20.254V29.9683L37.1429 44" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="8" r="4" fill="currentColor" stroke="currentColor" stroke-width="4"/></svg>'}]]}class F extends S{constructor(e){super(),B(this,e,T,P,$,{})}}export{F as C};
