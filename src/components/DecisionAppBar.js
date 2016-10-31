import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import DecisionAppBarRightIconMenu from './DecisionAppBarRightIconMenu'

let iconStyleRight = {
    
}

class DecisionAppBar extends Component {
    constructor() {
        super()
        this.state = { decision: '', decisionList: [] }
    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Decision AppBar"
                        iconElementRight={<DecisionAppBarRightIconMenu/>}
                        iconStyleRight={iconStyleRight}
                        />
                </div>
            </MuiThemeProvider>
        )
    }
}
export default DecisionAppBar