import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Profile from './Profile';
import {setUserProfile} from '../../redux/profile-reducer';

class ProfileContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
