import React, { Component } from 'react'
import Header from './components/Header'
// import Slider from './components/Slider'
import Servicios from './components/Servicios'
class Home extends Component {
  render () {
    return (
      <div>
        <Header />
        {/* <Slider /> */}
        <Servicios />
      </div>
    )
  }
}

export default Home
