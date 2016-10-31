import React from 'react'
import { Component } from 'react'
import agent from 'superagent'

class DecisionList extends Component {

  constructor() {
    super();
    this.state = { decisionNames: [], decisions: [] };
  }

  componentDidMount() {
    let decisionList = [];
    let decisionNamesList = [];
    agent.get('http://localhost:3000/api/Decisions').then(function onResult(res) {
      decisionList = res.body;
      if (decisionList != null) {
        for (var i = 0; i < decisionList.length; i++) {
          decisionNamesList.push(decisionList[i].name);
        }
      }
      this.setState({ decisionNames: decisionNamesList, decisions: decisionList });
    }.bind(this));
  }

  render() {
    return (
      <div>
        <div> Decision Names List: {this.state.decisionNames} </div>
        <div>Decisions List: {JSON.stringify(this.state.decisions) } </div>
      </div>
    );
  }
}

export default DecisionList