import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import DecisionAppBarRightIconMenu from './DecisionAppBarRightIconMenu'
import DecisionAppBarLeftIconMenu from './DecisionAppBarLeftIconMenu'

let style ={
    position: "fixed",
    top: "0px",
    width: "100%"
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
                        style={style}
                        title="Decision AppBar"
                        iconElementRight={<DecisionAppBarRightIconMenu />}
                        iconElementLeft={<DecisionAppBarLeftIconMenu />}
                        />
                </div>
            </MuiThemeProvider>
        )
    }
}
export default DecisionAppBar