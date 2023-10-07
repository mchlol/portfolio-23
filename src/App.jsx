import { useState } from 'react'
import './App.css'
import Nav from './components/nav'
import Hero from './components/Hero'
// import SkillsMarquee from './components/SkillsMarquee'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      {/* <SkillsMarquee 
        skills = {['HTML','CSS','JavaScript','Git','Flexbox','CSS Grid','React','Node','Tailwind','Bootstrap','WordPress', 'Sass']}
      /> */}
      <Footer />
    </>
  )
}

export default App
