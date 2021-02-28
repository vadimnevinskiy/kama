import React from 'react';
import classes from './Users.module.css';
import * as axios from "axios";
import avatar from '../../assets/images/avatar.png';

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(responce => {
                // props.setUsers([
                //     {id: 0, img: 'https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar.png', followed: false, fullname: 'Dmitry', status: 'Hello', location: {city: 'Minsk', country: 'Belarus'} },
                //     {id: 1, img: 'https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar.png', followed: true, fullname: 'Sasha', status: 'Good morning', location: {city: 'Moscow', country: 'Russia'} },
                //     {id: 2, img: 'https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar.png', followed: false, fullname: 'Katya', status: 'Good afternoon', location: {city: 'Saint Petersburg', country: 'Russia'} },
                //     {id: 3, img: 'https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar.png', followed: true, fullname: 'Anton', status: 'Good evening', location: {city: 'Berlin', country: 'Germany'} },
                //     {id: 4, img: 'https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar.png', followed: false, fullname: 'Boris', status: 'Why not?', location: {city: 'Gomel', country: 'Belarus'} },
                //     {id: 5, img: 'https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar.png', followed: false, fullname: 'Denis', status: 'See you later', location: {city: 'Kiev', country: 'Ukraine'} },
                //     {id: 6, img: 'https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar.png', followed: false, fullname: 'Ivan', status: 'Are you kidding?', location: {city: 'Novgorod', country: 'Russia'} },
                //     {id: 7, img: 'https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar.png', followed: false, fullname: 'Mikhail', status: 'How is it going?', location: {city: 'Lviv', country: 'Ukraine'} },
                //     {id: 8, img: 'https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar.png', followed: false, fullname: 'Roman', status: 'How about you?', location: {city: 'Kabul', country: 'Afghanistan'} },
                //     {id: 9, img: 'https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar.png', followed: false, fullname: 'Stepan', status: 'Always welcome', location: {city: 'Yerevan', country: 'Armenia'} },
                //     {id: 10, img: 'https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar.png', followed: false, fullname: 'Yaroslav', status: 'I’m pretty sure', location: {city: 'Vienna', country: 'Austria'} },
                //     {id: 11, img: 'https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar.png', followed: false, fullname: 'Albina', status: 'I’m absolutely sure', location: {city: 'Brussels', country: 'Belgium'} },
                //     {id: 12, img: 'https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar.png', followed: false, fullname: 'Anna', status: 'I’m positive', location: {city: 'Havana', country: 'Cuba'} },
                //     {id: 13, img: 'https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar.png', followed: false, fullname: 'Varvara', status: 'In my opinion', location: {city: 'Copenhagen', country: 'Denmark'} }
                // ])
                props.setUsers(responce.data.items)
            });
    }

    return (
        <div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id} className={classes.user}>
                            <div className={classes.userImg}>
                                <div className={classes.photo}>
                                    <img src={u.photos.small != null ? u.photos.small : avatar} alt=""/> :
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
        </div>
    )
}

export default Users;
