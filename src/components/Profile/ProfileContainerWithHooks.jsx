import Profile from "./Profile";
import {useEffect, useState} from "react";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


const ProfileContainer = (props) => {
    let userId = props.match.params.userId;

    useEffect(() => {
        if (userId) {
            props.getProfile(userId);
            props.getStatus(userId);
        } else {
            userId = props.authorizesUserId;
            if (!userId){
                props.history.push('/login');
            } else {
                props.getProfile(userId);
                props.getStatus(userId);
            }
        }
    }, [])







    return (
        <>
            <Profile
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
        </>
    )
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizesUserId: state.auth.userId
    }
}
export default compose(
    connect(
        mapStateToProps,
        {getProfile, getStatus, updateStatus}
    ),
    withRouter
)(ProfileContainer);


