import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true
    };
  }
  handleClick = () => {
    this.setState({ working: !this.state.working });
    let a = document.getElementById('App-logo');
    
    if (a.className=="App-logo-1")
    {
      a.className="App-logo";
      a.style.border='0px black solid';
    }

    else
    {
      a.className="App-logo-1";
      a.style.border='10px black solid';
    }
  };
  render() {
    const working = this.state.working ? 'Homer bosse dur' : 'Va bosser feignasse';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" id="App-logo" alt="logo" />
        </header>
        <button
          onClick={this.handleClick} 
          className={App}
        >
          {working.toUpperCase()}
        </button>
      </div>
    );
  }
}

export default App;
