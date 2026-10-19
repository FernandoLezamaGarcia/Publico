const CACHE_NAME = 'twittor-v1';
const APP_SHELL = [
    './',
    './index.html',
    './css/',
    './js/app.js',
    './img/favicon.ico',
    './manifest.json',
    './img/avatars/spiderman.jpg',
    './img/avatars/ironman.jpg',
    './img/avatars/hulk.jpg'
];

self.addEventListener('install', (e) => {
    const cache = caches.open(CACHE_NAME).then((c) => c.addAll(APP_SHELL));
    e.waitUntil(cache);
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    const activate = caches.keys().then((keys) => {
        return Promise.all(keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key)));
    });
    e.waitUntil(activate);
    self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    // Se requiere que la app funcine sin conexion , pero que tenga la capacidad de que si algo no esta en cache lo pueda consultar a la red 
    e.respondWith(respuesta);
});
