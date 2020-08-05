//imports
import React from 'react'
import ReactDOM from 'react-dom'

//views
import Portfolio from './views/portfolio'

//style
import GlobalStyle from './style/global'
//init

ReactDOM.render(
    <React.Fragment>
        <GlobalStyle/>
        <Portfolio />
    </React.Fragment>,
    root
)
