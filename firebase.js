import firebase from "firebase";

const firebaseConfig = {
 
  };
  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const auth = app.auth();

export default firebase; 