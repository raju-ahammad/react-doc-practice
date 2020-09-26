import React, { Component } from 'react';

function Welcome() {
  return <h1>WelCome Back!</h1>
}

function Please() {
  return <h1>Please SignUp</h1>
}

function User(props) {
  const isLogin=props.isLogin;
  if(isLogin) {
    return <Welcome/>
  }
  return <Please/>

}


const LogInBtn = ({ handleLogIn })=> {
  return <button className="bg-success py-1 px-3" onClick={handleLogIn}>Login</button>
}
const LogOutBtn = ({ handleLogOut })=> {
  return <button className="bg-danger py-1 px-3" onClick={handleLogOut}>Logout</button>
}

class App extends Component {
  state = {
    isToggle: true,
    isLogin: false
  }
  handleClick = ()=> {
    this.setState({
      isToggle: !this.state.isToggle
    })
  }

  handleLogIn = () => {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }
  handleLogOut = () => {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }

  render() {
    const isLogin = this.state.isLogin
    let button;
    if (isLogin) {
      button = <LogOutBtn handleLogOut={this.handleLogOut}/>
    } else {
      button = <LogInBtn handleLogIn={this.handleLogIn}/>
    }
    return (
      <div className={this.state.isToggle ? "bg-dark": "container mt-5"}>
        <button className={this.state.isToggle ? "bg-primary text-dark":"bg-dark text-light"} onClick={this.handleClick}>{this.state.isToggle ? "ON":"OFF"}</button>
        <div className="m-4">
          <User isLogin= {isLogin}/>
          { button }
        </div>
      </div>
    )
  }
}

export default App
