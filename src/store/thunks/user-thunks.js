import SpotifyService from "../../services/spotify-services"
import { SET_LOADING, SET_USER } from "../slice/UserSlice"

export const getUser_thunks = () => {
    return async(dispatch, getState) => {
        dispatch( SET_LOADING() );
        setTimeout( async() => {
            const {data} = await SpotifyService.getUser()
            dispatch( SET_USER({user: data}) );
        }, 1000);
    }
}