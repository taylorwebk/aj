import React, { Component } from 'react'
import injectSheet, {ThemeProvider} from 'react-jss'
import {Input, Icon, Popup, Modal, Button, TextArea, Form} from 'semantic-ui-react'

class Fijo extends Component {
  constructor (args) {
    super(args)
    this.state = {
      showSearch: false,
      focusMail: false,
      showModal: false
    }
    this.handleShowSearch = this.handleShowSearch.bind(this)
    this.handleFocusMail = this.handleFocusMail.bind(this)
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }
  handleShowSearch () {
    this.setState({
      showSearch: !this.state.showSearch
    })
  }
  handleFocusMail () {
    this.setState({
      focusMail: !this.state.focusMail
    })
  }
  showModal () {
    this.setState({
      showModal: true
    })
  }
  hideModal () {
    this.setState({
      showModal: false
    })
  }
  render () {
    const {classes} = this.props
    const {showSearch, focusMail, showModal} = this.state
    return (
      <div>
        <div className={classes.buscar} onMouseEnter={this.handleShowSearch} onMouseLeave={this.handleShowSearch}>
          <Icon name='search' size='huge' color='blue' disabled={!showSearch} />
          {showSearch && <Input transparent size='big' placeholder='Buscar...' />}
        </div>
        <div className={classes.email} onMouseEnter={this.handleFocusMail} onMouseLeave={this.handleFocusMail}>
          <Modal open={showModal} onClose={this.hideModal}>
            <Modal.Header>Envíanos un Mensaje</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <p>Contacta con nosotros enviandonos un correo.</p>
              </Modal.Description>
              <br />
              <Form>
                <Input label='Nombre: ' /><br /><br />
                <Input label='Correo: ' />
                <p><b>Comentario:</b></p>
                <TextArea autoHeight />
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button secondary onClick={this.hideModal}>Salir</Button>
              <Button primary>Enviar</Button>
            </Modal.Actions>
          </Modal>
          <Popup
            trigger={<Icon onClick={this.showModal} name='mail' size='huge' color='blue' disabled={!focusMail} />}
            content='Envíanos un correo..!!!'
            size='large'
          />
        </div>
      </div>
    )
  }
}
const styles = theme => ({
  buscar: {
    position: 'fixed',
    top: '180px',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    zIndex: 100,
    display: 'inline-block',
    padding: '6px',
    borderTop: '3px solid rgba(33, 133, 208, 0.6)',
    borderBottom: '3px solid rgba(33, 133, 208, 0.6)',
    borderLeft: '3px solid rgba(33, 133, 208, 0.6)',
    borderTopLeftRadius: '12px',
    borderBottomLeftRadius: '12px',
    width: '83px',
    height: '75px',
    overflow: 'hidden',
    transition: 'all 0.5s',
    '&:hover': {
      borderTop: '3px solid rgb(33, 133, 208)',
      borderBottom: '3px solid rgb(33, 133, 208)',
      borderLeft: '3px solid rgb(33, 133, 208)',
      padding: '3px',
      width: '350px',
      backgroundColor: 'rgba(240, 240, 240, 0.8)'
    }
  },
  email: {
    position: 'fixed',
    top: '270px',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    zIndex: 100,
    display: 'inline-block',
    padding: '6px',
    borderTop: '3px solid rgba(33, 133, 208, 0.6)',
    borderBottom: '3px solid rgba(33, 133, 208, 0.6)',
    borderLeft: '3px solid rgba(33, 133, 208, 0.6)',
    borderTopLeftRadius: '12px',
    borderBottomLeftRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.5s',
    '&:hover': {
      borderTop: '3px solid rgb(33, 133, 208)',
      borderBottom: '3px solid rgb(33, 133, 208)',
      borderLeft: '3px solid rgb(33, 133, 208)'
    }
  }
})
const Export = injectSheet(styles)(Fijo)
export default () => (
  <ThemeProvider theme={{}}>
    <Export />
  </ThemeProvider>
)
