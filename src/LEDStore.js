import {EventEmitter} from  'events';
import {AppDispatcher} from './ProjectReactDispatcher.js'

let LEDState = null;
let CHANGE_EVENT = 'I am a change event';
let dispatchToken = null

export class LEDStore extends EventEmitter {

    constructor(){
        super();
        this.dispatchToken = AppDispatcher.register((payload) => {
            this.LEDState = payload.action.actionData;
            this.emitChange();
        });
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }

    getLEDStoreState(){
        return this.LEDState;
    }

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback)
    }
}


