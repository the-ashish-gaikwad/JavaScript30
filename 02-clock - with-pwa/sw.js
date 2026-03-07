const CACHE_NAME = 'v1_cache';
const ASSETS_TO_CACHE = ['/', '/index.html', '/styles.css', '/app.js'];

// Install event: Caches the initial assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

// Fetch event: Serves files from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
