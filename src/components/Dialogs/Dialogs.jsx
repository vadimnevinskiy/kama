import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Form, Field} from 'react-final-form';
import {Textarea} from "../common/formControls/FormControls";
import {composeValidators, maxValue, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

    let dialogElements = props.dialogs.users.map(item => {
        return (
            <DialogItem name={item.name} id={item.id} key={item.id}/>
        )
    });

    let messageElements = props.dialogs.messages.map(m => <MessageItem message={m.text} key={m.id}/>);

    const onSubmit = (values) => {
        props.addMessage(values.messageText);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsList}>
                {dialogElements}
            </div>
            <div className={classes.messagesList}>
                {messageElements}
                <AddMessageForm onSubmit = {onSubmit} />
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <Form
            onSubmit={props.onSubmit}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>
                    <div className={classes.form}>
                        <div className={classes.fieldBox}>
                            <Field
                                component={Textarea}
                                name="messageText"
                                placeholder="Enter message.."
                                validate={composeValidators(required, maxValue(80))}
                            />
                        </div>
                        <div className={classes.buttonBox}>
                            <button className={classes.button}>
                                <span className={`${classes.buttonIcon} material-icons`}>send</span>
                            </button>
                        </div>
                    </div>
                </form>
            )}
        />
    )
}

export default Dialogs;
