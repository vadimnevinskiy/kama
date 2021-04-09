import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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
    let response = await profileAPI.updateStatus(status);
    if (response && response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;
