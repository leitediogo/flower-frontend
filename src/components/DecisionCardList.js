import React from 'react'
import { Component } from 'react'
import agent from 'superagent'
import DecisionCard from './DecisionCard'
import avatar from '../images/avatar.jpg'
import DecisionAddFloatingButton from './DecisionAddFloatingButton'


let divstyle = { margin: 60 }

class DecisionCardList extends Component {
    constructor() {
        super()
        this.state = { decisionsBody: [] }
    }

    componentDidMount() {
        agent.get('http://localhost:3000/api/Decisions')
            .then(function (res) {
                this.setState({ decisionsBody: res.body });
            }.bind(this));
    }

    render() {
        let cards = [];
        for (var i = 0; i < this.state.decisionsBody.length; i++) {
            cards.push(<DecisionCard
                title={this.state.decisionsBody[i].name}
                subTitle={this.state.decisionsBody[i].description}
                createdBy={this.state.decisionsBody[i].createdById}
                avatar={avatar}
                cardText={this.state.decisionsBody[i].description}
                key={i} />);
        }
        return (
            <div>
                <div style={divstyle}>{cards}</div>
                <DecisionAddFloatingButton />
            </div>
        )
    }
}

export default DecisionCardList