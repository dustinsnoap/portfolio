//imports
import React, { Component } from 'react'
//components
import Home from '../components/home'
import Technologies from '../components/technologies'
import Projects from '../components/projects'
import Contact from '../components/contact'
//style
import Wrapper from './style/portfolio'

class Portfolio extends Component {
  componentDidMount() {
    //
  }
  render() {
    return (
      <Wrapper className='portfolio'>
        <Home />
        <Technologies />
        <Projects />
        <Contact />
      </Wrapper>
    )
  }
}

export default Portfolio