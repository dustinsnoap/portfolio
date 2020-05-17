//imports
import React, {Component} from 'react'
//pages
import Intro from '../../pages/intro'
import Skills from '../../pages/skills'
import Projects from '../../pages/projects'
import Contact from '../../pages/contact'
//assets
//style
import Wrapper from './style'

// const get_page_classes = (this_page, current_page, pages) => {
//     const previous_page = current_page === 0 ? pages.length-1 : current_page-1
//     const next_page = current_page===pages.length-1 ? 0 : current_page+1
//     if(this_page === pages[current_page]) return `${this_page} current`
//     if(this_page === pages[previous_page]) return `${this_page} previous`
//     if(this_page === pages[next_page]) return `${this_page} next`
//     return this_page
// }

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
                projects: Projects,
                about: Intro,
                contact: Projects,
            }
        }
    }
    componentDidUpdate(prev)  {

    }
    render = () => 
        <Wrapper className='book'>
            <Intro classes={get_page_classes('intro', this.props.current_page, this.props.pages)}/>
            <Projects classes={get_page_classes('projects', this.props.current_page, this.props.pages)}/>
            <Skills classes={get_page_classes('skills', this.props.current_page, this.props.pages)}/>
            <Contact classes={get_page_classes('contact', this.props.current_page, this.props.pages)}/>
        </Wrapper>
}

export default Book