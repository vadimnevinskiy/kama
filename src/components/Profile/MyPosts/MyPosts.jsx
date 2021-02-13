import React from 'react';
import classes from './MyPosts.module.css';
import Posts from "./Post/Posts";

const MyPosts = () => {
    let posts = [
        {id: 0, text: 'Lorem ipsum dolor sit.', likes: 12},
        {id: 1, text: 'Mecessitatibus numquam obcaecati officia porro quia quis vel.', likes: 1},
        {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 2},
        {id: 3, text: 'Consequatur deleniti libero nam.', likes: 334}
    ];
    return (
        <div className={classes.posts}>
            <Posts message={posts[0].text} likes={posts[0].likes} />
            <Posts message={posts[1].text} likes={posts[1].likes} />
            <Posts message={posts[2].text} likes={posts[2].likes} />
            <Posts message={posts[3].text} likes={posts[3].likes} />
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
