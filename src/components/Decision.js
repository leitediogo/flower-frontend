import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'
import agent from 'superagent'

class Decision extends Component {
    constructor() {
        super()
        this.state = { id: 0, title: '', description: '', status: '' }
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
            .end(function (err, res) {
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
                <div>
                    <br />
                    <br />
                    <br />
                    <form>
                        <h2>Decision Context</h2>
                        <TextField
                            ref='id'
                            hintText="Insert Decision Id"
                            floatingLabelText="Decision Id"
                            onChange={this.handleChange.bind(this, "id")}
                            />
                        <br />
                        <TextField
                            ref='title'
                            hintText="Insert Decision Title"
                            floatingLabelText="Decision Title"
                            onChange={this.handleChange.bind(this, "title")}
                            />
                        <br />
                        <TextField
                            ref='description'
                            hintText="Insert Decision Descritption"
                            floatingLabelText="Decision Description"
                            onChange={this.handleChange.bind(this, "description")}
                            />
                        <br />
                        <br />
                        <br />
                        <br />                        
                        <Divider />
                        <br />
                        <br />                        
                        <FlatButton label="Save" onTouchTap={this.saveDecision.bind(this)} />
                        <FlatButton label="Cancel" href="/" />
                    </form>
                </div>
            </MuiThemeProvider>
        )
    }

}

export default Decision