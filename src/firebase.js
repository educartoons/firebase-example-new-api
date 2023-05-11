import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCyIhnGswfbMJf1DFUvTc6EuI7UsYRAYh4",
  authDomain: "realtime-chat-reactjs.firebaseapp.com",
  projectId: "realtime-chat-reactjs",
  storageBucket: "realtime-chat-reactjs.appspot.com",
  messagingSenderId: "588342738690",
  appId: "1:588342738690:web:ba63fa7ee191aeac60cc1b"
};

const app = initializeApp(firebaseConfig);

export default app;

const db = getFirestore(app);

export { db };