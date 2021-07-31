import React from 'react';
import asset from '../assets/contact/asset2.png';
function ContactPage() {
    return (
        <React.Fragment>
          <div className="row">
             <div className="col xl6 l6 s12 m12">
             <img src={asset} alt={asset} className="responsive-img" style={{width:600}} />
                </div>
                <div className="col xl6 l6 s12 m12">
                   {/* name starts  */}
           <div className="row">
           <div class="input-field col s8">
          <input  id="first_name" type="text" class="validate" required />
          <label for="first_name"> Name</label>
        </div>
                    </div>
                    {/* name ends  */}
                        {/* email starts  */}
                    <div className="row">
           <div class="input-field col s8">
          <input  id="Email" type="email" class="validate" required />
          <label for="Email"> Email</label>
        </div>
                    </div>
                    {/* email ends  */}
                             {/* subject starts  */}
                             <div className="row">
           <div class="input-field col s8">
          <input  id="subject" type="text" class="validate" required />
          <label for="subject"> Subject</label>
        </div>
                    </div>
                    {/* subject ends  */}
                        {/* query starts  */}
                        <div className="row">
                        <div class="input-field col s8">
          <textarea id="textarea1" class="materialize-textarea" required></textarea>
          <label for="textarea1">Query</label>
        </div>
                    </div>
                    {/* query ends  */}
                    <div className="row  center-align">
                    <a class="waves-effect  deep-purple darken-4 btn">Send Email</a>
                    </div>
             </div>
          </div>
        </React.Fragment>
    );
}

export default ContactPage;