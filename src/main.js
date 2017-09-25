//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source
import React from 'react';
import ReactDOM from 'react-dom';
import {DivComponent} from './DivComponent';
import {InputComponent} from './InputComponent';
import {GaugeComponent} from './GaugeComponent';
import {LEDComponent} from './LEDComponent';
import {WriterComponent} from './WriterComponent';
import {RadialGaugeComponent} from './RadialGaugeComponent';
import './style.scss';



//Wrapper component where we specify what kind of EPICSComponents we want, and set
//set their props.
class App extends React.Component{
    render(){
        return(
            <div id='topwrapper'>


                <div id='signalADC' className='displayDiv'>

                    <div id='signalADCInner'>
                        <div id='signal'>
                            <p id='signalp'>Signal:</p>
                            <DivComponent block="SIGNAL" property="signal"/>
                        </div>
                        <div id='ADC'>
                            <p id='ADCp'>ADC:</p>
                            <DivComponent block="ADC" property="adc"/>
                        </div>
                    </div>

                </div>


                <div id='temps' className='displayDiv'>

                    <p>SR-Temperatures</p>
                    <div id='tempsInner'>
                        <InputComponent block="TEMPERATURE" property="temp1"/>
                        <InputComponent block="TEMPERATURE" property="temp2"/>
                        <InputComponent block="TEMPERATURE" property="temp3"/>
                        <InputComponent block="TEMPERATURE" property="temp4"/>
                    </div>

                </div>


                <div id='gauge'>

                    <br/>
                    <GaugeComponent block="COUNTDOWN" property="countdown"/>
                    <br/>

                </div>


                <div id='LEDComp'>

                    <LEDComponent block="TESTLED" property="testled" />
                    <br/>
                    <WriterComponent block="TESTLED" property="testled" />
                </div>

                
                <RadialGaugeComponent block="COUNTDOWN" property="countdown"/>

            </div>

        );
    }
}

//Event handler fires when actual DOM is loaded, calls the ReactDOM.render method.
//Takes the above wrapper component and applies it to the 'mount' location in
//./www/index.html
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App/>, document.getElementById('mount'));
});