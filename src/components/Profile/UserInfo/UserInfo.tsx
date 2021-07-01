import React, {useState} from 'react';
import classes from './UserInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

import UserData from "../UserData/UserData";
import UserForm from "../UserForm/UserForm";
import UserContacts from "../UserContacts/UserContacts";
import Avatar from "../../common/Avatar/Avatar";
import {PhotoType, ProfileType} from "../../../types/types";


type PropsType = {
    profile: ProfileType | null
    savePhoto: (photo: PhotoType) => void
    saveProfile: (profile: ProfileType) => void
    isOwner: boolean
    status: string
    updateStatus: (status: string) => void
}
const UserInfo: React.FC<PropsType> = (props) => {
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

        const onMainPhotoSelected = (e: any) => {
            if (e.target.files.length) {
                let file = e.target.files[0];
                props.savePhoto(file);
            }
        }
        const onSubmit = async (values: ProfileType) => {
            debugger
            let successSaved = await props.saveProfile(values);
            deActivateEditMode();
            return successSaved;
        }

        return (
            <div className={classes.user}>
                <div className={classes.userHeaderBlock}>
                    {
                        props.isOwner &&
                        <div className={classes.loadPhoto}>
                            <input type={"file"} onChange={onMainPhotoSelected}/>
                        </div>
                    }
                    <Avatar smallPhoto={props.profile.photos.small} largePhoto={props.profile.photos.large} />


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


                <div className={classes.userData}>
                    <div className={classes.data}>
                        {
                            editMode
                                ? <UserForm onSubmit={onSubmit} profile={props.profile} isOwner={props.isOwner} status={props.status} deActivateEditMode={deActivateEditMode}/>
                                : <UserData profile={props.profile} isOwner={props.isOwner} status={props.status}
                                            activateEditMode={activateEditMode} updateStatus={props.updateStatus} />
                        }
                    </div>

                </div>




            </div>
        );
    }
}

// const Contact = ({contactTitle, contactValue}) => {
//     return (
//         <div className={classes.contactItem}>
//             <strong>{contactTitle}:</strong> {contactValue}
//         </div>
//     )
// }


export default UserInfo;
