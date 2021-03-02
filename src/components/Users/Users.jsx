import React from 'react';
import classes from './Users.module.css';
import * as axios from "axios";
import avatar from '../../assets/images/avatar.png';

class Users extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
                this.props.setTotalUsersCount(responce.data.totalCount);
            });
    }

    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items)
            });

    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div className={classes.paginator}>
                    {
                        pages.map(p => {

                            if (this.props.currentPage === p) {
                                return (
                                    <span key={p} className={classes.selectedPage}>{p}</span>
                                )
                            } else if(this.props.currentPage != p) {
                                return (
                                    <span key={p} onClick={(e) => { this.onPageChanged(p) }}>{p}</span>
                                )
                            }

                        })
                    }
                </div>
                {
                    this.props.users.map(u => {
                        return (
                            <div key={u.id} className={classes.user}>
                                <div className={classes.userImg}>
                                    <div className={classes.photo}>
                                        <img src={u.photos.small != null ? u.photos.small : avatar} alt=""/> :
                                    </div>
                                    <div>
                                        {u.followed ?
                                            <button className={classes.button + ' ' + classes.redBtn} onClick={() => {
                                                this.props.unfollow(u.id)
                                            }}>Unfollow</button> :
                                            <button className={classes.button + ' ' + classes.greenBtn} onClick={() => {
                                                this.props.follow(u.id)
                                            }}>Follow</button>
                                        }

                                    </div>
                                </div>
                                <div className={classes.userInfo}>
                                    <div className={classes.userStatus}>
                                        <div><strong>{u.name} {u.id}</strong></div>
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
}

export default Users;
