import React from "react";
import Sidebar from "./Sidebar";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {FavoriteType, NavbarType} from "../../types/types";
import {addFavorite, addNavbar} from "../../redux/sidebar-reducer";
import { compose } from "redux";
import {follow, pageChanged, requestUsers, unfollow} from "../../redux/users-reducer";

type MapStatePropsType = {
    navbar: NavbarType[]
    favorite: FavoriteType[]
}
type MapDispatchPropsType = {
    addNavbar: (navbar: NavbarType[]) => void
    addFavorite: (favorite: FavoriteType[]) => void
}
type OwnPropsType = {

}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

//Fake datas
let nav: NavbarType[] = [
    {id: 0, url: 'profile', name: 'Profile', icon: 'person'},
    // {id: 1, url: 'dialogs', name: 'Dialogs', icon: 'mail'},
    {id: 2, url: 'users', name: 'Users', icon: 'group_add'},
    // {id: 3, url: 'news', name: 'News', icon: 'event'},
    // {id: 4, url: 'music', name: 'Music', icon: 'queue_music'},
    // {id: 5, url: 'settings', name: 'Settings', icon: 'settings'},
    {id: 6, url: 'login', name: 'Login', icon: 'exit_to_app'}
]
let fav: FavoriteType[] = [
    // {id: 0, img: 'https://f3.mylove.ru/J1NuDGy2QF.jpg', name: 'Dima'},
    // {id: 1, img: 'https://f3.mylove.ru/J1NuDGy2QF.jpg', name: 'Vadim'},
    // {id: 2, img: 'https://f3.mylove.ru/J1NuDGy2QF.jpg', name: 'Katya'},
]

class SidebarContainer extends React.Component<PropsType>{
    componentDidMount(){
        this.props.addNavbar(nav)
        this.props.addFavorite(fav)
    }

    render() {
        return (
            <Sidebar navbar={this.props.navbar} favorite={this.props.favorite} />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        navbar: state.sidebar.navbar,
        favorite: state.sidebar.favorite
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
        mapStateToProps,
        {
            addNavbar: addNavbar,
            addFavorite: addFavorite
        }
    )
)(SidebarContainer)

