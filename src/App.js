import AOS from "aos/dist/aos";
import "aos/dist/aos.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/aboutpage";
import ContactPage from "./pages/contactpage";
import HomePage from "./pages/homepage";
import ProjectPage from "./pages/projectspage";
import FooterBar from "./webcomponents/footer";
import NavigationBar from "./webcomponents/navbar";

function App() {
  AOS.init();
  return (
    <React.Fragment>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>

      <FooterBar />
    </React.Fragment>
  );
}

export default App;
