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
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit} className={classes.form}>
                    <div className={classes.userForm}>
                        <div className={classes.userData}>
                            <div className={classes.edit} onClick={props.deActivateEditMode}>
                                <span className={classes.editIcon + ' ' + "material-icons"}>close</span>
                            </div>


                            {createField(Input, "Name", "fullName", null, {type: "text"}, null)}
                            {createField(Input, "About Me", "aboutMe", null, {type: "text"}, null)}
                            {createField(Input, null, "lookingForAJob", null, {type: "checkbox"}, "Looking for a job")}
                            {createField(Input, "Skills", "lookingForAJobDescription", null, {type: "textarea"}, null)}

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
