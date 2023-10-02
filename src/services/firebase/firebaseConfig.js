import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBcihFH5PoqLChnwW-J9BdMyW4nRrs8Xkc",
    authDomain: "freestyle-clothes---mleguiza.firebaseapp.com",
    projectId: "freestyle-clothes---mleguiza",
    storageBucket: "freestyle-clothes---mleguiza.appspot.com",
    messagingSenderId: "12196578136",
    appId: "1:12196578136:web:5e2151961ae16e99351b2d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);