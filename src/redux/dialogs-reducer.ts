import {DialogType, MessageType} from '../types/types'

const ADD_MESSAGE = 'ADD-MESSAGE'




export type InitialStateDialogsType = {
    users: DialogType[]
    messages: MessageType[]
}

let initialState: InitialStateDialogsType = {
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
}

const dialogsReducer = (state: InitialStateDialogsType = initialState, action: MessageActionType): InitialStateDialogsType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: state.messages.length + 1,
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


type MessageActionType = {
    type: typeof ADD_MESSAGE
    message: string
}

export const addMessageActionCreator = (value: string): MessageActionType => {
    return {
        type: ADD_MESSAGE,
        message: value
    }
}

export default dialogsReducer
