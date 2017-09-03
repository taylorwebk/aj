import React, { Component } from 'react'
import injectSheet, {ThemeProvider} from 'react-jss'
import {Header, Grid, Image} from 'semantic-ui-react'
const contenido = [
  {
    content: [
      {
        titulo: 'SE ENTREGARON RECONOCIMIENTOS A LA CONSTANCIA Y CUMPLIMIENTO DE LA NORMA EN PROMOCIONES EMPRESARIALES',
        img: require('./../../../img/20170609NotaPrensa12.png'),
        resumen: 'La Autoridad de Fiscalización del Juego, realizó este viernes 25, el reconocimiento a la Constancia y el Cumplimiento de la Norma en Promociones Empresariales, en una ceremonia realizada en la ciudad de Santa Cruz y que contó con la presencia...'
      },
      {
        titulo: 'AJ INTERVIENE CASA DE JUEGOS EN COCHABAMBA',
        img: require('./../../../img/20170627NotaPrensa13.png'),
        resumen: 'La Autoridad de Fiscalización del Juego, realizó este viernes 25, el reconocimiento a la Constancia y el Cumplimiento de la Norma en Promociones Empresariales, en una ceremonia realizada en la ciudad de Santa Cruz y que contó con la presencia...'
      }
    ]
  },
  {
    content: [
      {
        titulo: 'CASA DE JUEGOS CLANDESTINA EN LA ZONA DE OBRAJES FUE INTERVENIDA ESTE JUEVES',
        img: require('./../../../img/20170727NotaPrensa14.png'),
        resumen: 'La Autoridad de Fiscalización del Juego, realizó este viernes 25, el reconocimiento a la Constancia y el Cumplimiento de la Norma en Promociones Empresariales, en una ceremonia realizada en la ciudad de Santa Cruz y que contó con la presencia...'
      },
      {
        titulo: 'LA AJ PROCEDE A LA CLAUSURA TEMPORAL DE CASAS DE JUEGO ILEGALES EN SANTA CRUZ',
        img: require('./../../../img/20170829NotaPrensa15.png'),
        resumen: 'La Autoridad de Fiscalización del Juego, realizó este viernes 25, el reconocimiento a la Constancia y el Cumplimiento de la Norma en Promociones Empresariales, en una ceremonia realizada en la ciudad de Santa Cruz y que contó con la presencia...'
      }
    ]
  }
]
class Notas extends Component {
  render () {
    const {classes} = this.props
    let content = contenido.map((c, i) => {
      let fila = c.content.map((item, j) => (
        <Grid.Column key={j}>
          <Grid className={classes.nota}>
            <Grid.Row columns={2}>
              <Grid.Column width={7} style={{overflow: 'hidden'}}>
                <Image className={classes.notaimg} src={item.img} fluid />
              </Grid.Column>
              <Grid.Column width={9}>
                <Grid textAlign='justified'>
                  <Grid.Row columns={1}>
                    <Grid.Column className={classes.title}>
                      {item.titulo}
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={1}>
                    <Grid.Column className={classes.resumen}>
                      {item.resumen}
                      <div className={classes.leerMas}>LEER M&Aacute;S...</div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      ))
      return <Grid.Row key={i} columns={2}>
        {fila}
      </Grid.Row>
    })
    return (
      <div className={classes.container}>
        <Header textAlign='left' as='h1' size='huge' dividing>NOTAS DE PRENSA</Header>
        <Grid divided='vertically' textAlign='center'>
          {content}
        </Grid>
      </div>
    )
  }
}
const styles = (theme) => {
  return ({
    container: {
      width: '82%',
      textAlign: 'center',
      margin: '45px auto'
    },
    title: {
      color: 'rgb(22, 65, 148)'
    },
    resumen: {
      color: '#666'
    },
    leerMas: {
      textAlign: 'right',
      color: 'rgb(11, 187, 239)'
    },
    nota: {
      transition: 'all 0.7s',
      cursor: 'pointer',
      '&:hover': {
        background: '-webkit-radial-gradient(rgba(200, 200, 200, 0.6), white 70%)'
      }
    },
    notaimg: {
      transition: 'all 4s ease-out 0s',
      '&:hover': {
        transform: 'scale(1.25) rotateZ(10deg)'
      }
    }
  })
}
let Export = injectSheet(styles)(Notas)
export default () => (
  <ThemeProvider theme={{}}>
    <Export />
  </ThemeProvider>
)
