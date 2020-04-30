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
            current_page: 1,
            pages: ['intro','projects','about','contact']
        }
    }
    change_page = page_num => {
        this.setState(() => ({
            current_page: page_num
        }))
    }
    render = () =>
        <Wrapper className='portfolio'>
            <Header />
            <Book pages={this.state.pages} current_page={this.state.current_page}/>
            <Footer pages={this.state.pages} change_page={this.change_page} current_page={this.state.current_page}/>
        </Wrapper>
}

export default Portfolio