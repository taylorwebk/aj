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
          <Grid.Column width={4} textAlign='center'>
            <Container>
              <Image
                className={classes.img}
                src={require('./../../../img/logos/logo_aj.png')}
                fluid />
            </Container>
          </Grid.Column>
          <Grid.Column width={8} textAlign='center'>
            <Menu />
          </Grid.Column>
          <Grid.Column width={4}>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column textAlign='right' width={6} style={{paddingTop: '11px', paddingLeft: '65px'}}>
                  <Image
                    src={require('./../../../img/iconos/f_1.png')}
                    className={classes.logo}
                    size='mini' />
                  <Image
                    src={require('./../../../img/iconos/f_2.png')}
                    className={classes.logo}
                    size='mini' />
                  <Image
                    src={require('./../../../img/iconos/f_3.png')}
                    className={classes.logo}
                    size='mini' />
                </Grid.Column>
                <Grid.Column width={10}>
                  <Image
                    src={require('./../../../img/logos/Bolivia_shield.png')}
                    className={classes.escudo}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
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
      paddingTop: '40px',
      paddingLeft: '35px',
      width: '70% !important'
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
      paddingRight: '73px',
      paddingTop: '13px',
      width: '87%',
      float: 'right'
    }
  })
}
let Comp = injectSheet(styles)(Header)
export default () => (
  <ThemeProvider theme={{}}>
    <Comp />
  </ThemeProvider>
)
