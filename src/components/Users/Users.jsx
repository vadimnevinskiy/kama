import React from 'react';
import classes from './Users.module.css';
import avatar from '../../assets/images/avatar.png';
import {NavLink} from 'react-router-dom';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pagesCount > i && i > (pagesCount - 10)) {
            pages.push(i);
        }
    }

    return (
        <div>
            <div className={classes.paginator}>
                {
                    pages.map(p => {
                        if (props.currentPage === p) {
                            return (
                                <span key={p} className={classes.selectedPage}>{p}</span>
                            )
                        } else {
                            return (
                                <span key={p}
                                      onClick={(e) => {
                                          props.onPageChanged(p)
                                      }}>{p}</span>
                            )
                        }
                    })
                }
            </div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id} className={classes.user}>
                            <div className={classes.userImg}>
                                <div className={classes.photo}>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img src={u.photos.small != null ? u.photos.small : avatar} alt=""/>
                                    </NavLink>
                                </div>
                                {
                                    props.isAuth &&
                                    <div>
                                        {u.followed ?
                                            <button disabled={props.followingInProgress.some(id => id === u.id)} className={classes.button + ' ' + classes.followingBtn} onClick={() => {
                                                props.unfollow(u.id);
                                            }}>&nbsp;</button> :
                                            <button disabled={props.followingInProgress.some(id => id === u.id)} className={classes.button + ' ' + classes.unfollowingBtn} onClick={() => {
                                                props.follow(u.id);
                                            }}>&nbsp;</button>
                                        }
                                    </div>
                                }
                            </div>
                            <div className={classes.userInfo}>
                                <div className={classes.userStatus}>
                                    <div>
                                        <NavLink to={'/profile/' + u.id}>
                                            <strong>{u.name} {u.id}</strong>
                                        </NavLink>
                                    </div>
                                    <div className={classes.status}>{u.status}</div>
                                </div>
                                <div className={classes.userLocation}>
                                    {/*<div>{u.location.country}</div>*/}
                                    {/*<div>{u.location.city}</div>*/}
                                    <div>Russia</div>
                                    <div>Moscow</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Users;
