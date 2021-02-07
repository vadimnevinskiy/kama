import React from 'react';
import classes from './MyPosts.module.css';
import Posts from "./Post/Posts";

const MyPosts = () => {
    return (
        <div className={classes.posts}>
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <div className={classes.form}>
                <div className={classes.fieldBox}>
                    <textarea className={classes.field}></textarea>
                </div>
                <div className={classes.buttonBox}>
                    <button className={classes.button}>Add post</button>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;
