const dynamicData = 'oldDynamic-cache-01'
const staticData = 'oldstatic-cache-01';
var filesToCache = [
  '/index.js',
  '/index.html',
  '/',
  '/style.css',
  '/style1.css'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(staticData).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
    //   console.log(cache);
      return cache.addAll(filesToCache);
    //   console.log(cache);
    })
  );

});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
            console.log(key)
          if (key !== staticData && key !== dynamicData) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
    );
    return self.clients.claim();
  });


  self.addEventListener('fetch', function(e) {
    // Do something interesting with the fetch here
    console.log('[ServiceWorker] Fetch', e.request.url);
    if(e.request.url.indexOf('https://api.github.com/users/zeeshanhanif/followers') > -1) {
        console.log('updating data in cache');
        e.respondWith(
            caches.open(dynamicData).then(function(cache) {
              return fetch(e.request).then(function(response){
                cache.put(e.request.url, response.clone());
                return response;
              });
            })
          );
    }
    else{
        e.respondWith(
            caches.match(e.request).then(function(response) {
              return response || fetch(e.request);
            })
          );
    }
    
  });