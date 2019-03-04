import React, { Component } from 'react';
import { hot } from "react-hot-loader"
import { Switch, Route} from "react-router-dom"
import Collection from "./components/collection/Collection" 

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={Collection} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);