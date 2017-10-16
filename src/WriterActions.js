
import {ProjectReactDispatcher} from './ProjectReactDispatcher.js';

// let ProjectReactDispatcher = require('./ProjectReactDispatcher.js');
let actionType = null;
let inputAction = 'INPUT_ACTION'

export class WriterActions{

    constructor(){
        this.dispatcher = new ProjectReactDispatcher()
    }


    writerInput(inputValue){

        console.log("InputValue in WriterActions");
        console.log(inputValue);

        this.dispatcher.handleInputAction(
            {
                actionType: inputAction,
                actionData: inputValue
            }

        )
    }
}