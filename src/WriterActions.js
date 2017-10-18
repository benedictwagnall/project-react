import {AppDispatcher} from './ProjectReactDispatcher.js'

let actionType = null;
let inputAction = 'INPUT_ACTION'

export class WriterActions{

    writerInput(inputValue){

        AppDispatcher.handleInputAction(
            {
                actionType: inputAction,
                actionData: inputValue
            });   
    }
}
