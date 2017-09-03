import React, { Component } from 'react'
import injectSheet, {ThemeProvider} from 'react-jss'
import {Header, Container, Grid, Image} from 'semantic-ui-react'
const contenido = [
  {
    content: [
      {
        texto: 'Plataforma AJ en línea',
        img: require('./../../../img/iconos/1.png')
      },
      {
        texto: 'Promociones empresariales autorizadas. Consulta: Vigencia y condiciones',
        img: require('./../../../img/iconos/2.png')
      },
      {
        texto: 'Vídeo tutoriales Plataforma AJ en línea',
        img: require('./../../../img/iconos/3.png')
      },
      {
        texto: 'Cierres de publicidad para promociones empresariales',
        img: require('./../../../img/iconos/4.png')
      }
    ]
  },
  {
    content: [
      {
        texto: 'Recepción de información. Operadores',
        img: require('./../../../img/iconos/5.png')
      },
      {
        texto: 'Percepción de satisfacción del cliente de la AJ',
        img: require('./../../../img/iconos/6.png')
      },
      {
        texto: 'Servicio al administrado',
        img: require('./../../../img/iconos/7.png')
      },
      {
        texto: 'Procedente administrativo',
        img: require('./../../../img/iconos/8.png')
      }
    ]
  },
  {
    content: [
      {
        texto: 'Consultas, reclamos y denuncias',
        img: require('./../../../img/iconos/9.png')
      },
      {
        texto: 'Fiscalizadores',
        img: require('./../../../img/iconos/10.png')
      },
      {
        texto: 'Solicitud de información',
        img: require('./../../../img/iconos/11.png')
      },
      {
        texto: 'Preguntas y Sugerencias',
        img: require('./../../../img/iconos/12.png')
      }
    ]
  }
]
class Servicios extends Component {
  render () {
    const {classes} = this.props
    var content = contenido.map((c, i) => {
      let fila = c.content.map((item, j) => (
        <Grid.Column key={j}>
          <Grid columns={1} className={classes.link}>
            <Grid.Row>
              <Grid.Column>
                <p className={classes.text}>{item.texto}</p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Image src={item.img} size='mini' centered />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      ))
      return <Grid.Row key={i} divided columns={4}>
        {fila}
      </Grid.Row>
    })
    return (
      <Container textAlign='center'>
        <Header textAlign='left' as='h1' size='huge' dividing>SERVICIOS AJ</Header>
        <Grid divided='vertically' verticalAlign='bottom'>
          {content}
        </Grid>
      </Container>
    )
  }
}
const styles = (theme) => {
  return ({
    text: {
      fontSize: '22px',
      color: '#666',
      cursor: 'pointer'
    },
    link: {
      transition: 'all 0.5s',
      '&:hover': {
        transform: 'scale(1.1)',
        background: '-webkit-radial-gradient(rgba(220, 220, 220, 0.5), white 70%)',
        textShadow: '1px 1px 2px #eee, 0 0 1em #eee, 0 0 0.2em #eee'
      }
    }
  })
}
let Export = injectSheet(styles)(Servicios)
export default () => (
  <ThemeProvider theme={{}}>
    <Export />
  </ThemeProvider>
)
