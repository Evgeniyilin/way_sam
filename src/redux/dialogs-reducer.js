const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'I working'},
        {id: 3, message: 'Welcome to the my World'}
    ],
    dialogs: [
        {id: 1, name: 'Evgeniy'},
        {id: 2, name: 'Julia'},
        {id: 3, name: 'Aleksandra'},
        {id: 4, name: 'Michail'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 3, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;