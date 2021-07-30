import React from 'react';
import Angular from '../../assets/homepage/skills/angular.svg';
import Csharp from '../../assets/homepage/skills/csharp.svg';
import Flutter from '../../assets/homepage/skills/flutter.svg';
import Java from '../../assets/homepage/skills/java.svg';
import NodeJs from '../../assets/homepage/skills/nodejs.svg';
import Python from '../../assets/homepage/skills/python.svg';
import ReactJs from '../../assets/homepage/skills/reactjs.svg';
function Skills() {
    const logos = [Angular,Csharp,Flutter,Java,NodeJs,Python,ReactJs];
    return (
        <React.Fragment>
         <div className="row center-align">
               
                <div className="col s12 m12 xl12 l12">
                <h3 data-aos="zoom-in" style={{ paddingBottom: 30, fontWeight: 600, fontFamily: ['Poppins', 'sans-serif'] }}>I'm good at</h3>
                </div>
                {logos.map((element,index)=> <div key={index} className="col xl2 l2 s12 m12">
                    <img data-aos-delay="500" data-aos="zoom-in-up" src={element} alt={element} className="responsive-img" style={{width:100}} />
                </div>)}
               
         </div>
           
        </React.Fragment>
    );
}

export default Skills;