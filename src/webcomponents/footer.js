import React from "react";
import footerbackground from "../../src/assets/footer/footerbackground.png";
import { Link } from "react-router-dom";
import AppConfiguration from "../configuration/mainconfiguration";
function FooterBar() {
  let appconfig = new AppConfiguration();
  let linkedin = appconfig.linkedin;
  let email = appconfig.email;
  let twitter = appconfig.twitter;
  let linkedinurl = appconfig.linkedinurl;
  let twitterurl = appconfig.twitterurl;
  let emailurl = appconfig.emailurl;
  const d = new Date();
  const year = d.getFullYear();
  const routes = [
    { path: "/", label: "Home" },
    // { 'path': "/projects", 'label': 'My works' },
    { path: "/about", label: "About myself" },
    { path: "/contact", label: "Say Hello" },
  ];
  return (
    <React.Fragment>
      <footer
        className="page-footer"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("${footerbackground}")`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5
                className="white-text"
                style={{ fontSize: 35, fontFamily: ["Poppins", "sans-serif"] }}
              >
                <b>Vignesh software Developer</b>
              </h5>
              {/* <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p> */}
            </div>
            <div className="col l4 offset-l2 s12">
              <h5
                className="white-text"
                style={{ fontSize: 35, fontFamily: ["Poppins", "sans-serif"] }}
              >
                {" "}
                Quick Links
              </h5>
              <ul>
                {routes.map((element, index) => (
                  <li key={index}>
                    <Link
                      className="white-text hvr-underline-from-right-white"
                      style={{
                        fontSize: 20,
                        fontFamily: ["Poppins", "sans-serif"],
                      }}
                      to={element.path}
                    >
                      {element.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    className="white-text hvr-underline-from-right-white"
                    style={{
                      fontSize: 20,
                      fontFamily: ["Poppins", "sans-serif"],
                    }}
                    href={appconfig.Resumeurl}
                  >
                    Resume
                  </a>
                </li>
                {/* <li><a className="white-text hvr-underline-from-right-white " style={{ fontSize: 20, fontFamily: ['Poppins', 'sans-serif'] }} href={appconfig.CVurls}>curriculum vitae</a></li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © {year} All rights reserved &nbsp;&nbsp;&nbsp;&nbsp;
            <a
              className="grey-text text-lighten-4 right"
              target="_blank"
              href={emailurl}
            >
              <img
                src={email}
                alt={email}
                className="responsive-img"
                style={{ width: 30 }}
              />
            </a>
            <a
              className="grey-text text-lighten-4 right"
              target="_blank"
              href={twitterurl}
            >
              <img
                src={twitter}
                alt={twitter}
                className="responsive-img"
                style={{ width: 30 }}
              />
            </a>
            <a
              className="grey-text text-lighten-4 right"
              target="_blank"
              href={linkedinurl}
            >
              <img
                src={linkedin}
                alt={linkedin}
                className="responsive-img"
                style={{ width: 30 }}
              />
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default FooterBar;
