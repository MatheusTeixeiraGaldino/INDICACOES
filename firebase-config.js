// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWSKibWwaeszD-PAg5i-2HZ-nV4wJcJ0Q",
  authDomain: "indicacao-ol.firebaseapp.com",
  projectId: "indicacao-ol",
  storageBucket: "indicacao-ol.firebasestorage.app",
  messagingSenderId: "677222290015",
  appId: "1:677222290015:web:db02f6b9e73eb07f4d41ea"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
