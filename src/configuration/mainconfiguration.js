import resume from '../assets/files/resume/Resume.pdf'
import cv from '../assets/files/curriculmvitae/CV.pdf'
export default class AppConfiguration {
      // variables
      ssl ;
      url ;
      // files urls
      Resumeurl = resume
      CVurls = cv

    constructor( ssl  ,  url){
        this.url = this.locateurl()
    }

  
    locateurl(){   // locate url of the server
    console.log(window.location.href)
     return window.location.href;
    }

}