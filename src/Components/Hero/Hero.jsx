import React from 'react'

const Hero = () => (
    <section className="hero section-wrap" id="home">
        <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line"></span> FULL STACK DEVELOPER <span className="eyebrow-sep">/</span> CHENNAI, INDIA</p>
            <h1>Building useful<br /><span className="heading-accent">things for the web.</span></h1>
            <p className="hero-lede">I’m Sivapragasam, a full stack developer with <strong>4+ years of IT experience</strong>, creating responsive interfaces and reliable APIs for real-world products.</p>
            <div className="hero-actions">
                <a className="button button-dark" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
                <a className="text-link" href="/Sivapragasam_Resume.docx" download>Download résumé <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-meta"><span className="status-dot"></span><span>React · Node.js · MongoDB · AWS</span></div>
        </div>
        <div className="hero-visual">
            <div className="hero-visual-top"><span>PORTFOLIO <span className="brand-dot">/</span> 2026</span><span>01 — 04</span></div>
            <div className="portrait-frame"><img src="/siva-face.svg" alt="Portrait of Sivapragasam" /></div>
            <div className="portrait-caption"><div><span className="caption-label">HELLO, I’M</span><strong>Sivapragasam A</strong></div><span className="caption-role">FULL STACK<br />DEVELOPER</span></div>
            <span className="visual-orbit orbit-one"></span><span className="visual-orbit orbit-two"></span>
        </div>
        <a className="scroll-cue" href="#about"><span className="scroll-cue-line"></span> SCROLL TO EXPLORE</a>
    </section>
)

export default Hero
