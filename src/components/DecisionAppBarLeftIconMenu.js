import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton'
import Drawer from 'material-ui/Drawer';

class DecisionAppBarLeftIconMenu extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }
    handleToggle = () => this.setState({ open: !this.state.open });
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <IconButton onTouchTap={this.handleToggle}>
                        <MenuIcon color='white' />
                    </IconButton>
                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({ open })}
                        >
                        <MenuItem>New Decision</MenuItem>
                        <MenuItem>My Decisions</MenuItem>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        )
    }
}
export default DecisionAppBarLeftIconMenu