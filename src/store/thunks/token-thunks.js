import { SET_TOKEN } from "../slice/TokenSlice";

export const token_thunks = () => {
    return async(dispatch, getState) => {
        dispatch( SET_TOKEN({token: localStorage.getItem('accessToken')}) );
    }
}