import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import IconDelete from 'material-ui/svg-icons/action/delete'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { Table, TableRow, TableBody, TableRowColumn, TableHeader, TableHeaderColumn } from 'material-ui/Table'
import Dialog from 'material-ui/Dialog'

const iconDelete = <IconDelete />

const styles = {
    paper: {
        margin: 20,
        textAlign: 'left',
        width: 500,
        height: 300
    }
}

class WizardParticipants extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            open: false,
            tmpPartName: '',
            tmpPartRole: ''
        }
    }

    handleInputChange = (e) => {
        let change = this.state
        change[e.target.id] = e.target.value
        this.setState(change)
        console.log(this.state)
    }

    handleOpenModal = () => {
        this.setState({ open: true })
    }

    handleCloseModal = () => {
        this.setState({ open: false })
    }

    handleSendSaveParticipant = () => {
        console.log('handleSendSaveParticipant')
        //update global state
        this.props.handleSaveParticipant(this.state.tmpPartName, this.state.tmpPartRole)
        //close modal
        this.setState({ open: false })
        //reset tmps 
        this.setState({ tmpPartName: '', tmpPartRole: '' })
    }

    actions = [
        <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleCloseModal}
            />,
        <FlatButton
            label="Save"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleSendSaveParticipant}
            />,
    ]

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Paper zDepth={0} style={styles.paper}>
                        <Table>
                            <TableHeader
                                displaySelectAll={false}
                                adjustForCheckbox={false}
                                enableSelectAll={false}
                                >
                                <TableRow>
                                    <TableHeaderColumn>Name</TableHeaderColumn>
                                    <TableHeaderColumn>Role</TableHeaderColumn>
                                    <TableHeaderColumn>Action</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false} >
                                {this.props.decision.participants.map((row, index) => (
                                    <TableRow key={index} selected={row.selected}>
                                        <TableRowColumn>{row.name}</TableRowColumn>
                                        <TableRowColumn>{row.role}</TableRowColumn>
                                        <TableRowColumn><FlatButton icon={iconDelete} href="/" /></TableRowColumn>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <RaisedButton label="Add Participant" onTouchTap={this.handleOpenModal} fullWidth={true} />
                        <Dialog
                            title="Add Participant"
                            actions={this.actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleCloseModal}
                            >
                            <TextField
                                id="tmpPartName"
                                hintText="Insert Participant Name"
                                floatingLabelText="Participant Name"
                                value={this.state.tmpPartName}
                                onChange={this.handleInputChange.bind(this)}
                                />
                            <br />
                            <TextField
                                id="tmpPartRole"
                                hintText="Insert Participant Role"
                                floatingLabelText="Participant Role"
                                value={this.state.tmpPartRole}
                                onChange={this.handleInputChange.bind(this)}
                                />
                        </Dialog>
                    </Paper>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default WizardParticipants