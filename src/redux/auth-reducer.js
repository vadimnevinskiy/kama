import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';

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
            return { ...state, isFetching: action.isFetching }
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


export const toogleIsFetching = (isFetching) => {
    return {
        type: TOOGLE_IS_FETCHING,
        isFetching: isFetching
    }
}


// THUNK CREATORS
export const authMe = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(data => {
                if(data.resultCode === 0){
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
}

export default authReducer;
