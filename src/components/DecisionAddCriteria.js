import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class DecisionAddCriteria extends Component {
    constructor() {
        super()
        this.state = { id: 0, title: '', description: '', status: '' }
    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <TextField
                        hintText="Insert Criteria Id"
                        floatingLabelText="Criteria Id"
                        />
                    <br />
                    <TextField
                        hintText="Insert Criteria Title"
                        floatingLabelText="Criteria Title"
                        />
                    <br />
                    <TextField
                        hintText="Insert Criteria Descritption"
                        floatingLabelText="Criteria Description"
                        />
                    <br />
                    <br />
                    <br />
                </div>
            </MuiThemeProvider>
        )
    }

}

export default DecisionAddCriteria