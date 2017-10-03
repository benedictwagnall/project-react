let actionType = null;

import {ProjectReactDispatcher} from './ProjectReactDispatcher.js'

export class WriterActions{

    constructor(){}

    writerInput(inputValue){
        Dispatcher.handleInputAction(
            {
                actionType: inputAction,
                actionData: inputValue
            }
        )
    }
}