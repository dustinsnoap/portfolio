//IMPORTS
import React from "react"

//ASSETS
import Avatar from '../../assets/avatar.png'

//STYLE
import Style from './style'

//MODULE
const Header = () =>
    <Style className='header'>
        <div className='content'>
            <div className='title'>
                <h1 className='name'>Dustin Snoap</h1>
                <h2 className='position'>Full Stack Web Developer</h2>
            </div>
            <div className='avatar'>
                <img src={Avatar} alt='avatar'/>
            </div>
            <div className='intro'>
                <p>Hello!</p>
                <p>
                    I am a web developer who specializes in<br/>
                    algorithms and server side applications.<br/>
                    In other words, I'm the guy behind the<br/>
                    curtain in Oz.
                </p>
            </div>
        </div>
    </Style>

//EXPORTS
export default Header