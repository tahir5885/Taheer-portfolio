/* ============================================================
   js/main.js  —  Page behaviour (don't edit)
============================================================ */

/* ── Navbar scroll shadow ───────────────────────────────── */
window.addEventListener('scroll', function () {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

/* ── Mobile burger ──────────────────────────────────────── */
document.getElementById('burger').addEventListener('click', function () {
  this.classList.toggle('open');
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(function (a) {
  a.addEventListener('click', function () {
    document.getElementById('burger').classList.remove('open');
    document.getElementById('navLinks').classList.remove('open');
  });
});

/* ── Stats counter ──────────────────────────────────────── */
function countUp(el) {
  var target = +el.dataset.target, dur = 1800, start = performance.now();
  (function step(now) {
    var p = Math.min((now - start) / dur, 1);
    el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
    if (p < 1) requestAnimationFrame(step); else el.textContent = target;
  })(start);
}
var statsEl = document.querySelector('.stats-bar');
if (statsEl) {
  new IntersectionObserver(function (e, o) {
    if (e[0].isIntersecting) {
      statsEl.querySelectorAll('.stat-num').forEach(countUp);
      o.disconnect();
    }
  }, { threshold: 0.4 }).observe(statsEl);
}

/* ── Card fade-in on scroll ─────────────────────────────── */
new IntersectionObserver(function (entries) {
  entries.forEach(function (e, i) {
    if (e.isIntersecting) {
      setTimeout(function () { e.target.classList.add('visible'); }, i * 55);
      this.unobserve(e.target);
    }
  }.bind(this));
}, { threshold: 0.08 }).observe && document.querySelectorAll('.card').forEach(function (c) {
  new IntersectionObserver(function (e, o) {
    if (e[0].isIntersecting) { e[0].target.classList.add('visible'); o.disconnect(); }
  }, { threshold: 0.08 }).observe(c);
});

/* ── Hero thumbnail click → swap hero bg ───────────────── */
document.querySelectorAll('.ht').forEach(function (t) {
  t.addEventListener('click', function () {
    var heroImg = document.getElementById('heroImg');
    if (!heroImg) return;
    var url = t.style.backgroundImage.replace(/url\(['"]?|['"]?\)/g, '');
    heroImg.style.opacity = '0';
    setTimeout(function () { heroImg.src = url; heroImg.style.opacity = '1'; }, 350);
  });
});

/* ── Smooth scroll ──────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    var t = document.querySelector(this.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});
