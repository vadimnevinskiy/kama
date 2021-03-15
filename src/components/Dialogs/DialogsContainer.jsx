import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreator, writingMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
    return {
        messageText: state.dialogs.messageText,
        dialogs: state.dialogs
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




const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
