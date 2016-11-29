import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import DecisionAppBarRightIconMenu from './DecisionAppBarRightIconMenu'
import DecisionAppBarLeftIconMenu from './DecisionAppBarLeftIconMenu'

let style ={
    position: "fixed",
    top: "0px",
    width: "100%"
}

class DecisionAppBar extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        style={style}
                        title="Flower"
                        iconElementRight={<DecisionAppBarRightIconMenu />}
                        iconElementLeft={<DecisionAppBarLeftIconMenu />}
                        />
                </div>
            </MuiThemeProvider>
        )
    }
}
export default DecisionAppBar