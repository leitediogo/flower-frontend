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
import agent from 'superagent'
import Dialog from 'material-ui/Dialog'
import { browserHistory } from 'react-router'

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
        width: 500,
        height: 300
    }
};

class AddDecisionWizard extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            finished: false,
            stepIndex: 0,
            open: false,
            decision: {
                id: 0,
                name: '',
                description: '',
                status: 'Creation',
                category: '',
                createdBy: 'Diogo Leite',
                owner: {},
                participant: [],
                criteria: [],
                choice: [],
                tmpCritName: '',
                tmpCritDesc: '',
                tmpChoiceName: '',
                tmpChoiceDesc: '',
                tmpParticipantName: '',
                tmpParticipantDesc: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    postDecision() {
        console.log('posting process!')
        agent.post('http://localhost:3000/api/Decisions')
            .send({
                name: this.state.decision.name,
                definition: this.state.decision
            })
            .set('Accept', 'application/json')
            .end(function (err, res) {
                if (err || !res.ok) {
                    console.error(err);
                } else {
                    console.log('yay! decision posted ' + JSON.stringify(res.body));
                }
            })
    }

    handleInputChange = (e) => {
        console.log(e.target)
        let change = this.state
        change.decision[e.target.id] = e.target.value
        this.setState(change)
        console.log(this.state)
    }

    //Generalize selects per name
    handleSelectCategoryChange = (event, index, value) => {
        let change = this.state
        change.decision.category = value
        this.setState(change)
        console.log(this.state)
    }

    handleNextWizard = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 3,
        })
    }

    handlePrevWizard = () => {
        const {stepIndex} = this.state
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 })
        }
    }

    handleFinishWizard = () => {
        this.postDecision()
        browserHistory.push('/')
    }

    handleOpenModal = () => {
        this.setState({ open: true })
    }

    handleCloseModal = () => {
        this.setState({ open: false })
    }

    handleSaveCriteriaModal = () => {
        //set state to close modal
        this.setState({ open: false })
        //set state to push step
        let change = this.state
        let criterionToPush = {
            name: this.state.decision.tmpCritName,
            description: this.state.decision.tmpCritDesc
        }
        change.decision.criteria.push(criterionToPush)
        //reset tmps 
        change.decision.tmpCritName = ''
        change.decision.tmpCritDesc = ''
    }

    handleSaveChoiceModal = () => {
        //set state to close modal
        this.setState({ open: false })
        //set state to push step
        let change = this.state
        let choiceToPush = {
            name: this.state.decision.tmpChoiceName,
            description: this.state.decision.tmpChoiceDesc
        }
        change.decision.choice.push(choiceToPush)
        //reset tmps 
        change.decision.tmpChoiceName = ''
        change.decision.tmpChoiceDesc = ''
    }

    handleSaveParticipantModal = () => {
        //set state to close modal
        this.setState({ open: false })
        //set state to push step
        let change = this.state
        let participantToPush = {
            name: this.state.decision.tmpParticipantName,
            description: this.state.decision.tmpParticipantDesc
        }
        change.decision.participant.push(participantToPush)
        //reset tmps 
        change.decision.tmpParticipantName = ''
        change.decision.tmpParticipantDesc = ''
    }

    handleInformationRow = (event,index,value, rowNumber, columnId ) => {
        console.log('row clicked')
        console.log (event)
        console.log(index)
        console.log(value)
        console.log(rowNumber)
        console.log(columnId)
    }

    getStepContent(stepIndex) {
        const actionsCriteriaModal = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleCloseModal}
                />,
            <FlatButton
                label="Save"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleSaveCriteriaModal}
                />,
        ];

        const actionsChoiceModal = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleCloseModal}
                />,
            <FlatButton
                label="Save"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleSaveChoiceModal}
                />,
        ];

        const actionsParticipantModal = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleCloseModal}
                />,
            <FlatButton
                label="Save"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleSaveParticipantModal}
                />,
        ];

        switch (stepIndex) {
            case 0:
                return (
                    <div>
                        <Paper zDepth={0} style={styles.paper}>
                            <TextField
                                id="name"
                                hintText="Insert Decision Name"
                                floatingLabelText="Decision Name"
                                value={this.state.decision.name}
                                onChange={this.handleInputChange.bind(this)}
                                />
                            <br />
                            <TextField
                                id="description"
                                hintText="Insert Decision Description"
                                floatingLabelText="Decision Description"
                                value={this.state.decision.description}
                                onChange={this.handleInputChange.bind(this)}
                                multiLine={true}
                                rows={2}
                                />
                            <br />
                            <SelectField
                                id="category"
                                hintText="Insert Decision Category"
                                floatingLabelText="Decision Category"
                                value={this.state.decision.category}
                                onChange={this.handleSelectCategoryChange}
                                >
                                <MenuItem value={'Government'} primaryText="Government" />
                                <MenuItem value={'Consumer'} primaryText="Consumer" />
                                <MenuItem value={'Corporate'} primaryText="Corporate" />
                                <MenuItem value={'Finance'} primaryText="Finance" />
                                <MenuItem value={'Legal'} primaryText="Legal" />
                                <MenuItem value={'Educational'} primaryText="Educational" />
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
                                        <TableHeaderColumn>Name</TableHeaderColumn>
                                        <TableHeaderColumn>Description</TableHeaderColumn>
                                        <TableHeaderColumn>Action</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false} >
                                    {this.state.decision.criteria.map((row, index) => (
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
                                actions={actionsCriteriaModal}
                                modal={false}
                                open={this.state.open}
                                onRequestClose={this.handleCloseModal}
                                >
                                <TextField
                                    id="tmpCritName"
                                    hintText="Insert Criterion Name"
                                    floatingLabelText="Criterion Name"
                                    value={this.state.decision.tmpCritName}
                                    onChange={this.handleInputChange.bind(this)}
                                    />
                                <br />
                                <TextField
                                    id="tmpCritDesc"
                                    hintText="Insert Criterion Description"
                                    floatingLabelText="Criterion Description"
                                    value={this.state.decision.tmpCritDesc}
                                    onChange={this.handleInputChange.bind(this)}
                                    />
                            </Dialog>
                        </Paper>
                    </div>
                )
            case 2:
                return (
                    <div>
                        <Paper zDepth={0} style={styles.paper}>
                            <Table>
                                <TableHeader displaySelectAll={false}>
                                    <TableRow>
                                        <TableHeaderColumn>Name</TableHeaderColumn>
                                        <TableHeaderColumn>Description</TableHeaderColumn>
                                        <TableHeaderColumn>Action</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false} >
                                    {this.state.decision.choice.map((row, index) => (
                                        <TableRow key={index} selected={row.selected}>
                                            <TableRowColumn>{row.name}</TableRowColumn>
                                            <TableRowColumn>{row.description}</TableRowColumn>
                                            <TableRowColumn><FlatButton icon={iconDelete} href="/" /></TableRowColumn>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <RaisedButton label="Add Choices" onTouchTap={this.handleOpenModal} fullWidth={true} />
                            <Dialog
                                title="Add Choices"
                                actions={actionsChoiceModal}
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
                )
            case 3:
                return (
                    <div>
                        <Paper zDepth={0} style={styles.paper}>
                            <Table>
                                <TableHeader displaySelectAll={false}>
                                    <TableRow>
                                        <TableHeaderColumn>Name</TableHeaderColumn>
                                        <TableHeaderColumn>Description</TableHeaderColumn>
                                        <TableHeaderColumn>Action</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false} >
                                    {this.state.decision.participant.map((row, index) => (
                                        <TableRow key={index} selected={row.selected}>
                                            <TableRowColumn>{row.name}</TableRowColumn>
                                            <TableRowColumn>{row.description}</TableRowColumn>
                                            <TableRowColumn><FlatButton icon={iconDelete} href="/" /></TableRowColumn>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <RaisedButton label="Add Participants" onTouchTap={this.handleOpenModal} fullWidth={true} />
                            <Dialog
                                title="Add Participants"
                                actions={actionsParticipantModal}
                                modal={false}
                                open={this.state.open}
                                onRequestClose={this.handleCloseModal}
                                >
                                <TextField
                                    id="tmpParticipantName"
                                    hintText="Insert Participant Name"
                                    floatingLabelText="Participant Name"
                                    value={this.state.decision.tmpParticipantName}
                                    onChange={this.handleInputChange.bind(this)}
                                    />
                                <br />
                                <TextField
                                    id="tmpParticipantDesc"
                                    hintText="Insert Participant Description"
                                    floatingLabelText="Participant Description"
                                    value={this.state.decision.tmpParticipantDesc}
                                    onChange={this.handleInputChange.bind(this)}
                                    />
                            </Dialog>
                        </Paper>
                    </div>
                )
            case 4:
                return (
                    <div>
                        <Paper zDepth={1} style={styles.paper}>
                            <Table onCellClick={this.handleInformationRow}>
                                <TableHeader displaySelectAll={false}>
                                    <TableRow>
                                        {this.state.decision.criteria.map((row, index) => (
                                            <TableHeaderColumn key={index}>{row.name}</TableHeaderColumn>
                                        ))}
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false} >
                                    {this.state.decision.choice.map((row, index) => (
                                        <TableRow key={index} selected={row.selected}>
                                            <TableRowColumn>{row.name}</TableRowColumn>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </div>
                )
            default:
                return 'Houston? Wizard has gone to default case.'
        }
    }
    render() {
        const {stepIndex} = this.state
        const contentStyle = { margin: '0 16px' }
        return (
            <MuiThemeProvider>
                <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
                    <br /><br /><br />
                    <Stepper activeStep={stepIndex}>
                        <Step>
                            <StepLabel>Decision</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Criteria</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Choices</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Participation</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Information Matrix</StepLabel>
                        </Step>
                    </Stepper>
                    <div style={contentStyle}>

                        <div>
                            {this.getStepContent(stepIndex)}
                            <div style={{ marginTop: 12 }}>
                                <FlatButton
                                    label="Back"
                                    disabled={stepIndex === 0}
                                    onTouchTap={this.handlePrevWizard}
                                    style={{ marginRight: 12 }}
                                    />
                                <RaisedButton
                                    label={stepIndex === 4 ? 'Finish' : 'Next'}
                                    primary={true}
                                    onTouchTap={stepIndex === 4 ? this.handleFinishWizard : this.handleNextWizard}
                                    />
                            </div>
                        </div>

                    </div>
                </div>
            </MuiThemeProvider>
        )
    }

}

export default AddDecisionWizard