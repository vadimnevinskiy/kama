import Navbar from "./Navbar/Navbar";
import React from "react";
import classes from "./Sidebar.module.css";
import FavoriteUsers from "./FavoriteUsers/FavoriteUsers";


const Sidebar = (props) => {
    return (
        <aside className={classes.sidebar}>
            <Navbar navbar={props.sidebar.navbar}/>
            <FavoriteUsers favorite={props.sidebar.favorite}/>
        </aside>
    );
}
export default Sidebar;
