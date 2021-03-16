import React from 'react';
import classes from './UserStatus.module.css';

class UserStatus extends React.Component {
    state = {
        editMode: true
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    onChangeStatus(value) {
       
    }

    render() {
        return (
            <div className={classes.userStatus} >
                {!this.state.editMode &&
                    <div className={classes.statusBox}>
                        <span className={classes.status}>{this.props.status}</span>
                        <span onClick={ this.activateEditMode.bind(this) } className={`${classes.userIcon} material-icons`}>border_color</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className={classes.statusBox}>
                        <input autoFocus={true} onBlur={ this.deActivateEditMode.bind(this) } className={classes.statusField} type="text" value={this.props.status} onChange={this.onChangeStatus}/>
                        <span className={`${classes.userIcon} ${classes.saveIcon} material-icons`}>save</span>
                    </div>
                }
            </div>
        )
    }
}

export default UserStatus;
