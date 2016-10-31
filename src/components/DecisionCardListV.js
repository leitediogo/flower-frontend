import React from 'react'
import { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

//import tiger from '../images/tiger.jpg';
import avatar from '../images/avatar.jpg'

class DecisionCardListV extends Component {
    constructor() {
        super()
        this.state = { decision: '', decisionList: [] }
    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Card>
                        <CardHeader title="Created By" subtitle="Diogo Leite" avatar={avatar} />
                        <CardTitle title="Decision One" subtitle="Decision One Subtitle" />
                        <CardText>Decision One detailed text for visual purposes</CardText>
                        <CardActions> <FlatButton label="Edit" /><FlatButton label="Open" /></CardActions>
                    </Card>
                    <Card>
                        <CardHeader title="Created By" subtitle="Diogo Leite" avatar={avatar} />
                        <CardTitle title="Card title" subtitle="Card subtitle" />
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
                        <CardActions>
                            <FlatButton label="Open" />
                            <FlatButton label="Edit" />
                        </CardActions>
                    </Card>
                    <Card>
                        <CardHeader
                            title="Diogo Leite"
                            subtitle="Decision Card Subtitle"
                            avatar={avatar}
                            />
                        <CardTitle title="Card title" subtitle="Card subtitle" />
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
                        <CardActions>
                            <FlatButton label="Open" />
                            <FlatButton label="Edit" />
                        </CardActions>
                    </Card>
                </div>
            </MuiThemeProvider>

        )
    }

}

export default DecisionCardListV