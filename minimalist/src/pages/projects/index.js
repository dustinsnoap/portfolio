//imports
import React, {Component} from 'react'
//components
import Project from './project'
//assets
//style
import Wrapper from './style'

class Projects extends Component {
    constructor(props) {
        super()
        this.state = {
            project_num: 0,
            mouse_pos: {x: 0, y: 0},
            projects: [
                {name: 'Legends of Alabastra', img: './img/legends_of_alabastra.png', link: '', tech: ['Python', 'Django', 'Pusher', 'PostgrSQL', 'React', 'Redux', 'Canvas'], description: 'Sea of Thieves is a 2018 action-adventure game developed by Rare and published by Microsoft Studios. The player assumes the role of a pirate who completes voyages from different trading companies in order to become the ultimate pirate legend. Sea of Thieves is a first-person multiplayer game in which players cooperate with each other to explore an open world via a pirate ship. The game is described as a "shared world adventure game", which means groups of players will encounter each other regularly during their adventures.'},
                // {name: 'Workout Tracker', img: '', link: '', tech: ['React', 'Redux', 'PostgreSQL', 'PWA', 'Auth0'], description: 'flkf sd sdf sdf sd fsd fsd f sdf sdf sdf sd ds.'}
            ]
        }
    }
    componentDidUpdate
    test = num => {
        this.setState(prev => {
            let project_num = prev.project_num + num
            if(project_num === prev.projects.length) project_num = 0
            if(project_num < 0) project_num = prev.projects.length - 1
            return {project_num: project_num}
        })
    }
    render = () =>
        <Wrapper className='projects'>
            <aside className='controller'>
                <figure className='inc' onClick={() => this.test(1)}></figure>
                <figure className='dec' onClick={() => this.test(-1)}></figure>
            </aside>
            {this.state.projects.map(project => 
                <Project key={project.name} {...project}/>
            )}
        </Wrapper>
}

export default Projects