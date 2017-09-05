import React, { Component } from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import Servicios from './components/Servicios'
import Notas from './components/Notas'
import Enlaces from './components/Enlaces'
import Convenios from './components/Convenios'
import Footer from './components/Footer'
import ListaServicios from './components/ListaServicios'
import Fijo from './components/Fijo'
class Home extends Component {
  constructor (args) {
    super(args)
    this.state = {
      aj: true
    }
    this.changeAj = this.changeAj.bind(this)
  }
  changeAj () {
    console.log('cambiooooo')
    this.setState({
      aj: !this.state.aj
    })
  }
  render () {
    let contenido
    if (this.state.aj) {
      contenido = <div>
        <Slider /><br /><br />
        <Servicios changeAj={this.changeAj} /><br /><br />
        <Notas /><br /><br /><br /><br />
      </div>
    } else {
      contenido = <ListaServicios changeAj={this.changeAj} />
    }
    return (
      <div>
        <Header />
        <Fijo />
        {contenido}
        <Enlaces /><br /><br />
        <Convenios /><br /><br />
        <Footer />
      </div>
    )
  }
}

export default Home
