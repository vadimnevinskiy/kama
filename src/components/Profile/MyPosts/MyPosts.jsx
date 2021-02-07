import React from 'react';
import classes from './MyPosts.module.css';
import Posts from "./Post/Posts";

const MyPosts = () => {
    return (
        <div className={classes.posts}>
            <Posts message='Lorem ipsum dolor sit.' likes='12' />
            <Posts message='Mecessitatibus numquam obcaecati officia porro quia quis vel.' likes='1' />
            <Posts message='Lorem ipsum dolor sit amet, consectetur adipisicing elit.' likes='2' />
            <Posts message='Consequatur deleniti libero nam.' likes='999999' />
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
