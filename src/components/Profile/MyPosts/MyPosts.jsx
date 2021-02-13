import React from 'react';
import classes from './MyPosts.module.css';
import Posts from "./Post/Posts";

const MyPosts = (props) => {
    let postList = props.posts.map(item => {
        return (
            <Posts message={item.text} likes={item.likes} key={item.id} />
        )
    });
    return (
        <div className={classes.posts}>
            {postList}
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
