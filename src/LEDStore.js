import {ProjectReactDispatcher} from './ProjectReactDispatcher.js';
import {EventEmitter} from  'events';


let LEDState = null;
let changeEvent = 'Ive changed, baby, I promise!';

export class LEDStore extends EventEmitter {

constructor(){
    this.dispatcher = new ProjectReactDispatcher();
    console.log("LEDSTORE CONSTRUCTOR")
}

    dispatchToken = this.dispatcher.register((action) => {
        let action = payload.action;
        let actionData = action.actionData;
        this.LEDState = actionData;

        LEDStore.emitChange();
        console.log("In registered callback")
    }
    
    emitChange(){
        this.emit(changeEvent);
        console.log("grunka lunka dunkity dee");
    }

}