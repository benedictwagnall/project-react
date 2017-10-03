let actionType = null;

class WriterActions{

    constructor(){}

    writerInput(inputValue){
        Dispatcher.handleInputAction(
            {
                actionType: inputAction,
                actionData: inputValue
            }
            
        )
    }
}