import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "90a224b6-56d7-4658-b0c6-8e4611ec91c4");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message)
        }
    };

    return (
        <div id='contact' className='contact' >
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I am currently available to take projects, so feel free to contact me at anytime </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>qc.siva@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>Thuraiyur, Trichy</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>+91-8754780861</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows='8' placeholder='enter your message' ></textarea>
                    <button type='submit' className='contact-submit' > Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact