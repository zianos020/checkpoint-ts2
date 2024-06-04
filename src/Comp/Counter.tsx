import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count: 0
        }; increment = () => {
        this.setState({ count: this.state.count + 1 }); 
       }; decrement = () => {
            if (this.state.count >0) {
                this.setState({ count: this.state.count - 1 });
            }
        
       }
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
        <button onClick={this.decrement}>decrement</button>
      </div>
    )
  }
}
