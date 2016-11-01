import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton'

import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

class DecisionAppBarRightIconMenu extends Component {
    constructor() {
        super()
        this.state = { decision: '', decisionList: [] }
    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <IconButton tooltip="Notifications">
                        <NotificationsIcon />
                    </IconButton>
                    <IconMenu
                        iconButtonElement={<IconButton><MoreVertIcon color='white' /></IconButton>}
                        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                        >
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Help" />
                        <MenuItem primaryText="Sign out" />
                    </IconMenu>
                </div>
            </MuiThemeProvider>
        )
    }

}
export default DecisionAppBarRightIconMenu