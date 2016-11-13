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
        type: 'John Smith',
        name: 'PPO Platform'
    },
    {
        type: 'Mathew',
        name: 'Send Mail'
    }
]

class AddDecision extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            finished: false,
            stepIndex: 0,
            decision: {
                id: 12,
                name: '',
                description: '',
                status: 'Creation',
                category: '',
                owner: {
                    userId: '',
                    userName: '',
                    function: ''
                },
                participant: {
                    userId: '',
                    userName: '',
                    function: ''
                },
                criterion: {
                    name: '',
                    descrition: '',
                    status: ''
                },
                choice: {
                    name: '',
                    descrition: '',
                    status: ''
                }
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }


 saveDecision() {
        agent.post('http://localhost:3000/api/Decisions')
            .send({
                id: this.state.decision.id,
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
                    console.log('Oh no! error');
                } else {
                    console.log('yay got ' + JSON.stringify(res.body));
                }
            })
    }


    handleChange(name, e) {
        //TODO: bind select
        let change = this.state
        change.decision[name] = e.target.value
        this.setState(change)
        console.log(this.state)
    }

    handleSelectChange = (event, index, value) => this.setState({ value });

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

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <div>
                        <Paper zDepth={1} style={styles.paper}>
                            <TextField
                                hintText="Insert Decision Name"
                                floatingLabelText="Decision Name"
                                value={this.state.decision.name}
                                onChange={this.handleChange.bind(this, 'name')}
                                />
                            <br />
                            <TextField
                                hintText="Insert Decision Description"
                                floatingLabelText="Decision Description"
                                value={this.state.decision.description}
                                onChange={this.handleChange.bind(this, 'description')}
                                />
                            <br />
                            <SelectField
                                value={this.state.value}
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
                        <Paper zDepth={1} style={styles.paper}>
                            <Table>
                                <TableHeader displaySelectAll={false}>
                                    <TableRow>
                                        <TableHeaderColumn>Name</TableHeaderColumn>
                                        <TableHeaderColumn>Description</TableHeaderColumn>
                                        <TableHeaderColumn>Action</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false} >
                                    {tableData.map((row, index) => (
                                        <TableRow key={index} selected={row.selected}>
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
                    <div>
                        <Paper zDepth={1} style={styles.paper}>
                            <Table>
                                <TableHeader displaySelectAll={false}>
                                    <TableRow>
                                        <TableHeaderColumn>Name</TableHeaderColumn>
                                        <TableHeaderColumn>Description</TableHeaderColumn>
                                        <TableHeaderColumn>Action</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false} >
                                    {tableData.map((row, index) => (
                                        <TableRow key={index} selected={row.selected}>
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
            case 3:
                return (
                    <div>
                        <Paper zDepth={1} style={styles.paper}>
                            <Table>
                                <TableHeader displaySelectAll={false}>
                                    <TableRow>
                                        <TableHeaderColumn>Name</TableHeaderColumn>
                                        <TableHeaderColumn>Description</TableHeaderColumn>
                                        <TableHeaderColumn>Action</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false} >
                                    {tableData.map((row, index) => (
                                        <TableRow key={index} selected={row.selected}>
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
                            case 4:
                return (
                    <div>
                        <Paper zDepth={1} style={styles.paper}>
                            <Table>
                                <TableHeader displaySelectAll={false}>
                                    <TableRow>
                                        <TableHeaderColumn>Name</TableHeaderColumn>
                                        <TableHeaderColumn>Description</TableHeaderColumn>
                                        <TableHeaderColumn>Action</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false} >
                                    {tableData.map((row, index) => (
                                        <TableRow key={index} selected={row.selected}>
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
                  this.saveDecision()
                }}
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