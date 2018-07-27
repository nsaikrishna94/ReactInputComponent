import React from 'react';
import GenericInput from '../src/genericInput';

export default class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        if(window.componentHandler) {
            window.componentHandler.upgradeAllRegistered();
        }
    }

    render() {
        return(
            <GenericInput/>
        )
    }
}