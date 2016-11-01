import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class DecisionAddChoice extends Component {
    constructor() {
        super()
        this.state = { id: 0, title: '', description: '', status: '' }
    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <TextField
                        hintText="Insert Choice Id"
                        floatingLabelText="Choice Id"
                        />
                    <br />
                    <TextField
                        hintText="Insert Choice Title"
                        floatingLabelText="Choice Title"
                        />
                    <br />
                    <TextField
                        hintText="Insert Choice Descritption"
                        floatingLabelText="Choice Description"
                        />
                    <br />
                    <br />
                    <br />
                </div>
            </MuiThemeProvider>
        )
    }

}

export default DecisionAddChoice