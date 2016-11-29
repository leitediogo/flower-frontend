import React from 'react'
import { Component } from 'react'
import agent from 'superagent'
import DecisionCard from './DecisionCard'
import avatar from '../images/avatar.jpg'
import DecisionAddFloatingButton from './DecisionAddFloatingButton'

let style = {
    margin: 20,
    textAlign: 'center'
}

class DecisionCardList extends Component {
    constructor() {
        super()
        this.state = { decisions: [] }
    }

    componentDidMount() {
        agent.get('http://localhost:3000/api/Decisions')
            .then(function(res) {
                this.setState({ decisions: res.body });
            }.bind(this));
    }

    render() {
        let cards = [];
        for (var i = 0; i < this.state.decisions.length; i++) {
            cards.push(<DecisionCard decision={this.state.decisions[i]} avatar={avatar} key={i} />)
        }
        return (
            <div>
                <br />
                <br />
                <br />
                <div style={style}>{cards}</div>
                <DecisionAddFloatingButton />
            </div>
        )
    }
}

export default DecisionCardList