import React from "react";
import grcimage from '../../assets/projects/topprojects/compliancemanager500.png'


function Projectdetail(){
    
    const queryParameters = new URLSearchParams(window.location.search)
    let id = queryParameters.get("id")

    return (
        <div>
            {/* project image and title starts */}
            <br/><br/><br/><br/>
<div className="row">
    <div className="col s12 m12 xl1 l1"></div>
    <div className="col s12 m12 xl3 l3" data-aos="flip-left" data-aos-delay="1000">
    <img src={grcimage} alt={grcimage} class="responsive-img" />
    </div>
    <div className="col s12 m12 xl1 l1"></div>
    <div className="col s12 m12 xl6 l6" data-aos="zoom-in-up" data-aos-delay="1000">
        <h2 data-aos="zoom-in-up" data-aos-delay="1000"> GRC compliance manager</h2>
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
               In 2021 host owned by paper was running with Amazon_Linux_2012 OS, running outdated OS leads to security thread.
To fix issue Amazon wide AL2 migration campaign was planned in 2021 and planned to migrate all instance from AL2012 to AL2 before March 2022

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
               In 2021 host owned by paper was running with Amazon_Linux_2012 OS, running outdated OS leads to security thread.
To fix issue Amazon wide AL2 migration campaign was planned in 2021 and planned to migrate all instance from AL2012 to AL2 before March 2022

              </p>
</div>
</div>
{/* project description ends */}
{/* project impact start */}
<div className="row">

<div className="col s12 m12 xl6 l6">
<h1 data-aos="fade-left" data-aos-delay="500"
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
<p data-aos="fade-left" data-aos-delay="500"
                style={{
                  marginTop: 0,
                  fontSize: 20,
                  lineHeight: 1.6,
                  fontFamily: ["Poppins", "sans-serif"],
                }}
              >
               In 2021 host owned by paper was running with Amazon_Linux_2012 OS, running outdated OS leads to security thread.
To fix issue Amazon wide AL2 migration campaign was planned in 2021 and planned to migrate all instance from AL2012 to AL2 before March 2022

              </p>
</div>
</div>
{/* project impact end */}
        </div>
    )


}

export default Projectdetail;