import React, {useState} from 'react';
import classes from './UserInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import avatar from "../../../assets/images/avatar.png";
import UserData from "../UserData/UserData";
import UserForm from "../UserForm/UserForm";
import UserContacts from "../UserContacts/UserContacts";

const UserInfo = (props) => {
    let [editMode, setEditMode] = useState(false);


    if (!props.profile) {
        return (
            <Preloader/>
        );
    } else {

        const activateEditMode = () => {
            setEditMode(true);
        }
        const deActivateEditMode = () => {
            setEditMode(false);
        }

        const onMainPhotoSelected = (e) => {
            if (e.target.files.length) {
                let file = e.target.files[0];
                props.savePhoto(file);
            }
        }
        const onSubmit = values => {
            props.saveData(values);
            deActivateEditMode();
        }

        return (
            <div className={classes.user}>
                <div className={classes.avatar}>
                    <div className={classes.avatarBlock}>
                        <img className={classes.avatar__image}
                             src={props.profile.photos.small != null ? props.profile.photos.small : avatar} alt=""/>
                        {
                            props.profile.photos.large != null
                                ? <img className={classes.avatar__large}
                                       src={props.profile.photos.large != null ? props.profile.photos.large : avatar}
                                       alt=""/>
                                : ''
                        }
                        {
                            props.isOwner &&
                            <div className={classes.loadPhoto}>
                                <input type={"file"} onChange={onMainPhotoSelected}/>
                            </div>
                        }
                    </div>
                </div>
                <div className={classes.userData}>
                    <div className={classes.data}>
                        {
                            editMode
                                ? <UserForm onSubmit={onSubmit} profile={props.profile} isOwner={props.isOwner} status={props.status} deActivateEditMode={deActivateEditMode}/>
                                : <UserData profile={props.profile} isOwner={props.isOwner} status={props.status}
                                            activateEditMode={activateEditMode}/>
                        }
                    </div>
                    {/*{*/}
                    {/*    !editMode*/}
                    {/*        ? <div className={classes.userContacts}>*/}
                    {/*            <h3>Contacts</h3>*/}
                    {/*            {*/}
                    {/*                Object.keys(props.profile.contacts).map((key) => {*/}
                    {/*                    if (props.profile.contacts[key]) {*/}
                    {/*                        return (*/}
                    {/*                            <Contact key={key} contactTitle={key}*/}
                    {/*                                     contactValue={props.profile.contacts[key]}/>*/}
                    {/*                        )*/}
                    {/*                    }*/}
                    {/*                })*/}
                    {/*            }*/}
                    {/*        </div>*/}
                    {/*        : ''*/}
                    {/*}*/}
                </div>


                <UserContacts
                    facebook={props.profile.contacts.facebook}
                    website={props.profile.contacts.website}
                    vk={props.profile.contacts.vk}
                    twitter={props.profile.contacts.twitter}
                    youtube={props.profile.contacts.youtube}
                    github={props.profile.contacts.github}
                    mainLink={props.profile.contacts.mainLink}
                    instagram={props.profile.contacts.instagram}
                />

            </div>
        );
    }
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={classes.contactItem}>
            <strong>{contactTitle}:</strong> {contactValue}
        </div>
    )
}


export default UserInfo;
