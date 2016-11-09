import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'

let style = {
    margin: 20,
    textAlign: 'center'
}

class AddDecisionContext extends Component {

   constructor() {
        super()
        this.state = { id: 0, title: '', description: '', status: '' }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name, e) {
        let change = {}
        change[name] = e.target.value
        this.setState(change)
        console.log(change)
    }

    render() {
        return (
            <MuiThemeProvider>
                <Paper zDepth={1} style={style}>
                    <TextField
                        ref = "title"
                        hintText="Insert Decision Title"
                        floatingLabelText="Decision Title"
                        //value={this.props.title}
                        onChange={this.handleChange.bind(this, "title")}
                        />
                    <br />
                    <TextField
                        hintText="Insert Decision Descritption"
                        floatingLabelText="Decision Description"
                        value={this.props.description}
                        //onChange={this.handleChange.bind(this, "description")}
                        />
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default AddDecisionContext