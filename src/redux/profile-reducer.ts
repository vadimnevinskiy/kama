import {profileAPI, usersAPI} from "../api/api";
import {FORM_ERROR} from "final-form";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';

type PostType = {
    id: number
    text: string
    likes: number
}

type PhotoType = {
    small: string
    large: string
}
type ProfileContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileContactsType
    photos: PhotoType
}
type InitialStateProfileType = {
    posts: PostType[]
    postText: string
    profile: ProfileType | null
    status: string
};

let initialState: InitialStateProfileType = {
    posts: [
        {id: 0, text: 'Lorem ipsum dolor sit.', likes: 12},
        {id: 1, text: 'Mecessitatibus numquam obcaecati officia porro quia quis vel.', likes: 1},
        {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 2},
        {id: 3, text: 'Consequatur deleniti libero nam.', likes: 334}
    ],
    postText: '',
    profile: null,
    status: ''
};

const profileReducer = (state: InitialStateProfileType = initialState, action: addPostActionCreatorType | deletePostActionCreatorType | setUserProfileActionType | setStatusActionType | savePhotoSuccessActionType) => {
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
            };
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
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        }
        default:
            return state;
    }

}


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
    photos: string
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

export const savePhotoSuccess = (photos: any): savePhotoSuccessActionType => {
    return {
        type: SET_PHOTO,
        photos: photos
    }
}

// THUNK CREATORS
export const getProfile = (userId: number) => async (dispatch: any) => {
    let response = await usersAPI.getProfile(userId);
    if (response) {
        dispatch(setUserProfile(response));
    }
}


export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    if (response) {
        dispatch(setStatus(response.data));
    }
}


export const updateStatus = (status: string) => async (dispatch: any) => {
    try {
        let response = await profileAPI.updateStatus(status);
        if (response && response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (e) {
        if (e.message) {
            alert(e.message)
        }
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId));
    } else {
        return {[FORM_ERROR]: response.data.messages[0]};
        // return Promise.reject({[FORM_ERROR]: response.data.messages[0]});
        // return Promise.reject(response.data.messages[0]);
    }
}


export default profileReducer;
