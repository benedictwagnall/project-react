import React from 'react';
import {LEDComponent} from './LEDComponent.js'
import {EPICSComponent} from './EPICSComponent.js'
import {LEDStore} from './LEDStore.js';


export class LEDContainer extends EPICSComponent{

    constructor(props){
        super(props)
        this.LEDStore = new LEDStore();
        this.state = {lednumber: null}
    }

    componentDidMount(){
        this.LEDStore.addChangeListener(this._onChange.bind(this))        
    }

    _onChange(){
        this.setState( {lednumber: this.LEDStore.getLEDStoreState()} );
    }

    render(){
        return(<LEDComponent block="TESTLED" property="testled" lednumber={this.state.lednumber} />)
    }
}