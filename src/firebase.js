import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA0q-v-xHcw4sEV143-684bWDO7ebcVN_s",
    authDomain: "fun-food-friends-df9b9.firebaseapp.com",
    databaseURL: "https://fun-food-friends-df9b9.firebaseio.com",
    projectId: "fun-food-friends-df9b9",
    storageBucket: "fun-food-friends-df9b9.appspot.com",
    messagingSenderId: "345575401141",
    appId: "1:345575401141:web:bea94fecffb24996b580fc",
    measurementId: "G-RPQ18SWZSP"
  };

firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;