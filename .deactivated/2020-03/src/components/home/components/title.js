import React, {Component} from 'react'

class Title extends Component {
    constructor(props) {
        super()
        this.state = {
            title: props.title,
            subtitles: props.subtitles,
            subtitle_idx: 0,
            characters: props.characters,
            chance: props.chance,
            fps: props.fps,
        }
    }
    componentDidMount() { 
        this.setState(() => {return {
            title_interval_key: setInterval(() => {
                let title_element = document.querySelector('.home .title h1')
                title_element.innerText = this.glitch(title_element.innerText, this.state.title)
            }, 1000/this.state.fps)
        }})
        this.setState(() => {return {subtitle_idx: this.rand_int(0, this.state.subtitles.length-1)}})
        this.subtitle_test()
    }
    componentWillUnmount() {
        clearInterval(this.state.title_interval_key)
        clearInterval(this.state.subtitle_interval_key)
    }
    subtitle_test = (fps=false) => {
        if(!fps) fps = this.state.fps
        let element = document.querySelector('.home .title h2')
        element.innerText = this.glitch(element.innerText, this.state.subtitles[this.state.subtitle_idx])
        if(element.innerText.toUpperCase() === this.state.subtitles[this.state.subtitle_idx].toUpperCase()) {
            this.setState(() => {return {subtitle_idx: this.rand_int(0, this.state.subtitles.length-1)}})
            fps = .5
        }
        setTimeout(() => this.subtitle_test(), 1000/fps)
    }
    rand_int = (min, max) => Math.floor(Math.random()*(max-min)+min)
    random_char = () => this.state.characters[Math.floor(Math.random()*this.state.characters.length)]
    glitch = (string, target) => {
        string = [...string.toUpperCase()]
        target = [...target.toUpperCase()]
        while(string.length > target.length) string.pop()
        for(let i=0; i<target.length; i++) {
            if(!this.rand_int(0,25/this.state.chance)) string[i] = this.random_char()
            if(target[i] === ' ') string[i] = ' '
            if(string[i] === target[i]) continue
            if(!this.rand_int(0,1/this.state.chance)) string[i] = target[i]
            else string[i] = this.random_char()
        }
        return string.join('')
    }
    render = () => 
        <div className='title'>
            <h1>123456789</h1>
            <h2>123456789</h2>
        </div>
}

export default Title