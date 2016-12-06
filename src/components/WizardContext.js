import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import Paper from 'material-ui/Paper'
import MenuItem from 'material-ui/MenuItem'

const styles = {
    paper: {
        margin: 20,
        textAlign: 'left',
        width: 500,
        height: 300
    }
}

class WizardContext extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Paper zDepth={0} style={styles.paper}>
                        <TextField
                            id="name"
                            hintText="Insert Decision Name"
                            floatingLabelText="Decision Name"
                            value={this.props.decision.name}
                            onChange={this.props.handleInputChange}
                            />
                        <br />
                        <TextField
                            id="description"
                            hintText="Insert Decision Description"
                            floatingLabelText="Decision Description"
                            value={this.props.decision.description}
                            onChange={this.props.handleInputChange}
                            multiLine={true}
                            rows={2}
                            />
                        <br />
                        <SelectField
                            id="category"
                            hintText="Insert Decision Category"
                            floatingLabelText="Decision Category"
                            value={this.props.decision.category}
                            onChange={this.props.handleSelectCategoryChange}
                            >
                            <MenuItem value={'Government'} primaryText="Government" />
                            <MenuItem value={'Consumer'} primaryText="Consumer" />
                            <MenuItem value={'Corporate'} primaryText="Corporate" />
                            <MenuItem value={'Finance'} primaryText="Finance" />
                            <MenuItem value={'Legal'} primaryText="Legal" />
                            <MenuItem value={'Educational'} primaryText="Educational" />
                        </SelectField>
                        <br />
                    </Paper>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default WizardContext