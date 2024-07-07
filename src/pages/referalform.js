import React, { useRef, useState } from "react";
import asset from "../assets/contact/asset2.png";
import PreLoader from "../webcomponents/preloader";
import  {referaldata} from "../firestore/adddata"

function ReferalPage() {

    const [submitstate, updatesubmitstate] = useState({
        showform: true,
        showpreloader: false,
        showmessage: false,
      });

    var firstname = useRef();
    var lastname = useRef();
    var email = useRef();
    var resumelink = useRef();
    var phonenumber = useRef();
    var linkedinurl = useRef();
    var joblink = useRef();
    

    async function formsubmit(event) {
      updatesubmitstate((prevstate) => {
        return { ...prevstate, showform: false, showpreloader: true };
      });
      event.preventDefault();
      const postdatas = {
        firstname: firstname.current.value,
        lastname:lastname.current.value,
        email: email.current.value,
        resumelink : resumelink.current.value,
        phonenumber: phonenumber.current.value,
        linkedinurl: linkedinurl.current.value,
        joblink:joblink.current.value,
        status : "YTS",
        date :  new Date().toLocaleString()
      };

      await referaldata(postdatas)
  
   
      updatesubmitstate((prevstate) => {
        return { ...prevstate, showpreloader: false, showmessage: true };
      });

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
                      ref={firstname}
                      id="first_name"
                      type="text"
                      className="validate"
                      required
                    />
                    <label htmlFor="first_name"> Name</label>
                  </div>
                </div>
                {/* name ends  */}
                 {/* last name starts  */}
                 <div className="row">
                  <div className="input-field col xl8 l8 s12 m12">
                    <input
                      ref={lastname}
                      id="last_name"
                      type="text"
                      className="validate"
                      required
                    />
                    <label htmlFor="first_name"> last_name</label>
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
                {/* resume link starts  */}
                <div className="row">
                  <div className="input-field col xl8 l8 s12 m12">
                    <input
                      ref={resumelink}
                      id="resumepdflink"
                      type="text"
                      className="validate"
                      required
                    />
                    <label htmlFor="resumepdflink"> Resume pdf link</label>
                  </div>
                </div>
                {/* resume link ends  */}
                {/* joblink starts  */}
                <div className="row">
                  <div className="input-field col xl8 l8 s12 m12">
                    <input
                      ref={joblink}
                      id="joblink"
                      type="text"
                      className="validate"
                      required
                    />
                    <label htmlFor="joblink"> job full link</label>
                  </div>
                </div>
                {/* joblink ends  */}
                {/* phonenumber starts  */}
                <div className="row">
                  <div className="input-field col xl8 l8 s12 m12">
                    <input
                      ref={phonenumber}
                      id="phonenumber"
                      className="validate"
                      type="tel"
                      required
                    ></input>
                    <label htmlFor="phonenumber">phone number</label>
                  </div>
                </div>
                {/* phonenumber ends  */}
                 {/* linkedinurl starts  */}
                 <div className="row">
                  <div className="input-field col xl8 l8 s12 m12">
                    <input
                      ref={linkedinurl}
                      id="linkedinurl"
                      type="text"
                      className="validate"
                      required
                    ></input>
                    <label htmlFor="linkedinurl">your linkedin url</label>
                  </div>
                </div>
                {/* phonenumber ends  */}
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
              Uploading data ...
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
              Thanks for your interest, you will recive confirmation through email once i refered you for the job.
            </h4>
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );

}

export default ReferalPage;