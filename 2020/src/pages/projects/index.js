//imports
import React, {Component} from 'react'
//components
import Project from './components/project'
// import Project from './project'
//assets
//data
import data_projects from '../../data/projects'
//style
import Wrapper from './style/'

class Projects extends Component {
    constructor(props) {
        super()
        this.state = {
            project_num: 0,
            current: 0,
            projects: data_projects,
            carousel: null,
        }
    }
    componentDidMount() {
        console.log('mounted')
        const carousel = setInterval(() => {
            let next = this.state.project_num+1
            if(next === this.state.projects.length) next = 0
            this.change_project(next)
        }, 22000)
        this.setState({carousel: carousel})
        //asdasda
    }
    // rand_between = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    change_project = num => this.setState({project_num: num})
    render = () =>
        <Wrapper className={`page projects ${this.props.classes}`}>
            <h1 className='page-title'>Projects</h1>
            <div className='content'>
                <Project {...this.state.projects[this.state.project_num]} idx={this.state.project_num} total={this.state.projects.length} _change_project={this.change_project}/>
            </div>
        </Wrapper>
}

export default Projects