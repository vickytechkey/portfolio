import AppConfiguration from "../configuration/mainconfiguration";
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";


export async function getapplicationdata() {

    const appconfig = new AppConfiguration();
    const app = initializeApp(appconfig.firebaseHostConfig);
    const db = getFirestore(app);
    const docRef = doc(db, "applications");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data()
      } else {
        // docSnap.data() will be undefined in this case
       return "No such document!"
      }
      

    return 200
    
    }