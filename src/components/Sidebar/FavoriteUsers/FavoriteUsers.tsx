import React from 'react'
import classes from './FavoriteUsers.module.css'
import {FavoriteType} from '../../../types/types'


type PropsType = {
    favorite: FavoriteType[]
}
const FavoriteUsers: React.FC<PropsType> = (props) => {
    let favorite = props.favorite.map((item) => {
        return (
            <div className={classes.favoriteItem} key={item.id}>
                <div className={classes.userPic}>
                    <img src={item.img} alt={''} />
                </div>
                <div className={classes.userName}>{item.name}</div>
            </div>
        )
    })
    return (
        <div className={classes.favorites}>
            {favorite}
        </div>
    )
}
export default FavoriteUsers
