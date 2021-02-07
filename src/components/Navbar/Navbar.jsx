import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <a href="#" className={`${classes.navbar__item} ${classes.navbar__item_active}`}>
                <span className={`${classes.icon} material-icons`}>person</span>
                Profile
            </a>
            <a href="#" className={classes.navbar__item}>
                <span className={`${classes.icon} material-icons`}>mail</span>
                Messages
            </a>
            <a href="#" className={classes.navbar__item}>
                <span className={`${classes.icon} material-icons`}>event</span>
                News
            </a>
            <a href="#" className={classes.navbar__item}>
                <span className={`${classes.icon} material-icons`}>queue_music</span>
                Music
            </a>
            <a href="#" className={classes.navbar__item}>
                <span className={`${classes.icon} material-icons`}>settings</span>
                Settings
            </a>
        </nav>
    );
}
export default Navbar;
