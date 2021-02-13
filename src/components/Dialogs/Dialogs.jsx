import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <NavLink className={classes.dialog} activeClassName={classes.activeDialog} to={path}>{props.name}</NavLink>
    )
}


const MessageItem = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsList}>
                <DialogItem name="Dima" id="1" />
                <DialogItem name="Vadim" id="2" />
                <DialogItem name="Katya" id="3" />
                <DialogItem name="Lena" id="4" />
                <DialogItem name="Viktor" id="5" />
                <DialogItem name="Sasha" id="6" />
                <DialogItem name="Vasya" id="7" />
            </div>
            <div className={classes.messagesList}>
                <MessageItem message='Lorem ipsum dolor sit amet.'/>
                <MessageItem message='Lorem ipsum dolor sit amet, consectetur adipisicing.'/>
                <MessageItem message='Lorem ipsum dolor.'/>
            </div>
        </div>
    )
}

export default Dialogs;
