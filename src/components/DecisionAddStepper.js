import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import DecisionAddContext from './DecisionAddContext'
import DecisionAddChoice from './DecisionAddChoice'
import DecisionAddCriteria from './DecisionAddContext'
import DecisionAddParticipant from './DecisionAddParticipant'
import DecisionAddInformation from './DecisionAddInformation'

class DecisionAddStepper extends Component {

    state = {
        finished: false,
        stepIndex: 0,
    };

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    renderStepActions(step) {
        const {stepIndex} = this.state;

        return (
            <div style={{ margin: '12px 0' }}>
                <RaisedButton
                    label={stepIndex === 4 ? 'Finish' : 'Next'}
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onTouchTap={this.handleNext}
                    style={{ marginRight: 12 }}
                    />
                {step > 0 && (
                    <FlatButton
                        label="Back"
                        disabled={stepIndex === 0}
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onTouchTap={this.handlePrev}
                        />
                )}
            </div>
        );
    }

    render() {
        const {finished, stepIndex} = this.state;

        return (
            <MuiThemeProvider>
                <div style={{ maxWidth: 380, maxHeight: 400, margin: 'auto' }}>
                <br/>
                <br/>
                <br/>
                    <Stepper activeStep={stepIndex} orientation="vertical">
                        <Step>
                            <StepLabel>Insert Decision</StepLabel>
                            <StepContent>
                                <DecisionAddContext />
                                {this.renderStepActions(0)}
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>Insert Choices</StepLabel>
                            <StepContent>
                                <DecisionAddChoice />
                                {this.renderStepActions(1)}
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>Insert Criteria</StepLabel>
                            <StepContent>
                                <DecisionAddCriteria />
                                {this.renderStepActions(2)}
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>Insert Participants</StepLabel>
                            <StepContent>
                                <DecisionAddParticipant />
                                {this.renderStepActions(2)}
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>Insert Information</StepLabel>
                            <StepContent>
                                <DecisionAddInformation />
                                {this.renderStepActions(2)}
                            </StepContent>
                        </Step>
                    </Stepper>
                </div>
            </MuiThemeProvider>
        )
    }
}
export default DecisionAddStepper