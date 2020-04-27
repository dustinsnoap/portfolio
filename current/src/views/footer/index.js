import React, {Component} from 'react'

import Wrapper from './style'

class Footer extends Component {
    constructor(props) {
        super()
        this.state = {
            current_page: 'projects',
            pages: ['intro','projects','about','contact']
        }
    }
    update_page = name => {
        this.setState(() => ({
            current_page: name
        }))
    }
    render = () =>
        <Wrapper className='footer'>
            <nav className='page-slider'>
                {this.state.pages.map((name, idx) =>
                    <React.Fragment key={idx}>
                        <div className={`page${this.state.current_page===name ? ' active' : ''}`} onClick={() => this.update_page(name)}>
                            
                            <span></span>
                        </div>
                        {idx < this.state.pages.length-1 ?  <div className='divider'></div> : null}
                    </React.Fragment>
                )}
            </nav>
        </Wrapper>
}

export default Footer