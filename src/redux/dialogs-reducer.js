const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: state.messages + 1,
                text: action.message,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = (value) => {
    return {
        type: ADD_MESSAGE,
        message: value
    }
}

export default dialogsReducer;
