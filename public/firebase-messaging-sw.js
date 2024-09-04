// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker
// "Default" Firebase configuration (prevents errors)
const defaultConfig = {
  apiKey: true,
  projectId: true,
  messagingSenderId: true,
  appId: true,
};

const firebaseConfig = {
    apiKey: "AIzaSyAz3hn-d6LlvakJurc9AwheXpDN0Blpuac",
    authDomain: "myproject-cbd1a.firebaseapp.com",
    projectId: "myproject-cbd1a",
    storageBucket: "myproject-cbd1a.appspot.com",
    messagingSenderId: "923660796067",
    appId: "1:923660796067:web:17fde8337b85b6bb2b7f16",
    measurementId: "G-5W9XJTVFMN"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});