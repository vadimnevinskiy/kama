import React from "react";
import classes from "./Avatar.module.css";
import avatar from "../../../assets/images/avatar.png";


const Avatar = ({smallPhoto, largePhoto}) => {
    return (
        <div className={classes.avatarBlock}>
            <img className={classes.avatarImage}
                 src={smallPhoto != null ? smallPhoto : avatar} alt=""/>
            {
                largePhoto != null
                    ? <img className={classes.avatarLarge}
                           src={largePhoto != null ? largePhoto : avatar}
                           alt=""/>
                    : ''
            }
        </div>
    )
}

export default Avatar;
