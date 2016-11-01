import React, { Component } from 'react';
import './App.css';

import { Router, Route, browserHistory } from 'react-router'
import DecisionAppBar from './components/DecisionAppBar'
import DecisionCardList from './components/DecisionCardList'
import Decision from './components/Decision'
import DecisionBottomNavigation from './components/DecisionBottomNavigation'
import DecisionAddStepper from './components/DecisionAddStepper'

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
          <Route path="/stepper" component={DecisionAddStepper} />
        </Router>
        <div>
          <DecisionBottomNavigation />
        </div>
      </div>
    );
  }
}

export default App;
