import React from "react";
import classes from "./User.module.css";
import {NavLink} from "react-router-dom";
import avatar from "../../../assets/images/avatar.png";


let User = ({user, isAuth, unfollow, follow, followingInProgress}) => {
    return (
        <div key={user.id} className={classes.user}>
            <div className={classes.userImg}>
                <div className={classes.photo}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : avatar} alt=""/>
                    </NavLink>
                </div>
                {
                    isAuth &&
                    <div>
                        {user.followed ?
                            <button disabled={followingInProgress.some(id => id === user.id)} className={classes.button + ' ' + classes.followingBtn} onClick={() => {
                                unfollow(user.id);
                            }}>&nbsp;</button> :
                            <button disabled={followingInProgress.some(id => id === user.id)} className={classes.button + ' ' + classes.unfollowingBtn} onClick={() => {
                                follow(user.id);
                            }}>&nbsp;</button>
                        }
                    </div>
                }
            </div>
            <div className={classes.userInfo}>
                <div className={classes.userStatus}>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <strong>{user.name} {user.id}</strong>
                        </NavLink>
                    </div>
                    <div className={classes.status}>{user.status}</div>
                </div>
                <div className={classes.userLocation}>
                    <div>Russia</div>
                    <div>Moscow</div>
                </div>
            </div>
        </div>
    )
}

export default User;
