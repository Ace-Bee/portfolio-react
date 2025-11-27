import { useState, useEffect } from 'react'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
