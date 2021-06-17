import Navbar from './Navbar/Navbar'
import React from 'react'
import classes from './Sidebar.module.css'
import FavoriteUsers from './FavoriteUsers/FavoriteUsers'
import {FavoriteType, NavbarType} from '../../types/types'



type PropsType = {
    navbar: NavbarType[]
    favorite: FavoriteType[]
}


const Sidebar: React.FC<PropsType> = (props) => {
    return (
        <aside className={classes.sidebar}>
            <Navbar navbar={props.navbar}/>
            <FavoriteUsers favorite={props.favorite}/>
        </aside>
    )
}
export default Sidebar
