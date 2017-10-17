import React from 'react';
import {LEDStore} from './LEDStore.js';
import {LEDComponent} from './LEDComponent.js'



export class LEDContainer extends React.Component{

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

        console.log("onChange in LEDContainer called");
    }

    render(){
        return(<LEDComponent lednumber={this.state.lednumber} />)
    }


}