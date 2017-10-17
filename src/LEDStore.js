import {ProjectReactDispatcher} from './ProjectReactDispatcher.js';
import {EventEmitter} from  'events';
import {AppDispatcher} from './ProjectReactDispatcher.js'


let LEDState = null;
let changeEvent = 'I am a change event';
let dispatchToken = null

export class LEDStore extends EventEmitter {

    constructor(){

        super();

        console.log("I am an LEDStore and I am alive");

        this.dispatchToken = AppDispatcher.register((payload) => {
            let action = payload.action;
            let actionData = action.actionData;
            let LEDState = actionData;

            console.log("Callback registered");
            this.emitChange();
        });
    }

    emitChange(){
        this.emit(changeEvent);
        console.log("emitting a change event");
    }

    getLEDStoreState(){
        return LEDState;
    }
}


