import React from 'react';
import classes from './Login.module.css';
import {Form, Field} from 'react-final-form';
import {InputPassword, InputText} from "../common/formControls/FormControls";
import {composeValidators, maxValue, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {login} from "../../redux/auth-reducer";


export const LoginForm = (props) => {
    let onSubmit = async (formData) => {
        let successLogin = props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
        return successLogin;
    }


    return (
        <div className={classes.login}>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit, submitError}) => (
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
                        { props.captcha && <div className={classes.captcha}>
                            <img alt="captcha" src={props.captcha} />
                            <Field
                                component={InputText}
                                name="captcha"
                                placeholder="captcha"
                            />
                            {/*<Field name="captcha">*/}
                            {/*    {(props) => (<div><input type="text" {...props.input} /></div>)}*/}
                            {/*</Field>*/}

                        </div>}
                        {submitError && <div className={classes.serverError}>{submitError}</div>}
                        <button type="submit">Submit</button>

                    </form>
                )}
            />
        </div>
    )
}

// const Login = (props) => {
//     const onSubmit = async (formData) => {
//         let successLogin = props.login(formData.email, formData.password, formData.rememberMe);
//         return successLogin;
//     }
//     if(props.isAuth){
//         return <Redirect to={"/profile"} />
//     } else {
//         return (
//             <div className={classes.login}>
//                 <h1 className={classes.title}>LOGIN</h1>
//                 <LoginForm onSubmit={onSubmit}/>
//             </div>
//         )
//     }
// }
//
// const mapStateToProps = (state) => ({
//     isAuth: state.auth.isAuth
// })
// export default connect(mapStateToProps, {login})(Login);
