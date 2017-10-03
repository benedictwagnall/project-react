import {ProjectReactDispatcher} from './ProjectReactDispatcher.js';
import {EventEmitter} from  'events';

let LEDState = null;


class LEDStore extends EventEmitter {

emitChange(){
    this.emit(changeEvent);
}

}


//Register the store with the Dispatcher

LEDStore.dispatchToken = Dispatcher.register((payload) =>
{
    let action = payload.action;
    let actionData = action.actionData;

}