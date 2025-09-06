import React from "react";
import projectenum from './projectpage/projectenum'
import AllProjectarray from '../configuration/allprojects'
import { Link } from "react-router-dom";
function ProjectPage() {
  const projectnames = projectenum()
  let all_projects  =  AllProjectarray()
  all_projects = all_projects[0]
  window.scrollTo(0, 0)
  return (
   
      <React.Fragment>
          {/* Top projects starts */}
          <br/>  <br/>  <br/>  <br/>  
          <div className="row" >
     
          {
           
            projectnames.map((y,index)=>{
            let x = all_projects[y]
            let project_link = "/projectsdetail?name="+y
                return(
                  <div key={index}  className="col s12 m12 xl2 l2" data-aos="flip-left" data-aos-delay="1000" >
                  <div className="card" >
                    <div className="card-image">
                    <Link to={project_link}>
                    {/* className="responsive-img" */}
                    {/* style={{ width: '300px' , height:'300px' }}  */}
                      <img  src={x['projectImage']} style={{ width: '200px' , height:'200px' }}  />
                      </Link>
                    </div>
                    <div className="card-content">
                      <p style={{
                              marginTop: 10,
                              fontSize: 10,
                              lineHeight: 1.6,
                              fontFamily: ["Poppins", "sans-serif"],
                            }}>{x["projectName"]}</p>
                    </div>
                  </div>
                </div>
                 )
                })
           }
         </div>
          {/* main projects End */}
          <br/>  <br/>  <br/>  <br/> 
    </React.Fragment>
    
  );
}

export default ProjectPage;
