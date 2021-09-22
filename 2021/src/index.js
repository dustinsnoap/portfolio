//IMPORTS
import React from 'react'
import ReactDOM from 'react-dom'

//STYLE
import GlobalStyle from './style'

//MODULES
import Navigation from './modules/navigation'

//APP
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Navigation />
  </React.StrictMode>,
  document.getElementById('app')
)