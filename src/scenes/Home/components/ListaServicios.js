import React, { Component } from 'react'
import {Header, Container, Dropdown, Icon} from 'semantic-ui-react'
class ListaServicios extends Component {
  constructor (args) {
    super(args)
    this.state = {
      option: 0
    }
    this.changeOption = this.changeOption.bind(this)
  }
  changeOption (e, data) {
    this.setState({
      option: data.value
    })
  }
  render () {
    const {option} = this.state
    const stateOptions = [
      { key: 0, value: 0, text: 'Plataforma AJ en línea' },
      { key: 1, value: 1, text: 'Promociones Empresariales' },
      { key: 2, value: 2, text: 'Video Tutoriales' },
      { key: 3, value: 3, text: 'Cierres de Publicidad' },
      { key: 4, value: 4, text: 'Recepción de Información' },
      { key: 5, value: 5, text: 'Recepción de Satisfacción del Cliente' },
      { key: 6, value: 6, text: 'Servicio al Administrado' },
      { key: 7, value: 7, text: 'Procedente Administrativo' },
      { key: 8, value: 8, text: 'Consultas, Reclamos y Denuncias' },
      { key: 9, value: 9, text: 'Fiscalizaciones' },
      { key: 10, value: 10, text: 'Solicitud de Información' },
      { key: 11, value: 11, text: 'Preguntas y Sugerencias' }
    ]
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Header as='h2' dividing>
            <Icon style={{cursor: 'pointer'}} color='blue' name='reply' onClick={this.props.changeAj} />
            <Header.Content>
              SERVICIOS AJ
            </Header.Content>
          </Header>
          <Dropdown style={{fontSize: '20px', fontWeight: 'bold'}} icon='chevron down' labeled value={option} options={stateOptions} onChange={this.changeOption} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          Algun contenido sobre: <b>{stateOptions[option].text}</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Container>
      </div>
    )
  }
}

export default ListaServicios
