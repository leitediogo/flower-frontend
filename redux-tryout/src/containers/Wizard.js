import React, { Component } from 'react';
import AddProcessStep1 from './AddProcessStep1'
import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class componentName extends Component {

    constructor() {
        super()
        this.state = {
            name: 'initial name',
            description: 'initial description',
            acronym: 'initial acronym',
            type: 'inital type'
        }
    }

    render() {
        return (
            <div>
                <AddProcessStep1 state={this.state} />
            </div>
        );
    }
}

export default componentName;