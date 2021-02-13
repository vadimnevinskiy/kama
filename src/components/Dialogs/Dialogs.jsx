import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";



const Dialogs = (props) => {

    let dialogElements = props.dialogs.map(item => {
        return (
            <DialogItem name={item.name} id={item.id} key={item.id}/>
        )
    });

    let messageElements = props.messages.map(m => <MessageItem message={m.text} key={m.id}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsList}>
                { dialogElements }
            </div>
            <div className={classes.messagesList}>
                { messageElements }
            </div>
        </div>
    )
}

export default Dialogs;
