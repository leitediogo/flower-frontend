import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import { Table, TableRow, TableBody, TableRowColumn, TableHeader, TableHeaderColumn } from 'material-ui/Table'
import Dialog from 'material-ui/Dialog'

const styles = {
    paper: {
        margin: 20,
        textAlign: 'left',
        width: 500,
        height: 300
    }
}

class WizardMatrix extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            open: false,
            row: 0,
            col: 0,
            tmpCell: ''
        }
    }

    handleInputChange = (e) => {
        let change = this.state
        change[e.target.id] = e.target.value
        this.setState(change)
        console.log(this.state)
    }

    handleInformationRow = (rowNumber, columnId) => {
        console.log('clicked row: ', rowNumber, ' column: ', columnId)
        this.setState({ open: true, row: rowNumber, col: columnId })
    }

    handleSaveInformationModal = () => {
        console.log('handleSaveInformation')
        //set state to close modal
        this.setState({ open: false })
    }

    handleOpenModal() {
        this.setState({ open: true })
    }

    handleCloseModal = () => {
        this.setState({ open: false })
    }


    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleCloseModal}
                />,
            <FlatButton
                label="Save"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleSaveInformationModal}
                />,
        ]

        return (
            <MuiThemeProvider>
                <div>
                    <Paper zDepth={1} style={styles.paper}>
                        <Table onCellClick={this.handleInformationRow}>
                            <TableHeader
                                displaySelectAll={false}
                                adjustForCheckbox={false}
                                enableSelectAll={false}
                                >
                                <TableRow>
                                    <TableHeaderColumn key='0'>-</TableHeaderColumn>
                                    {this.props.decision.criteria.map((row, index) => (
                                        <TableHeaderColumn key={index}>{row.name}</TableHeaderColumn>
                                    ))}
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false} >
                                {this.props.decision.choices.map((row, index) => (
                                    <TableRow key={index} selected={row.selected}>
                                        <TableRowColumn>{row.name}</TableRowColumn>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <Dialog
                            title="Add Information for cell"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleCloseModal}>
                            <br />
                            col : {this.state.col}
                            <br />
                            row : {this.state.row}
                            <hr />
                            <TextField
                                id="tmpCell"
                                hintText="Insert information"
                                floatingLabelText="Information"
                                value={this.state.tmpCell}
                                onChange={this.handleInputChange.bind(this)}
                                />
                            <br />
                        </Dialog>
                    </Paper>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default WizardMatrix