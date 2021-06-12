import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    toggleFollowingProgress,
    requestUsers,
    pageChanged
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUser
} from "../../redux/users-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";


type PropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: UserType[]
    followingInProgress: Array<number>
    isAuth: boolean
    requestUsers: (currentPage: number, pageSize: number) => void
    pageChanged: (pageNumber: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        let {pageSize} = this.props;
        this.props.pageChanged(pageNumber, pageSize);
    }

    render() {
        // console.log("render USERS");
        return (
            <>
                {
                    this.props.isFetching == true ?
                        <Preloader /> :
                        null
                }
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                    isAuth={this.props.isAuth}
                />
            </>
        )
    }
}




let mapStateToProps = (state: AppStateType) => {
    // console.log("mapStateToProps USERS");
    return {
        users: getUser(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: state.auth.isAuth
    }
}


export default compose(
    connect(mapStateToProps, {
        follow: follow,
        unfollow: unfollow,
        toggleFollowingProgress: toggleFollowingProgress,
        requestUsers: requestUsers,
        pageChanged: pageChanged
    }),
    // withAuthRedirect
)(UsersContainer);