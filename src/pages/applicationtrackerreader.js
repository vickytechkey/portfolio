import React, { useRef, useState } from "react";
import PreLoader from "../webcomponents/preloader";
import AppConfiguration from "../configuration/mainconfiguration";
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ApplicationTrackerReader() {
    const appconfig = new AppConfiguration();
    const app = initializeApp(appconfig.firebaseHostConfig);
    const [jobdetails, setjodetails] = useState('');
    const [submitstate, updatesubmitstate] = useState({
      showform: true,
      showpreloader: false,
      showmessage: false
    });
  
    var companyname = useRef();
    var jobid = useRef();
    
  
    async function formsubmit(event) {
      const db = getFirestore(app);
      updatesubmitstate((prevstate) => {
        return { ...prevstate, showform: false, showpreloader: true };
      });
      event.preventDefault();
  
      //saving details in database
      const docRef = doc(db, "applicationtracker" , companyname.current.value , jobid.current.value , "data" );
      const docSnap = await getDoc(docRef);
     
      if (docSnap.exists()) {
        
        setjodetails(docSnap.data());
       
       
      } else {
        // docSnap.data() will be undefined in this case
        setjodetails("you didn't apply to the job earlier");
      }
      updatesubmitstate((prevstate) => {
        return { ...prevstate, showpreloader: false, showmessage: true , showform: true };
      });
      //saving details in database
    }
  
    return (
      <React.Fragment>
        {submitstate.showform === true ? (
          <form onSubmit={formsubmit}>
            <div className="row">
              <div className="col xl6 l6 s12 m12">
                {/* company name starts  */}
                <div className="row">
                  <div className="input-field col xl8 l8 s12 m12">
                    <input
                      ref={companyname}
                      id="company_name"
                      type="text"
                      className="validate"
                      required
                    />
                    <label htmlFor="company_name"> company_name</label>
                  </div>
                </div>
                {/* company name ends  */}
                {/* jobid starts  */}
                <div className="row">
                  <div className="input-field col xl8 l8 s12 m12">
                    <input
                      ref={jobid}
                      id="jobid"
                      type="text"
                      className="validate"
                      required
                    />
                    <label htmlFor="jobid"> jobid</label>
                  </div>
                </div>
                {/* jobid ends  */}
                <div className="row  center-align">
                  <button
                    type="button"
                    onClick={(e) => formsubmit(e)}
                    className="waves-effect  deep-purple darken-4 btn"
                  >
                    Upload Data
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
              Searching Data
            </h4>
          </div>
        ) : (
          ""
        )}
        {submitstate.showmessage === true ? (
          <div style={{ marginTop: "150px", marginBottom: "150px" }}>
            <p
              className="center-align"
              data-aos="zoom-in-left"
              style={{
                fontSize: 12,
                lineHeight: 1.6,
                fontFamily: ["Poppins", "sans-serif"],
              }}
            >
              <ul>
              <pre>{JSON.stringify(jobdetails, null, 2)}</pre>
      </ul>
            </p>
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
  
  export default ApplicationTrackerReader;
  