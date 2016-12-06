import React, { Component } from 'react';
import './App.css';
import agent from 'superagent'
import { Router, Route, browserHistory } from 'react-router'
import DecisionAppBar from './components/DecisionAppBar'
import DecisionCardList from './components/DecisionCardList'
import DecisionBottomNavigation from './components/DecisionBottomNavigation'
import AddDecisionWizard from './components/AddDecisionWizard'
import IconTesting from './components/IconTesting'
import MatrixTryOut from './components/MatrixTryOut'
import Wizard from './components/Wizard'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {

  constructor() {
    super()
    this.state = {
      filteredDecisions: [],
      allDecisions: []
    }
  }

  componentDidMount() {
    agent.get('http://localhost:3000/api/Decisions')
      .then(function (res) {
        this.setState({ allDecisions: res.body });
        this.setState({ filteredDecisions: res.body })
      }.bind(this));
  }

  filterDecisions(filter) {
    console.log('Decision Filter: ', filter)
    if (filter !== "All") {
      this.setState({
        filteredDecisions: this.state.allDecisions.filter(function (decision) {
          return decision.definition.category === filter
        })
      })
    } else {
      this.setState({
        filteredDecisions: this.state.allDecisions.filter(function (decision) {
          return decision
        })
      })
    }
  }

  render() {
    return (
      <div>
        <div>
          <DecisionAppBar filterDecisions={this.filterDecisions.bind(this)} />
          <Router history={browserHistory}>
            <Route path="/" component={() => (<DecisionCardList decisions={this.state.filteredDecisions} />)} />
            <Route path="/AddDecisionWizard" component={AddDecisionWizard} />
            <Route path="/icons" component={IconTesting} />
            <Route path="/matrix" component={MatrixTryOut} />
            <Route path="/wizard" component={Wizard} />
          </Router>
          <DecisionBottomNavigation />
        </div>
      </div>
    );
  }
}

export default App
