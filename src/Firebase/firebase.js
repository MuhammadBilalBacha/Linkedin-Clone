import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// project one bachab140@gmail.com
const firebaseConfig = {
  apiKey: "AIzaSyCeBHzIni5ziCvsi0W2vYCXWqkigZ6eWOY",
  authDomain: "linkedin-clone-a5a8f.firebaseapp.com",
  projectId: "linkedin-clone-a5a8f",
  storageBucket: "linkedin-clone-a5a8f.appspot.com",
  messagingSenderId: "698610402310",
  appId: "1:698610402310:web:a56ca86fb2996fb123ef87",
};
// project two bachab140@gmail.com
// const firebaseConfig = {
//   apiKey: "AIzaSyDkojedfsQuMSZB52SpVlHQSwl0153LvhM",
//   authDomain: "linkedin-clone-2nd-key.firebaseapp.com",
//   projectId: "linkedin-clone-2nd-key",
//   storageBucket: "linkedin-clone-2nd-key.appspot.com",
//   messagingSenderId: "895596547878",
//   appId: "1:895596547878:web:445763fb8bff8d0734fbe7",
// };

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
