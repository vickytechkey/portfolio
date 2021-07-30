import React from 'react';
import Angular from '../../assets/homepage/skills/angular.svg';
import Csharp from '../../assets/homepage/skills/csharp.svg';
import Flutter from '../../assets/homepage/skills/flutter.svg';
import Java from '../../assets/homepage/skills/java.svg';
import NodeJs from '../../assets/homepage/skills/nodejs.svg';
import Python from '../../assets/homepage/skills/python.svg';
import ReactJs from '../../assets/homepage/skills/reactjs.svg';
import PurpleBar from './purplebar';
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
            <div className="row">
                <br/><br/><br/>
                <div className="col xl1 l1 m1 s1">
                <PurpleBar/>
                </div>
                <div className="col xl4 l4 m11 s11">
                    <h5 data-aos="fade-left" style={{ marginLeft: 0, marginTop: 0, fontFamily: ['Poppins', 'sans-serif'] }} className="justify-align hide-on-med-and-up">Started my journey towards my passion before three years now looking forward for an oppurtunity to give life to my dreams</h5>
                    <h5 data-aos="fade-left" style={{marginLeft:-60 , marginTop:0,fontFamily: ['Poppins', 'sans-serif']}} className="justify-align hide-on-med-and-down">Started my journey towards my passion before three years now looking forward for an oppurtunity to give life to my dreams</h5>
                </div>
            </div>
           
        </React.Fragment>
    );
}

export default Skills;