import{S as Nt,i as Ct,s as Gt,M as za,e as i,k as p,c,m as w,b as s,N as dl,O as fe,g as W,P as Vt,L as La,d as o,Q as yl,v as Dl,D as Ql,a as g,n as Yt,o as T,p as St,q as y,R as Ml,T as Tl,w as G,x as U,y as Y,B as S,U as Vl,t as D,h as Q,H as t,j as it,V as kl,F as Nl,W as Cl,I as Gl,J as Yl,K as Sl,X as Ul,Y as jl,Z as Wl,_ as zl,$ as Ll,a0 as Fl,a1 as Pl,a2 as Rl,a3 as Xl,a4 as Jl,a5 as Zl,G as Hl,f as Ol}from"../chunks/vendor-8ddb8277.js";function ql(n){let e=!1,a=()=>{e=!1},l,r,E,m,d,h,$,_,v;return za(n[7]),za(n[8]),{c(){r=i("img"),d=p(),h=i("img"),this.h()},l(u){r=c(u,"IMG",{class:!0,src:!0,alt:!0,style:!0}),d=w(u),h=c(u,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){s(r,"class","logo svelte-hbsafl"),dl(r.src,E="/img/logo.png")||s(r,"src",E),s(r,"alt",""),s(r,"style",m=`opacity: ${n[3]}`),fe(r,"scrolled",n[3]!=1),s(h,"class","logo back svelte-hbsafl"),dl(h.src,$="/img/logo.png")||s(h,"src",$),s(h,"alt","")},m(u,k){W(u,r,k),W(u,d,k),W(u,h,k),_||(v=[Vt(window,"resize",n[6]),Vt(window,"scroll",()=>{e=!0,clearTimeout(l),l=setTimeout(a,100),n[7]()}),Vt(window,"resize",n[8])],_=!0)},p(u,[k]){k&1&&!e&&(e=!0,clearTimeout(l),scrollTo(window.pageXOffset,u[0]),l=setTimeout(a,100)),k&8&&m!==(m=`opacity: ${u[3]}`)&&s(r,"style",m),k&8&&fe(r,"scrolled",u[3]!=1)},i:La,o:La,d(u){u&&o(r),u&&o(d),u&&o(h),_=!1,yl(v)}}}function Kl(n,e,a){let{showTop:l=!1}=e,{showBottom:r=!1}=e,E=0,m=1,d=1,h=0;Dl(()=>{a(2,d=document.body.scrollHeight-m)});const $=()=>a(2,d=document.body.scrollHeight-m);function _(){a(0,E=window.pageYOffset)}function v(){a(1,m=window.innerHeight)}return n.$$set=u=>{"showTop"in u&&a(4,l=u.showTop),"showBottom"in u&&a(5,r=u.showBottom)},n.$$.update=()=>{n.$$.dirty&63&&(a(3,h=0),l&&a(3,h+=Math.max(0,1-E/(m/2))),r&&a(3,h+=Math.max(0,1+(E-d)/(m/2))))},[E,m,d,h,l,r,$,_,v]}class xl extends Nt{constructor(e){super();Ct(this,e,Kl,ql,Gt,{showTop:4,showBottom:5})}}var Ge=(n=>(n.Light="light",n.Dark="dark",n))(Ge||{});const Bl="color theme";function es(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function ts(){var a;const n=localStorage.getItem(Bl);return(a=Object.values(Ge).find(l=>l==n))!=null?a:null}function $l(n){localStorage.setItem(Bl,n)}function Fa(n){document.documentElement.classList.toggle("dark",n=="dark")}function Pa(){var n;return(n=ts())!=null?n:es()}function as(n){Fa(n),$l(n),Il.set(n)}function ls(){as(Pa()=="dark"?"light":"dark")}const Il=Ql(Pa(),n=>{Fa(Pa()),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{const a=e.matches?"dark":"light";Fa(a),$l(a),n(a)})});function ss(n){let e,a;return e=new Tl({}),{c(){G(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,r){Y(e,l,r),a=!0},i(l){a||(y(e.$$.fragment,l),a=!0)},o(l){T(e.$$.fragment,l),a=!1},d(l){S(e,l)}}}function rs(n){let e,a;return e=new Vl({}),{c(){G(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,r){Y(e,l,r),a=!0},i(l){a||(y(e.$$.fragment,l),a=!0)},o(l){T(e.$$.fragment,l),a=!1},d(l){S(e,l)}}}function ns(n){let e,a,l,r,E,m;const d=[rs,ss],h=[];function $(_,v){return _[0]==Ge.Light?0:1}return a=$(n),l=h[a]=d[a](n),{c(){e=i("button"),l.c(),this.h()},l(_){e=c(_,"BUTTON",{class:!0});var v=g(e);l.l(v),v.forEach(o),this.h()},h(){s(e,"class","svelte-14zofji"),fe(e,"sun",n[0]==Ge.Light),fe(e,"moon",n[0]==Ge.Dark)},m(_,v){W(_,e,v),h[a].m(e,null),r=!0,E||(m=Vt(e,"click",ls),E=!0)},p(_,[v]){let u=a;a=$(_),a!==u&&(Yt(),T(h[u],1,1,()=>{h[u]=null}),St(),l=h[a],l||(l=h[a]=d[a](_),l.c()),y(l,1),l.m(e,null)),v&1&&fe(e,"sun",_[0]==Ge.Light),v&1&&fe(e,"moon",_[0]==Ge.Dark)},i(_){r||(y(l),r=!0)},o(_){T(l),r=!1},d(_){_&&o(e),h[a].d(),E=!1,m()}}}function os(n,e,a){let l;return Ml(n,Il,r=>a(0,l=r)),[l]}class is extends Nt{constructor(e){super();Ct(this,e,os,ns,Gt,{})}}function vl(n,e,a){const l=n.slice();return l[14]=e[a][0],l[15]=e[a][1],l}function _l(n,e,a){const l=n.slice();return l[18]=e[a][0],l[19]=e[a][1],l}function pl(n){let e,a,l=n[7],r=[];for(let m=0;m<l.length;m+=1)r[m]=wl(_l(n,l,m));const E=m=>T(r[m],1,1,()=>{r[m]=null});return{c(){e=i("div");for(let m=0;m<r.length;m+=1)r[m].c();this.h()},l(m){e=c(m,"DIV",{class:!0});var d=g(e);for(let h=0;h<r.length;h+=1)r[h].l(d);d.forEach(o),this.h()},h(){s(e,"class","links")},m(m,d){W(m,e,d);for(let h=0;h<r.length;h+=1)r[h].m(e,null);a=!0},p(m,d){if(d&896){l=m[7];let h;for(h=0;h<l.length;h+=1){const $=_l(m,l,h);r[h]?(r[h].p($,d),y(r[h],1)):(r[h]=wl($),r[h].c(),y(r[h],1),r[h].m(e,null))}for(Yt(),h=l.length;h<r.length;h+=1)E(h);St()}},i(m){if(!a){for(let d=0;d<l.length;d+=1)y(r[d]);a=!0}},o(m){r=r.filter(Boolean);for(let d=0;d<r.length;d+=1)T(r[d]);a=!1},d(m){m&&o(e),kl(r,m)}}}function wl(n){let e,a,l,r,E=n[9][n[18]]+"",m,d,h,$;var _=n[8][n[18]];function v(u){return{props:{size:32}}}return _&&(a=new _(v())),{c(){e=i("a"),a&&G(a.$$.fragment),l=p(),r=i("p"),m=D(E),d=p(),this.h()},l(u){e=c(u,"A",{class:!0,href:!0});var k=g(e);a&&U(a.$$.fragment,k),l=w(k),r=c(k,"P",{});var B=g(r);m=Q(B,E),B.forEach(o),d=w(k),k.forEach(o),this.h()},h(){s(e,"class","link svelte-gv04ne"),s(e,"href",h=n[19])},m(u,k){W(u,e,k),a&&Y(a,e,null),t(e,l),t(e,r),t(r,m),t(e,d),$=!0},p(u,k){if(_!==(_=u[8][u[18]])){if(a){Yt();const B=a;T(B.$$.fragment,1,0,()=>{S(B,1)}),St()}_?(a=new _(v()),G(a.$$.fragment),y(a.$$.fragment,1),Y(a,e,l)):a=null}(!$||k&128)&&E!==(E=u[9][u[18]]+"")&&it(m,E),(!$||k&128&&h!==(h=u[19]))&&s(e,"href",h)},i(u){$||(a&&y(a.$$.fragment,u),$=!0)},o(u){a&&T(a.$$.fragment,u),$=!1},d(u){u&&o(e),a&&S(a)}}}function El(n){let e,a,l,r,E,m,d,h,$,_,v,u,k,B,A=n[0].button+"",V,b=n[0].text&&bl(n),j=Object.entries(n[0].options),N=[];for(let I=0;I<j.length;I+=1)N[I]=Al(vl(n,j,I));return{c(){e=i("form"),a=i("input"),l=p(),r=i("input"),m=p(),d=i("input"),$=p(),b&&b.c(),_=p(),v=i("div"),u=i("select");for(let I=0;I<N.length;I+=1)N[I].c();k=p(),B=i("button"),V=D(A),this.h()},l(I){e=c(I,"FORM",{class:!0,action:!0,method:!0,target:!0});var C=g(e);a=c(C,"INPUT",{type:!0,name:!0}),l=w(C),r=c(C,"INPUT",{type:!0,name:!0}),m=w(C),d=c(C,"INPUT",{type:!0,name:!0}),$=w(C),b&&b.l(C),_=w(C),v=c(C,"DIV",{class:!0});var M=g(v);u=c(M,"SELECT",{name:!0,class:!0});var ae=g(u);for(let me=0;me<N.length;me+=1)N[me].l(ae);ae.forEach(o),k=w(M),B=c(M,"BUTTON",{type:!0,class:!0});var Ye=g(B);V=Q(Ye,A),Ye.forEach(o),M.forEach(o),C.forEach(o),this.h()},h(){s(a,"type","hidden"),s(a,"name","cmd"),a.value="_s-xclick",s(r,"type","hidden"),s(r,"name","on0"),r.value=E=n[0].on,s(d,"type","hidden"),s(d,"name","encrypted"),d.value=h=n[0].encrypted,s(u,"name","os0"),s(u,"class","svelte-gv04ne"),s(B,"type","submit"),s(B,"class","svelte-gv04ne"),s(v,"class","selector svelte-gv04ne"),s(e,"class","paypal | vertical smaller-gap svelte-gv04ne"),s(e,"action","https://www.paypal.com/cgi-bin/webscr"),s(e,"method","post"),s(e,"target","_blank")},m(I,C){W(I,e,C),t(e,a),t(e,l),t(e,r),t(e,m),t(e,d),t(e,$),b&&b.m(e,null),t(e,_),t(e,v),t(v,u);for(let M=0;M<N.length;M+=1)N[M].m(u,null);t(v,k),t(v,B),t(B,V)},p(I,C){if(C&1&&E!==(E=I[0].on)&&(r.value=E),C&1&&h!==(h=I[0].encrypted)&&(d.value=h),I[0].text?b?b.p(I,C):(b=bl(I),b.c(),b.m(e,_)):b&&(b.d(1),b=null),C&1){j=Object.entries(I[0].options);let M;for(M=0;M<j.length;M+=1){const ae=vl(I,j,M);N[M]?N[M].p(ae,C):(N[M]=Al(ae),N[M].c(),N[M].m(u,null))}for(;M<N.length;M+=1)N[M].d(1);N.length=j.length}C&1&&A!==(A=I[0].button+"")&&it(V,A)},d(I){I&&o(e),b&&b.d(),kl(N,I)}}}function bl(n){let e,a=n[0].text+"",l;return{c(){e=i("p"),l=D(a),this.h()},l(r){e=c(r,"P",{class:!0});var E=g(e);l=Q(E,a),E.forEach(o),this.h()},h(){s(e,"class","svelte-gv04ne")},m(r,E){W(r,e,E),t(e,l)},p(r,E){E&1&&a!==(a=r[0].text+"")&&it(l,a)},d(r){r&&o(e)}}}function Al(n){let e,a=n[15]+"",l,r;return{c(){e=i("option"),l=D(a),this.h()},l(E){e=c(E,"OPTION",{});var m=g(e);l=Q(m,a),m.forEach(o),this.h()},h(){e.__value=r=n[14],e.value=e.__value},m(E,m){W(E,e,m),t(e,l)},p(E,m){m&1&&a!==(a=E[15]+"")&&it(l,a),m&1&&r!==(r=E[14])&&(e.__value=r,e.value=e.__value)},d(E){E&&o(e)}}}function cs(n){let e,a,l,r,E,m,d,h,$,_,v=n[7].length&&pl(n),u=n[0]&&El(n);const k=n[12].default,B=Nl(k,n,n[11],null);return{c(){e=i("div"),a=i("div"),l=i("h5"),r=D(n[3]),E=p(),v&&v.c(),m=p(),u&&u.c(),d=p(),B&&B.c(),this.h()},l(A){e=c(A,"DIV",{class:!0,style:!0});var V=g(e);a=c(V,"DIV",{class:!0});var b=g(a);l=c(b,"H5",{class:!0});var j=g(l);r=Q(j,n[3]),j.forEach(o),E=w(b),v&&v.l(b),m=w(b),u&&u.l(b),d=w(b),B&&B.l(b),b.forEach(o),V.forEach(o),this.h()},h(){s(l,"class","svelte-gv04ne"),s(a,"class","title svelte-gv04ne"),s(e,"class","game svelte-gv04ne"),s(e,"style",h=`
		--cols:${n[1]};
		--rows:${n[2]};
		background-image: url("${n[4]}");
	`),za(()=>n[13].call(e)),fe(e,"narrow",n[6])},m(A,V){W(A,e,V),t(e,a),t(a,l),t(l,r),t(a,E),v&&v.m(a,null),t(a,m),u&&u.m(a,null),t(a,d),B&&B.m(a,null),$=Cl(e,n[13].bind(e)),_=!0},p(A,[V]){(!_||V&8)&&it(r,A[3]),A[7].length?v?(v.p(A,V),V&128&&y(v,1)):(v=pl(A),v.c(),y(v,1),v.m(a,m)):v&&(Yt(),T(v,1,1,()=>{v=null}),St()),A[0]?u?u.p(A,V):(u=El(A),u.c(),u.m(a,d)):u&&(u.d(1),u=null),B&&B.p&&(!_||V&2048)&&Gl(B,k,A,A[11],_?Sl(k,A[11],V,null):Yl(A[11]),null),(!_||V&22&&h!==(h=`
		--cols:${A[1]};
		--rows:${A[2]};
		background-image: url("${A[4]}");
	`))&&s(e,"style",h),V&64&&fe(e,"narrow",A[6])},i(A){_||(y(v),y(B,A),_=!0)},o(A){T(v),T(B,A),_=!1},d(A){A&&o(e),v&&v.d(),u&&u.d(),B&&B.d(A),$()}}}function us(n,e,a){let l,r,{$$slots:E={},$$scope:m}=e;const d={steam:Ul,itchio:jl},h={steam:"Steam",itchio:"Itch.io"};let{links:$={}}=e,{paypal:_=null}=e,{cols:v=1}=e,{rows:u=1}=e,{title:k="to be announced"}=e,{image:B=""}=e,A=0;function V(){A=this.clientWidth,a(5,A)}return n.$$set=b=>{"links"in b&&a(10,$=b.links),"paypal"in b&&a(0,_=b.paypal),"cols"in b&&a(1,v=b.cols),"rows"in b&&a(2,u=b.rows),"title"in b&&a(3,k=b.title),"image"in b&&a(4,B=b.image),"$$scope"in b&&a(11,m=b.$$scope)},n.$$.update=()=>{n.$$.dirty&1024&&a(7,l=Object.entries($)),n.$$.dirty&32&&a(6,r=A<350)},[_,v,u,k,B,A,r,l,d,h,$,m,E,V]}class Ce extends Nt{constructor(e){super();Ct(this,e,us,cs,Gt,{links:10,paypal:0,cols:1,rows:2,title:3,image:4})}}function fs(n){let e,a,l,r,E,m,d,h,$,_,v,u,k,B,A,V,b,j,N,I,C,M,ae,Ye,me,Ut,Se,ne,Ue,jt,je,ge,Wt,We,zt,ct,J,ze,he,Lt,Oe,Ft,Pt,Le,z,de,Rt,ve,Xt,_e,Jt,pe,Zt,we,Ht,Ee,Ot,be,ut,le,se,Fe,Ae,qt,qe,Kt,xt,F,Z,ke,ea,Ke,ta,aa,H,Be,la,xe,sa,ra,O,$e,na,et,oa,ia,q,Ie,ca,tt,ua,fa,K,ye,ma,at,ga,ha,x,De,da,lt,va,_a,oe,Pe,Qe,st,pa,wa,Ea,ie,ee,Me,ba,rt,Aa,ka,L,Re,Ba,Xe,$a,Je,Ia,Ze,ya,ce,Te,Da,nt,Qa,ft,re,He,Ve,Ma,Ne,Ta,Va,Na,Ca,ot,mt;return k=new is({}),V=new xl({props:{showTop:!0,showBottom:!0}}),ge=new Wl({props:{color:"var(--main-color)"}}),de=new Ce({props:{cols:1,rows:2,title:"Park Rangers of The Undead",links:{steam:"https://store.steampowered.com/app/1701760"},image:"/img/games/park rangers/headerS.png"}}),ve=new Ce({props:{cols:2,title:"Birth of the Alliance",image:"/img/games/bota/dreadnaught.jpg",paypal:{on:"Base game or founders",encrypted:"-----BEGIN PKCS7-----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-----END PKCS7-----",button:"Preorder",options:{"Base game":"Base game $9.99 USD","Founders edition":"Founders edition $19.99 USD"}}}}),_e=new Ce({props:{title:"Lednatha Combat Academy",image:"/img/games/platformer/player.png"}}),pe=new Ce({props:{title:"Concord Assault",links:{itchio:"https://nightingale-studios.itch.io/concord-assault"},image:"/img/games/concord assault/Screenshot_32.png"}}),we=new Ce({props:{title:"Nightingale: Tales of The Fleet",image:"/img/games/tobias.png"}}),Ee=new Ce({props:{title:"The Range",image:"/img/games/range/range.png"}}),be=new Ce({props:{title:"Nightingale: Expanse",image:"/img/games/fighter.jpg"}}),ke=new zl({}),Be=new Ll({}),$e=new Fl({}),Ie=new Pl({}),ye=new Rl({}),De=new Xl({}),Me=new Jl({}),Te=new Zl({}),{c(){e=p(),a=i("section"),l=i("div"),r=i("a"),E=D("About"),m=p(),d=i("a"),h=D("Games"),$=p(),_=i("a"),v=D("Contact"),u=p(),G(k.$$.fragment),B=p(),A=i("div"),G(V.$$.fragment),b=p(),j=i("section"),N=i("div"),I=i("div"),C=D(`about
			`),M=i("h1"),ae=D("Nightingale"),Ye=i("br"),me=D("Studios"),Ut=p(),Se=i("div"),ne=i("div"),Ue=i("h2"),jt=D("Building games. With love "),je=i("span"),G(ge.$$.fragment),Wt=p(),We=i("p"),zt=D(`We are a small, international indie game development company.
				Our mission is to make games that are enjoyable and appealing to a wide audience.
				We strive to shape our products for and with our small but steadily growing community.`),ct=p(),J=i("section"),ze=i("div"),he=i("div"),Lt=D(`our
			`),Oe=i("h2"),Ft=D("Games"),Pt=p(),Le=i("div"),z=i("div"),G(de.$$.fragment),Rt=p(),G(ve.$$.fragment),Xt=p(),G(_e.$$.fragment),Jt=p(),G(pe.$$.fragment),Zt=p(),G(we.$$.fragment),Ht=p(),G(Ee.$$.fragment),Ot=p(),G(be.$$.fragment),ut=p(),le=i("div"),se=i("section"),Fe=i("div"),Ae=i("div"),qt=D(`come
				`),qe=i("h2"),Kt=D("Aboard"),xt=p(),F=i("div"),Z=i("a"),G(ke.$$.fragment),ea=p(),Ke=i("p"),ta=D("Twitter"),aa=p(),H=i("a"),G(Be.$$.fragment),la=p(),xe=i("p"),sa=D("Facebook"),ra=p(),O=i("a"),G($e.$$.fragment),na=p(),et=i("p"),oa=D("Discord"),ia=p(),q=i("a"),G(Ie.$$.fragment),ca=p(),tt=i("p"),ua=D("Youtube"),fa=p(),K=i("a"),G(ye.$$.fragment),ma=p(),at=i("p"),ga=D("Mail"),ha=p(),x=i("a"),G(De.$$.fragment),da=p(),lt=i("p"),va=D("Merch"),_a=p(),oe=i("section"),Pe=i("div"),Qe=i("div"),st=i("h2"),pa=D("Support"),wa=D(`
				us`),Ea=p(),ie=i("div"),ee=i("a"),G(Me.$$.fragment),ba=p(),rt=i("p"),Aa=D("Patreon"),ka=p(),L=i("form"),Re=i("input"),Ba=p(),Xe=i("input"),$a=p(),Je=i("input"),Ia=p(),Ze=i("input"),ya=p(),ce=i("button"),G(Te.$$.fragment),Da=p(),nt=i("p"),Qa=D("PayPal"),ft=p(),re=i("section"),He=i("div"),Ve=i("div"),Ma=D(`copyright 2022
			`),Ne=i("h2"),Ta=D("Nightingale"),Va=i("br"),Na=D("Studios"),Ca=p(),ot=i("div"),this.h()},l(f){Hl('[data-svelte="svelte-2oeruf"]',document.head).forEach(o),e=w(f),a=c(f,"SECTION",{id:!0,class:!0});var gt=g(a);l=c(gt,"DIV",{class:!0});var ue=g(l);r=c(ue,"A",{href:!0});var Ra=g(r);E=Q(Ra,"About"),Ra.forEach(o),m=w(ue),d=c(ue,"A",{href:!0});var Xa=g(d);h=Q(Xa,"Games"),Xa.forEach(o),$=w(ue),_=c(ue,"A",{href:!0});var Ja=g(_);v=Q(Ja,"Contact"),Ja.forEach(o),u=w(ue),U(k.$$.fragment,ue),ue.forEach(o),B=w(gt),A=c(gt,"DIV",{class:!0});var Za=g(A);U(V.$$.fragment,Za),Za.forEach(o),gt.forEach(o),b=w(f),j=c(f,"SECTION",{id:!0,class:!0});var ht=g(j);N=c(ht,"DIV",{class:!0});var Ha=g(N);I=c(Ha,"DIV",{class:!0});var Ga=g(I);C=Q(Ga,`about
			`),M=c(Ga,"H1",{});var dt=g(M);ae=Q(dt,"Nightingale"),Ye=c(dt,"BR",{}),me=Q(dt,"Studios"),dt.forEach(o),Ga.forEach(o),Ha.forEach(o),Ut=w(ht),Se=c(ht,"DIV",{class:!0});var Oa=g(Se);ne=c(Oa,"DIV",{class:!0});var vt=g(ne);Ue=c(vt,"H2",{});var Ya=g(Ue);jt=Q(Ya,"Building games. With love "),je=c(Ya,"SPAN",{class:!0});var qa=g(je);U(ge.$$.fragment,qa),qa.forEach(o),Ya.forEach(o),Wt=w(vt),We=c(vt,"P",{class:!0});var Ka=g(We);zt=Q(Ka,`We are a small, international indie game development company.
				Our mission is to make games that are enjoyable and appealing to a wide audience.
				We strive to shape our products for and with our small but steadily growing community.`),Ka.forEach(o),vt.forEach(o),Oa.forEach(o),ht.forEach(o),ct=w(f),J=c(f,"SECTION",{id:!0,class:!0});var _t=g(J);ze=c(_t,"DIV",{class:!0});var xa=g(ze);he=c(xa,"DIV",{class:!0});var Sa=g(he);Lt=Q(Sa,`our
			`),Oe=c(Sa,"H2",{});var el=g(Oe);Ft=Q(el,"Games"),el.forEach(o),Sa.forEach(o),xa.forEach(o),Pt=w(_t),Le=c(_t,"DIV",{class:!0});var tl=g(Le);z=c(tl,"DIV",{class:!0});var P=g(z);U(de.$$.fragment,P),Rt=w(P),U(ve.$$.fragment,P),Xt=w(P),U(_e.$$.fragment,P),Jt=w(P),U(pe.$$.fragment,P),Zt=w(P),U(we.$$.fragment,P),Ht=w(P),U(Ee.$$.fragment,P),Ot=w(P),U(be.$$.fragment,P),P.forEach(o),tl.forEach(o),_t.forEach(o),ut=w(f),le=c(f,"DIV",{class:!0});var pt=g(le);se=c(pt,"SECTION",{id:!0,class:!0});var wt=g(se);Fe=c(wt,"DIV",{class:!0});var al=g(Fe);Ae=c(al,"DIV",{class:!0});var Ua=g(Ae);qt=Q(Ua,`come
				`),qe=c(Ua,"H2",{});var ll=g(qe);Kt=Q(ll,"Aboard"),ll.forEach(o),Ua.forEach(o),al.forEach(o),xt=w(wt),F=c(wt,"DIV",{class:!0});var R=g(F);Z=c(R,"A",{class:!0,href:!0,target:!0});var Et=g(Z);U(ke.$$.fragment,Et),ea=w(Et),Ke=c(Et,"P",{});var sl=g(Ke);ta=Q(sl,"Twitter"),sl.forEach(o),Et.forEach(o),aa=w(R),H=c(R,"A",{class:!0,href:!0,target:!0});var bt=g(H);U(Be.$$.fragment,bt),la=w(bt),xe=c(bt,"P",{});var rl=g(xe);sa=Q(rl,"Facebook"),rl.forEach(o),bt.forEach(o),ra=w(R),O=c(R,"A",{class:!0,href:!0,target:!0});var At=g(O);U($e.$$.fragment,At),na=w(At),et=c(At,"P",{});var nl=g(et);oa=Q(nl,"Discord"),nl.forEach(o),At.forEach(o),ia=w(R),q=c(R,"A",{class:!0,href:!0,target:!0});var kt=g(q);U(Ie.$$.fragment,kt),ca=w(kt),tt=c(kt,"P",{});var ol=g(tt);ua=Q(ol,"Youtube"),ol.forEach(o),kt.forEach(o),fa=w(R),K=c(R,"A",{class:!0,href:!0,target:!0});var Bt=g(K);U(ye.$$.fragment,Bt),ma=w(Bt),at=c(Bt,"P",{});var il=g(at);ga=Q(il,"Mail"),il.forEach(o),Bt.forEach(o),ha=w(R),x=c(R,"A",{class:!0,href:!0,target:!0});var $t=g(x);U(De.$$.fragment,$t),da=w($t),lt=c($t,"P",{});var cl=g(lt);va=Q(cl,"Merch"),cl.forEach(o),$t.forEach(o),R.forEach(o),wt.forEach(o),_a=w(pt),oe=c(pt,"SECTION",{class:!0});var It=g(oe);Pe=c(It,"DIV",{class:!0});var ul=g(Pe);Qe=c(ul,"DIV",{class:!0});var ja=g(Qe);st=c(ja,"H2",{});var fl=g(st);pa=Q(fl,"Support"),fl.forEach(o),wa=Q(ja,`
				us`),ja.forEach(o),ul.forEach(o),Ea=w(It),ie=c(It,"DIV",{class:!0});var yt=g(ie);ee=c(yt,"A",{class:!0,href:!0,target:!0});var Dt=g(ee);U(Me.$$.fragment,Dt),ba=w(Dt),rt=c(Dt,"P",{});var ml=g(rt);Aa=Q(ml,"Patreon"),ml.forEach(o),Dt.forEach(o),ka=w(yt),L=c(yt,"FORM",{style:!0,action:!0,method:!0,target:!0});var te=g(L);Re=c(te,"INPUT",{type:!0,name:!0}),Ba=w(te),Xe=c(te,"INPUT",{type:!0,name:!0}),$a=w(te),Je=c(te,"INPUT",{type:!0,name:!0}),Ia=w(te),Ze=c(te,"INPUT",{type:!0,name:!0}),ya=w(te),ce=c(te,"BUTTON",{class:!0});var Qt=g(ce);U(Te.$$.fragment,Qt),Da=w(Qt),nt=c(Qt,"P",{});var gl=g(nt);Qa=Q(gl,"PayPal"),gl.forEach(o),Qt.forEach(o),te.forEach(o),yt.forEach(o),It.forEach(o),pt.forEach(o),ft=w(f),re=c(f,"SECTION",{class:!0});var Mt=g(re);He=c(Mt,"DIV",{class:!0});var hl=g(He);Ve=c(hl,"DIV",{class:!0});var Wa=g(Ve);Ma=Q(Wa,`copyright 2022
			`),Ne=c(Wa,"H2",{});var Tt=g(Ne);Ta=Q(Tt,"Nightingale"),Va=c(Tt,"BR",{}),Na=Q(Tt,"Studios"),Tt.forEach(o),Wa.forEach(o),hl.forEach(o),Ca=w(Mt),ot=c(Mt,"DIV",{class:!0}),g(ot).forEach(o),Mt.forEach(o),this.h()},h(){document.title="Nightingale Studios",s(r,"href","#about"),s(d,"href","#games"),s(_,"href","#contact"),s(l,"class","menu | vertical main-center second-stretch"),s(A,"class","logo-container | horizontal main-center second-center"),s(a,"id","home"),s(a,"class","title-screen | full-screen sidebar"),s(I,"class","sticky-top sticky-bottom"),s(N,"class","flex-center"),s(je,"class","heart svelte-1ejfvv2"),s(We,"class","big-text limited-width"),s(ne,"class","vertical"),s(Se,"class","flex-center padded"),s(j,"id","about"),s(j,"class","full-screen-shrinkable sidebar"),s(he,"class","sticky-top sticky-bottom"),s(ze,"class","flex-center"),s(z,"class","games-grid svelte-1ejfvv2"),s(Le,"class","games-grid-container svelte-1ejfvv2"),s(J,"id","games"),s(J,"class","full-screen-shrinkable sidebar"),s(Ae,"class","sticky-top sticky-bottom"),s(Fe,"class","flex-center"),s(Z,"class","contact svelte-1ejfvv2"),s(Z,"href","https://twitter.com/NStudiosus"),s(Z,"target","_blank"),s(H,"class","contact svelte-1ejfvv2"),s(H,"href","https://www.facebook.com/nightingalestudiosus"),s(H,"target","_blank"),s(O,"class","contact svelte-1ejfvv2"),s(O,"href","https://discord.gg/FbhyGGtgYn"),s(O,"target","_blank"),s(q,"class","contact svelte-1ejfvv2"),s(q,"href","https://www.youtube.com/channel/UC4WhY6A6_quZvWPYkcp1FqA"),s(q,"target","_blank"),s(K,"class","contact svelte-1ejfvv2"),s(K,"href","mailto:ngstudiosus@gmail.com"),s(K,"target","_blank"),s(x,"class","contact svelte-1ejfvv2"),s(x,"href","https://www.redbubble.com/people/NStudios/explore"),s(x,"target","_blank"),s(F,"class","contacts | flex-center padded svelte-1ejfvv2"),s(se,"id","contact"),s(se,"class","sidebar"),s(Qe,"class","sticky-top sticky-bottom"),s(Pe,"class","flex-center"),s(ee,"class","contact svelte-1ejfvv2"),s(ee,"href","https://www.patreon.com/Nightingale_studios"),s(ee,"target","_blank"),s(Re,"type","hidden"),s(Re,"name","business"),Re.value="V4WNH5VTRV3M2",s(Xe,"type","hidden"),s(Xe,"name","no_recurring"),Xe.value="0",s(Je,"type","hidden"),s(Je,"name","item_name"),Je.value="Nightingale Studios Development",s(Ze,"type","hidden"),s(Ze,"name","currency_code"),Ze.value="USD",s(ce,"class","contact | btn clear svelte-1ejfvv2"),Ol(L,"display","contents"),s(L,"action","https://www.paypal.com/donate"),s(L,"method","post"),s(L,"target","_top"),s(ie,"class","contacts | flex-center padded svelte-1ejfvv2"),s(oe,"class","sidebar"),s(le,"class","full-screen-shrinkable vertical main-center no-gap grow"),s(Ve,"class","sticky-top sticky-bottom"),s(He,"class","flex-center"),s(ot,"class","full-screen"),s(re,"class","full-screen sidebar")},m(f,X){W(f,e,X),W(f,a,X),t(a,l),t(l,r),t(r,E),t(l,m),t(l,d),t(d,h),t(l,$),t(l,_),t(_,v),t(l,u),Y(k,l,null),t(a,B),t(a,A),Y(V,A,null),W(f,b,X),W(f,j,X),t(j,N),t(N,I),t(I,C),t(I,M),t(M,ae),t(M,Ye),t(M,me),t(j,Ut),t(j,Se),t(Se,ne),t(ne,Ue),t(Ue,jt),t(Ue,je),Y(ge,je,null),t(ne,Wt),t(ne,We),t(We,zt),W(f,ct,X),W(f,J,X),t(J,ze),t(ze,he),t(he,Lt),t(he,Oe),t(Oe,Ft),t(J,Pt),t(J,Le),t(Le,z),Y(de,z,null),t(z,Rt),Y(ve,z,null),t(z,Xt),Y(_e,z,null),t(z,Jt),Y(pe,z,null),t(z,Zt),Y(we,z,null),t(z,Ht),Y(Ee,z,null),t(z,Ot),Y(be,z,null),W(f,ut,X),W(f,le,X),t(le,se),t(se,Fe),t(Fe,Ae),t(Ae,qt),t(Ae,qe),t(qe,Kt),t(se,xt),t(se,F),t(F,Z),Y(ke,Z,null),t(Z,ea),t(Z,Ke),t(Ke,ta),t(F,aa),t(F,H),Y(Be,H,null),t(H,la),t(H,xe),t(xe,sa),t(F,ra),t(F,O),Y($e,O,null),t(O,na),t(O,et),t(et,oa),t(F,ia),t(F,q),Y(Ie,q,null),t(q,ca),t(q,tt),t(tt,ua),t(F,fa),t(F,K),Y(ye,K,null),t(K,ma),t(K,at),t(at,ga),t(F,ha),t(F,x),Y(De,x,null),t(x,da),t(x,lt),t(lt,va),t(le,_a),t(le,oe),t(oe,Pe),t(Pe,Qe),t(Qe,st),t(st,pa),t(Qe,wa),t(oe,Ea),t(oe,ie),t(ie,ee),Y(Me,ee,null),t(ee,ba),t(ee,rt),t(rt,Aa),t(ie,ka),t(ie,L),t(L,Re),t(L,Ba),t(L,Xe),t(L,$a),t(L,Je),t(L,Ia),t(L,Ze),t(L,ya),t(L,ce),Y(Te,ce,null),t(ce,Da),t(ce,nt),t(nt,Qa),W(f,ft,X),W(f,re,X),t(re,He),t(He,Ve),t(Ve,Ma),t(Ve,Ne),t(Ne,Ta),t(Ne,Va),t(Ne,Na),t(re,Ca),t(re,ot),mt=!0},p:La,i(f){mt||(y(k.$$.fragment,f),y(V.$$.fragment,f),y(ge.$$.fragment,f),y(de.$$.fragment,f),y(ve.$$.fragment,f),y(_e.$$.fragment,f),y(pe.$$.fragment,f),y(we.$$.fragment,f),y(Ee.$$.fragment,f),y(be.$$.fragment,f),y(ke.$$.fragment,f),y(Be.$$.fragment,f),y($e.$$.fragment,f),y(Ie.$$.fragment,f),y(ye.$$.fragment,f),y(De.$$.fragment,f),y(Me.$$.fragment,f),y(Te.$$.fragment,f),mt=!0)},o(f){T(k.$$.fragment,f),T(V.$$.fragment,f),T(ge.$$.fragment,f),T(de.$$.fragment,f),T(ve.$$.fragment,f),T(_e.$$.fragment,f),T(pe.$$.fragment,f),T(we.$$.fragment,f),T(Ee.$$.fragment,f),T(be.$$.fragment,f),T(ke.$$.fragment,f),T(Be.$$.fragment,f),T($e.$$.fragment,f),T(Ie.$$.fragment,f),T(ye.$$.fragment,f),T(De.$$.fragment,f),T(Me.$$.fragment,f),T(Te.$$.fragment,f),mt=!1},d(f){f&&o(e),f&&o(a),S(k),S(V),f&&o(b),f&&o(j),S(ge),f&&o(ct),f&&o(J),S(de),S(ve),S(_e),S(pe),S(we),S(Ee),S(be),f&&o(ut),f&&o(le),S(ke),S(Be),S($e),S(Ie),S(ye),S(De),S(Me),S(Te),f&&o(ft),f&&o(re)}}}const gs=!0;class hs extends Nt{constructor(e){super();Ct(this,e,null,fs,Gt,{})}}export{hs as default,gs as prerender};