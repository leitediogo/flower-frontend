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
import Accessibility from 'material-ui/svg-icons/action/accessibility'

class DecisionAppBarLeftIconMenu extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClickCategory(category) {
        this.props.filterDecisions(category)
        this.setState({ open: false })
    }

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
                        <MenuItem primaryText="Government" leftIcon={<Accountbalance />} onClick={() => this.handleClickCategory('Government')}/>
                        <MenuItem primaryText="Consumer" leftIcon={<Kitchen />}  onClick={() => this.handleClickCategory('Consumer')}/>
                        <MenuItem primaryText="Corporate" leftIcon={<BusinessCenter />}  onClick={() => this.handleClickCategory('Corporate')}/>
                        <MenuItem primaryText="Finance" leftIcon={<AttachMoney />}  onClick={() => this.handleClickCategory('Finance')}/>
                        <MenuItem primaryText="Legal" leftIcon={<Gavel />}  onClick={() => this.handleClickCategory('Legal')}/>
                        <MenuItem primaryText="Social" leftIcon={<Share />}  onClick={() => this.handleClickCategory('Social')}/>
                        <MenuItem primaryText="Educational" leftIcon={<School />}  onClick={() => this.handleClickCategory('Educational')}/>
                        <MenuItem primaryText="All" leftIcon={<Accessibility />}  onClick={() => this.handleClickCategory('All')}/>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        )
    }
}
export default DecisionAppBarLeftIconMenu