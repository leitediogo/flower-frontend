import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper'
import DecisionContext from './DecisionContext'
import DecisionCriteria from './DecisionCriteria'
import DecisionChoice from './DecisionChoice'
import DecisionParticipants from './DecisionParticipants'

class AddDecision extends Component {
    state = {
        finished: false,
        stepIndex: 0,
        decision: []
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

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (<DecisionContext />)
            case 1:
                return (<DecisionCriteria />)
            case 2:
                return (<DecisionChoice />)
            case 3:
                return (<DecisionParticipants />)
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
                            <StepLabel>Insert Decision Context</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Insert Criteria</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Insert Choice</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Add Participants</StepLabel>
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

export default AddDecision;