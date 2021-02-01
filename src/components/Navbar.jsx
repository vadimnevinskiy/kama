import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <a href="#" className={`${classes.navbar__item} ${classes.navbar__item_active}`}>Profile</a>
            <a href="#" className={classes.navbar__item}>Messages</a>
            <a href="#" className={classes.navbar__item}>News</a>
            <a href="#" className={classes.navbar__item}>Music</a>
            <a href="#" className={classes.navbar__item}>Settings</a>
        </nav>
    );
}
export default Navbar;
