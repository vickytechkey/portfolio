import React from "react";
import TopProjectarray from '../../configuration/project'
import grcimage from '../../assets/projects/topprojects/grc.png'
function Projects() {
  const topprojects = TopProjectarray()
  console.log(topprojects[0]['projectTitle'])
  return (
    <React.Fragment>
      <div className="row">
      <div className="col s12 m12 xl8 l8">
      <h4
       style={{ fontWeight: 600, fontFamily: ["Poppins", "sans-serif"] ,textAlign:"right" }}>
            My Recent Works
          </h4>
      </div>
      <div className="col s12 m12 xl4 l4">
        <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="#" style={{textAlign:"right" , fontWeight: 600, fontFamily: ["Poppins", "sans-serif"]  }}>View all</a>
      </div>
      </div>
        
          {/* Top projects starts */}
          <div className="row" >
     
          {
            topprojects.map((x,index)=>{
             
             return(
              <div  className="col s12 m12 xl2 l2" data-aos="flip-left" data-aos-delay="1000" >
              <div className="card" >
                <div className="card-image">
                <a href="#">
                  <img src={x["projectLogo"]} className="responsive-img" />
                  </a>
                </div>
                <div className="card-content">
                  <p style={{
                          marginTop: 10,
                          fontSize: 20,
                          lineHeight: 1.6,
                          fontFamily: ["Poppins", "sans-serif"],
                        }}>{x["projectTitle"]}</p>
                </div>
              </div>
            </div>
             )
            })
          }
         </div>
          {/* Top projects End */}

    </React.Fragment>
  );
}

export default Projects;
