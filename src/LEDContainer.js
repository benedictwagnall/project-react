/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/

import {LEDComponent} from './LEDComponent.js';
import {EPICSComponent} from './EPICSComponent.js';
import {LEDStore} from './LEDStore.js';

export class LEDContainer extends EPICSComponent{


    //Initialise the store for use
    //Initialise the LED number prop
    constructor(props){
        super(props);
        this.LEDStore = new LEDStore();
        this.state = {lednumber: null};
    }

    //Add the change listener to the LEDStore
    componentDidMount(){
        this.LEDStore.addChangeListener(this._onChange.bind(this));
    }

    //When the store updates, get the new state from it and save it to 
    //the LED prop
    _onChange(){
        this.setState( {lednumber: this.LEDStore.getLEDStoreState()} );
    }

    //render the LED that we want to put in our container.
    //The LED is stateless and this LEDContainer is stateful.
    render(){
        return(
            <LEDComponent block="TESTLED" property="testled" lednumber={this.state.lednumber}/>
        );
    }
}