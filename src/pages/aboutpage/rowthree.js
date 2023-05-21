import React from "react";
import { PurpleBarC } from "../home/purplebar";
import WorkImage from "../../assets/about/work.jpg";
function RowThree() {
  return (
    <React.Fragment>
      <div className="row" data-aos="zoom-in-up">
        <div className="col offset-xl8 offset-l8 s1 m1 xl1 l1">
          <PurpleBarC height="50px" />
        </div>
        <div className="col s4 m4 xl3 l3 hide-on-med-and-down">
          <h1
            style={{
              marginTop: -55,
              marginLeft: -55,
              fontSize: 45,
              lineHeight: 3.6,
              fontFamily: ["Poppins", "sans-serif"],
            }}
          >
            Work Experience
          </h1>
        </div>
        <div className="col s4 m4 xl3 l3 hide-on-med-and-up">
          <h1
            style={{
              marginTop: -55,
              marginLeft: -15,
              fontSize: 45,
              lineHeight: 3.6,
              fontFamily: ["Poppins", "sans-serif"],
            }}
          >
            Work Experience
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col xl6 l6 s12 m12 " style={{ marginTop: 75 }}>
          <div className="row" data-aos="zoom-in-up" data-aos-delay="300">
            <div className="col xl1 l1 s12 m12">
              <i
                className="material-icons Large deep-purple-text darken-4"
                style={{ fontSize: 40 }}
              >
                work
              </i>
            </div>
            <div className="col xl9 l9 s12 m12" style={{ marginTop: -30 }}>
              <h5
                style={{
                  fontSize: 20,
                  lineHeight: 3.6,
                  fontFamily: ["Poppins", "sans-serif"],
                }}
              >
                Amazon software support engineer- 2020 to present
              </h5>
            </div>
          </div>
          {/* ends */}
        </div>
        <div className="col xl6 l6 s12 m12 ">
          <img src={WorkImage} alt={WorkImage} className="responsive-img" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default RowThree;
