import Navbar from './Navbar/Navbar'
import React from 'react'
import classes from './Sidebar.module.css'
import FavoriteUsers from './FavoriteUsers/FavoriteUsers'
import {FavoriteType, NavbarType} from '../../types/types'


type SidebarType = {
    navbar: NavbarType
    favorite: FavoriteType
}
type PropsType = {
    sidebar: SidebarType
}


const Sidebar: React.FC<PropsType> = (props) => {
    return (
        <aside className={classes.sidebar}>
            <Navbar navbar={props.sidebar.navbar}/>
            <FavoriteUsers favorite={props.sidebar.favorite}/>
        </aside>
    )
}
export default Sidebar
