import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Experience from './Components/Experience'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('siva-portfolio-theme') || 'light' } catch { return 'light' }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('siva-portfolio-theme', theme) } catch { /* storage may be unavailable */ }
  }, [theme])

  return (
    <div className="portfolio-app" data-theme={theme}>
      <Navbar theme={theme} onThemeToggle={() => setTheme((current) => current === 'light' ? 'dark' : 'light')} />
      <main>
        <Hero />
        <About />
        <MyWork />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
