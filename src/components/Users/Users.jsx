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
                        } else if (props.currentPage != p) {
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
                                        <img src={u.photos.small != null ? u.photos.small : avatar} alt=""/> :
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed ?
                                        <button className={classes.button + ' ' + classes.redBtn} onClick={() => {
                                            props.unfollow(u.id)
                                        }}>Unfollow</button> :
                                        <button className={classes.button + ' ' + classes.greenBtn} onClick={() => {
                                            props.follow(u.id)
                                        }}>Follow</button>
                                    }

                                </div>
                            </div>
                            <div className={classes.userInfo}>
                                <div className={classes.userStatus}>
                                    <div><strong>{u.name}</strong></div>
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
            {/*<div className={classes.getUsersBtn}>*/}
            {/*    <button onClick={this.getUsers}>Get Users</button>*/}
            {/*</div>*/}
        </div>
    )
}


export default Users;
