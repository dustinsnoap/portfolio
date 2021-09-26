//IMPORTS
import React from "react"

//STYLE
import Style from './style'

//ASSETS
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import email from '../../assets/email.png'

//DATA
const links = [
    {src: linkedin, alt: 'LinkedIn', href: 'https://www.linkedin.com/in/dustinsnoap/'},
    {src: github, alt: 'GitHub', href: 'https://github.com/dustinsnoap'},
    {src: email, alt: 'Email', href: 'mailto://dustinsnoap@gmail.com'}
]


//MODULE
const Contact = () =>
    <Style className='contact'>
        <div className='content'>
            <ul className='links'>
                {links.map(link =>
                    <li className='link' key={link.href}>
                        <a href={link.href}>
                            <img src={link.src} alt={link.alt} />
                        </a>
                    </li>   
                )}
            </ul>
            <div className='info'>
                <span>dustinsnoap@gmail.com</span>
                <span>© 2021 Dustin Snoap</span>
            </div>

        </div>
    </Style>

//EXPORTS
export default Contact