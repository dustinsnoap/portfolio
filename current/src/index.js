//imports
import React from 'react'
import ReactDOM from 'react-dom'

//views
import Header from './views/header'
import Footer from './views/footer'
import Book from './views/book'
//style
import GlobalStyle from './style/global'
//init

ReactDOM.render(
    <div className='portfolio'>
        <GlobalStyle/>
        <Book />
        <Header />
        <Footer />
    </div>,
    root
)
