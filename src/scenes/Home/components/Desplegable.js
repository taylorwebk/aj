import React, { Component } from 'react'
import {Container, Header, Image, List} from 'semantic-ui-react'

const enlaces = [
  {
    title: 'Información Institucional',
    enlaces: ['Qué es la AJ', 'Misión, Visión y Valores', 'Objetivos', 'Política de Calidad', 'Estructura Organizacional', 'Escala Salarial', 'Puestos Cargos y Funciones', 'Dirección Ejecutiva', 'Direcciones Nacionales', 'Direcciones Regionales', 'Entidades Relacionadas']
  },
  {
    title: 'Gestión Institucional',
    enlaces: ['Plan Estratégico, POA', 'Información Financiera', 'Procesos Significativos', 'Investigaciones', 'Estadísticas']
  },
  {
    title: 'Norma Vigente',
    enlaces: ['Leyes', 'Decretos', 'Resoluciones Supremas', 'Resoluciones Regulatorias', 'Normativa Conexa']
  },
  {
    title: 'Juegos Autorizados',
    enlaces: ['Juegos de Cartas', 'Juegos de Dados', 'Juegos de Ruleta', 'Máquinas de Azar', 'Sorteos', 'Juegos de Lotería']
  },
  {
    title: 'Transparencia',
    enlaces: ['Auditoría Interna', 'Audiencias', 'Rendición de Cuentas', 'Viajes Exterior']
  },
  {
    title: 'Registro de Certificados de Cumplimiento',
    enlaces: ['Certificados de Cumplimiento', 'Certificados de Máquinas', 'Certificados de Sistemas', 'Certificados de Juegos']
  }
]
class Desplegable extends Component {
  render () {
    const enlace = enlaces[this.props.number]
    let content = enlace.enlaces.map((e, i) => (
      <List.Item key={i}>
        <Header as='h4'>
          <Header.Content>
            <a href='#'>- {e}</a>
          </Header.Content>
        </Header>
      </List.Item>
    ))
    return (
      <Container onMouseLeave={this.props.hideMenu} style={desplegableStyles} textAlign='left'>
        <Header as='h2' textAlign='left'>
          {' '}{enlace.title}{' '}
          <Image shape='circular' src={require('./../../../img/iconos/1234.png')} />
        </Header>
        <List as='ul'>
          {content}
        </List>
      </Container>
    )
  }
}
const desplegableStyles = {
  padding: '15px',
  position: 'absolute',
  overflow: 'visible',
  zIndex: 100,
  top: '145px',
  width: '100%',
  backgroundColor: 'white',
  fontFamily: 'tahoma',
  borderRadius: '15px',
  boxShadow: '6px 6px 15px #666'
}
export default Desplegable
