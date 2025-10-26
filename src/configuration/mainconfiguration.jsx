import resume from "../assets/files/resume/Resume.pdf";
import cv from "../assets/files/curriculmvitae/CV.pdf";
import linkedin from "../assets/footer/socialmedia/icons8-linkedin-50.png";
import twitter from "../assets/footer/socialmedia/icons8-twitter-50.png";
import email from "../assets/footer/socialmedia/icons8-email-64.png";
export default class AppConfiguration {
  // variables
  url;
  linkedinurl = "https://www.linkedin.com/in/vigneshky/";
  emailurl = "mailto: vichunice@gmail.com";
  twitterurl = "https://twitter.com/vichu91431238";
  // files urls
  Resumeurl = resume;
  CVurls = cv;
  linkedin = linkedin;
  email = email;
  twitter = twitter;
  firebaseHostConfig = JSON.parse(process.env.secrets.FIREBASE_SERVICE_ACCOUNT_VIGNESHCOINHOSTING_2025);
  constructor(url) {
    this.url = this.locateurl();
  }

  locateurl() {
    // locate url of the server
    console.log(window.location.href);
    return window.location.href;
  }
}
