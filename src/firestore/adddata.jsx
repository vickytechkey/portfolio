import AppConfiguration from "../configuration/mainconfiguration";
import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore } from "firebase/firestore";



export async function referaldata(postdatas) {

const appconfig = new AppConfiguration();
const app = initializeApp(appconfig.firebaseHostConfig);
const db = getFirestore(app);
await setDoc(doc(db, "referals", postdatas.email), postdatas);

return 200

}