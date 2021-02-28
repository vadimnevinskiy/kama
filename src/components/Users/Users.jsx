import React from 'react';
import classes from './Users.module.css';
import * as axios from "axios";
import avatar from '../../assets/images/avatar.png';

class Users extends React.Component {


    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(responce => {
                this.props.setUsers(responce.data.items)
            });
    }

    render() {
        return (
            <div>
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
