import React from 'react';
import classes from './Login.module.css';
import {Form, Field} from 'react-final-form';
import {authAPI} from "../../api/api";
import {InputPassword, InputText} from "../common/formControls/FormControls";
import {composeValidators, maxValue, required} from "../../utils/validators/validators";



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
                            {/*<Field name="email">*/}
                            {/*    {({input, meta}) => (*/}
                            {/*        <div>*/}
                            {/*            <input {...input} type="text" placeholder="Email" />*/}
                            {/*            <span>{meta.error && meta.touched && <i>{meta.error}</i>}&nbsp;</span>*/}
                            {/*        </div>*/}
                            {/*    )}*/}
                            {/*</Field>*/}
                        </div>
                        <div>
                            <Field
                                component={InputPassword}
                                name="password"
                                placeholder="Password"
                                validate={composeValidators(required, maxValue(10))}
                            />
                            {/*<Field name="password">*/}
                            {/*    {({input, meta}) => (*/}
                            {/*        <div>*/}
                            {/*            <input {...input} type="password" placeholder="Password" />*/}
                            {/*            <span>{meta.error && meta.touched && <i>{meta.error}</i>}&nbsp;</span>*/}
                            {/*        </div>*/}
                            {/*    )}*/}
                            {/*</Field>*/}
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
        console.log(formData)
        authAPI.login(formData)
    }
    return (
        <div className={classes.login}>
            <h1 className={classes.title}>LOGIN</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;
