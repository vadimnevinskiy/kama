import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.profile}>
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
            <div className={classes.posts}>
                <div className={classes.posts__item}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolorem esse est explicabo
                    labore maxime molestiae obcaecati quaerat sequi similique.
                </div>
                <div className={classes.posts__item}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi magni suscipit.
                </div>
            </div>
        </div>
    );
}

export default Profile;
