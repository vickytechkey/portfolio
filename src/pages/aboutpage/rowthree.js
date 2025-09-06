import React from "react";
import { PurpleBarC } from "../home/purplebar";
import WorkImage from "../../assets/about/work.jpg";

function WorkItem({ title, delay }) {
  return (
    <div className="row" data-aos="zoom-in-up" data-aos-delay={delay}>
      <div className="col xl1 l1 s12 m12 flex items-center justify-center">
        <i className="material-icons Large deep-purple-text darken-4 text-4xl">
          work
        </i>
      </div>
      <div className="col xl9 l9 s12 m12 -mt-6">
        <h5 className="text-xl leading-[3.6rem] font-[Poppins]">{title}</h5>
      </div>
    </div>
  );
}

function RowThree() {
  const workExperiences = [
    "LTIMindtree Data Engineer (2025 - Present)", // You can replace with other jobs
    "Amazon Application Engineer-2 (2018 - 2025)", // You can replace with other jobs
  ];

  return (
    <section>
      {/* Header Row */}
      <div className="row" data-aos="zoom-in-up">
        <div className="col offset-xl8 offset-l8 s1 m1 xl1 l1">
          <PurpleBarC height="50px" />
        </div>
        <div className="col s4 m4 xl3 l3">
          <h2 className="text-4xl font-[Poppins] -mt-14 -ml-14 leading-[3.6rem] hide-on-med-and-down">
            Work Experience
          </h2>
          <h2 className="text-4xl font-[Poppins] -mt-14 -ml-4 leading-[3.6rem] hide-on-med-and-up">
            Work Experience
          </h2>
        </div>
      </div>

      {/* Content Row */}
      <div className="row">
        {/* Left Column - Work Experience List */}
        <div className="col xl6 l6 s12 m12 mt-20">
          {workExperiences.map((job, index) => (
            <WorkItem key={index} title={job} delay={300 * (index + 1)} />
          ))}
        </div>

        {/* Right Column - Image */}
        <div className="col xl6 l6 s12 m12 flex justify-center items-center">
          <img src={WorkImage} alt="Work Experience" className="responsive-img" />
        </div>
      </div>
    </section>
  );
}

export default RowThree;
