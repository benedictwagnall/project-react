//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import {EPICSComponent} from './EPICSComponent.js';

//Define constants for colour of LED
const defaultFill = '#000000';
const redFill= '#FF0000';
const yellowFill = '#FFFF00';
const greenFill = '#00FF00';
const errorFill = '#FF00CB';

const blueFill = '#4842f4';


export class LEDComponent extends EPICSComponent{


    //Props here are set by the instantation in main.js...
    constructor(props){
        //..call the parent constructor with these props, so that they are
        //accessible in parent object's methods.
        super(props);

    }

    //Perform the parent componentDidMount stuff as well as this specific functionality.
    componentDidMount(){

        //Initialise the canvas and context, must be done after mount to access ref.
        this.canvas = this.refs.ledRef;
        this.context = this.canvas.getContext('2d');
        super.componentDidMount();
        //Default = black. If you see this then something isn't loading properly
        this.drawCircle(defaultFill);
    }


    //On update, redraw the circle with the corresponding colour
    componentDidUpdate(){
        if(this.state.EPICSValue == 0){
            this.drawCircle(redFill);
        }else if(this.state.EPICSValue ==1){
            this.drawCircle(greenFill);
        }else if(this.state.EPICSValue ==2){
            this.drawCircle(yellowFill);
        }else{
            this.drawCircle(errorFill);
        }

        if(this.props.lednumber != null){
            this.drawNumber(this.props.lednumber);
        }
    }


    //Draws the LED with the supplied colour
    drawCircle(colour){
        this.context.beginPath();
        this.context.arc(65,65,60,0,2*Math.PI);
        this.context.fillStyle=colour;
        this.context.fill();
    }

    drawNumber(lednumber){
        this.context.font = '30px Arial';
        this.context.fillStyle = 'black';
        this.context.fillText(lednumber, 50, 65);
    }


    //Render the canvas
    render(){

        return(<canvas ref="ledRef"
            width="130"
            height="130">
        </canvas>);
    }
}


