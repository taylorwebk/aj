import React, { Component } from 'react'
import injectSheet, {ThemeProvider} from 'react-jss'
import {Header, Grid, Image} from 'semantic-ui-react'

class Convenios extends Component {
  render () {
    const {classes} = this.props
    return (
      <div className={classes.container}>
        <Header textAlign='left' as='h1' size='huge' dividing>CONVENIOS INSTITUCIONALES</Header>
        <Grid divided='vertically' textAlign='center' stackable>
          <Grid.Row columns={4} divided>
            <Grid.Column className={classes.convenio}>
              <Image
                src={require('./../../../img/logos/logo_01.jpg')}
                fluid
              />
            </Grid.Column>
            <Grid.Column className={classes.convenio}>
              <Image
                src={require('./../../../img/logos/logo_03.jpg')}
                fluid
              />
            </Grid.Column>
            <Grid.Column className={classes.convenio}>
              <Image
                src={require('./../../../img/logos/logo_05.jpg')}
                fluid
              />
            </Grid.Column>
            <Grid.Column verticalAlign='middle' className={classes.convenio}>
              <p className={classes.ingresar}>INGRESAR</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
const styles = (theme) => ({
  container: {
    width: '82%',
    textAlign: 'center',
    margin: '45px auto'
  },
  ingresar: {
    fontSize: '32px',
    color: 'rgb(11, 187, 239)',
    fontFamily: 'tahoma',
    cursor: 'pointer'
  },
  convenio: {
    transition: 'all 0.5s',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scaleX(1.08)',
      opacity: '0.87'
    }
  }
})
let Export = injectSheet(styles)(Convenios)
export default () => (
  <ThemeProvider theme={{}}>
    <Export />
  </ThemeProvider>
)
