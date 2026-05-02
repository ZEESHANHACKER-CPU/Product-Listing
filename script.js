'use strict';

/* ── PRODUCT DATA ────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1, title: 'ProSound X1', owner: 'SoundCraft Studios', category: 'audio',
    price: 249.99, rating: 4.8, reviews: 320, stock: 15,
    description: 'Premium wireless noise-cancelling headphones with 40h battery life, spatial audio, and custom EQ profiles for an immersive listening experience.',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    badge: 'Best Seller', isNew: false,
  },
  {
    id: 2, title: 'Apex Watch Pro', owner: 'WristTech Labs', category: 'wearables',
    price: 399.00, rating: 4.6, reviews: 215, stock: 8,
    description: 'AMOLED smartwatch with health monitoring, GPS, always-on display and 7-day battery. IPX8 water-resistant rated.',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    badge: 'New', isNew: true,
  },
  {
    id: 3, title: 'UrbanVault Bag', owner: 'LeatherCraft Co.', category: 'accessories',
    price: 149.99, rating: 4.9, reviews: 540, stock: 22,
    description: 'Full-grain leather laptop bag with padded 15" compartment, RFID-blocking pocket, and water-resistant coating.',
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    badge: null, isNew: false,
  },
  {
    id: 4, title: 'MechStrike TKL', owner: 'KeyForge Industries', category: 'gaming',
    price: 179.00, rating: 4.7, reviews: 185, stock: 30,
    description: 'Tenkeyless mechanical keyboard with tactile switches, per-key RGB, aircraft-grade aluminium body and USB-C passthrough.',
    img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80',
    badge: 'Hot', isNew: false,
  },
  {
    id: 5, title: 'OptiCore 85mm', owner: 'LensCraft Vision', category: 'cameras',
    price: 499.00, rating: 4.5, reviews: 98, stock: 5,
    description: 'Professional portrait lens with f/1.4 aperture, ED glass elements and nano-coating for exceptional low-light performance.',
    img: 'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7d3?w=600&q=80',
    badge: 'Limited', isNew: false,
  },
  {
    id: 6, title: 'BassWave Mini', owner: 'SoundCraft Studios', category: 'audio',
    price: 89.99, rating: 4.4, reviews: 410, stock: 50,
    description: 'Compact 360° bluetooth speaker with 20h playtime, IPX7 waterproof rating and stereo pair mode.',
    img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80',
    badge: null, isNew: false,
  },
  {
    id: 7, title: 'FitBand Ultra', owner: 'VitaWear', category: 'wearables',
    price: 129.00, rating: 4.3, reviews: 670, stock: 40,
    description: 'Advanced fitness tracker with blood-oxygen monitoring, ECG, stress tracking and 14-day battery life.',
    img: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&q=80',
    badge: null, isNew: true,
  },
  {
    id: 8, title: 'SnapShot A7', owner: 'PixelCam Inc.', category: 'cameras',
    price: 329.00, rating: 4.6, reviews: 123, stock: 12,
    description: 'Mirrorless camera with 24MP sensor, in-body stabilisation, 4K 60fps video and dual SD card slots.',
    img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80',
    badge: 'Sale', isNew: false,
  },
  {
    id: 9, title: 'NanoHub 7-in-1', owner: 'TechLink Gear', category: 'accessories',
    price: 69.99, rating: 4.8, reviews: 882, stock: 65,
    description: '7-in-1 USB-C hub with 4K HDMI, 100W PD pass-through, SD slot, Gigabit Ethernet and three USB-A ports.',
    img: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&q=80',
    badge: 'Best Seller', isNew: false,
  },
  {
    id: 10, title: 'CloudPad Pro', owner: 'DrawTech Studio', category: 'accessories',
    price: 219.00, rating: 4.7, reviews: 254, stock: 18,
    description: 'Professional drawing tablet with 8192 pressure levels, tilt recognition, express keys and 13" active area.',
    img: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=600&q=80',
    badge: 'New', isNew: true,
  },
  {
    id: 11, title: 'GhostMouse X', owner: 'KeyForge Industries', category: 'gaming',
    price: 99.00, rating: 4.5, reviews: 365, stock: 25,
    description: 'Ultra-light 58g gaming mouse with 25K DPI optical sensor, 80h wireless battery and magnetic charging dock.',
    img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80',
    badge: null, isNew: false,
  },
  {
    id: 12, title: 'AuraGlow Lamp', owner: 'LumiDesign', category: 'accessories',
    price: 59.99, rating: 4.6, reviews: 198, stock: 35,
    description: 'Smart RGB ambient lamp with voice control, 16M colours, scene modes and OLED touch panel.',
    img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80',
    badge: null, isNew: true,
  },
];

/* ── STATE ───────────────────────────────────────── */
const state = {
  products: [...PRODUCTS],
  filtered: [...PRODUCTS],
  currentPage: 0,
  perPage: 6,
  cart: [],
  activeCategory: 'all',
  maxPrice: 500,
  sortBy: 'default',
  searchQuery: '',
  viewMode: 'grid',
};

/* ── DOM REFS ─────────────────────────────────────── */
const grid         = document.getElementById('product-grid');
const navCurrent   = document.getElementById('nav-current');
const navTotal     = document.getElementById('nav-total');
const prevBtn      = document.getElementById('prev-btn');
const nextBtn      = document.getElementById('next-btn');
const resultCount  = document.getElementById('result-count');
const emptyState   = document.getElementById('empty-state');
const priceSlider  = document.getElementById('price-slider');
const priceDisplay = document.getElementById('price-display');
const sortSelect   = document.getElementById('sort-select');
const searchInput  = document.getElementById('search-input');
const toast        = document.getElementById('toast');
const cartBadge    = document.getElementById('cart-badge');
const modalOverlay = document.getElementById('modal-overlay');
const modalBody    = document.getElementById('modal-body');

/* ── RENDER CARDS ─────────────────────────────────── */
function renderCards() {
  const start = state.currentPage * state.perPage;
  const page  = state.filtered.slice(start, start + state.perPage);

  grid.innerHTML = '';

  if (state.filtered.length === 0) {
    emptyState.classList.remove('hidden');
    document.getElementById('navigator').style.opacity = '0.3';
    document.getElementById('navigator').style.pointerEvents = 'none';
    return;
  }

  emptyState.classList.add('hidden');
  document.getElementById('navigator').style.opacity = '';
  document.getElementById('navigator').style.pointerEvents = '';

  page.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('role', 'listitem');
    card.style.animationDelay = `${i * 0.07}s`;

    const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');

    card.innerHTML = `
      <div class="card-img-wrap">
        <img class="card-img" src="${p.img}" alt="${p.title}" loading="lazy" />
        <span class="card-category-badge">${p.category}</span>
        <div class="card-actions">
          <button class="action-btn quick-view-btn" data-id="${p.id}" title="Quick View">👁</button>
          <button class="action-btn wishlist-btn" data-id="${p.id}" title="Wishlist">♡</button>
        </div>
        ${p.badge ? `<span class="card-badge-pill badge-${p.badge.toLowerCase().replace(' ','')}">${p.badge}</span>` : ''}
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <p class="card-owner">by <span>${p.owner}</span></p>
        <div class="card-footer">
          <span class="card-price">$${p.price.toFixed(2)}</span>
          <span class="card-rating"><span class="star">${stars}</span> ${p.rating} (${p.reviews})</span>
        </div>
        <button class="card-buy-btn" data-id="${p.id}" id="buy-btn-${p.id}">Add to Cart</button>
      </div>
    `;
    grid.appendChild(card);
  });

  // Apply list mode
  grid.className = `product-grid${state.viewMode === 'list' ? ' list-mode' : ''}`;

  updateNav();
}

/* ── NAVIGATOR ───────────────────────────────────── */
function updateNav() {
  const total = Math.ceil(state.filtered.length / state.perPage);
  navCurrent.textContent = state.currentPage + 1;
  navTotal.textContent   = total || 1;
  prevBtn.disabled = state.currentPage === 0;
  nextBtn.disabled = state.currentPage >= total - 1;
}

prevBtn.addEventListener('click', () => {
  if (state.currentPage > 0) { state.currentPage--; renderCards(); scrollToGrid(); }
});
nextBtn.addEventListener('click', () => {
  const total = Math.ceil(state.filtered.length / state.perPage);
  if (state.currentPage < total - 1) { state.currentPage++; renderCards(); scrollToGrid(); }
});

function scrollToGrid() {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── FILTER & SORT ───────────────────────────────── */
function applyFilters() {
  let list = PRODUCTS.filter(p => {
    const catOk   = state.activeCategory === 'all' || p.category === state.activeCategory;
    const priceOk = p.price <= state.maxPrice;
    const searchOk = !state.searchQuery ||
      p.title.toLowerCase().includes(state.searchQuery) ||
      p.owner.toLowerCase().includes(state.searchQuery) ||
      p.category.toLowerCase().includes(state.searchQuery);
    return catOk && priceOk && searchOk;
  });

  // Sort
  if (state.sortBy === 'price-asc')  list.sort((a,b) => a.price - b.price);
  if (state.sortBy === 'price-desc') list.sort((a,b) => b.price - a.price);
  if (state.sortBy === 'rating')     list.sort((a,b) => b.rating - a.rating);
  if (state.sortBy === 'newest')     list = list.filter(p => p.isNew).concat(list.filter(p => !p.isNew));

  state.filtered    = list;
  state.currentPage = 0;
  resultCount.textContent = `${list.length} product${list.length !== 1 ? 's' : ''}`;
  renderCards();
}

// Category chips
document.getElementById('category-chips').addEventListener('click', e => {
  const btn = e.target.closest('.chip');
  if (!btn) return;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  state.activeCategory = btn.dataset.filter;
  applyFilters();
});

// Price slider
priceSlider.addEventListener('input', () => {
  state.maxPrice = +priceSlider.value;
  priceDisplay.textContent = state.maxPrice >= 500 ? 'Any Price' : `Up to $${state.maxPrice}`;
  applyFilters();
});

// Sort
sortSelect.addEventListener('change', () => { state.sortBy = sortSelect.value; applyFilters(); });

// Clear filters
document.getElementById('clear-filters-btn').addEventListener('click', resetFilters);
document.getElementById('reset-btn').addEventListener('click', resetFilters);

function resetFilters() {
  state.activeCategory = 'all';
  state.maxPrice = 500;
  state.sortBy = 'default';
  state.searchQuery = '';
  priceSlider.value = 500;
  priceDisplay.textContent = 'Up to $500';
  sortSelect.value = 'default';
  searchInput.value = '';
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  document.getElementById('chip-all').classList.add('active');
  applyFilters();
}

/* ── SEARCH ──────────────────────────────────────── */
document.getElementById('search-toggle-btn').addEventListener('click', () => {
  document.getElementById('search-overlay').classList.toggle('open');
  if (document.getElementById('search-overlay').classList.contains('open')) searchInput.focus();
});
document.getElementById('search-close-btn').addEventListener('click', () => {
  document.getElementById('search-overlay').classList.remove('open');
});
let searchTimer;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.searchQuery = searchInput.value.toLowerCase().trim();
    applyFilters();
  }, 250);
});

/* ── VIEW TOGGLE ─────────────────────────────────── */
document.getElementById('grid-view-btn').addEventListener('click', () => {
  state.viewMode = 'grid';
  document.getElementById('grid-view-btn').classList.add('active');
  document.getElementById('list-view-btn').classList.remove('active');
  renderCards();
});
document.getElementById('list-view-btn').addEventListener('click', () => {
  state.viewMode = 'list';
  document.getElementById('list-view-btn').classList.add('active');
  document.getElementById('grid-view-btn').classList.remove('active');
  renderCards();
});

/* ── CART ────────────────────────────────────────── */
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const existing = state.cart.find(x => x.id === id);
  if (existing) existing.qty++;
  else state.cart.push({ ...p, qty: 1 });
  cartBadge.textContent = state.cart.reduce((s, x) => s + x.qty, 0);
  showToast(`🛒 "${p.title}" added to cart!`);
}

/* ── DELEGATED CLICK HANDLERS ─────────────────────── */
grid.addEventListener('click', e => {
  const buyBtn  = e.target.closest('.card-buy-btn');
  const viewBtn = e.target.closest('.quick-view-btn');
  const wishBtn = e.target.closest('.wishlist-btn');

  if (buyBtn)  { addToCart(+buyBtn.dataset.id); return; }
  if (viewBtn) { openModal(+viewBtn.dataset.id); return; }
  if (wishBtn) {
    wishBtn.textContent = wishBtn.textContent === '♡' ? '♥' : '♡';
    wishBtn.style.color = wishBtn.textContent === '♥' ? 'var(--accent2)' : '';
    showToast(wishBtn.textContent === '♥' ? '❤️ Added to wishlist' : '💔 Removed from wishlist');
  }
});

// Cart button (header)
document.getElementById('cart-btn').addEventListener('click', () => {
  showToast(`🛒 ${state.cart.reduce((s,x)=>s+x.qty,0)} item(s) in cart  ·  Total: $${state.cart.reduce((s,x)=>s+x.price*x.qty,0).toFixed(2)}`);
});

// Spotlight add to cart
document.getElementById('spotlight-cart-btn').addEventListener('click', () => addToCart(1));

/* ── MODAL ───────────────────────────────────────── */
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
  modalBody.innerHTML = `
    <img class="modal-img" src="${p.img}" alt="${p.title}" />
    <span class="modal-category">${p.category}</span>
    <h2 class="modal-title" id="modal-title">${p.title}</h2>
    <p class="modal-owner">by ${p.owner}</p>
    <p class="modal-desc">${p.description}</p>
    <div class="modal-meta">
      <div class="modal-meta-item">
        <span class="modal-meta-label">Rating</span>
        <span class="modal-meta-value"><span class="star">${stars}</span> ${p.rating}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Reviews</span>
        <span class="modal-meta-value">${p.reviews}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">In Stock</span>
        <span class="modal-meta-value">${p.stock} units</span>
      </div>
    </div>
    <p class="modal-price">$${p.price.toFixed(2)}</p>
    <div class="modal-actions">
      <button class="btn-primary" id="modal-cart-btn" data-id="${p.id}">Add to Cart</button>
      <button class="btn-ghost" id="modal-close-action">Close</button>
    </div>
  `;
  modalOverlay.classList.remove('hidden');
  document.getElementById('modal-cart-btn').addEventListener('click', () => { addToCart(p.id); closeModal(); });
  document.getElementById('modal-close-action').addEventListener('click', closeModal);
}

function closeModal() { modalOverlay.classList.add('hidden'); }
document.getElementById('modal-close-btn').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ── TOAST ───────────────────────────────────────── */
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ── STICKY HEADER ───────────────────────────────── */
window.addEventListener('scroll', () => {
  document.getElementById('site-header').style.boxShadow =
    window.scrollY > 20 ? '0 4px 30px rgba(0,0,0,.5)' : '';
});

/* ── COUNT-UP ANIMATION ──────────────────────────── */
function countUp(el, target, duration = 1600) {
  let start = 0; const step = target / (duration / 16);
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start).toLocaleString();
    if (start >= target) clearInterval(timer);
  }, 16);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat-num').forEach(el => countUp(el, +el.dataset.target));
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const statsBar = document.querySelector('.stats-bar');
if (statsBar) statsObserver.observe(statsBar);

/* ── SMOOTH SCROLL FOR ANCHOR LINKS ─────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

/* ── INIT ────────────────────────────────────────── */
applyFilters();
