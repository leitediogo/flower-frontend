import React, { Component } from 'react';
import './App.css';

import { Router, Route, browserHistory } from 'react-router'
import DecisionAppBar from './components/DecisionAppBar'
import DecisionCardList from './components/DecisionCardList'
import Decision from './components/Decision'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <DecisionAppBar />
        </div>
        <Router history={browserHistory}>
          <Route path="/" component={DecisionCardList} />
          <Route path="/decision" component={Decision} />
        </Router>
      </div>
    );
  }
}

export default App;
