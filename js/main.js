/* ============================================================
   aDmotion Media — Main JavaScript (behaviour only)
   All HTML lives in index.html
   ============================================================ */

// ─── SVG icons needed purely for JS-driven UI state ──────────
const iconMenu = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
const iconX    = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

// ─── Navbar ───────────────────────────────────────────────────
function initNavbar() {
  const nav    = document.getElementById('navbar');
  const inner  = document.getElementById('nav-inner');
  const btn    = document.getElementById('menu-btn');
  const mobile = document.getElementById('nav-mobile');
  if (!nav || !inner || !btn || !mobile) return;

  // Set initial menu icon
  btn.innerHTML = iconMenu;

  // Scroll glass effect
  // window.addEventListener('scroll', () => {
  //   if (window.scrollY > 24) {
  //     nav.classList.add('scrolled');
  //     inner.classList.add('glass-strong');
  //   } else {
  //     nav.classList.remove('scrolled');
  //     inner.classList.remove('glass-strong');
  //   }
  // }, { passive: true });

  // Mobile toggle
  let open = false;
  btn.addEventListener('click', () => {
    open = !open;
    btn.innerHTML = open ? iconX : iconMenu;
    mobile.classList.toggle('open', open);
  });

  // Close on link click
  mobile.querySelectorAll('.mobile-link').forEach(a => {
    a.addEventListener('click', () => {
      open = false;
      btn.innerHTML = iconMenu;
      mobile.classList.remove('open');
    });
  });
}

// ─── Hero chart bars ─────────────────────────────────────────
function initHeroChart() {
  const chart = document.getElementById('hero-chart');
  if (!chart) return;
  const bars = [40, 65, 50, 80, 60, 95, 75, 100, 70, 90, 85, 100];
  chart.innerHTML = bars.map((h, i) =>
    `<span style="height:${h}%;opacity:${0.4 + (i / 24)}"></span>`
  ).join('');
}

// ─── Footer copyright year ────────────────────────────────────
function initFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = `© ${new Date().getFullYear()} AdMotion Media Private Limited. All rights reserved.`;
}

// ─── Contact form ─────────────────────────────────────────────
function initContactForm() {
  const form      = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  if (!form || !submitBtn) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    submitBtn.innerHTML = "Thanks — we'll be in touch.";
    submitBtn.disabled  = true;
    submitBtn.style.opacity = '0.8';
  });
}

// ─── Reveal on scroll ─────────────────────────────────────────
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  els.forEach(el => io.observe(el));
}

// ─── Animated counters ────────────────────────────────────────
function initCounters() {
  const els = document.querySelectorAll('.counter-el');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el       = e.target;
      const target   = parseFloat(el.dataset.target);
      const suffix   = el.dataset.suffix || '';
      const decimals = parseInt(el.dataset.decimals) || 0;
      io.unobserve(el);
      const t0  = performance.now();
      const dur = 1800;
      function tick(now) {
        const p     = Math.min(1, (now - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        const val   = target * eased;
        el.textContent = decimals > 0
          ? val.toFixed(decimals) + suffix
          : Math.round(val).toLocaleString('en-IN') + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.4 });
  els.forEach(el => io.observe(el));
}

// ─── Boot ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroChart();
  initFooterYear();
  initContactForm();
  // Small delay to let DOM settle before running observers
  requestAnimationFrame(() => {
    initReveal();
    initCounters();
  });
});