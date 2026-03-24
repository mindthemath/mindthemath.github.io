import{t as p,S as u,s as C}from"./routes-CXRNMQL3.js";import{s as I,p as T}from"./_virtual_projects-C2N8pRcA.js";import{r as j}from"./_virtual_research-BVOOuJfN.js";const M=document.querySelector("script[data-collection]"),d=typeof window.__DETAIL_COLLECTION__=="string"?window.__DETAIL_COLLECTION__:M?.dataset.collection||"projects",R=d==="research"?j:T,$=d==="research"?u.research:u.work,v=d==="research"?"Research":"Work",b=p(u.about),y=p(u.work),k=p(u.research),E=p(u.contact),H=p(u.home);function A(){const t=C(window.location.pathname);return R.find(e=>e.path===t||e.aliases.includes(t))}function P(t){if(!t)return"";const e=t.split(`
`),n=[];let a=!1;for(let r=0;r<e.length;r++){let s=e[r];if(a&&!s.match(/^[-*] /)&&(n.push("</ul>"),a=!1),s.trim()==="")continue;const l=s.match(/^(#{1,6})\s+(.+)/);if(l){const i=l[1].length,o=g(l[2]);n.push(`<h${i+1} class="detail-heading">${o}</h${i+1}>`);continue}const c=s.match(/^!\[([^\]]*)\]\(([^)]+)\)/);if(c){const i=c[1],o=c[2];n.push(`<figure class="detail-figure"><img src="${o}" alt="${i}" loading="lazy"><figcaption>${i}</figcaption></figure>`);continue}if(s.match(/^[-*] /)){a||(n.push('<ul class="detail-list">'),a=!0),n.push(`<li>${g(s.replace(/^[-*] /,""))}</li>`);continue}n.push(`<p class="detail-paragraph">${g(s)}</p>`)}return a&&n.push("</ul>"),n.join(`
`)}function g(t){return t.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`(.+?)`/g,"<code>$1</code>").replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}function _(t,e="detail-gallery"){if(!t||t.length===0)return"";const n=t.map(a=>{if(typeof a=="string")return`<figure class="detail-figure"><img src="${a}" alt="" loading="lazy"></figure>`;const r=a.src||"",s=a.caption||"";return`
      <figure class="detail-figure">
        <img src="${r}" alt="${s}" loading="lazy">
        ${s?`<figcaption>${s}</figcaption>`:""}
      </figure>
    `}).join("");return`<div class="${e}">${n}</div>`}function x(){return new Promise(t=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/gh/mindthemath/text-effects-js@main/text-effects.js",e.onload=()=>{const n=new WordRotator({elementId:"wordRotator",words:["math","technology","design","art"],mode:"flip",timingMode:"pause",firstWordInterval:3e3,otherWordInterval:500,lastWordInterval:1e3,onLetterLand:(r,s,l,c)=>{const i=c?"oklch(0.9133 0.2195 102.76)":"#666666",o=document.querySelectorAll(".letter-flap");r<o.length&&o[r].querySelectorAll(".flap-content").forEach(h=>{h.style.color=i})}}),a=n.currentIndex===0?"oklch(0.9133 0.2195 102.76)":"#666666";document.querySelectorAll(".flap-content").forEach(r=>{r.style.color=a}),document.querySelectorAll(".letter-flap, .flap-content").forEach(r=>{r.style.fontFamily="'Source Code Pro', monospace"}),t(n)},document.head.appendChild(e)})}function O(){const t=document.getElementById("app"),e=A();if(!e){t.innerHTML=L(`
      <h1>Not Found</h1>
      <div class="divider"></div>
      <p class="description">The requested item could not be found.</p>
      <a href="${p($)}" class="detail-back">&larr; Back to ${v}</a>
    `);return}document.title=`${e.title} — Mind the Math`;const a={completed:"","in-progress":"In Progress",published:"Published",pending:"Pending Publication",delayed:"Delayed"}[e.status]||"",r=a?`<span class="detail-status">${a}</span>`:"",s=e.started?`${e.started}${e.ended?" — "+e.ended:" — present"}`:e.year||"",l=[];if(e.link&&l.push(`<a href="${e.link}" target="_blank" rel="noopener noreferrer" class="detail-ref-link">Project site &rarr;</a>`),e.arxiv&&l.push(`<a href="${e.arxiv}" target="_blank" rel="noopener noreferrer" class="detail-ref-link">arXiv &rarr;</a>`),e.doi&&l.push(`<a href="${e.doi}" target="_blank" rel="noopener noreferrer" class="detail-ref-link">Publication &rarr;</a>`),e.code&&e.code.length>0)for(const f of e.code){const w=typeof f=="string"?"Code":f.label||"Code",m=typeof f=="string"?f:f.url;m&&l.push(`<a href="${m}" target="_blank" rel="noopener noreferrer" class="detail-ref-link">${w} &rarr;</a>`)}const c=e.journal?`<p class="detail-journal">${e.journal}</p>`:"",i=l.length>0?`<div class="detail-ref-links">${l.join("")}</div>`:"",o=e.images&&e.images.length>0?e.images[0]:null,h=e.images&&e.images.length>1?e.images.slice(1):[];t.innerHTML=L(`
    <a href="${p($)}" class="detail-back">&larr; ${v}</a>

    <div class="detail-header">
      <div class="detail-meta">
        <span class="detail-year">${s}</span>
        ${e.type?`<span class="detail-type">${e.type}</span>`:""}
        ${r}
      </div>
      <h1>${e.title}</h1>
      <p class="description">${e.description}</p>
      ${c}
      ${i}
    </div>

    <div class="divider"></div>

    ${_(o?[o]:[],"detail-gallery")}

    <div class="detail-body">
      ${P(e.body)}
    </div>

    ${h.length>0?`
      <div class="divider"></div>
      ${_(h,"detail-grid")}
    `:""}
  `)}function L(t){return`
    <!-- Navigation Bar -->
    <nav class="nav-bar visible">
      <div class="nav-placeholder"></div>
      <ul class="nav-links nav-links-desktop">
        <li><a href="${b}">About</a></li>
        <li><a href="${y}" ${d==="projects"?'class="active"':""}>Work</a></li>
        <li><a href="${k}" ${d==="research"?'class="active"':""}>Research</a></li>
        <li><a href="${E}">Contact</a></li>
      </ul>
      <button class="nav-menu-btn" id="navMenuBtn" aria-label="Toggle menu" aria-expanded="false">
        <span class="menu-text">MENU</span>
      </button>
    </nav>

    <div class="mobile-nav-overlay" id="mobileNavOverlay">
      <ul class="nav-links-mobile">
        <li><a href="${b}">About</a></li>
        <li><a href="${y}" ${d==="projects"?'class="active"':""}>Work</a></li>
        <li><a href="${k}" ${d==="research"?'class="active"':""}>Research</a></li>
        <li><a href="${E}">Contact</a></li>
      </ul>
    </div>

    <a href="${H}" class="animated-hero in-nav" id="animatedHero" style="opacity: 1; pointer-events: auto;">
      <span class="static-text">MIND THE</span>
      <span id="wordRotator" class="word-rotator" data-mode="flip" data-board-bg="black"></span>
    </a>

    <main class="main-content visible">
      <article class="content-section detail-content">
        ${t}
      </article>
    </main>

    <footer class="site-footer">
      <p class="footer-text">&copy; 2026 Mind the Math LLC</p>
    </footer>
  `}document.addEventListener("DOMContentLoaded",async()=>{O(),I(),await document.fonts.ready,await x()});
