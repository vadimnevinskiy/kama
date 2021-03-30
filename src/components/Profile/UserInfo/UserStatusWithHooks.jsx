import React, {useState} from 'react';
import classes from './UserStatus.module.css';

const UserStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);


    const activateEditMode = () => {
        setEditMode(true);
    }
    const deActivateEditMode = () => {
        setEditMode(false);
    }

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    const saveStatus = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    return (
        <div className={classes.userStatus}>
            {!editMode &&
            <div className={classes.statusBox}>
                <span className={classes.status}>{props.status || '****************'}</span>
                <span
                    onClick={activateEditMode}
                    className={`${classes.userIcon} material-icons`}
                >border_color</span>
            </div>
            }
            {editMode &&
            <div className={classes.statusBoxActive}>
                <input
                    className={classes.statusField}
                    type="text"
                    autoFocus={true}
                    value={status}
                    onChange={onChangeStatus}
                    // onBlur={ this.deActivateEditMode }
                />
                <span
                    onClick={saveStatus}
                    className={`${classes.userIcon} ${classes.saveIcon} material-icons`}
                >save</span>
                <span
                    onClick={deActivateEditMode}
                    className={`${classes.userIcon} ${classes.closeIcon} material-icons`}
                >close</span>
            </div>
            }
        </div>
    )


    // return (
    //     <div className={classes.userStatus}>
    //         {
    //             <div className={classes.statusBox}>
    //                 <span className={classes.status}>{props.status || '****************'}</span>
    //                 <span onClick={activateEditMode}
    //                       className={`${classes.userIcon} material-icons`}>border_color</span>
    //             </div>
    //         }
    //         {false &&
    //         <div className={classes.statusBoxActive}>
    //             <input
    //                 className={classes.statusField}
    //                 type="text"
    //                 autoFocus={true}
    //                 value={state.status}
    //                 onChange={onChangeStatus}
    //                 // onBlur={ this.deActivateEditMode }
    //             />
    //             <span className={`${classes.userIcon} ${classes.saveIcon} material-icons`}
    //                   onClick={saveStatus}>save</span>
    //             <span className={`${classes.userIcon} ${classes.closeIcon} material-icons`}
    //                   onClick={deActivateEditMode}>close</span>
    //         </div>
    //         }
    //     </div>
    // )

}

export default UserStatusWithHooks;
