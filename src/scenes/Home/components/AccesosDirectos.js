import React, { Component } from 'react'
import injectSheet, {ThemeProvider} from 'react-jss'
import {Container, Grid, Header, Divider, Image} from 'semantic-ui-react'
class AccesosDirectos extends Component {
  render () {
    const {classes} = this.props
    return (
      <Container>
        <Grid columns={4}>
          <Grid.Row>
            <Grid.Column verticalAlign='top' className={classes.link}>
              <Header icon textAlign='center'>
                <Image src={require('./../../../img/logos/14.png')} size='tiny' />
                <p className={classes.text}>
                  <br />Plataforma AJ en Línea
                </p>
              </Header>
            </Grid.Column>
            <Grid.Column verticalAlign='top' className={classes.link}>
              <Header icon textAlign='center'>
                <Image src={require('./../../../img/logos/16.png')} size='tiny' />
                <p className={classes.text}>
                  <br /><br />Consultas, Reclamos y Denuncias
                </p>
              </Header>
            </Grid.Column>
            <Grid.Column verticalAlign='top' className={classes.link}>
              <Header icon textAlign='center'>
                <Image src={require('./../../../img/logos/17.png')} size='tiny' />
                <p className={classes.text}>
                  <br />Promociones Empresariales Autorizadas
                </p>
              </Header>
            </Grid.Column>
            <Grid.Column verticalAlign='top' className={classes.link}>
              <Header icon textAlign='center'>
                <Image src={require('./../../../img/logos/18.png')} size='tiny' />
                <p className={classes.text}>
                  <br /><br />Contrataciones
                </p>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
      </Container>
    )
  }
}
const styles = theme => ({
  text: {
    fontSize: '22px',
    fontWeight: 'normal',
    color: '#666',
    cursor: 'pointer'
  },
  link: {
    transition: 'all 0.4s',
    '&:hover': {
      transform: 'scaleX(1.1)',
      background: '-webkit-radial-gradient(rgba(220, 220, 220, 0.5), white 70%)',
      textShadow: '0 0 1em #444'
    }
  }
})
const Export = injectSheet(styles)(AccesosDirectos)
export default () => (
  <ThemeProvider theme={{}}>
    <Export />
  </ThemeProvider>
)
