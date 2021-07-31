import React , {useRef , useState} from 'react';
import asset from '../assets/contact/asset2.png';
import PreLoader from '../webcomponents/preloader'
const firebase = require("firebase");
require("firebase/firestore");

function ContactPage() {

  const [submitstate, updatesubmitstate] = useState({"showform" : true , "showpreloader" : false, "showmessage" : false});

  const firebaseConfig = {
    apiKey: "AIzaSyCbNRhYBErmJq_Yxl7uaV8Wd3ViGJaYcaM",
    authDomain: "vigneshexplorations.firebaseapp.com",
    projectId: "vigneshexplorations",
    storageBucket: "vigneshexplorations.appspot.com",
    messagingSenderId: "1061942842544",
    appId: "1:1061942842544:web:cc0a41c1a4a58e9abb9775",
    measurementId: "G-1JG82313DL"
  };

  if (!firebase.default.apps.length) {
    firebase.default.initializeApp(firebaseConfig);
  }

  var db = firebase.default.firestore();


  var name = useRef();
  var email = useRef();
  var subject = useRef();
  var query = useRef();

  function formsubmit(event) {
    updatesubmitstate((prevstate) => {
      return { ...prevstate, "showform" : false, "showpreloader" : true }
    })
    event.preventDefault();
    db.collection("WebsiteQueries").add(
      {
        "name": name.current.value,
        "subject": subject.current.value,
        "email": email.current.value,
        "query" : query.current.value
      }).then((e) => {
        updatesubmitstate((prevstate) => {
          return { ...prevstate, "showmessage" : true, "showpreloader" : false }
        })
      });
  }


    return (
      <React.Fragment>
        {submitstate.showform === true ?  <form onSubmit={formsubmit}>
          <div className="row">
             <div className="col xl6 l6 s12 m12">
             <img src={asset} alt={asset} className="responsive-img" style={{width:600}} />
                </div>
                <div className="col xl6 l6 s12 m12">
                   {/* name starts  */}
           <div className="row">
           <div className="input-field col xl8 l8 s12 m12">
          <input ref={name}  id="first_name" type="text" className="validate" required />
          <label htmlFor="first_name"> Name</label>
        </div>
                    </div>
                    {/* name ends  */}
                        {/* email starts  */}
                    <div className="row">
           <div className="input-field col xl8 l8 s12 m12">
          <input ref={email}  id="Email" type="email" className="validate" required />
          <label htmlFor="Email"> Email</label>
        </div>
                    </div>
                    {/* email ends  */}
                             {/* subject starts  */}
                             <div className="row">
           <div className="input-field col xl8 l8 s12 m12">
          <input ref={subject}  id="subject" type="text" className="validate" required />
          <label htmlFor="subject"> Subject</label>
        </div>
                    </div>
                    {/* subject ends  */}
                        {/* query starts  */}
                        <div className="row">
                        <div className="input-field col xl8 l8 s12 m12">
          <textarea ref={query} id="textarea1" className="materialize-textarea" required></textarea>
          <label htmlFor="textarea1">Query</label>
        </div>
                    </div>
                    {/* query ends  */}
                    <div className="row  center-align">
                    <button type="submit" className="waves-effect  deep-purple darken-4 btn">Send Email</button>
                    </div>
             </div>
          </div>
        </form> : ""}
        
        { submitstate.showpreloader === true ? <div className="center-align">
          <PreLoader />
          <h4  style={{fontSize : 20 , lineHeight : 1.6 , fontFamily: ['Poppins', 'sans-serif']}}>
Sending message
          </h4>
        </div> : ''}
        { submitstate.showmessage === true ?    <div className="center-align">
        <h4 data-aos="zoom-in-left" style={{fontSize : 20 , lineHeight : 1.6 , fontFamily: ['Poppins', 'sans-serif']}}>
Thank you  for contacting us we will get back to you soon
          </h4>
        </div> : ''}
     
       
       
      
        </React.Fragment>
    );
}

export default ContactPage;