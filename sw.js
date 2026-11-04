self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.use?.() || Promise.resolve()
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
