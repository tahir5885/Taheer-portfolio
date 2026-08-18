/* ==========================================================================
   TAHEER JAHAN PORTFOLIO — CORE APPLICATION LOGIC
   Lightboxes, Video Modal, Before/After Slider, Travel Journals & Work Upload CMS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderFeaturedWork();
  renderGallery();
  renderVideos();
  renderCommercial();
  initBeforeAfterSlider();
  renderTravelJournals();
  initLightbox();
  initVideoModal();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. Navbar & Mobile Menu
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  burgerBtn?.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });
}

/* --------------------------------------------------------------------------
   2. Featured Editorial Showcase
   -------------------------------------------------------------------------- */
function renderFeaturedWork() {
  const container = document.getElementById('featuredGrid');
  if (!container) return;

  const items = [
    { title: "Across Borders: Gulf & Asian Journal", cat: "Travel Photography • 2025", img: "images/main/1.jpg", span: "span-8", loc: "India, UAE, Malaysia, Saudi, Singapore" },
    { title: "Sheikh Zayed Grand Mosque", cat: "Architectural Fine Art • 2025", img: "images/main/81.jpg", span: "span-4", loc: "Abu Dhabi, UAE" },
    { title: "Kuala Lumpur Highs & Petronas Spire", cat: "Metropolitan Cinematography • 2025", img: "images/main/38.jpg", span: "span-6", loc: "Kuala Lumpur, Malaysia" },
    { title: "Kashmir: Land of Mist & Shikaras", cat: "Visual Storytelling • 2025", img: "images/main/64.jpg", span: "span-6", loc: "Srinagar, Kashmir" }
  ];

  container.innerHTML = items.map(item => `
    <div class="featured-card ${item.span}">
      <div class="featured-img-wrap">
        <img src="${item.img}" alt="${item.title}" class="featured-img" loading="lazy">
        <div class="featured-content">
          <span class="featured-cat">${item.cat}</span>
          <h3 class="featured-title">${item.title}</h3>
          <div class="featured-meta">📍 ${item.loc}</div>
        </div>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   3. Photography Gallery & Category Filters
   -------------------------------------------------------------------------- */
let activePhotosList = [];
let currentLbIndex = 0;

function renderGallery() {
  const galleryGrid = document.getElementById('galleryGrid');
  const filterPills = document.querySelectorAll('.filter-pill');
  if (!galleryGrid) return;

  const allPhotos = [...PORTFOLIO_DATA.photos];
  activePhotosList = allPhotos;

  function displayItems(filter = 'all') {
    const filtered = filter === 'all' 
      ? allPhotos 
      : allPhotos.filter(p => p.cat.toLowerCase() === filter.toLowerCase());

    galleryGrid.innerHTML = filtered.map((photo, idx) => `
      <div class="gallery-item ${photo.cat === 'landscape' ? 'landscape' : ''}" data-index="${idx}">
        <img src="${photo.src}" alt="${photo.title}" class="gallery-img" loading="lazy">
        <span class="item-badge">${photo.cat}</span>
        <div class="gallery-overlay">
          <h4 class="item-title">${photo.title}</h4>
          <p class="item-loc">📍 ${photo.loc}</p>
        </div>
      </div>
    `).join('');

    // Attach click triggers for Lightbox
    galleryGrid.querySelectorAll('.gallery-item').forEach((el, index) => {
      el.addEventListener('click', (e) => {
        const photoIndex = allPhotos.indexOf(filtered[index]);
        openLightbox(photoIndex);
      });
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      displayItems(pill.dataset.filter);
    });
  });

  displayItems('all');
}

/* --------------------------------------------------------------------------
   4. Fullscreen Lightbox Modal (Keyboard Navigation ← → ESC)
   -------------------------------------------------------------------------- */
function initLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  const lbClose = document.getElementById('lbClose');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');

  lbClose?.addEventListener('click', closeLightbox);
  lbPrev?.addEventListener('click', () => navigateLightbox(-1));
  lbNext?.addEventListener('click', () => navigateLightbox(1));

  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(index) {
  currentLbIndex = index;
  updateLightboxContent();
  document.getElementById('lightboxModal')?.classList.add('active');
}

window.openCommercialLightbox = function(index) {
  activePhotosList = PORTFOLIO_DATA.realEstatePhotos || [];
  openLightbox(index);
};

function closeLightbox() {
  document.getElementById('lightboxModal')?.classList.remove('active');
}

function navigateLightbox(direction) {
  currentLbIndex = (currentLbIndex + direction + activePhotosList.length) % activePhotosList.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = activePhotosList[currentLbIndex];
  if (!item) return;

  document.getElementById('lbImg').src = item.src;
  document.getElementById('lbTitle').textContent = item.title || 'Untitled Story';
  document.getElementById('lbLoc').textContent = item.loc ? `📍 ${item.loc}` : '';
  document.getElementById('lbExif').textContent = item.camera || 'Sony Alpha Cinema System • RAW Capture';
}

/* --------------------------------------------------------------------------
   5. Videography Showcase & Cinematic Modal Player
   -------------------------------------------------------------------------- */
function renderVideos() {
  const videoGrid = document.getElementById('videoGrid');
  if (!videoGrid) return;

  videoGrid.classList.add('reel-grid');

  videoGrid.innerHTML = PORTFOLIO_DATA.videos.map(video => `
    <div class="video-card" onclick="openVideoModal('${video.src}', '${video.title.replace(/'/g,"\\'")}', '${video.desc.replace(/'/g,"\\'")}', '${video.gear}', '${video.aspect || '9:16'}')">
      <div class="video-thumb-wrap portrait-reel">
        <video src="${video.src}#t=0.5" class="video-thumb" preload="metadata" muted playsinline></video>
        <div class="play-btn-overlay">
          <div class="play-icon-circle">▶</div>
        </div>
        <span class="item-badge" style="position:absolute; top:0.85rem; left:0.85rem; z-index:2; margin:0; font-size:0.7rem; padding:0.2rem 0.6rem;">9:16 Vertical Reel</span>
      </div>
      <div class="video-info">
        <span class="featured-cat">${video.category} • ${video.duration}</span>
        <h4 class="video-title">${video.title}</h4>
        <p class="video-desc">${video.desc}</p>
      </div>
    </div>
  `).join('');

  // Add hover preview for video reels
  videoGrid.querySelectorAll('.video-card').forEach(card => {
    const vid = card.querySelector('video.video-thumb');
    if (vid) {
      card.addEventListener('mouseenter', () => vid.play().catch(() => {}));
      card.addEventListener('mouseleave', () => {
        vid.pause();
        vid.currentTime = 0.5;
      });
    }
  });
}

function renderCommercial() {
  const photoGrid = document.getElementById('commercialPhotoGrid');
  const videoGrid = document.getElementById('commercialVideoGrid');
  const commercialFilters = document.querySelectorAll('.commercial-filter-pill');
  
  if (photoGrid && PORTFOLIO_DATA.realEstatePhotos) {
    photoGrid.innerHTML = PORTFOLIO_DATA.realEstatePhotos.map((photo, idx) => `
      <div class="gallery-item" onclick="openCommercialLightbox(${idx})">
        <img src="${photo.src}" alt="${photo.title}" class="gallery-img" loading="lazy">
        <span class="item-badge">Commercial • ${photo.loc}</span>
        <div class="gallery-overlay">
          <h4 class="item-title">${photo.title}</h4>
          <p class="item-loc">📍 ${photo.loc}</p>
        </div>
      </div>
    `).join('');
  }
  
  if (videoGrid && PORTFOLIO_DATA.realEstateVideos) {
    function displayCommercialVideos(filter = 'all') {
      const filtered = filter === 'all'
        ? PORTFOLIO_DATA.realEstateVideos
        : PORTFOLIO_DATA.realEstateVideos.filter(v => 
            v.region.toLowerCase().includes(filter.toLowerCase()) || 
            v.category.toLowerCase().includes(filter.toLowerCase())
          );

      videoGrid.innerHTML = filtered.map(video => {
        const isReel = video.aspect === '9:16';
        const wrapClass = isReel ? 'portrait-reel' : 'landscape-film';
        const badgeLabel = isReel ? '9:16 Reel' : '16:9 Cinema';
        return `
        <div class="video-card ${isReel ? 'reel-card' : ''}" onclick="openVideoModal('${video.src}', '${video.title.replace(/'/g, "\\'")}', '${video.desc.replace(/'/g, "\\'")}', '${video.gear}', '${video.aspect}')">
          <div class="video-thumb-wrap ${wrapClass}">
            <video src="${video.src}#t=0.5" class="video-thumb" preload="metadata" muted playsinline></video>
            <div class="play-btn-overlay">
              <div class="play-icon-circle">▶</div>
            </div>
            <span class="item-badge" style="position:absolute; top:0.85rem; left:0.85rem; z-index:2; margin:0; font-size:0.7rem; padding:0.2rem 0.6rem;">${video.region} • ${badgeLabel}</span>
          </div>
          <div class="video-info">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">
              <span class="featured-cat">${video.category} • ${video.duration}</span>
            </div>
            <h4 class="video-title">${video.title}</h4>
            <p class="video-desc">${video.desc}</p>
            <div class="featured-meta" style="margin-top:0.6rem; color:var(--accent-gold); font-size:0.85rem; font-weight:500;">
              📍 ${video.location}
            </div>
          </div>
        </div>
      `;}).join('');

      // Add gentle preview-on-hover for video thumbnails
      videoGrid.querySelectorAll('.video-card').forEach(card => {
        const vid = card.querySelector('video.video-thumb');
        if (vid) {
          card.addEventListener('mouseenter', () => {
            vid.play().catch(() => {});
          });
          card.addEventListener('mouseleave', () => {
            vid.pause();
            vid.currentTime = 0.5;
          });
        }
      });
    }

    commercialFilters.forEach(pill => {
      pill.addEventListener('click', () => {
        commercialFilters.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        displayCommercialVideos(pill.dataset.filter);
      });
    });

    displayCommercialVideos('all');
  }
}

function initVideoModal() {
  const videoModal = document.getElementById('videoModal');
  const videoClose = document.getElementById('videoClose');
  videoClose?.addEventListener('click', closeVideoModal);

  videoModal?.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideoModal();
  });
}

window.openVideoModal = function(src, title, desc, gear, aspect = '16:9') {
  const videoModal = document.getElementById('videoModal');
  const modalContent = videoModal.querySelector('.video-modal-content');
  const player = document.getElementById('modalVideoPlayer');
  
  player.src = src;
  document.getElementById('videoModalTitle').textContent = title;
  document.getElementById('videoModalDesc').textContent = desc;
  document.getElementById('videoModalGear').textContent = gear ? `📷 ${gear}` : '';
  
  if (aspect === '9:16') {
    modalContent.classList.add('portrait-reel');
    modalContent.classList.remove('landscape-film');
  } else {
    modalContent.classList.add('landscape-film');
    modalContent.classList.remove('portrait-reel');
  }

  videoModal.classList.add('active');
  player.play().catch(() => {});
};

function closeVideoModal() {
  const videoModal = document.getElementById('videoModal');
  const player = document.getElementById('modalVideoPlayer');
  player.pause();
  player.src = '';
  videoModal.classList.remove('active');
}

/* --------------------------------------------------------------------------
   6. Photoshop Split-Screen Before / After Drag Slider & 4-Project Showcase
   -------------------------------------------------------------------------- */
let activePsIndex = 0;

function initBeforeAfterSlider() {
  const container = document.getElementById('baContainer');
  const afterWrap = document.getElementById('baAfterWrap');
  const afterImg = document.getElementById('baAfterImg');
  const beforeImg = document.getElementById('baBeforeImg');
  const beforeLabel = document.getElementById('baBeforeLabel');
  const afterLabel = document.getElementById('baAfterLabel');
  const divider = document.getElementById('baDivider');
  const filterBar = document.getElementById('psFilterBar');
  const activeTitle = document.getElementById('psActiveTitle');
  const activeDesc = document.getElementById('psActiveDesc');
  const activeTools = document.getElementById('psActiveTools');
  const psGrid = document.getElementById('photoshopGrid');

  if (!container || !afterWrap || !divider) return;

  const items = PORTFOLIO_DATA.photoshopItems || [];
  if (items.length === 0) return;

  // Function to load a specific project into the hero slider
  function loadPhotoshopProject(idx) {
    activePsIndex = idx;
    const project = items[idx];
    if (!project) return;

    if (beforeImg) beforeImg.src = project.beforeSrc;
    if (afterImg) afterImg.src = project.afterSrc;
    if (beforeLabel) beforeLabel.textContent = project.beforeLabel || 'RAW Capture';
    if (afterLabel) afterLabel.textContent = project.afterLabel || 'Photoshop Final';

    if (activeTitle) activeTitle.textContent = project.title;
    if (activeDesc) activeDesc.textContent = project.desc;
    if (activeTools) {
      activeTools.innerHTML = (project.tools || []).map(t => `<span class="ba-tool-pill">${t}</span>`).join('');
    }

    // Update active tab button
    if (filterBar) {
      filterBar.querySelectorAll('.ps-tab-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === idx);
      });
    }

    // Reset slider position to 50%
    afterWrap.style.width = '50%';
    divider.style.left = '50%';
    if (afterImg) afterImg.style.width = `${container.offsetWidth}px`;
  }

  // Render 4 Filter Tabs
  if (filterBar) {
    filterBar.innerHTML = items.map((item, idx) => `
      <button class="filter-pill ps-tab-btn ${idx === 0 ? 'active' : ''}" onclick="window.selectPhotoshopProject(${idx})">
        ${item.tag}
      </button>
    `).join('');
  }

  // Render 4 Showcase Cards (All 4 together)
  if (psGrid) {
    psGrid.innerHTML = items.map((item, idx) => `
      <div class="ps-card">
        <div class="ps-card-preview" onclick="window.selectPhotoshopProject(${idx}); document.getElementById('photoshop').scrollIntoView({ behavior: 'smooth' });">
          <div class="ps-split-container">
            <div class="ps-split-half left">
              <img src="${item.beforeSrc}" alt="Before Edit" loading="lazy">
              <span class="ps-mini-label before">Before</span>
            </div>
            <div class="ps-split-half right">
              <img src="${item.afterSrc}" alt="After Edit" loading="lazy">
              <span class="ps-mini-label after">After</span>
            </div>
          </div>
        </div>
        <div class="ps-card-body">
          <span class="ps-card-badge">${item.type}</span>
          <h4 class="ps-card-title">${item.title}</h4>
          <p class="ps-card-desc">${item.desc}</p>
          <div class="ps-card-tools">
            ${(item.tools || []).map(t => `<span class="ps-card-tool-tag">${t}</span>`).join('')}
          </div>
          <button class="ps-card-btn" onclick="window.selectPhotoshopProject(${idx}); document.getElementById('photoshop').scrollIntoView({ behavior: 'smooth' });">
            ↔ Compare in Interactive Slider
          </button>
        </div>
      </div>
    `).join('');
  }

  window.selectPhotoshopProject = function(idx) {
    loadPhotoshopProject(idx);
  };

  // Drag interaction logic
  let isDragging = false;

  const setPos = (x) => {
    const rect = container.getBoundingClientRect();
    let posX = x - rect.left;
    if (posX < 0) posX = 0;
    if (posX > rect.width) posX = rect.width;

    const percentage = (posX / rect.width) * 100;
    afterWrap.style.width = `${percentage}%`;
    divider.style.left = `${percentage}%`;
    if (afterImg) afterImg.style.width = `${rect.width}px`;
  };

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    setPos(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    setPos(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    setPos(e.touches[0].clientX);
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    setPos(e.touches[0].clientX);
  });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  window.addEventListener('resize', () => {
    if (afterImg) afterImg.style.width = `${container.offsetWidth}px`;
  });

  // Initialize with the first project
  loadPhotoshopProject(0);
}

/* --------------------------------------------------------------------------
   7. Travel Visual Journals by Country
   -------------------------------------------------------------------------- */
function renderTravelJournals() {
  const travelGrid = document.getElementById('travelGrid');
  if (!travelGrid) return;

  travelGrid.innerHTML = PORTFOLIO_DATA.travelCountries.map(c => `
    <div class="country-card" onclick="showToast('Opening ${c.name} visual travel journal...')">
      <img src="${c.cover}" alt="${c.name}" class="country-cover" loading="lazy">
      <div class="country-overlay">
        <span class="country-flag">${c.flag}</span>
        <h3 class="country-name">${c.name}</h3>
        <p class="country-tagline">${c.tagline}</p>
        <div class="country-footer">
          <span>📷 ${c.count} Photos</span>
          <span>Explore Journal →</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   8. Interactive Contact Form with Budget & Project Type Selection
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const typePills = document.querySelectorAll('.type-pill');
  let selectedType = 'Photography';

  typePills.forEach(pill => {
    pill.addEventListener('click', () => {
      typePills.forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      selectedType = pill.dataset.type;
    });
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name  = (document.getElementById('senderName')?.value || '').trim();
    const email = (document.getElementById('senderEmail')?.value || '').trim();
    const details = (document.getElementById('projectDetails')?.value || '').trim();

    // Build a prefilled mailto URL — works on GitHub Pages / any static host
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${selectedType} — ${name}`);
    const body = encodeURIComponent(
      `Hi Taheer,\n\nI found your portfolio and would like to discuss a ${selectedType} project.\n\n` +
      `Name: ${name}\nEmail: ${email}\n\nProject Details:\n${details}\n\nLooking forward to hearing from you!`
    );
    const mailtoLink = `mailto:thr5885@email.com?subject=${subject}&body=${body}`;

    // Open the email client
    window.location.href = mailtoLink;

    showToast(`Opening email — sending ${selectedType} inquiry to Taheer...`);
    form.reset();
  });
}

/* --------------------------------------------------------------------------
   UTILITY: Toast Notification
   -------------------------------------------------------------------------- */
window.showToast = function(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3200);
};
