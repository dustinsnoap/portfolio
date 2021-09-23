//IMPORTS
import React from 'react'
import ReactDOM from 'react-dom'

//STYLE
import GlobalStyle from './style'

//MODULES
import Navigation from './modules/navigation'
import Header from './modules/header'

//APP
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Navigation />
    <Header />
  </React.StrictMode>,
  document.getElementById('app')
)