import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo1.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className='footer' >
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" style={{ width: "100px", height: "100px" }} />
                    <p>I am a Full stack developer and also worked Non-IT filed more than 10 years</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left"> © 2025 sivapragasam.All rights reserved. </p>
                <div className="footer-botom-right">
                    <p>Term of services</p>
                    <p>Privacy policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer