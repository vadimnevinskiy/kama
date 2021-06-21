import {authMe} from './auth-reducer'
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const SET_INITIALIZED = 'app/SET_INITIALIZED'

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

const appReducer = (
    state: InitialStateType = initialState,
    action: ActionsTypes
): InitialStateType => {
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

type ActionsTypes = InitializedSuccessActionType
export type InitializedSuccessActionType = {
    type: typeof SET_INITIALIZED
}

export const initializedSuccess = (): InitializedSuccessActionType => {
    return {
        type: SET_INITIALIZED
    }
}

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

// THUNK CREATORS
export const initializeApp = (): ThunkType => async (dispatch) => {
    let promise = dispatch(authMe())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}


export default appReducer
