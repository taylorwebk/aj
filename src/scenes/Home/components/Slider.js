import React, { Component } from 'react'
import {Image, Progress} from 'semantic-ui-react'
import ReactSwipe from 'react-swipe'
const styles = {
  slider: {
    height: '400px',
    overflow: 'hidden',
    paddingTop: '14px'
  }
}
class Slider extends Component {
  constructor (args) {
    super(args)
    this.state = {
      percent: 18
    }
  }
  componentDidMount () {
    this.timer = setInterval(() => this.changePercent(), 100)
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  changePercent () {
    let newPercent = (this.state.percent + 3) % 100
    this.setState({
      percent: newPercent
    })
  }
  render () {
    return (
      <div style={styles.slider}>
        <Progress warning percent={this.state.percent} attached='top' />
        <ReactSwipe swipeOptions={{auto: 3000, continous: true}}>
          <Image src={require('./../../../img/slider/slider1.jpg')} fluid />
          <Image src={require('./../../../img/slider/slider2.jpg')} fluid />
          <Image src={require('./../../../img/slider/slider3.jpg')} fluid />
          <Image src={require('./../../../img/slider/slider4.jpg')} fluid />
        </ReactSwipe>
      </div>
    )
  }
}

export default Slider
