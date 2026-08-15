const CACHE_NAME = "makkah-laundry-v1";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json"
];


// Install
self.addEventListener("install", function (event) {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(function (cache) {

                return cache.addAll(FILES_TO_CACHE);

            })

    );

    self.skipWaiting();

});


// Activate
self.addEventListener("activate", function (event) {

    event.waitUntil(

        caches.keys().then(function (cacheNames) {

            return Promise.all(

                cacheNames.map(function (cacheName) {

                    if (cacheName !== CACHE_NAME) {

                        return caches.delete(cacheName);

                    }

                })

            );

        })

    );

    self.clients.claim();

});


// Fetch
self.addEventListener("fetch", function (event) {

    if (event.request.method !== "GET") {
        return;
    }

    event.respondWith(

        caches.match(event.request)
            .then(function (cachedResponse) {

                if (cachedResponse) {

                    return cachedResponse;

                }

                return fetch(event.request)
                    .then(function (networkResponse) {

                        return networkResponse;

                    })
                    .catch(function () {

                        return caches.match("./index.html");

                    });

            })

    );

});
