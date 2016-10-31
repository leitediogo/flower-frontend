import React, { Component } from 'react'

class TextInput extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            inputText: 'Initial state text'
        }
    }

    handleChange(event) {
        this.setState({inputText: event.target.value});
        console.log('state set event');
    }
    render() {
        return (
            <input
                type="text"
                value={this.state.inputText}
                onChange={this.handleChange.bind(this) }
                />
        )
    }
}

export default TextInput