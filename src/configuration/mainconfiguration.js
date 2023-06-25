import resume from "../assets/files/resume/Resume.pdf";
import cv from "../assets/files/curriculmvitae/CV.pdf";
import linkedin from "../assets/footer/socialmedia/icons8-linkedin-50.png";
import twitter from "../assets/footer/socialmedia/icons8-twitter-50.png";
import email from "../assets/footer/socialmedia/icons8-email-64.png";
export default class AppConfiguration {
  // variables
  url;
  linkedinurl = "https://www.linkedin.com/in/vignesh-k-695b88126/";
  emailurl = "mailto: vichunice@gmail.com";
  twitterurl = "https://twitter.com/vichu91431238";
  // files urls
  Resumeurl = resume;
  CVurls = cv;
  linkedin = linkedin;
  email = email;
  twitter = twitter;
  firebaseHostConfig = {
    apiKey: "AIzaSyBD7MBF1tvdy0t5yIQLNStbrer5vp6qXPI",
    authDomain: "vigneshcoinhosting.firebaseapp.com",
    projectId: "vigneshcoinhosting",
    storageBucket: "vigneshcoinhosting.appspot.com",
    messagingSenderId: "830481915833",
    appId: "1:830481915833:web:6f9377961efbc163b72068",
    measurementId: "G-MQSGJXKNHT",
  };
  constructor(url) {
    this.url = this.locateurl();
  }

  locateurl() {
    // locate url of the server
    console.log(window.location.href);
    return window.location.href;
  }
}
