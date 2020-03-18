//imports
import React, {Component} from 'react'
//components
//scripts
//style
import Wrapper from './style'

class Home extends Component {
  componentDidMount() {
    //
  }
  render() {
    return (
      <Wrapper className='home'>
        <h1>Home Component</h1>
        <canvas className='particles'></canvas>
      </Wrapper>
    )
  }
}

export default Home