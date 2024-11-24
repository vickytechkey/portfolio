import React from "react";
import IntroRow from "./home/introrow";
import Skills from "./home/skills";
import AOS from "aos/dist/aos";
import "aos/dist/aos.css";
import Projects from './home/projects';
import Journey from "./home/journey";
import Leetscore from "./home/leetscoremain"
function HomePage() {
  AOS.init();
  return (
    <React.Fragment>
      <IntroRow />
      <Leetscore/>
      <Skills />
      <Journey />
      <Projects/>
    </React.Fragment>
  );
}

export default HomePage;
