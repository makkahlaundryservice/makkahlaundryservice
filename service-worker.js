const CACHE_NAME = "makkah-laundry-v1";

const urlsToCache = [
  "/makkahlaundryservice/",
  "/makkahlaundryservice/index.html",
  "/makkahlaundryservice/style.css",
  "/makkahlaundryservice/images/logo.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
