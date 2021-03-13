import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreator, writingMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
        messageText: state.dialogs.messageText,
        dialogs: state.dialogs,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateDialogMessage: (text) => {
            dispatch(writingMessageActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
