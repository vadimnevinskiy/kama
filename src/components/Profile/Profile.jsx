import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UserInfo/UserInfo";

const Profile = () => {
    return (
        <div className={classes.profile}>
            <UserInfo />
            <MyPosts />
        </div>
    );
}

export default Profile;
