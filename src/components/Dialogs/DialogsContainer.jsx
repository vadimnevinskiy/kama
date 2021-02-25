import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreator, writingMessageActionCreator} from "../../redux/dialogs-reducer";



const DialogsContainer = (props) => {
    let state = props.store.getState();

    let writingMessage = (text) => {
        props.store.dispatch(writingMessageActionCreator(text));
    }
    let AddMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    return (
        <Dialogs
            messageText = {state.dialogs.messageText}
            dialogs = {state.dialogs}
            updateDialogMessage = {writingMessage}
            addMessage = {AddMessage}
        />
    )
}

export default DialogsContainer;
