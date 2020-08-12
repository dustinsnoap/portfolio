//imports
import React, {Component} from 'react'
//components
import Project from './components/project'
import Experience from './components/experience'
import Education from './components/education'
import ContactItem from './components/contact'
//assets
import Logo from '../../assets/logo'
//data
import data_about from '../../data/about'
import data_contact from '../../data/contact'
import data_projects from '../../data/projects'
import data_experience from '../../data/experience'
import data_education from '../../data/education'
//style
import Wrapper from './style/'

class Resume extends Component {
    constructor() {
        super()
        this.state = {
            about: data_about,
            data: {
                about: data_about,
                contact: data_contact,
                projects: data_projects,
                experience: data_experience,
                education: data_education
            },
        }
    }
    render = () =>
        <Wrapper className={`page resume ${this.props.classes}`}>
            <h1 className='page-title'>Resume</h1>
            <div className='page-content'>
                <div className='header'>
                    <Logo />
                    <h2 className='name'>
                        <span className='first'>{this.state.about.first_name}</span>
                        <span className='last'>{this.state.about.last_name}</span>
                    </h2>
                </div>
                <p className='summary'>{this.state.about.summary}</p>
                <div className='contact'>
                    <div className='info'>
                        <h3 className='title'>Get In Touch</h3>
                        {this.state.data.contact.general.map((item,idx) => <ContactItem key={idx} props={item} />)}
                    </div>
                    <div className='social'>
                        <h3 className='title'>Social Media</h3>
                        {this.state.data.contact.social.map((item,idx) => <ContactItem key={idx} props={item} />)}
                    </div>
                </div>
                <div className='content'>
                    <div className='group projects'>
                        <h3 className='title'>Projects</h3>
                        {this.state.data.projects.map(project => <Project key={project.name} props={project}/>)}
                    </div>
                    <div className='group experiences'>
                        <h3 className='title'>Experience</h3>
                        {this.state.data.experience.map((experience, idx) => <Experience key={idx} props={experience} />)}
                    </div>
                    <div className='group education'>
                        <h3 className='title'>Education</h3>
                        {this.state.data.education.map((education, idx) => <Education key={idx} props={education} />)}
                    </div>
                </div>
            </div>
        </Wrapper>
}

export default Resume