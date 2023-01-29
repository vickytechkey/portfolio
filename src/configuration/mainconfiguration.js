import resume from '../assets/files/resume/Resume.pdf'
import cv from '../assets/files/curriculmvitae/CV.pdf'
export default class AppConfiguration {
      // variables
      url ;
      // files urls
      Resumeurl = resume
      CVurls = cv
       firebaseHostConfig = {
        apiKey: "AIzaSyBD7MBF1tvdy0t5yIQLNStbrer5vp6qXPI",
        authDomain: "vigneshcoinhosting.firebaseapp.com",
        projectId: "vigneshcoinhosting",
        storageBucket: "vigneshcoinhosting.appspot.com",
        messagingSenderId: "830481915833",
        appId: "1:830481915833:web:6f9377961efbc163b72068",
        measurementId: "G-MQSGJXKNHT"
      };
    constructor( url){
        this.url = this.locateurl()
    }

  
    locateurl(){   // locate url of the server
    console.log(window.location.href)
     return window.location.href;
    }

}