import{t as s,S as l}from"./routes-CXRNMQL3.js";const E="/",d=s(l.about),m=s(l.work),u=s(l.research),p=s(l.contact),v=s(l.home);function b(){const e=document.getElementById("app");e.innerHTML=`
    <!-- Loading Screen -->
    <div class="loading-screen" id="loadingScreen"></div>
    
    <!-- Navigation Bar -->
    <nav class="nav-bar" id="navBar">
      <div class="nav-placeholder" id="navPlaceholder"></div>
      
      <!-- Desktop Nav Links -->
      <ul class="nav-links nav-links-desktop">
        <li><a href="${d}">About</a></li>
        <li><a href="${m}">Work</a></li>
        <li><a href="${u}">Research</a></li>
        <li><a href="${p}">Contact</a></li>
      </ul>
      
      <!-- Logo link (hidden initially, shown after hero moves to nav) -->
      <a href="${v}" class="nav-logo-link" id="navLogoLink" style="opacity: 0; pointer-events: none;">
        <div class="nav-logo">MIND THE MATH</div>
      </a>
      
      <!-- Mobile Menu Button -->
      <button class="nav-menu-btn" id="navMenuBtn" aria-label="Toggle menu" aria-expanded="false">
        <span class="menu-text">MENU</span>
      </button>
    </nav>
    
    <!-- Mobile Navigation Overlay -->
    <div class="mobile-nav-overlay" id="mobileNavOverlay">
      <ul class="nav-links-mobile">
        <li><a href="${d}">About</a></li>
        <li><a href="${m}">Work</a></li>
        <li><a href="${u}">Research</a></li>
        <li><a href="${p}">Contact</a></li>
      </ul>
    </div>
    
    <!-- Animated Hero (will move from center to nav) -->
    <a href="${v}" class="animated-hero" id="animatedHero" style="pointer-events: none; text-decoration: none; color: inherit;">
      <span class="static-text">MIND THE</span>
      <span id="wordRotator" class="word-rotator" data-mode="flip" data-board-bg="black"></span>
    </a>
    
    <!-- Main Content -->
    <main class="main-content" id="mainContent">
      <section class="content-hero">
        <h1 class="logo-container">
          <img src="${E}assets/logo-450-cb.png" alt="Mind the Math" class="site-logo" id="siteLogo" onerror="this.style.display='none'; document.getElementById('logoFallback').style.display='block';">
          <span class="logo-fallback" id="logoFallback" style="display: none;">Mind the Math</span>
        </h1>
        <p class="tagline" align="center">Bridging the Gap</p>
        <p class="description">
        Mind the Math builds the infrastructure that connects mathematics to perception. Through authored systems and constraints, the practice translates abstract structure into navigable visual, computational, and material form.
        </p>
      </section>
    </main>
    
    <!-- Footer -->
    <footer class="site-footer">
      <p class="footer-text">© 2026 Mind the Math LLC</p>
    </footer>
  `}function L(){return new Promise(e=>{const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/gh/mindthemath/text-effects-js@main/text-effects.js",t.onload=()=>{const a=new WordRotator({elementId:"wordRotator",words:["math","technology","design","art"],mode:"flip",timingMode:"pause",firstWordInterval:1250,otherWordInterval:250,lastWordInterval:1250,onLetterLand:(n,H,S,h)=>{const y=h?"oklch(0.9133 0.2195 102.76)":"#666666",c=document.querySelectorAll(".letter-flap");n<c.length&&c[n].querySelectorAll(".flap-content").forEach(g=>{g.style.color=y})}}),o=a.currentIndex===0?"oklch(0.9133 0.2195 102.76)":"#666666";document.querySelectorAll(".flap-content").forEach(n=>{n.style.color=o}),document.querySelectorAll(".letter-flap, .flap-content").forEach(n=>{n.style.fontFamily="'Source Code Pro', monospace"}),e(a)},document.head.appendChild(t)})}let r=!1;async function f(e=!1){if(r)return;r=!0;const t=document.getElementById("animatedHero"),a=document.getElementById("navBar"),o=document.getElementById("mainContent"),n=document.getElementById("navPlaceholder");e&&t.classList.add("fast-transition"),a.classList.add("visible"),t.classList.add("in-nav"),n&&(n.style.display="none"),await i(e?100:400),o.classList.add("visible")}async function B(){const e=document.getElementById("loadingScreen"),t=document.getElementById("animatedHero"),a=document.getElementById("navBar");await document.fonts.ready,await L(),await i(100),e.classList.add("fade-out"),t.style.opacity="1",t.style.pointerEvents="auto",t.style.cursor="pointer",await i(1200),await i(700),a.classList.add("visible"),await i(5300),r||await f(!1)}function i(e){return new Promise(t=>setTimeout(t,e))}function M(){const e=document.getElementById("navMenuBtn"),t=document.getElementById("mobileNavOverlay"),a=t.querySelectorAll("a");e.addEventListener("click",()=>{const o=t.classList.contains("open");t.classList.toggle("open"),e.setAttribute("aria-expanded",!o),e.querySelector(".menu-text").textContent=o?"MENU":"CLOSE"}),a.forEach(o=>{o.addEventListener("click",()=>{t.classList.remove("open"),e.setAttribute("aria-expanded","false"),e.querySelector(".menu-text").textContent="MENU"})})}function k(){const e=document.getElementById("animatedHero");e.addEventListener("click",t=>{!r&&!e.classList.contains("in-nav")&&(t.preventDefault(),f(!0))})}document.addEventListener("DOMContentLoaded",()=>{b(),M(),k(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{B()})})});
