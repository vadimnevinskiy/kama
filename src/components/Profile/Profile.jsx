import React from 'react';
import classes from './Profile.module.css';
import UserInfo from './UserInfo/UserInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({profile, status, updateStatus}) => {
    return (
        <div className={classes.profile}>
            <UserInfo
                profile={profile}
                status={status}
                updateStatus={updateStatus}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
