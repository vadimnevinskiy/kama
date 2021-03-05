import React from 'react';
import classes from './UserInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

const UserInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader/>
        );
    } else {
        return (
            <div className={classes.user}>
                <div className={classes.avatar}>
                    <img className={classes.avatar__image} src={props.profile.photos.small} alt={''}/>
                </div>
                <div className={classes.user__data}>
                    <h3 className={classes.user__name}>{props.profile.fullName}</h3>
                    <h5 className={classes.description}>{props.profile.aboutMe}</h5>
                    <div className={classes.user__status}>
                        {
                            props.profile.lookingForAJob ?
                                <span className={`${classes.userIcon} ${classes.greenIcon} material-icons`}>report</span> :
                                <span className={`${classes.userIcon} ${classes.redIcon} material-icons`}>report_off</span>
                        }


                        <br/>
                        <span className={`${classes.userIcon} material-icons`}>mode_comment</span>
                        {props.profile.lookingForAJobDescription}<br/>
                        {/*<span className={classes.onlineStatus}>Заходил 6 минут назад</span>*/}
                    </div>
                </div>
                <div className={classes.user__contacts}>
                    <div className={classes.user__status}>
                        <div><a href={`http://${props.profile.contacts.facebook}`} >{props.profile.contacts.facebook}</a></div>
                        <div><a href={`http://${props.profile.contacts.website}`}>{props.profile.contacts.website}</a></div>
                        <div><a href={`http://${props.profile.contacts.vk}`}>{props.profile.contacts.vk}</a></div>
                        <div><a href={`http://${props.profile.contacts.twitter}`}>{props.profile.contacts.twitter}</a></div>
                        <div><a href={`http://${props.profile.contacts.youtube}`}>{props.profile.contacts.youtube}</a></div>
                        <div><a href={`http://${props.profile.contacts.github}`}>{props.profile.contacts.github}</a></div>
                        <div><a href={`http://${props.profile.contacts.mainLink}`}>{props.profile.contacts.mainLink}</a></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInfo;
