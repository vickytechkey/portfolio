import React from 'react';
import footerbackground from '../../src/assets/footer/footerbackground.svg';
import { Link } from 'react-router-dom';
function FooterBar() {
    const routes = [
        { 'path': "/", 'label': 'Home' },
        // { 'path': "/projects", 'label': 'My works' },
        { 'path': "/about", 'label': 'About myself' },
        { 'path': "/contact", 'label': 'Say Hello' },
        
    
    ]
    return (
        <React.Fragment>
            <footer className="page-footer" style={{ backgroundSize : 'cover', backgroundImage:`url("${footerbackground}")`}}>
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text" style={{ fontSize: 35, fontFamily: ['Poppins', 'sans-serif'] }}><b>Vignesh software Developer</b></h5>
                {/* <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p> */}
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text" style={{ fontSize: 35, fontFamily: ['Poppins', 'sans-serif'] }}> Quick Links</h5>
                <ul>
                {routes.map((element, index) => <li key={index}><Link className="white-text hvr-underline-from-right-white" style={{ fontSize: 20, fontFamily: ['Poppins', 'sans-serif'] }} to={element.path}>{ element.label}</Link></li>)}
                <li><Link className="white-text hvr-underline-from-right-white" style={{ fontSize: 20, fontFamily: ['Poppins', 'sans-serif'] }} to="/resume">Resume</Link></li>
                        <li><Link className="white-text hvr-underline-from-right-white " style={{ fontSize: 20, fontFamily: ['Poppins', 'sans-serif'] }} to="/cv">curriculum vitae</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2021 All rights reserved
            {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
            </div>
          </div>
        </footer>
        </React.Fragment>
    );
}

export default FooterBar;