import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Projects from './projects'
import UpperBar from './upperBar'
import AboutMe from './AboutMe'
import Contact from './contact'
import WorkWith from './workWith'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UpperBar />
        <AboutMe />
        <WorkWith />
        <Projects />
        <Contact />
        <Footer />
    </React.StrictMode>
)