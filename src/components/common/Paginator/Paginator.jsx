import React, {useState} from "react";
import classes from "./Paginator.module.css";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        // if (pagesCount > i && i > (pagesCount - 10)) {
        //     pages.push(i);
        // }
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return (
        <div className={classes.paginator}>
            {
                portionNumber > 1 &&
                <span
                    className={classes.iconBtn + ' ' + "material-icons"}
                    onClick={() => {setPortionNumber(1)}}
                >first_page</span>
            }
            {
                portionNumber > 1 &&
                <span
                    className={classes.iconBtn + ' ' + "material-icons"}
                    onClick={() => {setPortionNumber(portionNumber - 1)}}
                >chevron_left</span>
            }
            {
                pages
                    .filter(p => p >= leftPortionNumber && p < rightPortionNumber)
                    .map(p => {
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
            {
                portionCount > portionNumber &&
                <span
                    className={classes.iconBtn + ' ' + "material-icons"}
                    onClick={() => {setPortionNumber(portionNumber + 1)}}
                >chevron_right</span>
            }
            {
                portionCount > portionNumber &&
                <span
                    className={classes.iconBtn + ' ' + "material-icons"}
                    onClick={() => {setPortionNumber(portionCount)}}
                >last_page</span>
            }

        </div>
    )
}

export default Paginator;
