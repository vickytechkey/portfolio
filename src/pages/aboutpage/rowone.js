import React from 'react';
import Asset5 from '../../assets/about/asset5.png'
function Rowone() {
    return (
        <React.Fragment>
           <div className="row">
              
                <div className="col xl6 l6 s12 m12">
                   <img src={Asset5} alt={Asset5} className="responsive-img" />
                </div>
                <div className="col xl6 l6 s12 m12">
                    <h4 data-aos="zoom-in-left" style={{fontSize : 20 , lineHeight : 1.6 , fontFamily: ['Poppins', 'sans-serif']}}>
                    I discovered my passion for coding when I was a student in High School; It was then when it became clear what I wanted to do for a living. I pursued my career at the sree sakthi engineering College where I started my journey towards my career. A month later I took a begginer’s Web className, where I discovered the love for code. After that, I switched my major to Interactive Design and started the never-ending journey of becoming a web developer along with sharpening my skills for coding. In 2015 completed by php course and start my journey as php coder from college app developer club and help the developers to create the server function and turn my focus toward the android app development
                   </h4>
                   </div>
           </div>
        </React.Fragment>
    );
}

export default Rowone;