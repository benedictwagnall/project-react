import {Dispatcher} from 'flux';

class ProjectReactDispatcher extends Dispatcher{

    handleInputAction(action){
        this.dispatch({
            source: 'Input Action',
            action: action
        })
    }


}