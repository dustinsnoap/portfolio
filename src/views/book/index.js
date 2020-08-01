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
const get_class = (page_name, active_page, pages) => {
    const page_idx = pages.indexOf(page_name)
    if(active_page === page_idx) return 'current'
    return page_idx < active_page ? 'prev' : 'next'
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
            {/* {console.log(props)} */}
            <Intro classes={get_class('intro', this.props.current_page, this.props.pages)}/>
            <Aboutme classes={get_class('aboutme', this.props.current_page, this.props.pages)}/>
            <Skills />
            <Projects classes={get_class('projects', this.props.current_page, this.props.pages)}/>
            <Contact classes={get_class('contact', this.props.current_page, this.props.pages)}/>
        </Wrapper>
}

export default Book