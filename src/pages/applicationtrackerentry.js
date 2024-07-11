import React, { useRef, useState } from "react";
import PreLoader from "../webcomponents/preloader";
import AppConfiguration from "../configuration/mainconfiguration";
import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore } from "firebase/firestore";

function ApplicationTracker() {
  
    const appconfig = new AppConfiguration();
    const app = initializeApp(appconfig.firebaseHostConfig);
  
    const [submitstate, updatesubmitstate] = useState({
      showform: true,
      showpreloader: false,
      showmessage: false,
    });
  
    var companyname = useRef();
    var jobid = useRef();
    var joblink = useRef();
  
    async function formsubmit(event) {
      const db = getFirestore(app);
      updatesubmitstate((prevstate) => {
        return { ...prevstate, showform: false, showpreloader: true };
      });
      event.preventDefault();
      const postdatas = {
        companyname: companyname.current.value,
        jobid: jobid.current.value,
        joblink: joblink.current.value,
        status : "Applied",
        date :  new Date().toLocaleString()
      };

      let jobuniqueid = companyname.current.value +"_"+ String(jobid.current.value)
      var today = new Date();
      var year = today.getFullYear();
      var mes = today.getMonth()+1;
      var dia = today.getDate();
      var fecha ="F"+String(dia)+String(mes)+String(year);
  
      //saving details in database
      await setDoc(doc(db, "applicationtracker" , String(year) , String(mes),String(dia) , "job" , jobuniqueid), postdatas);
      updatesubmitstate((prevstate) => {
        return { ...prevstate, showpreloader: false, showmessage: true , showform: true};
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
                {/* subject starts  */}
                <div className="row">
                  <div className="input-field col xl8 l8 s12 m12">
                    <input
                      ref={joblink}
                      id="joblink"
                      type="text"
                      className="validate"
                      required
                    />
                    <label htmlFor="joblink"> joblink</label>
                  </div>
                </div>
                {/* subject ends  */}
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
              Saving Data
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
              Data Uploaded
            </h4>
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
  
  export default ApplicationTracker;
  