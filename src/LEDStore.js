import {EventEmitter} from  'events';
import {AppDispatcher} from './ProjectReactDispatcher.js';

let CHANGE_EVENT = 'I am a change event';

export class LEDStore extends EventEmitter {

    constructor(){
        super();
        this.dispatchToken = AppDispatcher.register((payload) => {
            this.LEDState = payload.action.actionData;
            this.emitChange();
        });
    }

    //Broadcast to all registered callbacks
    emitChange(){
        this.emit(CHANGE_EVENT);
    }

    //Give us (currently, the only) state in our store
    getLEDStoreState(){
        return this.LEDState;
    }

    //Register a callback.
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }
}


