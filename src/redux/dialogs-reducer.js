const ADD_MESSAGE = 'ADD-MESSAGE';
const WRITE_MESSAGE = 'WRITE-MESSAGE';

let initialState = {
    users: [
        {id: 0, name: 'Dima'},
        {id: 1, name: 'Vadim'},
        {id: 2, name: 'Katya'},
        {id: 3, name: 'Lena'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Vasya'},
    ],
    messages: [
        {id: 0, text: 'Lorem ipsum dolor sit amet.'},
        {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
        {id: 2, text: 'Lorem ipsum dolor.'}
    ],
    messageText: ''
};

const dialogsReducer = (state = initialState, action) => {
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
