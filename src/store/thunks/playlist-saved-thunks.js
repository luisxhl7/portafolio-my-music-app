import SpotifyService from "../../services/spotify-services"
import { SET_PLAYLISTS_SAVED, SET_lOADING_PLAYLISTS_SAVED } from "../slice/PlaylistsSavedSlice";

export const getPlaylistsSaved_thunks = () => {
    return async(dispatch, getState) => {
        dispatch( SET_lOADING_PLAYLISTS_SAVED() );
        setTimeout( async() => {
            const {data} = await SpotifyService.getPlaylistSaved()
            dispatch( SET_PLAYLISTS_SAVED({playlistSaved: data}) );
            
        }, 3000);
    }
}