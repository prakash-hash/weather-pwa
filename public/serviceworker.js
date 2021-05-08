const CACHE_NAME = "version-1";
const urlsTocache = ["index.html","offline.html"];

const self = this;

//install sw
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened Cache');

            return cache.addAll(urlsTocache);
        })
    )
});

//Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(() => caches.match('offline.html'))
            })
    )
});


//Activate the sw
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            cacheNames.map((cacheName) => {
               if(!cacheWhitelist.includes(cacheName)){
                   return caches.delete(cacheName)
               } 
            })
        })
    )
});