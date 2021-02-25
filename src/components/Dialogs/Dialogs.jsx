import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageActionCreator, writingMessageActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let dialogElements = props.dialogs.users.map(item => {
        return (
            <DialogItem name={item.name} id={item.id} key={item.id}/>
        )
    });

    let messageElements = props.dialogs.messages.map(m => <MessageItem message={m.text} key={m.id}/>);


    let writingMessage = (e) => {
        let postText = e.target.value;
        props.updateDialogMessage(postText);
    }
    let AddPost = () => {
        props.addMessage();
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
                        <textarea className={classes.field} onChange={writingMessage} value={props.messageText} ></textarea>
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
