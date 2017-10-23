import {Dispatcher} from 'flux';

class ProjectReactDispatcher extends Dispatcher{

    //Called from action creator - wrap the action and dispatch it 
    handleInputAction(action){
        this.dispatch({
            source: 'INPUT_ACTION',
            action: action
        });
    }
}

const AppDispatcher = new ProjectReactDispatcher();
export {AppDispatcher};