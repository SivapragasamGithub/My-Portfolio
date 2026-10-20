import React from 'react'

const highlights = [
    { number: '01', title: 'Full stack delivery', text: 'Hands-on experience with React, Next.js, Node.js, Express and MongoDB, plus testing, integrations and AWS deployment support.' },
    { number: '02', title: 'Cross-domain experience', text: 'Contributed to products in healthcare, insurance and manufacturing, working with QA, business teams and engineers.' },
    { number: '03', title: 'Grounded in operations', text: 'Earlier technical work in Singapore shaped my approach to troubleshooting, process improvement and team coordination.' },
]

const About = () => (
    <>
        <section className="proof-strip" aria-label="Professional summary">
            <div className="proof-inner">
                <div><strong>4<span>+</span></strong><span>years in software</span></div>
                <div><strong>3</strong><span>industry domains</span></div>
                <div><strong>10</strong><span>years in technical roles</span></div>
                <p>From factory-floor problem solving<br />to full stack product development.</p>
            </div>
        </section>
        <section className="section-wrap about-section" id="about">
            <div className="section-heading"><p className="eyebrow">01 <span className="eyebrow-sep">/</span> ABOUT</p><h2>Engineering with<br /><span className="heading-accent">a practical mindset.</span></h2></div>
            <div className="about-content">
                <p className="about-lede">I build and support web applications across the full development cycle—from clear, responsive interfaces to secure APIs and dependable data workflows.</p>
                <div className="about-detail-grid">
                    {highlights.map((item) => <article key={item.number}><span className="detail-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
                </div>
            </div>
        </section>
    </>
)

export default About
