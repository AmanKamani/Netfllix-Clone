// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const { REACT_APP_FIREBASE_CONFIG } = process.env;
if (!REACT_APP_FIREBASE_CONFIG){
    alert('See console for detail error');
    throw new Error(`Set 'REACT_APP_FIREBASE_CONFIG' variable with config json from firebase in .env file.`)
}

// Your web app's Firebase configuration
const firebaseConfig = JSON.parse(REACT_APP_FIREBASE_CONFIG);

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Run only for the first time
// seedDatabase(app);

export {
    app as firebaseApp
};

