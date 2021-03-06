import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const WRITE_POST = 'WRITE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    posts: [
        {id: 0, text: 'Lorem ipsum dolor sit.', likes: 12},
        {id: 1, text: 'Mecessitatibus numquam obcaecati officia porro quia quis vel.', likes: 1},
        {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 2},
        {id: 3, text: 'Consequatur deleniti libero nam.', likes: 334}
    ],
    postText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                text: state.postText,
                likes: 0
            }
            return {
                ...state,
                postText: '',
                posts: [...state.posts, newPost]
            };
        }
        case WRITE_POST: {
            return {
                ...state,
                postText: action.post
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const writingPostActionCreator = (value) => {
    return {
        type: WRITE_POST,
        post: value
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}


// THUNK CREATORS
export const getProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
    });
}
export default profileReducer;
