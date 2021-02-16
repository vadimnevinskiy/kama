import React from 'react';
import classes from './MyPosts.module.css';
import Posts from "./Post/Posts";
import {addPostActionCreator, writingPostActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    let postList = props.profile.posts.map(item => {
        return (
            <Posts message={item.text} likes={item.likes} key={item.id} />
        )
    });


    let writingMessage = (e) => {
        let post = e.target.value;
        props.dispatch(writingPostActionCreator(post));
    }

    let AddPost = () => {
        props.dispatch(addPostActionCreator());
    }


    return (
        <div className={classes.posts}>
            {postList}
            <div className={classes.form}>
                <div className={classes.fieldBox}>
                    <textarea className={classes.field} onChange={writingMessage} value={props.profile.postText}/>
                </div>
                <div className={classes.buttonBox}>
                    <button className={classes.button} onClick={ AddPost }>
                        <span className={`${classes.buttonIcon} material-icons`}>send</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;
