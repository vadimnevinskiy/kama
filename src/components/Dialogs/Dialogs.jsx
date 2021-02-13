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

    let dialogs = [
        {id: 0, name: 'Dima'},
        {id: 1, name: 'Vadim'},
        {id: 2, name: 'Katya'},
        {id: 3, name: 'Lena'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Vasya'},
    ];

    let messages = [
        {id: 0, text: 'Lorem ipsum dolor sit amet.'},
        {id: 0, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
        {id: 0, text: 'Lorem ipsum dolor.'}
    ];
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsList}>
                <DialogItem name={dialogs[0].name} id={dialogs[0].id} />
                <DialogItem name={dialogs[1].name} id={dialogs[1].id} />
                <DialogItem name={dialogs[2].name} id={dialogs[2].id} />
                <DialogItem name={dialogs[3].name} id={dialogs[3].id} />
            </div>
            <div className={classes.messagesList}>
                <MessageItem message={messages[0].text}/>
                <MessageItem message={messages[1].text}/>
                <MessageItem message={messages[2].text}/>
            </div>
        </div>
    )
}

export default Dialogs;
