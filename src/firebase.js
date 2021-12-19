import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAm11JNhKbWB_UNVnUYgYyxnMXez-WcwQY",
    authDomain: "gkeep-7f2ff.firebaseapp.com",
    projectId: "gkeep-7f2ff",
    storageBucket: "gkeep-7f2ff.appspot.com",
    messagingSenderId: "148356249451",
    appId: "1:148356249451:web:fd63bc167aced264b97e2e",
    //measurementId: "${config.measurementId}"
  };

   export const app = initializeApp(firebaseConfig);