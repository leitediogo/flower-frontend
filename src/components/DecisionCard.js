import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardTitle, CardText, CardMedia } from 'material-ui/Card';
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
                        <CardHeader 
                            title="Created By" 
                            subtitle={this.props.createdBy} 
                            avatar={this.props.avatar} 
                            actAsExpander={true}
                            showExpandableButton={true}
                        />
                        <CardTitle 
                            title={this.props.title} 
                            subtitle={this.props.subtTitle} 
                        />
                        <CardText>{this.props.cardText}</CardText>
                        <CardMedia expandable={true}>
                            <p>decision detail</p>
                        </CardMedia>
                        <CardActions expandable={true}>
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