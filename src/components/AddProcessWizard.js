import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { Step, Stepper, StepLabel } from 'material-ui/Stepper'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { Table, TableRow, TableBody, TableRowColumn, TableHeader, TableHeaderColumn } from 'material-ui/Table'
import IconDelete from 'material-ui/svg-icons/action/delete'
import Checkbox from 'material-ui/Checkbox';
import agent from 'superagent'
import Dialog from 'material-ui/Dialog';
import Link from 'react-router'

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
        textAlign: 'left',
        display: 'inline-block',
        width: 500,
        height: 300
    },
    select: {
        align: 'left'
    }
}

const tableDataSteps = [
    {
        order: '1',
        type: 'Get branch information',
        name: 'PPO Platform'
    },
    {
        order: '2',
        type: 'Send proposal',
        name: 'Send Mail'
    }
]

const tableDataSupervisorTeam = [
    {
        name: 'John Smith',
        function: 'Manager'
    },
    {
        name: 'Mathew',
        function: 'Analyst'
    }
]

const tableDataSupportTeam = [
    {
        name: 'Mary Higgins',
        function: 'Helpdesk'
    },
    {
        name: 'Mathew',
        function: 'Operations'
    }
]

class AddProcessWizard extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            finished: false,
            stepIndex: 0,
            open: false,
            id: 0,
            processDef: {
                name: '',
                acronym: '',
                description: '',
                type: 1,
                help: '',
                status: 'certification',
                version: '',
                isActive: false,
                notifySupervisorOnEnd: true,
                notifySupervisorOnError: false,
                AssignSupervisorOnError: false,
                blockProcessExecution: true,
                tempSupervisorName: '',
                tempSupervisorFunction: '',
                supervisorTeam: [],
                supportTeam: [],
                step: {
                    name: '',
                    type: '',
                    permissions: {
                        userId: '',
                        userName: '',
                        function: ''
                    },
                    notification: {
                        supervisorOnError: false,
                        supervisorOnEnd: false
                    },
                    errorHandling: {
                        AssigntoSupervisorOnError: false,
                        blockProcessExecution: false
                    },
                }
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    saveProcess() {
        agent.post('http://localhost:3000/api/Processes')
            .send({
                id: 0,
                name: this.state.processDef.name,
                definition: this.state.processDef
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

    handleChange = (name, e) => {
        let change = this.state
        change.processDef[name] = e.target.value
        this.setState(change)
        console.log(this.state)
    }

    handleSelectChange = (event, index, value) => {
        console.log(event.target)
        let change = this.state.processDef
        change.type = value
        this.setState(change)
        //this.setState({ value }) //Initial
        console.log(this.state)
    }

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

    handleOpen = () => {
        this.setState({ open: true })
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    saveSupervisor () {
        //let change = this.state.processDef.supervisorTeam
        //console.log(tableDataSupervisorTeam)
        let adition = []
        console.log(this.state.processDef.tempSupervisorName)
        tableDataSupervisorTeam.push({ userName:'sss', function: 'fff' })
        //change[this.state.processDef.supervisorTeam.length] = { userName: 'zzz', function: 'fuu' }
        //this.setState(change)
        //console.log(this.state)
        //this.setState({ open: false })
    }

    getStepContent(stepIndex) {

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
                />,
            <FlatButton
                label="Save"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.saveSupervisor}
                />
        ]

        switch (stepIndex) {
            case 0:
                return (
                    <div>
                        <Paper zDepth={0} style={styles.paper}>
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
                                style={styles.select}
                                floatingLabelText="Type"
                                value={this.state.processDef.type}
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
                        <Paper zDepth={0} style={styles.paper}>
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
                                    {tableDataSteps.map((row, index) => (
                                        <TableRow key={index} selected={row.selected}>
                                            <TableRowColumn>{row.order}</TableRowColumn>
                                            <TableRowColumn>{row.type}</TableRowColumn>
                                            <TableRowColumn>{row.name}</TableRowColumn>
                                            <TableRowColumn><FlatButton icon={iconDelete} href="/" /></TableRowColumn>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <RaisedButton label="Add Step" onTouchTap={this.handleOpen} fullWidth={true} />
                            <Dialog
                                title="Add a step"
                                actions={actions}
                                modal={false}
                                open={this.state.open}
                                onRequestClose={this.handleClose}
                                >
                                <TextField
                                    hintText="Insert Step Name"
                                    floatingLabelText="Step Name"
                                    />

                                <br />
                                <SelectField
                                    style={styles.select}
                                    floatingLabelText="Step type"
                                    //value={this.state.processDef.type}
                                    //onChange={this.handleSelectChange}
                                    >
                                    <MenuItem value={1} primaryText="PPO Platform" />
                                    <MenuItem value={2} primaryText="Send Mail" />
                                    <MenuItem value={3} primaryText="3270" />
                                    <MenuItem value={4} primaryText="Assign Task" />
                                </SelectField>
                                <br />
                                <br />
                            </Dialog>
                            <br />
                            <br />
                        </Paper>
                    </div>
                )
            case 2:
                return (
                    <div style={styles.block}>
                        <Paper zDepth={0} style={styles.paper}>
                            <br />
                            <br />
                            <Checkbox
                                label="Notify Supervisor On Error"
                                style={styles.checkbox}
                                labelPosition="left"
                                defaultChecked={this.state.processDef.notifySupervisorOnError}
                                onChange={this.handleChange.bind(this, 'notifySupervisorOnError')}
                                />
                            <Checkbox
                                label="Notify Supervisor On End"
                                style={styles.checkbox}
                                labelPosition="left"
                                defaultChecked={this.state.processDef.notifySupervisorOnEnd}
                                onChange={this.handleChange.bind(this, 'notifySupervisorOnEnd')}
                                />
                            <Table>
                                <TableHeader displaySelectAll={false}>
                                    <TableRow>
                                        <TableHeaderColumn>Name</TableHeaderColumn>
                                        <TableHeaderColumn>Function</TableHeaderColumn>
                                        <TableHeaderColumn>Action</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false} >
                                    {tableDataSupervisorTeam.map((row, index) => (
                                        <TableRow key={index} selected={row.selected}>
                                            <TableRowColumn>{row.name}</TableRowColumn>
                                            <TableRowColumn>{row.function}</TableRowColumn>
                                            <TableRowColumn><FlatButton icon={iconDelete} href="/" /></TableRowColumn>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <RaisedButton label="Add Supervisor" onTouchTap={this.handleOpen} fullWidth={true} />
                            <Dialog
                                title="Add Supervisor"
                                actions={actions}
                                modal={false}
                                open={this.state.open}
                                onRequestClose={this.handleClose}
                                >
                                <TextField
                                    hintText="Insert Supervisor Name"
                                    floatingLabelText="Supervisor Name"
                                    onChange={this.handleChange.bind(this, 'tempSupervisorName')}
                                    />
                                <br />
                                <TextField
                                    hintText="Insert Supervisor Function"
                                    floatingLabelText="Supervisor Function"
                                    onChange={this.handleChange.bind(this, 'tempSupervisorFunction')}
                                    />
                                <br />
                                <br />
                                <br />
                            </Dialog>
                            <br />
                            <br />
                        </Paper>
                    </div>
                )
            case 3:
                return (
                    <div style={styles.block}>
                        <Paper zDepth={0} style={styles.paper}>
                            <br />
                            <br />
                            <Checkbox
                                label="Assign to Supervisor On Error"
                                style={styles.checkbox}
                                labelPosition="left"
                                defaultChecked={this.state.processDef.AssignSupervisorOnError}
                                onChange={this.handleChange.bind(this, 'AssignSupervisorOnError')}
                                />
                            <Checkbox
                                label="Block Process Execution"
                                style={styles.checkbox}
                                labelPosition="left"
                                defaultChecked={this.state.processDef.blockProcessExecution}
                                onChange={this.handleChange.bind(this, 'blockProcessExecution')}
                                />

                            <Table>
                                <TableHeader displaySelectAll={false}>
                                    <TableRow>
                                        <TableHeaderColumn>Name</TableHeaderColumn>
                                        <TableHeaderColumn>Function</TableHeaderColumn>
                                        <TableHeaderColumn>Action</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false} >
                                    {tableDataSupportTeam.map((row, index) => (
                                        <TableRow key={index} selected={row.selected}>
                                            <TableRowColumn>{row.name}</TableRowColumn>
                                            <TableRowColumn>{row.function}</TableRowColumn>
                                            <TableRowColumn><FlatButton icon={iconDelete} href="/" /></TableRowColumn>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <RaisedButton label="Add Step" onTouchTap={this.handleOpen} fullWidth={true} />
                            <Dialog
                                title="Add a support team member"
                                actions={actions}
                                modal={false}
                                open={this.state.open}
                                onRequestClose={this.handleClose}
                                >
                                <TextField
                                    hintText="Insert Step Name"
                                    floatingLabelText="Step Name"
                                    />

                                <br />
                                <SelectField
                                    style={styles.select}
                                    floatingLabelText="Step type"
                                    //value={this.state.processDef.type}
                                    //onChange={this.handleSelectChange}
                                    >
                                    <MenuItem value={1} primaryText="PPO Platform" />
                                    <MenuItem value={2} primaryText="Send Mail" />
                                    <MenuItem value={3} primaryText="3270" />
                                    <MenuItem value={4} primaryText="Assign Task" />
                                </SelectField>
                                <br />
                                <br />
                            </Dialog>
                            <br />
                            <br />
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
                            <p>
                                <Link to="#" onClick={(event) => {
                                    this.saveProcess()
                                } }
                                    >
                                    Save</Link> the Process?
                            </p>
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