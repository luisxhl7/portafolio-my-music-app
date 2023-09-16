import { SET_LOADING_TOKEN, SET_TOKEN } from "../slice/TokenSlice";

export const token_thunks = (accessToken) => {
    return async(dispatch, getState) => {
        await dispatch(SET_LOADING_TOKEN())
        await dispatch( SET_TOKEN({token: accessToken}) );
    
    }
}