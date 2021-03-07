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
import avatar from "../../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";

const UserInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader/>
        );
    } else {
        return (
            <div className={classes.user}>
                <div className={classes.avatar}>
                        <img className={classes.avatar__image} src={props.profile.photos.small != null ? props.profile.photos.small : avatar} alt=""/>
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
                    {
                        props.profile.contacts.facebook ?
                            <a href={`${props.profile.contacts.facebook}`} title={props.profile.contacts.website} target="_blank">
                                <img src={fb} altc />
                            </a> :
                            ''
                    }
                    {
                        props.profile.contacts.website ?
                            <a href={`${props.profile.contacts.website}`} title={props.profile.contacts.website} target="_blank">
                                <img src={website} alt={props.profile.contacts.website} />
                            </a> :
                            ''
                    }
                    {
                        props.profile.contacts.vk ?
                            <a href={`${props.profile.contacts.vk}`} title={props.profile.contacts.vk} target="_blank">
                                <img src={vk} alt={props.profile.contacts.vk} />
                            </a> :
                            ''
                    }
                    {
                        props.profile.contacts.twitter ?
                            <a href={`${props.profile.contacts.twitter}`} titl={props.profile.contacts.twitter} target="_blank">
                                <img src={twitter} alt={props.profile.contacts.twitter} />
                            </a> :
                            ''
                    }
                    {
                        props.profile.contacts.youtube ?
                            <a href={`${props.profile.contacts.youtube}`} title={props.profile.contacts.youtube} target="_blank">
                                <img src={youtube} alt={props.profile.contacts.youtube} />
                            </a> :
                            ''
                    }
                    {
                        props.profile.contacts.github ?
                            <a href={`${props.profile.contacts.github}`} title={props.profile.contacts.github} target="_blank">
                                <img src={github} alt={props.profile.contacts.github} />
                            </a> :
                            ''
                    }
                    {
                        props.profile.contacts.mainLink ?
                            <a href={`${props.profile.contacts.mainLink}`} title={props.profile.contacts.mainLink} target="_blank">
                                <img src={link} alt={props.profile.contacts.mainLink} />
                            </a> :
                            ''
                    }
                </div>
            </div>
        );
    }
}

export default UserInfo;
