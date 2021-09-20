//imports
import React, {Component} from 'react'
import SVG from 'react-inlinesvg'
//components
//assets
//data
import data_about from '../../data/about'
import data_contact from '../../data/contact'
//style
import Wrapper from './style/'

class Aboutme extends Component {
    constructor() {
        super()
        this.state = {
            num_of_objects: 10,
            objects: [],
            about: data_about,
            contact: data_contact
        }
    }
    componentDidMount() {
        const canvas = document.querySelector('.aboutme .skills')
        const ctx = canvas.getContext('2d')
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        this.setState({
            canvas: canvas,
            ctx: ctx
        })
        window.addEventListener('resize', this.draw_objects())
        // this.draw_objects()
    }
    update_canvas_size = () => {
        this.setState(prev => {
            prev.canvas.width = prev.canvas.offsetWidth
            prev.canvas.height = prev.canvas.offsetHeight
            return {canvas: prev.canvas}
        })
    }
    rand_between = (min,max) => Math.random() * (max - min) + min
    draw_object = (position, size, color, rotation, text, shape) => {
        const canvas = document.querySelector('.aboutme .skills')
        const ctx = canvas.getContext('2d')
        position.x = canvas.width * (position.x/100)
        position.y = canvas.height - (1-position.y/100)*canvas.width
        size *= canvas.width/100
        ctx.save()
        
        ctx.translate(position.x+size/2, position.y-size/2)
        ctx.fillStyle = color
        if(shape === 'circle') { //draw circle
            ctx.beginPath()
            ctx.arc(0,0,size/2,0,2*Math.PI)
            ctx.fill()
        } else { //draw box
            ctx.rotate(rotation*Math.PI/180)
            ctx.fillRect(-size/2,size/2,size,-size)
        }
        //write text
        if(text.length <= 1) {
            ctx.font = `${size/(text.length*15)}vh arial`
            ctx.fillStyle = '#444'
        } else {
            ctx.font = `${size/(text.length*7.5)}vh arial`
            ctx.fillStyle = '#111'
        }
        ctx.fillText(text, 0, 0)
        ctx.restore()
    }
    draw_objects = () => {
        this.draw_object({x: 10, y: 100}, 9, '#08F', 0, 'JavaScript', 'square')
        this.draw_object({x: 14.5, y: 91}, 2.5, '#222', 0, '', 'circle')
        this.draw_object({x: 17, y: 91}, 3, '#222', 0, 'x')
        this.draw_object({x: 19, y: 100}, 5, '#222', 0, '', 'circle')
        this.draw_object({x: 24, y: 100}, 3, '#222', 0, '', 'circle')
        this.draw_object({x: 24.5, y: 97.25}, 5, '#222', 20, 'x', 'square')
        this.draw_object({x: 29, y: 100}, 3, '#222', 0, 'x', 'square')
        this.draw_object({x: 30, y: 97}, 5, '#08F', 15, 'Python', 'square')
        this.draw_object({x: 33, y: 100}, 2.5, '#222', 0, 'x', 'square')
        this.draw_object({x: 35.25, y: 97}, 3, '#222', 0, 'x', 'square')
        this.draw_object({x: 36, y: 94}, 2, '#222', 0, '', 'circle')
        this.draw_object({x: 36.5, y: 100}, 3, '#08F', 0, 'C++', 'square')
        this.draw_object({x: 39.75, y: 100}, 3.5, '#222', 0, 'x', 'square')
        this.draw_object({x: 38.25, y: 96.5}, 2, '#222', 0, '', 'circle')
        this.draw_object({x: 38.75, y: 94.75}, 3.5, '#222', 0, '', 'circle')
        this.draw_object({x: 42, y: 96.5}, 2.75, '#222', 10, 'x', 'square')
        this.draw_object({x: 44.75, y: 100}, 3, '#08F', 0, 'php', 'square')
        this.draw_object({x: 45, y: 97}, 2.5, '#222', 0, 'x', 'square')
        this.draw_object({x: 49, y: 100}, 2.5, '#222', 0, 'x', 'square')
        this.draw_object({x: 48, y: 97.5}, 4, '#08F', 0, 'node', 'square')
        this.draw_object({x: 54, y: 100}, 5, '#08F', 0, 'react', 'square')
        this.draw_object({x: 59.5, y: 100}, 4, '#08F', 0, 'html', 'square')
        this.draw_object({x: 55, y: 95}, 4, '#222', 0, 'x', 'square')
        this.draw_object({x: 52, y: 95}, 3, '#222', 0 , '', 'circle')
        this.draw_object({x: 64, y: 100}, 3, '#222', 0, 'x', 'square')
        this.draw_object({x: 63.5, y: 96.5}, 3, '#08F', 25, 'css', 'square')
        this.draw_object({x: 68, y: 98.5}, 7, '#08F', -30, 'postgres', 'square')
        this.draw_object({x: 74, y: 100}, 3, '#222', 0, '', 'circle')
        this.draw_object({x: 85, y: 100}, 5, '#08F', 0, 'mysql', 'square')
        this.draw_object({x: 77, y: 100}, 2, '#08F', 0, 'go', 'square')
        this.draw_object({x: 79.5, y: 100}, 3, '#222', 0, 'x', 'square')
        this.draw_object({x: 77.5, y: 97.5}, 2, '#222', -30, 'x', 'square')
        this.draw_object({x: 75.5, y: 96}, 3, '#222', 0, '', 'circle')
        this.draw_object({x: 74.5, y: 93.5}, 2, '#222', 0, '', 'circle')
        this.draw_object({x: 80.75, y: 96.5}, 4, '#08F', 130, 'less', 'square')
        this.draw_object({x: 85.25, y: 94.5}, 3, '#222', 30, 'x', 'square')
    }
    render = () =>
        <Wrapper className={`page aboutme ${this.props.classes}`}>
            <h1 className='page-title'>About</h1>
            <div className='content'>
                <h1 className='subtitle'>Greetings!</h1>
                <div className='social'>
                    {this.state.contact.social.map((social, idx) => 
                        <a key={idx} href={social.link}><SVG src={social.icon} /></a>
                    )}
                    <a href={`mailto:${this.state.contact.general[1].value}`}><SVG src={this.state.contact.general[1].icon}/></a>
                </div>
                <div className='blurb'>
                    <p>My name is <span className='highlight'>{this.state.about.first_name} {this.state.about.last_name}</span>.</p>
                    {this.state.about.description.map((p, idx) =>
                        <p key={idx}>{p}</p>
                    )}
                </div>
                <div className='technical'>
                    <h3>Technical</h3>
                    {this.state.about.skills.filter(skill => skill.type === 'language' || skill.type === 'technology').map(skill =>
                        <span key={skill.name} className='skill'>{skill.name}</span>   
                    )}
                </div>
                <div className='essential'>
                    <h3>Essential</h3>
                    {this.state.about.skills.filter(skill => skill.type === 'essential').map(skill =>
                        <span key={skill.name} className='skill'>{skill.name}</span>   
                    )}
                </div>
                <canvas className='skills'></canvas>
            </div>
        </Wrapper>
}

export default Aboutme