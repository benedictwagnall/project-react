// let Dispatcher =require('flux').Dispatcher;
// //let assign = require('object-assign');


// export class ProjectReactDispatcher extends Dispatcher{

//     handleInputAction(action){
//         this.dispatch({
//             source: 'INPUT_ACTION',
//             action: action
//         });
//         console.log(action);
//         console.log(this.isDispatching());
//     }

// }

import {Dispatcher} from 'flux';

export default new Dispatcher();
