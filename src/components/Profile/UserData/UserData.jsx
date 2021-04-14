import React from "react";
import classes from './UserData.module.css';
import UserStatusWithHooks from "../UserInfo/UserStatusWithHooks";


const UserData = (props) => {
    return (

        <>
            {
                props.isOwner &&
                <div className={classes.edit} onClick={props.activateEditMode}><span
                    className={classes.editIcon + ' ' + "material-icons"}>mode_edit</span></div>
            }
            <h3 className={classes.userName}>{props.profile.fullName}</h3>

            {
                props.profile.aboutMe &&
                <div className={classes.description}><strong>About me:</strong> <span
                    className={classes.info}>{props.profile.aboutMe}</span></div>
            }

            <div className={classes.userJob}>
                <strong>Looking for a job: </strong>
                {
                    props.profile.lookingForAJob
                        ? <span className={classes.info + ' ' + classes.greenTxt}>Yes</span>
                        : <span className={classes.info + ' ' + classes.redTxt}>No</span>
                }
            </div>
            {
                props.profile.lookingForAJob &&
                <div className={classes.userJobDescription}>
                    <strong>Skills: </strong>
                    <span className={classes.info}>{props.profile.lookingForAJobDescription}</span><br/>
                </div>
            }
            {
                props.isOwner
                    ? <UserStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    : <div className={classes.status}><strong>Status: </strong><span
                        className={classes.info}>{props.status}</span></div>
            }
        </>

    )
}

export default UserData;
