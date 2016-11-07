import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton'

let style = {
    margin: 20,
    textAlign: 'center'
}

class DecisionChoice extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Paper zDepth={1} style={style}>
                    <TextField
                        hintText="Insert Choice Id"
                        floatingLabelText="Choice Id"
                        //onChange={this.handleChange.bind(this, "id")}
                        />
                    <br />
                    <TextField
                        hintText="Insert Choice Title"
                        floatingLabelText="Choice Title"
                        //onChange={this.handleChange.bind(this, "title")}
                        />
                    <br />
                    <TextField
                        hintText="Insert Choice Descritption"
                        floatingLabelText="Choice Description"
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
                                <TableRowColumn>Choice1</TableRowColumn>
                                <TableRowColumn>Description Choice1</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>2</TableRowColumn>
                                <TableRowColumn>Choice2</TableRowColumn>
                                <TableRowColumn>Description Choice2</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>3</TableRowColumn>
                                <TableRowColumn>Choice3</TableRowColumn>
                                <TableRowColumn>Description Choice3</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>4</TableRowColumn>
                                <TableRowColumn>Choice4</TableRowColumn>
                                <TableRowColumn>Description Choice4</TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default DecisionChoice;