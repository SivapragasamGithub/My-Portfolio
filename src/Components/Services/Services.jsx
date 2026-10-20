import React from 'react'
import Services_Data from '../../assets/services_data'

const Services = () => (
    <section className="section-wrap skills-section" id="services">
        <div className="section-heading"><p className="eyebrow">03 <span className="eyebrow-sep">/</span> TOOLKIT</p><h2>My day-to-day<br /><span className="heading-accent">building blocks.</span></h2></div>
        <div className="skills-grid">
            {Services_Data.map((group) => <article className="skill-group" key={group.label}>
                <span className="skill-index">{group.index}</span>
                <div><h3>{group.label}</h3><p>{group.skills}</p></div>
            </article>)}
        </div>
    </section>
)

export default Services
