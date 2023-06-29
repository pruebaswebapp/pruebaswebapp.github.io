
// Instalar SW PWA
/*
const CACHE_NAME = "v1_cache_panel_adm",
urlsToCache = [
    "./manifest.json",
];
*/
self.addEventListener("install", (e) => {
/*e.waitUntil(
  caches
    .open(CACHE_NAME)
    .then((cache) => {
      return cache.addAll(urlsToCache).then(() => self.skipWaiting());
    })
    .catch((err) => "fallo el registro del cache ", err)
);

*/
});

self.addEventListener("activate", (e) => {
/*const caheWitheList = [CACHE_NAME];

e.waitUntil(
  caches.keys().then((cachesNames) =>
    cachesNames.map((cacheName) => {
      if (cacheName.indexOf(cacheName) === -1) {
        return caches.delete(cacheName);
      }
    })
  )
);
*/
//alert("Hello! I am an alert box!!");
console.log("INSTALADO sin chache");


});

self.addEventListener("fetch", (e) => {
/*e.respondWith(
  caches.match(e.request).then((res) => {
    if (res) {
      return res;
    }
    return fetch(e.request);
  })
);
*/
});



/*
self.addEventListener("fetch", function(ev) {

    ev.respondWith(fetch(ev.request));
});

*/



// //////////////////////////////

console.log("Ingreso wk version 2");
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
let pathToJson = new URL(location).searchParams.get("config");
console.log(pathToJson); 
console.log(decodeURIComponent(pathToJson)); 
let firebaseConfig = JSON.parse(decodeURIComponent(pathToJson));
firebase.initializeApp(firebaseConfig); 
const messaging =  firebase.messaging();
console.log("ingreso registrando mensaje 2 en SW");

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js...] Received background message ', payload);
 // const notification = payload.data;

  //notification.titulo= "Alegra";
  //notification.mensaje= "Construye el Reino de Dios";
  //notification.imagen= "https://mariavguadalupe.github.io/Alegra512.png";

//  console.log('titulo 2', notification.title);
 // console.log('mensaje 2', notification.body);
  //console.log('imagen 2', notification.image);

  

  // Customize notification here
	/*
	self.registration.showNotification(notification.title, {
        body: notification.mensaje,
        icon: notification.image
    });   

*/
    
});



