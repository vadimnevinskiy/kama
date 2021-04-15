import React from "react";
import classes from './UserForm.module.css';
import {Form, Field} from 'react-final-form'
import {createField, Input} from "../../common/formControls/FormControls";


const UserForm = (props) => {

    let initValue = {
        fullName: props.profile.fullName,
        aboutMe: props.profile.aboutMe,
        lookingForAJob: props.profile.lookingForAJob,
        lookingForAJobDescription: props.profile.lookingForAJobDescription,

            facebook: props.profile.contacts.facebook,
            website: props.profile.contacts.website,
            vk: props.profile.contacts.vk,
            twitter: props.profile.contacts.twitter,
            instagram: props.profile.contacts.instagram,
            youtube: props.profile.contacts.youtube,
            github: props.profile.contacts.github,
            mainLink: props.profile.contacts.mainLink

    }

    return (
        <Form
            onSubmit={props.onSubmit}
            initialValues={initValue}
            render={({handleSubmit, submitError}) => (
                <form onSubmit={handleSubmit} className={classes.form}>
                    <div className={classes.userForm}>
                        <div className={classes.edit} onClick={props.deActivateEditMode}>
                            <span className={classes.editIcon + ' ' + "material-icons"}>close</span>
                        </div>

                        <div className={classes.userData}>
                            <h3>Info</h3>
                            {createField(Input, "Name", "fullName", null, {type: "text"}, "Name")}
                            {createField(Input, "About Me", "aboutMe", null, {type: "text"}, "About me")}
                            {createField(Input, "Skills", "lookingForAJobDescription", null, {type: "textarea"}, "Skills")}
                            {createField(Input, null, "lookingForAJob", null, {type: "checkbox"}, "Looking for a job")}
                            {submitError && <div className={classes.serverError}>{submitError}</div>}
                            <div className="buttons">
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                        <div className={classes.userContacts}>
                            <h3>Contacts</h3>
                            {createField(Input, "facebook", "facebook", null, {type: "text"}, null)}
                            {createField(Input, "website", "website", null, {type: "text"}, null)}
                            {createField(Input, "vk", "vk", null, {type: "text"}, null)}
                            {createField(Input, "twitter", "twitter", null, {type: "text"}, null)}
                            {createField(Input, "instagram", "instagram", null, {type: "text"}, null)}
                            {createField(Input, "youtube", "youtube", null, {type: "text"}, null)}
                            {createField(Input, "github", "github", null, {type: "text"}, null)}
                            {createField(Input, "mainLink", "mainLink", null, {type: "text"}, null)}
                        </div>
                    </div>

                </form>
            )}
        />

    )
}

export default UserForm;
