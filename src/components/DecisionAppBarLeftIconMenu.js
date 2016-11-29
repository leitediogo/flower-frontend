import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MenuItem from 'material-ui/MenuItem'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import IconButton from 'material-ui/IconButton'
import Drawer from 'material-ui/Drawer'
import Accountbalance from 'material-ui/svg-icons/action/account-balance'
import AttachMoney from 'material-ui/svg-icons/editor/attach-money'
import Gavel from 'material-ui/svg-icons/action/gavel'
import BusinessCenter from 'material-ui/svg-icons/places/business-center'
import School from 'material-ui/svg-icons/social/school'
import Share from 'material-ui/svg-icons/social/share'
import Kitchen from 'material-ui/svg-icons/places/kitchen'

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
                        <MenuItem primaryText="Government" leftIcon={<Accountbalance />} />
                        <MenuItem primaryText="Consumer" leftIcon={<Kitchen />} />
                        <MenuItem primaryText="Corporate" leftIcon={<BusinessCenter />} />
                        <MenuItem primaryText="Finance" leftIcon={<AttachMoney />} />
                        <MenuItem primaryText="Legal" leftIcon={<Gavel />} />
                        <MenuItem primaryText="Social" leftIcon={<Share />} />
                        <MenuItem primaryText="Educational" leftIcon={<School />} />
                    </Drawer>
                </div>
            </MuiThemeProvider>
        )
    }
}
export default DecisionAppBarLeftIconMenu