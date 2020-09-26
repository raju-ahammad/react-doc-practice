import React, { Component } from 'react'

class App extends Component {
  state = {
    isToggle: true
  }
  handleClick = ()=> {
    this.setState({
      isToggle: !this.state.isToggle
    })
  }

  render() {
    return (
      <div className={this.state.isToggle ? "bg-dark": "container mt-5"}>
        <button className={this.state.isToggle ? "bg-primary text-dark":"bg-dark text-light"} onClick={this.handleClick}>{this.state.isToggle ? "ON":"OFF"}</button>
      </div>
    )
  }
}

export default App
