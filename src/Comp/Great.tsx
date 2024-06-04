import React, { Component } from 'react'

export default class Great extends Component {
    state = {
        name: "zizou"
        };

  render() {
    return (
        <div>
            Hello, {this.state.name}
        </div>
    )
  }
}
