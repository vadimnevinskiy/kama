import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {getProfile, getStatus, savePhoto, updateStatus} from '../../redux/profile-reducer';
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component{
    getUserProfile () {
        let userId = this.props.match.params.userId;
        if (userId) {
            this.props.getProfile(userId);
            this.props.getStatus(userId);
        } else {
            userId = this.props.authorizesUserId;
            if (!userId){
                this.props.history.push('/login');
            } else {
                this.props.getProfile(userId);
                this.props.getStatus(userId);
            }
        }
    }

    componentDidMount() {
        this.getUserProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.getUserProfile();
        }

    }





    render () {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                isOwner={!this.props.match.params.userId}
                savePhoto={this.props.savePhoto}
            />
        )
    }
}



let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizesUserId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);
