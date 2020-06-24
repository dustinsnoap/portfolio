//imports
import React, {Component} from 'react'
//components
//assets
//style
import Wrapper from './style'

class Contact extends Component {
    constructor() {
        super()
        this.state = {
            page: 1,
            message: 'farts darts and more'
        }
    }
    componentDidMount() {
        document.addEventListener('keydown', this.prevent_tabbing)
    }
    change_page = num => {
        this.setState(prev => {return {page: prev.page+num}})
        document.querySelectorAll('.contact .step').forEach(node => node.classList.remove('inactive'))
        switch(this.state.page+num) {
            case 2:
                document.querySelector('.contact .question').parentNode.classList.add('inactive')
                document.querySelector('.contact .message').focus()
                break
            case 3:
                document.querySelector('.contact .question').parentNode.classList.add('inactive')
                document.querySelector('.contact .letter').parentNode.classList.add('inactive')
                document.querySelector('.contact .name').focus()
                break
            case 4:
                document.querySelector('.contact .question').parentNode.classList.add('inactive')
                document.querySelector('.contact .letter').parentNode.classList.add('inactive')
                document.querySelector('.contact .signature').parentNode.classList.add('inactive')
                break
            default: break
        }
    }
    prevent_tabbing = e => {
        console.log('e', e.target.type)
        if(e.target.type === 'textarea' && e.key === 'Tab') {
            e.preventDefault()
            document.querySelector('.message').value += '   '
        }
        
    }
    render = () =>
        <Wrapper className={this.props.classes}>
            {console.log(this.state.page)}
            <div className='step'>
                <div className='container sent'>
                    <h3>Thank you,<br/>Your message has been sent.</h3>
                    <span onClick={() => this.change_page(-3)}>back</span>
                </div>
            </div>
            <div className='step'>
                <div className='container signature'>
                    <h2>Tell me about yourself</h2>
                    <input className='name' type='text' placeholder='Your Name...'/>
                    <input className='email' type='text' placeholder='Your Email...'/>
                </div>
            </div>
            <div className='step'>
                <div className='container letter'>
                    <h2>Hello Dustin,</h2>
                    <textarea className='message' placeholder='type your message here...'/>
                </div>
            </div>
            <div className='controller'>
                <span onClick={() => this.change_page(-1)}>back</span>
                <span onClick={() => this.change_page(1)}>{this.state.page === 3 ? 'send' : 'next'}</span>
            </div>
            <div className='step'>
                <div className='container question'>
                    <h1>Would you like to <span onClick={() => this.change_page(1)}>send a message?</span></h1>
                </div>
            </div>
        </Wrapper>
}

export default Contact