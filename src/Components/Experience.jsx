import React from 'react'

const roles = [
    {
        dates: 'SEP 2022 — PRESENT',
        title: 'Full Stack Developer',
        company: 'Box Ventures Pvt Ltd',
        location: 'Chennai, India',
        description: 'Progressed from frontend development into backend and full stack delivery. Build product features, REST APIs, authentication, database operations, tests and deployment support.',
    },
    {
        dates: '2010 — AUG 2020',
        title: 'Technical Specialist / Assistant Engineer',
        company: 'Murata Energy Devices Singapore (Sony)',
        location: 'Singapore',
        description: 'Led production teams, monitored equipment and manufacturing processes, and worked on troubleshooting, technical documentation and process improvement.',
    },
]

const Experience = () => (
    <section className="experience-section" id="experience">
        <div className="section-wrap experience-wrap">
            <div className="section-heading"><p className="eyebrow">04 <span className="eyebrow-sep">/</span> EXPERIENCE</p><h2>A path built on<br /><span className="heading-accent">learning by doing.</span></h2></div>
            <div className="timeline">
                {roles.map((role) => <article className="timeline-item" key={role.title}>
                    <span className="timeline-dot"></span><div className="timeline-date">{role.dates}</div>
                    <div className="timeline-main"><h3>{role.title}</h3><p className="timeline-company">{role.company} <span>· {role.location}</span></p><p>{role.description}</p></div>
                </article>)}
            </div>
            <div className="education-row"><span className="eyebrow">EDUCATION</span><p><strong>Bachelor of Computer Application</strong> · Madras University, 2015</p><p><strong>Diploma in Electronics & Communication Engineering</strong> · S.C.S.M Polytechnic College, 2006</p></div>
        </div>
    </section>
)

export default Experience
