import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            {/*<NavLink to="/profile" className={`${classes.navbar__item} ${classes.navbar__item_active}`}>*/}
            {/*    <span className={`${classes.icon} material-icons`}>person</span>*/}
            {/*    Profile*/}
            {/*</NavLink>*/}
            <NavLink to="/profile" className={classes.navbar__item} activeClassName={classes.active}>
                <span className={`${classes.icon} material-icons`}>person</span>
                Profile
            </NavLink>
            <NavLink to="/dialogs" className={classes.navbar__item} activeClassName={classes.active}>
                <span className={`${classes.icon} material-icons`}>mail</span>
                Dialogs
            </NavLink>
            <NavLink to="/news" className={classes.navbar__item} activeClassName={classes.active}>
                <span className={`${classes.icon} material-icons`}>event</span>
                News
            </NavLink>
            <NavLink to="/music" className={classes.navbar__item} activeClassName={classes.active}>
                <span className={`${classes.icon} material-icons`}>queue_music</span>
                Music
            </NavLink>
            <NavLink to="/settings" className={classes.navbar__item} activeClassName={classes.active}>
                <span className={`${classes.icon} material-icons`}>settings</span>
                Settings
            </NavLink>
        </nav>
    );
}
export default Navbar;
