import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreator, writingMessageActionCreator} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";



const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let writingMessage = (text) => {
                        store.dispatch(writingMessageActionCreator(text));
                    }
                    let AddMessage = () => {
                        store.dispatch(addMessageActionCreator());
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
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;
