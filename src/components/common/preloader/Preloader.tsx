import React from 'react'
import loader from '../../../assets/images/preloader.gif'
import classes from './Preloader.module.css'

type PropsType = {

}
let Preloader = () => {
    return (
        <div className={classes.preloader}>
            <img src={loader} style={ {width: 100, height: 100} } alt="" />
        </div>
    )
}

export default Preloader
