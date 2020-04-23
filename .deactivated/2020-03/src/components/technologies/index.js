//imports
import React, {Component} from 'react'
//components
//scripts
//style
import Wrapper from './style'

class Skills extends Component {
    constructor(props) {
        super()
        this.state = {
            height: document.querySelector('.skills'),
            skills: {
                html: 95,
                css: 90,
                javascript: 85,
                python: 90,
                golang: 30,
                react: 70,
                php: 25,
                one: 45,
                two: 60,
            }
        }
    }
    componentDidMount() {
        console.log(this.state.height)
        // const element = document.querySelector('.skills .list')
        // console.log(element, element.offsetHeight)
        // let height = element.offsetHeight / (Object.keys(this.state.skills).length * 2 - 1)
        // console.log('height', height)
    }
    render() {
        return (
            <Wrapper className='skills'>
                <div className='fingerguns'><h1>farts</h1></div>
                <div className='list'>
                    {Object.keys(this.state.skills).map((skill, idx) =>
                        <div className='bar' style={{height: '38px', animationDelay: `${idx*200}ms`}} key={skill}>
                            <figure className='fill' style={{width: `${this.state.skills[skill]}%`}}></figure>
                            <span className='tag'>{skill.toUpperCase()}</span>
                            <span className='level'>{this.state.skills[skill]}%</span>
                        </div>
                    )}
                </div>
            </Wrapper>
        )
    }
}

export default Skills