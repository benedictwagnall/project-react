//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import {EPICSComponent} from './EPICSComponent.js';

const inputStyle ={width: '50px',};

export class InputComponent extends EPICSComponent{

    //Props here are set by the instantation in main.js...
    constructor(props){

        //..call the parent constructor with these props, so that they are
        //accessible in parent object's methods.
        super(props);
        this.state = {EPICSValue: ''};
    }



    //React method: Return the following for application to the DOM
    render(){
        //Returns the EPICS Value specified by the parent class (taken from the props
        //specified in main.js), wrapped in a readonly input element
        return(
            <input className='ro-input' value={this.state.EPICSValue} style={inputStyle} readOnly/>
        );
    }
}



