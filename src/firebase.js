import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4G1sdbgqd5y-fTeePgnb4nKpbrgj8qxI",
    authDomain: "robinhood-clone-2a402.firebaseapp.com",
    databaseURL: "https://robinhood-clone-2a402.firebaseio.com",
    projectId: "robinhood-clone-2a402",
    storageBucket: "robinhood-clone-2a402.appspot.com",
    messagingSenderId: "409531288924",
    appId: "1:409531288924:web:8358210b00791a50864599",
    measurementId: "G-1PNP64G6J6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export {db};


