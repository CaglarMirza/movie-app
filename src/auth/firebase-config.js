import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {


    apiKey: "AIzaSyA1zgi44OpbJbJls8hqd4VedW9jkze7NCk",
    authDomain: "movie-app-28e47.firebaseapp.com",
    projectId: "movie-app-28e47",
    storageBucket: "movie-app-28e47.appspot.com",
    messagingSenderId: "609358761000",
    appId: "1:609358761000:web:67c870a3128dfe073af91d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);