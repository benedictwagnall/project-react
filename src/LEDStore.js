import {EventEmitter} from  'events';
import {AppDispatcher} from './ProjectReactDispatcher.js'

let LEDState = null;
let CHANGE_EVENT = 'I am a change event';
let dispatchToken = null

export class LEDStore extends EventEmitter {

    constructor(){
        super();

        console.log("LEDStore created");

        this.dispatchToken = AppDispatcher.register((payload) => {
            this.LEDState = payload.action.actionData;
            this.emitChange();
           
            console.log("Registered callback called");
            console.log("LEDState updated to: ");
            console.log(this.LEDState);
        });
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
        console.log("change event emitted by store");
    }

    getLEDStoreState(){
        console.log("getLEDStoreState: ")
        console.log(this.LEDState)

        return this.LEDState;
    }

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback)
    }
}


