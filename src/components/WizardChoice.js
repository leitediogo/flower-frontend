import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import IconDelete from 'material-ui/svg-icons/action/delete'
import FlatButton from 'material-ui/FlatButton'
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

class WizardChoice extends Component {

       constructor(props, context) {
        super(props, context)
        this.state = {
            open: false,
            tmpChoiceName: '',
            tmpChoiceDesc: ''
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

    handleSendSaveChoice = () => {
        console.log('handleSendSaveChoice')
        //update global state
        this.props.handleSaveChoice(this.state.tmpChoiceName, this.state.tmpChoiceDesc)
        //close modal
        this.setState({ open: false })
        //reset tmps 
        this.setState({ tmpChoiceName: '', tmpChoiceDesc: '' })
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
                onTouchTap={this.handleSendSaveChoice}
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
                                    <TableHeaderColumn>Description</TableHeaderColumn>
                                    <TableHeaderColumn>Action</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false} >
                                {this.props.decision.choice.map((row, index) => (
                                    <TableRow key={index} selected={row.selected}>
                                        <TableRowColumn>{row.name}</TableRowColumn>
                                        <TableRowColumn>{row.description}</TableRowColumn>
                                        <TableRowColumn><FlatButton icon={iconDelete} href="/" /></TableRowColumn>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <RaisedButton label="Add Criteria" onTouchTap={this.handleOpenModal} fullWidth={true} />
                        <Dialog
                            title="Add Criteria"
                            actions={this.actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleCloseModal}
                            >
                            <TextField
                                id="tmpChoiceName"
                                hintText="Insert Choice Name"
                                floatingLabelText="Choice Name"
                                value={this.state.decision.tmpChoiceName}
                                onChange={this.handleInputChange.bind(this)}
                                />
                            <br />
                            <TextField
                                id="tmpChoiceDesc"
                                hintText="Insert Choice Description"
                                floatingLabelText="Choice Description"
                                value={this.state.decision.tmpChoiceDesc}
                                onChange={this.handleInputChange.bind(this)}
                                />
                        </Dialog>
                    </Paper>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default WizardChoice