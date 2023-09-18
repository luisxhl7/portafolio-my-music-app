import SpotifyService from "../../services/spotify-services"
import { SET_LOAD, SET_SEARCH } from "../slice/SearchSlice";

export const getSearch_thunks = (search) => {
    return async(dispatch, getState) => {
        dispatch( SET_LOAD() );
        setTimeout( async() => {
            const {data} = await SpotifyService.getSearch(search)
            dispatch( SET_SEARCH({search: data.playlists.items}) );
        }, 1000);
    }
}