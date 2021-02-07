import React from 'react';
import classes from './Posts.module.css';

const Posts = () => {
    return (
        <div className={classes.posts__item}>
            <div className={classes.avatar}>
                <img className={classes.avatar__image} src="https://f3.mylove.ru/J1NuDGy2QF.jpg"/>
            </div>
            <div className={classes.postText}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi magni suscipit.
            </div>
            <div className={classes.likes}>
                <span>Like</span>
                <span>15</span>
            </div>

        </div>
    );
}

export default Posts;
