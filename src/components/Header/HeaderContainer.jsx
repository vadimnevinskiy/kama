import React from 'react';
import * as axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        // this.props.toogleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(responce => {
                if(responce.data.resultCode === 0){
                    let {id, login, email} = responce.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }
    render() {
        return (
            <Header {...this.props} />
        );
    }

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
