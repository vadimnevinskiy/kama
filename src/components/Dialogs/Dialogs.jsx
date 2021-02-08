import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsList}>
                <div className={classes.dialog + ' ' + classes.activeDialog}>Dima</div>
                <div className={classes.dialog}>Vadim</div>
                <div className={classes.dialog}>Katya</div>
                <div className={classes.dialog}>Lena</div>
                <div className={classes.dialog}>Viktor</div>
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
