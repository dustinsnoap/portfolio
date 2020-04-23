//imports
import React, {Component} from 'react'
//components
//scripts
//style
import Wrapper from './style'
import Logo from '../../assets/icons/logo.js'

class Loading extends Component {
  componentDidMount() {
    //
  }
  render() {
    return (
      <Wrapper className='loading-screen move-to-top'>
        <Logo />
        <h1>Dustin Snoap</h1>
      </Wrapper>
    )
  }
}

export default Loading