//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import {EPICSComponent} from './EPICSComponent.js';

export class WriterComponent extends EPICSComponent{

    //Props here are set by the instantation in main.js...
    constructor(props){

        //..call the parent constructor with these props, so that they are
        //accessible in parent object's methods.
        super(props);
        //Initialise the variable to store changes in input
        this.state = {inputValue: null};

        //Bind the event handlers to this object
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    //Event handler to keep the inputField updated with user input
    handleChange(event){
        this.setState({inputValue: event.target.value});
    }


    //Event handler to send the input to the appropriate place and clear user input
    //field on submit. Calls the EPICSComponent method writeToMalc
    handleSubmit(event){
        //PreventDefault stops the entire page reloading on submit (strange default!)
        event.preventDefault();

        //Call parent method with own state.
        super.writeToMalc(this.state.inputValue);

        //Clear the textfield on submit.
        this.refs.textField.value= '';

    }


    //React method: Return the following for application to the DOM
    render(){
        //A writable input element and button for submission. Sends user input to malcolm
        return(
            <form id='#writerComp' onSubmit={this.handleSubmit}>
                <input id='writerBox' type="number" onChange={this.handleChange} ref="textField" />
                <input id='writerButt' type="submit" value="Submit" />
            </form>
        );
    }
}



