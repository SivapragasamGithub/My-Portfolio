import React from 'react'

const Footer = () => (
    <footer className="site-footer">
        <a className="brand" href="#home"><span className="brand-mark">SA</span><span className="brand-name">Sivapragasam<span className="brand-dot">.</span></span></a>
        <span>Designed & built by Sivapragasam A · {new Date().getFullYear()}</span>
        <a href="#home">Back to top ↑</a>
    </footer>
)

export default Footer
