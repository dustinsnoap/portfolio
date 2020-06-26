//imports
import React, {Component} from 'react'
//components
// import Project from './project'
//assets
//style
import Wrapper from './style.js'

class Projects extends Component {
    constructor(props) {
        super()
        this.state = {
            project_num: 0,
            mouse_pos: {x: 0, y: 0},
            current: 0,
            projects: [
                {name: 'Legends of Alabastra', year: 2020, img: './img/legends_of_alabastra.png', link: 'https://hungry-spence-d1d30a.netlify.app/', tech: ['Python', 'Django', 'Pusher', 'PostgrSQL', 'React', 'Redux', 'Canvas']},
                {name: 'LiftQuest', year: 2019, img: './img/liftquest.png', link: 'https://www.liftquestapp.com/', tech: ['React', 'Redux', 'NodeJS', 'PostgreSQL', 'PWA', 'Auth0']},
                {name: 'Radland', year: 2020, img: './img/legends_of_alabastra.png', link: '', tech: ['Python', 'Javascript', 'NodeJS', 'PostgrSQL', 'React']},
                {name: 'MyDish', year: 2019, img: './img/mydish.png', link: 'https://play.google.com/store/apps/details?id=com.lambdaschool.mydish', tech: ['Javascript', 'NodeJS', 'PostgrSQL', 'React Native', 'Redux', 'ExpressJS', 'Jest']},
                {name: 'Thursday', year: 2019, img: './img/thursday.png', link: '', tech: ['Python', 'Javascript', 'NodeJS', 'PostgrSQL', 'React']},
            ]
        }
    }
    componentDidMount() {
        this.draw_preview_cover()
    }
    rand_between = (min, max) => Math.floor(Math.random() * max) + min
    draw_preview_cover = () => {
        // const parent = document.querySelector('.projects .preview')
        const canvas = document.querySelector('.projects .preview .cover')
        const ctx = canvas.getContext('2d')
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight

        const height = canvas.height
        const num_of_panels = 5
        const heights = []
        for(let i=0; i<num_of_panels; i++) heights.push(this.rand_between(5,25))
        const width = canvas.width/heights.length
        ctx.fillStyle = '#111'
        heights.forEach((h,i) => {
            ctx.fillRect(width*i,0,width,height/h)
            ctx.fillRect(width*(i+1)-width/50,0,width/25,height)
            ctx.fillRect(width*i,height,width,-height/h)
        })
    }
    change_project = num => this.setState({project_num: num})
    render = () =>
        <Wrapper className={this.props.classes}>
            <div className='container'>
                <div className='indicator'>
                {this.state.projects.map((_,idx) => 
                    <span key={idx}
                        className={this.state.project_num === idx ? 'current' : null}
                        onClick={() => this.change_project(idx)}>0{idx+1}
                    </span>
                )}
                </div>
                <div className='meta-container'>
                    <div className='name-container'>
                        <div className='name' style={{transform: `translatey(-${100*this.state.project_num}%)`}}>
                        {this.state.projects.map((project, idx) =>
                            <h1 key={idx}>{project.name}</h1>
                        )}
                        </div>
                    </div>
                    <div className='year-link'>
                        <div className='year'>
                            {/* <span className='title'>year:</span> */}
                            <span>{this.state.projects[this.state.project_num].year}</span>
                        </div>
                        {this.state.projects[this.state.project_num].link.length
                        ? <div className='link'>
                            <a href={this.state.projects[this.state.project_num].link}>Visit</a>
                        </div>
                        : null
                        }
                    </div>
                    <div className='tech-stack'>
                    {this.state.projects[this.state.project_num].tech.map((tech, idx) =>
                        <span key={idx}>{tech}</span>
                    )}
                    </div>
                </div>
                <div className='preview'>
                    <div className='image-container' style={{transform: `translatey(-${100*this.state.project_num}%)`}}>
                    {this.state.projects.map((project, idx) =>
                        <img key={idx} src={project.img} alt={project.name}/>)
                    }
                    {/* <div className='image-cover'></div> */}
                    </div>
                    <canvas className='cover'></canvas>
                </div>
            </div>
            
        </Wrapper>
}

export default Projects