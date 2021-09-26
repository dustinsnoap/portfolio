//IMPORTS
import React from 'react'
import ReactDOM from 'react-dom'

//STYLE
import GlobalStyle from './style'

//MODULES
import Navigation from './modules/navigation'
import Header from './modules/header'
import Skills from './modules/skills'
import About from './modules/about'
import Contact from './modules/contact'

//APP
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Navigation />
    <Header />
    <Skills />
    <About />
    <Contact />
  </React.StrictMode>,
  document.getElementById('app')
)