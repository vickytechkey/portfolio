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
            <div className="row" data-aos="fade-left">
                <div className="col xl1 l1 s12 m12">
                    <img src={amazonlogo} alt={amazonlogo} style={{width:"200px"}} className="responsive-img" />

                </div>
                <div className="col xl4 l4 s12 m12">
                   <p style={{marginTop : 10, fontSize : 20 , lineHeight : 1.6 , fontFamily: ['Poppins', 'sans-serif']}}>I started my carrier in amazon as customer service associate in retail for united states customer in 2018</p>

                </div>
            </div>
            {/* journey one ends */}
                 {/* journey two starts */}
            <div className="row" data-aos="fade-right">
            <div className="col xl7 l7 s12 m12"> </div>
                   

               
                <div className="col xl1 l1 s12 m12">
                    <img src={amazonlogo} alt={amazonlogo} style={{width:"200px"}} className="responsive-img" />

                </div>
                <div className="col xl4 l4 s12 m12">
                   <p style={{marginTop : 10, fontSize : 20 , lineHeight : 1.6 , fontFamily: ['Poppins', 'sans-serif']}}>After 2 years I got an oppurtunity as interim resolution specalist and which give me oppurtunity to learn the business logics of various sectors in amazon other than retail</p>

                </div>
            </div>
             {/* journey two ends */}
        </React.Fragment>
    );
}

export default Journey;