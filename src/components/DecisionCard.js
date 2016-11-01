import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

let style = {
    margin: 20,
    textAlign: 'center'
}

class DecisionCard extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Card zDepth={1} style={style}>
                        <CardHeader title="Created By" subtitle={this.props.createdBy} avatar={this.props.avatar} />
                        <CardTitle title={this.props.title} subtitle={this.props.subtTitle} />
                        <CardText>{this.props.cardText}</CardText>
                        <CardActions>
                            <FlatButton label="Edit" />
                            <FlatButton label="Open" />
                        </CardActions>
                    </Card>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default DecisionCard