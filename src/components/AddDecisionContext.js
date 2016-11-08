import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import agent from 'superagent'

let style = {
    margin: 20,
    textAlign: 'center'
}

class AddDecisionContext extends Component {
    constructor() {
        super()
        this.state = {
            id: 0,
            title: '',
            description: '',
            status: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    saveDecision() {
        agent.post('http://localhost:3000/api/Decisions')
            .send({
                id: this.state.id,
                name: this.state.title,
                description: this.state.description,
                status: "ongoing",
                createdById: 0,
                ownerId: 0,
                categoryId: 1,
                dueDt: "2016-10-28",
                creationDt: "2016-10-28",
                lastUpdateDt: "2016-10-28"
            })
            .set('Accept', 'application/json')
            .end(function(err, res) {
                if (err || !res.ok) {
                    console.log('Oh no! error');
                } else {
                    console.log('yay got ' + JSON.stringify(res.body));
                }
            })
    }

    handleChange(name, e) {
        let change = {}
        change[name] = e.target.value;
        this.setState(change);
        console.log(change);
    }

    render() {
        return (
            <MuiThemeProvider>
                <Paper zDepth={1} style={style}>
                    <TextField
                        hintText="Insert Decision Id"
                        floatingLabelText="Decision Id"
                        onChange={this.handleChange.bind(this, "id")}
                        />
                    <br />
                    <TextField
                        hintText="Insert Decision Title"
                        floatingLabelText="Decision Title"
                        onChange={this.handleChange.bind(this, "title")}
                        />
                    <br />
                    <TextField
                        hintText="Insert Decision Descritption"
                        floatingLabelText="Decision Description"
                        onChange={this.handleChange.bind(this, "description")}
                        />
                        <FlatButton label="Save" onTouchTap={this.saveDecision.bind(this)} href="/" />
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default AddDecisionContext