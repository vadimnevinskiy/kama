import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <a href="/profile" className={`${classes.navbar__item} ${classes.navbar__item_active}`}>
                <span className={`${classes.icon} material-icons`}>person</span>
                Profile
            </a>
            <a href="/dialogs" className={classes.navbar__item}>
                <span className={`${classes.icon} material-icons`}>mail</span>
                Dialogs
            </a>
            <a href="/news" className={classes.navbar__item}>
                <span className={`${classes.icon} material-icons`}>event</span>
                News
            </a>
            <a href="/music" className={classes.navbar__item}>
                <span className={`${classes.icon} material-icons`}>queue_music</span>
                Music
            </a>
            <a href="/settings" className={classes.navbar__item}>
                <span className={`${classes.icon} material-icons`}>settings</span>
                Settings
            </a>
        </nav>
    );
}
export default Navbar;
