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
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUser
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.pageChanged(pageNumber, this.props.pageSize);
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




let mapStateToProps = (state) => {
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
