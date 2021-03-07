import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {authAPI, usersAPI} from "../../api/api";


class HeaderContainer extends React.Component {
    componentDidMount() {
        // this.props.toogleIsFetching(true);
        authAPI.authMe(this.props.currentPage, this.props.pageSize)
            .then(data => {
                if(data.resultCode === 0){
                    let {id, login, email} = data.data;
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
