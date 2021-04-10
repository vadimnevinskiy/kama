import React from "react";
import classes from "./Paginator.module.css";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pagesCount > i && i > (pagesCount - 10)) {
            pages.push(i);
        }
    }


    return (
        <div className={classes.paginator}>
            {
                pages.map(p => {
                    if (currentPage === p) {
                        return (
                            <span key={p} className={classes.selectedPage}>{p}</span>
                        )
                    } else {
                        return (
                            <span key={p}
                                  onClick={(e) => {
                                      onPageChanged(p)
                                  }}>{p}</span>
                        )
                    }
                })
            }
        </div>
    )
}

export default Paginator;
