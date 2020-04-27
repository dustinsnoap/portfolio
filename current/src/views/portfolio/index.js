import React, {Component} from 'react'

import Book from '../book'
import Header from '../header'
import Footer from '../footer'

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
        <main className='portfolio'>
            <Book />
            <Header />
            <Footer pages={this.state.pages} change_page={this.change_page} current_page={this.state.current_page}/>
        </main>
}

export default Portfolio