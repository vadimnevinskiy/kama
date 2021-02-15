import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UserInfo/UserInfo";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <UserInfo />
            <MyPosts posts={props.profile.posts} />
        </div>
    );
}

export default Profile;
