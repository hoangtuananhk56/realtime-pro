import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAz3hn-d6LlvakJurc9AwheXpDN0Blpuac",
  authDomain: "myproject-cbd1a.firebaseapp.com",
  projectId: "myproject-cbd1a",
  storageBucket: "myproject-cbd1a.appspot.com",
  messagingSenderId: "923660796067",
  appId: "1:923660796067:web:17fde8337b85b6bb2b7f16",
  measurementId: "G-5W9XJTVFMN",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestPermission = async () => {
  console.log("Requesting permission...");
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    console.log("Notification permission granted.");

    getToken(messaging, {
      vapidKey:
        "BDxXwGjCnIRL990zkUY4igdDAVD8zZw-s7IMBXvRkMwUzth-c6PL_5txZdTFPdE2OBhSLdNZcewIQGhaf7PGe0U",
    }).then((currentToken) => {
      if (currentToken) {
        console.log("currentToken: ", currentToken);
      } else {
        console.log("Can not get token");
      }
    });
  } else {
    console.log("Do not have permission!");
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("AA", payload);
      resolve(payload);
    });
  });

//   Notification.requestPermission().then((permission) => {
//     if (permission === "granted") {
//       console.log("Notification permission granted.");
//       const app = initializeApp(firebaseConfig);

//       const messaging = getMessaging(app);
//       getToken(messaging, {
//         vapidKey:
//           "BCKNSY0FAgDlbgevvqBGsXdadLiRCrFR1wbWXqFYgQJOV3jX8nTSHAQzXcB91c6GGlmFwCfCcxCUK_UxDL7nTLA",
//       }).then((currentToken) => {
//         if (currentToken) {
//           console.log("currentToken: ", currentToken);
//         } else {
//           console.log("Can not get token");
//         }
//       });
//     } else {
//       console.log("Do not have permission!");
//     }
//   });
//}
