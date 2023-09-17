import SpotifyService from "../../services/spotify-services"
import { SET_FEATUREDPLAYLISTS, SET_LOAD } from "../slice/FeaturedPlaylistsSlice";

export const getArtists_thunks = () => {
    return async(dispatch, getState) => {
        dispatch( SET_LOAD() );
        setTimeout( async() => {
            
            const {data} = await SpotifyService.getFeaturedPlaylists()
            dispatch( SET_FEATUREDPLAYLISTS({featuredPlaylists: data.playlists.items}) );
            
        }, 3000);
    }
}