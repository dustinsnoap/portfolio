//imports
import React, {Component} from 'react'
//components
//assets
//style
import Wrapper from './style'

class Skills extends Component {
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
        this.draw_object({x: 20, y: 100}, 3, '#08F', 0, 'JS', 'square')
        this.draw_object({x: 21, y: 97}, 2, '#222', 0, 'x')
        this.draw_object({x: 23, y: 100}, 2.5, '#222', 0, '', 'circle')
        this.draw_object({x: 26, y: 100}, 2, '#222', 0, '', 'circle')
        this.draw_object({x: 27, y: 98.5}, 3.5, '#222', 30, 'x', 'square')
        this.draw_object({x: 30, y: 100}, 2, '#222', 0, 'x', 'square')
        this.draw_object({x: 31.25, y: 98}, 3, '#08F', 20, 'C++', 'square')
        this.draw_object({x: 34.75, y: 97}, 3.5, '#222', 0, 'x', 'square')
        this.draw_object({x: 36, y: 100}, 3, '#08F', 0, 'Python', 'square')
        this.draw_object({x: 38.25, y: 96.5}, 2.5, '#222', 0, '', 'circle')
        this.draw_object({x: 38.25, y: 94}, 1.5, '#222', 0, '', 'circle')
        this.draw_object({x: 39.25, y: 100}, 3.5, '#222', 0, 'x', 'square')
        this.draw_object({x: 40, y: 94.25}, 1.25, '#222', 0, '', 'circle')
        this.draw_object({x: 41, y: 96.5}, 3.5, '#222', 15, 'x', 'square')
        this.draw_object({x: 44, y: 100}, 3, '#08F', 0, 'css', 'square')
        this.draw_object({x: 44.5, y: 97}, 2.5, '#222', 0, 'x', 'square')
        this.draw_object({x: 47.75, y: 97.5}, 3, '#08F', 0, 'react', 'square')
        this.draw_object({x: 48, y: 100}, 2.5, '#222', 0, 'x', 'square')
        this.draw_object({x: 50.75, y: 97}, 2, '#222', 0, '', 'circle')
        this.draw_object({x: 52, y: 100}, 3, '#08F', 0, 'php', 'square')
        this.draw_object({x: 53, y: 97}, 3, '#08F', 0, 'go', 'square')
        this.draw_object({x: 55.25, y: 100}, 3, '#08F', 0, 'mysql', 'square')
        this.draw_object({x: 57.5, y: 97.25}, 3, '#08F', 20, 'postgres', 'square')
        this.draw_object({x: 58.75, y: 100}, 2.25, '#222', 0, 'x', 'square')
        this.draw_object({x: 61.25, y: 100}, 1.5, '#222', 0, '', 'circle')
        this.draw_object({x: 63.5, y: 100}, 2.25, '#222', 0, '', 'circle')
        this.draw_object({x: 66, y: 100}, 3, '#08F', 0, 'less', 'square')
        this.draw_object({x: 69.25, y: 100}, 1.75, '#222', 0, '', 'circle')
        this.draw_object({x: 71.25, y: 100}, 1.5, '#222', 0, 'x', 'square')
        this.draw_object({x: 71.5, y: 98.5}, 3, '#08F', 10, 'html', 'square')
        this.draw_object({x: 73, y: 100}, 1.25, '#222', 0, '', 'circle')
        this.draw_object({x: 74.75, y: 100}, 3, '#08F', 0, 'node', 'square')
        this.draw_object({x: 76, y: 97}, 1.5, '#222', 0, '', 'circle')
        this.draw_object({x: 78, y: 100}, 2, '#222', 0, '', 'circle')
        
    }
    render = () =>
        <Wrapper className={this.props.classes}>
            <div className='words'>
                <h1>Greetings!</h1>
                <div className='life-story'>
                    <p>My name is not Gannon Darcy.</p>
                    <p>Full Stack Engineer with experience bridging the gap to help technical and non-technical teams communicate, plan, and organize in order to work exceptionally well together.</p>
                    <p>Passionate about Cyber Security.</p>
                    <p>Proven leadership in training others how to program through work as a Teaching Assistant and Team Lead.</p>
                    <p>Main languages are JavaScript and Python and there frameworks in React and Django.</p>
                    <p>Comfortable working on diverse teams in fast-paced and ambiguous environments, while being able to function autonomously.</p>
                    <p>A proactive self-starter with a passion for learning and growth.</p>

                </div>
            </div>
            <canvas className='skills'></canvas>
        </Wrapper>
}

export default Skills