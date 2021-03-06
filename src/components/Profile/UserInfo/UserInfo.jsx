import React from 'react';
import classes from './UserInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import fb from "../../../assets/images/fb.png";
import vk from "../../../assets/images/vk.png";
import youtube from "../../../assets/images/youtube.png";
import github from "../../../assets/images/github.png";
import website from "../../../assets/images/website.png";
import twitter from "../../../assets/images/twitter.png";
import link from "../../../assets/images/link.png";

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
                                <span
                                    className={`${classes.userIcon} ${classes.greenIcon} material-icons`}>report</span> :
                                <span
                                    className={`${classes.userIcon} ${classes.redIcon} material-icons`}>report_off</span>
                        }


                        <br/>
                        <span className={`${classes.userIcon} material-icons`}>mode_comment</span>
                        {props.profile.lookingForAJobDescription}<br/>
                        {/*<span className={classes.onlineStatus}>Заходил 6 минут назад</span>*/}
                    </div>
                </div>
                <div className={classes.user__contacts}>
                    <a href={`http://${props.profile.contacts.facebook}`} target="_blank">
                        <img src={fb} alt=""/>
                    </a>

                    <a href={`http://${props.profile.contacts.website}`} target="_blank">
                        <img src={website} alt=""/>
                    </a>

                    <a href={`http://${props.profile.contacts.vk}`} target="_blank">
                        <img src={vk} alt=""/>
                    </a>

                    <a href={`http://${props.profile.contacts.twitter}`} target="_blank">
                        <img src={twitter} alt=""/>
                    </a>

                    <a href={`http://${props.profile.contacts.youtube}`} target="_blank">
                        <img src={youtube} alt=""/>
                    </a>

                    <a href={`http://${props.profile.contacts.github}`} target="_blank">
                        <img src={github} alt=""/>
                    </a>

                    <a href={`http://${props.profile.contacts.mainLink}`} target="_blank">
                        <img src={link} alt=""/>
                    </a>
                </div>
            </div>
        );
    }
}

export default UserInfo;
