import React from 'react';
import classes from './Login.module.css';
import {Form, Field} from 'react-final-form';


// const onSubmit = (values) => {
//     window.alert(JSON.stringify(values, 0, 2))
// }
const validate = (values) => {
    const errors = {}
    if (!values.login) {
        errors.login = 'Required'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors
}


const LoginForm = (props) => {
    return (
        <div className={classes.login}>
            <Form
                onSubmit={props.onSubmit}
                validate={validate}
                render={({handleSubmit, form, submitting, pristine, values}) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field name="login">
                                {({input, meta}) => (
                                    <div>
                                        <input {...input} type="text" placeholder="Login" />
                                        <span>{meta.error && meta.touched && <i>{meta.error}</i>}&nbsp;</span>
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div>
                            <Field name="password">
                                {({input, meta}) => (
                                    <div>
                                        <input {...input} type="password" placeholder="Password" />
                                        <span>{meta.error && meta.touched && <i>{meta.error}</i>}&nbsp;</span>
                                    </div>
                                )}
                            </Field>
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
                        {/*<button*/}
                        {/*    type="button"*/}
                        {/*    onClick={form.reset}*/}
                        {/*    disabled={submitting || pristine}*/}
                        {/*>Reset</button>*/}
                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </form>
                )}
            />
        </div>
    )
}

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div className={classes.login}>
            <h1>LOGIN</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;
