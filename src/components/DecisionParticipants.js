import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'

let style = {
    margin: 20,
    textAlign: 'center'
}

class DecisionParticipants extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Paper zDepth={1} style={style}>
                    <TextField
                        hintText="Insert Participant Id"
                        floatingLabelText="Participant Id"
                        //onChange={this.handleChange.bind(this, "id")}
                        />
                    <br />
                    <TextField
                        hintText="Insert Participant Title"
                        floatingLabelText="Participant Title"
                        //onChange={this.handleChange.bind(this, "title")}
                        />
                    <br />
                    <TextField
                        hintText="Insert Participant Descritption"
                        floatingLabelText="Participant Description"
                        //onChange={this.handleChange.bind(this, "description")}
                        />
                    <br />
                    <br />
                    <FlatButton label="Add" href="/" />
                    <FlatButton label="Remove" href="/" />
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Description</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableRowColumn>1</TableRowColumn>
                                <TableRowColumn>Participant1</TableRowColumn>
                                <TableRowColumn>Description Participant1</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>2</TableRowColumn>
                                <TableRowColumn>Participant2</TableRowColumn>
                                <TableRowColumn>Description Participant2</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>3</TableRowColumn>
                                <TableRowColumn>Participant3</TableRowColumn>
                                <TableRowColumn>Description Participant3</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>4</TableRowColumn>
                                <TableRowColumn>Participant4</TableRowColumn>
                                <TableRowColumn>Description Participant4</TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default DecisionParticipants;