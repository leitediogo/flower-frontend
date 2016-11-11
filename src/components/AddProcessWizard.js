import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper'
import AddProcessNotification from './AddProcessNotification'
import AddProcessExceptionHandling from './AddProcessExceptionHandling'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const paperStyle = {
    margin: 20,
    textAlign: 'center'
}

const selectStyle = {
    customWidth: {
        width: 150
    }
}

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
                status: 'certification',
                help: ''
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

    handleSelectChange = (event, index, value) => this.setState({value});

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
                        <Paper zDepth={1} style={paperStyle}>
                            <TextField
                                hintText="Insert Process Name"
                                floatingLabelText="Process Name"
                                value={this.state.processDef.name}
                                onChange={this.handleChange.bind(this, 'name')}
                                />
                            <TextField
                                hintText="Insert Process Acronym"
                                floatingLabelText="Process Acronym"
                                value={this.state.processDef.acronym}
                                onChange={this.handleChange.bind(this, 'acronym')}
                                />
                            <TextField
                                hintText="Insert Process Description"
                                floatingLabelText="Process Description"
                                value={this.state.processDef.description}
                                onChange={this.handleChange.bind(this, 'description')}
                                />
                            <SelectField
                                floatingLabelText="Type"
                                value={this.state.value}
                                onChange={this.handleSelectChange}
                                style={selectStyle.customWidth}
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
                        <Paper zDepth={1} style={paperStyle}>
                            <TextField
                                hintText="Insert Step"
                                floatingLabelText="Step"
                                value={this.state.processDef.help}
                                onChange={this.handleChange.bind(this, "help")}
                                />
                            <br />
                        </Paper>
                    </div>
                )
            case 2:
                return (<AddProcessNotification />)
            case 3:
                return (<AddProcessExceptionHandling />)
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
                            <StepLabel>Insert Process Context</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Insert Flow</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Insert Notifications</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Add Exception Handling</StepLabel>
                        </Step>
                    </Stepper>
                    <div style={contentStyle}>
                        {finished ? (<p><a href="#" onClick={(event) => {
                            event.preventDefault();
                            this.setState({ stepIndex: 0, finished: false });
                        } }>Click here </a> to reset the example.</p>
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