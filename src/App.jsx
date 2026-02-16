import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Focus from './components/sections/Focus'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Focus />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
