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
        {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
        {id: 2, text: 'Lorem ipsum dolor.'}
    ];

    let dialogElements = dialogs.map(item => {
        return (
            <DialogItem name={item.name} id={item.id} key={item.id}/>
        )
    });

    let messageElements = messages.map(m => <MessageItem message={m.text} key={m.id}/>);

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
