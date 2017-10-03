import {Dispatcher} from 'flux';

class Dispatcher extends Dispatcher{

    handleInputAction(action){
        this.dispatch({
            source: 'Input Action',
            action: action
        })
    }


}