/* STEP 5 SETUP AND INSTALL OF SERVICE WORKER


// offline page for 
const offlinePage = '/offline.html';
//cache names, this example shows how you can have 2 caches
var dataCacheName = 'mycache';
var cacheName = 'mycache';
//list of files to add to the cache
var filesToCache = [
  './index.html',
  './offline.html',
 
];
//install event, succeeds if the service worker successfully
//performs all install steps, in this case only caching files
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
      //open the cache
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      //add all of the files to the cache
      return cache.addAll(filesToCache);
    })
  );
});


*/


/* Step 6
// activate the service worker
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
      //when activated it checks the keys for the caches
    caches.keys().then(function(keyList) {
        // gets all of the keys from the cache
      return Promise.all(keyList.map(function(key) {
          //checks to see if the caches changed
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          //delete the old cache, also you could just remember to change cache name and put the old one here
          return caches.delete(key);
        }
      }));
    })
  );
// lets the service worker take over after the first page load, meaning start from cache first for better speed
  return self.clients.claim();
});

*/ 


/*  STEP 7 FETCH REQUEST
// intercept and handle requests
self.addEventListener('fetch', (event) => {
    //listening for GET's
  if (event.request.method === 'GET') {
      //checking to see if there something in cash that matches the request
    event.respondWith(
      caches.match(event.request)
      .then((cached) => {
          // check to see if it was networked instead probably because there was not a connection
        var networked = fetch(event.request)
          .then((response) => {
              //copy the existing cache
            let cacheCopy = response.clone()
            caches.open(cacheName)
            //put in the requested page info into the cache
              .then(cache => cache.put(event.request, cacheCopy))
            return response;
          })
          // if we get through without finding it in cache or having it offline, we show the offline page
          .catch(() => caches.match(offlinePage));
          //return either the cached page or the networked page
        return cached || networked;
      })
    )
  }
  return;
});
*/
