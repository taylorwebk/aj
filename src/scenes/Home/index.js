import React, { Component } from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import Servicios from './components/Servicios'
import Notas from './components/Notas'
import Enlaces from './components/Enlaces'
import Convenios from './components/Convenios'
import Footer from './components/Footer'
class Home extends Component {
  render () {
    return (
      <div>
        <Header /><br />
        <br /><br /><br /><br /><br /><br />
        <Slider /><br /><br />
        <Notas /><br /><br />
        <Servicios /><br /><br /><br /><br />
        <Enlaces /><br /><br />
        <Convenios /><br /><br />
        <Footer />
      </div>
    )
  }
}

export default Home
