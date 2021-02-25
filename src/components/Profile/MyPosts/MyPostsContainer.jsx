import React from 'react';
import {addPostActionCreator, writingPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postText: state.profile.postText,
        posts: state.profile.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostTest: (text) => {
            dispatch(writingPostActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
