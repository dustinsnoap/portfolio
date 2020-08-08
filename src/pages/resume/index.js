//imports
import React, {Component} from 'react'
//components
import Logo from '../../assets/logo'
import Email from '../../assets/email'
import Github from '../../assets/github'
import Linkedin from '../../assets/linkedin'
//data
import Projects from './data/projects'
import Experience from './data/experience'
import Education from './data/education'
//style
import Wrapper from './style/'

class Resume extends Component {
    constructor() {
        super()
        this.state = {
            projects: Projects,
            experience: Experience,
            education: Education
        }
    }
    render = () =>
        <Wrapper className={`page resume ${this.props.classes}`}>
            {console.log(this.state.projects)}
            <h1 className='page-title'>Resume</h1>
            <div className='page-content'>
                <div className='header'>
                    <Logo />
                    <h2 className='name'>
                        <span className='first'>Dustin</span>
                        <span className='last'>Snoap</span>
                    </h2>
                </div>
                <p className='summary'>
                    Software Engineer with a talent for improving code and making it performant.
                </p>
                <div className='contact'>
                    <div className='info'>
                        <h3 className='title'>Get In Touch</h3>
                        <Logo />
                        <span className='item'>616-443-0999</span>
                        <Email />
                        <span className='item'>dustinsnoap@gmail.com</span>
                    </div>
                    <div className='social'>
                        <h3 className='title'>Social Media</h3>
                        <Github />
                        <span className='item'>/dustinsnoap</span>
                        <Linkedin />
                        <span className='item'>/dustinsnoap/</span>
                    </div>
                </div>
                <div className='content'>
                    <div className='projects'></div>
                    <div className='experience'></div>
                    <div className='education'></div>
                </div>
            </div>
        </Wrapper>
}

export default Resume