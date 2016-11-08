import React, { Component } from 'react';
import './App.css';

import { Router, Route, browserHistory } from 'react-router'
import DecisionAppBar from './components/DecisionAppBar'
import DecisionCardList from './components/DecisionCardList'
import DecisionBottomNavigation from './components/DecisionBottomNavigation'
import AddDecision from './components/AddDecision'

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
          <Route path="/AddDecision" component={AddDecision} />
        </Router>
        <div>
          <DecisionBottomNavigation />
        </div>
      </div>
    );
  }
}

export default App;
