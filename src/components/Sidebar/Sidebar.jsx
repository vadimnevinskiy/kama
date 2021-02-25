import Navbar from "./Navbar/Navbar";
import React from "react";
import classes from "./Sidebar.module.css";
import FavoriteUsers from "./FavoriteUsers/FavoriteUsers";

const Sidebar = (props) => {
    let state = props.store.getState();
    return (
        <aside className={classes.sidebar}>
            <Navbar navbar={state.sidebar.navbar}/>
            <FavoriteUsers favorite={state.sidebar.favorite}/>
        </aside>
    );
}
export default Sidebar;
