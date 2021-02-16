import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageActionCreator, writingMessageActionCreator} from "../../redux/state";

// let addMessageActionCreator = () => {
//     return {
//         type: 'ADD-MESSAGE'
//     }
// }
// let writingMessageActionCreator = (value) => {
//     return {
//             type: 'WRITE-MESSAGE',
//             message: value
//         }
// }

const Dialogs = (props) => {

    let dialogElements = props.dialogs.users.map(item => {
        return (
            <DialogItem name={item.name} id={item.id} key={item.id}/>
        )
    });

    let messageElements = props.dialogs.messages.map(m => <MessageItem message={m.text} key={m.id}/>);


    let newMessageText = React.createRef(); // Created link for textarea
    let writingMessage = () => {
        let postText = newMessageText.current.value;
        props.dispatch(writingMessageActionCreator(postText));
    }
    let AddPost = () => {
        props.dispatch(addMessageActionCreator());
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsList}>
                { dialogElements }
            </div>
            <div className={classes.messagesList}>
                { messageElements }


                <div className={classes.form}>
                    <div className={classes.fieldBox}>
                        <textarea className={classes.field} ref={newMessageText} onChange={writingMessage} value={props.dialogs.messageText} ></textarea>
                    </div>
                    <div className={classes.buttonBox}>
                        <button className={classes.button} onClick={ AddPost }>
                            <span className={`${classes.buttonIcon} material-icons`}>send</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;
