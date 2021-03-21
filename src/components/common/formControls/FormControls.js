import React from "react";
import classes from './FormControls.module.css';

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps}  className={classes.fieldTextarea} />
        </FormControl>
    )
}
export const InputText = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input type='text' {...input} {...restProps} className={classes.fieldInput}/>
        </FormControl>
    )
}
export const InputPassword = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input type='password' {...input} {...restProps} className={classes.fieldInput}/>
        </FormControl>
    )
}





// export const Textarea = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
//             <div>
//                 <textarea {...input} {...props} className={classes.fieldTextarea} />
//             </div>
//             { hasError && <span>{meta.error}</span> }
//         </div>
//     )
// }

// export const InputText = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
//             <div>
//                 <input type='text' {...input} {...props} className={classes.fieldInput}/>
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }

// export const InputPassword = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
//             <div>
//                 <input type='password' {...input} {...props} className={classes.fieldInput}/>
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }
