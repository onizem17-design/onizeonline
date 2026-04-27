// ── Dark mode ──────────────────────────────────────────────
const html = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', saved);
if (toggleBtn) toggleBtn.textContent = saved === 'dark' ? '☀️ Light' : '🌙 Dark';
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    toggleBtn.textContent = next === 'dark' ? '☀️ Light' : '🌙 Dark';
  });
}

// ── Hamburger ──────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
}

// ── Scroll reveal ──────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const siblings = entry.target.parentElement.querySelectorAll('.reveal');
      const idx = Array.from(siblings).indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), idx * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Nav shadow on scroll ───────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) nav.style.boxShadow = window.scrollY > 20 ? '0 4px 24px rgba(59,74,47,0.1)' : 'none';
});
