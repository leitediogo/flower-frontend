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
import Dialog from 'material-ui/Dialog';

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

let tableDataCriteria = [
    {
        name: 'Cost',
        description: 'cost of ownership'
    },
    {
        name: 'Weight',
        descrition: 'Heavy lifting'
    }
]

let tableDataChoices = [
    {
        name: 'Buy',
        description: 'go for it'
    },
    {
        name: 'Rent',
        descrition: 'try it'
    }
]


let tableDataParticipants = [
    {
        name: 'Diogo',
        description: 'owner'
    },
    {
        name: 'Fran',
        description: 'participant'
    }
]

class AddDecision extends Component {

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
                category: 1,
                owner: {
                    userId: 0,
                    userName: '',
                    function: ''
                },
                participant: [
                    {
                        name: 'Diogo',
                        description: 'owner'
                    }
                ],
                criteria: [
                    {
                        name: 'Cost',
                        description: 'cost of ownership'
                    }],
                choice: [
                    {
                        name: 'Buy',
                        description: 'go for it'
                    }
                ],
                tmpCritName: '',
                tmpCritDesc: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    postDecision() {
        agent.post('http://localhost:3000/api/Decisions')
            .send({
                name: this.state.decision.name,
                description: this.state.decision.description,
                status: "ongoing",
                createdById: 0,
                ownerId: 0,
                categoryId: 1,
                dueDt: "2016-10-28",
                creationDt: "2016-10-28",
                lastUpdateDt: "2016-10-28"
            })
            .set('Accept', 'application/json')
            .end(function (err, res) {
                if (err || !res.ok) {
                    console.log(err)
                    console.log(res.body)
                } else {
                    console.log('yay got ' + JSON.stringify(res.body));
                }
            })
    }

    saveCriteria() {
        tableDataCriteria = [
            {
                name: 'Cost',
                description: 'cost of ownership'
            },
            {
                name: 'Weight',
                descrition: 'Heavy lifting'
            },
            {
                name: 'New Crit',
                descrition: 'Heavy lifting'
            }
        ]
    }

    handleChange = (e) => {
        let change = this.state
        change.decision[e.target.id] = e.target.value
        this.setState(change)
        console.log(this.state)
    }

    handleSelectChange = (event, index, value) => {
        let change = this.state
        change.decision.category = value
        this.setState(change)
        console.log(this.state)
    }

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 4,
        })
    }

    handlePrev = () => {
        const {stepIndex} = this.state
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 })
        }
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });

    };

    handleSaveCriteria = () => {
        console.log(this.state.decision.criteria)
        this.setState({open: false})
        let change = this.state
        change.decision.criteria.push()
        this.setState(change)
        console.log(this.state)
    }

    getStepContent(stepIndex) {

        const actionsCriteria = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
                />,
            <FlatButton
                label="Save"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleSaveCriteria}
                />,
        ];

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
                onTouchTap={this.handleClose}
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
                                onChange={this.handleChange.bind(this)}
                                />
                            <br />
                            <TextField
                                id="description"
                                hintText="Insert Decision Description"
                                floatingLabelText="Decision Description"
                                value={this.state.decision.description}
                                onChange={this.handleChange.bind(this)}
                                />
                            <br />
                            <SelectField
                                id="category"
                                hintText="Insert Decision Category"
                                floatingLabelText="Decision Category"
                                value={this.state.decision.category}
                                onChange={this.handleSelectChange}
                                >
                                <MenuItem value={1} primaryText="Government" />
                                <MenuItem value={2} primaryText="Consumer" />
                                <MenuItem value={3} primaryText="Finance" />
                                <MenuItem value={4} primaryText="Social" />
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
                            <RaisedButton label="Add Criteria" onTouchTap={this.handleOpen} />
                            <Dialog
                                title="Add Criteria"
                                actions={actionsCriteria}
                                modal={false}
                                open={this.state.open}
                                onRequestClose={this.handleClose}
                                >
                                <TextField
                                    id="tmpCritName"
                                    hintText="Insert Criterion Name"
                                    floatingLabelText="Criterion Name"
                                    value={this.state.decision.tmpCritName}
                                    onChange={this.handleChange.bind(this)}
                                    />
                                <br />
                                <TextField
                                    id="tmpCritDesc"
                                    hintText="Insert Criterion Description"
                                    floatingLabelText="Criterion Description"
                                     value={this.state.decision.tmpCritDesc}
                                    onChange={this.handleChange.bind(this)}     //onChange={this.handleChange.bind(this, 'description')}
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
                                    {tableDataChoices.map((row, index) => (
                                        <TableRow key={index} selected={row.selected}>
                                            <TableRowColumn>{row.name}</TableRowColumn>
                                            <TableRowColumn>{row.descrition}</TableRowColumn>
                                            <TableRowColumn><FlatButton icon={iconDelete} href="/" /></TableRowColumn>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table><RaisedButton label="Add Choices" onTouchTap={this.handleOpen} />
                            <Dialog
                                title="Add Choices"
                                actions={actions}
                                modal={false}
                                open={this.state.open}
                                onRequestClose={this.handleClose}
                                >
                                <TextField
                                    hintText="Insert Choice Name"
                                    floatingLabelText="Choice Name"
                                    //value={this.state.decision.name}
                                    //onChange={this.handleChange.bind(this, 'name')}
                                    />
                                <br />
                                <TextField
                                    hintText="Insert Choice Description"
                                    floatingLabelText="Choice Description"
                                    //value={this.state.decision.description}
                                    //onChange={this.handleChange.bind(this, 'description')}
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
                                    {tableDataParticipants.map((row, index) => (
                                        <TableRow key={index} selected={row.selected}>
                                            <TableRowColumn>{row.name}</TableRowColumn>
                                            <TableRowColumn>{row.description}</TableRowColumn>
                                            <TableRowColumn><FlatButton icon={iconDelete} href="/" /></TableRowColumn>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <FlatButton label="Add Participants" href="/" />
                        </Paper>
                    </div>
                )
            case 4:
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
                                    {tableDataCriteria.map((row, index) => (
                                        <TableRow key={index} selected={row.selected}>
                                            <TableRowColumn>{row.type}</TableRowColumn>
                                            <TableRowColumn>{row.name}</TableRowColumn>
                                            <TableRowColumn><FlatButton icon={iconDelete} href="/" /></TableRowColumn>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <FlatButton label="Add Information" href="/" />
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
                            <StepLabel>Insert decision context</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Insert decision criteria</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Insert decision choices</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Insert decision partipants</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Insert information</StepLabel>
                        </Step>
                    </Stepper>
                    <div style={contentStyle}>
                        {finished ? (
                            <p>
                                <a href="#"
                                    onClick={(event) => {
                                        //event.preventDefault();
                                        //this.setState({stepIndex: 0, finished: false});
                                        this.postDecision()
                                    } }
                                    >
                                    Save
                                </a> the Decision?
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
                                            label={stepIndex === 4 ? 'Finish' : 'Next'}
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

export default AddDecision;