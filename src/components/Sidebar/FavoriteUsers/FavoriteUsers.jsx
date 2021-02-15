import React from "react";
import classes from "./FavoriteUsers.module.css";

const FavoriteUsers = (props) => {
    let favorite = props.favorite.map((item) => {
        return (
            <div className={classes.favoriteItem} key={item.id}>
                <div className={classes.userPic}>
                    <img src={item.img} alt={''} />
                </div>
                <div className={classes.userName}>{item.name}</div>
            </div>
        );
    })
    return (
        <div className={classes.favorites}>
            {favorite}
        </div>
    );
}
export default FavoriteUsers;
