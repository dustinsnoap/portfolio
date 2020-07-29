//imports
import React from 'react'
//components
//assets
import Github from '../../assets/github'
import LinkedIn from '../../assets/linkedin'
import Email from '../../assets/email'
//style
import Wrapper from './style/'

const Contact = props =>
    <Wrapper className={props.classes}>
        <h1 className='page-title'>Contact</h1>
        <div className='content'>
            <h2 className='blurb'>A full commitment's what I'm thinking of.</h2>
            <a href='https://www.linkedin.com/in/dustinsnoap/'><LinkedIn /></a>
            <a href='https://github.com/dustinsnoap'><Github /></a>
            <a href='mailto:dustinsnoap@gmail.com'><Email /></a>
        </div>
    </Wrapper>

export default Contact