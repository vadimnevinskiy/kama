import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";






let mapStateToProps = (state) => {
    return {
        messageText: state.dialogs.messageText,
        dialogs: state.dialogs
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text) => {
            dispatch(addMessageActionCreator(text));
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
