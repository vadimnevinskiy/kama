import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <NavLink className={classes.dialog} activeClassName={classes.activeDialog} to={path}>{props.name}</NavLink>
    )
}

export default DialogItem;
