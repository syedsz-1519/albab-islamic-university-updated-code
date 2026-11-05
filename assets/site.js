/* ALBAB ISLAMIC UNIVERSITY — SITE.JS */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initHeader();
  initMobileMenu();
  initTabs();
  initFilters();
});

/* ========== PRELOADER ========== */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  
  // Show preloader for 10 seconds (10000ms)
  setTimeout(() => {
    preloader.classList.add('hide');
    // Optional: Remove from DOM after fade out completes
    setTimeout(() => {
      preloader.style.pointerEvents = 'none';
    }, 500);
  }, 10000);
}

/* ========== MOBILE MENU TOGGLE ========== */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      menuToggle.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', mainNav.classList.contains('active'));
    });
    
    // Close menu when a link is clicked
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('header')) {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/* ========== HEADER NAV ========== */
function initHeader() {
  const nav = document.querySelectorAll('nav a, .main-nav a');
  const currentPath = location.pathname.replace(/\/$/, '') || '/';
  
  nav.forEach(link => {
    const href = link.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === currentPath || (currentPath === '/' && href === '/')) {
      link.classList.add('active');
    }
  });
}

/* ========== TABS ========== */
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  
  tabButtons.forEach(btn => {
    btn.addEventListener('click', switchTab);
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const sibling = e.key === 'ArrowRight' ? btn.nextElementSibling : btn.previousElementSibling;
        if (sibling?.classList.contains('tab-btn')) {
          sibling.click();
          sibling.focus();
        }
      }
    });
  });
}

function switchTab(e) {
  const btn = e.target;
  const tabId = btn.getAttribute('data-tab');
  const container = btn.closest('.tabs-container');
  
  container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  
  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

/* ========== FILTERS ========== */
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', applyFilter);
  });
}

function applyFilter(e) {
  const btn = e.target;
  const category = btn.getAttribute('data-filter');
  const container = btn.closest('.filters');
  
  container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  
  const items = document.querySelectorAll('[data-category]');
  items.forEach(item => {
    if (category === 'all' || item.getAttribute('data-category') === category) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

/* ========== DHIKR COUNTER ========== */
function initDhikrCounter() {
  const counters = document.querySelectorAll('.dhikr-card');
  
  counters.forEach(card => {
    const key = card.getAttribute('data-dhikr');
    const stored = localStorage.getItem(`dhikr_${key}`);
    if (stored) {
      card.setAttribute('data-count', stored);
      updateDhikrDisplay(card);
    }
    
    card.addEventListener('click', () => incrementDhikr(card, key));
  });
}

function incrementDhikr(card, key) {
  let count = parseInt(card.getAttribute('data-count')) || 0;
  count++;
  card.setAttribute('data-count', count);
  
  try {
    localStorage.setItem(`dhikr_${key}`, count);
  } catch (e) {
    // localStorage not available, count stays in memory
  }
  
  updateDhikrDisplay(card);
}

function updateDhikrDisplay(card) {
  const count = card.getAttribute('data-count') || 0;
  const display = card.querySelector('.dhikr-count');
  if (display) {
    display.textContent = count;
  }
}

/* ========== HADITH SEARCH ========== */
function initHadithSearch() {
  const searchInput = document.getElementById('hadith-search');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', searchHadith);
}

function searchHadith(e) {
  const query = e.target.value.toLowerCase();
  const results = document.querySelectorAll('.hadith-item');
  
  results.forEach(item => {
    const arabic = item.querySelector('[data-arabic]')?.textContent.toLowerCase();
    const translation = item.querySelector('[data-translation]')?.textContent.toLowerCase();
    
    if (query === '' || arabic?.includes(query) || translation?.includes(query)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

/* ========== CONTACT FORM SUBMISSION ========== */
function handleContactForm(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('[name="name"]').value;
  const email = form.querySelector('[name="email"]').value;
  const phone = form.querySelector('[name="phone"]').value;
  const programme = form.querySelector('[name="programme"]')?.value || '';
  const message = form.querySelector('[name="message"]').value;
  
  // Construct mailto link
  const subject = encodeURIComponent(`Enquiry: ${programme || 'General'}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProgramme: ${programme}\n\n${message}`
  );
  
  window.location.href = `mailto:contact@albab.edu?subject=${subject}&body=${body}`;
}

/* ========== GLOBE / INTERACTIVE ELEMENTS ========== */
// Placeholders for canvas/three.js-based interactive modules
// See explore.html for implementation

/* ========== UTILS ========== */
function getQueryParam(name) {
  const params = new URLSearchParams(location.search);
  return params.get(name);
}

function setQueryParam(name, value) {
  const params = new URLSearchParams(location.search);
  params.set(name, value);
  window.history.replaceState({}, '', `?${params.toString()}`);
}
