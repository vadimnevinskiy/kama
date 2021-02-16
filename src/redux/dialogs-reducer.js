const ADD_MESSAGE = 'ADD-MESSAGE';
const WRITE_MESSAGE = 'WRITE-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages + 1,
                text: state.messageText,
            }
            state.messages.push(newMessage);
            state.messageText = '';
            return state;
        case WRITE_MESSAGE:
            state.messageText = action.message;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const writingMessageActionCreator = (value) => {
    return {
        type: WRITE_MESSAGE,
        message: value
    }
}
export default dialogsReducer;
