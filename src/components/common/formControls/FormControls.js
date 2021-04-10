import React from "react";
import classes from './FormControls.module.css';
import {Field} from "react-final-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} className={classes.fieldTextarea}/>
        </FormControl>
    )
}
export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} className={classes.fieldInput}/>
        </FormControl>
    )
}


export const createField = (component, placeholder, name, validators, props={}, label='') => {
    return (
        <div>
            {
                label &&
                <label>{label}</label>
            }
            <Field
                component={component}
                name={name}
                placeholder={placeholder}
                validate={validators}
                {...props}
            />
        </div>
    )
}



