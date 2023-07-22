import React, { useEffect,useState  } from "react";
import AllProjectarray from '../../configuration/allprojects'
import { Link } from "react-router-dom";
import projectenum from './projectenum'
function Projectdetail(){

  
  const allprojects =  AllProjectarray()
  let queryParameters = new URLSearchParams(window.location.search)
  const [projectname, setprojectname] = useState(queryParameters.get("name"));
  let projectdetails = allprojects[0][projectname]
  
    window.scrollTo(0, 0)
   
    
    let project_num = projectenum()
    let currentprojectindex = project_num.indexOf(projectname)
    let nextprojectindex = null
    let previousprojectindex = null
    if(currentprojectindex != 0){
      nextprojectindex = currentprojectindex+1
      previousprojectindex = currentprojectindex -1
}
else {
  previousprojectindex = project_num.length-1
  nextprojectindex = currentprojectindex+1
}

let next_projectname = "/projectsdetail?name="+project_num[nextprojectindex]
let previousprojectname = "/projectsdetail?name="+project_num[previousprojectindex]

useEffect(()=>{
  window.scrollTo(0, 0)
},[])
   
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
              what I changed ?
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
<div className="row">
<div className="col s12 m12 xl2 l2">
<Link to={previousprojectname} style={{textAlign:"right" , fontWeight: 600, fontFamily: ["Poppins", "sans-serif"]  }}
onClick={()=>{
  setprojectname(project_num[previousprojectindex])
}}
>Previous Project</Link>

  </div>  
<div className="col s12 m12 xl4 l4"></div> 
<div className="col s12 m12 xl4 l4" style={{textAlign:"right"}}></div>  
<Link to={next_projectname}  style={{textAlign:"right" , fontWeight: 600, fontFamily: ["Poppins", "sans-serif"]  }}
onClick={()=>{
  setprojectname(project_num[nextprojectindex])
}}
>Next Project</Link>
          </div>
        </div>
    
    )


}

export default Projectdetail;