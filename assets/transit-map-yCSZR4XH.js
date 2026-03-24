import{t as Y,S as K}from"./routes-CXRNMQL3.js";import{p as mt,s as ft}from"./_virtual_projects-C2N8pRcA.js";const gt="/",at=Y(K.about),st=Y(K.work),it=Y(K.research),lt=Y(K.contact),$t=document.querySelector("script[data-variant]");let Q=$t?.dataset.variant;if(!Q){const a=window.location.pathname.match(/\/([123])(?:\.html)?$/);Q=a?a[1]:"1"}const ct=["#C1554D","#4A7B9D","#3D8B7A","#C4913F","#7B6B8D","#B85C3A"],D=[...mt].sort((a,m)=>{const B=parseInt(a.year)||0,I=parseInt(m.year)||0;if(I!==B)return I-B;const b=a.month||0,L=m.month||0;return L!==b?L-b:a.order-m.order}),ut=[...new Set(D.flatMap(a=>a.tags||[]))],v=ut.map((a,m)=>({id:a,label:a.charAt(0).toUpperCase()+a.slice(1),color:ct[m%ct.length]}));function et(){return`<div class="tm-legend">${v.map(a=>`<div class="tm-legend-item">
      <span class="tm-legend-swatch" style="background:${a.color}"></span>
      <span class="tm-legend-label">${a.label}</span>
    </div>`).join("")}</div>`}function nt(){return`
    <div class="tm-modal-overlay" id="tmModalOverlay">
      <div class="tm-modal" id="tmModal">
        <button class="tm-modal-close" id="tmModalClose">&times;</button>
        <img class="tm-modal-image" id="tmModalImage" style="display:none;" />
        <div class="tm-modal-meta" id="tmModalMeta"></div>
        <h2 class="tm-modal-title" id="tmModalTitle"></h2>
        <p class="tm-modal-desc" id="tmModalDesc"></p>
        <div class="tm-modal-tags" id="tmModalTags"></div>
        <a class="tm-modal-link" id="tmModalLink" href="#">View project &rarr;</a>
      </div>
    </div>
  `}function yt(a){const m=D.find(u=>u.slug===a);if(!m)return;const B=document.getElementById("tmModalOverlay"),I=document.getElementById("tmModalImage");if(m.images&&m.images.length>0){const u=m.images[0],k=typeof u=="string"?u:u.src;I.src=k,I.style.display="block"}else I.style.display="none";const b=m.status==="in-progress"?" · In Progress":"";document.getElementById("tmModalMeta").textContent=m.year+b,document.getElementById("tmModalTitle").textContent=m.title,document.getElementById("tmModalDesc").textContent=m.description,document.getElementById("tmModalLink").href=Y(m.path);const L=document.getElementById("tmModalTags");L.innerHTML=(m.tags||[]).map(u=>`<span class="tm-modal-tag" style="--tag-color:${v.find(y=>y.id===u)?.color||"#999"}">${u}</span>`).join(""),B.classList.add("open")}function xt(){const a=document.getElementById("tmModalOverlay");a&&(document.getElementById("tmModalClose").addEventListener("click",()=>a.classList.remove("open")),a.addEventListener("click",m=>{m.target===a&&a.classList.remove("open")}))}function vt(){document.querySelectorAll(".tm-stop").forEach(a=>{a.addEventListener("click",()=>yt(a.dataset.slug))})}function rt(){let a=220,m=80,B=80;const I=32,b=320,L=700,u=L/2,k=22,y=k/2,g=16,S=t=>Math.round(t/y)*y,l=v.map((t,e)=>v.length===1?S(u):S(u-b/2+e*(b/(v.length-1)))),s=D.map(t=>{const e=(t.tags||[]).map(i=>v.findIndex(C=>C.id===i)).filter(i=>i>=0).sort((i,C)=>i-C),n=Array.from({length:v.length},()=>0),p=new Set(e);if(e.length>0){const i=e.map(c=>l[c]),C=i.reduce((c,x)=>c+x,0)/i.length,E=S(C);e.forEach((c,x)=>{n[c]=S(E+(x-(e.length-1)/2)*k)});const h=Math.min(...e.map(c=>n[c])),H=Math.max(...e.map(c=>n[c])),R=[],A=[];for(let c=0;c<v.length;c++)p.has(c)||(l[c]<E?R.push(c):A.push(c));R.sort((c,x)=>l[x]-l[c]),A.sort((c,x)=>l[c]-l[x]),R.forEach((c,x)=>{n[c]=S(h-g-(x+1)*k)}),A.forEach((c,x)=>{n[c]=S(H+g+(x+1)*k)})}else for(let i=0;i<v.length;i++)n[i]=l[i];let d=0,o=0;e.length>0?(d=Math.min(...e.map(i=>n[i]))-g,o=Math.max(...e.map(i=>n[i]))+g):(d=u-g,o=u+g);const f=e.map(i=>n[i]);return{y:0,activeIdx:e,linePositions:n,dots:f,pillL:d,pillR:o,project:t}});if(s.length>0){let t=0,e=0,n=0;v.forEach((p,d)=>{t=Math.max(t,Math.abs(l[d]-s[0].linePositions[d])),e=Math.max(e,Math.abs(s[s.length-1].linePositions[d]-l[d]));for(let o=1;o<s.length;o++)n=Math.max(n,Math.abs(s[o].linePositions[d]-s[o-1].linePositions[d]))}),a=Math.max(a,Math.ceil(n+I)),m=Math.max(m,Math.ceil(t+I)),B=Math.max(B,Math.ceil(e+I))}const T=m+Math.max(D.length-1,0)*a+B;s.forEach((t,e)=>{t.y=m+e*a});const M=y;v.forEach((t,e)=>{let n=l[e];for(let p=0;p<s.length;p++){const d=s[p].linePositions[e];Math.abs(d-n)<M&&(s[p].linePositions[e]=n),n=s[p].linePositions[e]}});const J=s.map(t=>new Set(t.activeIdx));function w(t,e,n,p){const d=s[e];if(J[e].has(t))return Math.abs(n-p)<.001;if(d.activeIdx.length>0){const o=d.activeIdx.map(C=>d.linePositions[C]),f=Math.min(...o)-g,i=Math.max(...o)+g;if(n>f-g&&n<i+g)return!1}for(let o=0;o<v.length;o++)if(o!==t&&Math.abs(s[e].linePositions[o]-n)<y)return!1;return!0}function P(t){return t+1}function F(t){return t-1}v.forEach((t,e)=>{const n=s.map(r=>r.linePositions[e]);if(n.length===0)return;const d=[...new Set([l[e],...n])].sort((r,$)=>r-$),o=d.length,f=n.length,i=Number.POSITIVE_INFINITY,C=1e3,E=Array.from({length:f},()=>Array.from({length:o},()=>[i,i,i])),h=Array.from({length:f},()=>Array.from({length:o},()=>[null,null,null]));for(let r=0;r<o;r++){const $=d[r];if(!w(e,0,$,n[0]))continue;const N=Math.sign($-l[e]),j=P(N),q=Math.abs($-l[e]),U=Math.abs($-l[e])<.001?0:1e4;E[0][r][j]=q+U,h[0][r][j]={pci:-1,pdi:-1}}for(let r=1;r<f;r++)for(let $=0;$<o;$++){const N=d[$];if(w(e,r,N,n[r]))for(let j=0;j<o;j++){const q=d[j];for(let z=0;z<3;z++){const U=E[r-1][j][z];if(!Number.isFinite(U))continue;const Z=F(z),V=Math.sign(N-q),tt=P(V===0?Z:V),dt=Z!==0&&V!==0&&V!==Z?C:0,pt=Math.abs(N-q)*10,ht=Math.abs(N-l[e])*.1,ot=U+pt+dt+ht;ot<E[r][$][tt]&&(E[r][$][tt]=ot,h[r][$][tt]={pci:j,pdi:z})}}}let H=i,R=-1,A=-1;for(let r=0;r<o;r++)for(let $=0;$<3;$++)E[f-1][r][$]<H&&(H=E[f-1][r][$],R=r,A=$);if(!Number.isFinite(H))return;const c=Array.from({length:f});let x=R,W=A;for(let r=f-1;r>=0;r--){c[r]=d[x];const $=h[r][x][W];if(!$||$.pci<0||$.pdi<0)break;x=$.pci,W=$.pdi}for(let r=0;r<f;r++)s[r].linePositions[e]=c[r]}),s.forEach(t=>{t.activeIdx.length>0?(t.dots=t.activeIdx.map(e=>t.linePositions[e]),t.pillL=Math.min(...t.dots)-g,t.pillR=Math.max(...t.dots)+g):(t.dots=[],t.pillL=u-g,t.pillR=u+g)});function G(t,e){return s[e].linePositions[t]}function O(t,e,n,p,d=16){const o=n-t,f=p-e,i=Math.abs(o),C=Math.abs(f),E=Math.sign(o),h=R=>Math.round(R);if(i<.5)return`L ${h(n)} ${h(p)}`;if(C>=i){const R=e+f/2,A=i/2,c=R-A,x=R+A,W=Math.min(d,Math.max(0,(c-e)/2),i/2);return W<2?[`L ${h(t)} ${h(c)}`,`L ${h(n)} ${h(x)}`,`L ${h(n)} ${h(p)}`].join(" "):[`L ${h(t)} ${h(c-W)}`,`Q ${h(t)} ${h(c)} ${h(t+E*W)} ${h(c+W)}`,`L ${h(n-E*W)} ${h(x-W)}`,`Q ${h(n)} ${h(x)} ${h(n)} ${h(x+W)}`,`L ${h(n)} ${h(p)}`].join(" ")}else return`L ${h(n)} ${h(p)}`}let _="";v.forEach((t,e)=>{const n=s.length>0?s[s.length-1].linePositions[e]:l[e],p=[{x:l[e],y:0},...s.map((o,f)=>({x:G(e,f),y:s[f].y})),{x:n,y:T}];let d=`M ${Math.round(p[0].x)} ${Math.round(p[0].y)}`;for(let o=1;o<p.length;o++){const f=p[o-1],i=p[o];d+=" "+O(f.x,f.y,i.x,i.y,16)}_+=`<path d="${d}" stroke="${t.color}" stroke-width="12" fill="none" opacity="0.85" stroke-linecap="round"/>`});let X="";return s.forEach((t,e)=>{const n=t.pillR-t.pillL,p=28,d=t.y-p/2,o=`${t.project.year}${t.project.status==="in-progress"?" · in progress":""}`,f=400,i=80,C=16,E=e%2===0,h=E?t.pillR+C:t.pillL-C-f,H=E?"flex-start":"flex-end",R=E?"left":"right";X+=`<rect x="${t.pillL}" y="${d}" width="${n}" height="${p}" rx="${p/2}" fill="#fff" stroke="#1a1a1a" stroke-width="4.5"/>`,t.dots.forEach((A,c)=>{X+=`<circle cx="${A}" cy="${t.y}" r="4.5" fill="${v[t.activeIdx[c]].color}"/>`}),X+=`
      <g class="tm-stop" data-slug="${t.project.slug}" style="cursor: pointer">
        <foreignObject x="${h}" y="${t.y-i/2}" width="${f}" height="${i}">
          <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; width: 100%; height: 100%; align-items: center; justify-content: ${H};">
            <div class="tm-stop-label" style="
              font-family: 'Source Code Pro', monospace;
              font-size: 20px;
              font-weight: 700;
              color: #1a1a1a;
              line-height: 1.3;
              white-space: nowrap;
              background: rgba(245, 244, 240, 0.95);
              padding: 6px 10px;
              border-radius: 4px;
              text-align: ${R};
            ">${t.project.title}<br/><span style="color: #777; font-weight: 500; font-size: 13px;">${o}</span></div>
          </div>
        </foreignObject>
      </g>`}),`
    ${et()}
    <svg class="tm-svg" viewBox="0 0 ${L} ${T}" preserveAspectRatio="xMidYMid meet">
      ${_}${X}
    </svg>
    ${nt()}
  `}function bt(){const k=40+Math.max(D.length-1,0)*240+60;let y=`<line x1="350" y1="0" x2="350" y2="${k}" stroke="#1a1a1a" stroke-width="4" opacity="0.1"/>`;return D.forEach((g,S)=>{const l=40+S*240,s=S%2===0,T=s?-1:1,M=(g.tags||[]).map(t=>({tag:t,line:v.find(e=>e.id===t)})).filter(t=>t.line);y+=`<line x1="350" y1="${l-40}" x2="350" y2="${l+40}" stroke="#1a1a1a" stroke-width="4"/>`,M.forEach((t,e)=>{const n=350+T*(80+e*22),p=l+(e-(M.length-1)/2)*16;y+=`<line x1="350" y1="${l}" x2="${n}" y2="${p}" stroke="${t.line.color}" stroke-width="3" stroke-linecap="round"/>`,y+=`<circle cx="${n}" cy="${p}" r="4.5" fill="${t.line.color}"/>`;const d=n+T*8,o=s?"end":"start";y+=`<text x="${d}" y="${p+3.5}" text-anchor="${o}" fill="${t.line.color}" font-size="9" font-family="'Source Code Pro',monospace" font-weight="600" letter-spacing="0.06em">${t.line.label}</text>`});const w=350+-T*30,P=s?"start":"end",F=g.title.length,G=Math.max(F*11,120),O=40,_=s?w-4:w-G+4,X=l-O/2-2;y+=`
      <g class="tm-stop" data-slug="${g.slug}">
        <circle class="tm-stop-ring" cx="350" cy="${l}" r="22" fill="none" stroke="#1a1a1a" stroke-width="1" opacity="0"/>
        <circle class="tm-stop-dot" cx="350" cy="${l}" r="12" fill="#f5f4f0" stroke="#1a1a1a" stroke-width="3"/>
        <circle cx="350" cy="${l}" r="4" fill="#1a1a1a"/>
        <rect x="${_}" y="${X}" width="${G}" height="${O}" rx="3" fill="#f5f4f0" opacity="0.88"/>
        <text class="tm-stop-label" x="${w}" y="${l-4}" text-anchor="${P}" font-size="16" font-family="'Source Code Pro',monospace" font-weight="700" fill="#1a1a1a">${g.title}</text>
        <text x="${w}" y="${l+14}" text-anchor="${P}" font-size="10" font-family="'Source Code Pro',monospace" fill="#999">${g.year}${g.status==="in-progress"?" · in progress":""}</text>
      </g>`}),`
    ${et()}
    <svg class="tm-svg" viewBox="0 0 700 ${k}" preserveAspectRatio="xMidYMid meet">
      ${y}
    </svg>
    ${nt()}
  `}function Mt(){const b=(v.length-1)*46,L=30,u=160,k=40,y=k+u+L,g=y+b+L+u+k,S=80+Math.max(D.length-1,0)*180+60;let l="";return v.forEach((s,T)=>{const M=y+T*46;l+=`<line x1="${M}" y1="0" x2="${M}" y2="${S}" stroke="${s.color}" stroke-width="12"/>`}),D.forEach((s,T)=>{const M=80+T*180,w=(s.tags||[]).map(o=>v.findIndex(f=>f.id===o)).filter(o=>o>=0).sort((o,f)=>o-f);if(w.length===0)return;const P=w.map(o=>y+o*46),F=P[0],G=P[P.length-1],O=13,_=6,X=4.5;P.length>1&&(l+=`<line x1="${F}" y1="${M}" x2="${G}" y2="${M}" stroke="#1a1a1a" stroke-width="${_+2*X}" stroke-linecap="butt" />`),P.forEach(o=>{l+=`<circle cx="${o}" cy="${M}" r="${O+X}" fill="#1a1a1a" />`}),P.length>1&&(l+=`<line x1="${F}" y1="${M}" x2="${G}" y2="${M}" stroke="#fff" stroke-width="${_}" stroke-linecap="butt" />`),P.forEach(o=>{l+=`<circle cx="${o}" cy="${M}" r="${O}" fill="#fff" />`});const t=T%2===0;let e;t?e=y+w[w.length-1]*46+L:e=y+w[0]*46-L-u;const n=Math.min(y+w[0]*46-20,e),d=Math.max(y+w[w.length-1]*46+20,e+u)-n;l+=`
      <g class="tm-stop" data-slug="${s.slug}" style="cursor: pointer">
        <rect x="${n}" y="${M-35}" width="${d}" height="70" fill="transparent"/>
        <foreignObject x="${e}" y="${M-40}" width="${u}" height="80">
          <div xmlns="http://www.w3.org/1999/xhtml" style="
            font-family: 'Source Code Pro', monospace; 
            font-size: 16px; 
            font-weight: 700; 
            color: #1a1a1a; 
            line-height: 1.3;
            background: rgba(245, 244, 240, 0.9);
            padding: 4px 6px;
            border-radius: 4px;
            text-align: ${t?"left":"right"};
          ">
            ${s.title} <span style="color: #777; font-weight: 500; font-size: 0.9em;">${s.year}</span>
          </div>
        </foreignObject>
      </g>`}),`
    ${et()}
    <svg class="tm-svg" viewBox="0 0 ${g} ${S}" preserveAspectRatio="xMidYMid meet">
      ${l}
    </svg>
    ${nt()}
  `}const wt={1:rt,2:bt,3:Mt};function Et(){const a=document.getElementById("app"),m=(wt[Q]||rt)();a.innerHTML=`
    <nav class="nav-bar visible">
      <div class="nav-placeholder"></div>
      <ul class="nav-links nav-links-desktop">
        <li><a href="${at}">About</a></li>
        <li><a href="${st}" class="active">Work</a></li>
        <li><a href="${it}">Research</a></li>
        <li><a href="${lt}">Contact</a></li>
      </ul>
      <button class="nav-menu-btn" id="navMenuBtn" aria-label="Toggle menu" aria-expanded="false">
        <span class="menu-text">MENU</span>
      </button>
    </nav>

    <div class="mobile-nav-overlay" id="mobileNavOverlay">
      <ul class="nav-links-mobile">
        <li><a href="${at}">About</a></li>
        <li><a href="${st}" class="active">Work</a></li>
        <li><a href="${it}">Research</a></li>
        <li><a href="${lt}">Contact</a></li>
      </ul>
    </div>

    <a href="${gt}" class="animated-hero in-nav" id="animatedHero" style="opacity: 1; pointer-events: auto;">
      <span class="static-text">MIND THE</span>
      <span id="wordRotator" class="word-rotator" data-mode="flip" data-board-bg="black"></span>
    </a>

    <main class="main-content visible">
      <section class="content-section tm-page">
        <h1>Work</h1>
        <p class="description">Variant ${Q}</p>
        <div class="divider"></div>
        <div class="tm-container">
          ${m}
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p class="footer-text">&copy; 2026 Mind the Math LLC</p>
    </footer>
  `}function kt(){return new Promise(a=>{const m=document.createElement("script");m.src="https://cdn.jsdelivr.net/gh/mindthemath/text-effects-js@main/text-effects.js",m.onload=()=>{const B=new WordRotator({elementId:"wordRotator",words:["math","technology","design","art"],mode:"flip",timingMode:"pause",firstWordInterval:3e3,otherWordInterval:500,lastWordInterval:1e3,onLetterLand:(b,L,u,k)=>{const y=k?"oklch(0.9133 0.2195 102.76)":"#666666",g=document.querySelectorAll(".letter-flap");b<g.length&&g[b].querySelectorAll(".flap-content").forEach(S=>{S.style.color=y})}}),I=B.currentIndex===0?"oklch(0.9133 0.2195 102.76)":"#666666";document.querySelectorAll(".flap-content").forEach(b=>{b.style.color=I}),document.querySelectorAll(".letter-flap, .flap-content").forEach(b=>{b.style.fontFamily="'Source Code Pro', monospace"}),a(B)},document.head.appendChild(m)})}document.addEventListener("DOMContentLoaded",async()=>{Et(),ft(),xt(),vt(),await document.fonts.ready,await kt()});
