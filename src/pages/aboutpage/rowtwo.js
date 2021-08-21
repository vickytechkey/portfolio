import React from 'react';
import { PurpleBarC } from '../home/purplebar'
import  EducationImage from '../../assets/about/education.png'
function RowTwo() {
    return (
        <React.Fragment>
            <div className="row"  data-aos="zoom-in-up">
                <div className="left col xl1 l1 s1 m1" style={{marginLeft:0}}>
                    <PurpleBarC height="70px" />
                  
                </div>
                <div className="left col xl5 l5 s5 m5 hide-on-med-and-down" style={{marginLeft:-60, marginTop : -85}}>
                    <h1 style={{fontSize : 45 , lineHeight : 3.6 , fontFamily: ['Poppins', 'sans-serif']}}>Education</h1>
                  
                </div>
                <div className="left col xl5 l5 s5 m5 hide-on-med-and-up" style={{marginLeft:-10, marginTop : -85}}>
                    <h1 style={{fontSize : 45 , lineHeight : 3.6 , fontFamily: ['Poppins', 'sans-serif']}}>Education</h1>
                  
                </div>
            </div>
            <div className="row">
                <div className="col xl6 l6 s12 m12">
                    <img src={EducationImage } alt={EducationImage } className="responsive-img" style={{width:'500px'}} />
                </div>
                <div className="col xl6 l6 s12 m12">
                    <div className="row" data-aos="zoom-in-up" data-aos-delay="300">
                        <div className="col xl1 l1 s12 m12">
                        <i className="material-icons Large deep-purple-text darken-4" style={{fontSize:40}}>account_balance</i>
                        </div>
                        <div className="col xl6 l6 s12 m12" style={{marginTop:-50}}>
                        <h5 style={{fontSize : 25 , lineHeight : 3.6 , fontFamily: ['Poppins', 'sans-serif']}}>Sri Gopal Naidu Hr Sec School</h5>
                        </div>
                    </div>
                    {/* ends */}
                    <div className="row" data-aos="zoom-in-up" data-aos-delay="600">
                        <div className="col xl1 l1 s12 m12">
                        <i className="material-icons Large  deep-purple-text darken-4" style={{fontSize:40}}>school</i>
                        </div>
                        <div className="col xl6 l6 s12 m12" style={{marginTop:-50}}>
                        <h5 style={{fontSize : 22 , lineHeight : 3.6 , fontFamily: ['Poppins', 'sans-serif']}}>Sree Sakthi Engineering College</h5>
                        </div>
                       </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RowTwo;