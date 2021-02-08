import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsList}>
                <NavLink className={classes.dialog + ' ' + classes.activeDialog} to="/dialogs/1">Dima</NavLink>
                <NavLink className={classes.dialog} to="/dialogs/2">Vadim</NavLink>
                <NavLink className={classes.dialog} to="/dialogs/3">Katya</NavLink>
                <NavLink className={classes.dialog} to="/dialogs/4">Lena</NavLink>
                <NavLink className={classes.dialog} to="/dialogs/5">Viktor</NavLink>
            </div>
            <div className={classes.messagesList}>
                <div className={classes.message}>Lorem ipsum dolor sit amet.</div>
                <div className={classes.message}>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
                <div className={classes.message}>Lorem ipsum dolor.</div>
            </div>
        </div>
    )
}

export default Dialogs;
