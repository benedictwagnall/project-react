
import {ProjectReactDispatcher} from './ProjectReactDispatcher.js';

let actionType = null;
let inputAction = 'inputAction'

export class WriterActions{

    constructor(){
        this.dispatcher = new ProjectReactDispatcher()
    }

    writerInput(inputValue){

        this.dispatcher.handleInputAction(
            {
                actionType: inputAction,
                actionData: inputValue
            }

        )
    }
}