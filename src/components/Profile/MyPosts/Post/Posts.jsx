import React from 'react';
import classes from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className={classes.posts__item}>
            <div className={classes.avatar}>
                <img className={classes.avatar__image} src="https://f3.mylove.ru/J1NuDGy2QF.jpg" alt={''} />
            </div>
            <div className={classes.postText}>
                {props.message}
            </div>
            <div className={classes.likes}>
                <span>{props.likes}</span>
                <span className={`${classes.likesBtn} material-icons`}>favorite</span>
            </div>

        </div>
    );
}

export default Posts;
