import {FavoriteType, NavbarType} from '../types/types'
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const SET_NAVBAR = 'SET_NAVBAR'
const SET_FAVORITE = 'SET_FAVORITE'


type InitialStateSidebarType = {
    navbar: NavbarType[]
    favorite: FavoriteType[]
}
let initialState: InitialStateSidebarType = {
    navbar: [],
    favorite: []
}

const sidebarReducer = (state: InitialStateSidebarType = initialState, action: ActionsTypes): InitialStateSidebarType => {
    switch (action.type) {
        case SET_NAVBAR:
            return {
                ...state,
                navbar: action.navbar
            }
        case SET_FAVORITE:
            return {
                ...state,
                favorite: action.favorite
            }
    }
    return state
}

type ActionsTypes = NavbarActionType | FavoriteActionType
type NavbarActionType = {
    type: typeof SET_NAVBAR
    navbar: NavbarType[]
}
type FavoriteActionType = {
    type: typeof SET_FAVORITE
    favorite: FavoriteType[]
}

export const setNavbar = (navbar: NavbarType[]): NavbarActionType => {
    return {
        type: SET_NAVBAR,
        navbar: navbar
    }
}
export const setFavorite = (favorite: FavoriteType[]): FavoriteActionType => {
    return {
        type: SET_FAVORITE,
        favorite: favorite
    }
}

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const addNavbar = (navbar: NavbarType[]): ThunkType => {
  return async (dispatch) => {
      dispatch(setNavbar(navbar))
  }
}
export const addFavorite = (favorite: FavoriteType[]): ThunkType => {
    return async (dispatch) => {
        dispatch(setFavorite(favorite))
    }
}

export default sidebarReducer
