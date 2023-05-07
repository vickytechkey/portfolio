import React from 'react';
import { PurpleBarC } from './purplebar';
import amazonlogo from '../../assets/homepage/AmazonLogo.svg'
function Journey() {
    return (
        <React.Fragment>
            <br /> <br /> <br />
         <div className="row" data-aos="fade-left" data-aos-delay="500">
             <div className="col offset-xl8 offset-l8 xl1 l1 s1 m1">
                 <PurpleBarC height="50px" />
                </div>
               
                <div className="col  xl3 l3 hide-on-med-and-down">
                <h1 style={{ marginTop : -55,marginLeft : -55 , fontSize : 45 , lineHeight : 3.6 , fontFamily: ['Poppins', 'sans-serif']}}>My Journey</h1>
                </div>
                <div className="col  xl3 l3 hide-on-med-and-up">
                <h1 style={{ marginTop : -55,marginLeft : -15 , fontSize : 45 , lineHeight : 3.6 , fontFamily: ['Poppins', 'sans-serif']}}>My Journey</h1>
                </div>
            </div>

     
                {/* journey one starts */}
                {/* Journey one */}
            <div className="row" data-aos="fade-left">
                <div className="col xl1 l1 s12 m12">
                    <img src={amazonlogo} alt={amazonlogo} style={{width:"200px"}} className="responsive-img" />

                </div>
                <div className="col xl4 l4 s12 m12">
                   <p style={{marginTop : 10, fontSize : 20 , lineHeight : 1.6 , fontFamily: ['Poppins', 'sans-serif']}}>
                    From October 2019 I had started my career as support software engineer in amazon music team </p>

                </div>
            </div>
            {/* journey one ends */}
            {/* Journey two */}
            <div className="row" data-aos="fade-right">
            <div className="col xl4 l4 s12 m12"></div>
            <div className="col xl3 l3 s12 m12"></div>
                <div className="col xl1 l1 s12 m12">
                    <img src={amazonlogo} alt={amazonlogo} style={{width:"200px"}} className="responsive-img" />

                </div>
      
                <div className="col xl4 l4 s12 m12">
                   <p style={{marginTop : 10, fontSize : 20 , lineHeight : 1.6 , fontFamily: ['Poppins', 'sans-serif']}}>
                    On April 2023 , I got promoted as Support software engineer - II and owned compliance goal (software security assesment)  in amazon music team
                    </p>

                </div>
            </div>
              {/* Journey two ends */}
            
        </React.Fragment>
    );
}

export default Journey;