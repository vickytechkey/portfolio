import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/navbar/logo.svg'
import Backgroundtexture from '../assets/navbar/listviewbackground.jpg'
import M from 'materialize-css';

function NavigationBar() {
  
  
   function trigger() {
        let sidenav = document.querySelector('#slide-out');
       M.Sidenav.init(sidenav, {});
      //  console.log("clicked")
     }
  
    const routes = [
        { 'path': "/", 'label': 'Home' },
        // { 'path': "/projects", 'label': 'My works' },
        { 'path': "/about", 'label': 'About myself' },
        { 'path': "/contact", 'label': 'Say Hello' },
        
    
    ]
    return (
        <React.Fragment>
            <nav className="z-depth-0" >
    <div className="nav-wrapper white z-depth-0 " >
                    <Link to="/" className="brand-logo"><img src={Logo} alt={Logo} className="responsive-img" style={{width:'80px'}} /></Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {routes.map((element, index) => <li key={index}><Link className="black-text hvr-underline-from-right" style={{ fontSize: 20, fontFamily: ['Poppins', 'sans-serif'] }} to={element.path}>{ element.label}</Link></li>)}
                        <li><a className="black-text hvr-underline-from-right" style={{ fontSize: 20, fontFamily: ['Poppins', 'sans-serif'] }} href="https://vignesh.co.in/php/files/resume/Resume.pdf">Resume</a></li>
                        <li><a className="black-text hvr-underline-from-right" style={{ fontSize: 20, fontFamily: ['Poppins', 'sans-serif'] }} href="https://vignesh.co.in/php/files/curriculmvitae/CV.pdf">curriculum vitae</a></li>
                        
                    </ul>
          </div>
          <a href="#" onClick={trigger} data-target="slide-out" className="sidenav-trigger"><i className="material-icons black-text">menu</i></a>
        </nav>
        <ul id="slide-out" className="sidenav">
    <li><div className="user-view">
      <div className="background">
        <img src={Backgroundtexture} alt={Backgroundtexture} />
      </div>
      <a href="#user"><img className="circle" src={Logo} alt={Logo} /></a>
      <a href="#name"><span className="black-text name">Vignesh</span></a>
      <a href="#email"><span className="black-text email">vichunice@gmail.com</span></a>
    </div></li>
    {routes.map((element, index) => <li key={index}><Link className="black-text hvr-underline-from-right" style={{ fontSize: 20, fontFamily: ['Poppins', 'sans-serif'] }} to={element.path}>{ element.label}</Link></li>)}
                        <li><a className="black-text hvr-underline-from-right" style={{ fontSize: 20, fontFamily: ['Poppins', 'sans-serif'] }} href="https://vigneshexplorations.epizy.com/downloads/assets/Resume.pdf">Resume</a></li>
                        <li><a className="black-text hvr-underline-from-right " style={{ fontSize: 20, fontFamily: ['Poppins', 'sans-serif'] }} href="https://vigneshexplorations.epizy.com/downloads/assets/CV-web.pdf">curriculum vitae</a></li>
  </ul>
 
        </React.Fragment>
    );
}

export default NavigationBar;