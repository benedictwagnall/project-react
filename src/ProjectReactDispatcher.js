import {Dispatcher} from 'flux';
//let assign = require('object-assign');


class ProjectReactDispatcher extends Dispatcher{

    handleInputAction(action){
        this.dispatch({
            source: 'INPUT_ACTION',
            action: action
        });
        console.log(action);
    }

}


const AppDispatcher = new ProjectReactDispatcher();
export {AppDispatcher};


// import {Dispatcher} from 'flux';
// export default new Dispatcher();