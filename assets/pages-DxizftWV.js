import{t as n,S as s,s as g}from"./routes-CXRNMQL3.js";import{s as $,p as y}from"./_virtual_projects-C2N8pRcA.js";import{r as w}from"./_virtual_research-BVOOuJfN.js";const u=n(s.about),h=n(s.work),v=n(s.research),l=n(s.contact),k=n(s.home);function C(){const a=g(window.location.pathname);return a===s.about?"About":a===s.work?"Work":a===s.research?"Research":a===s.contact?"Contact":"Home"}function R(){return new Promise(a=>{const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/gh/mindthemath/text-effects-js@main/text-effects.js",t.onload=()=>{const i=new WordRotator({elementId:"wordRotator",words:["math","technology","design","art"],mode:"flip",timingMode:"pause",firstWordInterval:3e3,otherWordInterval:500,lastWordInterval:1e3,onLetterLand:(e,d,p,r)=>{const c=r?"oklch(0.9133 0.2195 102.76)":"#666666",m=document.querySelectorAll(".letter-flap");e<m.length&&m[e].querySelectorAll(".flap-content").forEach(f=>{f.style.color=c})}}),o=i.currentIndex===0?"oklch(0.9133 0.2195 102.76)":"#666666";document.querySelectorAll(".flap-content").forEach(e=>{e.style.color=o}),document.querySelectorAll(".letter-flap, .flap-content").forEach(e=>{e.style.fontFamily="'Source Code Pro', monospace"}),a(i)},document.head.appendChild(t)})}function A(){const a=document.getElementById("app"),t=C();a.innerHTML=`
    <!-- Navigation Bar -->
    <nav class="nav-bar visible">
      <div class="nav-placeholder"></div>
      
      <!-- Desktop Nav Links -->
      <ul class="nav-links nav-links-desktop">
        <li><a href="${u}" ${t==="About"?'class="active"':""}>About</a></li>
        <li><a href="${h}" ${t==="Work"?'class="active"':""}>Work</a></li>
        <li><a href="${v}" ${t==="Research"?'class="active"':""}>Research</a></li>
        <li><a href="${l}" ${t==="Contact"?'class="active"':""}>Contact</a></li>
      </ul>
      
      <!-- Mobile Menu Button -->
      <button class="nav-menu-btn" id="navMenuBtn" aria-label="Toggle menu" aria-expanded="false">
        <span class="menu-text">MENU</span>
      </button>
    </nav>
    
      <!-- Mobile Navigation Overlay -->
      <div class="mobile-nav-overlay" id="mobileNavOverlay">
        <ul class="nav-links-mobile">
          <li><a href="${u}" ${t==="About"?'class="active"':""}>About</a></li>
          <li><a href="${h}" ${t==="Work"?'class="active"':""}>Work</a></li>
          <li><a href="${v}" ${t==="Research"?'class="active"':""}>Research</a></li>
          <li><a href="${l}" ${t==="Contact"?'class="active"':""}>Contact</a></li>
        </ul>
      </div>
      
      <!-- Animated Hero (in nav position from start on these pages) -->
      <a href="${k}" class="animated-hero in-nav" id="animatedHero" style="opacity: 1; pointer-events: auto;">
      <span class="static-text">MIND THE</span>
      <span id="wordRotator" class="word-rotator" data-mode="flip" data-board-bg="black"></span>
    </a>
    
    <!-- Main Content -->
    <main class="main-content visible">
      <section class="content-section">
        ${E(t)}
      </section>
    </main>
    
    <!-- Footer -->
    <footer class="site-footer">
      <p class="footer-text">© 2026 Mind the Math LLC</p>
    </footer>
  `}const M=[...w].sort((a,t)=>{const i=parseInt(a.started,10)||9999,o=parseInt(t.started,10)||9999;return i-o});function E(a){return a==="About"?b():a==="Work"?H():a==="Research"?I():a==="Contact"?j():b()}function b(){return`
    <h1>About</h1>
    <div class="divider"></div>

    <div class="about-section">
      <h2 class="section-label">Practice</h2>
      <p class="description">
        Mind the Math is a system-led practice where mathematics operates like transit infrastructure: largely invisible, deeply structuring, and essential to movement.
      </p>
      <p class="description">
        Our work defines systems, constraints, and rules which quietly determine how outcomes take shape. Across software, visualization, and physical form, Mind the Math turns mathematical structure into legible pathways, guiding complex ideas into places they can be navigated, inhabited, and understood.
      </p>
      <p class="description">
        The practice operates at the intersection of rigorous computation and perceptual inquiry to produce software, prints, sculptures, and interactive systems that travel between physical and digital realms.
      </p>
    </div>

    <div class="about-section">
      <h2 class="section-label">Michael Pilosov</h2>
      <p class="description">
        Computational mathematician with a PhD in Uncertainty Quantification. Background spanning academic research, machine learning architecture, and technical consulting. 
      </p>
    </div>

    <div class="about-section">
      <h2 class="section-label">Collaboration</h2>
      <p class="description">
        Mind the Math is available for engagements ranging from technical research to creative programming. Inquiries <a href="${l}">welcome</a>.
      </p>
    </div>
  `}function H(){return`
    <h1>Work</h1>
    <div class="divider"></div>
    <p class="description">Projects and systems — authored frameworks that translate mathematical structure into visual, computational, and material form.</p>

    <div class="project-grid">
      ${y.map(t=>`
    <a href="${n(t.path)}" class="project-card ${t.status}">
      <div class="project-card-inner">
        <div class="project-header">
          <span class="project-year">${t.year}</span>
          <span class="project-status">${t.status==="in-progress"?"In Progress":""}</span>
        </div>
        <h3 class="project-title">${t.title}</h3>
        <p class="project-description">${t.description}</p>
        <span class="project-link-indicator">&rarr;</span>
      </div>
    </a>
  `).join("")}
    </div>
  `}function I(){const a={published:"Arrived",completed:"Arrived",delayed:"Delayed",pending:"Approaching","in-progress":"En Route"},t={published:"arrived",completed:"arrived",delayed:"delayed",pending:"approaching","in-progress":"en-route"};function i(e){const d=e.started||"—",p=e.ended||"—",r=a[e.status]||e.status,c=t[e.status]||"";return`
      <a href="${n(e.path)}" class="timetable-row">
        <span class="timetable-col timetable-depart">${d}</span>
        <span class="timetable-col timetable-arrive">${p}</span>
        <span class="timetable-col timetable-route">${e.title}</span>
        <span class="timetable-col timetable-type">${e.type}</span>
        <span class="timetable-col timetable-status ${c}">${r}</span>
        <span class="timetable-col timetable-arrow">&rarr;</span>
      </a>
    `}return`
    <h1>Research</h1>
    <div class="divider"></div>
    <p class="description">Diagrams, notes, and references. Investigations at the intersection of abstract mathematics, computation, and perception.</p>

    <div class="research-timetable">
      <div class="timetable-header-row">
        <span class="timetable-col timetable-depart">Depart</span>
        <span class="timetable-col timetable-arrive">Arrive</span>
        <span class="timetable-col timetable-route">Route</span>
        <span class="timetable-col timetable-type">Line</span>
        <span class="timetable-col timetable-status">Status</span>
        <span class="timetable-col timetable-arrow"></span>
      </div>
      <div class="timetable-entries">
        ${M.map(i).join("")}
      </div>
    </div>
  `}function j(){return`
    <h1>Contact</h1>
    <div class="divider"></div>
    <p class="description">This is your final destination. Transfers available to:</p>

    <div class="contact-links">
      <a href="mailto:solutions@mindthemath.com" class="contact-item">
        <span class="contact-label">Email</span>
        <span class="contact-value">solutions@mindthemath.com</span>
      </a>
      <a href="https://github.com/mindthemath" target="_blank" rel="noopener noreferrer" class="contact-item">
        <span class="contact-label">GitHub</span>
        <span class="contact-value">mindthemath</span>
      </a>
      <a href="https://linkedin.com/in/mathematicalmichael" target="_blank" rel="noopener noreferrer" class="contact-item">
        <span class="contact-label">LinkedIn</span>
        <span class="contact-value">mathematicalmichael</span>
      </a>
    </div>
  `}document.addEventListener("DOMContentLoaded",async()=>{A(),$(),await document.fonts.ready,await R()});
