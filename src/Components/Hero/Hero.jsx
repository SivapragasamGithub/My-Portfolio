import React from 'react'
import './Hero.css'
import profile_img from '../../assets/siva-face.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero' >
            <img src={profile_img} alt="" style={{ width: "450px" }} />
            <h1><span>I'm Sivapragasam ,</span> Full Stack developer</h1>
            <p>I am Sivapragasam Full stack developer, Having strong Knowledge in Full stack with live projects</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>  Connect with me </AnchorLink> </div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero