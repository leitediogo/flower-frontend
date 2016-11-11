import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { Table, TableRow, TableBody, TableRowColumn, TableHeader, TableHeaderColumn } from 'material-ui/Table'
import IconDelete from 'material-ui/svg-icons/action/delete'
import Checkbox from 'material-ui/Checkbox';

const iconDelete = <IconDelete />



const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
    paper: {
        margin: 20,
        textAlign: 'center',
        width: 500,
        height: 300
    }
};

const tableData = [
    {
        order: '1',
        type: 'John Smith',
        name: 'PPO Platform'
    },
    {
        order: '2',
        type: 'Mathew',
        name: 'Send Mail'
    }
]

class AddProcessWizard extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            finished: false,
            stepIndex: 0,
            value: 1,
            processDef: {
                name: '',
                acronym: '',
                description: '',
                type: 1,
                help: '',
                status: 'certification',
                version: '',
                isActive: false,
                supervisorTeam: {
                    userId: '',
                    userName: '',
                    function: ''
                },
                supportTeam: {
                    userId: '',
                    userName: '',
                    function: ''
                },
                step: {
                    name: '',
                    type: '',
                    permissions: {
                        userId: '',
                        userName: '',
                        function: ''
                    },
                    notification: {
                        supervisorOnError: '',
                        supervisorOnEnd: ''
                    },
                    errorHandling: {
                        AssigntoSupervisorOnError: false,
                        blockProcessExecution: false
                    },
                },
                notification: {
                    supervisorOnError: false,
                    supervisorOnEnd: false
                },
                errorHandling: {
                    AssigntoSupervisorOnError: false,
                    blockProcessExecution: false
                }
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name, e) {
        //TODO: bind select
        let change = this.state
        change.processDef[name] = e.target.value
        this.setState(change)
        console.log(this.state)
    }

    handleSelectChange = (event, index, value) => this.setState({ value });

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 3,
        })
    }

    handlePrev = () => {
        const {stepIndex} = this.state
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 })
        }
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <div>
                        <Paper zDepth={1} style={styles.paper}>
                            <TextField
                                hintText="Insert Process Name"
                                floatingLabelText="Process Name"
                                value={this.state.processDef.name}
                                onChange={this.handleChange.bind(this, 'name')}
                                />
                            <br />
                            <TextField
                                hintText="Insert Process Acronym"
                                floatingLabelText="Process Acronym"
                                value={this.state.processDef.acronym}
                                onChange={this.handleChange.bind(this, 'acronym')}
                                />
                            <br />
                            <TextField
                                hintText="Insert Process Description"
                                floatingLabelText="Process Description"
                                value={this.state.processDef.description}
                                onChange={this.handleChange.bind(this, 'description')}
                                />
                            <br />
                            <SelectField
                                value={this.state.value}
                                onChange={this.handleSelectChange}
                                >
                                <MenuItem value={1} primaryText="Automated" />
                                <MenuItem value={2} primaryText="Sequential" />
                                <MenuItem value={3} primaryText="Case" />
                                <MenuItem value={4} primaryText="Check" />
                            </SelectField>
                            <br />
                        </Paper>
                    </div>
                )
            case 1:
                return (
                    <div>
                        <Paper zDepth={1} style={styles.paper}>
                            <Table>
                                <TableHeader displaySelectAll={false}>
                                    <TableRow>
                                        <TableHeaderColumn>Order</TableHeaderColumn>
                                        <TableHeaderColumn>Type</TableHeaderColumn>
                                        <TableHeaderColumn>Name</TableHeaderColumn>
                                        <TableHeaderColumn>Action</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false} >
                                    {tableData.map((row, index) => (
                                        <TableRow key={index} selected={row.selected}>
                                            <TableRowColumn>{row.order}</TableRowColumn>
                                            <TableRowColumn>{row.type}</TableRowColumn>
                                            <TableRowColumn>{row.name}</TableRowColumn>
                                            <TableRowColumn><FlatButton icon={iconDelete} href="/" /></TableRowColumn>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <FlatButton label="Add" href="/" />
                        </Paper>
                    </div>
                )
            case 2:
                return (
                    <div style={styles.block}>
                        <Paper zDepth={1} style={styles.paper}>
                            <br />
                            <br />
                            <Checkbox
                                label="Notify Supervisor On Error"
                                style={styles.checkbox}
                                />
                            <Checkbox
                                label="Notify Supervisor On End"
                                style={styles.checkbox}
                                />
                        </Paper>
                    </div>
                )
            case 3:
                return (
                    <div style={styles.block}>
                        <Paper zDepth={1} style={styles.paper}>
                            <br />
                            <br />
                            <Checkbox
                                label="Assign to Supervisor On Error"
                                style={styles.checkbox}
                                />
                            <Checkbox
                                label="Block Process Execution"
                                style={styles.checkbox}
                                />
                        </Paper>
                    </div>
                )
            default:
                return 'Houston?'
        }
    }
    render() {
        const {finished, stepIndex} = this.state
        const contentStyle = { margin: '0 16px' }
        return (
            <MuiThemeProvider>
                <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
                    <br /><br /><br />
                    <Stepper activeStep={stepIndex}>
                        <Step>
                            <StepLabel>Identification</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Flow</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Notification</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Exception Handling</StepLabel>
                        </Step>
                    </Stepper>
                    <div style={contentStyle}>
                        {finished ? (
                            alert('Process Saved')
                        ) : (
                                <div>
                                    {this.getStepContent(stepIndex)}
                                    <div style={{ marginTop: 12 }}>
                                        <FlatButton
                                            label="Back"
                                            disabled={stepIndex === 0}
                                            onTouchTap={this.handlePrev}
                                            style={{ marginRight: 12 }}
                                            />
                                        <RaisedButton
                                            label={stepIndex === 3 ? 'Finish' : 'Next'}
                                            primary={true}
                                            onTouchTap={this.handleNext}
                                            />
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }

}

export default AddProcessWizard;