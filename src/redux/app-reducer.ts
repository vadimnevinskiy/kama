import {authMe} from './auth-reducer'

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


// THUNK CREATORS
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(authMe())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}


export default appReducer
