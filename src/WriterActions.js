import {AppDispatcher} from './ProjectReactDispatcher.js';

//Actions for dispatch
export class WriterActions{

    //Create an action and dispatch it using AppDispatcher.
    writerInput(inputValue){
        AppDispatcher.handleInputAction(
            {
                actionType: null,
                actionData: inputValue
            });
    }
}
