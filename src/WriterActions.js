
import {AppDispatcher} from './ProjectReactDispatcher.js'


let actionType = null;
let inputAction = 'INPUT_ACTION'

export class WriterActions{

    writerInput(inputValue){

        console.log("In WriterActions/writerInput");

        AppDispatcher.handleInputAction(
            {
                actionType: inputAction,
                actionData: inputValue
            });
        
    }
}
