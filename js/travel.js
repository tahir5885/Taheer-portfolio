/* ============================================================
   js/travel.js  —  Builds country travel pages
   Don't edit this file.
   Each country page loads photos.js then this file.
============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* Figure out which country page we're on by reading
     the data-country attribute on <body> */
  var country = document.body.dataset.country;
  var DATA = { malaysia: MALAYSIA, uae: UAE, saudi: SAUDI, singapore: SINGAPORE }[country];

  if (!DATA) return;

  /* ── Hero cover image ─────────────────────────────────── */
  var heroImg = document.getElementById('heroImg');
  if (heroImg) heroImg.src = DATA.cover;

  /* ── Photo count badge ───────────────────────────────── */
  var badge = document.getElementById('photoBadge');
  if (badge) badge.textContent = DATA.photos.length + ' photos';

  /* ── Build masonry grid ──────────────────────────────── */
  var grid = document.getElementById('photoGrid');
  if (!grid) return;

  /* Collect unique categories */
  var cats = [];
  DATA.photos.forEach(function (p) {
    if (p.cat && cats.indexOf(p.cat) < 0) cats.push(p.cat);
  });

  /* Build filter buttons if multiple categories */
  var fb = document.getElementById('travelFilterBar');
  if (fb && cats.length > 1) {
    fb.innerHTML = '<button class="filter-btn active" data-filter="all">All</button>';
    cats.forEach(function (c) {
      var btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.dataset.filter = c;
      btn.textContent = c.charAt(0).toUpperCase() + c.slice(1);
      fb.appendChild(btn);
    });
    fb.querySelectorAll('.filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        fb.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var f = btn.dataset.filter;
        grid.querySelectorAll('.card').forEach(function (c) {
          var show = f === 'all' || c.dataset.filter === f;
          c.classList.toggle('hide', !show);
          if (show) { c.classList.remove('visible'); setTimeout(function () { c.classList.add('visible'); }, 30); }
        });
      });
    });
  } else if (fb) {
    fb.style.display = 'none';
  }

  /* Build cards */
  DATA.photos.forEach(function (p, i) {
    var d = document.createElement('div');
    d.className = 'card';
    d.dataset.filter = p.cat || 'general';
    d.innerHTML =
      '<img src="../' + p.src + '" alt="' + (p.title || '') + '" loading="lazy">' +
      '<div class="card-hover">' +
        '<p class="card-title">' + (p.title || '') + '</p>' +
        '<p class="card-loc">'   + (p.loc   || '') + '</p>' +
      '</div>';
    d.addEventListener('click', function () { openTravelLB(i); });
    grid.appendChild(d);
  });

  /* Scroll reveal */
  grid.querySelectorAll('.card').forEach(function (c) {
    new IntersectionObserver(function (e, o) {
      if (e[0].isIntersecting) { e[0].target.classList.add('visible'); o.disconnect(); }
    }, { threshold: 0.06 }).observe(c);
  });

  /* ── Highlight strip (first 8 photos) ───────────────── */
  var strip = document.getElementById('highlightStrip');
  if (strip) {
    DATA.photos.slice(0, 8).forEach(function (p, i) {
      var d = document.createElement('div');
      d.className = 'h-strip-item';
      d.innerHTML = '<img src="../' + p.src + '" alt="' + (p.title || '') + '" loading="lazy">';
      d.addEventListener('click', function () { openTravelLB(i); });
      strip.appendChild(d);
    });
  }

  /* ── Lightbox for travel pages ───────────────────────── */
  var lb    = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbT   = document.getElementById('lbTitle');
  var lbL   = document.getElementById('lbLoc');
  var cur   = 0;
  var photos = DATA.photos;

  function openTravelLB(i) {
    cur = i;
    showTLB(cur);
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function showTLB(i) {
    var p = photos[i];
    lbImg.style.opacity = '0';
    setTimeout(function () { lbImg.src = '../' + p.src; lbT.textContent = p.title || ''; lbL.textContent = p.loc || ''; lbImg.style.opacity = '1'; lbImg.style.transition = 'opacity .2s'; }, 150);
  }
  function closeTLB() { lb.classList.remove('open'); document.body.style.overflow = ''; }

  document.getElementById('lbClose').addEventListener('click', closeTLB);
  lb.addEventListener('click', function (e) { if (e.target === lb) closeTLB(); });
  document.getElementById('lbPrev').addEventListener('click', function () { cur = (cur - 1 + photos.length) % photos.length; showTLB(cur); });
  document.getElementById('lbNext').addEventListener('click', function () { cur = (cur + 1) % photos.length; showTLB(cur); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')      closeTLB();
    if (e.key === 'ArrowLeft')  { cur = (cur - 1 + photos.length) % photos.length; showTLB(cur); }
    if (e.key === 'ArrowRight') { cur = (cur + 1) % photos.length; showTLB(cur); }
  });

});
