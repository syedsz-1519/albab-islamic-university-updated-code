// ========== ALBAB ISLAMIC UNIVERSITY SERVICE WORKER ==========
// Production-Ready PWA with Cache-First-with-Network-Fallback Strategy

const CACHE_VERSION = 'albab-v1.0.0';
const CACHE_STATIC = `${CACHE_VERSION}-static`;
const CACHE_DYNAMIC = `${CACHE_VERSION}-dynamic`;
const CACHE_IMAGES = `${CACHE_VERSION}-images`;

// Files to cache on installation (critical assets)
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/about.html',
  '/programmes.html',
  '/hadith.html',
  '/explore.html',
  '/founder.html',
  '/contact.html',
  '/404.html',
  '/manifest.json',
  '/assets/style.css',
  '/assets/site.js',
  '/assets/data.js',
  '/assets/hadith-data.js',
  '/assets/labs-data.js',
  '/assets/scroll-spy.js',
  '/images/logo.png',
  '/images/favicon-32x32.png',
  '/images/favicon-16x16.png',
  '/images/apple-touch-icon-180x180.png'
];

// Network timeout (milliseconds)
const NETWORK_TIMEOUT = 5000;

// ========== SERVICE WORKER INSTALL EVENT ==========
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker installing...');
  
  event.waitUntil(
    caches.open(CACHE_STATIC)
      .then((cache) => {
        console.log('📦 Caching static assets:', STATIC_ASSETS.length, 'files');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('✓ Static cache complete');
        return self.skipWaiting(); // Activate immediately
      })
      .catch((error) => {
        console.error('✗ Cache installation failed:', error);
      })
  );
});

// ========== SERVICE WORKER ACTIVATE EVENT ==========
self.addEventListener('activate', (event) => {
  console.log('🚀 Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              // Delete old cache versions
              return cacheName !== CACHE_STATIC && 
                     cacheName !== CACHE_DYNAMIC && 
                     cacheName !== CACHE_IMAGES;
            })
            .map((cacheName) => {
              console.log('🗑️ Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('✓ Cache cleanup complete');
        return self.clients.claim(); // Take control of all clients
      })
  );
});

// ========== SERVICE WORKER FETCH EVENT ==========
// Cache-First-with-Network-Fallback Strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests (POST, PUT, DELETE, etc.)
  if (request.method !== 'GET') {
    return;
  }

  // Skip external domain requests (except fonts.googleapis.com, fonts.gstatic.com)
  if (url.origin !== self.location.origin &&
      !url.origin.includes('fonts.googleapis.com') &&
      !url.origin.includes('fonts.gstatic.com')) {
    return;
  }

  // ========== STRATEGY: IMAGES ==========
  if (request.headers.get('accept')?.includes('image')) {
    event.respondWith(
      caches.open(CACHE_IMAGES)
        .then((cache) => {
          return cache.match(request)
            .then((response) => {
              if (response) {
                // Update cache in background
                fetch(request)
                  .then((freshResponse) => {
                    if (freshResponse && freshResponse.status === 200) {
                      cache.put(request, freshResponse);
                    }
                  })
                  .catch(() => {
                    // Network failed, ignore
                  });
                return response;
              }
              // Image not in cache, fetch from network
              return fetch(request)
                .then((response) => {
                  if (response && response.status === 200) {
                    cache.put(request, response.clone());
                  }
                  return response;
                });
            });
        })
        .catch(() => {
          // Return placeholder or offline image if available
          return caches.match('/images/offline-placeholder.png')
            .then((response) => response || new Response('Image not available offline'));
        })
    );
    return;
  }

  // ========== STRATEGY: FONTS & EXTERNAL RESOURCES ==========
  if (url.origin.includes('fonts.googleapis.com') || 
      url.origin.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.open(CACHE_STATIC)
        .then((cache) => {
          return cache.match(request)
            .then((response) => {
              return response || fetch(request)
                .then((response) => {
                  if (response && response.status === 200) {
                    cache.put(request, response.clone());
                  }
                  return response;
                });
            });
        })
        .catch(() => {
          return new Response('Font resource unavailable offline');
        })
    );
    return;
  }

  // ========== STRATEGY: HTML PAGES (Network-First with Cache Fallback) ==========
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetchWithTimeout(request, NETWORK_TIMEOUT)
        .then((response) => {
          if (response && response.status === 200) {
            caches.open(CACHE_DYNAMIC)
              .then((cache) => {
                cache.put(request, response.clone());
              });
          }
          return response;
        })
        .catch(() => {
          // Network failed, try cache
          return caches.match(request)
            .then((response) => {
              return response || caches.match('/404.html');
            });
        })
    );
    return;
  }

  // ========== STRATEGY: ASSETS (CSS, JS) - Cache-First ==========
  if (request.url.includes('.css') || request.url.includes('.js')) {
    event.respondWith(
      caches.open(CACHE_STATIC)
        .then((cache) => {
          return cache.match(request)
            .then((response) => {
              if (response) {
                return response;
              }
              // Not in cache, fetch from network
              return fetch(request)
                .then((response) => {
                  if (response && response.status === 200) {
                    cache.put(request, response.clone());
                  }
                  return response;
                });
            });
        })
        .catch(() => {
          return new Response('Asset not available offline');
        })
    );
    return;
  }

  // ========== DEFAULT STRATEGY: Cache-First ==========
  event.respondWith(
    caches.match(request)
      .then((response) => {
        return response || fetchWithTimeout(request, NETWORK_TIMEOUT)
          .then((response) => {
            if (response && response.status === 200 && response.type !== 'opaque') {
              caches.open(CACHE_DYNAMIC)
                .then((cache) => {
                  cache.put(request, response.clone());
                });
            }
            return response;
          });
      })
      .catch(() => {
        return caches.match('/404.html')
          .then((response) => response || new Response('Offline - Page not available'));
      })
  );
});

// ========== UTILITY FUNCTION: FETCH WITH TIMEOUT ==========
function fetchWithTimeout(request, timeout) {
  return Promise.race([
    fetch(request),
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Network timeout')), timeout)
    )
  ]);
}

// ========== MESSAGE EVENT: CACHE UPDATES ==========
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      })
      .then(() => {
        console.log('✓ All caches cleared');
        event.ports[0].postMessage({ success: true });
      });
  }
});

// ========== PERIODIC BACKGROUND SYNC (Optional) ==========
// Uncomment to enable periodic cache updates
/*
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'update-cache') {
    event.waitUntil(
      fetch('/manifest.json')
        .then(() => {
          console.log('✓ Cache updated in background');
        })
        .catch((error) => {
          console.warn('✗ Background update failed:', error);
        })
    );
  }
});
*/

console.log('✓ Service Worker loaded successfully');
