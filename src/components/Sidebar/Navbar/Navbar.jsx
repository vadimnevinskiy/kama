import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    let navlink = props.navbar.map((item) => {
        return (
            <NavLink to={'/' + item.url} className={classes.navbar__item} activeClassName={classes.active} key={item.id}>
                <span className={`${classes.icon} material-icons`}>{item.icon}</span>
                {item.name}
            </NavLink>
        );
    });
    return (
        <nav className={classes.navbar}>
            {navlink}
        </nav>
    );
}
export default Navbar;
