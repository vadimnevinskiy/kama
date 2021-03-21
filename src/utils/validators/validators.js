export const composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined)



export const required = (value) => {
    if (value) {
        return undefined;
    } else {
        return 'Required';
    }
}
export const maxValue = (length) => (value) => {
    if (value && value.length > length) {
        return `Max length ${length} symbols`;
    } else {
        return undefined;
    }
}


