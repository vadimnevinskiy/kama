import {authAPI, securityAPI} from '../api/api';
import {FORM_ERROR} from 'final-form';

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_CAPTCHA = 'SET_CAPTCHA';

export type InitialStateAuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean
    captcha: string | null
};

let initialState: InitialStateAuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captcha: null
};

const authReducer = (state: InitialStateAuthType = initialState, action: AuthUserDataActionType | CaptchaActionType): InitialStateAuthType => {
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

type PayloadAuthUserDataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type AuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: PayloadAuthUserDataType,
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): AuthUserDataActionType => {
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

export type CaptchaActionType = {
    type: typeof SET_CAPTCHA
    captcha: string
}
export const setCaptcha = (captchaUrl: string): CaptchaActionType => {
    return {
        type: SET_CAPTCHA,
        captcha: captchaUrl,
    }
}




// THUNK CREATORS
export const authMe = () => async (dispatch: any) => {
    let response = await authAPI.authMe();
    if (response && response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

}

export const login = (email: string, password: string, rememberMe: boolean, captcha: boolean) => async (dispatch: any) => {
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

export const getCaptcha = () => async (dispatch: any) => {
    let response = await securityAPI.getCaptcha()
    if(response) {
        dispatch(setCaptcha(response.data.url))
    }
}


export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()
    if(response) {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}


export default authReducer