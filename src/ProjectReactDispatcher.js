import {Dispatcher} from 'flux';
//let assign = require('object-assign');


class ProjectReactDispatcher extends Dispatcher{

    handleInputAction(action){
        this.dispatch({
            source: 'INPUT_ACTION',
            action: action
        });
    }
}

const AppDispatcher = new ProjectReactDispatcher();
export {AppDispatcher};