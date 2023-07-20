import React from "react";
import TopProjectarray from '../../configuration/project'
import { Link } from "react-router-dom";
function Projects() {
  const topprojects = TopProjectarray()
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
      <Link to="sample" style={{textAlign:"right" , fontWeight: 600, fontFamily: ["Poppins", "sans-serif"]  }}>View all</Link>
      </div>
      </div>
        
          {/* Top projects starts */}
          <div className="row" >
     
          {
            topprojects.map((x,index)=>{

              if(x["projectid"] === "1"){
               return (
                  <div  className="col s12 m12 xl1 l1"  >
                    </div>
                )
                
              }
              else if(x["projectid"] === "r"){
                return (
                   <div  className="row"  >
                     </div>
                 )
                 
               }
              else if (x["projectid"] === "2"){
                return (
                  <div  className="col s12 m12 xl2 l2"  >
                    </div>
                )
              }
              else {
                return(
                  <div  className="col s12 m12 xl3 l3" data-aos="flip-left" data-aos-delay="1000" >
                  <div className="card" >
                    <div className="card-image">
                    <Link to={x["projectLink"]}>
                      <img src={x["projectLogo"]} className="responsive-img" />
                      </Link>
                    </div>
                    <div className="card-content">
                      <p style={{
                              marginTop: 10,
                              fontSize: 15,
                              lineHeight: 1.6,
                              fontFamily: ["Poppins", "sans-serif"],
                            }}>{x["projectTitle"]}</p>
                    </div>
                  </div>
                </div>
                 )
              }
             
            
            })
          }
         </div>
          {/* Top projects End */}

    </React.Fragment>
  );
}

export default Projects;
