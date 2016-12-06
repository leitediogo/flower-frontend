import React from 'react'
import { Component } from 'react'
import DecisionCard from './DecisionCard'
import avatar from '../images/avatar.jpg'
import DecisionAddFloatingButton from './DecisionAddFloatingButton'

let style = {
    margin: 20,
    textAlign: 'center'
}

class DecisionCardList extends Component {
   

    render() {
        let cards = [];
        for (var i = 0; i < this.props.decisions.length; i++) {
            cards.push(<DecisionCard decision={this.props.decisions[i]} avatar={avatar} key={i} />)
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