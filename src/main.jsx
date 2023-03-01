import React from 'react'
import ReactDOM from 'react-dom/client'
import Projects from './projects'
import UpperBar from './upperBar'
import AboutMe from './AboutMe'
import Contact from './contact'
import Footer from './Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UpperBar />
    <AboutMe />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>,
)
