import React from "react";
import { PurpleBarC } from "./purplebar";
import journeystatic from "../../configuration/journey";
// import amazonlogo from '../../assets/homepage/AmazonLogo.svg'
function Journey() {
  const jobdetails = journeystatic();
  console.log(jobdetails);
  const jobdetailsres = [];
  {
    jobdetails.forEach((x, index) => {
      console.log(index);
      if (index % 2 == 0) {
        jobdetailsres.push(
          <div className="row" data-aos="fade-left">
            <div className="col xl1 l1 s12 m12">
              <img
                src={x.companylogo}
                alt={x.companylogo}
                style={{ width: "200px" }}
                className="responsive-img"
              />
            </div>
            <div className="col xl4 l4 s12 m12">
              <p
                style={{
                  marginTop: 10,
                  fontSize: 20,
                  lineHeight: 1.6,
                  fontFamily: ["Poppins", "sans-serif"],
                }}
              >
                {x.description}{" "}
              </p>
            </div>
          </div>
        );
      } else {
        jobdetailsres.push(
          <div className="row" data-aos="fade-right">
            <div className="col xl4 l4 s12 m12"></div>
            <div className="col xl3 l3 s12 m12"></div>
            <div className="col xl1 l1 s12 m12">
              <img
                src={x.companylogo}
                alt={x.companylogo}
                style={{ width: "200px" }}
                className="responsive-img"
              />
            </div>
            <div className="col xl4 l4 s12 m12">
              <p
                style={{
                  marginTop: 10,
                  fontSize: 20,
                  lineHeight: 1.6,
                  fontFamily: ["Poppins", "sans-serif"],
                }}
              >
                {x.description}{" "}
              </p>
            </div>
          </div>
        );
      }
    });
  }
  return (
    <React.Fragment>
      <br /> <br /> <br />
      <div className="row" data-aos="fade-left" data-aos-delay="500">
        <div className="col offset-xl8 offset-l8 xl1 l1 s1 m1">
          <PurpleBarC height="50px" />
        </div>

        <div className="col  xl3 l3 hide-on-med-and-down">
          <h1
            style={{
              marginTop: -55,
              marginLeft: -55,
              fontSize: 45,
              lineHeight: 3.6,
              fontFamily: ["Poppins", "sans-serif"],
            }}
          >
            My Journey
          </h1>
        </div>
        <div className="col  xl3 l3 hide-on-med-and-up">
          <h1
            style={{
              marginTop: -55,
              marginLeft: -15,
              fontSize: 45,
              lineHeight: 3.6,
              fontFamily: ["Poppins", "sans-serif"],
            }}
          >
            My Journey
          </h1>
        </div>
      </div>
      {jobdetailsres}
    </React.Fragment>
  );
}
export default Journey;
