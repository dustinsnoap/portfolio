import React, {Component} from 'react'

import Book from '../book'
import Header from '../header'
import Footer from '../footer'
//pages

import Wrapper from './style'

class Portfolio extends Component {
    constructor() {
        super()
        this.state = {
            current_page: 0,
            pages: ['intro','aboutme','projects','contact']
        }
    }
    componentDidMount() {
        this.update_screen_orientation()
        window.addEventListener('resize',this.update_screen_orientation)
    }
    change_page = page_num => {
        this.setState(() => ({current_page: page_num}))
    }
    update_screen_orientation = () => {
        const portfolio_element = document.querySelector('.portfolio')
        const screen_type = this.get_screen_type()
        if(screen_type === 'landscape') {
            portfolio_element.classList.remove('portrait')
            portfolio_element.classList.add('landscape')
        } else {
            portfolio_element.classList.remove('landscape')
            portfolio_element.classList.add('portrait')
        }
    }
    get_screen_type = () => {
        return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
    }
    render = () =>
        <Wrapper className='portfolio'>
            <Header />
            <Book pages={this.state.pages} current_page={this.state.current_page}/>
            <Footer pages={this.state.pages} change_page={this.change_page} current_page={this.state.current_page}/>
        </Wrapper>
}

export default Portfolio
