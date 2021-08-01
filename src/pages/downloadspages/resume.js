import React from 'react';
import resume from '../../assets/downloads/Resume.pdf';

function ResumeComp() {
    return (
        <div>
        <iframe style= {{    position: "fixed",
         top: "0px",
         bottom: "0px",
         right: "0px",
         width:" 100%",
         border: "none",
         margin: 0,
         padding: 0,
         overflow: "hidden",
         zIndex: 999999,
         height: "100%"}}
     
        src={resume} />
         </div>

    );
}

export default ResumeComp;