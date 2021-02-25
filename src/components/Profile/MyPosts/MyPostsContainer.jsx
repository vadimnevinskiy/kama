import React from 'react';
import {addPostActionCreator, writingPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let writingMessage = (text) => {
        props.store.dispatch(writingPostActionCreator(text));
    }

    let AddPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    return (
        <MyPosts
            postText = {state.profile.postText}
            posts={state.profile.posts}
            updateNewPostTest={writingMessage}
            addPost={AddPost}
        />
    );
}

export default MyPostsContainer;
