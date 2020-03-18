//imports
import React from 'react'
import ReactDOM from 'react-dom'

//views
import Portfolio from './views/Portfolio'

//style
import GlobalStyle from './style/global_style'

//init
const root = document.getElementById('portfolio')

ReactDOM.render(
  <div>
    <GlobalStyle/>
    <Portfolio />
  </div>,
  root
)
