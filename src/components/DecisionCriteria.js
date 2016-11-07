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

class DecisionCriteria extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Paper zDepth={1} style={style}>
                    <TextField
                        hintText="Insert Criteria Id"
                        floatingLabelText="Criteria Id"
                        //onChange={this.handleChange.bind(this, "id")}
                        />
                    <br />
                    <TextField
                        hintText="Insert Criteria Title"
                        floatingLabelText="Criteria Title"
                        //onChange={this.handleChange.bind(this, "title")}
                        />
                    <br />
                    <TextField
                        hintText="Insert Criteria Descritption"
                        floatingLabelText="Criteria Description"
                        //onChange={this.handleChange.bind(this, "description")}
                        />
                    <br />
                    <br />
                    <FlatButton label="Add" href="/" />
                    <FlatButton label="Remove" href="/" />
                    <Table>
                        <TableHeader displaySelectAll={false}>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Description</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow displayRowCheckbox={false}>
                                <TableRowColumn>1</TableRowColumn>
                                <TableRowColumn>Criteria1</TableRowColumn>
                                <TableRowColumn>Description Criteria1</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>2</TableRowColumn>
                                <TableRowColumn>Criteria2</TableRowColumn>
                                <TableRowColumn>Description Criteria2</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>3</TableRowColumn>
                                <TableRowColumn>Criteria3</TableRowColumn>
                                <TableRowColumn>Description Criteria3</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>4</TableRowColumn>
                                <TableRowColumn>Criteria4</TableRowColumn>
                                <TableRowColumn>Description Criteria4</TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default DecisionCriteria;