import React from 'react'

const projects = [
    {
        domain: '01 / HEALTHCARE',
        dates: 'JAN 2025 — OCT 2026',
        kicker: 'HEALTHCARE MANAGEMENT',
        title: 'Care, connected.',
        description: 'Patient, doctor and staff workflows covering appointments, records, prescriptions, billing and reporting.',
        tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
        graphic: 'graphic-health',
    },
    {
        domain: '02 / INSURANCE',
        dates: 'JUN 2023 — DEC 2024',
        kicker: 'INSURANCE PLATFORM',
        title: 'Cover the details.',
        description: 'Policy administration, customer onboarding and claims workflows, with integrations for premium calculation and customer data.',
        tags: ['React', 'REST APIs', 'Jest', 'AWS'],
        graphic: 'graphic-insurance',
    },
    {
        domain: '03 / MANUFACTURING',
        dates: 'SEP 2022 — MAY 2023',
        kicker: 'MANUFACTURING & INVENTORY',
        title: 'Operations in sync.',
        description: 'Production, inventory, warehouse, quality-control and dispatch screens supported by reusable, data-driven UI.',
        tags: ['React', 'Express', 'MongoDB', 'Postman'],
        graphic: 'graphic-manufacturing',
    },
]

const ProjectGraphic = ({ type }) => (
    <div className={`project-graphic ${type}`} aria-hidden="true">
        {type === 'graphic-health' && <><span className="graphic-ring"></span><span className="graphic-cross">+</span><span className="graphic-pill">CARE<br />SYSTEM</span></>}
        {type === 'graphic-insurance' && <><span className="graphic-shield">◇</span><span className="graphic-lines"></span><span className="graphic-pill">POLICY<br />PORTAL</span></>}
        {type === 'graphic-manufacturing' && <><span className="graphic-block block-a"></span><span className="graphic-block block-b"></span><span className="graphic-block block-c"></span><span className="graphic-pill">OPS<br />DASHBOARD</span></>}
    </div>
)

const MyWork = () => (
    <section className="projects-section" id="work">
        <div className="section-wrap projects-wrap">
            <div className="section-heading heading-row"><div><p className="eyebrow">02 <span className="eyebrow-sep">/</span> SELECTED EXPERIENCE</p><h2>Products I’ve<br /><span className="heading-accent">helped build.</span></h2></div><p className="heading-note">A selection of product work across three domains. Details are summarized from my professional experience.</p></div>
            <div className="project-grid">
                {projects.map((project) => <article className="project-card" key={project.domain}>
                    <div className="project-topline"><span>{project.domain}</span><span>{project.dates}</span></div>
                    <ProjectGraphic type={project.graphic} />
                    <div className="project-body"><p className="project-kicker">{project.kicker}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                </article>)}
            </div>
        </div>
    </section>
)

export default MyWork
