import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { createStore } from 'redux'
import { addToObject } from '../actions/actions'
import reducer from '../reducers'

const initialState = {
    a: [{ name: 'init reducer', description: 'init reducer' }]
}

class AddProcessStep1 extends Component {

    constructor(props) {
        super(props)
        this.state = { name: props.state.name, description: props.state.description };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        /*
        console.log(e.target.type)
        console.log(e.target.value)
        console.log(e.target.id)
        */
        const store = createStore(reducer, initialState)
        let obj = {}
        obj[e.target.id] = e.target.value
        //console.log(obj)

        console.log(store.getState())
        store.dispatch(addToObject(obj))
        console.log(store.getState())
        // console.log('handleChange')
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <TextField
                        id="name"
                        hintText="Insert Process Name"
                        floatingLabelText="Process Name"
                        value={this.props.state.name}
                        onChange={this.handleChange}
                        /><br />
                    <TextField
                        id="description"
                        hintText="Insert Process Description"
                        floatingLabelText="Process Description"
                        value={this.props.state.description}
                        onChange={this.handleChange}
                        /><br />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default AddProcessStep1