import SpotifyService from "../../services/spotify-services"
import { SET_ARTISTS, SET_LOAD } from "../slice/ArtistsSlice";

export const getArtists_thunks = () => {
    return async(dispatch, getState) => {
        dispatch( SET_LOAD() );
        setTimeout( async() => {
            const {data} = await SpotifyService.getArtists()
            console.log(data.artists)
            dispatch( SET_ARTISTS({artists: data.artists}) );
            
        }, 3000);
    }
}