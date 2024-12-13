import { initializeApp } from "firebase/app";
import { getfirestore } from "firesbase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAk1plqBy_71yX5e_gs_4TGG3clMXUsZ6I",
  authDomain: "cucumberbot-457a1.firebaseapp.com",
  projectId: "cucumberbot-457a1",
  storageBucket: "cucumberbot-457a1.firebasestorage.app",
  messagingSenderId: "732798139870",
  appId: "1:732798139870:web:77e970d2f72a2f1c71b14f",
  measurementId: "G-6P1S4P3N8Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
