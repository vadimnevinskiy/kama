import React from 'react';
import classes from './Login.module.css';
import {Form, Field} from 'react-final-form';
import {authAPI} from "../../api/api";
import {InputPassword, InputText} from "../common/formControls/FormControls";
import {composeValidators, maxValue, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";



const LoginForm = (props) => {
    const validate = (values) => {
        const errors = {}
        if (!values.email) {
            errors.email = 'Required'
        }
        if (!values.password) {
            errors.password = 'Required'
        }
        return errors
    }

    return (
        <div className={classes.login}>
            <Form
                onSubmit={props.onSubmit}
                validate={validate}
                render={({handleSubmit, form, submitting, pristine, values}) => (
                    <form onSubmit={handleSubmit} className={classes.form}>
                        <div>
                            <Field
                                component={InputText}
                                name="email"
                                placeholder="Email"
                                validate={composeValidators(required, maxValue(50))}
                            />
                        </div>
                        <div>
                            <Field
                                component={InputPassword}
                                name="password"
                                placeholder="Password"
                                validate={composeValidators(required, maxValue(10))}
                            />
                        </div>
                        <div>
                            <label>Remember me</label>
                            <Field
                                name="rememberMe"
                                component="input"
                                type="checkbox"
                            />
                        </div>
                        <button type="submit" disabled={submitting}>Submit</button>
                    </form>
                )}
            />
        </div>
    )
}

const Login = (props) => {
    const onSubmit = (formData) => {
        // console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha )
    }
    if(props.isAuth){
        return <Redirect to={"/profile"} />
    } else {
        return (
            <div className={classes.login}>
                <h1 className={classes.title}>LOGIN</h1>
                <LoginForm onSubmit={onSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);
