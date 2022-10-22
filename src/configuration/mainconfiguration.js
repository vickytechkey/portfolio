import resume from '../assets/files/resume/Resume.pdf'
import cv from '../assets/files/curriculmvitae/CV.pdf'
export default class AppConfiguration {
      // variables
      url ;
      // files urls
      Resumeurl = resume
      CVurls = cv
       firebaseHostConfig = {
        apiKey: "AIzaSyDgXcikGZMg1ZEjUpdW-MNU_1RTzZhbjqQ",
  authDomain: "betaportfolio-1686d.firebaseapp.com",
  projectId: "betaportfolio-1686d",
  storageBucket: "betaportfolio-1686d.appspot.com",
  messagingSenderId: "413750985602",
  appId: "1:413750985602:web:ccc44f152d0158b19e859b",
  measurementId: "G-QVN5D4LG75"
      };
    constructor( url){
        this.url = this.locateurl()
    }

  
    locateurl(){   // locate url of the server
    console.log(window.location.href)
     return window.location.href;
    }

}