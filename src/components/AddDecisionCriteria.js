import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
    from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton'

const styles = {
    smallIcon: {
        width: 36,
        height: 36,
    },
    small: {
        width: 72,
        height: 72,
        padding: 16,
    },
    paperStyle: {
        margin: 20,
        textAlign: 'center'
    }
}


const tableData = [
    {
        name: 'Value',
        status: 'Presumed value'
    },
    {
        name: 'Time',
        status: 'Presumed Time'
    }
]

class AddDecisionCriteria extends Component {
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
                    <Paper zDepth={1} style={styles.paperStyle}>
                        <TextField
                            hintText="Insert Criteria Id"
                            floatingLabelText="Criteria Id"
                            onChange={this.handleChange.bind(this, "id")}
                            />
                        <br />
                        <TextField
                            hintText="Insert Criteria Title"
                            floatingLabelText="Criteria Title"
                            onChange={this.handleChange.bind(this, "title")}
                            />
                        <br />
                        <TextField
                            hintText="Insert Criteria Descritption"
                            floatingLabelText="Criteria Description"
                            onChange={this.handleChange.bind(this, "description")}
                            />
                        <br />
                        <br />
                        <FlatButton label="Add" />
                        <Table>
                            <TableHeader displaySelectAll={false}>
                                <TableRow>
                                    <TableHeaderColumn tooltip="Criteria Name">Name</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Criteria Description">Description</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Remove Criteria">Remove</TableHeaderColumn>

                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                {tableData.map((row, index) => (
                                    <TableRow key={index} selected={row.selected}>
                                        <TableRowColumn>{row.name}</TableRowColumn>
                                        <TableRowColumn>{row.status}</TableRowColumn>
                                        <TableRowColumn>
                                            <IconButton iconStyle={styles.smallIcon} style={styles.small}><DeleteIcon />
                                            </IconButton>
                                        </TableRowColumn>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default AddDecisionCriteria