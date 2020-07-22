//imports
import React, {Component} from 'react'
//pages
import Intro from '../../pages/intro'
import Aboutme from '../../pages/aboutme'
import Projects from '../../pages/projects'
import Contact from '../../pages/contact'
import Skills from '../../pages/skills'
//assets
//style
import Wrapper from './style'

//this_page: the name of the current page
//current_page: index of current page in pages
//pages: list of all pages
const get_page_classes = (this_page, current_page, pages) => {
    if(this_page===pages[current_page]) return `${this_page} current`
    if(current_page===0 && this_page === pages[pages.length-1]) return `${this_page} left`
    if(current_page===pages.length-1 && this_page===pages[0]) return `${this_page} right`
    const this_page_index = pages.indexOf(this_page)
    if(this_page_index < current_page) return `${this_page} left`
    else return `${this_page} right`
}

class Book extends Component {
    constructor(props) {
        super()
        this.state = {
            pages: {
                intro: Intro,
                about: Aboutme,
                projects: Projects,
                contact: Projects,
            }
        }
    }
    componentDidUpdate(prev)  {

    }
    render = () => 
        <Wrapper className='book'>
            <Intro classes={get_page_classes('intro', this.props.current_page, this.props.pages)}/>
            <Aboutme classes={get_page_classes('aboutme', this.props.current_page, this.props.pages)}/>
            <Skills />
            <Projects classes={get_page_classes('projects', this.props.current_page, this.props.pages)}/>
            <Contact classes={get_page_classes('contact', this.props.current_page, this.props.pages)}/>
        </Wrapper>
}

export default Book