var appShellFiles = [
    '/Bakery-new/ajax-mail.js',
    '/Bakery-new/app.js',
    '/Bakery-new/bootstrap.min.js',
    '/Bakery-new/jquery.nicescroll.min.js',
    '/Bakery-new/main.js',
    '/Bakery-new/owl.carousel.min.js',
    '/Bakery-new/sparallax.min.js',
    '/Bakery-new/1900x1000.png',
    '/Bakery-new/favicon-16x16.png',
    '/Bakery-new/favicon-32x32.png',
    '/Bakery-new/index.html',
    '/Bakery-new/licence.txt',
    '/Bakery-new/manifest.json',
    '/Bakery-new/img/address/1900x1000.png',
    '/Bakery-new/img/logo/cemrebakerylogo.png',
    '/Bakery-new/img/logo/cemrebakerytextlogo.png',
    '/Bakery-new/img/logo/cemrebakerytextlogolight.png',
    '/Bakery-new/img/new/1170.268.png',
    '/Bakery-new/img/new/1900x1000.png',
    '/Bakery-new/img/new/icon.png',
    '/Bakery-new/img/new/product.png',
    '/Bakery-new/img/new/productnew.png',
    '/Bakery-new/img/new/Rectangle.png',
    '/Bakery-new/sw.js',
    


    
];

self.addEventListener('install', event => {

    const endInstall = caches.open('box').then(cache => {
        return cache.addAll(appShellFiles);
    });

    event.waitUntil(endInstall);

    self.skipWaiting();
});

self.addEventListener('fetch', e => {

    const respuesta = caches.open('box').then(cache => {

        fetch(e.request).then(newsRes =>
            cache.put(e.request, newsRes));

        return cache.match(e.request);

    });

    e.respondWith(respuesta);
});