import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'

let style = {
    margin: 20,
    textAlign: 'center'
}


class DecisionContext extends Component {

/*
    state = { id: 0, title: '', description: '', status: '' }

    handleChange(name, e) {
        let change = {}
        change[name] = e.target.value;
        this.setState(change);
        console.log(this.state);
    }
    */

    render() {
        return (
            <MuiThemeProvider>
                <Paper zDepth={1} style={style}>
                    <TextField
                        hintText="Insert Decision Id"
                        floatingLabelText="Decision Id"
                        //onChange={this.handleChange.bind(this, "id")}
                        />
                    <br />
                    <TextField
                        hintText="Insert Decision Title"
                        floatingLabelText="Decision Title"
                        //onChange={this.handleChange.bind(this, "title")}
                        />
                    <br />
                    <TextField
                        hintText="Insert Decision Descritption"
                        floatingLabelText="Decision Description"
                        //onChange={this.handleChange.bind(this, "description")}
                        />
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default DecisionContext;