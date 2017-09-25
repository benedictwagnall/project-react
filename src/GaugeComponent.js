//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source
/*eslint-disable no-unused-vars*/
import React from 'react';
import ReactDOM from 'react-dom';
/*eslint-disable no-unused-vars*/
import {EPICSComponent} from './EPICSComponent.js';

const canvasStyle ={border: '1px solid #000000',};

export class GaugeComponent extends EPICSComponent{

    constructor(props){
        super(props);
    }


    //Assign the canvas context here to avoid issues with concurrency
    componentDidMount(){
        this.canvas = this.refs.gaugeRef;
        this.context = this.canvas.getContext('2d');


        super.componentDidMount();
        this.defineDimensions();
    }


    //On update, clear the gauge and draw a new one.
    componentDidUpdate(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawGauge();
    }


    //Helper method to define
    defineDimensions(){
        //Define marker partition
        this.quarterMark = (this.canvas.width * 0.25);
        this.halfMark = (this.canvas.width * 0.5);
        this.threeQaurterMark = (this.canvas.width * 0.75);

        //Small buffer at bottom of page for annotations
        this.annotationBuffer = this.canvas.height * 0.1;

        //Define start/height of each pip
        this.pipTopCoord = (this.canvas.height * 0.2);
        this.pipBaseCoord = (this.canvas.height - this.annotationBuffer);

        //Define start/height of each marker
        this.markerTopCoord = (this.canvas.height * 0.5);
        this.markerBaseCoord = (this.canvas.height - this.annotationBuffer);

        //Define start/height of the needle
        this.needleTopCoord = (this.canvas.height * 0.9);
        this.needleBaseCoord = (this.canvas.height - this.annotationBuffer);

        //Specify the amount of space in between each pip
        this.pipSize = (this.canvas.width / 200);
    }


    //Draw a gauge on the mounted canvas
    drawGauge(){
        //Loop to iterate over the width of the canvas, drawing the appropriate lines
        //on the canvas. Markers every quarter. draws needle last.

        this.context.fillStyle = '#ffffff';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        for(var i = 0 ; i < this.canvas.width ; i += this.pipSize){

            if(i==this.quarterMark){
                this.drawMarker(i);

            } else if (i==this.halfMark){
                this.drawMarker(i);

            } else if (i==this.threeQaurterMark){
                this.drawMarker(i);

            } else {
                this.drawPip(i);
            }
        }

        this.drawNeedle(this.state.EPICSValue);
    }

    //Draw the pip at the supplied location
    drawPip(pipLoc){
        this.context.beginPath();
        this.context.lineWidth='0.5';
        this.context.strokeStyle='#0f0f0f';
        this.context.moveTo(pipLoc, 100);
        this.context.lineTo(pipLoc, 130);
        this.context.stroke();
    }

    //Draw the marker at the supplied location, call annotate when done.
    drawMarker(markerLoc){
        this.context.beginPath();
        this.context.lineWidth='1';
        this.context.strokeStyle='#000000';
        this.context.moveTo(markerLoc, 50);
        this.context.lineTo(markerLoc, 130);
        this.context.stroke();
        this.annotateMarker(markerLoc);
    }

    //Annotate the marker with the appropriate numeric value.
    annotateMarker(annoLoc){
        this.context.fillStyle = '#000000'
        this.context.fillText(''+(annoLoc)+'', annoLoc, 140);
    }

    //Draw the needle using the supplied EPICSValue
    drawNeedle(epicsVal){
        this.context.beginPath();
        this.context.lineWidth='3';
        this.context.strokeStyle='#ff0000';
        this.context.moveTo((epicsVal), 130);
        this.context.lineTo((epicsVal), 10);
        this.context.stroke();
    }


    //React method: Return the following for application to the DOM
    render(){

        //Returns a canvas for reference by the above drawing functions.
        return(<canvas className='gaugeComp'  ref="gaugeRef"
            width="1000"
            height="150"
            style={canvasStyle}>
        </canvas>);
    }
}

