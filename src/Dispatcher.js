import {Dispatcher} from 'flux';

export default class ProjectReactDispatcher extends Dispatcher{


    handleInputAction(action){
        console.log("I am a dispatcher inner");
        this.dispatch({
            source: 'INPUT_ACTION',
            action: action
        });
    }
}
