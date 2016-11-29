import React, { Component } from 'react';
import './App.css';

import { Router, Route, browserHistory } from 'react-router'
import DecisionAppBar from './components/DecisionAppBar'
import DecisionCardList from './components/DecisionCardList'
import DecisionBottomNavigation from './components/DecisionBottomNavigation'
import AddDecisionWizard from './components/AddDecisionWizard'
import IconTesting from './components/IconTesting'
import Main from './components/Main'

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
          <Route path="/AddDecisionWizard" component={AddDecisionWizard} />
          <Route path="/icons" component={IconTesting} />
          <Route path="/main" component={Main} />
        </Router>
        <div>
          <DecisionBottomNavigation />
        </div>
      </div>
    );
  }
}

export default App;
