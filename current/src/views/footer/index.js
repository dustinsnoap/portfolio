import React, {Component} from 'react'

import Wrapper from './style'

class Footer extends Component {
    dec = () => {
        if(this.props.current_page-1 < 0) this.props.change_page(this.props.pages.length-1)
        else this.props.change_page(this.props.current_page-1)
    }
    inc = () => {
        if(this.props.current_page === this.props.pages.length-1) this.props.change_page(0)
        else this.props.change_page(this.props.current_page+1)
    }
    render = () =>
        <Wrapper>
            <nav className='page-slider'>
                <div className='back' onClick={() => this.dec()}></div>
                {this.props.pages.map((name, idx) =>
                    <React.Fragment key={idx}>
                        <div className={`page${this.props.current_page===idx ? ' active' : ''}`} onClick={() => this.props.change_page(idx)}>
                            <span></span>
                        </div>
                        {idx < this.props.pages.length-1 ?  <div className='divider'></div> : null}
                    </React.Fragment>
                )}
                <div className='forward' onClick={() => this.inc()}></div>
            </nav>
        </Wrapper>
}

export default Footer