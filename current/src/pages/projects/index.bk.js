//imports
import React, {Component} from 'react'
//components
// import Project from './project'
//assets
//style
import Wrapper from './style'

class Projects extends Component {
    constructor(props) {
        super()
        this.state = {
            project_num: 0,
            mouse_pos: {x: 0, y: 0},
            current: 0,
            projects: [
                {name: 'Legends of Alabastra', img: './img/legends_of_alabastra.png', link: '', tech: ['Python', 'Django', 'Pusher', 'PostgrSQL', 'React', 'Redux', 'Canvas']},
                {name: 'Workout Tracker', img: './img/legends_of_alabastra.png', link: '', tech: ['React', 'Redux', 'PostgreSQL', 'PWA', 'Auth0']},
                {name: 'Radland', img: './img/legends_of_alabastra.png', link: '', tech: ['Python', 'Javascript', 'NodeJS', 'PostgrSQL', 'React']},
                {name: 'MyDish', img: './img/legends_of_alabastra.png', link: '', tech: ['Python', 'Javascript', 'NodeJS', 'PostgrSQL', 'React']},
                {name: 'Thursday', img: './img/legends_of_alabastra.png', link: '', tech: ['Python', 'Javascript', 'NodeJS', 'PostgrSQL', 'React']},
            ]
        }
    }
    componentDidUpdate
    change_project = num => {
        this.setState(prev => {
            let current = prev.current + num
            if(current === prev.projects.length) current = 0
            if(current < 0) current = prev.projects.length - 1
            return {current: current}
        })
    }
    test = () => {
        const el = document.querySelector('.project-name-container')
        const el2 = document.querySelector('.project-name')
        el.classList.add('out')
        setTimeout(() => {
            el2.innerHTML = this.state.projects[this.state.current].name
            // el2.innerHTML = ""
        }, 210)
        setTimeout(() => {
            el.classList.remove('out')
            // el.classList.remove('out')
        }, 400)
    }
    get_position_object = idx => {return {idx: idx, current: this.state.project_num, total: this.state.projects.length}}
    render = () =>
        <Wrapper className={this.props.classes}>
            <div className='controller'>
                <figure className='dec' onClick={() => {
                    this.change_project(1)
                    this.test()
                }
                }></figure>
                <div className='counter'>
                    <div className='current-container'>
                        <div className='current' style={{transform: `translateY(-${this.state.current}00%`}}>
                            {this.state.projects.map((_,i) => <span key={i}>{i+1}</span>)}
                        </div>
                    </div>
                    <span className='spacer'>\</span>
                    <span>{this.state.projects.length}</span>
                </div>
                <figure className='inc' onClick={() => {
                    this.change_project(-1)
                    this.test()
                }}></figure>
            </div>
            <div className='project'>
                <div className='project-list-container'>
                    <div className='project-list' style={{transform: `translateY(-${this.state.current}00%`}}>
                        {this.state.projects.map((project,idx) => <img alt='project preview' key={project.name} src={project.img}/>)}
                    </div>
                </div>
                <div className='project-name-container'>
                    <h1 className='project-name'>11111111</h1>
                </div>
                <div className='tech-stack'>
                    {this.state.projects[this.state.current].tech.map(tech => <span key={tech} className='tech'>{tech}</span>)}
                </div>
            </div>
        </Wrapper>
}

export default Projects