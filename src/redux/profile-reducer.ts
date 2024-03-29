import {profileAPI, usersAPI} from '../api/api'
import {FORM_ERROR} from 'final-form'
import {ContactsType, PhotoType, PostType, ProfileType} from '../types/types'
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_PHOTO = 'SET_PHOTO'


type InitialStateProfileType = {
    posts: PostType[]
    postText: string
    profile: ProfileType | null
    status: string
}


let initialState: InitialStateProfileType = {
    posts: [
        {id: 0, text: 'Lorem ipsum dolor sit.', likes: 12},
        {id: 1, text: 'Mecessitatibus numquam obcaecati officia porro quia quis vel.', likes: 1},
        {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 2},
        {id: 3, text: 'Consequatur deleniti libero nam.', likes: 334}
    ],
    postText: '',
    profile: null as ProfileType | null,
    status: ''
}

const profileReducer = (
    state: InitialStateProfileType = initialState,
    action: ActionsTypes
): InitialStateProfileType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                text: action.postText,
                likes: 0
            }
            return {
                ...state,
                postText: '',
                posts: [...state.posts, newPost]
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType // https://youtu.be/7s8RJw6uWsQ?list=PLcvhF2Wqh7DM3z1XqMw0kPuxpbyMo3HvN&t=3252
            }
        }
        default:
            return state
    }
}

type ActionsTypes =  addPostActionCreatorType | deletePostActionCreatorType |
    setUserProfileActionType | setStatusActionType | savePhotoSuccessActionType

type addPostActionCreatorType = {
    type: typeof ADD_POST,
    postText: string
}
type deletePostActionCreatorType = {
    type: typeof DELETE_POST,
    postId: number
}
type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
type setStatusActionType = {
    type: typeof SET_STATUS,
    status: string
}
type savePhotoSuccessActionType = {
    type: typeof SET_PHOTO,
    photos: PhotoType
}

export const addPostActionCreator = (postText: string): addPostActionCreatorType => {
    return {
        type: ADD_POST,
        postText: postText
    }
}
export const deletePostActionCreator = (postId: number): deletePostActionCreatorType => {
    return {
        type: DELETE_POST,
        postId: postId
    }
}
export const setUserProfile = (profile: ProfileType): setUserProfileActionType => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}
export const setStatus = (status: string): setStatusActionType => {
    return {
        type: SET_STATUS,
        status: status
    }
}
export const savePhotoSuccess = (photos: PhotoType): savePhotoSuccessActionType => {
    return {
        type: SET_PHOTO,
        photos: photos
    }
}


type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<any | void>, AppStateType, unknown, ActionsTypes>

// THUNK CREATORS
export const getProfile = (userId: number | null): ThunkType => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    if (response) {
        dispatch(setUserProfile(response))
    }
}
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    if (response) {
        dispatch(setStatus(response.data))
    }
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if (response && response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (e) {
        if (e.message) {
            alert(e.message)
        }
    }
}
export const savePhoto = (file: any): ThunkType => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos))
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId))
    } else {
        return {[FORM_ERROR]: response.data.messages[0]}
    }
}


export default profileReducer
