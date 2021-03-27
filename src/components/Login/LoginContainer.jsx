import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import classes from "./Login.module.css";
import {LoginForm} from "./Login";
import {login} from "../../redux/auth-reducer";

class LoginContainer extends React.Component {
    render() {
        if(this.props.isAuth){
            return <Redirect to={"/profile"} />
        } else {
            return (
                <div className={classes.login}>
                    <h1 className={classes.title}>LOGIN</h1>
                    <LoginForm {...this.props} login={this.props.login} />
                </div>
            )
        }
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }
}

export default compose(
    connect(mapStateToProps, {
        login
    })
)(LoginContainer)


