import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { createStore } from 'redux'
import { addProcess } from '../actions/actions'
import reducer from '../reducers'

class AddProcessStep2 extends Component {
    handleChange(e) {
        /*
        console.log(e.target.type)
        console.log(e.target.value)
        console.log(e.target.id)
        */
        const store = createStore(reducer)
        console.log(store.getState())
        store.dispatch(addProcess('test store'))
        console.log(store.getState())
        // console.log('handleChange')
    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <TextField
                        id="name"
                        hintText="Insert Process Acronym"
                        floatingLabelText="Process Acronym"
                        value={this.props.process.acronym}
                        onChange={this.handleChange}
                        /><br />
                    <TextField
                        id="description"
                        hintText="Insert Process Type"
                        floatingLabelText="Process Tyep"
                        value={this.props.process.type}
                        onChange={this.handleChange}
                        /><br />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default AddProcessStep2;