console.log("Ingreso wk version 2");
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
let pathToJson = new URL(location).searchParams.get("config");
console.log(pathToJson); 
console.log(decodeURIComponent(pathToJson)); 
let firebaseConfig = JSON.parse(decodeURIComponent(pathToJson));
firebase.initializeApp(firebaseConfig); 
const messaging =  firebase.messaging();
console.log("ingreso registrando mensaje 2");

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js...] Received background message ', payload);
  const notification = payload.data;
  console.log('titulo 2', notification.titulo);
  console.log('mensaje 2', notification.mensaje);
  console.log('imagen 2', notification.imagen);
  // Customize notification here
	self.registration.showNotification(notification.titulo, {
        body: notification.mensaje,
        icon: notification.imagen
    });      
});

