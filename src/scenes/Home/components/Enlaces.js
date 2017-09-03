import React, { Component } from 'react'
import injectSheet, {ThemeProvider} from 'react-jss'
import {Container, Header, Grid} from 'semantic-ui-react'

const enlaces = [
  {
    content: [
      {titulo: 'EMPRESAS DE AZAR Y SORTEO', color: 'rgb(22, 65, 148)'},
      {titulo: 'REQUISITOS', color: 'rgb(12, 105, 179)'},
      {titulo: 'BIENES Y SERVICIOS', color: 'rgb(11, 187, 239)'},
      {titulo: 'INCORPÓRATE A NOSOTROS', color: 'rgb(22, 65, 148)'}
    ]
  },
  {
    content: [
      {titulo: 'BOLETINES', color: 'rgb(12, 105, 179)'},
      {titulo: 'NOVEDADES', color: 'rgb(11, 187, 239)'},
      {titulo: 'PUBLICACIONES', color: 'rgb(22, 65, 148)'},
      {titulo: 'RECURSOS TECNOLÓGICOS', color: 'rgb(11, 187, 239)'}
    ]
  }
]
class Enlaces extends Component {
  render () {
    const {classes} = this.props
    let content = enlaces.map((e, i) => {
      let fila = e.content.map((item, j) => {
        let enlacesStyles = {
          color: item.color,
          fontWeight: 'bold',
          fontSize: '21px'
        }
        return <Grid.Column key={j} className={classes.enlace}>
          <p style={enlacesStyles}>
            {item.titulo}
          </p>
        </Grid.Column>
      })
      return <Grid.Row key={i} columns={4} divided verticalAlign='middle'>
        {fila}
      </Grid.Row>
    })
    return (
      <Container textAlign='center'>
        <Header textAlign='left' as='h1' size='huge' dividing>ENLACES</Header>
        <Grid divided='vertically' textAlign='center'>
          {content}
        </Grid>
      </Container>
    )
  }
}
const styles = (theme) => ({
  enlace: {
    cursor: 'pointer',
    transition: 'all 0.4s',
    '&:hover': {
      opacity: '0.8',
      transform: 'scale(1.1)',
      background: '-webkit-radial-gradient(rgba(220, 220, 220, 0.5), white 70%)',
      textShadow: '1px 1px 2px #eee, 0 0 1em #eee, 0 0 0.2em #eee'
    }
  }
})
let Export = injectSheet(styles)(Enlaces)

export default () => (
  <ThemeProvider theme={{}}>
    <Export />
  </ThemeProvider>
)
