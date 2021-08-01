import AOS from  'aos/dist/aos';
import 'aos/dist/aos.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './pages/aboutpage';
import ContactPage from './pages/contactpage';
import HomePage from './pages/homepage';
import ProjectPage from './pages/projectspage';
import FooterBar from './webcomponents/footer';
import NavigationBar from './webcomponents/navbar';
import CVcomp from './pages/downloadspages/curriculumvitae';
import ResumeComp from './pages/downloadspages/resume';
function App() {
  AOS.init();
  return (
    <React.Fragment>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/projects" component={ProjectPage} />
        <Route exact path="/cv" component={CVcomp} />
        <Route exact path="/resume" component={ResumeComp} />
      </Switch>
      <FooterBar />
    </React.Fragment>
  );
}

export default App;
