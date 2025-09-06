import React from "react";
import Asset5 from "../../assets/about/asset5.png";
function Rowone() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col xl6 l6 s12 m12">
          <img src={Asset5} alt={Asset5} className="responsive-img" />
        </div>
        <div className="col xl6 l6 s12 m12">
          <h4
            data-aos="zoom-in-left"
            style={{
              fontSize: 20,
              lineHeight: 1.6,
              fontFamily: ["Poppins", "sans-serif"],
            }}
          >
            Passionate software engineer with a knack for problem-solving.
            Experienced in Bigdata and AWS cloud technologies, I thrive in
            collaborative environments and excel at delivering scalable
            solutions. Constantly learning and staying updated with emerging
            technologies, I am dedicated to writing clean, efficient code and
            ensuring exceptional user experiences. Seeking impactful
            opportunities to contribute my skills and drive transformative
            software projects.
          </h4>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Rowone;
