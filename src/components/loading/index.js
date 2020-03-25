//imports
import React, {Component} from 'react'
//components
//scripts
//style
import Wrapper from './style'

class Loading extends Component {
  componentDidMount() {
    //
  }
  render() {
    return (
      <Wrapper className='loading-screen move-to-top'>
        <h1>DS</h1>
        <h2>Dustin Snoap</h2>
      </Wrapper>
    )
  }
}

export default Loading