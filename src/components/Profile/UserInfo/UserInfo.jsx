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
import UserStatus from "./UserStatus";
import {updateStatus} from "../../../redux/profile-reducer";

const UserInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader/>
        );
    } else {
        let checkDomainPrefix = (domain) => {
            if(domain.includes('http')){
                return domain;
            }else{
                return 'http://' + domain;
            }
        }
        return (
            <div className={classes.user}>
                <div className={classes.avatar}>
                    <img className={classes.avatar__image} src={props.profile.photos.small != null ? props.profile.photos.small : avatar} alt="" />
                    {
                        props.profile.photos.large != null
                        ? <img className={classes.avatar__large} src={props.profile.photos.large != null ? props.profile.photos.large : avatar} alt="" />
                        : ''
                    }

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
                        <UserStatus
                            status={props.status}
                            updateStatus={props.updateStatus}
                        />
                        {/*<span className={classes.onlineStatus}>Заходил 6 минут назад</span>*/}
                    </div>
                </div>
                <div className={classes.user__contacts}>
                    {
                        props.profile.contacts.facebook ?
                            <a href={checkDomainPrefix(props.profile.contacts.facebook)} title={props.profile.contacts.facebook} target="_blank">
                                <img src={fb} alt={props.profile.contacts.facebook} />
                            </a> :
                            ''
                    }
                    {
                        props.profile.contacts.website ?
                            <a href={checkDomainPrefix(props.profile.contacts.website)} title={props.profile.contacts.website} target="_blank">
                                <img src={website} alt={props.profile.contacts.website} />
                            </a> :
                            ''
                    }
                    {
                        props.profile.contacts.vk ?
                            <a href={checkDomainPrefix(props.profile.contacts.vk)} title={props.profile.contacts.vk} target="_blank">
                                <img src={vk} alt={props.profile.contacts.vk} />
                            </a> :
                            ''
                    }
                    {
                        props.profile.contacts.twitter ?
                            <a href={checkDomainPrefix(props.profile.contacts.twitter)} titl={props.profile.contacts.twitter} target="_blank">
                                <img src={twitter} alt={props.profile.contacts.twitter} />
                            </a> :
                            ''
                    }
                    {
                        props.profile.contacts.youtube ?
                            <a href={checkDomainPrefix(props.profile.contacts.youtube)} title={props.profile.contacts.youtube} target="_blank">
                                <img src={youtube} alt={props.profile.contacts.youtube} />
                            </a> :
                            ''
                    }
                    {
                        props.profile.contacts.github ?
                            <a href={checkDomainPrefix(props.profile.contacts.github)} title={props.profile.contacts.github} target="_blank">
                                <img src={github} alt={props.profile.contacts.github} />
                            </a> :
                            ''
                    }
                    {
                        props.profile.contacts.mainLink ?
                            <a href={checkDomainPrefix(props.profile.contacts.mainLink)} title={props.profile.contacts.mainLink} target="_blank">
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
