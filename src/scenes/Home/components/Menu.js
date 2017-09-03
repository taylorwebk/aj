import React, { Component } from 'react'
import injectSheet, {ThemeProvider} from 'react-jss'
import {Grid, Icon} from 'semantic-ui-react'

const menuText = [
  {text: 'Institución', color: 'rgb(255, 241, 0)'},
  {text: 'Gestión Institucional', color: 'rgb(246, 146, 30)'},
  {text: 'Normas', color: 'rgb(236, 28, 36)'},
  {text: 'Juegos Autorizados', color: 'rgb(101, 45, 144)'},
  {text: 'Transparencia', color: 'rgb(27, 117, 187)'},
  {text: 'Certificados', color: 'rgb(0, 165, 81)'}
]
class Menu extends Component {
  render () {
    const {classes} = this.props
    const items = menuText.map((m, i) => {
      let itemStyles = {
        fontFamily: 'tahoma',
        borderTop: '15px solid ' + m.color,
        backgroundColor: 'white',
        textTransform: 'uppercase',
        padding: '5px',
        paddingTop: '22px',
        color: '#666666',
        fontSize: '14px',
        cursor: 'pointer'
      }
      return <Grid.Column className={classes.item} key={i} style={itemStyles}>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
              <div style={{height: '15px'}}>{m.text}</div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Icon name='angle down' size='big' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Column>
    })
    return (
      <div>
        <div className={classes.container}>
          <Grid columns={6}>
            <Grid.Row>
              {items}
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}
const styles = (theme) => {
  return ({
    container: {
      position: 'absolute',
      bottom: -14,
      borderRadius: '15px',
      overflow: 'hidden'
    },
    item: {
      transition: 'all 0.5s',
      '&:hover': {
        opacity: 0.8
      }
    }
  })
}
let Export = injectSheet(styles)(Menu)
export default () => (
  <ThemeProvider theme={{}}>
    <Export />
  </ThemeProvider>
)
