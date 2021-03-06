import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Profile from './Profile';
import {setUserProfile} from '../../redux/profile-reducer';
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        let url = `https://social-network.samuraijs.com/api/1.0/profile/` + userId
        axios.get(url)
            .then(responce => {
                this.props.setUserProfile(responce.data);
            });
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
