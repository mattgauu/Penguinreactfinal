
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_3-JWfiiadHfWV2ixWbdt70xh2SDtfIQ",
  authDomain: "penguinrollers-f385f.firebaseapp.com",
  projectId: "penguinrollers-f385f",
  storageBucket: "penguinrollers-f385f.firebasestorage.app",
  messagingSenderId: "233870651084",
  appId: "1:233870651084:web:c3d28e172c1e8515359c69"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db