import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';

const LOGIN = 'LOGIN';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case TOOGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case LOGIN:
            return {...state, login: action.login}
        default:
            return state;
    }

}


export const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login
        }
    }
}
export const setLoginData = (email, password, rememberMe, captcha) => {
    return {
        type: LOGIN,
        data: {
            email,
            password,
            rememberMe,
            captcha
        }
    }
}

export const toogleIsFetching = (isFetching) => {
    return {
        type: TOOGLE_IS_FETCHING,
        isFetching: isFetching
    }
}


// THUNK CREATORS
export const authMe = () => (dispatch) => {
    authAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
}

// THUNK CREATORS
export const login = () => (dispatch) => {
    authAPI.login()
        .then(data => {
            if (data.resultCode === 0) {
                let {email, password, rememberMe, captcha} = data.data;
                dispatch(setLoginData(email, password, rememberMe, captcha));
            }
        });
}
export default authReducer;
