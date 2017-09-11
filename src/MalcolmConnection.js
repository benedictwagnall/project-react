//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source

const subMethod = 'malcolm:core/Subscribe:1.0';
const unsubMethod = 'malcolm:core/Unsubscribe:1.0';
const putMethod = 'malcolm:core/Put:1.0';
const updateMethod = 'malcolm:core/Update:1.0';
//const returnMethod = 'malcolm:core/Return:1.0';

export default class MalcolmConnection{


    constructor(id, webSockAddress){
        //The WS connection of this instance of MalcolmConnection is created.
        this.connection = new WebSocket(webSockAddress);

        //The id of the component this connection is held by, to send to malcolm
        //for unique request ids.
        this.componentId = id;
    }

    //Called from EPICSComponent. Takes said EPICSComponent instance as a parameter
    //in order to access its methods and properties
    subscribeMalc(component){

        //Set the 'self' constant to refer to the MalcolmConnection instance so we can
        //access it from a different context later on.
        const self = this;

        //When the event listener 'onopen' is triggered on the WS connection associated
        //with this instance of MalcolmConnection...
        this.connection.onopen = function(){

            //...call the send method of this(websocket, because we are inside a nested
            //function and therefore 'this' refers to the global object) and pass it the
            //return of the generateSubscribe method as a parameter.
            //
            //Self refers to the current instance of MalcolmConnection, because we
            //assigned it when we still had access to the local object.
            this.send(self.generateSubscribeRequest(component));
        };

        //When the event listener 'onmessage' is triggered on the connection associated
        //with this instance of Malcolm...
        this.connection.onmessage = function(event){

            //...parse the JSON recieved (accessed as event.data) and put it in the
            //var: response. Then...
            var response = JSON.parse(event.data);

            //Null when making a put request. Only call receiveUpdate on update 
            if(response.typeid == updateMethod){

                console.log(response.value);
                //...call the receiveUpdate method on current component, sending it the
                //value properties of the JSON received from Malcolm, which contains the pv
                //data.
                component.receiveUpdate(response.value.value);

            } else {

                //We're getting an ack msg from the server to say it has received a 
                //putRequest. No action required at the moment.

            }
        };
    }


    //Sever the WS connection between the React Component and malcolm
    unsubscribeMalc(){
        this.connection.send(this.generateUnsubscribeRequest());
    }


    putMalc(component, val){
        this.connection.send(this.generatePutRequest(component, val));
    }


    //Generate the subscribe request JSON to send to malcolm
    generateSubscribeRequest(component){

        //Create the following JSON and convert it to a malcolm-friendly string
        //take the props of the component to dynamically generate the path.
        let subscribeRequest = JSON.stringify(
            {
                'typeid' : subMethod,
                'id' : this.componentId,
                'path' : [ component.props.block, component.props.property ]
            }
        );
        //console.log(subscribeRequest);
        return subscribeRequest;

    }


    //Return the unsubscribe request.
    generateUnsubscribeRequest(){

        //Create the following JSON and convert it to a malcolm-friendly string
        let unsubscribeRequest = JSON.stringify(
            {
                'typeid': unsubMethod,
                'id': this.componentId
            }
        );
        return unsubscribeRequest;
    }


    generatePutRequest(component, inputValue){

        let getRequest = JSON.stringify(
            {
                'typeid': putMethod,
                'id': this.componentId,
                'path': [ component.props.block, component.props.property ],
                'value': inputValue
            }
        );
        return getRequest;
    }
}