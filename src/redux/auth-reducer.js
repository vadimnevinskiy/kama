import {authAPI, securityAPI} from "../api/api";
import {FORM_ERROR} from 'final-form';

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_CAPTCHA = 'SET_CAPTCHA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captcha: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.captcha
            }
        default:
            return state;
    }

}


export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        },
    }
}

export const setCaptcha = (captchaUrl) => {
    return {
        type: SET_CAPTCHA,
        captcha: captchaUrl,
    }
}

// THUNK CREATORS
export const authMe = () => (dispatch) => {
    authAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    let data = await response;
    if (data.data.resultCode === 0) {
        dispatch(authMe());
    } else if (data.data.resultCode === 10) {
        dispatch(getCaptcha());
        return {[FORM_ERROR]: data.data.messages[0]};
    } else {
        return {[FORM_ERROR]: data.data.messages[0]};
    }
}

export const getCaptcha = () => (dispatch) => {
    securityAPI.getCaptcha()
        .then(response => {
            dispatch(setCaptcha(response.data.url))
        })
}


export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false, null));
            }
        });
}


export default authReducer;
