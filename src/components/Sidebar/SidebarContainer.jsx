import React from "react";
import StoreContext from "../../StoreContext";
import Sidebar from "./Sidebar";

const SidebarContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    return (
                        <Sidebar sidebar={state.sidebar} />
                    )
                }
            }
        </StoreContext.Consumer>

    );
}
export default SidebarContainer;
