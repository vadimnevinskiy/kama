import React from "react";
import Sidebar from "./Sidebar";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {FavoriteType, NavbarType} from "../../types/types";

type MapStatePropsType = {
    navbar: NavbarType[]
    favorite: FavoriteType[]
}
type MapDispatchPropsType = {

}
type OwnPropsType = {

}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType




const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        navbar: state.sidebar.navbar,
        favorite: state.sidebar.favorite
    }
}
const mapDispatchToProps = () => {
    return {

    }
}
const SidebarContainer =
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
        mapStateToProps,
        mapDispatchToProps
    )
(Sidebar);
export default SidebarContainer
