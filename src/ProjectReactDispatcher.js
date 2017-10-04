import {Dispatcher} from 'flux';


this.dispatcher = new Dispatcher();

export class ProjectReactDispatcher extends Dispatcher{


    handleInputAction(action){

        console.log(action)

        this.dispatch({
            source: 'Input Action',
            action: action
        })

    }
}