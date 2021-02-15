import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UserInfo/UserInfo";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <UserInfo />
            <MyPosts profile={props.profile} addPost={props.addPost} writingPostMessage={props.writingPostMessage}/>
        </div>
    );
}

export default Profile;
