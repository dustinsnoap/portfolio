//imports
import React, {Component} from 'react'
//components
//assets
import Github from '../../assets/github'
import LinkedIn from '../../assets/linkedin'
import Email from '../../assets/email'
//style
import Wrapper from './style/'

class Aboutme extends Component {
    constructor() {
        super()
        this.state = {
            num_of_objects: 10,
            objects: [],
            skills: [
                {type: 'language', name: 'javascript'},
                {type: 'language', name: 'python'},
                {type: 'language', name: 'go'},
                {type: 'language', name: 'c++'},
                {type: 'language', name: 'php'},
                {type: 'language', name: 'html'},
                {type: 'language', name: 'css'},
                {type: 'technology', name: 'react'},
                {type: 'technology', name: 'node'},
                {type: 'technology', name: 'postgresql'},
                {type: 'technology', name: 'sqlite'},
                {type: 'technology', name: 'django'},
                {type: 'technology', name: 'less'},
            ]
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
        this.draw_objects()
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
            ctx.font = `${size/(text.length*20)}vw arial`
            ctx.fillStyle = '#444'
        } else {
            ctx.font = `${size/(text.length*10)}vw arial`
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
        <Wrapper className={this.props.classes}>
            <div className='content'>
                <h1 className='page-title'>About</h1>
                <div className='greeting'>
                    <h1>Greetings!</h1>
                    <div className='social'>
                        <a href='https://github.com/dustinsnoap'><Github /></a>
                        <a href='https://www.linkedin.com/in/dustinsnoap/'><LinkedIn /></a>
                        <a href='mailto:dustinsnoap@gmail.com'><Email /></a>
                    </div>
                </div>
                <div className='blurb'>
                    <p>My name is <span className='highlight'>Dustin Snoap</span>.</p>
                    <p>Full Stack Engineer with experience communicating between, planning, and organizing technical and non-technical teams.</p>
                    <p>Passionate about finding new and innovative solutions to complicated problems.</p>
                    <p>Proven leader and mentor through my work as a Team Lead and Section Lead.</p>
                    <p>Skilled in JavaScript, React, Python, Django, with experience in many other languages.</p>
                    <p>Comfortable working on diverse teams in fast-paced and ambiguous environments, while being able to function autonomously.</p>
                    <p>A proactive self-starter with a passion for learning and growth.</p>
                </div>
                <canvas className='skills'></canvas>
            </div>
        </Wrapper>
}

export default Aboutme