import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class DecisionAddContext extends Component {
    constructor() {
        super()
        this.state = { id: 0, title: '', description: '', status: '' }
    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <TextField
                        ref='id'
                        hintText="Insert Decision Id"
                        floatingLabelText="Decision Id"
                        />
                    <br />
                    <TextField
                        ref='title'
                        hintText="Insert Decision Title"
                        floatingLabelText="Decision Title"
                        />
                    <br />
                    <TextField
                        ref='description'
                        hintText="Insert Decision Descritption"
                        floatingLabelText="Decision Description"
                        />
                    <br />
                    <br />
                    <br />
                </div>
            </MuiThemeProvider>
        )
    }

}

export default DecisionAddContext