import React, { Component } from "react";
import {
  Header,
  Dashboard,
  Wiki,
  News,
  SurvivalTest,
  ChatRoom,
} from "./components";
import styles from "./App.module.scss";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className={styles.header_gap}></div>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/wiki" component={Wiki} />
          <Route path="/news" component={News} />
          <Route path="/survivaltest" component={SurvivalTest} />
          <Route path="/chatroom" component={ChatRoom} />
        </Switch>
      </Router>
    );
  }
}

export default App;
