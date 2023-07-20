import React from "react";
import AllProjectarray from '../../configuration/allprojects'
import grcimage from '../../assets/projects/topprojects/compliancemanager500.png'
function Projectdetail(){
    
    const queryParameters = new URLSearchParams(window.location.search)
    let projectName = queryParameters.get("name")
    const allprojects =  AllProjectarray()
    let projectdetails = allprojects[0][projectName]

    return (
        <div>
            {/* project image and title starts */}
            <br/><br/><br/><br/>
<div className="row">
    <div className="col s12 m12 xl1 l1"></div>
    <div className="col s12 m12 xl3 l3" data-aos="flip-left" data-aos-delay="1000">
    <img src={projectdetails['projectImage']} alt={projectdetails['projectImage']} className="responsive-img" />
    </div>
    <div className="col s12 m12 xl1 l1"></div>
    <div className="col s12 m12 xl6 l6" data-aos="zoom-in-up" data-aos-delay="1000">
        <h2 data-aos="zoom-in-up" data-aos-delay="1000"> {projectdetails["projectName"]}</h2>
    </div>

</div>
{/* project image and title ends */}
{/* project description starts */}
<div className="row">
<div className="col s12 m12 xl8 l8">
<h1 data-aos="fade-right" data-aos-delay="500"
            style={{
              marginTop: 0,
              marginLeft: 0,
              fontSize: 45,
              lineHeight: 3.6,
              fontFamily: ["Poppins", "sans-serif"],
            }}
          >
            Introduction
          </h1>
<p data-aos="fade-left" data-aos-delay="500"
                style={{
                  marginTop: 0,
                  fontSize: 20,
                  lineHeight: 1.6,
                  fontFamily: ["Poppins", "sans-serif"],
                }}
              >
               {projectdetails['projectdescription']['intro']}
              </p>
</div>

</div>
<div className="row">
<div className="col s12 m12 xl6 l6"></div>
<div className="col s12 m12 xl6 l6">
<h1 data-aos="fade-right" data-aos-delay="500"
            style={{
              marginTop: 0,
              marginLeft: 0,
              fontSize: 45,
              lineHeight: 3.6,
              fontFamily: ["Poppins", "sans-serif"],
            }}
          >
              what I did from my end ?
          </h1>
<p data-aos="fade-right" data-aos-delay="500"
                style={{
                  marginTop: 0,
                  fontSize: 20,
                  lineHeight: 1.6,
                  fontFamily: ["Poppins", "sans-serif"],
                }}
              >
{projectdetails['projectdescription']['behave']}
              </p>
</div>
</div>
{/* project description ends */}
{/* project impact start */}
<div className="row">

<div className="col s12 m12 xl8 l8">
<h1 data-aos="fade-left" data-aos-delay="500"
            style={{
              marginTop: 0,
              marginLeft: 0,
              fontSize: 45,
              lineHeight: 3.6,
              fontFamily: ["Poppins", "sans-serif"],
            }}
          >
              How my project improved our team ?
          </h1>
<p data-aos="fade-left" data-aos-delay="500"
                style={{
                  marginTop: 0,
                  fontSize: 20,
                  lineHeight: 1.6,
                  fontFamily: ["Poppins", "sans-serif"],
                }}
              >
{projectdetails['projectdescription']['impact']}
              </p>
</div>
</div>
{/* project impact end */}
        </div>
    )


}

export default Projectdetail;