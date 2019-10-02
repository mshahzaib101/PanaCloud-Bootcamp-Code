
const cacheForDynamicContent = 'cache-v2';
const cacheForStaticContent = 'cache-v1';
const filesToCache = [
    '/index.html',
    '/index.js',
    '/style.css'
  ];
// installing service worker
self.addEventListener('install', function(event) {
    console.log('serviceWorker installing');
    event.waitUntil(
      caches.open(cacheForStaticContent).then(function(cache) {
        return cache.addAll(filesToCache);
      })
    );
  });
// activating service worker
  self.addEventListener('activate', function(e) {
    console.log('ServiceWorker Activating');
    e.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (key !== cacheForStaticContent && key !== cacheForDynamicContent) {
            console.log('ServiceWorker Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
    );
    return self.clients.claim();
  });
// fetching requests
  self.addEventListener('fetch', function(e) {
    console.log('ServiceWorker Fetch running', e.request.url);
    if(e.request.url.startsWith('https://api.github.com/users/zeeshanhanif/followers')) {
        caches.open(cacheForDynamicContent).then(function(cache) {
          return fetch(e.request).then(function(response) {
            console.log('storing data in cache')
            cache.put(e.request, response.clone());
            console.log('checking')
            console.log(response.clone())
            console.log(e.request)
            return response;

          })
        }
        )
    }
    else{
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );}

  });

  