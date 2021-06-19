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
            {
                props.navbar.length > 0 &&
                <Navbar navbar={props.navbar}/>
            }
            {
                props.favorite.length > 0 &&
                <FavoriteUsers favorite={props.favorite}/>
            }
        </aside>
    )
}
export default Sidebar
