import SpotifyService from "../../services/spotify-services"
import { SET_ALBUMS_SAVED, SET_lOAD } from "../slice/AlbumsSavedSlice";

export const getAlbumsSaved_thunks = () => {
    return async(dispatch, getState) => {
        dispatch( SET_lOAD() );
        setTimeout( async() => {
            const {data} = await SpotifyService.getAlbumsSaved()
            dispatch( SET_ALBUMS_SAVED({albumsSaved: data}) );
            
        }, 3000);
    }
}