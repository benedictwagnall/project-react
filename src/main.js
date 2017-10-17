//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source
import React from 'react';
import ReactDOM from 'react-dom';
import {DivComponent} from './DivComponent';
import {InputComponent} from './InputComponent';
import {GaugeComponent} from './GaugeComponent';
import {LEDContainer} from './LEDContainer.js';
import {WriterComponent} from './WriterComponent';
import {RadialGaugeComponent} from './RadialGaugeComponent';
import {Dispatcher} from './ProjectReactDispatcher';
//import './style.scss';



//Wrapper component where we specify what kind of EPICSComponents we want, and set
//set their props.
class App extends React.Component{

    render(){
        return(
            <div>
                <div id='topwrapper' className='displayDiv'>


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


                    <div id='LEDWriterComp' className='displayDiv'>
                        <div id='LEDInner'>
                            <div id='LEDInner'>
                                <LEDContainer block="TESTLED" property="testled" />
                            </div>
                            <div id='writerInner'>
                                <WriterComponent block="TESTLED" property="testled" />
                            </div>
                        </div>
                    </div>
                    

                </div>



                    <div id='gauge' className='displayDiv'>
                        <GaugeComponent block="COUNTDOWN" property="countdown"/>
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