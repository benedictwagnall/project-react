//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import {EPICSComponent} from './EPICSComponent.js';

export class RadialGaugeComponent extends EPICSComponent{

    constructor(props){
        super(props);
        //Maybe set EPICSVal here to fix initial NaN error
        this.state={gaugeBits: this.drawGauge(), needleBits: this.drawNeedle()};
    }

    componentWillUpdate(){
        this.drawNeedle();
    }

    calculateNeedle(){
        //Lower limit of the Epics range
        let eMin = 7; //a
        //Upper limit of the Epics range
        let eMax = 9; //b
        //The epics value we are calculating
        let eValue = this.state.EPICSValue; //c
        //The number of degrees we have to play with on the gauge
        let degreeDomain = 300; //nd
        //Because the circle is skewed (svg reasons)
        let gaugeOffset = 240; //e
        //(((c-a/b-a)*nd)-e)
        var needleLocation = ((eValue-eMin)/(eMax-eMin)*degreeDomain)-gaugeOffset;
        return needleLocation;
    }

    drawNeedle(){
        return(
            <g>
                <polygon
                    points={'200,190 200,210 350,200'}
                    style={{fill:'red'}}
                    transform={'rotate(' + (this.calculateNeedle()) + ' 200 200)'}/>
            </g>
        );
    }

    drawGauge(){
        return (
            <g>
                <defs>
                    <line id={'pip'} x1={200} y1={50} x2={200} y2={70} stroke={'black'} strokeWidth={5}></line>
                    <line id={'bigPip'} x1={200} y1={50} x2={200} y2={80} stroke={'black'} strokeWidth={10}></line>
                </defs>
                <g>
                    <circle cx={200} cy={200} r={150} fill={'none'} stroke={'black'} strokeWidth={6}/>
                    <polygon points={'200,200 115,360 285,360'} style={{fill:'#dddddd'}}/>
                    <circle cx={200} cy={200} r={20} fill={'red'}/>
                </g>
                <g id={'pips'}>
                    <use className={'pip'} href={'#pip'}></use>
                    <use className={'pip'} href={'#pip'} transform={'rotate(-30 200 200)'}></use>
                    <use className={'pip'} href={'#pip'} transform={'rotate(-60 200 200)'}></use>
                    <use className={'pip'} href={'#pip'} transform={'rotate(-90 200 200)'}></use>
                    <use className={'pip'} href={'#pip'} transform={'rotate(-120 200 200)'}></use>
                    <use className={'bigPip'} href={'#bigPip'} transform={'rotate(-150 200 200)'}></use>
                    <use className={'pip'} href={'#pip'} transform={'rotate(30 200 200)'}></use>
                    <use className={'pip'} href={'#pip'} transform={'rotate(60 200 200)'}></use>
                    <use className={'pip'} href={'#pip'} transform={'rotate(90 200 200)'}></use>
                    <use className={'pip'} href={'#pip'} transform={'rotate(120 200 200)'}></use>
                    <use className={'bigPip'} href={'#bigPip'} transform={'rotate(150 200 200) '}></use>
                </g>
            </g>
        );
    }

    render(){
        return( <svg width={400} height={400}>
            {this.state.gaugeBits}
            {this.drawNeedle()}
        </svg>);
    }
}