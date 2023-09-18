import SpotifyService from "../../services/spotify-services"
import { SET_ALBUMS, SET_LOAD } from "../slice/AlbumsSlisce";

export const getAlbumsSaved_thunks = () => {
    return async(dispatch, getState) => {
        dispatch( SET_LOAD() );
        setTimeout( async() => {

            const {data} = await SpotifyService.getAlbums()
            dispatch( SET_ALBUMS({albums: data.albums.items}) );
            
        }, 1000);
    }
}