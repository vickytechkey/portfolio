import React from 'react';
import Asset1 from '../../assets/homepage/asset1.svg';

function IntroRow() {
    return (
        <React.Fragment>
            <div className="row">
            <div className="col s12 m12 xl6 l6">
                    <h3 data-aos="fade-right" data-aos-delay="500" style={{ marginTop: 75, fontWeight: 600, fontFamily: ['Poppins', 'sans-serif'] }}>Hello</h3>
                    <h3 data-aos="fade-right" data-aos-delay="1000"  style={{  fontWeight: 600, fontFamily: ['Poppins', 'sans-serif'] }}>I'm Vignesh</h3>
                    <h3 data-aos="fade-right" data-aos-delay="1500" style={{ fontWeight : 600 , fontFamily :['Poppins', 'sans-serif']}}>Software Developer</h3>
             </div>
             <div className="col s12 m12 xl6 l6">
                 <img src={Asset1} alt={Asset1}   className="responsive-img" />
             </div>
         </div>
        
        </React.Fragment>
    );
}

export default IntroRow;