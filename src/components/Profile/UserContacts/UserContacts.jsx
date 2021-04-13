import classes from "../../Profile/UserContacts/UserContacts.module.css";
import fb from "../../../assets/images/fb.png";
import website from "../../../assets/images/website.png";
import vk from "../../../assets/images/vk.png";
import twitter from "../../../assets/images/twitter.png";
import youtube from "../../../assets/images/youtube.png";
import github from "../../../assets/images/github.png";
import link from "../../../assets/images/link.png";
import React from "react";

const UserContacts = (props) => {
    let checkDomainPrefix = (domain) => {
        if(domain.includes('http')){
            return domain;
        }else{
            return 'http://' + domain;
        }
    }
    return (
        <div className={classes.user__contacts}>
            {
                props.facebook ?
                    <a href={checkDomainPrefix(props.facebook)} title={props.facebook} target="_blank">
                        <img src={fb} alt={props.facebook} />
                    </a> :
                    ''
            }
            {
                props.website ?
                    <a href={checkDomainPrefix(props.website)} title={props.website} target="_blank">
                        <img src={website} alt={props.website} />
                    </a> :
                    ''
            }
            {
                props.vk ?
                    <a href={checkDomainPrefix(props.vk)} title={props.vk} target="_blank">
                        <img src={vk} alt={props.vk} />
                    </a> :
                    ''
            }
            {
                props.twitter ?
                    <a href={checkDomainPrefix(props.twitter)} titl={props.twitter} target="_blank">
                        <img src={twitter} alt={props.twitter} />
                    </a> :
                    ''
            }
            {
                props.youtube ?
                    <a href={checkDomainPrefix(props.youtube)} title={props.youtube} target="_blank">
                        <img src={youtube} alt={props.youtube} />
                    </a> :
                    ''
            }
            {
                props.github ?
                    <a href={checkDomainPrefix(props.github)} title={props.github} target="_blank">
                        <img src={github} alt={props.github} />
                    </a> :
                    ''
            }
            {
                props.mainLink ?
                    <a href={checkDomainPrefix(props.mainLink)} title={props.mainLink} target="_blank">
                        <img src={link} alt={props.mainLink} />
                    </a> :
                    ''
            }
        </div>
    )
}
export default UserContacts;
