import React from 'react';
import { Link } from 'react-router-dom';
function NavigationBar() {
    const routes = [
        { 'path': "/", 'label': 'Home' },
        { 'path': "/projects", 'label': 'My works' },
        { 'path': "/about", 'label': 'About myself' },
        { 'path': "/contact", 'label': 'Say Hello' },
        
    
    ]
    return (
        <React.Fragment>
            <nav className="z-depth-0" >
    <div className="nav-wrapper white z-depth-0 " >
      <a href="#" class="brand-logo">Logo</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        {routes.map((element, index) => <li key={index}><Link className="black-text hvr-underline-from-right" style={{ fontSize: 25, fontFamily: ['Poppins', 'sans-serif'] }} to={element.path}>{ element.label}</Link></li>)}
                       
                    </ul>
    </div>
  </nav>
        </React.Fragment>
    );
}

export default NavigationBar;