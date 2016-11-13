import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton'
import Drawer from 'material-ui/Drawer';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';


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
                        <br />
                        <br />
                        <MenuItem primaryText="Government" leftIcon={<RemoveRedEye />} />
                        <MenuItem primaryText="Consumer" leftIcon={<PersonAdd />} />
                        <MenuItem primaryText="Corporate" leftIcon={<ContentLink />} />
                        <Divider />
                        <MenuItem primaryText="Finance" leftIcon={<ContentCopy />} />
                        <MenuItem primaryText="Social" leftIcon={<Download />} />
                        <Divider />
                        <MenuItem primaryText="My Decisions" leftIcon={<Delete />} />

                    </Drawer>
                </div>
            </MuiThemeProvider>
        )
    }
}
export default DecisionAppBarLeftIconMenu