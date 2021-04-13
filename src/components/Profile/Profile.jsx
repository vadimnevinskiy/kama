import React from 'react';
import classes from './Profile.module.css';
import UserInfo from './UserInfo/UserInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    return (
        <div className={classes.profile}>
            <UserInfo
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                isOwner={isOwner}
                savePhoto={savePhoto}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
