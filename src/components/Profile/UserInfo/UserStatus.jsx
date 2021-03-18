import React from 'react';
import classes from './UserStatus.module.css';

class UserStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    saveStatus = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    render() {
        return (
            <div className={classes.userStatus} >
                {!this.state.editMode &&
                    <div className={classes.statusBox}>
                        <span className={classes.status}>{this.props.status || '****************'}</span>
                        <span onClick={ this.activateEditMode } className={`${classes.userIcon} material-icons`}>border_color</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className={classes.statusBoxActive}>
                        <input
                            className={classes.statusField}
                            type="text"
                            autoFocus={true}
                            value={this.state.status}
                            onChange={this.onChangeStatus}
                            // onBlur={ this.deActivateEditMode }
                        />
                        <span className={`${classes.userIcon} ${classes.saveIcon} material-icons`} onClick={this.saveStatus}>save</span>
                        <span className={`${classes.userIcon} ${classes.closeIcon} material-icons`} onClick={this.deActivateEditMode}>close</span>
                    </div>
                }
            </div>
        )
    }
}

export default UserStatus;
