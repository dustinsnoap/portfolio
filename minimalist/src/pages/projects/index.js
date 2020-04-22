//imports
import React, {Component} from 'react'
//components
//assets
//style
import Wrapper from './style'

class Projects extends Component {
    constructor(props) {
        super()
        this.state = {
            projects: [
                {name: 'Legends of Alabastra', img: './img/legends_of_alabastra.png', link: '', tech: ['Python', 'Django', 'Pusher', 'PostgrSQL', 'React', 'Redux', 'Canvas'], description: 'Sea of Thieves is a 2018 action-adventure game developed by Rare and published by Microsoft Studios. The player assumes the role of a pirate who completes voyages from different trading companies in order to become the ultimate pirate legend. Sea of Thieves is a first-person multiplayer game in which players cooperate with each other to explore an open world via a pirate ship. The game is described as a "shared world adventure game", which means groups of players will encounter each other regularly during their adventures.'},
                {name: 'Workout Tracker', img: '', link: '', tech: ['React', 'Redux', 'PostgreSQL', 'PWA', 'Auth0'], description: 'flkf sd sdf sdf sd fsd fsd f sdf sdf sdf sd ds.'}
            ]
        }
    }
    render = () =>
        <Wrapper className='projects'>
            <article className='project'>
                <h1 className='name'>Legends of Alabastra</h1>
                <section className='description'>
                    <p>{this.state.projects[0].description}</p>
                </section>
                <img className='preview' src={this.state.projects[0].img} alt='preview'/>
                <section className='tech-stack'>
                    {this.state.projects[0].tech.map(tech =>
                        <p className='tech' key={tech}>{tech}</p>
                    )}
                </section>
            </article>
        </Wrapper>
}

export default Projects