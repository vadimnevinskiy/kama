import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                Header
                <div className={classes.loginBlock}>
                    {
                        props.isAuth === true
                            ? <div>
                                {props.login} - <button onClick={props.logout}>Logout</button>
                            </div> :
                            <NavLink to={"/login"}>
                                Login
                            </NavLink>
                    }

                </div>
            </div>
        </header>
    );
}

export default Header;
