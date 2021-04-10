import React from 'react';
import classes from './Users.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

let Users = ({
                 users,
                 totalUsersCount,
                 pageSize,
                 currentPage,
                 onPageChanged,
                 isAuth,
                 unfollow,
                 follow,
                 followingInProgress,
                 ...props}) => {
    return (
        <div>
            <Paginator
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
            {
                users.map(u => {
                    return (
                        <User
                            key={u.id}
                            user={u}
                            isAuth={isAuth}
                            unfollow={unfollow}
                            follow={follow}
                            followingInProgress={followingInProgress}
                        />
                    )
                })
            }
        </div>
    )
}


export default Users;
