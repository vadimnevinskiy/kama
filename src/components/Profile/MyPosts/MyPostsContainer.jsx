import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postText: state.profilePage.postText,
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => {
            dispatch(addPostActionCreator(postText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
