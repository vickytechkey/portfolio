import React, { useRef, useState } from "react";
import asset from "../assets/contact/asset2.png";
import PreLoader from "../webcomponents/preloader";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import AppConfiguration from "../configuration/mainconfiguration";
import { initializeApp } from "firebase/app";

function ContactPage() {
  var randomstring = require("randomstring");

  const appconfig = new AppConfiguration();
  const app = initializeApp(appconfig.firebaseHostConfig);

  const [submitstate, updatesubmitstate] = useState({
    showform: true,
    showpreloader: false,
    showmessage: false,
  });

  var name = useRef();
  var email = useRef();
  var subject = useRef();
  var query = useRef();

  async function formsubmit(event) {
    const db = getFirestore(app);
    let rndstr = randomstring.generate();
    updatesubmitstate((prevstate) => {
      return { ...prevstate, showform: false, showpreloader: true };
    });
    event.preventDefault();
    const postdatas = {
      name: name.current.value,
      subject: subject.current.value,
      query: query.current.value,
      emailaddress: email.current.value,
    };

    //saving details in database
    await setDoc(doc(db, "userqueriesfromwebsite", rndstr), postdatas);
    updatesubmitstate((prevstate) => {
      return { ...prevstate, showpreloader: false, showmessage: true };
    });
    //saving details in database
  }

  return (
    <React.Fragment>
      {submitstate.showform === true ? (
        <form onSubmit={formsubmit}>
          <div className="row">
            <div className="col xl6 l6 s12 m12">
              <img
                src={asset}
                alt={asset}
                className="responsive-img"
                style={{ width: 600 }}
              />
            </div>
            <div className="col xl6 l6 s12 m12">
              {/* name starts  */}
              <div className="row">
                <div className="input-field col xl8 l8 s12 m12">
                  <input
                    ref={name}
                    id="first_name"
                    type="text"
                    className="validate"
                    required
                  />
                  <label htmlFor="first_name"> Name</label>
                </div>
              </div>
              {/* name ends  */}
              {/* email starts  */}
              <div className="row">
                <div className="input-field col xl8 l8 s12 m12">
                  <input
                    ref={email}
                    id="Email"
                    type="email"
                    className="validate"
                    required
                  />
                  <label htmlFor="Email"> Email</label>
                </div>
              </div>
              {/* email ends  */}
              {/* subject starts  */}
              <div className="row">
                <div className="input-field col xl8 l8 s12 m12">
                  <input
                    ref={subject}
                    id="subject"
                    type="text"
                    className="validate"
                    required
                  />
                  <label htmlFor="subject"> Subject</label>
                </div>
              </div>
              {/* subject ends  */}
              {/* query starts  */}
              <div className="row">
                <div className="input-field col xl8 l8 s12 m12">
                  <textarea
                    ref={query}
                    id="textarea1"
                    className="materialize-textarea"
                    required
                  ></textarea>
                  <label htmlFor="textarea1">Query</label>
                </div>
              </div>
              {/* query ends  */}
              <div className="row  center-align">
                <button
                  type="button"
                  onClick={(e) => formsubmit(e)}
                  className="waves-effect  deep-purple darken-4 btn"
                >
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        ""
      )}

      {submitstate.showpreloader === true ? (
        <div style={{ marginTop: "150px", marginBottom: "150px" }}>
          <h4
            className="center-align"
            style={{
              fontSize: 20,
              lineHeight: 1.6,
              fontFamily: ["Poppins", "sans-serif"],
            }}
          >
            <PreLoader /> <br />
            Sending message
          </h4>
        </div>
      ) : (
        ""
      )}
      {submitstate.showmessage === true ? (
        <div style={{ marginTop: "150px", marginBottom: "150px" }}>
          <h4
            className="center-align"
            data-aos="zoom-in-left"
            style={{
              fontSize: 20,
              lineHeight: 1.6,
              fontFamily: ["Poppins", "sans-serif"],
            }}
          >
            Thank you for contacting us we will get back to you soon
          </h4>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default ContactPage;
