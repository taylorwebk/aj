import React, {Component} from 'react'
import {render} from 'react-dom'
import Home from './scenes/Home'
import './css/semantic.css'
import './css/main.css'
class Main extends Component {
  render () {
    return (<Home />)
  }
}
render(
  <Main />,
  document.getElementById('app')
)
