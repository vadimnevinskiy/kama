import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {getProfile, getStatus, savePhoto, saveProfile, updateStatus} from '../../redux/profile-reducer';
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {PhotoType, ProfileType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";


type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizesUserId: number | null
}
type MapDispatchPropsType = {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void

    updateStatus: (status: string) => void
    savePhoto: (photo: PhotoType) => void
    saveProfile: (profile: ProfileType) => void
}
type OwnPropsType = {
    history: Array<string>
    authorizesUserId: number
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class ProfileContainer extends React.Component<PropsType>{
    getUserId () {
        return (this.props as any).match.params.userId
    }


    getUserProfile () {
        let userId = this.getUserId();
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

    componentDidUpdate(prevProps: PropsType, prevState: AppStateType) {
        if(this.getUserId() != (prevProps as any).match.params.userId){
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
                isOwner={!this.getUserId()}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile}
            />
        )
    }
}



let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizesUserId: state.auth.userId
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
    (
        mapStateToProps,
        {getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);
