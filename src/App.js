import React, { Component } from "react";
import { Header, Dashboard, Wiki, News, ChatBot } from "./components";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
        </Switch>
        <ChatBot />
      </Router>
    );
  }
}

export default App;
