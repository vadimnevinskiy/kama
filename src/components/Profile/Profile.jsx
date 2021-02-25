import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UserInfo/UserInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <UserInfo />
            <MyPostsContainer store={props.store} />
            {/*<MyPosts profile={props.profile} dispatch={props.dispatch} />*/}
        </div>
    );
}

export default Profile;
