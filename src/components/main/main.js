import React, { Component } from 'react'
import './main.scss'

export default class Main extends Component {
  render() {
    if (!this.props.match) {
      return "";
    }
    return (
      <div id="main">
        <h1> MAIN SCREEN</h1>
      </div>
    )
  }
}
