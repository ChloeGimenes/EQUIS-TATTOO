import React from 'react';

import './Contact.css'



function Contact() {

    return(

        <div className="Contact">
            <p>CONTACT ME</p>
         
            <div className="Contact-form">
                <form className="form-inside"  >
                    <input type="text" maxLength="100" name="name" placeholder="name" required/>
                    <input type="mail" maxLength="100" name="e-mail" placeholder="mail" required/>
                    <textarea type="text" maxLength="500" name="text" placeholder="reason for contact" />
                </form>
            </div>
        </div>
    )
}

export default Contact;

