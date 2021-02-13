import React from 'react';
import classes from './UserInfo.module.css';

const UserInfo = () => {
    return (
        <div className={classes.user}>
            <div className={classes.avatar}>
                <img className={classes.avatar__image} src="https://f3.mylove.ru/J1NuDGy2QF.jpg"/>
            </div>
            <div className={classes.user__data}>
                <h3 className={classes.user__name}>MrBluff</h3>
                <div className={classes.user__status}>
                    Заходил 6 минут назад
                </div>
            </div>
        </div>
    );
}

export default UserInfo;
