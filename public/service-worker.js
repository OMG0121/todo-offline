// // public/service-worker.js

// self.addEventListener('install', (event) => {
//     event.waitUntil(
//       caches.open('offline-todo-cache-v1').then((cache) => {
//         return cache.addAll([
//           '/',
//           '/index.html',
//           '/static/js/bundle.js',
//         ]);
//       })
//     );
//   });
  
//   self.addEventListener('fetch', (event) => {
//     event.respondWith(
//       caches.match(event.request)
//         .then((response) => {
//           return response || fetch(event.request);
//         })
//     );
//   });
  