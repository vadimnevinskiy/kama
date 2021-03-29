import {authAPI, securityAPI} from "../api/api";
import {FORM_ERROR} from 'final-form';
import {authMe} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';


let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }

}


export const initializedSuccess = () => {
    return {
        type: SET_INITIALIZED
    }
}






// THUNK CREATORS
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe());
    promise.then(() => {
        dispatch(initializedSuccess());
    });
}









export default appReducer;
