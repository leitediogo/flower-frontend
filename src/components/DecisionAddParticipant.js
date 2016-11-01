import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class DecisionAddParticipant extends Component {
    constructor() {
        super()
        this.state = { id: 0, title: '', description: '', status: '' }
    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <TextField
                        hintText="Insert Participant Id"
                        floatingLabelText="Participant Id"
                        />
                    <br />
                    <TextField
                        hintText="Insert Participant Title"
                        floatingLabelText="Participant Title"
                        />
                    <br />
                    <TextField
                        hintText="Insert Participant Descritption"
                        floatingLabelText="Participant Description"
                        />
                    <br />
                    <br />
                    <br />
                </div>
            </MuiThemeProvider>
        )
    }

}

export default DecisionAddParticipant