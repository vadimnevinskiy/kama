import React from 'react';
import classes from './Login.module.css';
import {Form, Field} from 'react-final-form';
import {createField, Input} from "../common/formControls/FormControls";
import {composeValidators, maxValue, required} from "../../utils/validators/validators";


export const LoginForm = ({login, captcha}) => {
    let onSubmit = async (formData) => {
        let successLogin = login(formData.email, formData.password, formData.rememberMe, formData.captcha);
        return successLogin;
    }


    return (
        <div className={classes.login}>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit, submitError}) => (
                    <form onSubmit={handleSubmit} className={classes.form}>
                        {createField(
                            Input,
                            "Email",
                            "email",
                            composeValidators(required, maxValue(50)),
                            {type: "text"},
                            null
                        )}
                        {createField(
                            Input,
                            "Password",
                            "password",
                            composeValidators(required, maxValue(10)),
                            {type: "password"},
                            null
                        )}
                        {createField(
                            Input,
                            null,
                            "rememberMe",
                            null,
                            {type: "checkbox"},
                            null
                        )}

                        {captcha && <div className={classes.captcha}>
                            <img alt="captcha" src={captcha}/>
                            {createField(
                                Input,
                                "captcha",
                                "captcha",
                                null,
                                null,
                                null
                            )}
                        </div>}
                        {submitError && <div className={classes.serverError}>{submitError}</div>}
                        <button type="submit">Submit</button>

                    </form>
                )}
            />
        </div>
    )
}
