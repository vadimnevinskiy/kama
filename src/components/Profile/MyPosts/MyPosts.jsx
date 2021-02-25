import React from 'react';
import classes from './MyPosts.module.css';
import Posts from "./Post/Posts";


const MyPosts = (props) => {
    let postList = props.posts.map(item => {
        return (
            <Posts message={item.text} likes={item.likes} key={item.id} />
        )
    });


    let onWritingMessage = (e) => {
        let post = e.target.value;
        props.updateNewPostTest(post);
    }

    let onAddPost = () => {
        props.addPost();
    }

    return (
        <div className={classes.posts}>
            {postList}
            <div className={classes.form}>
                <div className={classes.fieldBox}>
                    <textarea className={classes.field} onChange={onWritingMessage} value={props.postText}/>
                </div>
                <div className={classes.buttonBox}>
                    <button className={classes.button} onClick={ onAddPost }>
                        <span className={`${classes.buttonIcon} material-icons`}>send</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;
