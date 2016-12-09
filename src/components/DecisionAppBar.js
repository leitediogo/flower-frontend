import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import DecisionAppBarRightIconMenu from './DecisionAppBarRightIconMenu'
import DecisionAppBarLeftIconMenu from './DecisionAppBarLeftIconMenu'
import { browserHistory } from 'react-router'

const styles = {
    title: {
        cursor: 'pointer'

    },
    bar: {
        backgroundColor: 'lightGrey'
    }
}

class DecisionAppBar extends Component {

    handleAppBarClick() {
        console.log('handleAppBarClick')
        browserHistory.push('/')
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title={<span style={styles.title}>Flower</span>}
                        style={styles.bar}
                        onTitleTouchTap={this.handleAppBarClick}
                        iconElementRight={<DecisionAppBarRightIconMenu />}
                        iconElementLeft={<DecisionAppBarLeftIconMenu filterDecisions={this.props.filterDecisions} />}
                        />
                </div>
            </MuiThemeProvider>
        )
    }
}
export default DecisionAppBar