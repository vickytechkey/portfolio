import React from "react";
import { PurpleBar } from "../home/purplebar";
import skillsarray from "../../configuration/skills";
function Skills() {
  const logos = skillsarray();
  return (
    <React.Fragment>
      <div className="row center-align">
        <div className="col s12 m12 xl12 l12">
          <h3
            data-aos="zoom-in"
            style={{
              paddingBottom: 30,
              fontWeight: 600,
              fontFamily: ["Poppins", "sans-serif"],
            }}
          >
            I'm good at
          </h3>
        </div>
        {logos.map((element, index) => {
          if (element === "br") {
            return (
              <div key={index} className="row xl12 l12 s12 m12 center-align">
                <br />
                <br />
                <br />
                <br />
              </div>
            );
          } else {
            return (
              <div key={index} className="col xl2 l2 s12 m12 center-align">
                <img
                  data-aos-delay="500"
                  data-aos="zoom-in-up"
                  src={element}
                  alt={element}
                  className="responsive-img"
                  style={{ width: 100 }}
                />
              </div>
            );
          }
        })}
      </div>
      <div className="row">
        <br />
        <br />
        <br />
        <div className="col xl1 l1 m1 s1">
          <PurpleBar />
        </div>
        <div className="col xl4 l4 m11 s11">
          <h5
            data-aos="fade-left"
            style={{
              marginLeft: 0,
              marginTop: 0,
              fontFamily: ["Poppins", "sans-serif"],
            }}
            className="justify-align hide-on-med-and-up"
          >
            Started my journey towards my passion before three years now looking
            forward for an oppurtunity to give life to my dreams
          </h5>
          <h5
            data-aos="fade-left"
            style={{
              marginLeft: -60,
              marginTop: 0,
              fontFamily: ["Poppins", "sans-serif"],
            }}
            className="justify-align hide-on-med-and-down"
          >
            Started my journey towards my passion before three years now looking
            forward for an oppurtunity to give life to my dreams
          </h5>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skills;
