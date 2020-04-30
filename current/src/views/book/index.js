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
            pages: {
                intro: Intro,
                projects: Projects,
                about: Intro,
                contact: Projects,
            }
        }
    }
    componentDidUpdate(prev)  {
        // console.log('prev',prev.pages[prev.current_page], prev.current_page)
        // console.log('current',this.props.pages[this.props.current_page], this.props.current_page)
        const left_page_num = this.props.current_page === 0 ? this.props.pages.length-1 : this.props.current_page-1
        const right_page_num = this.props.current_page === this.props.pages.length-1 ? 0 : this.props.current_page+1 
        const left = this.props.pages[left_page_num]
        const right = this.props.pages[right_page_num]
        console.log('left', left, 'right', right)
    }
    render = () => 
        <Wrapper className='book'>
            <Intro translate={-this.props.current_page*100}/>
            <Projects translate={100-this.props.current_page*100} />
            <Intro translate={200-this.props.current_page*100} />
            <Projects translate={300-this.props.current_page*100}/>
        </Wrapper>
}

export default Book