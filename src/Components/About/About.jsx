import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/siva.svg'

const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" style={{ width: "450px", height: "400px" }} />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p> i am an experienced full stack developer with 14 years + Non-IT experience that will engage my strentgh in this Field</p>
                        <p>MY passion for full stack that i established with some projects That i have attached here</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML,CSS,Bootstrap</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>ReactJS</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Nodejs,ExpressJS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>MongoDB</p><hr style={{ width: "70%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>years of Non IT Experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>Full stack course completed from top Institute</h1>
                    <p>Done some projects during my study period</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+ projects </h1>
                    <p>Perfectly work with all devices</p>
                </div>
            </div>
        </div>
    )
}

export default About