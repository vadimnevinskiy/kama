import React from 'react';
import classes from './../Dialogs.module.css';


const MessageItem = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export default MessageItem;
