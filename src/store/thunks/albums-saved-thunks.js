import SpotifyService from "../../services/spotify-services"
import { SET_ALBUMS_SAVED, SET_lOADING_ALBUMS_SAVED } from "../slice/AlbumsSavedSlice";

export const getAlbumsSaved_thunks = () => {
    return async(dispatch, getState) => {
        dispatch( SET_lOADING_ALBUMS_SAVED() );
        setTimeout( async() => {
            const {data} = await SpotifyService.getAlbumsSaved()
            dispatch( SET_ALBUMS_SAVED({albumsSaved: data}) );
            
        }, 3000);
    }
}