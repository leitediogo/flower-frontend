import React from 'react'
import { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AutoComplete from 'material-ui/AutoComplete';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Badge from 'material-ui/Badge';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


let style = {
    margin: 12,
    marginRight: 20,
    marginLeft: 20
}

const Paperstyle = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

class MaterialUITest extends Component {

    constructor(props) {
        super(props);
        this.state = { dataSource: ["aa", "bb"] }
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="DecisionAppBar2"
                        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                        iconElementRight={<FlatButton label="testBut" />} />
                    <AutoComplete
                        hintText="Type anything"
                        dataSource={this.state.dataSource}
                        onUpdateInput={console.log('update')}
                        floatingLabelText="floating label"
                        />
                    <div><Avatar icon={<FileFolder />} /></div>
                    <div>
                        <Badge
                            badgeContent={4}
                            primary={true}
                            >
                            <NotificationsIcon />
                        </Badge>
                        <Badge
                            badgeContent={10}
                            secondary={true}
                            badgeStyle={{ top: 12, right: 12 }}
                            >
                            <IconButton tooltip="Notifications">
                                <NotificationsIcon />
                            </IconButton>
                        </Badge>
                    </div>
                    <Card>
                        <CardHeader
                            title="Without Avatar"
                            subtitle="Subtitle"
                            actAsExpander={true}
                            showExpandableButton={true}
                            />
                        <CardActions>
                            <FlatButton label="Action1" />
                            <FlatButton label="Action2" />
                        </CardActions>
                        <CardText expandable={true}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
                    </Card>
                    <div>
                        <DatePicker hintText="Portrait Dialog" />
                        <DatePicker hintText="Landscape Dialog" mode="landscape" />
                        <DatePicker hintText="Dialog Disabled" disabled={true} />
                    </div>
                    <Paper zDepth={2}>
                        <TextField hintText="First name" style={style} underlineShow={false} />
                        <Divider />
                        <TextField hintText="Middle name" style={style} underlineShow={false} />
                        <Divider />
                        <TextField hintText="Last name" style={style} underlineShow={false} />
                        <Divider />
                        <TextField hintText="Email address" style={style} underlineShow={false} />
                        <Divider />
                    </Paper>
                    <div>
                        <IconMenu
                            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                            anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                            >
                            <MenuItem primaryText="Refresh" />
                            <MenuItem primaryText="Send feedback" />
                            <MenuItem primaryText="Settings" />
                            <MenuItem primaryText="Help" />
                            <MenuItem primaryText="Sign out" />
                        </IconMenu>
                        <IconMenu
                            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                            targetOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                            >
                            <MenuItem primaryText="Refresh" />
                            <MenuItem primaryText="Send feedback" />
                            <MenuItem primaryText="Settings" />
                            <MenuItem primaryText="Help" />
                            <MenuItem primaryText="Sign out" />
                        </IconMenu>
                        <IconMenu
                            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            targetOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                            <MenuItem primaryText="Refresh" />
                            <MenuItem primaryText="Send feedback" />
                            <MenuItem primaryText="Settings" />
                            <MenuItem primaryText="Help" />
                            <MenuItem primaryText="Sign out" />
                        </IconMenu>
                        <IconMenu
                            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                            >
                            <MenuItem primaryText="Refresh" />
                            <MenuItem primaryText="Send feedback" />
                            <MenuItem primaryText="Settings" />
                            <MenuItem primaryText="Help" />
                            <MenuItem primaryText="Sign out" />
                        </IconMenu>
                    </div>

                    <div>
                        <Paper style={Paperstyle} zDepth={1} rounded={false} />
                        <Paper style={Paperstyle} zDepth={2} rounded={false} />
                        <Paper style={Paperstyle} zDepth={3} rounded={false} />
                        <Paper style={Paperstyle} zDepth={4} rounded={false} />
                        <Paper style={Paperstyle} zDepth={5} rounded={false} />
                    </div>
                    <div>
                        <Paper style={Paperstyle} zDepth={1} circle={true} />
                        <Paper style={Paperstyle} zDepth={2} circle={true} />
                        <Paper style={Paperstyle} zDepth={3} circle={true} />
                        <Paper style={Paperstyle} zDepth={4} circle={true} />
                        <Paper style={Paperstyle} zDepth={5} circle={true} />
                    </div>

                    <div>
                        <FlatButton label="Default" />
                        <FlatButton label="Primary" primary={true} />
                        <FlatButton label="Secondary" secondary={true} />
                        <FlatButton label="Disabled" disabled={true} />
                    </div>
                    <div>
                        <RaisedButton label="Default" style={style} />
                        <RaisedButton label="Primary" primary={true} style={style} />
                        <RaisedButton label="Secondary" secondary={true} style={style} />
                        <RaisedButton label="Disabled" disabled={true} style={style} />
                        <br />
                        <br />
                        <RaisedButton label="Full width" fullWidth={true} />
                    </div>
                    <div>
                        <FloatingActionButton style={style}>
                            <ContentAdd />
                        </FloatingActionButton>

                        <FloatingActionButton mini={true} style={style}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default MaterialUITest