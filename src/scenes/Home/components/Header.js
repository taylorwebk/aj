import React, { Component } from 'react'
import injectSheet, {ThemeProvider} from 'react-jss'
import {Grid, Image, Container} from 'semantic-ui-react'

import Menu from './Menu'
class Header extends Component {
  render () {
    const {classes} = this.props
    return (
      <Grid columns={3}>
        <Grid.Row className={classes.header}>
          <Grid.Column width={4}>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column width={10} verticalAlign='middle'>
                  <Image
                    centered
                    className={classes.escudo}
                    src={require('./../../../img/logos/Bolivia_shield.png')}
                    fluid />
                </Grid.Column>
                <Grid.Column textAlign='center' width={6} style={{paddingTop: '11px', paddingLeft: '55px'}}>
                  <Image
                    src={require('./../../../img/iconos/f_1.png')}
                    className={classes.logo}
                    size='mini' />
                  <Image
                    src={require('./../../../img/iconos/19.png')}
                    className={classes.logo}
                    size='mini' />
                  <Image
                    src={require('./../../../img/iconos/1_2.png')}
                    className={classes.logo}
                    size='mini' />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width={8} textAlign='center'>
            <Menu />
          </Grid.Column>
          <Grid.Column width={4} textAlign='center' verticalAlign='middle'>
            <Container>
              <Image
                centered
                src={require('./../../../img/logos/logo_aj.png')}
                className={classes.img}
              />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
const styles = (theme) => {
  return ({
    header: {
      background: '-webkit-linear-gradient(left, #164194, #0BBBEF)',
      height: '160px'
    },
    img: {
      width: '60% !important'
    },
    logo: {
      marginBottom: '8px',
      cursor: 'pointer',
      transition: 'all 0.4s',
      '&:hover': {
        transform: 'scale(1.2)'
      }
    },
    escudo: {
      width: '70% !important'
    }
  })
}
let Comp = injectSheet(styles)(Header)
export default () => (
  <ThemeProvider theme={{}}>
    <Comp />
  </ThemeProvider>
)
