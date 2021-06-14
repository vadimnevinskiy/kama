import React from 'react'
import classes from './Avatar.module.css'
import avatar from '../../../assets/images/avatar.png'

type PropsType ={
    smallPhoto: string
    largePhoto: string
}
const Avatar: React.FC<PropsType> = ({smallPhoto, largePhoto}) => {
    return (
        <div className={classes.avatarBlock}>
            <img className={classes.avatarImage}
                 src={smallPhoto != null ? smallPhoto : avatar} alt=""/>
            {
                largePhoto != null
                    ? <img className={classes.avatarLarge}
                           src={largePhoto != null ? largePhoto : avatar}
                           alt=""/>
                    : ''
            }
        </div>
    )
}

export default Avatar
