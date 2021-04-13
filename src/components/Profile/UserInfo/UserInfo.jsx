import React from 'react';
import classes from './UserInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import avatar from "../../../assets/images/avatar.png";
import UserStatusWithHooks from "./UserStatusWithHooks";
import UserContacts from "../UserContacts/UserContacts";

const UserInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader/>
        );
    } else {


        const onMainPhotoSelected = (e) => {
            if (e.target.files.length) {
                let file = e.target.files[0];
                props.savePhoto(file);
            }
        }

        return (
            <div className={classes.user}>
                <div className={classes.avatar}>
                    <img className={classes.avatar__image}
                         src={props.profile.photos.small != null ? props.profile.photos.small : avatar} alt=""/>
                    {
                        props.profile.photos.large != null
                            ? <img className={classes.avatar__large}
                                   src={props.profile.photos.large != null ? props.profile.photos.large : avatar}
                                   alt=""/>
                            : ''
                    }
                    {
                        props.isOwner &&
                        <div className={classes.loadPhoto}>
                            <input type={"file"} onChange={onMainPhotoSelected}/>
                        </div>
                    }
                </div>
                <div className={classes.user__data}>
                    <h3 className={classes.user__name}>{props.profile.fullName}</h3>

                    {
                        props.profile.aboutMe &&
                        <div className={classes.description}><strong>About me:</strong> <span
                            className={classes.info}>{props.profile.aboutMe}</span></div>
                    }

                    <div className={classes.user__job}>
                        <strong>Looking for a job: </strong>
                        {
                            props.profile.lookingForAJob
                                ? <span className={classes.info + ' ' + classes.greenTxt}>Yes</span>
                                : <span className={classes.info + ' ' + classes.redTxt}>No</span>
                        }
                    </div>
                    {
                        props.profile.lookingForAJob &&
                        <div className={classes.user__job_description}>
                            <strong>Skills: </strong>
                            <span className={classes.info}>{props.profile.lookingForAJobDescription}</span><br/>
                        </div>
                    }
                    {
                        props.isOwner
                            ? <UserStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                            : <div className={classes.status}><strong>Status: </strong><span className={classes.info}>{props.status}</span></div>

                    }

                </div>
                <UserContacts
                    facebook={props.profile.contacts.facebook}
                    website={props.profile.contacts.website}
                    vk={props.profile.contacts.vk}
                    twitter={props.profile.contacts.twitter}
                    youtube={props.profile.contacts.youtube}
                    github={props.profile.contacts.github}
                    mainLink={props.profile.contacts.mainLink}
                />
            </div>
        );
    }
}

export default UserInfo;
