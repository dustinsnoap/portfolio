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
        <div className='background'>
          <figure className='moon'></figure>
          <figure className='mountain'></figure>
        </div>
      </Wrapper>
    )
  }
}

export default Home