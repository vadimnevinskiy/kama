import {profileAPI, usersAPI} from "../api/api";
import {FORM_ERROR} from "final-form";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';

let initialState = {
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

const profileReducer = (state = initialState, action) => {
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

export const addPostActionCreator = (postText) => {
    return {
        type: ADD_POST,
        postText: postText
    }
}

export const deletePostActionCreator = (postId) => {
    return {
        type: DELETE_POST,
        postId: postId
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status
    }
}
export const savePhotoSuccess = (photos) => {
    return {
        type: SET_PHOTO,
        photos: photos
    }
}

// THUNK CREATORS
export const getProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    if (response) {
        dispatch(setUserProfile(response));
    }
}


export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    if (response) {
        dispatch(setStatus(response.data));
    }
}


export const updateStatus = (status) => async (dispatch) => {
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

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
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
