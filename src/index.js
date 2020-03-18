import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import GlobalStyle from './style/global_style'
const root = document.getElementById('portfolio')

ReactDOM.render(
  <div>
    <GlobalStyle/>
    <App />
  </div>,
  root
)
