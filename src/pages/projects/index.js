//imports
import React, {Component} from 'react'
//components
import Project from './components/project'
// import Project from './project'
//assets
//style
import Wrapper from './style/'

class Projects extends Component {
    constructor(props) {
        super()
        this.state = {
            project_num: 0,
            mouse_pos: {x: 0, y: 0},
            current: 0,
            projects: [
                {name: 'Legends of Alabastra', year: 2020, img: './img/legends_of_alabastra.png', code: 'https://github.com/Legends-of-Alabastra-ReBorn/LOAR-BE', link: 'https://hungry-spence-d1d30a.netlify.app/', tech: ['Python', 'Django', 'Pusher', 'PostgrSQL', 'React', 'Redux', 'Canvas']},
                {name: 'LiftQuest', year: 2019, img: './img/liftquest.png', code: 'https://github.com/workout-tracktor/labspt4-workout-tracker-BE', link: 'https://www.liftquestapp.com/', tech: ['React', 'Redux', 'NodeJS', 'PostgreSQL', 'PWA', 'Auth0']},
                {name: 'Radland', year: 2020, img: './img/legends_of_alabastra.png', code: '', link: '', tech: ['Python', 'Javascript', 'NodeJS', 'PostgrSQL', 'React']},
                {name: 'MyDish', year: 2019, img: './img/mydish.png', code: 'https://github.com/Lambda-School-Labs/mydish-be', link: 'https://play.google.com/store/apps/details?id=com.lambdaschool.mydish', tech: ['Javascript', 'NodeJS', 'PostgrSQL', 'React Native', 'Redux', 'ExpressJS', 'Jest']},
                {name: 'Thursday', year: 2019, img: './img/thursday.png', code: 'https://github.com/build-pt-team-builder/frontend', link: '', tech: ['Python', 'Javascript', 'NodeJS', 'PostgrSQL', 'React']},
            ],
            carousel: null,
        }
    }
    componentDidMount() {
        console.log('mounted')
        const carousel = setInterval(() => {
            let next = this.state.project_num+1
            if(next === this.state.projects.length) next = 0
            this.change_project(next)
        }, 4200)
        this.setState({carousel: carousel})
    }
    // rand_between = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    change_project = num => this.setState({project_num: num})
    render = () =>
        <Wrapper className={this.props.classes}>
            <div className='content'>
                <h1 className='page-title'>Projects</h1>
                <Project {...this.state.projects[this.state.project_num]} idx={this.state.project_num} total={this.state.projects.length} _change_project={this.change_project}/>
            </div>
        </Wrapper>
}

export default Projects