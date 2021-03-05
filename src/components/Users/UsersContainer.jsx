import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toogleIsFetching
} from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toogleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
                this.props.setTotalUsersCount(responce.data.totalCount);
                this.props.toogleIsFetching(false);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toogleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
                this.props.toogleIsFetching(false);
            });
    }

    render() {
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
                />
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (id) => {
//             dispatch(followAC(id));
//         },
//         unfollow: (id) => {
//             dispatch(unfollowAC(id));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toogleIsFetching: (isFetching) => {
//             dispatch(toogleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toogleIsFetching })(UsersContainer);
