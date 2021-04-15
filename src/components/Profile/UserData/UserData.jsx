import React from "react";
import classes from './UserData.module.css';
import UserStatusWithHooks from "../UserInfo/UserStatusWithHooks";


const UserData = (props) => {
    return (

        <div className={classes.userData}>
            {
                props.isOwner &&
                <div className={classes.edit} onClick={props.activateEditMode}><span
                    className={classes.editIcon + ' ' + "material-icons"}>mode_edit</span></div>
            }
            <h1 className={classes.userName}>{props.profile.fullName}</h1>

            {
                props.profile.aboutMe &&
                <div className={classes.userDescription}><strong>About me:</strong> <span
                    className={classes.info}>{props.profile.aboutMe}</span></div>
            }

            <div className={classes.userDescription}>
                <strong>Looking for a job: </strong>
                {
                    props.profile.lookingForAJob
                        ? <span className={classes.info + ' ' + classes.greenInfo}>Yes</span>
                        : <span className={classes.info + ' ' + classes.redInfo}>No</span>
                }
            </div>
            {
                props.profile.lookingForAJob &&
                <div className={classes.userDescription}>
                    <strong>Skills: </strong>
                    <span className={classes.info}>{props.profile.lookingForAJobDescription}</span>
                </div>
            }
            {
                props.isOwner
                    ? <UserStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    : <div className={classes.userDescription}><strong>Status: </strong><span
                        className={classes.info}>{props.status}</span></div>
            }
        </div>

    )
}

export default UserData;
