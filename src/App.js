import "./styles.css";
import React, { Component, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Routes from "./routes";
import { bindActionCreators } from "redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storage: 0,
      web3: null,
      accounts: null,
      incidents: null,
      posts: null,
      crowdsale: null,
      fund: null,
      members: null
    };
  }
  componentDidMount = () => {
    console.log(this.webEth);
  };

  render() {
    return (
      <div className="App">
        <main>
          <Routes />
        </main>
      </div>
    );
  }
}

export default App;
