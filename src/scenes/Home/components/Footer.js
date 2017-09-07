import React, { Component } from 'react'
import {Grid, Image} from 'semantic-ui-react'
let styles = {
  container: {
    background: '-webkit-linear-gradient(left, #0BBBEF, #164194)',
    color: 'white',
    fontFamily: 'tahoma'
  },
  dir: {
    fontSize: '13px',
    lineHeight: '2em'
  },
  link: {
    fontSize: '22px',
    cursor: 'pointer'
  }
}
class Footer extends Component {
  render () {
    return (
      <Grid style={styles.container} celled='internally' stackable>
        <Grid.Row columns={5} textAlign='center' verticalAlign='middle'>
          <Grid.Column className='footerbar' width={4} style={styles.dir}>
            <p>© 2015 - Autoridad de Fiscalización del Juego</p>
            <p>Calle 16 de Obrajes N° 220</p>
            <p>Edif. Centro de Negocios Obrajes Piso 2</p>
            <p>Teléfonos: (+591)(2) 2125081 - (591)(2) 2125057</p>
            <p>Fecha Ultima Actualización: 06/06/2017</p>
            <p>www.aj.gob.bo - webmaster@aj.gob.bo</p>
          </Grid.Column>
          <Grid.Column className='footerbar' style={styles.link} width={3}>
            GALERIA MULTIMEDIA
          </Grid.Column>
          <Grid.Column className='footerbar' style={styles.link} width={3}>
            CONT&Aacute;CTENOS
          </Grid.Column>
          <Grid.Column className='footerbar' style={styles.link} width={3}>
            MAPA DEL SITIO
          </Grid.Column>
          <Grid.Column width={3}>
            <Image.Group size='mini'>
              <Image
                className='social'
                src={require('./../../../img/iconos/f_1.png')}
              />
              <Image
                className='social'
                src={require('./../../../img/iconos/f_2.png')}
              />
              <Image
                className='social'
                src={require('./../../../img/iconos/f_3.png')}
              />
            </Image.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Footer
