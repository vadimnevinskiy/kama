import React from 'react';
import loader from "../../../assets/images/downloadPreloader.gif";
import classes from './PreloaderBar.module.css';

let PreloaderBar = (props) => {
    return (
        <div className={classes.preloader}>
            <img src={loader} style={ {width: 220, height: 20} } alt="" />
        </div>
    )
}

export default PreloaderBar;
