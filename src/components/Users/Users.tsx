import React from 'react';
import classes from './Users.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";
import {UserType} from "../../types/types";




type PropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    isAuth: boolean
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    followingInProgress: Array<number>
}

let Users: React.FC<PropsType> = ({
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
                totalItemsCount={totalUsersCount}
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


export default Users
