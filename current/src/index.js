//imports
import React from 'react'
import ReactDOM from 'react-dom'

//views
import HUD from './views/hud'
import Book from './views/book'
//style
import GlobalStyle from './style/global'
//init

ReactDOM.render(
    <div className='portfolio'>
        <GlobalStyle/>
        <HUD />
        <Book />
    </div>,
    root
)
