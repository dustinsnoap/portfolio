//imports
import React, {Component} from 'react'
//pages
import Intro from '../../pages/intro'
import Projects from '../../pages/projects'
//assets
//style
import Wrapper from './style'

class Book extends Component {
    constructor(props) {
        super()
        this.state = {
            page: 0,
            total_pages: 2,
        }
    }
    click = () => {
        this.setState(prev => {
            prev.page++
            if(prev.page === prev.total_pages) prev.page = 0
            return {
                page: prev.page
            }
        })
    }
    render = () =>
        <Wrapper className='book'
            onClick={() => this.click()}
            // style={{transform: `translateX(-${this.state.page*100}vw)`}}
            style={{transform: `translateX(-100vw)`}}
            >
            <Intro />
            <Projects />
        </Wrapper>
}

export default Book