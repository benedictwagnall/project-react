
import {AppDispatcher} from './ProjectReactDispatcher.js'


let actionType = null;
let inputAction = 'INPUT_ACTION'

export class WriterActions{

    writerInput(inputValue){

        console.log("User input: ");
        console.log(inputValue);

        AppDispatcher.handleInputAction(
            {
                actionType: inputAction,
                actionData: inputValue
            });
        
    }
}
