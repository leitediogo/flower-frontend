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

class AddDecisionChoices extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Paper zDepth={1} style={styles.paperStyle}>
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
                        <FlatButton label="Add" />
                        <Table>
                            <TableHeader displaySelectAll={false}>
                                <TableRow>
                                    <TableHeaderColumn tooltip="Choice Name">Name</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Choice Description">Description</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Remove Choice">Remove</TableHeaderColumn>

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

export default AddDecisionChoices